type Event = {type: string; text?: string; message?: string; detail?: string; [key: string]: any};
export async function readAiResponse(response: Response, onEvent: (event: Event) => void) {
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.detail || "AI guidance is unavailable.");
  }
  if (!response.headers.get("content-type")?.includes("application/x-ndjson")) return response.json();
  if (!response.body) throw new Error("The response stream is unavailable.");
  const reader = response.body.getReader(), decoder = new TextDecoder();
  let buffer = "", final: Event | undefined;
  function consume(line: string) {
    if (!line.trim()) return;
    const event: Event = JSON.parse(line);
    if (event.type === "error") throw new Error(event.detail || "The answer was interrupted.");
    onEvent(event);
    if (event.type === "done") final = event;
  }
  try {
    while (true) {
      const {value, done} = await reader.read();
      if (done) {buffer += decoder.decode(); break;}
      buffer += decoder.decode(value, {stream:true});
      let newline;
      while ((newline = buffer.indexOf("\n")) >= 0) {consume(buffer.slice(0,newline));buffer=buffer.slice(newline+1);}
    }
    consume(buffer);
    if (!final) throw new Error("The connection ended before the answer was complete. Please try again.");
    return final;
  } finally {await reader.cancel().catch(()=>{});reader.releaseLock();}
}

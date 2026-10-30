import ReactMarkdown from "react-markdown";
export function AiMarkdown({ text }: {text: string}) {
  return <div className="ai-markdown"><ReactMarkdown skipHtml components={{
    a: ({children, href}) => <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>,
    img: ({alt}) => <span>{alt || ""}</span>,
  }}>{text}</ReactMarkdown></div>;
}

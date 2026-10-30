export function publicGuide(message: string) {
  const q = message.toLowerCase();
  if (/domain|reserv|registr|renew/.test(q))
    return {
      answer:
        "Start with the domain search on our Launchpad page. When the registrar connection is active, you can check availability and continue to a timed quote and registration in your workspace. If live search is not connected or your extension needs review, request help from the team. A search or payment does not itself reserve the name: it is secured only after successful registrar confirmation. Eligible verified businesses that fully pay for a domain through Prodvestor can receive a scoped website build and basic brand identity at no build fee. Hosting, renewals, mail plans and additional features are priced separately.",
      href: "/launchpad#domain-request",
      title: "Domains and Launchpad",
    };
  if (/price|cost|free|launchpad|website/.test(q))
    return {
      answer:
        "Launchpad helps eligible verified businesses get a professional website, basic brand identity and business email setup with no build fee after purchasing a domain through Prodvestor. Domain fees, ongoing hosting, mail plans and additional development are separate. The 14-day build window begins after verification, domain registration and scope acceptance. Custom software, mobile apps and AI projects require a separate agreed scope and quote.",
      href: "/launchpad",
      title: "What Launchpad includes",
    };
  if (/hospital|school|universit|institution|software|system/.test(q))
    return {
      answer:
        "We scope custom systems for hospitals, schools, universities, retailers and other organizations. Examples include appointments and administration, admissions and fees, customer portals, inventory and reporting. We can customize suitable software, connect your existing tools or build from scratch. Tell the team about your users, current process and priorities so we can recommend a suitable approach and quote.",
      href: "/solutions",
      title: "Industry solutions",
    };
  if (/\bai\b|agent|automat|intelligence/.test(q))
    return {
      answer:
        "We develop AI applications around practical business needs: knowledge assistants that use approved documents, document processing, conversational and voice experiences, analytics, and agents that coordinate multi-step workflows. Projects include data preparation, integrations, evaluation and appropriate human approval. Capabilities and costs are agreed during discovery; an AI assistant cannot guarantee results or authorize purchases.",
      href: "/ai",
      title: "AI and automation",
    };
  if (/career|job|hiring/.test(q))
    return {
      answer:
        "For career enquiries, contact career@prodvestor.com. The website does not currently publish a verified list of open positions; please ask the team about current opportunities.",
      href: "/contact",
      title: "Contact Prodvestor",
    };
  if (/africa|country|international|location|kenya/.test(q))
    return {
      answer:
        "Prodvestor is based in Nairobi and welcomes enquiries from businesses and institutions in other markets. Entrepreneurs and organizations across East Africa and the wider African business community are especially encouraged to participate. The team confirms service availability, registration requirements and payment options for your engagement before you commit.",
      href: "/mission",
      title: "Our mission",
    };
  return {
    answer:
      "Prodvestor helps you establish a professional business presence, build custom software and put AI to practical use. Start with Launchpad for a website and brand, explore industry solutions for operational systems, or discuss AI and automation for your workflows. Tell us what your business does and the problem you want to solve. For a specific quote, account issue or a question beyond these published guides, our team can help at enquiries@prodvestor.com.",
    href: "/contact",
    title: "Discuss your project",
  };
}

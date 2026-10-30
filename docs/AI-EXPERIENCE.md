# Prodvestor AI experience

Research and implementation: 30 October 2026. This is a design rationale, not a claim of measured conversion improvement. Validate with real customers after deployment.

## Evidence and decisions

- [Nielsen Norman Group, AI chatbot guidelines, April 2026](https://www.nngroup.com/articles/ai-chatbots-design-guidelines/): use relevant suggested questions, keep help reachable across pages, provide room for answers, and avoid jumping to the end of a long response. Applied through navigation access, contextual prompts and scrolling to the beginning of the latest answer.
- [Microsoft Fluent responsible AI](https://fluent2.microsoft.design/responsible-AI): communicate capability, data scope and user control. Applied through explicit public-data boundaries, AI versus published-guide labels, stop/edit/clear controls, and editable enquiry handoff.
- [IBM Carbon for AI](https://www.carbondesignsystem.com/building-blocks/foundations/carbon-for-ai): consistent identification and explainability. Applied through a restrained shared AI identity and expandable sources.
- [Notion search](https://www.notion.com/help/search): an example of assistance integrated into navigation and keyboard access. Prodvestor uses navigation and Cmd/Ctrl+K; this is a product-specific adaptation, not a claim that Notion's interface is universally best.
- [UK intelligence community AI patterns](https://design.sis.gov.uk/patterns/ai/): clear task language and proportionate use. Domain search and enquiry forms remain direct actions; assistance explains and helps plan.
- [Microsoft HAX](https://www.microsoft.com/en-us/research/project/guidelines-for-human-ai-interaction/): established guidance for communicating capabilities and correction. These are foundational principles, not new 2026 findings.

## Implemented interaction

Visitors enter through Ask AI in navigation, the homepage question panel, or a relevant service prompt. A native dialog provides keyboard focus containment, Escape dismissal, a task selector, question composer and an answer reading area. There is no floating chat bubble. Small screens use the full viewport.

Questions are submitted deliberately; suggested questions populate the composer. Answers distinguish live AI from deterministic published guidance. Source titles appear when supplied by the retrieval service. Earlier questions collapse to keep the latest answer readable. Copy, edit, stop and clear controls remain available. A visitor may transfer an answer into the enquiry form, edit it, and explicitly submit it. This action does not create or approve a project automatically.

Conversation state is in React memory and disappears on reload. Only an explicitly selected enquiry brief is transferred via sessionStorage and removed when consumed. Public assistant requests never access private workspace records. Do not include secrets or sensitive records. Provider processing still applies when live AI is configured; see privacy disclosures and the agents repository's public AI guide.

## Activation and verification

The existing server-side /api/ask gateway remains the integration boundary. Configure PUBLIC_AGENTS_API_URL and PUBLIC_AI_GATEWAY_KEY on the website and the matching key on agents. Provider credentials stay on agents. Without configuration the interface clearly presents published service guidance, not fabricated live AI.

Review desktop/mobile overflow, dialog focus and Escape, question submission, fallback labelling, source expansion and enquiry handoff. Follow up with customer usability sessions covering domain costs, choosing an institution solution and preparing a first project. Measure successful task completion and understandable answers rather than chatbot engagement alone.

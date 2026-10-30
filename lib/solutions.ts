export const solutions = [
  {
    slug: "healthcare",
    name: "Healthcare",
    audience: "Hospitals, clinics & care networks",
    headline: "Better systems. More room to care.",
    description:
      "Connected administrative and operational systems for healthcare organizations, designed around the people who use them.",
    modules: [
      "Patient registration and appointment workflows",
      "Electronic records and clinical workflow integrations",
      "Billing, claims and revenue operations",
      "Pharmacy, laboratory and inventory workflows",
      "Patient portals and secure communications",
      "Operational reporting and decision support",
    ],
    considerations:
      "Healthcare projects need agreed clinical responsibilities, privacy controls, access policies, interoperability, and applicable regulatory review. AI must not make unsupervised clinical decisions.",
    outcome:
      "Connect care operations, reduce disconnected administration, and give authorized teams the right information at the right time.",
  },
  {
    slug: "schools",
    name: "Schools",
    audience: "Primary schools, high schools & school groups",
    headline: "A clearer school day. For everyone.",
    description:
      "School management systems that bring administration, teachers, learners, and parents into a coordinated experience.",
    modules: [
      "Admissions, enrollment and student records",
      "Fees, invoicing and reconciliation",
      "Attendance, timetables and academic reporting",
      "Learning portals and content integrations",
      "Parent communication and service requests",
      "Transport, library and resource management",
    ],
    considerations:
      "Projects involving learners require age-appropriate access, safeguarding, consent and privacy design, and clear school ownership of records.",
    outcome:
      "Make everyday school workflows easier to follow while keeping students, parents, and staff informed.",
  },
  {
    slug: "universities",
    name: "Universities & colleges",
    audience: "Universities, TVETs & higher education networks",
    headline: "An institution connected to its potential.",
    description:
      "Integrated institutional systems for the student journey, academic operations, research, and administration.",
    modules: [
      "Student information and admissions",
      "Course registration, scheduling and academic records",
      "Learning-management and student portals",
      "Finance, procurement and administrative workflows",
      "Research, grants and knowledge repositories",
      "Alumni, careers and institutional analytics",
    ],
    considerations:
      "Academic records, identity federation, accessibility, retention, and integration with existing systems need an institution-approved architecture.",
    outcome:
      "Connect departments and services around a consistent institutional experience.",
  },
  {
    slug: "retail",
    name: "Retail & commerce",
    audience: "Retailers, wholesalers & growing brands",
    headline: "From the first order to what’s next.",
    description:
      "Commerce, stock, customer, and back-office systems that reflect the way your business actually operates.",
    modules: [
      "E-commerce and product catalogues",
      "Point-of-sale and order management",
      "Inventory, purchasing and warehouse workflows",
      "Customer relationships and loyalty",
      "Payments and reconciliation integrations",
      "Sales, margin and demand reporting",
    ],
    considerations:
      "Payment scope, inventory accuracy, returns, tax requirements, and integrations are defined before implementation.",
    outcome:
      "Connect buying, selling, fulfillment, and customer service in a practical operating system.",
  },
  {
    slug: "logistics",
    name: "Logistics & mobility",
    audience: "Transport, delivery & supply-chain teams",
    headline: "Keep your operations moving.",
    description:
      "Purpose-built coordination tools for dispatch, fleet, warehouse, delivery, and supplier workflows.",
    modules: [
      "Dispatch and delivery management",
      "Fleet and maintenance records",
      "Shipment visibility and proof of delivery",
      "Warehouse and supplier integrations",
      "Customer and partner portals",
      "Operational analytics and route planning",
    ],
    considerations:
      "Location data, worker privacy, connectivity, device security, and integration rights must be agreed for each deployment.",
    outcome:
      "Give teams a clearer picture of orders, assets, handovers, and exceptions.",
  },
  {
    slug: "financial-services",
    name: "Financial services",
    audience: "SACCOs, fintechs & finance operations",
    headline: "Clarity where trust matters most.",
    description:
      "Secure business software and integration projects for regulated organizations and financial operations.",
    modules: [
      "Member and customer service portals",
      "Account and transaction workflow integrations",
      "Reconciliation and operational reporting",
      "Document intake and review support",
      "Risk, access and audit workflows",
      "Customer-support and knowledge assistants",
    ],
    considerations:
      "Licensing, financial controls, security testing, data protection, provider approvals, and regulatory obligations are institution-specific. We do not imply a banking license or replace required professional review.",
    outcome:
      "Reduce disconnected processes while keeping accountable humans in control of financial decisions.",
  },
  {
    slug: "hospitality",
    name: "Hospitality & travel",
    audience: "Hotels, venues, restaurants & travel businesses",
    headline: "A better experience, behind every stay.",
    description:
      "Digital guest and operational experiences for businesses built around service.",
    modules: [
      "Booking and reservation workflows",
      "Guest portals and communications",
      "Restaurant, room and service operations",
      "Inventory and supplier management",
      "Payments and channel integrations",
      "Service analytics and support automation",
    ],
    considerations:
      "Channel/provider terms, payment handling, guest privacy, availability rules, and operational support are scoped before delivery.",
    outcome:
      "Connect guest interactions with the systems your team relies on every day.",
  },
  {
    slug: "agriculture",
    name: "Agriculture & cooperatives",
    audience: "Agribusinesses, producers & cooperatives",
    headline: "Stronger systems. From field to market.",
    description:
      "Practical digital tools for agricultural operations, member services, traceability, and market coordination.",
    modules: [
      "Producer and cooperative member records",
      "Collection, inventory and traceability",
      "Procurement and distribution workflows",
      "Field data capture and reporting",
      "Buyer and supplier portals",
      "Forecasting and operational decision support",
    ],
    considerations:
      "Connectivity, consent, geographic data, device access, and the quality of field inputs shape the solution. Predictions need human review and local validation.",
    outcome:
      "Make operational information usable across the people and processes connecting production to market.",
  },
  {
    slug: "public-sector",
    name: "Public sector & nonprofits",
    audience: "Institutions, NGOs & community programs",
    headline: "Systems that serve people better.",
    description:
      "Accessible service portals and operational software for organizations delivering public or social outcomes.",
    modules: [
      "Applications and case-management workflows",
      "Citizen, beneficiary or partner portals",
      "Program and grant administration",
      "Document and approval workflows",
      "Procurement and resource reporting",
      "Knowledge access and service-desk automation",
    ],
    considerations:
      "Public procurement, accessibility, records policy, confidentiality, safeguarding, and accountable decision-making must be agreed with the institution.",
    outcome:
      "Create clearer, more accessible services with traceable processes behind them.",
  },
  {
    slug: "enterprise",
    name: "Enterprise & professional services",
    audience: "Growing companies, manufacturers & professional teams",
    headline: "Your business. Working as one.",
    description:
      "Custom business applications and integrations for organizations outgrowing disconnected tools.",
    modules: [
      "ERP and departmental workflow systems",
      "CRM, sales and customer service",
      "HR, workforce and internal portals",
      "Manufacturing, inventory and procurement",
      "Document, approval and knowledge workflows",
      "Mobile apps, APIs and legacy modernization",
    ],
    considerations:
      "We begin with your operating model, integration constraints, data ownership, security needs, and delivery priorities. Existing foundations are reused where appropriate; bespoke systems are built where needed.",
    outcome:
      "Bring the right processes together without forcing your organization into an unsuitable template.",
  },
] as const;

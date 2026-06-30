/* ITIL V5 Learning Dashboard — Phase 3 content file
   Learning content is intentionally separate from app logic. */
const CONTENT_VERSION = "4.1";


const MIND_MAPS = {
  "four-dimensions": [
    {
      "title": "Four Dimensions Overview",
      "subtitle": "A holistic view of product and service management.",
      "branches": [
        {
          "title": "Organizations and People",
          "items": [
            "Culture, roles, responsibilities and skills.",
            "Training and adoption affect service success.",
            "People are not separate from value creation."
          ]
        },
        {
          "title": "Information and Technology",
          "items": [
            "Information, data, knowledge and tools.",
            "Applications, infrastructure and integration.",
            "Technology must support value, not dominate it."
          ]
        },
        {
          "title": "Partners and Suppliers",
          "items": [
            "External and internal suppliers.",
            "Sourcing decisions and contracts.",
            "Supplier performance affects service quality."
          ]
        },
        {
          "title": "Value Streams and Processes",
          "items": [
            "Activities organised to create and deliver value.",
            "Value streams show end-to-end flow.",
            "Processes provide repeatable activities."
          ]
        },
        {
          "title": "External Factors",
          "items": [
            "Political, economic, social, technological, legal and environmental influences.",
            "External factors can affect all four dimensions."
          ]
        }
      ],
      "note": "Validation note: Use this as a learning aid and as a first validation layer for related practice questions."
    },
    {
      "title": "Organizations and People",
      "subtitle": "Culture, roles, responsibilities, skills and working practices.",
      "branches": [
        {
          "title": "Culture",
          "items": [
            "Shapes behaviour and adoption.",
            "Can support or block improvement.",
            "Must align with service goals."
          ]
        },
        {
          "title": "Roles and Responsibilities",
          "items": [
            "Clarify accountability.",
            "Reduce confusion in service work.",
            "Support effective handoffs and collaboration."
          ]
        },
        {
          "title": "Skills and Competence",
          "items": [
            "Training supports new ways of working.",
            "AI and digital products require new capabilities.",
            "Capability gaps create risk."
          ]
        },
        {
          "title": "Structure",
          "items": [
            "Teams, reporting lines and decision paths.",
            "Silos can harm value streams.",
            "Structure should support value creation."
          ]
        }
      ],
      "note": "Validation note: Use this as a learning aid and as a first validation layer for related practice questions."
    },
    {
      "title": "Information and Technology",
      "subtitle": "The data, knowledge, tools and technology used to enable products and services.",
      "branches": [
        {
          "title": "Information and Knowledge",
          "items": [
            "Information must be accurate and useful.",
            "Knowledge supports decisions and support work.",
            "Poor knowledge increases repeat work."
          ]
        },
        {
          "title": "Technology and Tools",
          "items": [
            "Applications, platforms and infrastructure.",
            "Tools should enable the process.",
            "A new tool alone does not create value."
          ]
        },
        {
          "title": "Data Quality",
          "items": [
            "Data must be managed and protected.",
            "Bad data weakens reporting and AI.",
            "Security and privacy must be considered."
          ]
        },
        {
          "title": "Integration",
          "items": [
            "Technology components must work together.",
            "Poor integration creates delays and errors.",
            "Architecture supports reliable service delivery."
          ]
        }
      ],
      "note": "Validation note: Use this as a learning aid and as a first validation layer for related practice questions."
    },
    {
      "title": "Partners and Suppliers",
      "subtitle": "How external and internal supplier relationships support service value.",
      "branches": [
        {
          "title": "Partners",
          "items": [
            "Shared objectives and closer collaboration.",
            "Often strategic and longer term.",
            "May contribute to innovation."
          ]
        },
        {
          "title": "Suppliers",
          "items": [
            "Provide goods or services under agreement.",
            "Performance affects service quality.",
            "Contracts should support outcomes."
          ]
        },
        {
          "title": "Sourcing Choices",
          "items": [
            "Insourcing, outsourcing and multi-sourcing.",
            "Risk, cost and capability must be assessed.",
            "Cloud providers create dependency considerations."
          ]
        },
        {
          "title": "Supplier Risk",
          "items": [
            "Third-party failure can affect service availability.",
            "Governance and monitoring are needed.",
            "Supplier relationships must be managed actively."
          ]
        }
      ],
      "note": "Validation note: Use this as a learning aid and as a first validation layer for related practice questions."
    },
    {
      "title": "Value Streams and Processes",
      "subtitle": "How activities are organised and improved to create and deliver value.",
      "branches": [
        {
          "title": "Value Streams",
          "items": [
            "End-to-end series of steps.",
            "Transform demand into value.",
            "Can cross team and supplier boundaries."
          ]
        },
        {
          "title": "Processes",
          "items": [
            "Repeatable sequence of activities.",
            "Support consistency and control.",
            "Should not become unnecessary bureaucracy."
          ]
        },
        {
          "title": "Flow",
          "items": [
            "Handoffs can create delay.",
            "Bottlenecks reduce value delivery.",
            "Lead time and cycle time help measure performance."
          ]
        },
        {
          "title": "Improvement",
          "items": [
            "Map the current flow.",
            "Remove waste and unnecessary steps.",
            "Use continual improvement to optimise."
          ]
        }
      ],
      "note": "Validation note: Use this as a learning aid and as a first validation layer for related practice questions."
    },
    {
      "title": "External Factors",
      "subtitle": "PESTLE factors that influence products, services and the four dimensions.",
      "branches": [
        {
          "title": "Political",
          "items": [
            "Government policy and public sector direction.",
            "Can influence regulation and investment."
          ]
        },
        {
          "title": "Economic",
          "items": [
            "Budgets, inflation and cost pressure.",
            "Can affect sourcing and service levels."
          ]
        },
        {
          "title": "Social",
          "items": [
            "User expectations and workforce changes.",
            "Customer behaviour affects service design."
          ]
        },
        {
          "title": "Technological",
          "items": [
            "New technology creates opportunity and risk.",
            "AI, cloud and automation affect all dimensions."
          ]
        },
        {
          "title": "Legal and Environmental",
          "items": [
            "Compliance, privacy and regulation.",
            "Sustainability and environmental impact."
          ]
        }
      ],
      "note": "Validation note: Use this as a learning aid and as a first validation layer for related practice questions."
    }
  ],
  "service-value": [
    {
      "title": "Service Value and Co-Creation",
      "subtitle": "Value is created through interaction between provider and consumer.",
      "branches": [
        {
          "title": "Value",
          "items": [
            "Perceived benefit, usefulness and importance.",
            "Subjective and stakeholder dependent.",
            "Requires positive effects to outweigh negative effects."
          ]
        },
        {
          "title": "Co-Creation",
          "items": [
            "Provider and consumer both participate.",
            "Feedback and interaction matter.",
            "Value is not simply handed over by the provider."
          ]
        },
        {
          "title": "Utility and Warranty",
          "items": [
            "Utility is what the service does.",
            "Warranty is how well it performs.",
            "Both contribute to value."
          ]
        },
        {
          "title": "Outcomes and Outputs",
          "items": [
            "Outputs are deliverables.",
            "Outcomes are results achieved by stakeholders.",
            "Services enable outcomes."
          ]
        }
      ],
      "note": "Validation note: Use this as a learning aid and as a first validation layer for related practice questions."
    },
    {
      "title": "Products and Service",
      "subtitle": "How products, services, utility, warranty and value connect.",
      "branches": [
        {
          "title": "Product",
          "items": [
            "A configuration of resources.",
            "Designed to offer value to consumers.",
            "May support one or more services."
          ]
        },
        {
          "title": "Service",
          "items": [
            "Enables value co-creation.",
            "Helps consumers achieve outcomes.",
            "Does not require consumers to manage specific costs and risks."
          ]
        },
        {
          "title": "Utility",
          "items": [
            "What the service does.",
            "Fitness for purpose.",
            "The functionality that meets needs."
          ]
        },
        {
          "title": "Warranty",
          "items": [
            "How the service performs.",
            "Fitness for use.",
            "Availability, capacity, continuity and security."
          ]
        },
        {
          "title": "Experience and Sustainability",
          "items": [
            "Experience affects perceived value.",
            "Sustainability considers environmental, social and economic impact."
          ]
        }
      ],
      "note": "Validation note: Use this as a learning aid and as a first validation layer for related practice questions."
    }
  ],
  "service-relationships": [
    {
      "title": "Service Relationships",
      "subtitle": "The roles and interactions between provider, customer, user and sponsor.",
      "branches": [
        {
          "title": "Provider and Consumer",
          "items": [
            "Provider delivers and supports services.",
            "Consumer uses or receives services.",
            "Both participate in co-creation."
          ]
        },
        {
          "title": "Customer",
          "items": [
            "Defines requirements.",
            "Responsible for outcomes.",
            "May or may not be the user."
          ]
        },
        {
          "title": "User",
          "items": [
            "Uses the service.",
            "Experience affects perceived value.",
            "Provides feedback during the service journey."
          ]
        },
        {
          "title": "Sponsor",
          "items": [
            "Authorises budget.",
            "Supports service consumption financially.",
            "May be different from customer and user."
          ]
        },
        {
          "title": "Interactions",
          "items": [
            "Goods transfer.",
            "Access to resources.",
            "Service actions."
          ]
        }
      ],
      "note": "Validation note: Use this as a learning aid and as a first validation layer for related practice questions."
    }
  ],
  "itil-value-system": [
    {
      "title": "ITIL Value System",
      "subtitle": "How components work together to turn demand and opportunity into value.",
      "branches": [
        {
          "title": "Guiding Principles",
          "items": [
            "Recommendations for decisions and actions.",
            "Apply to all initiatives.",
            "Should be used together."
          ]
        },
        {
          "title": "Governance",
          "items": [
            "Evaluates, directs and monitors.",
            "Provides direction and oversight.",
            "Supports accountability."
          ]
        },
        {
          "title": "Service Value Chain",
          "items": [
            "Flexible operating model.",
            "Transforms demand into value.",
            "Uses interconnected activities."
          ]
        },
        {
          "title": "Management Practices",
          "items": [
            "Organisational capabilities.",
            "Support value chain activities.",
            "Used across service management."
          ]
        },
        {
          "title": "Continual Improvement",
          "items": [
            "Ongoing improvement at all levels.",
            "Applies to products, services and practices."
          ]
        }
      ],
      "note": "Validation note: Use this as a learning aid and as a first validation layer for related practice questions."
    }
  ],
  "governance": [
    {
      "title": "Governance",
      "subtitle": "Evaluate, direct and monitor the organisation.",
      "branches": [
        {
          "title": "Evaluate",
          "items": [
            "Assess strategy, risk and current position.",
            "Understand stakeholder needs.",
            "Consider options before direction is set."
          ]
        },
        {
          "title": "Direct",
          "items": [
            "Set policy, priorities and decision boundaries.",
            "Provide organisational direction.",
            "Guide management activity."
          ]
        },
        {
          "title": "Monitor",
          "items": [
            "Check performance and compliance.",
            "Confirm direction is being followed.",
            "Use evidence to oversee outcomes."
          ]
        },
        {
          "title": "Governance vs Management",
          "items": [
            "Governance gives direction and oversight.",
            "Management plans and executes.",
            "Do not confuse oversight with day-to-day operation."
          ]
        }
      ],
      "note": "Validation note: Use this as a learning aid and as a first validation layer for related practice questions."
    }
  ],
  "guiding-principles": [
    {
      "title": "ITIL Guiding Principles",
      "subtitle": "Seven recommendations that guide decisions and actions.",
      "branches": [
        {
          "title": "Focus on Value",
          "items": [
            "Link work to stakeholder value.",
            "Understand consumer perception.",
            "Avoid purely technical success measures."
          ]
        },
        {
          "title": "Start Where You Are",
          "items": [
            "Assess the current state.",
            "Reuse what is useful.",
            "Avoid unnecessary reinvention."
          ]
        },
        {
          "title": "Progress Iteratively with Feedback",
          "items": [
            "Use small manageable steps.",
            "Collect feedback regularly.",
            "Adjust based on evidence."
          ]
        },
        {
          "title": "Collaborate and Promote Visibility",
          "items": [
            "Work across teams.",
            "Make work visible.",
            "Use transparency to reduce risk."
          ]
        },
        {
          "title": "Think and Work Holistically",
          "items": [
            "Consider the whole system.",
            "Avoid local optimisation that harms the whole."
          ]
        },
        {
          "title": "Keep it Simple and Practical",
          "items": [
            "Remove work that does not add value.",
            "Avoid over-engineering."
          ]
        },
        {
          "title": "Optimize and Automate",
          "items": [
            "Improve before automating.",
            "Automation should support value."
          ]
        }
      ],
      "note": "Validation note: Use this as a learning aid and as a first validation layer for related practice questions."
    }
  ],
  "product-service-lifecycle": [
    {
      "title": "Product and Service Lifecycle",
      "subtitle": "Lifecycle activities used to manage products and services.",
      "branches": [
        {
          "title": "Discover",
          "items": [
            "Identify needs and opportunities.",
            "Understand demand and consumers."
          ]
        },
        {
          "title": "Design",
          "items": [
            "Define solution and requirements.",
            "Consider utility, warranty and experience."
          ]
        },
        {
          "title": "Acquire and Build",
          "items": [
            "Acquire from third parties where appropriate.",
            "Build, configure and test internally where appropriate."
          ]
        },
        {
          "title": "Transition",
          "items": [
            "Move into live use in a controlled way.",
            "Validate readiness and reduce risk."
          ]
        },
        {
          "title": "Operate, Deliver and Support",
          "items": [
            "Operate keeps services running.",
            "Deliver makes services available.",
            "Support handles issues and requests."
          ]
        }
      ],
      "note": "Validation note: Use this as a learning aid and as a first validation layer for related practice questions."
    },
    {
      "title": "Products and Service",
      "subtitle": "How products, services, utility, warranty and value connect.",
      "branches": [
        {
          "title": "Product",
          "items": [
            "A configuration of resources.",
            "Designed to offer value to consumers.",
            "May support one or more services."
          ]
        },
        {
          "title": "Service",
          "items": [
            "Enables value co-creation.",
            "Helps consumers achieve outcomes.",
            "Does not require consumers to manage specific costs and risks."
          ]
        },
        {
          "title": "Utility",
          "items": [
            "What the service does.",
            "Fitness for purpose.",
            "The functionality that meets needs."
          ]
        },
        {
          "title": "Warranty",
          "items": [
            "How the service performs.",
            "Fitness for use.",
            "Availability, capacity, continuity and security."
          ]
        },
        {
          "title": "Experience and Sustainability",
          "items": [
            "Experience affects perceived value.",
            "Sustainability considers environmental, social and economic impact."
          ]
        }
      ],
      "note": "Validation note: Use this as a learning aid and as a first validation layer for related practice questions."
    }
  ],
  "value-chain-practices": [
    {
      "title": "Value Chain and Practices",
      "subtitle": "How value chain activities and practices work together.",
      "branches": [
        {
          "title": "Value Chain Activities",
          "items": [
            "Plan, improve, engage, design and transition, obtain/build, deliver and support.",
            "Activities are flexible, not strictly linear."
          ]
        },
        {
          "title": "Practices",
          "items": [
            "Capabilities used to perform work.",
            "Examples include incident, problem, change and service level management."
          ]
        },
        {
          "title": "Demand to Value",
          "items": [
            "Demand and opportunity enter the system.",
            "Activities combine to create outcomes and value."
          ]
        },
        {
          "title": "Practice Support",
          "items": [
            "Practices support activities.",
            "They do not replace the value chain."
          ]
        }
      ],
      "note": "Validation note: Use this as a learning aid and as a first validation layer for related practice questions."
    }
  ],
  "value-streams-mapping": [
    {
      "title": "Value Streams and Mapping",
      "subtitle": "Using mapping to understand and improve flow.",
      "branches": [
        {
          "title": "Value Stream",
          "items": [
            "End-to-end steps that create and deliver value.",
            "Triggered by demand or need."
          ]
        },
        {
          "title": "Value Stream Mapping",
          "items": [
            "Visualises current flow.",
            "Identifies waste, bottlenecks and delays."
          ]
        },
        {
          "title": "Flow Metrics",
          "items": [
            "Lead time is end-to-end elapsed time.",
            "Cycle time is the time for an activity."
          ]
        },
        {
          "title": "Optimisation",
          "items": [
            "Reduce handoffs and waiting.",
            "Improve bottlenecks.",
            "Prioritise changes based on evidence."
          ]
        }
      ],
      "note": "Validation note: Use this as a learning aid and as a first validation layer for related practice questions."
    }
  ],
  "continual-improvement": [
    {
      "title": "Continual Improvement",
      "subtitle": "Ongoing improvement across products, services and practices.",
      "branches": [
        {
          "title": "Purpose",
          "items": [
            "Improve value, performance and outcomes.",
            "Applies at all organisational levels."
          ]
        },
        {
          "title": "Model",
          "items": [
            "What is the vision?",
            "Where are we now?",
            "Where do we want to be?",
            "How do we get there?",
            "Take action and evaluate results."
          ]
        },
        {
          "title": "Register",
          "items": [
            "Capture improvement ideas.",
            "Track opportunities and actions.",
            "Prioritise based on value."
          ]
        },
        {
          "title": "Measurement",
          "items": [
            "Use baselines and targets.",
            "Measure before and after changes.",
            "Use evidence to confirm improvement."
          ]
        }
      ],
      "note": "Validation note: Use this as a learning aid and as a first validation layer for related practice questions."
    }
  ],
  "itil-ai-frameworks": [
    {
      "title": "ITIL, AI and Other Frameworks",
      "subtitle": "How ITIL works with AI, Agile, DevOps, Lean and other frameworks.",
      "branches": [
        {
          "title": "AI in Service Management",
          "items": [
            "Supports automation, classification and insight.",
            "Requires data quality and governance.",
            "Human oversight remains important."
          ]
        },
        {
          "title": "Responsible AI",
          "items": [
            "Transparency, fairness and accountability.",
            "Manage bias, opacity and excessive dependency."
          ]
        },
        {
          "title": "Agile and DevOps",
          "items": [
            "Agile supports iterative delivery.",
            "DevOps supports collaboration and automation.",
            "ITIL adds service management structure."
          ]
        },
        {
          "title": "Lean, COBIT and ISO 20000",
          "items": [
            "Lean removes waste.",
            "COBIT supports governance and control.",
            "ISO 20000 defines service management system requirements."
          ]
        },
        {
          "title": "SRE, SIAM and PRINCE2",
          "items": [
            "SRE supports reliability engineering.",
            "SIAM integrates multiple suppliers.",
            "PRINCE2 manages projects that create or change services."
          ]
        }
      ],
      "note": "Validation note: Use this as a learning aid and as a first validation layer for related practice questions."
    }
  ]
};


const SECTIONS = [
  {
    id: "four-dimensions",
    order: 1,
    emoji: "🔲",
    title: "Four Dimensions",
    short: "The four perspectives that must be considered together when managing products and services.",
    color: "#1f6fa9",
    intro: "The four dimensions help avoid narrow thinking. A service can fail if it only focuses on technology and ignores people, suppliers, processes or external factors.",
    overview: [
      ["Organizations and People", "Covers structure, culture, roles, skills, responsibilities and how people work together."],
      ["Information and Technology", "Covers information, knowledge, data, applications, infrastructure and supporting technology."],
      ["Partners and Suppliers", "Covers relationships with third parties, suppliers, sourcing choices and contracts."],
      ["Value Streams and Processes", "Covers how work flows from demand to value, including activities, handoffs and process design."],
      ["External factors", "Political, economic, social, technological, legal and environmental factors can affect all four dimensions."],
    ],
    terms: [
      ["Organizations and People", "The dimension focused on people, culture, skills, roles and structure."],
      ["Information and Technology", "The dimension focused on data, information, knowledge, tools and technology."],
      ["Partners and Suppliers", "The dimension focused on sourcing and third-party relationships."],
      ["Value Streams and Processes", "The dimension focused on how activities are organised to create and deliver value."],
      ["PESTLE", "Political, economic, social, technological, legal and environmental external factors."],
    ],
    examFocus: [
      "Know the full names of the four dimensions.",
      "Avoid choosing technology-only answers when the question asks for a holistic approach.",
      "Recognise staff training and culture as Organizations and People.",
      "Recognise data, tools and systems as Information and Technology.",
      "Recognise third-party contracts and sourcing as Partners and Suppliers.",
    ],
    traps: [
      ["Technology-only thinking", "A new tool does not guarantee value if people, suppliers and workflows are ignored."],
      ["Supplier confusion", "A supplier relationship issue belongs mainly to Partners and Suppliers, not only Information and Technology."],
    ],
  },
  {
    id: "service-value",
    order: 2,
    emoji: "🤝",
    title: "Service Value and Co-Creation",
    short: "How value, utility, warranty, outcomes and experience combine in service management.",
    color: "#2aa6a1",
    intro: "Value is not simply delivered by the provider. It is co-created through interaction between the provider, consumer and other stakeholders.",
    overview: [
      ["Value", "The perceived benefit, usefulness and importance of something."],
      ["Co-creation", "Provider and consumer both contribute to value through active participation."],
      ["Utility", "What the service does. Often described as fitness for purpose."],
      ["Warranty", "How the service performs. Often described as fitness for use."],
      ["Experience", "The overall perception of the consumer when interacting with the service."],
      ["Sustainability", "The environmental, social and economic impact of products and services."],
    ],
    terms: [
      ["Utility", "Functionality that helps meet a need."],
      ["Warranty", "Assurance that a service will meet agreed requirements such as availability, capacity, continuity and security."],
      ["Outcome", "A result enabled for a stakeholder."],
      ["Output", "A tangible or intangible deliverable produced by an activity."],
      ["Experience", "The consumer's perception of interactions with a service and provider."],
    ],
    examFocus: [
      "Utility means what the service does.",
      "Warranty means how well the service performs and whether it is fit for use.",
      "Value depends on perception, not just technical performance.",
      "Outcomes are what stakeholders achieve; outputs are deliverables."],
    traps: [
      ["Output vs outcome", "An output is produced; an outcome is achieved by a stakeholder."],
      ["Warranty vs utility", "A useful service can still fail if it is unreliable, insecure or unavailable."],
    ],
  },
  {
    id: "service-relationships",
    order: 3,
    emoji: "🔗",
    title: "Service Relationships",
    short: "The roles and interactions between provider, customer, user, sponsor and suppliers.",
    color: "#7a5cff",
    intro: "Service relationships describe how providers and consumers work together. The customer, user and sponsor may be the same person, but they are different roles.",
    overview: [
      ["Service provider", "An organization or person that delivers and supports services."],
      ["Service consumer", "An organization or person that uses or consumes services."],
      ["Customer", "Defines requirements and takes responsibility for outcomes."],
      ["User", "Uses the service."],
      ["Sponsor", "Authorizes budget for service consumption."],
      ["Service interactions", "Can include transfer of goods, access to resources and service actions."],
    ],
    terms: [
      ["Customer", "The role that defines service requirements and is responsible for outcomes."],
      ["User", "The role that uses the service."],
      ["Sponsor", "The role that authorizes budget for service consumption."],
      ["Service offering", "A formal description of goods, access to resources and service actions."],
      ["Access to resources", "A service interaction where the consumer uses provider resources without taking ownership."],
    ],
    examFocus: [
      "Know customer, user and sponsor role differences.",
      "Recognise access to resources, goods transfer and service actions.",
      "Understand that value comes from interaction, not one-way delivery."],
    traps: [
      ["Customer vs user", "The user uses the service, but the customer defines requirements."],
      ["Sponsor vs customer", "The sponsor authorizes budget; the customer owns requirements and outcomes."],
    ],
  },
  {
    id: "itil-value-system",
    order: 4,
    emoji: "⚙️",
    title: "ITIL Value System",
    short: "How guiding principles, governance, value chain, practices and improvement work together.",
    color: "#0f766e",
    intro: "The ITIL value system describes how the organization works as a system to turn demand and opportunities into value.",
    overview: [
      ["Guiding principles", "Recommendations that guide decisions and actions."],
      ["Governance", "How the organization is directed and controlled."],
      ["Service value chain", "A flexible operating model for creating and delivering value."],
      ["Management practices", "Organizational capabilities used to perform work."],
      ["Continual improvement", "Ongoing improvement across products, services and practices."],
    ],
    terms: [
      ["Demand", "Input into the value system based on needs or opportunities."],
      ["Value", "The expected output of the value system."],
      ["Practice", "A set of organizational resources designed for performing work or achieving an objective."],
      ["Service value chain", "The set of interconnected activities used to create products and services."],
    ],
    examFocus: [
      "Understand the value system as an integrated system.",
      "Know that the service value chain transforms demand into value.",
      "Practices support value chain activities rather than replacing them."],
    traps: [
      ["Linear thinking", "The service value chain is flexible, not a strict step-by-step waterfall."],
      ["Practice confusion", "Practices are capabilities; they are not the same thing as value chain activities."],
    ],
  },
  {
    id: "governance",
    order: 5,
    emoji: "🏛️",
    title: "Governance",
    short: "How direction, policy, monitoring and accountability are applied.",
    color: "#b45309",
    intro: "Governance ensures the organization is evaluated, directed and monitored. Management then plans and executes under that direction.",
    overview: [
      ["Evaluate", "Assess strategy, risks, current state, options and stakeholder needs."],
      ["Direct", "Set direction, policies, priorities and decision boundaries."],
      ["Monitor", "Check performance, compliance and progress against direction."],
      ["Governance vs management", "Governance sets direction and oversight; management plans and executes."],
    ],
    terms: [
      ["Evaluate", "Governance activity that assesses context and options."],
      ["Direct", "Governance activity that sets policies, priorities and direction."],
      ["Monitor", "Governance activity that checks performance and compliance."],
      ["Accountability", "Responsibility for decisions, performance and outcomes."],
    ],
    examFocus: [
      "Remember evaluate, direct and monitor.",
      "Do not confuse governance with day-to-day management.",
      "Governance applies to areas such as risk, sustainability, ethics and AI."],
    traps: [
      ["Governance does not run the service desk", "Operational execution is management, not governance."],
      ["Monitor is not monitoring events", "Governance monitoring is oversight of direction and performance."],
    ],
  },
  {
    id: "guiding-principles",
    order: 6,
    emoji: "🧭",
    title: "ITIL Guiding Principles",
    short: "The seven principles used to guide decisions and actions.",
    color: "#2563eb",
    intro: "The guiding principles are broad recommendations. They should be applied together, not used in isolation.",
    overview: [
      ["Focus on value", "Everything should link directly or indirectly to value."],
      ["Start where you are", "Assess and reuse what already exists where useful."],
      ["Progress iteratively with feedback", "Use manageable steps and learn from feedback."],
      ["Collaborate and promote visibility", "Work together and make work visible."],
      ["Think and work holistically", "Consider the whole system, not isolated parts."],
      ["Keep it simple and practical", "Remove unnecessary complexity."],
      ["Optimize and automate", "Simplify and improve before automating."],
    ],
    terms: [
      ["Focus on value", "The principle that links all work to stakeholder value."],
      ["Start where you are", "The principle that avoids unnecessary reinvention."],
      ["Progress iteratively", "The principle that uses small steps and feedback."],
      ["Optimize and automate", "The principle that says optimise before automating."],
    ],
    examFocus: [
      "Know all seven principle names.",
      "Apply the principle to scenarios, not just definitions.",
      "Simplify and optimise before automation.",
      "Use feedback and iteration for change."],
    traps: [
      ["Automation first", "This is a common trap. ITIL recommends optimization before automation."],
      ["One principle only", "The principles should complement each other."],
    ],
  },
  {
    id: "product-service-lifecycle",
    order: 7,
    emoji: "🔄",
    title: "ITIL Product and Service Lifecycle",
    short: "How products and services move from discovery through operation and support.",
    color: "#16803c",
    intro: "The lifecycle helps explain how products and services are discovered, designed, acquired or built, transitioned, operated, delivered and supported.",
    overview: [
      ["Discover", "Identify needs, opportunities, stakeholders and demand."],
      ["Design", "Define the product or service, its requirements and architecture."],
      ["Acquire", "Obtain products, components or services from external sources."],
      ["Build", "Create, configure or develop internally."],
      ["Transition", "Move into production or live use in a controlled way."],
      ["Operate", "Keep the product or service running."],
      ["Deliver", "Make the product or service available to consumers."],
      ["Support", "Handle incidents, requests, issues and user help."],
    ],
    terms: [
      ["Discover", "Identifies needs and opportunities."],
      ["Acquire", "Gets something from a third party."],
      ["Build", "Creates or configures something internally."],
      ["Transition", "Moves change into live use in a controlled way."],
      ["Support", "Helps users and handles incidents or requests."],
    ],
    examFocus: [
      "Know the activity names and what each one does.",
      "Acquire is third-party sourcing; Build is internal creation.",
      "Support handles user issues and incidents.",
      "The lifecycle can be iterative, not strictly linear."],
    traps: [
      ["Acquire vs build", "Acquire means obtain externally; build means create internally."],
      ["Operate vs support", "Operate keeps services running; support handles user-facing help and issues."],
    ],
  },
  {
    id: "value-chain-practices",
    order: 8,
    emoji: "🧩",
    title: "Value Chain and Practices",
    short: "How value chain activities and management practices work together.",
    color: "#9333ea",
    intro: "The value chain activities create and deliver value. Management practices provide the capabilities needed to perform that work.",
    overview: [
      ["Plan", "Create shared understanding of vision, current status and direction."],
      ["Improve", "Improve products, services, practices and value chain activities."],
      ["Engage", "Understand stakeholder needs and maintain relationships."],
      ["Design and transition", "Ensure products and services meet expectations and are moved into use."],
      ["Obtain/build", "Ensure service components are available when needed."],
      ["Deliver and support", "Deliver and support services according to expectations."],
      ["Practices", "Reusable capabilities such as service desk, incident management, problem management and change enablement."],
    ],
    terms: [
      ["Service desk", "The single point of contact between provider and users."],
      ["Incident management", "Restores normal service operation as quickly as possible."],
      ["Problem management", "Reduces likelihood and impact of incidents by managing causes."],
      ["Change enablement", "Maximises successful changes through appropriate risk assessment and control."],
      ["Service level management", "Sets clear service level targets and monitors achievement."],
    ],
    examFocus: [
      "Know the purpose of each service value chain activity.",
      "Know the common practice purposes.",
      "Incident restores service; problem investigates and manages causes.",
      "Service desk is the single point of contact."],
    traps: [
      ["Incident vs problem", "Incident management restores service; problem management handles causes."],
      ["Release vs deployment", "Release makes features available; deployment moves components into environments."],
    ],
  },
  {
    id: "value-streams-mapping",
    order: 9,
    emoji: "🗺️",
    title: "Value Streams and Mapping",
    short: "How work flows from demand to value and how bottlenecks are identified.",
    color: "#0ea5e9",
    intro: "Value stream mapping helps show the real flow of work, including delays, handoffs, waste and improvement opportunities.",
    overview: [
      ["Value stream", "A series of steps used to create and deliver value."],
      ["Trigger", "The event or demand that starts the value stream."],
      ["Touchpoint", "A moment where the consumer interacts with the provider."],
      ["Lead time", "Total time from request to value delivered."],
      ["Cycle time", "Time taken to complete a single activity."],
      ["Bottleneck", "A point where work builds up because demand exceeds capacity."],
      ["Waste", "Work, waiting or movement that does not add value."],
    ],
    terms: [
      ["Lead time", "Total elapsed time from request to value delivered."],
      ["Cycle time", "Time to complete one activity."],
      ["Handoff", "Transfer of work between people or teams."],
      ["Bottleneck", "A constraint that slows the overall flow."],
      ["Value Stream Mapping", "A technique for visualising work and finding improvement opportunities."],
    ],
    examFocus: [
      "Understand lead time vs cycle time.",
      "Recognise excessive handoffs as potential waste.",
      "Use mapping to identify waste and bottlenecks.",
      "Remember the consumer experience across touchpoints."],
    traps: [
      ["Handoffs are not always helpful", "Too many handoffs can create delay and errors."],
      ["Technical metrics are not enough", "A stream can be technically successful but still deliver a poor customer experience."],
    ],
  },
  {
    id: "continual-improvement",
    order: 10,
    emoji: "📈",
    title: "Continual Improvement",
    short: "The repeatable approach to improving products, services, practices and performance.",
    color: "#f59e0b",
    intro: "Continual improvement is not a one-off project. It should happen across the organization and be supported by measurement and feedback.",
    overview: [
      ["What is the vision?", "Define the direction and high-level objectives."],
      ["Where are we now?", "Assess the current state and create a baseline."],
      ["Where do we want to be?", "Define measurable targets."],
      ["How do we get there?", "Plan the improvement actions."],
      ["Take action", "Carry out the improvement."],
      ["Did we get there?", "Measure and confirm the result."],
      ["How do we keep momentum?", "Embed the improvement and continue."],
    ],
    terms: [
      ["Baseline", "A measurement of the current state before improvement."],
      ["Continual Improvement Register", "A structured place to record and manage improvement ideas."],
      ["Measurement", "Used to prove whether improvement has been achieved."],
      ["Feedback", "Information used to guide further improvement."],
    ],
    examFocus: [
      "Know the seven improvement model questions.",
      "Measure before and after improvement.",
      "Use a register to track improvement ideas.",
      "Improvement applies to products, services and practices."],
    traps: [
      ["Skipping the baseline", "Without current-state data it is hard to prove improvement."],
      ["One-off improvement", "Continual improvement is ongoing, not a single event."],
    ],
  },
  {
    id: "itil-ai-frameworks",
    order: 11,
    emoji: "🤖",
    title: "ITIL, AI and Other Frameworks",
    short: "How AI, automation, Agile, DevOps, Lean, COBIT, ISO 20000 and other frameworks can fit with ITIL.",
    color: "#be185d",
    intro: "ITIL can work with other approaches. The key is choosing and integrating frameworks based on context, value, risk and maturity.",
    overview: [
      ["AI in service management", "Can help with classification, prediction, knowledge, automation and improvement."],
      ["Responsible AI", "Needs transparency, accountability, fairness, privacy and human oversight."],
      ["Agile and DevOps", "Can increase speed, feedback, collaboration and automation."],
      ["Lean", "Focuses on maximising value and reducing waste."],
      ["COBIT", "Supports governance and control of technology."],
      ["ISO 20000", "Sets requirements for a service management system."],
      ["SIAM", "Helps integrate multiple service providers."],
    ],
    terms: [
      ["Responsible AI", "Ethical and governed use of AI with transparency and accountability."],
      ["DevOps", "A culture and set of practices supporting collaboration, automation and faster delivery."],
      ["Lean", "An approach focused on value and waste reduction."],
      ["COBIT", "A framework for governance and control of enterprise technology."],
      ["ISO 20000", "An international service management system standard."],
    ],
    examFocus: [
      "Do not treat ITIL and DevOps as enemies; they can complement each other.",
      "AI should be governed and linked to value.",
      "Lean helps remove waste from value streams.",
      "ISO 20000 gives requirements; ITIL provides service management guidance."],
    traps: [
      ["Framework replacement", "Other frameworks usually complement ITIL rather than automatically replacing it."],
      ["AI for novelty", "AI should solve a problem and create value, not be used just because it is new."],
    ],
  },
];


/* Phase 4 — richer HTML recreations of the original colour mind maps uploaded in chat */
(function () {
  const richMaps = [
    {
      title: "The Four Dimensions",
      html: `
        <div class="mm-page">
          <div class="mm-head">
            <h2 class="mm-title">ITIL V5 Four Dimensions of Product and Service Management</h2>
            <p class="mm-subtitle">Colour mind map for revision: the Four Dimensions provide a balanced, holistic perspective for managing digital products and services.</p>
          </div>
          <div class="mm-grid">
            <section class="mm-box mm-blue">
              <div class="mm-box-h"><span class="mm-icon">💡</span>Introduction / core idea</div>
              <div class="mm-box-b"><ul>
                <li>Managing digital products and services requires more than focusing on individual components such as technology or processes.</li>
                <li>Services exist within complex systems involving people, information, partners and workflows, all operating within a wider organizational and external context.</li>
                <li>Focusing on one aspect in isolation can lead to inefficiencies, increased risk, and reduced value.</li>
              </ul></div>
            </section>
            <section class="mm-box mm-grey">
              <div class="mm-box-h"><span class="mm-icon">🔢</span>The four dimensions are</div>
              <div class="mm-box-b">
                <ol class="mm-numbers">
                  <li><span class="mm-num" style="background:#1b74e8">1</span><strong>Organizations and people</strong></li>
                  <li><span class="mm-num" style="background:#8a4ce1">2</span><strong>Information and technology</strong></li>
                  <li><span class="mm-num" style="background:#0db6c7">3</span><strong>Partners and suppliers</strong></li>
                  <li><span class="mm-num" style="background:#f28a07">4</span><strong>Value streams and processes</strong></li>
                </ol>
                <p>They apply universally to all organizations and to both service providers and service consumers.</p>
              </div>
            </section>
            <section class="mm-box mm-orange">
              <div class="mm-box-h"><span class="mm-icon">🎯</span>Purpose of the Four Dimensions</div>
              <div class="mm-box-b"><ul>
                <li>Support a holistic approach to product and service management.</li>
                <li>Help organizations identify gaps, dependencies and risks that may otherwise remain hidden when decisions are made from a single viewpoint.</li>
                <li>Example: introducing new technology without considering skills and culture may result in poor adoption.</li>
                <li>Optimizing processes without considering partners and suppliers may create bottlenecks outside the organization’s control.</li>
              </ul></div>
            </section>
            <section class="mm-box mm-purple">
              <div class="mm-box-h"><span class="mm-icon">✏️</span>Applying the Four Dimensions</div>
              <div class="mm-box-b"><ul>
                <li>Consider them whenever changes are made to products or services.</li>
                <li>This includes designing or modifying services, assessing risks and impacts, planning improvements, and evaluating performance.</li>
                <li>They are not a checklist; they guide thinking and discussion.</li>
                <li>They support informed decision-making and help organizations balance efficiency, effectiveness, and sustainability.</li>
              </ul></div>
            </section>
            <section class="mm-core">
              <h3>The Four Dimensions</h3>
              <div class="mm-divider"></div>
              <p>The Four Dimensions of Product and Service Management represent the critical perspectives that must be considered to ensure effective and efficient facilitation of value for customers and other stakeholders in the form of products and services.</p>
              <p class="mm-emphasis">Each dimension is distinct but interdependent, so they must always be considered together.</p>
            </section>
            <section class="mm-box mm-red">
              <div class="mm-box-h"><span class="mm-icon">🔗</span>Relationship with other ITIL concepts</div>
              <div class="mm-box-b"><ul>
                <li>The Four Dimensions are not a standalone tool.</li>
                <li>They influence and support service relationships, governance, the ITIL value system, the service value chain, management practices, value streams, and continual improvement.</li>
                <li>They provide a common lens that can be applied across these areas, ensuring consistency and alignment throughout the framework.</li>
              </ul>
              <div class="mm-mini-visual">
                <div class="mm-footer-small"><strong>Visual</strong></div>
                <div class="mm-mini-visual-grid">
                  <div class="mm-mini-pill" style="border-color:#70a6ff;color:#1b64d1;">Organizations and people</div>
                  <div class="mm-mini-pill" style="border-color:#c9a7ff;color:#7a42d9;">Information and technology</div>
                  <div class="mm-mini-pill" style="border-color:#9aeaf2;color:#0f95a3;">Partners and suppliers</div>
                  <div class="mm-mini-pill" style="border-color:#ffd18a;color:#e07b03;">Value streams and processes</div>
                </div>
                <div class="mm-mini-center">Products and services<br>Value</div>
                <div class="mm-footer-small">Every dimension is affected by multiple factors.</div>
              </div></div>
            </section>
            <section class="mm-box mm-teal">
              <div class="mm-box-h"><span class="mm-icon">🏛️</span>Position within the ITIL framework</div>
              <div class="mm-box-b"><ul>
                <li>The Four Dimensions form a foundational concept that supports all other guidance.</li>
                <li>Understanding them early provides essential context for later topics, including service relationships, governance, value streams, and continual improvement.</li>
                <li>For this reason, they are introduced before exploring how services are structured, governed, and improved.</li>
              </ul></div>
            </section>
          </div>
          <div class="mm-support"><strong>Supports other ITIL concepts</strong><span class="mm-inline-links"><span>Service relationships</span><span class="mm-dot">•</span><span>Governance</span><span class="mm-dot">•</span><span>ITIL value system</span><span class="mm-dot">•</span><span>Service value chain</span><span class="mm-dot">•</span><span>Management practices</span><span class="mm-dot">•</span><span>Value streams</span><span class="mm-dot">•</span><span>Continual improvement</span></span></div>
          <div class="mm-exam"><div class="mm-exam-grid"><div class="mm-exam-label">🎓 Exam takeaway</div><ul>
            <li>The Four Dimensions provide a balanced, holistic perspective for managing products and services.</li>
            <li>The dimensions are Organizations and People, Information and Technology, Partners and Suppliers, and Value Streams and Processes.</li>
            <li>They should be considered together whenever products and services are designed, delivered, operated, or improved.</li>
          </ul></div></div>
        </div>`
    },
    {
      title: "Organizations and People",
      html: `
        <div class="mm-page">
          <div class="mm-head">
            <h2 class="mm-title">ITIL V5 Four Dimensions: Organizations and People</h2>
            <p class="mm-subtitle">Colour mind map for revision: people, structure, culture, leadership, skills and collaboration must align to create value.</p>
          </div>
          <div class="mm-grid">
            <section class="mm-box mm-blue"><div class="mm-box-h"><span class="mm-icon">🎯</span>Purpose / why it matters</div><div class="mm-box-b"><ul>
              <li>Supports a holistic approach to product and service management.</li>
              <li>Reveals hidden gaps, dependencies and risks.</li>
              <li>Avoids narrow single-viewpoint decisions.</li>
              <li>Ignoring people factors can cause resistance, inconsistent delivery and reduced value.</li>
            </ul></div></section>
            <section class="mm-box mm-grey"><div class="mm-box-h"><span class="mm-icon">📘</span>Four Dimensions context</div><div class="mm-box-b">
              <ol class="mm-numbers">
                <li><span class="mm-num" style="background:#1b74e8">1</span><strong>Organizations and people</strong></li>
                <li><span class="mm-num" style="background:#8a4ce1">2</span><strong>Information and technology</strong></li>
                <li><span class="mm-num" style="background:#f28a07">3</span><strong>Partners and suppliers</strong></li>
                <li><span class="mm-num" style="background:#22a44f">4</span><strong>Value streams and processes</strong></li>
              </ol>
              <p><strong>Memory hook:</strong> People need direction, trust, structure, skills and communication <strong style="color:#e61b7d">to create value</strong>.</p>
            </div></section>
            <section class="mm-box mm-orange"><div class="mm-box-h"><span class="mm-icon">🏛️</span>Structure &amp; governance</div><div class="mm-box-b"><ul>
              <li>Structure determines how responsibilities, decisions and authority are distributed.</li>
              <li>Governance clarifies roles, accountability and control.</li>
              <li>Clear ownership keeps services aligned with organizational objectives.</li>
              <li>Poor structure causes unclear ownership, slow decisions and fragmented delivery.</li>
            </ul></div></section>
            <section class="mm-box mm-purple"><div class="mm-box-h"><span class="mm-icon">🧭</span>Leadership</div><div class="mm-box-b"><ul>
              <li>Sets direction and reinforces desired behaviours.</li>
              <li>Supports people through change.</li>
              <li>Values-driven and people-centred.</li>
              <li>Builds trust through integrity, learning and listening.</li>
              <li>Balances organizational goals with stakeholder wellbeing.</li>
            </ul></div></section>
            <section class="mm-core"><div class="mm-core-kicker">👥</div><h3>Organizations<br>and People</h3><div class="mm-divider"></div><p class="mm-emphasis">Core idea:</p><p>Best technology or process still fails if people factors are not aligned.</p></section>
            <section class="mm-box mm-red"><div class="mm-box-h"><span class="mm-icon">⭐</span>Roles, skills &amp; capabilities</div><div class="mm-box-b"><ul>
              <li>People need the right skills and competencies for their roles.</li>
              <li>They must understand responsibilities and objectives.</li>
              <li>They need training and development.</li>
              <li>Capabilities include technical expertise, service management knowledge, communication and cross-disciplinary collaboration.</li>
              <li>Insufficient skills or capacity increase risk and limit performance.</li>
            </ul></div></section>
            <section class="mm-box mm-teal"><div class="mm-box-h"><span class="mm-icon">💬</span>Communication &amp; collaboration</div><div class="mm-box-b"><ul>
              <li>Coordinates work across teams and organizational boundaries.</li>
              <li>Creates shared understanding of goals, priorities and constraints.</li>
              <li>Improves decision-making and reduces friction.</li>
              <li>Critical where digital work spans multiple functions and organizations.</li>
            </ul></div></section>
            <section class="mm-box mm-green"><div class="mm-box-h"><span class="mm-icon">🛡️</span>Culture &amp; safety culture</div><div class="mm-box-b"><ul>
              <li>Culture = shared values expressed through behaviour, ideas, beliefs and practices.</li>
              <li>Culture shapes behaviour, change response and collaboration.</li>
              <li>Safety culture = people are comfortable being and expressing themselves.</li>
              <li>People feel trusted, raise risks early, and speak up about issues.</li>
              <li>Supports learning, transparency, improvement and shared responsibility.</li>
            </ul></div></section>
            <section class="mm-box mm-gold"><div class="mm-box-h"><span class="mm-icon">📝</span>Applying the dimension</div><div class="mm-box-b"><ul>
              <li>Consider it when designing or modifying services.</li>
              <li>Use it when assessing risks and impacts.</li>
              <li>Use it when planning improvements and evaluating performance.</li>
              <li>It is not a tick-box checklist: it guides thinking and discussion.</li>
              <li>External PESTLE factors affect every dimension: Political, Economic, Social, Technological, Legal, Environmental.</li>
            </ul></div></section>
          </div>
          <div class="mm-support"><strong>Supports other ITIL concepts</strong><span class="mm-inline-links"><span>Service relationships</span><span class="mm-dot">•</span><span>Governance</span><span class="mm-dot">•</span><span>ITIL value system</span><span class="mm-dot">•</span><span>Service value chain</span><span class="mm-dot">•</span><span>Management practices</span><span class="mm-dot">•</span><span>Value streams</span><span class="mm-dot">•</span><span>Continual improvement</span></span></div>
          <div class="mm-exam"><div class="mm-exam-grid"><div class="mm-exam-label">🎓 Exam takeaway</div><ul>
            <li>Do not treat Organizations and People as HR only. It covers leadership, culture, safety, structure, governance, roles, skills and collaboration.</li>
            <li>The Four Dimensions are a thinking lens, not a simple checklist.</li>
            <li>Use them whenever products and services are designed, delivered, operated or improved.</li>
          </ul></div></div>
        </div>`
    },
    {
      title: "Information and Technology",
      html: `
        <div class="mm-page">
          <div class="mm-head">
            <h2 class="mm-title">ITIL V5 Four Dimensions: Information and Technology</h2>
            <p class="mm-subtitle">Colour mind map for revision: information, knowledge, technology, automation, AI, security and governance must support value.</p>
          </div>
          <div class="mm-grid">
            <section class="mm-box mm-blue"><div class="mm-box-h"><span class="mm-icon">💡</span>Introduction / core idea</div><div class="mm-box-b"><ul>
              <li>Information and technology are fundamental enablers of digital products and services.</li>
              <li>Together, they support decision-making, coordination, automation, and continual improvement.</li>
              <li>Technology alone does not create value.</li>
              <li>Value is enabled when information is accurate, accessible and used effectively in combination with appropriate technologies.</li>
            </ul></div></section>
            <section class="mm-box mm-grey"><div class="mm-box-h"><span class="mm-icon">🔢</span>The key concepts are</div><div class="mm-box-b">
              <ol class="mm-numbers">
                <li><span class="mm-num" style="background:#1b74e8">1</span><strong>Data, information and knowledge</strong></li>
                <li><span class="mm-num" style="background:#8a4ce1">2</span><strong>Information management and knowledge sharing</strong></li>
                <li><span class="mm-num" style="background:#0db6c7">3</span><strong>Technology as an enabler</strong></li>
                <li><span class="mm-num" style="background:#f28a07">4</span><strong>Automation and artificial intelligence</strong></li>
                <li><span class="mm-num" style="background:#e53935">5</span><strong>Security, reliability and compliance</strong></li>
              </ol>
              <p>This dimension applies to all stages of product and service management and includes data, information, knowledge and the technologies used to process and manage them.</p>
            </div></section>
            <section class="mm-box mm-orange"><div class="mm-box-h"><span class="mm-icon">🎯</span>Purpose of the dimension</div><div class="mm-box-b"><ul>
              <li>Ensures organizations consider not only tools and systems, but also the information those systems manage and the way that information supports products and services throughout their lifecycle.</li>
              <li>Helps improve effectiveness, resilience and value creation.</li>
              <li>Supports sustainable service management by ensuring technology solutions are fit for purpose.</li>
              <li>Ensures that information enables informed and responsible action.</li>
            </ul></div></section>
            <section class="mm-box mm-purple"><div class="mm-box-h"><span class="mm-icon">🗃️</span>Data, information and knowledge</div><div class="mm-box-b"><ul>
              <li>Data consists of raw facts and observations, such as logs, measurements or transaction records.</li>
              <li>Information is data that has been processed and organized to provide meaning and context.</li>
              <li>Knowledge is the understanding derived from information, combined with experience and insight, that enables effective action and decision-making.</li>
              <li>Poor data quality or inaccessible information can limit understanding and increase risk.</li>
            </ul></div></section>
            <section class="mm-core"><h3>Information and Technology</h3><div class="mm-divider"></div><p>The Information and Technology dimension considers the information and knowledge needed to manage products and services, as well as the technologies required to support them.</p><p class="mm-emphasis">Technology only creates value when information is accurate, available, protected, governed and used well.</p></section>
            <section class="mm-box mm-red"><div class="mm-box-h"><span class="mm-icon">⚙️</span>Technology as an enabler</div><div class="mm-box-b"><ul>
              <li>Technologies include workflow and inventory systems, knowledge bases, communication and collaboration tools, monitoring solutions and analytical platforms.</li>
              <li>Cloud platforms, mobile solutions, remote collaboration tools, and automated testing and deployment are common ways of working.</li>
              <li>Automation and analytics increase efficiency, consistency and insight.</li>
              <li>Tools that are poorly integrated, difficult to use, or inadequately supported can reduce value rather than enhance it.</li>
            </ul></div></section>
            <section class="mm-box mm-teal"><div class="mm-box-h"><span class="mm-icon">🔁</span>Information management and sharing</div><div class="mm-box-b"><ul>
              <li>Information must be managed throughout its lifecycle, from creation and storage to use and eventual disposal.</li>
              <li>This includes ensuring accuracy, timeliness, relevance and accessibility.</li>
              <li>Knowledge sharing is important in service relationships and operational environments.</li>
              <li>Making knowledge available to the right people at the right time reduces dependency on individuals and improves consistency and resilience.</li>
            </ul></div></section>
            <section class="mm-box mm-green"><div class="mm-box-h"><span class="mm-icon">🧠</span>Automation, AI, and governance</div><div class="mm-box-b"><ul>
              <li>Automation can reduce manual effort and errors, while analytics support informed decision-making by identifying patterns and trends in data.</li>
              <li>AI helps organizations manage complexity, automate repetitive work, and make smarter, faster decisions.</li>
              <li>AI must be governed carefully to manage risks related to bias, transparency, and reliability.</li>
              <li>Data governance is a system of rules, policies, standards, processes, and controls used to manage data assets effectively.</li>
            </ul></div></section>
            <section class="mm-box mm-gold"><div class="mm-box-h"><span class="mm-icon">🛡️</span>Security, reliability, and compliance</div><div class="mm-box-b"><ul>
              <li>This dimension introduces risks that must be managed, including cybersecurity threats, data privacy concerns, system failures and regulatory requirements.</li>
              <li>Ensuring security, reliability, and compliance is essential to maintaining trust in products and services.</li>
              <li>Organizations need to protect information, ensure availability, and align technology use with legal and regulatory obligations.</li>
            </ul></div></section>
          </div>
          <div class="mm-support"><strong>Supports other ITIL concepts</strong><span class="mm-inline-links"><span>Service relationships</span><span class="mm-dot">•</span><span>Governance</span><span class="mm-dot">•</span><span>ITIL value system</span><span class="mm-dot">•</span><span>Service value chain</span><span class="mm-dot">•</span><span>Management practices</span><span class="mm-dot">•</span><span>Value streams</span><span class="mm-dot">•</span><span>Continual improvement</span></span></div>
          <div class="mm-exam"><div class="mm-exam-grid"><div class="mm-exam-label">🎓 Exam takeaway</div><ul>
            <li>Information and Technology is not just about tools; it includes data, information, knowledge, governance, automation, AI, security, reliability, and compliance.</li>
            <li>Technology is an enabler, not value by itself. Value depends on accurate, accessible, protected, and well-used information.</li>
            <li>Data tells what happened, information explains meaning, and knowledge supports action.</li>
          </ul></div></div>
        </div>`
    },
    {
      title: "Partners and Suppliers",
      html: `
        <div class="mm-page">
          <div class="mm-head">
            <h2 class="mm-title">ITIL V5 Four Dimensions: Partners and Suppliers</h2>
            <p class="mm-subtitle">Colour mind map for revision: sourcing, contracts, collaboration, dependencies, risk and value contribution must align to create value.</p>
          </div>
          <div class="mm-grid">
            <section class="mm-box mm-blue"><div class="mm-box-h"><span class="mm-icon">🎯</span>Purpose / why it matters</div><div class="mm-box-b"><ul>
              <li>Digital products and services are delivered through complex ecosystems involving multiple organizations.</li>
              <li>Partners and suppliers contribute capabilities, resources, technologies and expertise essential to value creation.</li>
              <li>Ignoring this dimension can cause fragmented services, unclear accountability and unmanaged dependencies.</li>
              <li>Considering external relationships improves coordination, resilience and alignment across the service ecosystem.</li>
            </ul></div></section>
            <section class="mm-box mm-grey"><div class="mm-box-h"><span class="mm-icon">🔢</span>Four Dimensions context</div><div class="mm-box-b">
              <ol class="mm-numbers">
                <li><span class="mm-num" style="background:#1b74e8">1</span><strong>Organizations and people</strong></li>
                <li><span class="mm-num" style="background:#8a4ce1">2</span><strong>Information and technology</strong></li>
                <li><span class="mm-num" style="background:#e61b7d">3</span><strong>Partners and suppliers</strong></li>
                <li><span class="mm-num" style="background:#22a44f">4</span><strong>Value streams and processes</strong></li>
              </ol>
              <p><strong>Memory hook:</strong> Right partners, right sourcing, right integration, <strong style="color:#e61b7d">right value</strong>.</p>
            </div></section>
            <section class="mm-box mm-orange"><div class="mm-box-h"><span class="mm-icon">🧭</span>Supplier strategy &amp; sourcing decisions</div><div class="mm-box-b"><ul>
              <li>Decide which capabilities to develop internally and which to source externally.</li>
              <li>Sourcing choices are influenced by cost, strategic importance, risk, expertise and flexibility.</li>
              <li>Some services use standardized supplier offerings; others require close collaboration with strategic partners.</li>
              <li>Sourcing decisions should align with service objectives and value expectations.</li>
            </ul></div></section>
            <section class="mm-box mm-purple"><div class="mm-box-h"><span class="mm-icon">🤝</span>Contracts, partnerships &amp; collaboration</div><div class="mm-box-b"><ul>
              <li>Contracts define responsibilities, service levels and obligations between organizations.</li>
              <li>Contracts help manage risk and provide clarity about expectations.</li>
              <li>Contracts alone are not enough to ensure effective service delivery.</li>
              <li>Successful relationships also depend on collaboration, trust and shared goals.</li>
              <li>Long-term partnerships often enable better integration, innovation and continual improvement than purely transactional arrangements.</li>
            </ul></div></section>
            <section class="mm-core"><div class="mm-core-kicker">🤝</div><h3>Partners<br>and Suppliers</h3><div class="mm-divider"></div><p class="mm-emphasis">Core idea:</p><p>Value depends not only on internal performance, but also on how effectively external organizations are integrated into the service landscape.</p></section>
            <section class="mm-box mm-red"><div class="mm-box-h"><span class="mm-icon">🔗</span>Integration &amp; dependencies</div><div class="mm-box-b"><ul>
              <li>Products and services often depend on contributions from multiple partners and suppliers.</li>
              <li>Dependencies must be understood and managed to avoid disruptions and inefficiencies.</li>
              <li>Poor integration between organizations can cause delays, inconsistent service quality and increased risk.</li>
              <li>Processes, information flows and technologies should be aligned across organizational boundaries.</li>
            </ul></div></section>
            <section class="mm-box mm-teal"><div class="mm-box-h"><span class="mm-icon">🛡️</span>Risk, resilience &amp; value contribution</div><div class="mm-box-b"><ul>
              <li>Reliance on partners and suppliers introduces risks related to availability, security, compliance and continuity.</li>
              <li>These risks must be identified and managed as part of service management.</li>
              <li>Partners and suppliers can also enhance value through specialized capabilities, scalability and innovation.</li>
              <li>Effective relationship management helps balance risk and opportunity while supporting sustainable value creation.</li>
            </ul></div></section>
            <section class="mm-box mm-gold"><div class="mm-box-h"><span class="mm-icon">📝</span>Applying the dimension</div><div class="mm-box-b"><ul>
              <li>Use this dimension when choosing suppliers, designing service ecosystems and planning sourcing models.</li>
              <li>Use it when reviewing contracts, dependencies, resilience and supplier performance.</li>
              <li>Consider how partner roles support service outcomes and organizational priorities.</li>
              <li>It is not only about procurement; it is about how external organizations contribute to design, development, deployment, delivery, support and continual improvement.</li>
            </ul></div></section>
          </div>
          <div class="mm-support"><strong>Supports other ITIL concepts</strong><span class="mm-inline-links"><span>Service relationships</span><span class="mm-dot">•</span><span>Governance</span><span class="mm-dot">•</span><span>ITIL value system</span><span class="mm-dot">•</span><span>Service value chain</span><span class="mm-dot">•</span><span>Management practices</span><span class="mm-dot">•</span><span>Value streams</span><span class="mm-dot">•</span><span>Continual improvement</span></span></div>
          <div class="mm-exam"><div class="mm-exam-grid"><div class="mm-exam-label">🎓 Exam takeaway</div><ul>
            <li>Partners and Suppliers is not just vendor management; it covers sourcing, contracts, collaboration, dependencies, risk and value contribution.</li>
            <li>Contracts matter, but service success also depends on trust, integration and shared goals.</li>
            <li>Manage external relationships so they strengthen resilience, service outcomes and value creation.</li>
          </ul></div></div>
        </div>`
    },
    {
      title: "Value Streams and Processes",
      html: `
        <div class="mm-page">
          <div class="mm-head">
            <h2 class="mm-title">ITIL V5 Four Dimensions: Value Streams and Processes</h2>
            <p class="mm-subtitle">Colour mind map for revision: value creation, flow, coordination, handoffs, measurement, improvement and complexity thinking.</p>
          </div>
          <div class="mm-grid">
            <section class="mm-box mm-blue"><div class="mm-box-h"><span class="mm-icon">🎯</span>Why this Dimension Matters</div><div class="mm-box-b"><ul>
              <li>Ignoring the Value Streams and Processes dimension can lead to fragmented work, inefficiencies, and a lack of alignment between activities and outcomes.</li>
              <li>By explicitly considering how workflows and how processes support that flow, organizations improve coordination and value delivery.</li>
              <li>This dimension ensures that products and services are managed end to end, with a clear focus on value creation rather than isolated activities.</li>
            </ul></div></section>
            <section class="mm-box mm-grey"><div class="mm-box-h"><span class="mm-icon">🔢</span>Four Dimensions context</div><div class="mm-box-b">
              <ol class="mm-numbers">
                <li><span class="mm-num" style="background:#8a4ce1">1</span><strong>Organizations and people</strong></li>
                <li><span class="mm-num" style="background:#1b74e8">2</span><strong>Information and technology</strong></li>
                <li><span class="mm-num" style="background:#f28a07">3</span><strong>Partners and suppliers</strong></li>
                <li><span class="mm-num" style="background:#22a44f">4</span><strong>Value streams and processes</strong></li>
              </ol>
            </div></section>
            <section class="mm-box mm-orange"><div class="mm-box-h"><span class="mm-icon">🔄</span>How they relate</div><div class="mm-box-b"><ul>
              <li>Value streams and processes are closely related but serve different purposes.</li>
              <li>A value stream provides an end-to-end view of how value is delivered, while processes describe how individual activities within that value stream are performed.</li>
              <li>For example, a value stream for delivering a new digital service may include steps such as defining requirements, building the solution, deploying it, and supporting users.</li>
              <li>Within that value stream, multiple processes may be used, each contributing a specific output.</li>
              <li>Focusing only on processes without understanding the value stream can result in local optimization that does not improve overall value delivery.</li>
            </ul></div></section>
            <section class="mm-box mm-purple"><div class="mm-box-h"><span class="mm-icon">➡️</span>Definition: Value Stream</div><div class="mm-box-b"><ul>
              <li>A value stream is a series of steps an organization undertakes to create and deliver products and services to consumers.</li>
              <li>Value streams describe how value is created from the consumer’s perspective.</li>
              <li>They start with a trigger, such as a demand or opportunity, and end with the realization of value.</li>
              <li>Value streams may involve multiple teams, suppliers, and technologies working together.</li>
            </ul></div></section>
            <section class="mm-core"><h3>Value Streams<br>and Processes</h3><div class="mm-divider"></div><p>This dimension focuses on how work flows through the organization to enable value creation.</p><p class="mm-emphasis">This dimension emphasizes that value is not created by isolated tasks, teams, or systems, but by coordinated activities that span organizational boundaries.</p></section>
            <section class="mm-box mm-red"><div class="mm-box-h"><span class="mm-icon">🤝</span>Flow, Coordination, and Handoffs</div><div class="mm-box-b"><ul>
              <li>Effective value streams depend on smooth flow of work across teams and organizational boundaries.</li>
              <li>Poorly managed handoffs, unclear responsibilities, or excessive controls can slow down delivery and reduce value.</li>
              <li>The Value Streams and Processes dimension encourages organizations to look beyond functional silos and understand how work actually flows.</li>
              <li>By doing so, organizations can identify bottlenecks, reduce delays, and improve collaboration.</li>
            </ul></div></section>
            <section class="mm-box mm-teal"><div class="mm-box-h"><span class="mm-icon">🔧</span>Definition: Process</div><div class="mm-box-b"><ul>
              <li>A process is a set of interrelated or interacting activities that transforms inputs into outputs.</li>
              <li>Processes focus on how specific types of work are performed.</li>
              <li>They define roles, responsibilities, activities, and controls that ensure work is carried out consistently and effectively.</li>
            </ul></div></section>
            <section class="mm-box mm-green"><div class="mm-box-h"><span class="mm-icon">📈</span>Measurement and Improvement</div><div class="mm-box-b"><ul>
              <li>Understanding value streams and processes supports meaningful measurement.</li>
              <li>Rather than focusing only on activity-level metrics, organizations can assess how effectively value is delivered from start to finish.</li>
              <li>This perspective also supports continual improvement.</li>
              <li>By analyzing value streams, organizations can prioritize improvements that have the greatest impact on consumer outcomes and value creation.</li>
            </ul></div></section>
            <section class="mm-box mm-gold"><div class="mm-box-h"><span class="mm-icon">🧩</span>Complexity thinking</div><div class="mm-box-b"><ul>
              <li>An approach to analysis and decision-making based on recognizing the various levels of complexity inherent in systems and their context.</li>
              <li>Organizations do not operate in a single, predictable environment; different types of work vary in predictability and in how clearly actions lead to outcomes.</li>
              <li>Ordered contexts are predictable and can be analysed using established procedures and best practices.</li>
              <li>Complex contexts are often understood after interaction, experimentation and adaptation rather than detailed upfront planning.</li>
              <li>Chaotic contexts are crisis situations where immediate action is needed before deeper analysis can take place.</li>
              <li>Confused contexts exist when it is unclear which context applies; first assess the situation and determine the appropriate context.</li>
            </ul></div></section>
          </div>
          <div class="mm-support"><strong>Supports other ITIL concepts</strong><span class="mm-inline-links"><span>Service relationships</span><span class="mm-dot">•</span><span>Governance</span><span class="mm-dot">•</span><span>ITIL value system</span><span class="mm-dot">•</span><span>Service value chain</span><span class="mm-dot">•</span><span>Management practices</span><span class="mm-dot">•</span><span>Value streams</span><span class="mm-dot">•</span><span>Continual improvement</span></span></div>
          <div class="mm-exam"><div class="mm-exam-grid"><div class="mm-exam-label">🎓 Exam takeaway</div><ul>
            <li>Value streams show the end-to-end flow of value creation, while processes define how specific activities are carried out.</li>
            <li>Pay attention to flow, coordination, handoffs and bottlenecks, not just isolated process efficiency.</li>
            <li>Use measurement, continual improvement and complexity thinking to improve value delivery in context.</li>
          </ul></div></div>
        </div>`
    },
    {
      title: "External Factors (PESTLE)",
      html: `
        <div class="mm-page">
          <div class="mm-head">
            <h2 class="mm-title">ITIL V5 External Factors (PESTLE)</h2>
            <p class="mm-subtitle">Colour mind map for revision: political, economic, social, technological, legal and environmental factors influence how products and services are designed, delivered, operated, and improved.</p>
          </div>
          <div class="mm-grid">
            <section class="mm-box mm-blue"><div class="mm-box-h"><span class="mm-icon">🎯</span>Purpose / why it matters</div><div class="mm-box-b"><ul>
              <li>Ignoring external factors can lead to non-compliance, increased risk, reduced relevance, or missed opportunities.</li>
              <li>By understanding the external environment, organizations can adapt more effectively and create sustainable value.</li>
              <li>Each of these factors can influence service requirements, constraints, risks and opportunities.</li>
            </ul></div></section>
            <section class="mm-box mm-grey"><div class="mm-box-h"><span class="mm-icon">🧭</span>PESTLE framework</div><div class="mm-box-b">
              <p>External factors are commonly analysed using the PESTLE framework, which groups influences into six categories.</p>
              <ol class="mm-numbers">
                <li><span class="mm-num" style="background:#1b74e8">1</span><strong>Political</strong></li>
                <li><span class="mm-num" style="background:#8a4ce1">2</span><strong>Economic</strong></li>
                <li><span class="mm-num" style="background:#e61b7d">3</span><strong>Social</strong></li>
                <li><span class="mm-num" style="background:#0db6c7">4</span><strong>Technological</strong></li>
                <li><span class="mm-num" style="background:#f2b317">5</span><strong>Legal</strong></li>
                <li><span class="mm-num" style="background:#22a44f">6</span><strong>Environmental</strong></li>
              </ol>
              <p><strong>Every dimension is affected by multiple factors.</strong></p>
            </div></section>
            <section class="mm-box mm-orange"><div class="mm-box-h"><span class="mm-icon">🌍</span>Political, Economic and Social Factors</div><div class="mm-box-b"><ul>
              <li><strong>Political factors</strong> include government policies, public sector priorities, geopolitical stability and regulatory direction. These may affect funding, priorities, or the way services must be delivered.</li>
              <li><strong>Economic factors</strong> include market conditions, inflation, interest rates, and overall economic stability. Economic changes can influence demand for services, cost structures and investment decisions.</li>
              <li><strong>Social factors</strong> relate to demographic trends, cultural expectations, user behaviour and societal values. Changes in how people work, communicate, or consume services can directly affect service design and user experience.</li>
            </ul></div></section>
            <section class="mm-box mm-purple"><div class="mm-box-h"><span class="mm-icon">🌐</span>Technological, Legal and Environmental Factors</div><div class="mm-box-b"><ul>
              <li><strong>Technological factors</strong> include emerging technologies, innovation speed and technology maturity. Rapid technological change can create opportunities for new services but also introduces risks related to obsolescence, skills gaps and integration challenges.</li>
              <li><strong>Legal factors</strong> include laws, regulations, standards and contractual obligations. These may relate to data protection, security, accessibility, intellectual property or industry-specific requirements.</li>
              <li><strong>Environmental factors</strong> relate to sustainability, climate impact and responsible use of resources. Organizations are increasingly expected to reduce environmental impact and ensure products and services support long-term environmental and social goals.</li>
            </ul></div></section>
            <section class="mm-core"><h3>External Factors<br>(PESTLE)</h3><div class="mm-divider"></div><p>Products and services do not exist in isolation. They are influenced by a wide range of external factors that can affect how they are designed, delivered, operated, and improved.</p><p class="mm-emphasis">The External Factors dimension ensures that organizations consider influences outside their direct control when managing digital products and services.</p></section>
            <section class="mm-box mm-red"><div class="mm-box-h"><span class="mm-icon">❗</span>Why External Factors Matter</div><div class="mm-box-b"><ul>
              <li>External factors can influence all other dimensions of product and service management.</li>
              <li>For example, new regulations may require changes in processes, technology, or partner arrangements.</li>
              <li>Social or technological changes may require new skills or different ways of working.</li>
              <li>By explicitly considering external factors, organizations improve resilience, reduce risk, and ensure that products and services remain relevant, compliant, and sustainable over time.</li>
            </ul></div></section>
            <section class="mm-box mm-teal"><div class="mm-box-h"><span class="mm-icon">🗓️</span>External factors should be considered</div><div class="mm-box-b"><ul>
              <li>When designing or changing products and services.</li>
              <li>When assessing risks and opportunities.</li>
              <li>During strategic planning and continual improvement.</li>
              <li>The External Factors dimension supports informed decision-making by ensuring that internal choices are aligned with the wider environment in which the organization operates.</li>
            </ul></div></section>
            <section class="mm-box mm-green"><div class="mm-box-h"><span class="mm-icon">🔗</span>Link to the Four Dimensions</div><div class="mm-box-b"><ul>
              <li>External factors can influence all other dimensions of product and service management.</li>
              <li>Political, economic, social, technological, legal and environmental influences shape how products and services are designed, delivered, operated, and improved.</li>
              <li>Organizations should consider influences outside their direct control when managing digital products and services.</li>
              <li>Considering external factors improves resilience, reduces risk, and supports sustainable value.</li>
            </ul></div></section>
          </div>
          <div class="mm-support"><strong>Supports other ITIL concepts</strong><span class="mm-inline-links"><span>Organizations and people</span><span class="mm-dot">•</span><span>Information and technology</span><span class="mm-dot">•</span><span>Partners and suppliers</span><span class="mm-dot">•</span><span>Value streams and processes</span></span></div>
          <div class="mm-exam"><div class="mm-exam-grid"><div class="mm-exam-label">🎓 Exam takeaway</div><ul>
            <li>External Factors (PESTLE) help organizations understand influences outside their direct control.</li>
            <li>PESTLE stands for Political, Economic, Social, Technological, Legal and Environmental.</li>
            <li>Use external factors when designing or changing products and services, assessing risks and opportunities, and during strategic planning and continual improvement.</li>
          </ul></div></div>
        </div>`
    }
  ];
  MIND_MAPS["four-dimensions"] = richMaps;
})();


/* Phase 4.2 — richer HTML recreation: Service Value and Value Co-Creation */
(function () {
  const existingServiceValueMaps = Array.isArray(MIND_MAPS["service-value"]) ? MIND_MAPS["service-value"] : [];
  const remainingMaps = existingServiceValueMaps.filter(function (map) {
    return String(map.title || "").toLowerCase() !== "service value and co-creation";
  });

  const serviceValueMap = {
    title: "Service Value and Value Co-Creation",
    html: `
      <div class="mm-page">
        <div class="mm-head">
          <h2 class="mm-title">ITIL V5: Service Value</h2>
          <p class="mm-subtitle">Colour mind map for revision: value is perceived, co-created, and shaped by outcomes, experience, costs, and risks.</p>
        </div>

        <div class="mm-grid">
          <section class="mm-box mm-blue">
            <div class="mm-box-h"><span class="mm-icon">💡</span>Introduction / core idea</div>
            <div class="mm-box-b"><ul>
              <li>The purpose of managing digital products and services is to enable value creation.</li>
              <li>Services help organizations and individuals achieve what matters to them, while reducing the effort, cost, and risk they would otherwise need to manage themselves.</li>
              <li>Understanding service value is fundamental to understanding ITIL.</li>
              <li>A service may be well designed and efficiently operated, yet still fail to create value if it does not meet the expectations or needs of the service consumer.</li>
            </ul></div>
          </section>

          <section class="mm-box mm-grey">
            <div class="mm-box-h"><span class="mm-icon">🔢</span>The key concepts are</div>
            <div class="mm-box-b">
              <ol class="mm-numbers">
                <li><span class="mm-num" style="background:#1b74e8">1</span><strong>Value</strong></li>
                <li><span class="mm-num" style="background:#8a4ce1">2</span><strong>Service value</strong></li>
                <li><span class="mm-num" style="background:#0db6c7">3</span><strong>Perceived value</strong></li>
                <li><span class="mm-num" style="background:#f28a07">4</span><strong>Value co-creation</strong></li>
                <li><span class="mm-num" style="background:#e53935">5</span><strong>Dynamic value</strong></li>
              </ol>
              <p>This topic provides the foundation for the related concepts of outcomes, costs, and risks.</p>
            </div>
          </section>

          <section class="mm-box mm-orange">
            <div class="mm-box-h"><span class="mm-icon">🎯</span>Why value matters</div>
            <div class="mm-box-b"><ul>
              <li>Value does not exist on its own or get delivered in isolation.</li>
              <li>Value only emerges when a service is actually used and its effects are perceived as beneficial.</li>
              <li>What is valuable depends on the perspective of the stakeholder.</li>
              <li>Changes in business priorities, operating conditions, or external circumstances can influence how value is perceived.</li>
            </ul></div>
          </section>

          <section class="mm-box mm-purple">
            <div class="mm-box-h"><span class="mm-icon">📋</span>Definition: Value</div>
            <div class="mm-box-b"><ul>
              <li>Value is the perceived benefits, usefulness, and importance of something.</li>
              <li>Value is perceived, not absolute.</li>
              <li>The same service can be perceived very differently by different consumers, or even by the same consumer at different moments in time.</li>
            </ul></div>
          </section>

          <section class="mm-core">
            <h3>Service Value</h3>
            <div class="mm-divider"></div>
            <p>Service value focuses specifically on how a service contributes to what the service consumer is trying to achieve.</p>
            <p class="mm-emphasis">Service value is the perceived benefits, usefulness, and importance of a service.</p>
            <div class="mm-divider"></div>
            <p class="mm-emphasis">A service creates value when it supports desired outcomes and when its positive effects outweigh any negative effects experienced by the consumer.</p>
          </section>

          <section class="mm-box mm-red">
            <div class="mm-box-h"><span class="mm-icon">👥</span>Value co-creation</div>
            <div class="mm-box-b"><ul>
              <li>Service value is closely connected to value co-creation.</li>
              <li>Value is not produced by the service provider alone.</li>
              <li>It emerges through the interaction between the service provider and the service consumer within a service relationship.</li>
              <li>How a service is used, experienced, and integrated into the consumer's activities influences the resulting value.</li>
            </ul></div>
          </section>

          <section class="mm-box mm-teal">
            <div class="mm-box-h"><span class="mm-icon">📊</span>Factors influencing service value</div>
            <div class="mm-box-b"><ul>
              <li>The extent to which the service enables desired outcomes.</li>
              <li>How easy and reliable the service is to use.</li>
              <li>The experience of interacting with the service and the provider.</li>
              <li>The costs incurred and risks accepted when consuming the service.</li>
            </ul></div>
          </section>

          <section class="mm-box mm-green">
            <div class="mm-box-h"><span class="mm-icon">🔄</span>Dynamic nature of value</div>
            <div class="mm-box-b"><ul>
              <li>These factors can change over time.</li>
              <li>Service value is dynamic rather than fixed.</li>
              <li>Effective service management requires continual attention to how services are perceived.</li>
              <li>It also requires attention to how well services continue to support value creation.</li>
            </ul></div>
          </section>

          <section class="mm-box mm-gold">
            <div class="mm-box-h"><span class="mm-icon">📘</span>Related concepts</div>
            <div class="mm-box-b"><ul>
              <li>This understanding of service value provides the foundation for the related concepts of outcomes, costs, and risks.</li>
              <li>These concepts are explored in the following parts of the module.</li>
            </ul></div>
          </section>
        </div>

        <div class="mm-support">
          <strong>Connected ideas</strong>
          <span class="mm-inline-links"><span>Value creation</span><span class="mm-dot">•</span><span>Service relationship</span><span class="mm-dot">•</span><span>Outcomes</span><span class="mm-dot">•</span><span>Costs</span><span class="mm-dot">•</span><span>Risks</span></span>
        </div>

        <div class="mm-exam"><div class="mm-exam-grid"><div class="mm-exam-label">🎓 Exam takeaway</div><ul>
          <li>Value is perceived, not absolute.</li>
          <li>Service value is the perceived benefits, usefulness, and importance of a service.</li>
          <li>Service value is co-created through the interaction between provider and consumer.</li>
          <li>Service value is shaped by outcomes, ease of use, experience, costs, and risks.</li>
          <li>Service value is dynamic and can change over time.</li>
        </ul></div></div>
      </div>`
  };

  MIND_MAPS["service-value"] = [serviceValueMap].concat(remainingMaps);
})();

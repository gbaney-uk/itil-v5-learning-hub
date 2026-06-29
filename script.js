const sections = {
  "service-value": {
    title: "Service Value and Value Co-Creation",
    subtitle: "Service value, outcomes, costs, risks, utility, warranty and co-creation.",
    content: `
      <section class="placeholder-panel">
        <h3>Section ready for content</h3>
        <p>This section will hold topic cards for service value and value co-creation.</p>
        <div class="topic-list">
          <article><strong>Suggested card:</strong> What is value?</article>
          <article><strong>Suggested card:</strong> Utility and warranty</article>
          <article><strong>Suggested card:</strong> Outcomes, costs and risks</article>
          <article><strong>Suggested card:</strong> Value co-creation</article>
        </div>
      </section>
    `
  },

  "service-relationships": {
    title: "Service Relationships",
    subtitle: "Service providers, service consumers, stakeholders and service offerings.",
    content: `
      <section class="placeholder-panel">
        <h3>Section ready for content</h3>
        <p>This section will hold topic cards for service relationships.</p>
        <div class="topic-list">
          <article><strong>Suggested card:</strong> Service provider and service consumer</article>
          <article><strong>Suggested card:</strong> Service offerings</article>
          <article><strong>Suggested card:</strong> Service relationship model</article>
          <article><strong>Suggested card:</strong> Stakeholders</article>
        </div>
      </section>
    `
  },

  "value-system": {
    title: "ITIL Value System",
    subtitle: "How ITIL components and activities work together to create value.",
    content: `
      <section class="placeholder-panel">
        <h3>Section ready for content</h3>
        <p>This section will hold topic cards for the ITIL value system.</p>
        <div class="topic-list">
          <article><strong>Suggested card:</strong> Purpose of the value system</article>
          <article><strong>Suggested card:</strong> Inputs and outputs</article>
          <article><strong>Suggested card:</strong> Opportunity, demand and value</article>
          <article><strong>Suggested card:</strong> How value system components connect</article>
        </div>
      </section>
    `
  },

  governance: {
    title: "Governance",
    subtitle: "Direction, control, accountability, compliance and alignment.",
    content: `
      <section class="placeholder-panel">
        <h3>Section ready for content</h3>
        <p>This section will hold topic cards for governance.</p>
        <div class="topic-list">
          <article><strong>Suggested card:</strong> Evaluate, direct and monitor</article>
          <article><strong>Suggested card:</strong> Governance and management</article>
          <article><strong>Suggested card:</strong> Accountability and control</article>
          <article><strong>Suggested card:</strong> Governance within the ITIL value system</article>
        </div>
      </section>
    `
  },

  "guiding-principles": {
    title: "ITIL Guiding Principles",
    subtitle: "The principles used to guide decisions and behaviours.",
    content: `
      <section class="placeholder-panel">
        <h3>Section ready for content</h3>
        <p>This section will hold topic cards for the ITIL guiding principles.</p>
        <div class="topic-list">
          <article><strong>Suggested card:</strong> Focus on value</article>
          <article><strong>Suggested card:</strong> Start where you are</article>
          <article><strong>Suggested card:</strong> Progress iteratively with feedback</article>
          <article><strong>Suggested card:</strong> Collaborate and promote visibility</article>
          <article><strong>Suggested card:</strong> Think and work holistically</article>
          <article><strong>Suggested card:</strong> Keep it simple and practical</article>
          <article><strong>Suggested card:</strong> Optimize and automate</article>
        </div>
      </section>
    `
  },

  "four-dimensions": {
    title: "Four Dimensions",
    subtitle: "Open the overview or one of the individual Four Dimensions topic diagrams.",
    content: `
      <section class="panel">
        <div class="section-heading">
          <h2>Four Dimensions Topic Dashboard</h2>
          <p>Select one of the Four Dimensions topics below to open the detailed HTML diagram.</p>
        </div>

        <div class="subsection-grid">
          <article class="sub-card green">
            <h3>Four Dimensions Overview</h3>
            <p>The complete overview of the Four Dimensions concept and how it supports product and service management.</p>
            <button onclick="showFourDimensionTopic('overview')">Open diagram</button>
          </article>

          <article class="sub-card blue">
            <h3>Organisations and People</h3>
            <p>Leadership, culture, safety culture, structure, roles, skills, communication and collaboration.</p>
            <button onclick="showFourDimensionTopic('organisations')">Open diagram</button>
          </article>

          <article class="sub-card teal">
            <h3>Information and Technology</h3>
            <p>Data, information, knowledge, technology, automation, AI, security, reliability and governance.</p>
            <button onclick="showFourDimensionTopic('information')">Open diagram</button>
          </article>

          <article class="sub-card orange">
            <h3>Partners and Suppliers</h3>
            <p>Sourcing, contracts, collaboration, supplier integration, dependencies, risk and value contribution.</p>
            <button onclick="showFourDimensionTopic('partners')">Open diagram</button>
          </article>

          <article class="sub-card purple">
            <h3>Value Streams and Processes</h3>
            <p>Value creation, flow, coordination, handoffs, measurement, improvement and complexity thinking.</p>
            <button onclick="showFourDimensionTopic('value-streams')">Open diagram</button>
          </article>

          <article class="sub-card red">
            <h3>External Factors PESTLE</h3>
            <p>Political, economic, social, technological, legal and environmental influences.</p>
            <button onclick="showFourDimensionTopic('external')">Open diagram</button>
          </article>
        </div>
      </section>
    `
  },

  lifecycle: {
    title: "ITIL Product and Service Lifecycle",
    subtitle: "How products and services are designed, delivered, operated and improved.",
    content: `
      <section class="placeholder-panel">
        <h3>Section ready for content</h3>
        <p>This section will hold topic cards for product and service lifecycle concepts.</p>
        <div class="topic-list">
          <article><strong>Suggested card:</strong> Product lifecycle</article>
          <article><strong>Suggested card:</strong> Service lifecycle</article>
          <article><strong>Suggested card:</strong> Design, deliver, operate and improve</article>
          <article><strong>Suggested card:</strong> Lifecycle thinking in ITIL V5</article>
        </div>
      </section>
    `
  },

  "value-chain": {
    title: "Value Chain and Practices",
    subtitle: "Service value chain activities and management practices.",
    content: `
      <section class="placeholder-panel">
        <h3>Section ready for content</h3>
        <p>This section will hold topic cards for value chain activities and practices.</p>
        <div class="topic-list">
          <article><strong>Suggested card:</strong> Service value chain overview</article>
          <article><strong>Suggested card:</strong> Plan</article>
          <article><strong>Suggested card:</strong> Improve</article>
          <article><strong>Suggested card:</strong> Engage</article>
          <article><strong>Suggested card:</strong> Design and transition</article>
          <article><strong>Suggested card:</strong> Obtain/build</article>
          <article><strong>Suggested card:</strong> Deliver and support</article>
          <article><strong>Suggested card:</strong> Management practices overview</article>
        </div>
      </section>
    `
  },

  "value-streams-mapping": {
    title: "Value Streams and Mapping",
    subtitle: "Understanding and improving the flow of work that creates value.",
    content: `
      <section class="placeholder-panel">
        <h3>Section ready for content</h3>
        <p>This section will hold topic cards for value streams and mapping.</p>
        <div class="topic-list">
          <article><strong>Suggested card:</strong> What is a value stream?</article>
          <article><strong>Suggested card:</strong> Mapping the flow of work</article>
          <article><strong>Suggested card:</strong> Bottlenecks and handoffs</article>
          <article><strong>Suggested card:</strong> Measuring flow</article>
        </div>
      </section>
    `
  },

  "continual-improvement": {
    title: "Continual Improvement",
    subtitle: "Improvement models, feedback, measurement and iterative progress.",
    content: `
      <section class="placeholder-panel">
        <h3>Section ready for content</h3>
        <p>This section will hold topic cards for continual improvement.</p>
        <div class="topic-list">
          <article><strong>Suggested card:</strong> Continual improvement model</article>
          <article><strong>Suggested card:</strong> Improvement register</article>
          <article><strong>Suggested card:</strong> Measurement and feedback</article>
          <article><strong>Suggested card:</strong> Iterative improvement</article>
        </div>
      </section>
    `
  },

  "ai-frameworks": {
    title: "ITIL, AI and Other Frameworks",
    subtitle: "How ITIL relates to AI, automation, Agile, DevOps, Lean and other frameworks.",
    content: `
      <section class="placeholder-panel">
        <h3>Section ready for content</h3>
        <p>This section will hold topic cards for ITIL, AI and related frameworks.</p>
        <div class="topic-list">
          <article><strong>Suggested card:</strong> ITIL and AI</article>
          <article><strong>Suggested card:</strong> ITIL and automation</article>
          <article><strong>Suggested card:</strong> ITIL and Agile</article>
          <article><strong>Suggested card:</strong> ITIL and DevOps</article>
          <article><strong>Suggested card:</strong> ITIL and Lean</article>
        </div>
      </section>
    `
  }
};

const fourDimensionTopics = {
  overview: {
    title: "Four Dimensions Overview",
    subtitle: "The complete overview of the Four Dimensions concept.",
    content: `
      <section class="mindmap-panel">
        <div class="map-title">
          <h2>ITIL V5 Four Dimensions of Product and Service Management</h2>
          <p>The Four Dimensions provide a balanced, holistic perspective for managing products and services.</p>
        </div>

        <div class="mindmap-layout">
          <div class="centre-card">
            <h3>The Four Dimensions</h3>
            <p>The Four Dimensions represent the critical perspectives that must be considered to ensure effective and efficient facilitation of value for customers and other stakeholders.</p>
            <p>Each dimension is distinct but interdependent, so they must always be considered together.</p>
          </div>

          <article class="map-card blue">
            <h3>Introduction / core idea</h3>
            <ul>
              <li>Managing digital products and services requires more than focusing on individual components such as technology or processes.</li>
              <li>Services exist within complex systems involving people, information, partners and workflows.</li>
              <li>Focusing on one aspect in isolation can lead to inefficiencies, increased risk and reduced value.</li>
            </ul>
          </article>

          <article class="map-card grey">
            <h3>The four dimensions are</h3>
            <ol>
              <li>Organizations and people</li>
              <li>Information and technology</li>
              <li>Partners and suppliers</li>
              <li>Value streams and processes</li>
            </ol>
          </article>

          <article class="map-card orange">
            <h3>Purpose</h3>
            <ul>
              <li>Support a holistic approach to product and service management.</li>
              <li>Help organizations identify gaps, dependencies and risks.</li>
              <li>Avoid decisions being made from a single viewpoint.</li>
              <li>Help prevent poor adoption when new technology, processes or working methods are introduced.</li>
            </ul>
          </article>

          <article class="map-card purple">
            <h3>Applying the Four Dimensions</h3>
            <ul>
              <li>Consider them whenever changes are made to products or services.</li>
              <li>Use them when designing or modifying services.</li>
              <li>Use them when assessing risks and impacts.</li>
              <li>They guide thinking and discussion rather than acting as a simple checklist.</li>
            </ul>
          </article>

          <article class="map-card red">
            <h3>Relationship with other ITIL concepts</h3>
            <ul>
              <li>They influence service relationships, governance, the ITIL value system and the service value chain.</li>
              <li>They support management practices, value streams and continual improvement.</li>
              <li>They provide a common lens that can be applied across ITIL guidance.</li>
            </ul>
          </article>

          <article class="map-card teal">
            <h3>Position within ITIL</h3>
            <ul>
              <li>The Four Dimensions form a foundational concept that supports other ITIL guidance.</li>
              <li>Understanding them early provides context for later topics.</li>
              <li>They are introduced before exploring how services are structured, governed and improved.</li>
            </ul>
          </article>
        </div>

        <div class="support-strip">
          <strong>Supports other ITIL concepts:</strong>
          <span>Service relationships</span>
          <span>Governance</span>
          <span>ITIL value system</span>
          <span>Service value chain</span>
          <span>Management practices</span>
          <span>Value streams</span>
          <span>Continual improvement</span>
        </div>

        <div class="exam-strip">
          <h3>Exam takeaway</h3>
          <ul>
            <li>The Four Dimensions provide a balanced, holistic perspective for managing products and services.</li>
            <li>The four dimensions are Organizations and people, Information and technology, Partners and suppliers, and Value streams and processes.</li>
            <li>They should be considered together whenever products and services are designed, delivered, operated or improved.</li>
          </ul>
        </div>
      </section>
    `
  },

  organisations: {
    title: "Organisations and People",
    subtitle: "People, structure, culture, leadership, skills and collaboration.",
    content: `
      <section class="mindmap-panel">
        <div class="map-title">
          <h2>ITIL V5 Four Dimensions: Organisations and People</h2>
          <p>People, structure, culture, leadership, skills and collaboration must align to create value.</p>
        </div>

        <div class="mindmap-layout">
          <div class="centre-card">
            <h3>Organisations and People</h3>
            <p><strong>Core idea:</strong> The best technology or process can still fail if people factors are not aligned.</p>
          </div>

          <article class="map-card blue">
            <h3>Purpose / why it matters</h3>
            <ul>
              <li>Supports a holistic approach to product and service management.</li>
              <li>Reveals hidden gaps, dependencies and risks.</li>
              <li>Avoids narrow single-viewpoint decisions.</li>
              <li>Ignoring people factors can cause resistance, inconsistent delivery and reduced value.</li>
            </ul>
          </article>

          <article class="map-card orange">
            <h3>Structure and governance</h3>
            <ul>
              <li>Structure determines how responsibilities, decisions and authority are distributed.</li>
              <li>Governance clarifies roles, accountability and control.</li>
              <li>Clear ownership keeps services aligned with organizational objectives.</li>
              <li>Poor structure causes unclear ownership, slow decisions and fragmented delivery.</li>
            </ul>
          </article>

          <article class="map-card purple">
            <h3>Leadership</h3>
            <ul>
              <li>Sets direction and reinforces desired behaviours.</li>
              <li>Supports people through change.</li>
              <li>Builds trust through integrity, learning and listening.</li>
              <li>Balances organizational goals with stakeholder wellbeing.</li>
            </ul>
          </article>

          <article class="map-card red">
            <h3>Roles, skills and capabilities</h3>
            <ul>
              <li>People need the right skills and competencies for their roles.</li>
              <li>They must understand responsibilities and objectives.</li>
              <li>They need training and development.</li>
              <li>Insufficient skills or capacity increases risk and limits performance.</li>
            </ul>
          </article>

          <article class="map-card teal">
            <h3>Communication and collaboration</h3>
            <ul>
              <li>Coordinates work across teams and organizational boundaries.</li>
              <li>Creates shared understanding of goals, priorities and constraints.</li>
              <li>Improves decision-making and reduces friction.</li>
              <li>Critical where digital work spans multiple functions and organizations.</li>
            </ul>
          </article>

          <article class="map-card green">
            <h3>Culture and safety culture</h3>
            <ul>
              <li>Culture is shared values expressed through behaviour, ideas, beliefs and practices.</li>
              <li>Culture shapes behaviour, change response and collaboration.</li>
              <li>Safety culture means people are comfortable being and expressing themselves.</li>
              <li>Supports learning, transparency, improvement and shared responsibility.</li>
            </ul>
          </article>
        </div>

        <div class="exam-strip">
          <h3>Exam takeaway</h3>
          <ul>
            <li>Do not treat Organisations and People as HR only.</li>
            <li>This dimension includes leadership, culture, structure, governance, roles, skills and collaboration.</li>
            <li>Good technology or processes can still fail if people factors are not aligned.</li>
          </ul>
        </div>
      </section>
    `
  },

  information: {
    title: "Information and Technology",
    subtitle: "Information, knowledge, technology, automation, AI, security and governance.",
    content: `
      <section class="mindmap-panel">
        <div class="map-title">
          <h2>ITIL V5 Four Dimensions: Information and Technology</h2>
          <p>Information, knowledge, technology, automation, AI, security and governance must support value.</p>
        </div>

        <div class="mindmap-layout">
          <div class="centre-card">
            <h3>Information and Technology</h3>
            <p>This dimension considers the information and knowledge needed to manage products and services, as well as the technologies required to support them.</p>
            <p>Technology only creates value when information is accurate, available, protected, governed and used well.</p>
          </div>

          <article class="map-card blue">
            <h3>Introduction / core idea</h3>
            <ul>
              <li>Information and technology are fundamental enablers of digital products and services.</li>
              <li>They support decision-making, coordination, automation and continual improvement.</li>
              <li>Technology alone does not create value.</li>
            </ul>
          </article>

          <article class="map-card grey">
            <h3>Key concepts</h3>
            <ol>
              <li>Data, information and knowledge</li>
              <li>Information management and knowledge sharing</li>
              <li>Technology as an enabler</li>
              <li>Automation and artificial intelligence</li>
              <li>Security, reliability and compliance</li>
            </ol>
          </article>

          <article class="map-card orange">
            <h3>Purpose</h3>
            <ul>
              <li>Ensures organizations consider not only tools and systems, but also the information those systems manage.</li>
              <li>Helps improve effectiveness, resilience and value creation.</li>
              <li>Ensures information enables informed and responsible action.</li>
            </ul>
          </article>

          <article class="map-card purple">
            <h3>Data, information and knowledge</h3>
            <ul>
              <li>Data consists of raw facts and observations.</li>
              <li>Information is data that has been processed and organized to provide meaning and context.</li>
              <li>Knowledge is understanding derived from information, combined with experience and insight.</li>
            </ul>
          </article>

          <article class="map-card red">
            <h3>Technology as an enabler</h3>
            <ul>
              <li>Technologies include workflow systems, inventory systems, knowledge bases and collaboration tools.</li>
              <li>Cloud platforms, mobile solutions and automated testing are common ways of working.</li>
              <li>Poorly integrated or difficult tools can reduce value rather than enhance it.</li>
            </ul>
          </article>

          <article class="map-card green">
            <h3>Automation, AI and governance</h3>
            <ul>
              <li>Automation can reduce manual effort and errors.</li>
              <li>Analytics support decision-making by identifying patterns and trends.</li>
              <li>AI can help manage complexity and automate repetitive work.</li>
              <li>AI must be governed carefully to manage bias, transparency and reliability.</li>
            </ul>
          </article>
        </div>

        <div class="exam-strip">
          <h3>Exam takeaway</h3>
          <ul>
            <li>Information and Technology is not just about tools.</li>
            <li>Technology is an enabler, not value by itself.</li>
            <li>Data tells what happened, information explains meaning and knowledge supports action.</li>
          </ul>
        </div>
      </section>
    `
  },

  partners: {
    title: "Partners and Suppliers",
    subtitle: "Sourcing, contracts, collaboration, dependencies, risk and value contribution.",
    content: `
      <section class="mindmap-panel">
        <div class="map-title">
          <h2>ITIL V5 Four Dimensions: Partners and Suppliers</h2>
          <p>Sourcing, contracts, collaboration, dependencies, risk and value contribution must align to create value.</p>
        </div>

        <div class="mindmap-layout">
          <div class="centre-card">
            <h3>Partners and Suppliers</h3>
            <p><strong>Core idea:</strong> Value depends not only on internal performance, but also on how effectively external organizations are integrated into the service landscape.</p>
          </div>

          <article class="map-card blue">
            <h3>Purpose / why it matters</h3>
            <ul>
              <li>Digital products and services are delivered through complex ecosystems involving multiple organizations.</li>
              <li>Partners and suppliers contribute capabilities, resources, technologies and expertise.</li>
              <li>Ignoring this dimension can cause fragmented services and unmanaged dependencies.</li>
            </ul>
          </article>

          <article class="map-card orange">
            <h3>Supplier strategy and sourcing decisions</h3>
            <ul>
              <li>Decide which capabilities to develop internally and which to source externally.</li>
              <li>Sourcing choices are influenced by cost, strategic importance, risk, expertise and flexibility.</li>
              <li>Sourcing decisions should align with service objectives and value expectations.</li>
            </ul>
          </article>

          <article class="map-card purple">
            <h3>Contracts, partnerships and collaboration</h3>
            <ul>
              <li>Contracts define responsibilities, service levels and obligations.</li>
              <li>Contracts help manage risk and clarify expectations.</li>
              <li>Contracts alone are not enough to ensure effective service delivery.</li>
              <li>Successful relationships depend on collaboration, trust and shared goals.</li>
            </ul>
          </article>

          <article class="map-card red">
            <h3>Integration and dependencies</h3>
            <ul>
              <li>Products and services often depend on contributions from multiple partners and suppliers.</li>
              <li>Dependencies must be understood and managed to avoid disruption and inefficiencies.</li>
              <li>Poor integration can cause delays, inconsistent quality and increased risk.</li>
            </ul>
          </article>

          <article class="map-card teal">
            <h3>Risk, resilience and value contribution</h3>
            <ul>
              <li>Supplier reliance introduces risks around availability, security, compliance and continuity.</li>
              <li>Partners can enhance value through specialist capabilities, scalability and innovation.</li>
              <li>Relationship management balances risk and opportunity.</li>
            </ul>
          </article>

          <article class="map-card yellow">
            <h3>Applying the dimension</h3>
            <ul>
              <li>Use it when choosing suppliers and designing service ecosystems.</li>
              <li>Use it when reviewing contracts, dependencies, resilience and supplier performance.</li>
              <li>It is not only about procurement.</li>
            </ul>
          </article>
        </div>

        <div class="exam-strip">
          <h3>Exam takeaway</h3>
          <ul>
            <li>Partners and Suppliers is not just vendor management.</li>
            <li>Contracts matter, but success also depends on trust, integration and shared goals.</li>
            <li>External relationships should strengthen resilience, service outcomes and value creation.</li>
          </ul>
        </div>
      </section>
    `
  },

  "value-streams": {
    title: "Value Streams and Processes",
    subtitle: "Value creation, flow, coordination, handoffs, measurement and improvement.",
    content: `
      <section class="mindmap-panel">
        <div class="map-title">
          <h2>ITIL V5 Four Dimensions: Value Streams and Processes</h2>
          <p>Value creation, flow, coordination, handoffs, measurement, improvement and complexity thinking.</p>
        </div>

        <div class="mindmap-layout">
          <div class="centre-card">
            <h3>Value Streams and Processes</h3>
            <p>This dimension focuses on how work flows through the organization to enable value creation.</p>
            <p>Value is not created by isolated tasks, teams or systems, but by coordinated activities that span organizational boundaries.</p>
          </div>

          <article class="map-card blue">
            <h3>Why this dimension matters</h3>
            <p>Ignoring this dimension can lead to fragmented work, inefficiencies and lack of alignment between activities and outcomes.</p>
          </article>

          <article class="map-card orange">
            <h3>How they relate</h3>
            <p>A value stream provides an end-to-end view of how value is delivered, while processes describe how individual activities within that value stream are performed.</p>
          </article>

          <article class="map-card purple">
            <h3>Definition: Value Stream</h3>
            <ul>
              <li>A value stream is a series of steps an organization undertakes to create and deliver products and services to consumers.</li>
              <li>Value streams describe how value is created from the consumer’s perspective.</li>
              <li>They start with a trigger and end with the realization of value.</li>
            </ul>
          </article>

          <article class="map-card red">
            <h3>Flow, coordination and handoffs</h3>
            <ul>
              <li>Effective value streams depend on smooth flow of work across teams.</li>
              <li>Poorly managed handoffs can slow delivery and reduce value.</li>
              <li>This dimension encourages organizations to look beyond silos.</li>
            </ul>
          </article>

          <article class="map-card teal">
            <h3>Definition: Process</h3>
            <ul>
              <li>A process is a set of interrelated or interacting activities that transforms inputs into outputs.</li>
              <li>Processes focus on how specific types of work are performed.</li>
              <li>They define roles, responsibilities, activities and controls.</li>
            </ul>
          </article>

          <article class="map-card green">
            <h3>Measurement and improvement</h3>
            <ul>
              <li>Understanding value streams and processes supports meaningful measurement.</li>
              <li>Organizations can assess how effectively value is delivered from start to finish.</li>
              <li>This perspective supports continual improvement.</li>
            </ul>
          </article>

          <article class="map-card pink wide-card">
            <h3>Complexity thinking</h3>
            <p>Complexity thinking is an approach to analysis and decision-making based on understanding the various levels of complexity in systems and their context.</p>
            <ul>
              <li><strong>Ordered contexts:</strong> predictable and support established procedures.</li>
              <li><strong>Complex contexts:</strong> unpredictable and require experimentation and learning.</li>
              <li><strong>Chaotic contexts:</strong> crisis situations requiring immediate action.</li>
              <li><strong>Confused contexts:</strong> unclear which context applies and the first priority is assessment.</li>
            </ul>
          </article>
        </div>

        <div class="exam-strip">
          <h3>Exam takeaway</h3>
          <ul>
            <li>Value streams show end-to-end flow of value creation.</li>
            <li>Processes describe specific activities within that flow.</li>
            <li>Improvement should focus on the overall flow, not just isolated activities.</li>
          </ul>
        </div>
      </section>
    `
  },

  external: {
    title: "External Factors PESTLE",
    subtitle: "Political, economic, social, technological, legal and environmental factors.",
    content: `
      <section class="mindmap-panel">
        <div class="map-title">
          <h2>ITIL V5 External Factors PESTLE</h2>
          <p>External factors influence how products and services are designed, delivered, operated and improved.</p>
        </div>

        <div class="mindmap-layout">
          <div class="centre-card">
            <h3>External Factors PESTLE</h3>
            <p>Products and services do not exist in isolation. They are influenced by a wide range of external factors outside the organization’s direct control.</p>
          </div>

          <article class="map-card blue">
            <h3>Purpose / why it matters</h3>
            <ul>
              <li>Ignoring external factors can lead to non-compliance, increased risk or missed opportunities.</li>
              <li>Understanding the external environment helps organizations adapt.</li>
              <li>Each factor can influence service requirements, constraints, risks and opportunities.</li>
            </ul>
          </article>

          <article class="map-card grey">
            <h3>PESTLE framework</h3>
            <ol>
              <li>Political</li>
              <li>Economic</li>
              <li>Social</li>
              <li>Technological</li>
              <li>Legal</li>
              <li>Environmental</li>
            </ol>
          </article>

          <article class="map-card orange">
            <h3>Political, Economic and Social</h3>
            <ul>
              <li><strong>Political:</strong> government policies, public sector priorities and regulatory direction.</li>
              <li><strong>Economic:</strong> market conditions, inflation, interest rates and stability.</li>
              <li><strong>Social:</strong> demographic trends, cultural expectations, user behaviour and societal values.</li>
            </ul>
          </article>

          <article class="map-card purple">
            <h3>Technological, Legal and Environmental</h3>
            <ul>
              <li><strong>Technological:</strong> emerging technologies, innovation speed and technology maturity.</li>
              <li><strong>Legal:</strong> laws, regulations, standards and contractual obligations.</li>
              <li><strong>Environmental:</strong> sustainability, climate impact and responsible use of resources.</li>
            </ul>
          </article>

          <article class="map-card red">
            <h3>Why external factors matter</h3>
            <ul>
              <li>External factors can influence all other dimensions.</li>
              <li>New regulations may require process, technology or partner changes.</li>
              <li>Social or technological changes may require new skills or ways of working.</li>
            </ul>
          </article>

          <article class="map-card green">
            <h3>When to consider them</h3>
            <ul>
              <li>When designing or changing products and services.</li>
              <li>When assessing risks and opportunities.</li>
              <li>During strategic planning and continual improvement.</li>
            </ul>
          </article>
        </div>

        <div class="exam-strip">
          <h3>Exam takeaway</h3>
          <ul>
            <li>PESTLE stands for Political, Economic, Social, Technological, Legal and Environmental.</li>
            <li>External factors influence every dimension.</li>
            <li>They should be considered during design, change, risk assessment and improvement.</li>
          </ul>
        </div>
      </section>
    `
  }
};

document.addEventListener("DOMContentLoaded", () => {
  loadProgress();
  attachProgressListeners();
  updateDashboard();
  registerServiceWorker();
});

function showDashboard() {
  document.getElementById("dashboardView").classList.add("active-view");
  document.getElementById("sectionView").classList.remove("active-view");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showSection(sectionKey) {
  const section = sections[sectionKey];

  if (!section) {
    return;
  }

  document.getElementById("dashboardView").classList.remove("active-view");
  document.getElementById("sectionView").classList.add("active-view");

  document.getElementById("sectionTitle").textContent = section.title;
  document.getElementById("sectionSubtitle").textContent = section.subtitle;
  document.getElementById("sectionContent").innerHTML = section.content;

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showFourDimensionTopic(topicKey) {
  const topic = fourDimensionTopics[topicKey];

  if (!topic) {
    return;
  }

  document.getElementById("sectionTitle").textContent = topic.title;
  document.getElementById("sectionSubtitle").textContent = topic.subtitle;

  document.getElementById("sectionContent").innerHTML = `
    <section class="breadcrumb-panel">
      <button class="back-button" onclick="showSection('four-dimensions')">← Back to Four Dimensions</button>
      <span>Four Dimensions / ${topic.title}</span>
    </section>
    ${topic.content}
  `;

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function toggleAnswer(answerId) {
  const answer = document.getElementById(answerId);

  if (!answer) {
    return;
  }

  answer.classList.toggle("hidden");
}

function attachProgressListeners() {
  const checkboxes = getProgressCheckboxes();

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      saveProgress();
      updateDashboard();
    });
  });
}

function getProgressCheckboxes() {
  return [
    document.getElementById("progress-four-dimensions"),
    document.getElementById("progress-service-value"),
    document.getElementById("progress-service-relationships"),
    document.getElementById("progress-value-system"),
    document.getElementById("progress-governance"),
    document.getElementById("progress-guiding-principles"),
    document.getElementById("progress-lifecycle"),
    document.getElementById("progress-value-chain"),
    document.getElementById("progress-value-streams-mapping"),
    document.getElementById("progress-continual-improvement"),
    document.getElementById("progress-ai-frameworks")
  ].filter(Boolean);
}

function saveProgress() {
  const progress = {};

  getProgressCheckboxes().forEach((checkbox) => {
    progress[checkbox.id] = checkbox.checked;
  });

  localStorage.setItem("itilV5HubProgress", JSON.stringify(progress));
}

function loadProgress() {
  const savedProgress = localStorage.getItem("itilV5HubProgress");

  if (!savedProgress) {
    return;
  }

  try {
    const progress = JSON.parse(savedProgress);

    Object.keys(progress).forEach((id) => {
      const checkbox = document.getElementById(id);

      if (checkbox) {
        checkbox.checked = progress[id] === true;
      }
    });
  } catch (error) {
    console.log("Could not load progress:", error);
  }
}

function updateDashboard() {
  const checkboxes = getProgressCheckboxes();

  const totalSections = checkboxes.length;
  const completedSections = checkboxes.filter((checkbox) => checkbox.checked).length;
  const remainingSections = totalSections - completedSections;
  const progressPercent = totalSections === 0
    ? 0
    : Math.round((completedSections / totalSections) * 100);

  updateText("completedCount", completedSections);
  updateText("remainingCount", remainingSections);
  updateText("progressPercent", `${progressPercent}%`);
}

function updateText(id, value) {
  const element = document.getElementById(id);

  if (element) {
    element.textContent = value;
  }
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) {
    return;
  }

  navigator.serviceWorker
    .register("service-worker.js")
    .catch((error) => {
      console.log("Service worker registration failed:", error);
    });
}

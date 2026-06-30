/* ITIL V5 Learning Dashboard — Phase 3 question bank
   Questions are separated from the app engine so they can be reviewed and expanded safely.
   status values: draft, needs-review, validated */
const QUESTIONS_VERSION = "2.0";

const QUESTION_BANK_PLACEHOLDER = { next: 1 };

const QUESTION_BANK = [
  item("four-dimensions", "Which dimension addresses culture, skills, roles and organizational structure?", ["Information and Technology", "Organization and People", "Partners and Suppliers", "Value Streams and Processes"], 1, "Organization and People covers culture, skills, roles and structure."),
  item("four-dimensions", "A new tool is implemented but staff receive no training. Which dimension has been neglected?", ["Information and Technology", "Partners and Suppliers", "Organization and People", "Value Streams and Processes"], 2, "Training, skills and adoption sit mainly within Organization and People."),
  item("four-dimensions", "Which dimension includes data, knowledge, applications and supporting technology?", ["Organization and People", "Information and Technology", "Partners and Suppliers", "Value Streams and Processes"], 1, "Information and Technology includes data, information, knowledge, applications and technology."),
  item("four-dimensions", "Supplier contracts and sourcing decisions are mainly part of which dimension?", ["Organization and People", "Information and Technology", "Partners and Suppliers", "Value Streams and Processes"], 2, "Partners and Suppliers covers third-party relationships, contracts and sourcing choices."),
  item("four-dimensions", "Why should the four dimensions be considered together?", ["Because technology alone creates all value", "Because ignoring any dimension can reduce service quality", "Because suppliers are never involved", "Because processes are optional"], 1, "A holistic view avoids improving one area while damaging another."),

  item("service-value", "What does utility describe?", ["How the service performs", "What the service does", "The service cost", "The legal contract"], 1, "Utility is fitness for purpose: what the service does."),
  item("service-value", "What does warranty describe?", ["How the service performs", "The customer journey", "The product name", "The project budget"], 0, "Warranty is fitness for use: availability, capacity, continuity and security."),
  item("service-value", "Which statement best describes value co-creation?", ["The provider creates all value alone", "The consumer creates all value alone", "Provider and consumer actively contribute to value", "Value is only measured by price"], 2, "Value is co-created through the relationship between provider and consumer."),
  item("service-value", "A service meets every technical target but users are unhappy. Which area is most likely being missed?", ["Experience", "Utility", "Goods transfer", "Sponsor approval"], 0, "Technical targets do not guarantee a good user or customer experience."),
  item("service-value", "What is an outcome?", ["A deliverable produced by an activity", "A result enabled for a stakeholder", "A document used by suppliers", "A password reset"], 1, "An outcome is a result enabled for a stakeholder; an output is a deliverable."),

  item("service-relationships", "Who authorizes the budget for service consumption?", ["User", "Sponsor", "Service desk", "Supplier"], 1, "The sponsor authorizes budget for service consumption."),
  item("service-relationships", "Who defines service requirements and takes responsibility for outcomes?", ["Customer", "User", "Sponsor", "Service provider"], 0, "The customer defines requirements and is accountable for outcomes."),
  item("service-relationships", "Cloud storage where the consumer uses provider resources without owning them is an example of what?", ["Transfer of goods", "Access to resources", "A warranty breach", "A change model"], 1, "Access to resources lets the consumer use provider resources without ownership transfer."),
  item("service-relationships", "A provider delivers laptops that become the consumer's property. What type of interaction is this?", ["Transfer of goods", "Access to resources", "Service action", "Continual improvement"], 0, "Physical goods transferred to the consumer are a transfer of goods."),
  item("service-relationships", "Which role uses the service directly?", ["Sponsor", "User", "Supplier", "Governing body"], 1, "The user is the role that uses the service."),

  item("itil-value-system", "Which component of the ITIL value system guides decisions and actions?", ["Guiding principles", "Service desk", "Configuration item", "Incident model"], 0, "Guiding principles guide decisions and actions."),
  item("itil-value-system", "What is the purpose of the service value chain?", ["To transform demand into value", "To replace governance", "To document every supplier contract", "To remove all practices"], 0, "The service value chain transforms demand into value."),
  item("itil-value-system", "Which component supports ongoing improvement at every level?", ["Continual improvement", "Incident management", "A known error", "A project board"], 0, "Continual improvement supports ongoing improvement across the organization."),
  item("itil-value-system", "Management practices should be understood as what?", ["Capabilities used to perform work", "Only process diagrams", "A replacement for governance", "Only supplier contracts"], 0, "Practices are organizational capabilities used to perform work or achieve objectives."),
  item("itil-value-system", "Which input usually starts value-system activity?", ["Demand or opportunity", "A closed ticket", "A retired supplier", "A completed review"], 0, "Demand and opportunities are inputs into the value system."),

  item("governance", "What are the three governance activities?", ["Plan, build, run", "Evaluate, direct, monitor", "Design, transition, operate", "Detect, resolve, close"], 1, "Governance uses evaluate, direct and monitor."),
  item("governance", "Which governance activity sets policies and priorities?", ["Evaluate", "Direct", "Monitor", "Support"], 1, "Direct sets direction, policies and priorities."),
  item("governance", "Which statement is correct?", ["Governance and management are identical", "Governance directs and monitors; management plans and executes", "Management always controls governance", "Governance only manages incidents"], 1, "Governance sets direction and monitors; management executes within that direction."),
  item("governance", "Which governance activity checks whether direction is being followed?", ["Evaluate", "Direct", "Monitor", "Build"], 2, "Monitor checks performance, compliance and progress."),
  item("governance", "A board reviews AI risk before setting policy. Which governance activity is mainly shown first?", ["Evaluate", "Direct", "Deliver", "Support"], 0, "Evaluating means assessing context, risk and options before direction is set."),

  item("guiding-principles", "Which guiding principle recommends using what already exists where it has value?", ["Focus on value", "Start where you are", "Keep it simple and practical", "Optimize and automate"], 1, "Start where you are means assess and reuse what is already useful."),
  item("guiding-principles", "Which principle recommends simplifying before automation?", ["Collaborate and promote visibility", "Optimize and automate", "Progress iteratively with feedback", "Think and work holistically"], 1, "Optimize and automate means optimize first, then automate where useful."),
  item("guiding-principles", "A team improves incident handling but creates more work for change teams. Which principle was ignored?", ["Think and work holistically", "Keep it simple and practical", "Start where you are", "Focus on value"], 0, "Thinking holistically avoids local improvements that damage the wider system."),
  item("guiding-principles", "Which principle recommends working in small steps and using feedback?", ["Progress iteratively with feedback", "Start where you are", "Keep it simple and practical", "Direct and monitor"], 0, "Progress iteratively with feedback uses manageable steps and learning."),
  item("guiding-principles", "Which principle recommends removing unnecessary complexity?", ["Focus on value", "Keep it simple and practical", "Collaborate and promote visibility", "Start where you are"], 1, "Keep it simple and practical means avoid unnecessary complexity."),

  item("product-service-lifecycle", "Which lifecycle activity identifies needs, opportunities and demand?", ["Discover", "Design", "Build", "Support"], 0, "Discover identifies needs, opportunities and demand."),
  item("product-service-lifecycle", "Which activity obtains components or services from third parties?", ["Build", "Acquire", "Operate", "Deliver"], 1, "Acquire obtains components, products or services from third parties."),
  item("product-service-lifecycle", "Which activity handles incidents and user issues?", ["Discover", "Design", "Support", "Acquire"], 2, "Support handles incidents, service requests and user support needs."),
  item("product-service-lifecycle", "Which activity moves a product or service into live use in a controlled way?", ["Transition", "Discover", "Support", "Engage"], 0, "Transition moves services or products into live use in a controlled way."),
  item("product-service-lifecycle", "What is the main difference between acquire and build?", ["Acquire is external; build is internal", "Acquire is always cheaper", "Build only means buying hardware", "There is no difference"], 0, "Acquire means obtaining externally; build means creating or configuring internally."),

  item("value-chain-practices", "Which service value chain activity understands stakeholder needs and maintains relationships?", ["Plan", "Engage", "Improve", "Obtain/build"], 1, "Engage is about stakeholders, needs and relationships."),
  item("value-chain-practices", "Which practice acts as the single point of contact for users?", ["Service desk", "Problem management", "Deployment management", "Supplier management"], 0, "The service desk is the single point of contact between provider and users."),
  item("value-chain-practices", "What is the purpose of problem management?", ["Restore service as quickly as possible", "Reduce likelihood and impact of incidents by managing causes", "Authorize every change", "Create all service requests"], 1, "Problem management manages causes of incidents and reduces likelihood and impact."),
  item("value-chain-practices", "What is the purpose of incident management?", ["Restore normal service operation as quickly as possible", "Document supplier contracts", "Approve all releases", "Create the business strategy"], 0, "Incident management restores normal service operation as quickly as possible."),
  item("value-chain-practices", "Which practice sets clear targets for service performance and monitors achievement?", ["Service level management", "Deployment management", "Knowledge management", "Risk management"], 0, "Service level management sets targets and monitors service level achievement."),

  item("value-streams-mapping", "What is a value stream?", ["A series of steps used to create and deliver value", "A server diagram", "A supplier invoice", "A user password reset"], 0, "A value stream is a series of steps used to create and deliver value."),
  item("value-streams-mapping", "What is lead time?", ["The time for one activity", "The total time from request to value delivered", "The time to restart a server", "The time between audits"], 1, "Lead time is the total elapsed time from request to value delivered."),
  item("value-streams-mapping", "A flow has seven handoffs and long waiting time between teams. What should be investigated?", ["Waste and bottlenecks", "More documentation only", "Removing all users", "Increasing approvals"], 0, "Excess handoffs often create waiting waste and bottlenecks."),
  item("value-streams-mapping", "What is cycle time?", ["The time to complete one activity", "The full customer relationship", "The total contract duration", "The time between audits"], 0, "Cycle time is the time taken to complete an individual activity."),
  item("value-streams-mapping", "What does value stream mapping help identify?", ["Waste, bottlenecks and improvement opportunities", "Only supplier names", "Only governance roles", "Only software licences"], 0, "Mapping helps reveal waste, bottlenecks and improvement opportunities."),

  item("continual-improvement", "What is the first step of the continual improvement model?", ["Take action", "What is the vision?", "Did we get there?", "How do we get there?"], 1, "The model starts by asking: What is the vision?"),
  item("continual-improvement", "Why measure the current state before improving?", ["To create a baseline", "To avoid feedback", "To remove governance", "To replace the service desk"], 0, "A baseline allows you to compare before and after improvement."),
  item("continual-improvement", "What is a continual improvement register used for?", ["Tracking improvement ideas and opportunities", "Storing user passwords", "Approving all changes", "Replacing incident records"], 0, "A continual improvement register tracks improvement ideas and opportunities."),
  item("continual-improvement", "Which question checks whether the target was achieved?", ["Where are we now?", "Did we get there?", "How do we keep momentum?", "What is the vision?"], 1, "Did we get there? is the step used to check whether the intended result was achieved."),
  item("continual-improvement", "What should happen after an improvement succeeds?", ["Stop all measurement", "Embed the improvement and keep momentum", "Remove all feedback", "Delete the baseline"], 1, "Successful improvements should be embedded and used to continue momentum."),

  item("itil-ai-frameworks", "How should AI initiatives be assessed?", ["By novelty only", "By their real contribution to value and risk control", "By removing all human oversight", "By supplier marketing material only"], 1, "AI should support value and be governed appropriately."),
  item("itil-ai-frameworks", "How do ITIL and DevOps complement each other?", ["DevOps replaces ITIL", "ITIL provides service management structure while DevOps supports collaboration and automation", "They are identical", "They cannot work together"], 1, "ITIL and DevOps can complement each other when integrated well."),
  item("itil-ai-frameworks", "What is ISO 20000?", ["An international standard for service management systems", "A programming language", "A chatbot framework", "A network cable standard"], 0, "ISO 20000 specifies requirements for a service management system."),
  item("itil-ai-frameworks", "What does Lean mainly help with?", ["Maximising value and reducing waste", "Replacing every ITIL practice", "Removing all governance", "Writing contracts only"], 0, "Lean focuses on value and waste reduction."),
  item("itil-ai-frameworks", "What is a key risk of using AI without governance?", ["Too much transparency", "Uncontrolled bias, poor accountability or unsafe decisions", "Guaranteed value", "No need for data quality"], 1, "AI needs governance because risks include bias, accountability gaps and unsafe outcomes."),
];

function item(sectionId, question, options, answer, explanation, status = "draft") {
  return {
    id: `${sectionId}-${String(QUESTION_BANK_PLACEHOLDER.next++).padStart(3, "0")}`,
    sectionId,
    question,
    options,
    answer,
    explanation,
    status,
  };
}

/* Rebuild IDs after array creation because item() is called before QUESTION_BANK_PLACEHOLDER exists in older browsers.
   This keeps the source readable and avoids manually maintaining every ID. */
QUESTION_BANK.forEach(function (question, index) {
  question.id = `${question.sectionId}-${String(index + 1).padStart(3, "0")}`;
});

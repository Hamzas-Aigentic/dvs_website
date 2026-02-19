export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Why DVS", href: "#why-dvs" },
  { label: "Tech Stack", href: "#tech" },
] as const;

export const SERVICES = [
  {
    title: "AI-Powered Internal Tools",
    description:
      "RAG assistants, help desk bots, and internal knowledge search that actually understand your company's data.",
  },
  {
    title: "Data Pipeline & ETL",
    description:
      "LLM-powered data transformation. Messy PDFs, spreadsheets, and transcripts in — clean, structured intelligence out.",
  },
  {
    title: "Workflow Automation",
    description:
      "n8n orchestration, webhook architectures, and system integrations that eliminate manual handoffs across your stack.",
  },
  {
    title: "AI Agent Design",
    description:
      "Multi-agent systems with faithfulness scoring, hallucination detection, and evaluation frameworks baked in from day one.",
  },
  {
    title: "Conversational AI",
    description:
      "Guided conversation experiences that replace manual intake — from customer discovery to structured data extraction.",
  },
  {
    title: "Content & Brand Automation",
    description:
      "Always-on content pipelines with human-in-the-loop oversight. Research, generation, approval, and publishing — automated.",
  },
  {
    title: "Rapid Prototyping & MVPs",
    description:
      "From first sketch to functional prototype. For teams testing new ideas or businesses building their first product.",
  },
  {
    title: "Full-Stack AI Delivery",
    description:
      "End-to-end: discovery, design, build, deploy, and measure. One team, the entire AI lifecycle, no gaps.",
  },
] as const;

export const PROCESS_STEPS = [
  {
    id: "1",
    name: "Discovery",
    title: "We Start by Listening",
    description:
      "Stakeholder interviews, call transcript reviews, process mapping. We prove we understand your problem before writing a single line of code.",
  },
  {
    id: "2",
    name: "Design",
    title: "Architecture Before Code",
    description:
      "System design, data flow mapping, integration blueprints, and evaluation criteria. Every project gets a technical spec that both engineers and executives can read.",
  },
  {
    id: "3",
    name: "Build",
    title: "Production-Grade from Day One",
    description:
      "Python and FastAPI backends, n8n orchestration, LLM pipelines with proper error handling, retry logic, and observability. No throwaway prototypes.",
  },
  {
    id: "4",
    name: "Deploy",
    title: "Ship to Real Users",
    description:
      "Docker containers, cloud infrastructure, CI/CD pipelines, and monitoring dashboards. Your system goes live with real traffic, not a demo environment.",
  },
  {
    id: "5",
    name: "Measure",
    title: "Systems That Improve Themselves",
    description:
      "LangWatch observability, faithfulness scoring, accuracy tracking, and prompt iteration. Every system ships with its own evaluation framework.",
  },
] as const;

export const DIFFERENTIATORS = [
  {
    number: "01",
    title: "Builders, Not Advisors",
    description:
      "We write code, not slide decks. Every system listed on this site was designed, coded, deployed, and monitored hands-on by our team.",
    accent: "Every engagement results in a working production system.",
  },
  {
    number: "02",
    title: "Production-Grade, Not Prototypes",
    description:
      "The systems we build run in production, get used daily by real teams, and have evaluation systems measuring their accuracy. Not demos that sit on a shelf.",
    accent: "Built with Docker, CI/CD, and real infrastructure.",
  },
  {
    number: "03",
    title: "Business Problems First",
    description:
      "Every engagement starts with the operational pain point — not a hypothesis about what AI could do. The technology is the means, not the end.",
    accent: "Discovery-first approach. Always.",
  },
  {
    number: "04",
    title: "Full-Stack AI Delivery",
    description:
      "From data extraction to LLM processing to evaluation to deployment. One team handles your entire lifecycle — no handoffs to juggle.",
    accent: "Discovery → Design → Build → Deploy → Measure.",
  },
  {
    number: "05",
    title: "Systems That Improve",
    description:
      "Built-in evaluation frameworks, accuracy tracking, and systematic prompt iteration mean your AI systems get measurably better over time.",
    accent: "LangWatch observability on every deployment.",
  },
] as const;

export const TECH_CATEGORIES = [
  {
    category: "AI & LLM",
    items: ["Claude (Anthropic)", "GPT-4 (OpenAI)", "Gemini (Google)", "Cohere"],
  },
  {
    category: "Orchestration",
    items: ["n8n", "LangChain", "LangGraph", "Custom Agents"],
  },
  {
    category: "Data & Storage",
    items: ["Supabase", "PGVector", "Neo4j", "PostgreSQL"],
  },
  {
    category: "Infrastructure",
    items: ["AWS", "Docker", "FastAPI", "Python"],
  },
  {
    category: "Evaluation",
    items: ["LangWatch", "Custom Evals", "Faithfulness Scoring", "Prompt Iteration"],
  },
  {
    category: "Extraction",
    items: ["Docling", "Playwright", "Custom ETL", "Webhook Pipelines"],
  },
] as const;

export const TECH_LOGOS = [
  { name: "Anthropic" },
  { name: "OpenAI" },
  { name: "Google" },
  { name: "n8n" },
  { name: "Supabase" },
  { name: "AWS" },
  { name: "Docker" },
  { name: "Python" },
  { name: "LangChain" },
  { name: "Neo4j" },
] as const;

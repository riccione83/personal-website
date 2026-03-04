export interface FeaturedBookEdition {
  name: string;
  inLanguage: string;
  url: string;
  coverImage: string;
  description: string;
  details?: string[];
  datePublished?: string;
  isbn?: string;
  highlights?: string[];
  audience?: string[];
}

export interface FeaturedBook {
  name: string;
  description: string;
  canonicalPath: string;
  inLanguage: string;
  authorName: string;
  image: string;
  datePublished?: string;
  editions: FeaturedBookEdition[];
}

export const featuredBook: FeaturedBook = {
  name: "Books",
  description:
    "Engineering field reports on training local AI language models. Available in English and Italian editions.",
  canonicalPath: "/books",
  inLanguage: "it",
  authorName: "Riccardo Rizzo",
  image: "/images/books/ingegnerizzare-llm-it.jpg",
  datePublished: "2026-02-26",
  editions: [
    {
      name: "Engineering a Small AI Language Model: Training, Evaluation, and Deployment Without Myth",
      inLanguage: "en",
      url: "https://www.amazon.co.uk/dp/B0GQMN4L1S",
      coverImage: "/images/books/engineering-small-ai-language-model-en.jpg",
      isbn: "9798249006907",
      description:
        "Large language models often appear magical from the outside. This book removes that illusion.",
      details: [
        "Engineering a Small AI Language Model is a practical, technically grounded account of what it actually means to design, train, evaluate, and deploy a modern GPT-style system under real-world constraints.",
        "Written from the perspective of a single engineer, this is not a high-level overview and not a simplified tutorial.",
        "It is a detailed exploration of the entire system behind a language model: from tokenisation and architecture to data distribution, optimisation dynamics, and production deployment.",
        "This is not a theoretical treatise. This is not a beginner-friendly hello world guide.",
        "It is a field report from the engineering boundary, where ideas collide with hardware, data, and time.",
      ],
      highlights: [
        "The physical limits of VRAM, throughput, and long training cycles",
        "Tokenisation as a structural interface, not just preprocessing",
        "How data distribution shapes model behaviour more than architecture",
        "Training under real constraints with LoRA and QLoRA",
        "Building evaluation pipelines, regression gates, and stability checks",
        "The real difference between fluency, reliability, and system design",
      ],
      audience: [
        "You want to build or fine-tune your own language model",
        "You care about engineering trade-offs, not just theory",
        "You want to understand what actually happens behind the API layer",
        "You are working with limited hardware and real constraints",
      ],
    },
    {
      name: "Ingegnerizzare un piccolo modello linguistico di IA: Addestramento, valutazione e messa in produzione senza miti",
      inLanguage: "it",
      url: "https://www.amazon.it/dp/B0GQN7LSQQ",
      coverImage: "/images/books/ingegnerizzare-llm-it.jpg",
      datePublished: "2026-02-26",
      isbn: "979-8249941239",
      description:
        "Large language models can appear magical from the outside. This Italian edition removes that illusion with a practical, engineering-first perspective.",
      details: [
        "It is a practical and technically grounded account of what it means to design, train, evaluate, and deploy a modern GPT-style language model under real constraints.",
        "Written from the perspective of a single engineer working on consumer hardware, it covers the full system: tokenization, architecture, data distribution, optimization dynamics, and deployment contracts.",
        "This is not a tutorial and not a purely theoretical treatise.",
        "It is a field report from the engineering boundary, where ideas meet hardware, data, and time.",
      ],
      highlights: [
        "Physical limits of VRAM, throughput, and long training cycles",
        "Tokenization as a structural interface, not just preprocessing",
        "How data distribution shapes behavior more than architecture",
        "LoRA, QLoRA, and training under strict hardware constraints",
        "Evaluation pipelines, regression gates, and behavioral stability",
        "The difference between fluency, reliability, and real system design",
      ],
    },
  ],
};

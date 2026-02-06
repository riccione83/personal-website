export interface BlogArticle {
  author?: string;
  authorRole?: string;
  slug: string;
  title: string;
  source: string;
  date: string;
  excerpt: string;
  coverImage?: string;
  originalUrl?: string;
  readTime?: string;
  sections: Array<{
    title: string;
    paragraphs?: string[];
    bullets?: string[];
    codeBlocks?: Array<{
      language: string;
      code: string;
    }>;
    examples?: Array<{
      label: string;
      prompt: string;
      response: string;
    }>;
  }>;
}

export const blogArticles: BlogArticle[] = [
  {
    author: "Riccardo Rizzo",
    authorRole: "Tech Lead | Cloud computing, Typescript, DevOps",
    slug: "building-llm-from-scratch",
    title:
      "Building a Large Language Model from Scratch on Consumer Hardware: From Dataset to Instruction Fine Tuning",
    source: "LinkedIn Article",
    date: "2026-01-19",
    readTime: "4 min read",
    excerpt:
      "A practical write-up on building, training, and adapting a GPT-style model from scratch on consumer hardware.",
    coverImage:
      "https://media.licdn.com/dms/image/v2/D4E12AQH7ynXhF-70aw/article-cover_image-shrink_720_1280/B4EZvXuyINGsAQ-/0/1768850928192?e=2147483647&v=beta&t=_GsrXa0gvbmcX1XHlv9CLwEC0XgK02XCRUOAMz4UZb4",
    originalUrl:
      "https://www.linkedin.com/pulse/building-large-language-model-from-scratch-consumer-hardware-rizzo-ldc9e/",
    sections: [
      {
        title: "Challenge",
        paragraphs: [
          "Over the past few days I set myself a challenge: build, train and deploy a GPT-style language model from scratch, without relying on pre-trained weights or closed APIs, using commodity hardware and open datasets.",
        ],
      },
      {
        title: "Introduction",
        paragraphs: [
          "Large language models have become central to AI applications, yet training them often appears to require vast computational resources.",
          "In this article I share a workflow for creating a medium sized LLM, capable of following instructions, entirely on consumer grade hardware with 16 gigabytes of GPU memory.",
          "The model discussed here, V3, has approximately 184 million parameters and has been optimised for effective training on an RTX 5070 Ti.",
        ],
      },
      {
        title: "Preparing the Dataset",
        paragraphs: [
          "A high quality dataset is the backbone of any language model. For V3 I combined multiple sources into a single training corpus of roughly 12 gigabytes. These include:",
        ],
        bullets: [
          "Wikipedia articles to provide general knowledge and structured text.",
          "FineWeb Edu, a curated educational dataset, for factual and instructional content.",
          "Books from public domain sources, ensuring narrative and diverse language styles.",
          "Code datasets such as StarCoderData and CodeParrot, allowing the model to learn programming syntax.",
          "Question and answer datasets for reasoning and instruction following.",
        ],
      },
      {
        title: "Streaming and tokenisation",
        paragraphs: [
          "The data preparation process includes cleaning text, removing unknown tokens, normalising whitespace and streaming the corpus efficiently in chunks to avoid memory overflow.",
          "This strategy ensures that even large datasets can be handled on a single GPU, and supports resuming interrupted training from exact byte positions.",
          "Here is a simplified snippet illustrating the streaming and tokenisation process:",
        ],
        codeBlocks: [
          {
            language: "python",
            code: `class StreamingTextDataset(torch.utils.data.IterableDataset):
    def __init__(self, path, tokenizer, block_size, chunk_size, start_byte=0):
        self.path = path
        self.tokenizer = tokenizer
        self.block_size = block_size
        self.chunk_size = chunk_size
        self.start_byte = start_byte

    def __iter__(self):
        with open(self.path, encoding="utf-8") as f:
            if self.start_byte > 0:
                f.seek(self.start_byte)
            buffer = []
            while True:
                chunk = f.read(self.chunk_size)
                if not chunk:
                    break
                tokens = self.tokenizer.encode(chunk, out_type=int)
                buffer.extend(tokens)
                while len(buffer) >= self.block_size + 1:
                    seq = buffer[:self.block_size + 1]
                    buffer = buffer[self.block_size // 2:]
                    yield torch.tensor(seq[:-1]), torch.tensor(seq[1:])`,
          },
        ],
      },
      {
        title: "Designing the Model Architecture",
        paragraphs: [
          "The V3 model follows a causal transformer architecture with 16 layers, embedding dimension of 896, 14 attention heads, and a context window of 768 tokens.",
          "Each block consists of a layer normalisation, multi head attention and a feed forward network using GELU activations.",
          "Weight tying is employed between the input embedding and output projection layers, reducing the number of parameters and improving learning efficiency.",
        ],
      },
      {
        title: "Optimising Training for Consumer Hardware",
        paragraphs: [
          "Several techniques were used to train efficiently on a 16 gigabyte GPU:",
        ],
        bullets: [
          "Mixed precision training (FP16) to reduce memory usage and accelerate computation.",
          "Gradient accumulation to simulate larger batch sizes without exceeding VRAM limits.",
          "Byte offset tracking and streaming datasets to avoid reloading data when resuming from checkpoints.",
          "Checkpointing at regular intervals and emergency saving on interruption to ensure training progress is never lost.",
          "Cosine learning rate scheduling with warmup for stable convergence.",
        ],
      },
      {
        title: "Training time considerations",
        paragraphs: [
          "On my hardware setup (single consumer GPU with 16 GB of VRAM), training the base V3 model is a long running process.",
          "A full training run takes approximately 12 days of continuous training, including checkpointing and periodic evaluation.",
          "This constraint strongly influenced architectural choices, dataset streaming design and the use of mixed precision and gradient accumulation.",
          "A training snippet demonstrates mixed precision optimisation:",
        ],
        codeBlocks: [
          {
            language: "python",
            code: `if USE_MIXED_PRECISION:
    with torch.amp.autocast('cuda'):
        loss = F.cross_entropy(model(x), y) / GRAD_ACCUM
    scaler.scale(loss).backward()
else:
    loss = F.cross_entropy(model(x), y) / GRAD_ACCUM
    loss.backward()`,
          },
        ],
      },
      {
        title: "Creating a High Quality Instruction Dataset",
        paragraphs: [
          "To enable the model to follow instructions, I generated approximately 1500 carefully curated examples across seven categories:",
        ],
        bullets: [
          "Mathematics covering arithmetic, algebra, word problems and geometry.",
          "Science including physics, chemistry and biology basics.",
          "Geography and history facts.",
          "Definitions of common concepts.",
          "Simple Python programming tasks.",
          "Reasoning exercises including logic and cause effect scenarios.",
          "Creative writing prompts, analogies and short stories.",
        ],
      },
      {
        title: "Instruction Fine Tuning",
        paragraphs: [
          "Each example is structured as an instruction paired with the expected output.",
          "Examples that exceed the model's context window are filtered, and the remaining examples are shuffled for diversity.",
          "Instruction fine tuning is performed by loading the base V3 model and training it on the instruction dataset with a low learning rate to preserve previously learned knowledge.",
          "The process uses the same mixed precision optimisations, gradient accumulation and cosine learning rate scheduler as the base training.",
          "After a few epochs, the model becomes capable of following complex instructions, generating code, solving reasoning tasks and producing creative text.",
          "A snippet illustrating the dataset preparation for fine tuning:",
        ],
        codeBlocks: [
          {
            language: "python",
            code: `class InstructionDataset(torch.utils.data.Dataset):
    def __init__(self, json_path, tokenizer, block_size):
        with open(json_path, 'r', encoding='utf-8') as f:
            data = json.load(f)
        self.examples = [
            tokenizer.encode(f"Instruction: {item['instruction']}\\nOutput: {item['output']}", out_type=int)
            for item in data if len(tokenizer.encode(item['instruction'])) <= block_size
        ]`,
          },
        ],
      },
      {
        title: "What the Model Can Do",
        paragraphs: [
          "After instruction fine tuning, the V3 model is capable of understanding and responding to a wide range of instructions. Here are some representative examples:",
        ],
        examples: [
          {
            label: "1. Mathematics",
            prompt: "Instruction: Solve for x in the equation 2x + 7 = 15.",
            response: "x = (15 - 7) / 2 = 4",
          },
          {
            label: "2. Science",
            prompt: "Instruction: Explain why the sky is blue.",
            response:
              "The sky appears blue because molecules in the atmosphere scatter blue light from the sun more than they scatter red light. This scattering causes more blue light to reach our eyes.",
          },
          {
            label: "3. Geography and History",
            prompt:
              "Instruction: What is the capital of Canada and why is it significant?",
            response:
              "The capital of Canada is Ottawa. It is significant because it is the seat of the federal government and home to many national institutions.",
          },
          {
            label: "4. Code Generation",
            prompt:
              "Instruction: Write a Python function to return the factorial of a number.",
            response: `def factorial(n):
    if n == 0 or n == 1:
        return 1
    return n * factorial(n - 1)`,
          },
          {
            label: "5. Reasoning",
            prompt:
              "Instruction: If all mammals have lungs and whales are mammals, do whales have lungs?",
            response:
              "Yes, whales have lungs because they are mammals, and all mammals have lungs.",
          },
          {
            label: "6. Creative Writing",
            prompt: "Instruction: Write a short metaphor for time.",
            response:
              "Time is a flowing river; once a moment passes, it never returns.",
          },
          {
            label: "7. Multi-step Instruction Following",
            prompt:
              "Instruction: Solve this problem and explain your steps: A store has 50 apples. If 15 are sold and 10 more are delivered, how many apples are in the store now?",
            response: `Step 1: Start with 50 apples.
Step 2: Subtract the 15 sold apples -> 50 - 15 = 35 apples.
Step 3: Add the 10 delivered apples -> 35 + 10 = 45 apples.
Answer: The store now has 45 apples.`,
          },
        ],
      },
      {
        title: "Results and Conclusion",
        paragraphs: [
          "Using this workflow, it is possible to build a medium sized LLM capable of understanding instructions, generating coherent text and performing reasoning tasks on consumer hardware.",
          "Key takeaways include:",
        ],
        bullets: [
          "Combining diverse sources produces a robust and generalisable base model.",
          "Streaming datasets and checkpointing strategies are essential for large corpora on limited hardware.",
          "Careful instruction dataset design and low learning rate fine tuning enables instruction following without catastrophic forgetting.",
          "Mixed precision and gradient accumulation make training feasible on a single 16 gigabyte GPU.",
        ],
      },
      {
        title: "Final note",
        paragraphs: [
          "This approach demonstrates that high quality LLMs can be developed without requiring massive infrastructure, making experimentation and iteration accessible to individual researchers and small teams.",
          "Want to try it in action? https://github.com/riccione83/tiny-llm",
        ],
      },
    ],
  },
];

export const getArticleBySlug = (slug: string) =>
  blogArticles.find((article) => article.slug === slug);

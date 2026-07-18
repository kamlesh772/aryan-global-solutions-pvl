import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy-loaded GoogleGenAI client
let aiClient: GoogleGenAI | null = null;

function getGemini(): GoogleGenAI {
  if (!aiClient) {
    const key = process.env.GEMINI_API_KEY;
    if (!key) {
      throw new Error("GEMINI_API_KEY environment variable is not defined in the workspace secrets.");
    }
    aiClient = new GoogleGenAI({
      apiKey: key,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  }
  return aiClient;
}

// Custom system instruction for Aryan Global Solutions
const SYSTEM_INSTRUCTION = `You are a premium, highly knowledgeable AI Chat Assistant for Aryan Global Solutions (AGS).
AGS is an elite custom software engineering, AI-powered automation grids, and high-performance client systems agency delivering next-generation digital transformation.

Office Locations: Silicon Valley, London, Dubai.
Contact/Inquiries Email: aryanjain772@gmail.com
SLA: We provide uptime guarantees and strict service level agreements (SLAs) for enterprise deployments.
Pricing Philosophy: No hidden costs, fixed-price contracts scoped on clear deliverables.
Target Audience: CTOs, VPs of Engineering, product managers, startup founders, and enterprise executives looking for elite 1% engineering talent.

Your tone should be:
- Exceptionally professional, elegant, confident, and direct.
- Knowledgeable about software architecture, ERP systems, digital transformation, cloud migrations, and artificial intelligence (OpenAI, Gemini, LLMs, automation).
- Friendly and cooperative, but focused on directing prospective clients to book an Architectural Discovery Call or contact the engineering team.

Keep answers concise, structured (using markdown if needed), and aligned with our capabilities. Always be ready to respond in the language the user speaks (Arabic, French, German, Hindi, or English).`;

// API endpoint for AI assistant chat
app.post("/api/chat", async (req, res) => {
  try {
    const { message, history } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message is required." });
    }

    let responseText = "";

    try {
      const ai = getGemini();
      
      const contents: any[] = [];
      
      if (Array.isArray(history)) {
        history.forEach((turn: any) => {
          if (turn.role && turn.text) {
            contents.push({
              role: turn.role === "assistant" ? "model" : "user",
              parts: [{ text: turn.text }]
            });
          }
        });
      }
      
      // Append the latest message
      contents.push({
        role: "user",
        parts: [{ text: message }]
      });

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: contents,
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.7,
        }
      });

      responseText = response.text || "";
    } catch (apiError: any) {
      console.error("Gemini API Error:", apiError);
      
      const isMissingKey = apiError.message && apiError.message.includes("GEMINI_API_KEY");
      
      if (isMissingKey) {
        // Generate intelligent offline helper response
        const msgLower = message.toLowerCase();
        if (msgLower.includes("price") || msgLower.includes("pricing") || msgLower.includes("cost")) {
          responseText = "Aryan Global Solutions operates under a completely transparent, fixed-price pricing model backed by strict Service Level Agreements (SLAs). We scope out your exact deliverables in sprints, ensuring no surprise bills or hidden costs. Would you like to check out our **Pricing Calculator** on the page, or schedule a custom **Architectural Discovery Call** to map your project?";
        } else if (msgLower.includes("services") || msgLower.includes("what do you do") || msgLower.includes("capability")) {
          responseText = "We specialize in custom enterprise software architectures, high-performance web applications, AI automation grids (such as intelligent agency integration and custom fine-tuned pipelines), ERP orchestrations, and secure cloud migrations. All of our deployments come with uptime SLAs and premium ongoing support.";
        } else if (msgLower.includes("contact") || msgLower.includes("email") || msgLower.includes("phone")) {
          responseText = "You can reach Aryan Global Solutions directly via email at **aryanjain772@gmail.com**. Our physical desks are located in major tech hubs: Silicon Valley, London, and Dubai. Alternatively, you can schedule a call immediately using the interactive scheduling panel on this website!";
        } else if (msgLower.includes("location") || msgLower.includes("office") || msgLower.includes("where")) {
          responseText = "We operate internationally with core representative offices in **Silicon Valley**, **London**, and **Dubai**. This allows our elite engineering teams to offer 24/7 round-the-clock service and secure global deliveries.";
        } else {
          responseText = "Thank you for reaching out to Aryan Global Solutions. I am your premium AI assistant. Currently, we are running in **Local Development Fallback Mode** because the `GEMINI_API_KEY` is not yet configured in your Settings > Secrets panel. \n\nHow can I help you map out your enterprise roadmap, cloud migration, or custom software requirements?";
        }
      } else {
        throw apiError;
      }
    }

    return res.json({ response: responseText });
  } catch (error: any) {
    return res.status(500).json({ error: error.message || "An unexpected error occurred." });
  }
});

// Vite / static file serving middleware
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();

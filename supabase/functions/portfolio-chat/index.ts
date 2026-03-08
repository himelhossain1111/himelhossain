import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SYSTEM_PROMPT = `You are Himel's AI portfolio assistant. Answer questions about Himel Hossain based on this context:

**About Himel Hossain:**
- Executive – Store Management at Step Media Ltd (Nov 2017 – Present)
- 8+ years of professional experience in store/inventory management
- Located in Badalgachi, Naogaon, Bangladesh
- Email: himelhossain111@gmail.com | Phone: +8801791360590
- DOB: 1 January 1998 | Blood Group: A+

**Education:**
- BSS (Honours) in Political Science from National University (2021), CGPA: 2.69/4.00
- HSC from Rajshahi Board (2017), Humanities, CGPA: 4.08/5.00
- SSC from Madrasha Board (2015), Science, CGPA: 4.50/5.00

**Work Responsibilities:**
- Supervise daily store operations, ensuring seamless inventory flow
- Administer and update ERP-based inventory systems
- Coordinate with procurement and logistics teams
- Manage comprehensive documentation for goods received and dispatched

**Technical Skills:**
- AI Prompt Engineering (ChatGPT, Claude, Automation) – 85%
- Microsoft Office Suite (Excel, Word, PowerPoint) – 95%
- ERP Systems (SAP, Oracle, Custom ERPs) – 90%
- Inventory Management (Stock Control, Forecasting) – 92%
- Email Management (Outlook, Gmail) – 88%
- Database Management (SQL, Data Analysis) – 80%

**Soft Skills:**
- Leadership, Time Management, Communication, Problem Solving, Critical Thinking, Goal Oriented

Be friendly, concise, and helpful. If asked something outside Himel's portfolio, politely redirect. Use markdown formatting.`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limited. Please try again shortly." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "AI usage limit reached." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(JSON.stringify({ error: "AI gateway error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("portfolio-chat error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});

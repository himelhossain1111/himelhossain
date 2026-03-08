

## Plan: Add AI Chatbot Assistant Button

### Overview
Add a floating AI chatbot button in the bottom-right corner of the portfolio. When clicked, it opens a chat dialog where visitors can ask questions about Himel and get AI-powered responses. This requires Lovable Cloud + Lovable AI Gateway.

### Components to Create

1. **`src/components/portfolio/AIChatButton.tsx`** - Floating button (bottom-right, fixed position) with a chat/sparkles icon. Animated with framer-motion. On click, opens a chat dialog.

2. **`src/components/portfolio/AIChatDialog.tsx`** - Chat panel/modal containing:
   - Header with title and close button
   - Scrollable message area (user + assistant messages)
   - Input field with send button
   - Markdown rendering for AI responses (install `react-markdown`)
   - Streaming support for real-time token display

### Backend

3. **`supabase/functions/portfolio-chat/index.ts`** - Edge function that:
   - Accepts messages array
   - Adds a system prompt with Himel's portfolio context (role, skills, experience, etc.)
   - Streams response from Lovable AI Gateway using `google/gemini-3-flash-preview`
   - Handles CORS, 429/402 errors

4. **Update `supabase/config.toml`** - Register the new edge function with `verify_jwt = false`

### Integration

5. **`src/pages/Index.tsx`** - Add the `AIChatButton` component to the page

### Dependencies
- Install `react-markdown` for rendering AI responses
- Enable Lovable Cloud (required for edge functions + LOVABLE_API_KEY)

### UI Design
- Floating button: rounded, primary-colored, with pulse animation, `bottom-6 right-6`
- Chat panel: glass-card styled dialog matching the portfolio's dark/teal theme
- Smooth open/close animations via framer-motion


# 🌙 Dream Decoder

> *"Between sleep and waking, truth reveals itself."*

**Dream Decoder** adalah oracle AI mistis yang menginterpretasikan mimpimu menggunakan simbolisme arketipe, mitologi, dan spiritualisme Timur. Karakter AI-nya terinspirasi dari Enma Ai (Hell Girl) — dingin, ethereal, namun penuh makna.

---

## ✨ Features

- 🎭 **Oracle Character** — Yomi, gadis oracle dengan estetika dark ethereal (Enma Ai vibe)
- 🌑 **Symbol Decoder** — Setiap elemen mimpi dianalisis dengan makna arketipe & bayangan
- 🔮 **Daily Prophecy** — Ramalan untuk harimu berdasarkan mimpi semalam
- ⚠️ **Shadow Warning** — Satu peringatan kriptik dari Oracle
- 幽 **Spirit Word** — Satu kata Jepang yang merangkum esensi mimpimu
- 🕯️ **Ritual** — Ritual kecil yang bisa dilakukan hari ini
- 📊 **Intensity Meter** — Seberapa kuat/signifikan mimpimu secara spiritual

---

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v3
- **AI**: Google Gemini 1.5 Flash
- **Deploy**: Vercel

---

## 🚀 Setup

### 1. Clone & Install

```bash
git clone <repo-url>
cd dream-decoder
npm install
```

### 2. Environment Variables

Buat file `.env.local`:

```env
GEMINI_API_KEY=your_gemini_api_key_here
```

Dapatkan API key di: [Google AI Studio](https://aistudio.google.com/)

### 3. Run Development

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
dream-decoder/
├── app/
│   ├── layout.tsx              # Root layout + metadata
│   ├── page.tsx                # Main page (SPA — idle/loading/result)
│   ├── result/page.tsx         # Result route (redirects to home)
│   ├── api/decode/route.ts     # Gemini API endpoint
│   └── globals.css             # Global dark aesthetic styles
│
├── components/
│   ├── DreamInput.tsx          # Textarea + submit
│   ├── OracleResponse.tsx      # Full reading display
│   ├── OracleAvatar.tsx        # SVG character (Enma Ai inspired)
│   ├── LoadingWhisper.tsx      # Loading state with rotating whispers
│   └── ui/Button.tsx           # Styled button component
│
├── lib/
│   ├── gemini.ts               # Gemini API connection + types
│   ├── prompt.ts               # Oracle persona system prompt
│   └── utils.ts                # Helpers
│
└── public/                     # Static assets
```

---

## 🌐 Deploy ke Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variable di Vercel dashboard:
# GEMINI_API_KEY = your_key
```

Atau push ke GitHub dan import di [vercel.com](https://vercel.com).

---

## 🎨 Design Philosophy

- **Aesthetic**: Dark ethereal — void black, blood crimson, spirit blue, oracle gold
- **Typography**: Cinzel Decorative (display) + Cormorant Garamond (body)
- **Vibe**: Japanese horror meets Western occultism meets Jungian psychology
- **Character**: Yomi — tidak menghibur, tapi mengungkap kebenaran

---

*The Oracle sees all dreams. No dream is too strange.*

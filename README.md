# 🧠 MindGraph Lite — Frontend

Welcome to **MindGraph Lite**, a simple and minimal visual mind-mapping tool to capture, connect, and share ideas easily.

---

## 📦 Tech Stack

- **Frontend Framework**: Vite + React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI
- **Routing**: React Router v6
- **Form Handling**: Shadcn forms (future)
- **State Management**: (Local State for now)

---

## 📂 Folder Structure

src/
├── App.tsx               # Main application and routes
├── main.tsx              # React DOM rendering with router
├── index.css             # Tailwind CSS entry
├── components/
│   └── layout/
│       └── Navbar.tsx     # Navigation Bar
├── pages/
│   ├── Home.tsx           # Welcome / Landing page
│   ├── Upload.tsx         # Upload files (future: graphs)
│   └── Explore.tsx        # Browse shared mind graphs
└── lib/
    └── utils.ts           # (for utilities and helpers if needed)

---

## 🗺️ Pages Breakdown

| Route         | File           | Purpose |
| -------------- | -------------- | ------- |
| `/`            | Home.tsx        | Welcome text and introduction |
| `/upload`      | Upload.tsx      | Upload files (PDF, TXT - in future) |
| `/explore`     | Explore.tsx     | Explore public mindmaps |

---

## 🚀 How to Run Locally

### 1. Clone this repository

git clone https://github.com/your-username/mindgraph-lite-frontend.git
cd mindgraph-lite-frontend

### 2. Install dependencies

npm install

### 3. Start the development server

npm run dev

Open http://localhost:5173 in your browser.

---

## 🎨 UI Design Expectations

- Fully responsive using **Tailwind CSS** utilities.
- Beautiful and minimal using **Shadcn UI** components.
- Ready to be expanded with **Graph Visualization Libraries** later (ex: React Flow, D3.js).

---

## 🔥 Future Enhancements

- Drag and Drop Graph creation
- AI-powered Mind Map suggestions
- Collaborate & share mindmaps
- User authentication

---

## 📜 License

This project is licensed under MIT.
"""
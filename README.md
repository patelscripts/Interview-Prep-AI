# 🚀 AI Interview Prep Platform

A full-stack AI-powered web application designed to help developers prepare for technical interviews with **smart question generation, answers, and concept explanations**.

---

## ✨ Features

### 🧠 AI-Powered Interview Preparation

* Generate **role-based interview questions**
* Get **clear and beginner-friendly answers**
* Click **"Learn More"** to get in-depth concept explanations

### 📌 Smart Session Management

* Save interview sessions
* Pin important questions
* Track topics and experience level

### 🎨 Modern UI/UX

* Clean dashboard layout
* Animated components (Framer Motion)
* Skeleton loaders for smooth experience
* Drawer-based explanation view

---

## 🛠️ Tech Stack

**Frontend:**

* React (Vite)
* Tailwind CSS
* Framer Motion
* Axios

**Backend:**

* Node.js
* Express.js
* MongoDB

**AI Integration:**

* Google Gemini API

---

## 📂 Project Structure

```
client/        → Frontend (React)
server/        → Backend (Node + Express)
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/ai-interview-prep.git
cd ai-interview-prep
```

---

### 2️⃣ Setup Backend

```bash
cd server
npm install
```

Create a `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_url
GEMINI_API_KEY=your_api_key
JWT_SECRET=your_secret
```

Run backend:

```bash
npm run server
```

---

### 3️⃣ Setup Frontend

```bash
cd client
npm install
npm run dev
```

---

## 🌐 API Endpoints

### 🔹 AI Routes

* `POST /api/ai/generate-questions`
* `POST /api/ai/generate-explanation`

### 🔹 Session Routes

* Create session
* Get session
* Pin questions

---

## 🤝 Contributing / Forking Guide

Want to improve this project? You're welcome! 🎉

### 🍴 Fork the Project

1. Click **Fork** (top right)
2. Clone your fork:

```bash
git clone https://github.com/your-username/ai-interview-prep.git
```

3. Create a new branch:

```bash
git checkout -b feature/your-feature-name
```

4. Make your changes

5. Commit:

```bash
git commit -m "Add: your feature"
```

6. Push:

```bash
git push origin feature/your-feature-name
```

7. Open a **Pull Request**

---

## 💡 What You Can Build On Top

* 🔥 Add authentication (Google / GitHub login)
* 📊 Progress tracking dashboard
* 🧪 Mock interview mode (timer + scoring)
* 🎙️ Voice-based AI interview
* 📱 Mobile responsive improvements
* 🧠 Personalized AI recommendations

---

## 📸 Future Improvements

* Better AI formatting (code blocks, bullets)
* Save explanations history
* Dark/Light theme toggle
* Real-time collaboration

---

## 🙌 Contribution Ideas

* Improve UI animations
* Optimize API performance
* Add new AI prompts
* Fix bugs & improve UX

---

## 📄 License

This project is open-source and available under the **MIT License**.

---

## 💬 Final Note

This project is built to **learn, build, and grow** 🚀
If you like it, give it a ⭐ and feel free to contribute!

---

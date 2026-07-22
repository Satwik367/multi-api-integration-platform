# 🚀 APIFlow AI - Multi API Integration Platform

A modern full-stack API integration platform that allows developers to interact with multiple APIs from a single dashboard. APIFlow AI provides authentication, workflow automation, AI-powered execution, execution logging, and API monitoring.

🌐 **Live Demo:** https://multi-api-integration-platform-x4tc.vercel.app/

🔗 **Backend API:** https://multi-api-backend.onrender.com/

---

# ✨ Features

- 🔐 JWT Authentication
- 🌤 Weather API Integration
- 📰 News API Integration
- 💰 Currency Exchange API
- 🐙 GitHub User Lookup
- 🤖 Google Gemini AI Integration
- ⚙️ Workflow Creation & Execution
- 📜 Execution Logs
- 📊 Dashboard Analytics
- ☁️ Fully Cloud Deployed

---

# 🖥 Tech Stack

## Frontend

- React.js
- Vite
- Axios
- React Router DOM
- CSS

## Backend

- Node.js
- Express.js
- MongoDB Atlas
- JWT Authentication
- Mongoose

## APIs Used

- OpenWeather API
- News API
- Exchange Rate API
- GitHub REST API
- Google Gemini API

## Deployment

- Frontend → Vercel
- Backend → Render
- Database → MongoDB Atlas

---

# 📂 Project Structure

```
multi-api-integration-platform
│
├── frontend
│   ├── src
│   ├── components
│   ├── pages
│   ├── services
│   └── ...
│
├── backend
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── config
│   └── ...
│
└── README.md
```

---

# 🚀 Getting Started

## Clone Repository

```bash
git clone https://github.com/Satwik367/multi-api-integration-platform.git
```

```bash
cd multi-api-integration-platform
```

---

## Backend Setup

```bash
cd backend
npm install
```

Create a `.env`

```env
PORT=5000

MONGO_URI=YOUR_MONGODB_URI

JWT_SECRET=YOUR_SECRET

WEATHER_API_KEY=YOUR_KEY

NEWS_API_KEY=YOUR_KEY

GEMINI_API_KEY=YOUR_KEY
```

Run

```bash
npm run dev
```

---

## Frontend Setup

```bash
cd frontend
npm install
```

Create `.env`

```env
VITE_API_URL=http://localhost:5000/api
```

Run

```bash
npm run dev
```

---

# 📸 Screenshots

## Landing Page

> Add screenshot here

---

## Dashboard

> Add screenshot here

---

## Weather API

> Add screenshot here

---

## GitHub API

> Add screenshot here

---

## Gemini AI

> Add screenshot here

---

## Workflow

> Add screenshot here

---

# 🔑 API Endpoints

## Authentication

```
POST /api/auth/register
POST /api/auth/login
```

## Weather

```
POST /api/weather
```

## News

```
POST /api/news
```

## Currency

```
POST /api/currency
```

## GitHub

```
POST /api/github
```

## Gemini

```
POST /api/gemini
```

## Workflows

```
GET    /api/workflows
POST   /api/workflows
DELETE /api/workflows/:id
POST   /api/workflows/run
```

---

# 🎯 Future Improvements

- Docker Support
- Kubernetes Deployment
- Role Based Access Control
- OAuth Login
- Workflow Scheduler
- Email Notifications
- Webhooks
- API Marketplace
- AI Workflow Suggestions

---

# 👨‍💻 Author

**Satwik Maiti**

- GitHub: https://github.com/Satwik367
- LinkedIn: _(Add your LinkedIn URL here)_

---

# ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub.

```
Made with ❤️ using React, Node.js, Express and MongoDB.
```

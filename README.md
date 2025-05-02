 
---

# 🚀 Create & Project Info Store Website (MERN Stack)

This project is a **full-stack web application** built with the **MERN stack (MongoDB, Express, React, Node.js)** that allows users to **create projects, upload files (like podcasts/audio), and store transcript information.** It features user authentication, project management, and a clean dashboard UI.

---

## 🌐 Live Demo

* **Frontend:** [https://skailama-mern-fronte.onrender.com](https://skailama-mern-fronte.onrender.com)
* **Backend:** [https://skailama-mern-backend.onrender.com](https://skailama-mern-backend.onrender.com)

---

## 📂 Features

* 🔐 **User Authentication** (Sign up, Login)
* 📁 **Project Creation & Management**
* ⬆️ **File Uploads** (with transcript data)
* 📝 **Edit & Save Transcripts**
* 🗑️ **Delete Files**
* 📊 **Dashboard/Table View of Files**
* ✅ **Responsive Design**
* ⚙️ **CORS-enabled API**

---

## 🛠️ Tech Stack

| Frontend         | Backend           | Database |
| ---------------- | ----------------- | -------- |
| React + Vite     | Node.js + Express | MongoDB  |
| Tailwind CSS     | REST API          | Mongoose |
| React Router DOM | CORS Middleware   |          |

---

## 🚀 How to Run Locally

### 1️⃣ Clone the repository

```bash
git clone  https://github.com/ankursasmal/Skailama_MERN.git
cd  Skailama_MERN
```

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

* Create a `.env` file in `/backend`:

```
PORT=3000
MONGO_USER=your_username_string
MONGO_Pass=your_password_string
SECRET_key=your_secret
```

* Start the backend:

```bash
nodemon index.js
```

---

### 3️⃣ Frontend Setup

```bash
cd front
npm install
```

* In `/frontend`, create a `.env` file (if needed) to set the backend base URL:

```
VITE_BACKEND_URL=http://localhost:3000
```

* Start the frontend:

```bash
npm run dev
```

---

## 🗂️ Folder Structure

```
root
├── backend
│   ├── DB
│   ├── models
│   ├── routes
│   ├── utils
│   └── index.js
├── frontend
│   ├── src
│   │   ├── Smallcomponents
│   │   ├── Redux
│   │   ├── SummaryApi
│   │   ├── components
│   │   ├── router
│   │   └── App.jsx
|   |   |--main.jsx
└── README.md
```

---

## 🌟 Main Files to Explore

* **Frontend:**

  * `Save_Edited.jsx` → Edit & Save transcripts
  * `Table_file.jsx` → File table with View & Delete actions
* **Backend:**

  * `ProjectModel.js` → Mongoose Schema for project & files
  * `projectRoutes.js` → All API routes (GET, PATCH, DELETE)

---

## 🐛 Common Issues

* **CORS Errors:**
  Ensure your backend CORS setup allows your deployed frontend origin.

* **404 Errors:**
  Check that your frontend is calling the correct API routes (e.g., `/api/project/:id`).

---
 
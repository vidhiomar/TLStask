🚀 TechLearn Solutions – Full Stack Web Application
An interactive, educational web application with a sleek landing page, responsive UI, user authentication, and persistent progress tracking – built as part of a TechLearn Solutions challenge.

📁 Folder Structure
arduino
Copy code
TLSTask/
├── Backend/
│   ├── controllers/
│   │   ├── exerciseController.js
│   │   ├── progressController.js
│   │   └── userController.js
│   ├── models/
│   │   └── User.js
│   ├── routes/
│   │   ├── exerciseRoutes.js
│   │   ├── progressRoutes.js
│   │   └── userRoutes.js
│   ├── data/
│   │   └── exercises.json
│   ├── server.js
│   └── .env
│
├── Frontend/
│   ├── public/
│   │   ├── readme.png
│   │   ├── readme2.png
│   │   ├── googleLogo.png
│   │   └── GithubLogo.png
│   ├── src/
│   │   ├── components/
│   │   │   ├── SignInPage.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── ...
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   ├── index.css
│   │   └── tailwind.config.js
│   ├── package.json
│   └── vite.config.js
│
└── README.md
🔧 Installation & Setup
⚙️ Backend (Express + MongoDB)
bash
Copy code
# Navigate to backend
cd Backend

# Install dependencies
npm install

# Add a .env file
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key

# Start the server
node server.js
Server runs at: http://localhost:3000

🌐 Frontend (React + Vite)
bash
Copy code
# Navigate to frontend
cd Frontend

# Install dependencies
npm install

# Start the dev server
npm run dev
Frontend runs at: http://localhost:5173 (default Vite port)

🛠 Tech Stack
Frontend
Tool / Library	Purpose
⚛️ React	UI Components & State Management
💨 Tailwind CSS	Utility-first CSS styling
🤖 Framer Motion	Page animations & transitions
🎯 Vite	Fast dev server & build tool
🖋️ Lucide-react	Icon set
🧠 Monaco Editor	Embedded code editor
📦 react-fast-marquee	Marquee animations

Backend
Tool / Library	Purpose
🧩 Express	API Server
🛢 MongoDB + Mongoose	Database & ODM
🔐 bcryptjs & JWT	Auth: hashing + token auth
📃 Morgan	Request logging
🔄 CORS	Cross-origin support
📂 FileSystem	Data storage for exercises/progress

✨ Features
🔐 Authentication
Secure signup and login

Token-based access with JWT

Password hashing with bcrypt

📚 Exercises
Fetch exercise content from JSON

Track and persist completion status

🧠 Progress Tracking
Save completed exercises per user

Auto-fetch progress on login

💻 Frontend UI
Embedded code editor

Hero section with animation

Responsive design with Tailwind

Custom components (navbar, modals, cards)

🧪 To-Do / Enhancements
 Dark mode toggle

 Internationalization (i18n)

 Profile page with stats

 Real-time code evaluation (bonus)

 Deploy backend on Render / Railway

 Deploy frontend on Vercel

📸 Screenshots
<p align="center"> <img width="700" src="/Frontend/public/readme.png" alt="Desktop View" /> <br /> <img width="300" src="/Frontend/public/readme2.png" alt="Mobile View" /> </p>
🤝 Contributing
Fork this repository

Create a new branch: git checkout -b feature/my-feature

Commit your changes: git commit -m "feat: Add X feature"

Push to your branch: git push origin feature/my-feature

Open a pull request

🧾 License
MIT License © 2025 TechLearn Solutions


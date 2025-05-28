import React, { useState, useEffect } from 'react';
import { Settings } from 'lucide-react';

const Dashboard = () => {
  const [displayText, setDisplayText] = useState('');
  const [exercises, setExercises] = useState([]);
  const [completed, setCompleted] = useState([]);

  const userId = localStorage.getItem('userId');
  const userName = localStorage.getItem('userName') || 'Jane Doe';
  const fullGreeting = `Hi, ${userName}`;

  // Typing effect
  useEffect(() => {
    let idx = 0;
    const timer = setInterval(() => {
      setDisplayText(fullGreeting.slice(0, idx + 1));
      idx++;
      if (idx === fullGreeting.length) clearInterval(timer);
    }, 100);
    return () => clearInterval(timer);
  }, [fullGreeting]);

  // Load exercises and progress
  useEffect(() => {
    const loadData = async () => {
      const exRes = await fetch('/api/exercises');
      const progressRes = await fetch(`/api/progress/${userId}`);
      const exData = await exRes.json();
      const progressData = await progressRes.json();

      setExercises(exData);
      setCompleted(progressData.completed || []);
    };
    loadData();
  }, [userId]);

  const goToExercise = (id) => {
    window.location.href = `/compiler.html?id=${id}`;
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg">
      {/* Greeting */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 h-8">{displayText}</h1>
      </div>

      {/* User Info */}
      <div className="flex items-center space-x-4 mb-8">
        <img
          src="https://via.placeholder.com/64"
          alt="User Avatar"
          className="w-16 h-16 rounded-full border-2 border-indigo-500"
        />
        <div className="flex-1">
          <h2 className="text-xl font-semibold text-gray-900">{userName}</h2>
          <p className="text-gray-600 truncate w-64">
            Frontend Engineer exploring the latest in React, Tailwind, and AI-driven UIs.
          </p>
        </div>
        <Settings className="w-6 h-6 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer" />
      </div>

      {/* Exercise List */}
      <div className="space-y-4">
        {exercises.map((ex) => (
          <div key={ex.id} className="p-4 border rounded-lg bg-gray-50 hover:bg-gray-100 transition">
            <h3 className="text-lg font-semibold text-indigo-700">{ex.title}</h3>
            <p className="text-sm text-gray-600 mb-2 truncate">{ex.story}</p>
            <button
              onClick={() => goToExercise(ex.id)}
              className={`px-4 py-2 text-sm font-medium rounded-lg ${
                completed.includes(ex.id)
                  ? 'bg-green-100 text-green-700'
                  : 'bg-indigo-600 text-white hover:bg-indigo-700'
              }`}
            >
              {completed.includes(ex.id) ? '✅ Completed' : 'Start'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

import React, { useState, useEffect } from 'react';
import { Settings } from 'lucide-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const userName = 'Jane Doe'; // Replace with dynamic user data if needed
  const fullGreeting = `Hi, ${userName}`;
  const [displayText, setDisplayText] = useState('');
  const [exercises, setExercises] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    let idx = 0;
    const timer = setInterval(() => {
      setDisplayText(fullGreeting.slice(0, idx + 1));
      idx++;
      if (idx === fullGreeting.length) clearInterval(timer);
    }, 100);
    return () => clearInterval(timer);
  }, [fullGreeting]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/exercises')
      .then(res => setExercises(res.data))
      .catch(err => console.error('Error fetching exercises:', err));
  }, []);

  const startExercise = (id) => {
    localStorage.setItem('currentExerciseId', id);
    navigate(`/exercise/${id}`);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg">
      {/* Greeting with typewriter effect */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 h-8">{displayText}</h1>
      </div>

      <div className="flex items-center space-x-4 mb-6">
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
        {exercises.map((ex, idx) => (
          <div key={idx} className="p-4 bg-gray-100 rounded-lg shadow hover:shadow-md transition">
            <h3 className="font-bold text-lg text-indigo-700">{ex.title}</h3>
            <p className="text-sm text-gray-600 mb-2">{ex.description}</p>
            <button
              onClick={() => startExercise(idx)}
              className="text-indigo-600 hover:underline text-sm"
            >
              Start
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

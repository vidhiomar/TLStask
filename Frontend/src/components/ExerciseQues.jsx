import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ExerciseQues = () => {
  const { id } = useParams();
  const [exercise, setExercise] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:3000/api/exercises')
      .then(res => {
        const found = res.data[parseInt(id)];
        setExercise(found);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching exercise:', err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className="text-center text-gray-400 p-4">Loading...</div>;
  }

  if (!exercise) {
    return <div className="text-center text-red-500 p-4">Exercise not found</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-indigo-400 mb-2">{exercise.title}</h1>
      <p className="text-gray-300 mb-4">{exercise.description}</p>
      <pre className="bg-gray-800 p-4 rounded text-sm text-gray-100">
        {exercise.explanation || 'No content available.'}
      </pre>
    </div>
  );
};

export default ExerciseQues;

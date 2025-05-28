// ExerciseQues.jsx
import React from 'react'
import { useParams } from 'react-router-dom'

const EXERCISES = {
  1: {
    title: "Two Sum",
    description: "Find indices of the two numbers that add up to a target.",
    content: "Given an array of integers nums and an integer target..."
  },
  // Add others as needed...
}

const ExerciseQues = () => {
  const { id } = useParams()
  const exercise = EXERCISES[id]

  if (!exercise) {
    return <div className="text-center text-red-500 p-4">Exercise not found</div>
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-indigo-400 mb-2">{exercise.title}</h1>
      <p className="text-gray-300 mb-4">{exercise.description}</p>
      <pre className="bg-gray-800 p-4 rounded text-sm text-gray-100">
        {exercise.content}
      </pre>
    </div>
  )
}

export default ExerciseQues

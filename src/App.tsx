// src/App.tsx
import { useState } from 'react';
import MissionOne from './components/MissionOne';

export default function App() {
  const [screen, setScreen] = useState<'intro' | 'mission'>('intro');

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white p-6 font-mono">
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setScreen('intro')}
          className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded border border-white"
        >
          Game Intro
        </button>
        <button
          onClick={() => setScreen('mission')}
          className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded border border-white"
        >
          Craft a SQL
        </button>
      </div>

      {screen === 'intro' ? (
        <div className="max-w-xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-2">Cybernetic Sabotage: The AI Rebellion</h1>
          <p className="text-lg mb-4">
            The goal is to expose a saboteur and restore order before the AI rebellion escalates.
          </p>
          <p className="italic text-gray-400">Craft a SQL statement to pass the task</p>
        </div>
      ) : (
        <MissionOne />
      )}
    </div>
  );
}

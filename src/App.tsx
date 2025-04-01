import { useState } from 'react';
import SchemaSection from './components/SchemaSection';

export default function App() {
  const [activeView, setActiveView] = useState<'intro' | 'mission'>('intro');

  return (
    <div className="min-h-screen bg-black text-white font-mono p-6">
      {/* Top Navigation */}
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setActiveView('intro')}
          className={`px-4 py-2 border rounded-md ${
            activeView === 'intro' ? 'border-blue-500 text-blue-300' : 'border-gray-600 text-gray-400'
          } hover:bg-gray-800`}
        >
          Game Intro
        </button>
        <button
          onClick={() => setActiveView('mission')}
          className={`px-4 py-2 border rounded-md ${
            activeView === 'mission' ? 'border-blue-500 text-blue-300' : 'border-gray-600 text-gray-400'
          } hover:bg-gray-800`}
        >
          Craft a SQL
        </button>
        {/* Schema Button lives in its own component */}
        <SchemaSection />
      </div>

      {/* Main Content */}
      <div className="mt-6">
        {activeView === 'intro' && (
          <div>
            <h1 className="text-4xl font-bold mb-2">Cybernetic Sabotage: The AI Rebellion</h1>
            <p className="text-xl mb-6">
              The goal is to expose a saboteur and restore order before the AI rebellion escalates.
            </p>
            <p className="italic text-gray-400">Craft a SQL statement to pass the task</p>
          </div>
        )}

        {activeView === 'mission' && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Mission 1: Maintenance Window Exploit</h2>
            <p className="mb-2">
              <strong>Nova:</strong> "83% of breaches occur during patching windows. Find incidents between 2:00–4:30 AM."
            </p>

            <textarea
              rows={5}
              className="w-full bg-gray-900 border border-gray-600 text-white p-3 rounded-md mb-4"
              placeholder="Write your SQL query here..."
            ></textarea>

            <div className="space-x-4">
              <button className="bg-green-600 hover:bg-green-700 px-5 py-2 rounded-md">▶ Execute</button>
              <button className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-md">Quit</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

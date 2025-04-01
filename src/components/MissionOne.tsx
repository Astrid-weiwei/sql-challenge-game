import { useState } from 'react';

const CORRECT_ANSWER =
  "SELECT incidentID, timestamp FROM Incident WHERE CAST(timestamp AS TIME) BETWEEN '02:00' AND '04:30';";

export default function MissionOne() {
  const [input, setInput] = useState('');
  const [feedback, setFeedback] = useState('');

  const checkAnswer = () => {
    const normalized = input.replace(/\s+/g, ' ').trim().toLowerCase();
    const correct = CORRECT_ANSWER.replace(/\s+/g, ' ').trim().toLowerCase();
    if (normalized === correct) {
      setFeedback('✅ Success! 12 incidents logged during maintenance. They’re hijacking update cycles.');
    } else {
      setFeedback('❌ Incorrect. Choose a character below for feedback.');
    }
  };

  const handleNPC = (npc: string) => {
    if (npc === 'Cipher') {
      setFeedback(
        "Cipher says: Your query might be missing some records. Recheck CAST(timestamp AS TIME) and ensure you capture the full 2:00–4:30 range. Accuracy is crucial."
      );
    } else if (npc === 'Zen') {
      setFeedback(
        "Zen says: Breathe. Mistakes don’t define you; they guide you. Take a step back and verify each condition calmly."
      );
    } else if (npc === 'Phoebe') {
      setFeedback(
        "Phoebe says: Your leaderboard rank remains unchanged, but you missed a chance to earn bonus points. Refine your approach to climb the standings!"
      );
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">🚨 Mission 1: Maintenance Window Exploit</h1>
      <p className="mb-3">
        <strong>Story:</strong> Late at night, red warning lights flood the control room. Multiple unauthorized
        access attempts suggest the Hacker is striking during system maintenance.
      </p>
      <p className="mb-4 font-semibold">Nova: "83% of breaches occur during patching windows. Find incidents between 2:00–4:30 AM."</p>

      <textarea
        className="w-full p-3 rounded text-black"
        rows={4}
        placeholder="Write your SQL query here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div className="flex gap-4 mt-4">
        <button onClick={checkAnswer} className="bg-lime-500 text-black px-4 py-2 rounded hover:bg-lime-400">
          Submit
        </button>
        <button onClick={() => handleNPC('Cipher')} className="bg-gray-700 px-4 py-2 rounded hover:bg-gray-600">
          Ask Cipher
        </button>
        <button onClick={() => handleNPC('Zen')} className="bg-purple-700 px-4 py-2 rounded hover:bg-purple-600">
          Ask Zen
        </button>
        <button onClick={() => handleNPC('Phoebe')} className="bg-pink-600 px-4 py-2 rounded hover:bg-pink-500">
          Ask Phoebe
        </button>
      </div>

      {feedback && <p className="mt-6 bg-gray-900 p-4 rounded text-white">{feedback}</p>}
    </div>
  );
}

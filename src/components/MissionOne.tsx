import { useState } from 'react';

const CORRECT_ANSWER =
  "SELECT incidentID, timestamp FROM Incident WHERE CAST(timestamp AS TIME) BETWEEN '02:00' AND '04:30';";

export default function MissionOne() {
  const [input, setInput] = useState('');
  const [feedback, setFeedback] = useState('');
  const [mistakes, setMistakes] = useState(0);
  const [points, setPoints] = useState(2);
  const [rank, setRank] = useState(10);
  const [showHint, setShowHint] = useState(false);
  const [showZen, setShowZen] = useState(false);
  const [showRewards, setShowRewards] = useState(false);

  const checkAnswer = () => {
    const normalized = input.replace(/\s+/g, ' ').trim().toLowerCase();
    const correct = CORRECT_ANSWER.replace(/\s+/g, ' ').trim().toLowerCase();
    if (normalized === correct) {
      setFeedback('✅ Success! 12 incidents logged during maintenance.');
      setPoints(points * 2);
      setRank(rank - 1);
      setShowRewards(true);
    } else {
      const newMistakes = mistakes + 1;
      setMistakes(newMistakes);
      setFeedback('❌ Incorrect. Need help?');
      setShowHint(newMistakes % 3 !== 0);
      setShowZen(newMistakes % 3 === 0);
    }
  };

  const askCipher = () => {
    setFeedback("Cipher says: Your query might be missing some records. Recheck CAST(timestamp AS TIME) and ensure you capture the full 2:00–4:30 range. Accuracy is crucial.");
  };

  const askZen = () => {
    setFeedback("Zen says: Breathe. Mistakes don’t define you; they guide you. Take a step back and verify each condition calmly.");
  };

  const quitMission = () => {
    setPoints(Math.max(points - 1, 0));
    setFeedback("Phoebe warns: You’ve lost 1 point. Don’t give up yet!");
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-lime-400 mb-6">🚨 Mission 1: Maintenance Window Exploit</h1>
      <p className="mb-4 text-gray-300">
        <strong>Nova:</strong> "83% of breaches occur during patching windows. Find incidents between 2:00–4:30 AM."
      </p>

      <textarea
        className="w-full p-4 rounded bg-black text-lime-300 font-mono border border-lime-400"
        rows={5}
        placeholder="Write your SQL query here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <div className="flex gap-4 mt-4">
        <button onClick={checkAnswer} className="bg-lime-400 text-black px-6 py-2 rounded shadow hover:bg-lime-300">
          ▶ Execute
        </button>
        {showHint && (
          <button onClick={askCipher} className="bg-blue-700 px-4 py-2 rounded text-white hover:bg-blue-600">
            I want to reflect on my mistake
          </button>
        )}
        {showZen && (
          <button onClick={askZen} className="bg-purple-700 px-4 py-2 rounded text-white hover:bg-purple-600">
            Let me ask Zen how to move forward
          </button>
        )}
        <button onClick={quitMission} className="bg-pink-700 px-4 py-2 rounded text-white hover:bg-pink-600">
          Quit
        </button>
      </div>

      <div className="mt-6 text-xl text-yellow-300">{feedback}</div>

      {showRewards && (
        <div className="mt-8 p-4 bg-gray-900 rounded-lg text-white">
          <p>🎉 Bravo! Check what you’ve earned!</p>
          <p className="mt-2">⭐ Points: {points}</p>
          <p>🏆 Leaderboard Rank: #{rank}</p>
        </div>
      )}
    </div>
  );
}

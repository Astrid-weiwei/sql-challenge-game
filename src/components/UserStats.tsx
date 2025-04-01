import React from 'react';

export default function UserStats() {
  const user = {
    userID: 1,
    username: 'Astrid',
    score: 150,
    progress: '10%',
    startTime: '12:01:22',
    endTime: ''
  };

  return (
    <div className="bg-black text-lime-400 border border-lime-400 p-4 mt-8 rounded">
      <h2 className="text-xl font-bold mb-3">👤 User Table</h2>
      <table className="w-full text-sm border border-lime-400 text-center">
        <thead>
          <tr className="bg-lime-900 text-lime-300">
            <th className="border border-lime-400 p-1">UserID</th>
            <th className="border border-lime-400 p-1">Username</th>
            <th className="border border-lime-400 p-1">Score</th>
            <th className="border border-lime-400 p-1">Progress</th>
            <th className="border border-lime-400 p-1">Start Time</th>
            <th className="border border-lime-400 p-1">End Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-lime-400 p-1">{user.userID}</td>
            <td className="border border-lime-400 p-1">{user.username}</td>
            <td className="border border-lime-400 p-1">{user.score}</td>
            <td className="border border-lime-400 p-1">{user.progress}</td>
            <td className="border border-lime-400 p-1">{user.startTime}</td>
            <td className="border border-lime-400 p-1">{user.endTime || '-'}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

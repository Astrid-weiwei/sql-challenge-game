// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';

// interface Props {
//   missionNumber: number;
//   story: string;
//   nova: string;
//   correctSQL: string;
//   resultHeaders: string[];
//   resultData: Record<string, string>[];
//   cipherHint: string;
//   zenHint: string;
//   phoebeHint: string;
//   successText: string;
//   nextMissionRoute: string;
// }

// export default function MissionLayout({
//   missionNumber,
//   story,
//   nova,
//   correctSQL,
//   resultHeaders,
//   resultData,
//   cipherHint,
//   zenHint,
//   phoebeHint,
//   successText,
//   nextMissionRoute,
// }: Props) {
//   const [npcResponse, setNpcResponse] = useState({ Cipher: '', Zen: '', Phoebe: '' });
//   const [mistakeCount, setMistakeCount] = useState(0);
//   const [userSQL, setUserSQL] = useState('');
//   const [showNext, setShowNext] = useState(false);
//   const [resultTable, setResultTable] = useState<JSX.Element | null>(null);
//   const [points, setPoints] = useState(2);

//   const [showQuitConfirm, setShowQuitConfirm] = useState(false);
//   const navigate = useNavigate();

//   const handleExecute = () => {
//     const trimmedSQL = userSQL.replace(/\s+/g, ' ').trim().toLowerCase();
//     const isCorrect = trimmedSQL === correctSQL.toLowerCase();
//     const nextMistake = mistakeCount + 1;
//     setMistakeCount((prev) => (isCorrect ? 0 : nextMistake));

//     if (isCorrect) {
//       setNpcResponse({
//         Cipher: `<span class='text-blue-400'>Cipher (Hint & Warning):</span> ${successText}`,
//         Zen: '',
//         Phoebe: '',
//       });
//       setPoints((prev) => {
//         const updated = prev + 1;
//         localStorage.setItem('points', String(updated));
//         return updated;
//       });
//       setShowNext(true);
//       setResultTable(
//         <table className="mt-4 w-full text-sm text-white border border-green-500">
//           <thead className="bg-green-800">
//             <tr>
//               {resultHeaders.map((header) => (
//                 <th key={header} className="p-2 border border-green-600">{header}</th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {resultData.map((row, idx) => (
//               <tr key={idx}>
//                 {resultHeaders.map((key) => (
//                   <td key={key} className="p-2 border border-green-600">{row[key]}</td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       );
//     } else {
//       const newNpcResponse: { [key: string]: string } = { Cipher: '', Zen: '', Phoebe: '' };
//       if (nextMistake === 1) {
//         newNpcResponse.Cipher = `<span class='text-blue-400'>Cipher (Hint & Warning):</span> ${cipherHint}`;
//       } else if (nextMistake === 2) {
//         newNpcResponse.Zen = `<span class='text-purple-400'>Zen (SEL Reflection):</span> ${zenHint}`;
//       } else {
//         newNpcResponse.Phoebe = `<span class='text-pink-400'>Phoebe (Game Feedback):</span> ${phoebeHint}`;
//       }
//       setNpcResponse(newNpcResponse);
//       setResultTable(null);
//     }
//   };

//   const handleQuit = () => {
//     setNpcResponse({
//       Cipher: '',
//       Zen: '',
//       Phoebe: `<span class='text-pink-400'>Phoebe (Game Feedback):</span> I understand this is tough. Take a deep breath. If you're sure, confirm quit and we'll save your progress.`
//     });
//     setShowQuitConfirm(true);
//   };

//   const confirmQuit = () => {
//     setPoints((prev) => {
//       const updated = Math.max(0, prev - 1);
//       localStorage.setItem('points', String(updated));
//       return updated;
//     });
//     setNpcResponse({
//       Cipher: '',
//       Zen: '',
//       Phoebe: `<span class='text-pink-400'>Phoebe (Game Feedback):</span> You've stepped away for now, and that's okay. We'll be right here when you're ready to continue.`
//     });
//     setResultTable(null);
//     setShowNext(false);
//     setShowQuitConfirm(false);
//   };

//   return (
//     <div className="text-green-300 font-mono px-6 py-4 bg-black min-h-screen">
//       <h1 className="text-2xl font-bold text-green-400 mb-2">Mission {missionNumber}</h1>
//       <div className="mb-4 border border-cyan-500 p-4 rounded">
//         <p className="text-sm text-cyan-200"><strong>Story Background:</strong> {story}</p>
//         <p className="mt-2 text-sm text-yellow-300 font-semibold">{nova}</p>
//       </div>

//       <label htmlFor="sqlInput" className="block mb-2 text-md font-semibold text-white">📂 Enter your SQL:</label>
//       <textarea
//         id="sqlInput"
//         value={userSQL}
//         onChange={(e) => setUserSQL(e.target.value)}
//         placeholder="Type your SQL here..."
//         className="w-full h-32 p-3 mb-4 rounded-md border border-green-500 bg-black text-green-200 resize-none focus:outline-none focus:ring-2 focus:ring-cyan-400"
//       />


// <div className="space-x-4 mb-6">
//   <button onClick={handleExecute} className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded shadow-md">▶ Execute</button>

//   {showNext && (
//     <button onClick={() => navigate(nextMissionRoute)} className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded shadow-md">➡ Next Mission</button>
//   )}

//   <button onClick={handleQuit} className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded shadow-md">✖ Quit</button>

//   {showQuitConfirm && (
//     <button onClick={confirmQuit} className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded shadow-md">✅ Confirm Quit</button>
//   )}

//   {/* 🔙 Add this home button */}
//   <button onClick={() => navigate('/')} className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded shadow-md">🏠 Home</button>
// </div>


//       <div className="grid grid-cols-3 gap-4 mb-6">
//         {['Cipher', 'Zen', 'Phoebe'].map((name) => (
//           <div className="flex flex-col items-center" key={name}>
//             <motion.img
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.3 }}
//               src={`https://cdn-icons-png.flaticon.com/512/4712/47121${name === 'Cipher' ? '00' : name === 'Zen' ? '05' : '02'}.png`}
//               alt={name}
//               className="w-14 h-14 rounded-full border border-white shadow-lg"
//             />
//             <p className="text-xs text-center mt-1 text-gray-300 max-w-[7rem]">{name}</p>
//             {npcResponse[name] && (
//               <motion.div
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.4 }}
//                 className={`mt-2 p-2 text-sm bg-gray-800 border rounded text-white`}
//                 dangerouslySetInnerHTML={{ __html: npcResponse[name] }}
//               />
//             )}
//           </div>
//         ))}
//       </div>

//       {resultTable && <div>{resultTable}</div>}

//       <div className="text-md text-white space-y-1 mt-6">
//         <p>🌟 <span className="text-yellow-400">Points:</span> {points}</p>
//       </div>
//     </div>
//   );
// }

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

interface Props {
  missionNumber: number;
  story: string;
  nova: string;
  correctSQL: string;
  resultHeaders: string[];
  resultData: Record<string, string>[];
  cipherHint: string;
  zenHint: string;
  phoebeHint: string;
  successText: string;
  nextMissionRoute: string;
}

export default function MissionLayout({
  missionNumber,
  story,
  nova,
  correctSQL,
  resultHeaders,
  resultData,
  cipherHint,
  zenHint,
  phoebeHint,
  successText,
  nextMissionRoute,
}: Props) {
  const [npcResponse, setNpcResponse] = useState({ Cipher: '', Zen: '', Phoebe: '' });
  const [mistakeCount, setMistakeCount] = useState(0);
  const [userSQL, setUserSQL] = useState('');
  const [showNext, setShowNext] = useState(false);
  const [resultTable, setResultTable] = useState<JSX.Element | null>(null);
//   const [points, setPoints] = useState(() => Number(localStorage.getItem('points') || '2'));
const [points, setPoints] = useState(2);

  const [showQuitConfirm, setShowQuitConfirm] = useState(false);

  const navigate = useNavigate();

  const handleExecute = () => {
    const trimmedSQL = userSQL.replace(/\s+/g, ' ').trim().toLowerCase();
    const isCorrect = trimmedSQL === correctSQL.toLowerCase();
    const nextMistake = mistakeCount + 1;
    setMistakeCount(isCorrect ? 0 : nextMistake);

    if (isCorrect) {
      setNpcResponse({
        Cipher: `<span class='text-blue-400'>Cipher (Hint & Warning):</span> ${successText}`,
        Zen: '',
        Phoebe: '',
      });
      const updated = points + 1;
      setPoints(updated);
      localStorage.setItem('points', String(updated));
      setShowNext(true);
      setResultTable(
        <table className="mt-4 w-full text-sm text-white border border-green-500">
          <thead className="bg-green-800">
            <tr>{resultHeaders.map(header => (
              <th key={header} className="p-2 border border-green-600">{header}</th>
            ))}</tr>
          </thead>
          <tbody>
            {resultData.map((row, idx) => (
              <tr key={idx}>
                {resultHeaders.map(key => (
                  <td key={key} className="p-2 border border-green-600">{row[key]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      );
    } else {
      const feedback = { Cipher: '', Zen: '', Phoebe: '' };
      if (nextMistake === 1) feedback.Cipher = `<span class='text-blue-400'>Cipher (Hint & Warning):</span> ${cipherHint}`;
      else if (nextMistake === 2) feedback.Zen = `<span class='text-purple-400'>Zen (SEL Reflection):</span> ${zenHint}`;
      else feedback.Phoebe = `<span class='text-pink-400'>Phoebe (Game Feedback):</span> ${phoebeHint}`;
      setNpcResponse(feedback);
      setResultTable(null);
    }
  };

  const handleQuit = () => {
    setNpcResponse({
      Cipher: '',
      Zen: '',
      Phoebe: `<span class='text-pink-400'>Phoebe (Game Feedback):</span> I understand this is tough. Take a deep breath. If you're sure, confirm quit and we’ll save your progress.`,
    });
    setShowQuitConfirm(true);
  };

  const confirmQuit = () => {
    const updated = Math.max(0, points - 1);
    setPoints(updated);
    localStorage.setItem('points', String(updated));
    setNpcResponse({
      Cipher: '',
      Zen: '',
      Phoebe: `<span class='text-pink-400'>Phoebe (Game Feedback):</span> You've stepped away for now, and that's okay. We’ll be right here when you're ready to continue.`,
    });
    setShowNext(false);
    setShowQuitConfirm(false);
    setResultTable(null);
  };

  return (
    <div className="text-green-300 font-mono px-6 py-4 bg-black min-h-screen">
      <h1 className="text-2xl font-bold text-green-400 mb-2">Mission {missionNumber}</h1>

      <div className="mb-4 border border-cyan-500 p-4 rounded">
        <p className="text-sm text-cyan-200"><strong>Story Background:</strong> {story}</p>
        <p className="mt-2 text-sm text-yellow-300 font-semibold">{nova}</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 items-start">
        {/* Left Panel */}
        <div className="md:col-span-2 space-y-4">
          <label htmlFor="sqlInput" className="text-white font-semibold">📂 Enter your SQL:</label>
          <textarea
            id="sqlInput"
            value={userSQL}
            onChange={(e) => setUserSQL(e.target.value)}
            placeholder="Type your SQL here..."
            className="w-full h-24 p-3 rounded-md border border-green-500 bg-black text-green-200 resize-none focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />

          <div className="space-x-4">
            <button onClick={handleExecute} className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded shadow-md">▶ Execute</button>
            {showNext && (
              <button onClick={() => navigate(nextMissionRoute)} className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded shadow-md">➡ Next Mission</button>
            )}
            <button onClick={handleQuit} className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded shadow-md">✖ Quit</button>
            {showQuitConfirm && (
              <button onClick={confirmQuit} className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded shadow-md">✅ Confirm Quit</button>
            )}
            <button onClick={() => navigate('/')} className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded shadow-md">🏠 Home</button>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {['Cipher', 'Zen', 'Phoebe'].map(name => (
              <div className="flex flex-col items-center" key={name}>
                <motion.img
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  src={`https://cdn-icons-png.flaticon.com/512/4712/47121${name === 'Cipher' ? '00' : name === 'Zen' ? '05' : '02'}.png`}
                  alt={name}
                  className="w-14 h-14 rounded-full border border-white shadow-lg"
                />
                <p className="text-xs text-center mt-1 text-gray-300 max-w-[7rem]">{name}</p>
                {npcResponse[name] && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="mt-2 p-2 text-sm bg-gray-800 border rounded text-white"
                    dangerouslySetInnerHTML={{ __html: npcResponse[name] }}
                  />
                )}
              </div>
            ))}
          </div>

          {resultTable}

          <p className="text-md text-white mt-6">🌟 <span className="text-yellow-400">Points:</span> {points}</p>
        </div>

        {/* Right Panel - Schema */}
        <div className="border border-green-500 p-4 rounded overflow-auto max-h-[30rem]">
          <h2 className="text-lg font-bold text-green-400 mb-2">📊 Database Schema</h2>
          <table className="w-full text-left text-green-400 border-collapse text-sm">
            <thead>
              <tr className="bg-green-800 text-white">
                <th className="border border-green-600 px-2 py-1">Table</th>
                <th className="border border-green-600 px-2 py-1">Fields</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'Employee', fields: 'employeeID, firstName, lastName, jobTitle, department, lastLogin' },
                { name: 'Robot', fields: 'robotID, Model, manufDate, status, lastUpdateOn, lastUpdatedByEmpID' },
                { name: 'Log', fields: 'logID, actionDesc, timestamp, robotID, employeeID' },
                { name: 'Incident', fields: 'incidentID, desc, timestamp, reportedBy, robotID' },
                { name: 'AccessCode', fields: 'accessCode, accessLevel, lastAccess, employeeID' },
              ].map((row) => (
                <tr key={row.name}>
                  <td className="border border-green-600 px-2 py-1 font-bold">{row.name}</td>
                  <td className="border border-green-600 px-2 py-1">{row.fields}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

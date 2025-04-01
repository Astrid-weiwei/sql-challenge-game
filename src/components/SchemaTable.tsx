// src/components/SchemaTable.tsx
export default function SchemaTable() {
    return (
      <div className="bg-black text-green-400 border border-green-500 p-4 rounded mt-6 font-mono text-sm w-full overflow-x-auto">
        <div className="font-bold text-center text-lg mb-2 text-green-300">Database Schema</div>
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border border-green-500 px-2 py-1">Table</th>
              <th className="border border-green-500 px-2 py-1">Columns</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-green-500 px-2 py-1">Employee</td>
              <td className="border border-green-500 px-2 py-1">employeeID, firstName, lastName, jobTitle, department, lastLogin</td>
            </tr>
            <tr>
              <td className="border border-green-500 px-2 py-1">Robot</td>
              <td className="border border-green-500 px-2 py-1">robotID, Model, manufDate, status, lastUpdateOn, lastUpdatedByEmpID</td>
            </tr>
            <tr>
              <td className="border border-green-500 px-2 py-1">Log</td>
              <td className="border border-green-500 px-2 py-1">logID, actionDesc, timestamp, robotID, employeeID</td>
            </tr>
            <tr>
              <td className="border border-green-500 px-2 py-1">Incident</td>
              <td className="border border-green-500 px-2 py-1">incidentID, desc, timestamp, reportedBy, robotID</td>
            </tr>
            <tr>
              <td className="border border-green-500 px-2 py-1">AccessCode</td>
              <td className="border border-green-500 px-2 py-1">accessCode, accessLevel, lastAccess, employeeID</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
  
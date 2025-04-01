import React from 'react';

export default function DatabaseSchema() {
  const schema = [
    {
      table: 'Employee',
      fields: ['employeeID', 'firstName', 'lastName', 'jobTitle', 'department', 'lastLogin'],
    },
    {
      table: 'Robot',
      fields: ['robotID', 'Model', 'manufDate', 'status', 'lastUpdateOn', 'lastUpdatedByEmpID'],
    },
    {
      table: 'Log',
      fields: ['logID', 'actionDesc', 'timestamp', 'robotID', 'employeeID'],
    },
    {
      table: 'Incident',
      fields: ['incidentID', 'desc', 'timestamp', 'reportedBy', 'robotID'],
    },
    {
      table: 'AccessCode',
      fields: ['accessCode', 'accessLevel', 'lastAccess', 'employeeID'],
    },
  ];

  return (
    <div className="bg-black text-lime-400 border border-lime-400 mt-10 p-4 rounded">
      <h2 className="text-xl font-bold mb-3 text-center">📚 Database Schema</h2>
      <table className="w-full text-sm border border-lime-400 text-center">
        <thead className="bg-lime-900 text-lime-300">
          <tr>
            <th className="border border-lime-400 p-2">Table</th>
            <th className="border border-lime-400 p-2">Fields</th>
          </tr>
        </thead>
        <tbody>
          {schema.map((table) => (
            <tr key={table.table}>
              <td className="border border-lime-400 p-2 font-semibold">{table.table}</td>
              <td className="border border-lime-400 p-2">{table.fields.join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// src/components/SchemaSection.tsx
import { useState } from 'react';
import SchemaTable from './SchemaTable';

export default function SchemaSection() {
  const [showSchema, setShowSchema] = useState(false);

  return (
    <div className="my-4">
      <button
        onClick={() => setShowSchema(prev => !prev)}
        className={`px-4 py-2 rounded-md font-mono border border-green-500 text-green-400 hover:bg-green-700 hover:text-white transition duration-300 ${showSchema ? 'bg-green-600' : 'bg-transparent'}`}
      >
        {showSchema ? 'Hide Schema' : 'View Schema'}
      </button>

      {showSchema && <SchemaTable />}
    </div>
  );
}

import React from 'react';
import Board from './components/Board';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 p-8">
      <div className="max-w-[1600px] mx-auto">
        <Board />
      </div>
    </div>
  );
}

export default App;
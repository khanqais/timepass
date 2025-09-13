import React, { useState } from 'react';

const TimeMachine = () => {
  const [year, setYear] = useState(2050);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('');
  const [finalMessage, setFinalMessage] = useState('');

  const handleYearChange = (e) => {
    setYear(e.target.value);
  };

  const handleTravelClick = async () => {
    setIsLoading(true);
    setFinalMessage('');
    
    setLoadingMessage('Building Wormhole...');
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setLoadingMessage('Calling Aliens...');
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setLoadingMessage('Calling Narendra Modi...');
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setLoadingMessage('Hacking Nasa...');
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsLoading(false);
    setLoadingMessage('');
    setFinalMessage('2026 mai toh dunya khatam hai 💀');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
        
        <div className="relative bg-slate-900/90 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 shadow-2xl max-w-md w-full">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mb-4">
              <span className="text-2xl">⏰</span>
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
              Time Machine
            </h1>
            <p className="text-slate-400 text-sm">Travel through time and space</p>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-slate-300 text-sm font-medium mb-3">
                Enter Year
              </label>
              <input
                type="number"
                value={year}
                onChange={handleYearChange}
                min="1000"
                max="9999"
                placeholder="Enter year (e.g., 2050)"
                className="w-full bg-slate-800/50 border border-slate-600 rounded-lg p-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200"
              />
            </div>

            <button
              onClick={handleTravelClick}
              disabled={isLoading}
              className={`w-full font-bold py-4 px-6 rounded-lg transform transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-50 shadow-lg ${
                isLoading 
                  ? 'bg-gray-600 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 hover:scale-105 hover:shadow-cyan-500/25'
              }`}
            >
              🚀 Initiate Time Travel
            </button>

            {(isLoading || finalMessage) && (
              <div className="bg-slate-800/30 rounded-lg p-4 text-center border border-slate-700/50">
                {isLoading && (
                  <div className="text-cyan-400 font-medium">
                    <div className="flex items-center justify-center mb-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-cyan-400 mr-2"></div>
                      {loadingMessage}
                    </div>
                  </div>
                )}
                {finalMessage && (
                  <div className="text-red-400 font-bold text-lg ">
                    {finalMessage}
                  </div>
                )}
              </div>
            )}
          </div>

         
         
        </div>
      </div>
    </div>
  );
};

export default TimeMachine;

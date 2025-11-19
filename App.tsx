import React from 'react';
import DesignMechanism from './components/DesignMechanism';

function App() {
  return (
    <div className="min-h-screen bg-slate-100 py-8 px-4 sm:px-8 flex flex-col items-center">
      <header className="max-w-7xl w-full mb-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col md:flex-row justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-slate-800">건축학 논문: 유닛 케어 최적화 (Unit Care Optimization)</h1>
            <p className="text-slate-500 text-sm mt-1">노인 주거 환경을 위한 연구 프레임워크</p>
          </div>
          <div className="mt-4 md:mt-0 flex gap-3">
             <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-bold rounded-full">인지 (Cognitive)</span>
             <span className="px-3 py-1 bg-orange-100 text-orange-700 text-xs font-bold rounded-full">신체 (Physical)</span>
             <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full">감각 (Sensory)</span>
          </div>
        </div>
      </header>
      
      <main className="max-w-[1600px] w-full overflow-hidden bg-white rounded-xl shadow-lg border border-slate-200">
        <DesignMechanism />
      </main>

      <footer className="mt-8 text-slate-400 text-xs">
        © 2024 건축 디자인 연구소. 유니버설 디자인 원칙에 기반하여 생성됨.
      </footer>
    </div>
  );
}

export default App;
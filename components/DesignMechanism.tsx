
import React, { useState } from 'react';
import { USER_GROUPS, DESIGN_FACTORS, ROOM_MODES, VALUE_PROPS } from '../constants';
import { UserGroupType } from '../types';
import { TripleMergeArrow, SingleToMultiArrow } from './CurvedArrow';
import { ArrowRight, CheckCircle2, Layers, Settings, Lightbulb, Accessibility, ShieldCheck, Eye } from 'lucide-react';

const DesignMechanism: React.FC = () => {
  const [hoveredGroup, setHoveredGroup] = useState<UserGroupType | null>(null);

  const getOpacityClass = (group: UserGroupType) => {
    if (!hoveredGroup) return "opacity-100";
    return hoveredGroup === group ? "opacity-100 ring-2 ring-offset-2" : "opacity-40 grayscale";
  };

  return (
    <div className="w-full min-w-[1400px] bg-slate-50 p-8 overflow-x-auto">
      
      {/* Header */}
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Design Mechanism: The Adaptive Universal Room</h1>
        <p className="text-slate-500 font-medium">
          분석 단계 (세 가지 요구) <span className="mx-2">→</span> 
          추출 단계 (공통점 & 차이점) <span className="mx-2">→</span> 
          통합 단계 (하나의 가변형 솔루션)
        </p>
      </div>

      {/* Main Diagram Layout: Grid System */}
      <div className="grid grid-cols-12 gap-4 relative min-h-[700px]">
        
        {/* --- SECTION A: INPUT (User Groups) --- */}
        <div className="col-span-3 flex flex-col justify-between relative z-10">
          <h2 className="text-lg font-bold text-slate-700 mb-4 border-b-2 border-slate-200 pb-2 uppercase tracking-wider flex items-center gap-2">
            <Layers className="w-5 h-5" />
            Phase A: 사용자 입력 (User Inputs)
          </h2>
          
          <div className="flex flex-col gap-6 h-full justify-center py-4">
            {USER_GROUPS.map((group) => (
              <div 
                key={group.id}
                className={`relative transition-all duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer rounded-xl border-l-4 shadow-md bg-white p-5 ${group.colorTheme.border} ${getOpacityClass(group.id)}`}
                onMouseEnter={() => setHoveredGroup(group.id)}
                onMouseLeave={() => setHoveredGroup(null)}
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className={`font-bold text-lg ${group.colorTheme.heading}`}>{group.title}</h3>
                  {group.id === UserGroupType.DEMENTIA && <Lightbulb className="w-5 h-5 text-indigo-500" />}
                  {group.id === UserGroupType.FALL_RISK && <ShieldCheck className="w-5 h-5 text-orange-500" />}
                  {group.id === UserGroupType.SENSORY && <Eye className="w-5 h-5 text-emerald-500" />}
                </div>
                <p className={`text-xs font-bold uppercase mb-3 ${group.colorTheme.text} opacity-80`}>{group.subtitle}</p>
                
                <ul className="space-y-1.5">
                  {group.requirements.map((req, idx) => (
                    <li key={idx} className="text-sm text-slate-600 flex items-start gap-2">
                      <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${group.colorTheme.text.replace('text-', 'bg-')}`}></span>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* --- ARROW CONNECTORS A -> B --- */}
        <div className="col-span-1 flex items-center justify-center relative">
          {/* Use h-full to allow preserveAspectRatio to work correctly with the card positions */}
          <TripleMergeArrow className="w-full h-full py-8" />
        </div>

        {/* --- SECTION B: EXTRACTION (The Matrix) --- */}
        <div className="col-span-4 flex flex-col z-10">
           <h2 className="text-lg font-bold text-slate-700 mb-4 border-b-2 border-slate-200 pb-2 uppercase tracking-wider flex items-center gap-2">
            <Settings className="w-5 h-5" />
            Phase B: 요소 추출 (Extraction)
          </h2>

          <div className="bg-white rounded-2xl border border-slate-300 shadow-xl h-full overflow-hidden flex flex-col">
            <div className="bg-slate-800 text-white p-3 text-center font-bold tracking-wide">
              디자인 요소 통합 매트릭스 (Integration Matrix)
            </div>
            
            <div className="flex flex-1 divide-x divide-slate-200">
              
              {/* Column 1: Shared Common Needs */}
              <div className="flex-1 p-4 bg-slate-50">
                <div className="flex items-center gap-2 mb-3 justify-center">
                   <div className="p-1.5 bg-blue-100 rounded text-blue-700"><ShieldCheck size={16}/></div>
                   <h3 className="font-bold text-slate-700 text-sm">공통 기반 (Universal Base)</h3>
                </div>
                <div className="space-y-2">
                  {DESIGN_FACTORS.shared.map((factor, i) => (
                    <div key={i} className="text-xs bg-white border border-slate-200 p-2 rounded shadow-sm text-slate-600 text-center font-medium">
                      {factor}
                    </div>
                  ))}
                </div>
              </div>

              {/* Column 2: Differentiated Needs */}
              <div className="flex-1 p-4 bg-white">
                 <div className="flex items-center gap-2 mb-3 justify-center">
                   <div className="p-1.5 bg-purple-100 rounded text-purple-700"><Layers size={16}/></div>
                   <h3 className="font-bold text-slate-700 text-sm">특화 요구 (Specific Needs)</h3>
                </div>
                <div className="space-y-3 h-full flex flex-col justify-around">
                   <div className={`p-2 rounded border-l-2 border-indigo-500 bg-indigo-50 text-xs text-indigo-800 transition-opacity ${getOpacityClass(UserGroupType.DEMENTIA)}`}>
                      <strong>치매 (Dementia):</strong> 고대비, 기억 단서, 서카디안 리듬
                   </div>
                   <div className={`p-2 rounded border-l-2 border-orange-500 bg-orange-50 text-xs text-orange-800 transition-opacity ${getOpacityClass(UserGroupType.FALL_RISK)}`}>
                      <strong>낙상 (Fall Risk):</strong> 연속적 지지, 명확한 구역, 저위치 조명
                   </div>
                   <div className={`p-2 rounded border-l-2 border-emerald-500 bg-emerald-50 text-xs text-emerald-800 transition-opacity ${getOpacityClass(UserGroupType.SENSORY)}`}>
                      <strong>감각 (Sensory):</strong> 눈부심 방지, 무광 텍스처, 흡음
                   </div>
                </div>
              </div>

              {/* Column 3: Adaptive Tech */}
              <div className="flex-1 p-4 bg-gradient-to-b from-slate-50 to-blue-50/50">
                <div className="flex items-center gap-2 mb-3 justify-center">
                   <div className="p-1.5 bg-teal-100 rounded text-teal-700"><Settings size={16}/></div>
                   <h3 className="font-bold text-slate-700 text-sm">가변 기술 (Adaptive Tech)</h3>
                </div>
                <p className="text-[10px] text-center text-slate-400 mb-2 italic">Enablers of flexibility</p>
                <div className="space-y-2">
                  {DESIGN_FACTORS.adaptive.map((factor, i) => (
                    <div key={i} className="text-xs bg-white border-l-2 border-teal-400 p-2 rounded shadow-sm text-slate-700">
                      {factor}
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* --- ARROW CONNECTORS B -> C --- */}
        <div className="col-span-1 flex items-center justify-center">
           <SingleToMultiArrow className="w-full h-16" />
        </div>

        {/* --- SECTION C: OUTPUT (Adaptive Room) --- */}
        <div className="col-span-3 flex flex-col z-10">
          <h2 className="text-lg font-bold text-slate-700 mb-4 border-b-2 border-slate-200 pb-2 uppercase tracking-wider flex items-center gap-2">
            <Accessibility className="w-5 h-5" />
            Phase C: 솔루션 (The Solution)
          </h2>
          
          <div className="bg-white rounded-2xl border-2 border-slate-800 shadow-2xl p-1 h-full flex flex-col">
             {/* Core Concept */}
             <div className="bg-slate-800 text-white rounded-t-xl p-6 text-center">
                <h3 className="text-2xl font-bold mb-1">가변형 유니버설 룸</h3>
                <p className="text-slate-300 text-sm italic">"하나의 공간 구조, 세 가지 활성 모드"</p>
             </div>

             {/* Visualization of Modes */}
             <div className="flex-1 p-4 space-y-4">
                {ROOM_MODES.map((mode) => (
                  <div 
                    key={mode.id}
                    className={`p-3 rounded-lg border transition-all duration-300 ${
                      hoveredGroup === mode.targetGroup 
                        ? "bg-slate-100 border-slate-400 scale-105 shadow-md" 
                        : hoveredGroup 
                          ? "opacity-30 border-dashed" 
                          : "bg-white border-slate-200"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                       <span className="font-bold text-sm text-slate-800">{mode.modeName}</span>
                       <span className={`w-2 h-2 rounded-full ${
                         mode.targetGroup === UserGroupType.DEMENTIA ? 'bg-indigo-500' :
                         mode.targetGroup === UserGroupType.FALL_RISK ? 'bg-orange-500' : 'bg-emerald-500'
                       }`}></span>
                    </div>
                    <p className="text-xs text-slate-500 mb-2">{mode.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {mode.features.map(f => (
                        <span key={f} className="text-[10px] px-1.5 py-0.5 bg-slate-100 text-slate-600 rounded border border-slate-200">
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
             </div>

             {/* Visual Footnote */}
             <div className="p-3 bg-slate-50 border-t border-slate-100 text-center rounded-b-xl">
               <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">공간 구성 (Spatial Config)</span>
               <div className="flex justify-center gap-2 mt-2">
                  <div className="w-8 h-8 border border-slate-300 bg-white rounded shadow-sm flex items-center justify-center text-[8px]">평면</div>
                  <ArrowRight className="w-4 h-4 text-slate-300 mt-2" />
                  <div className="w-8 h-8 border border-slate-300 bg-indigo-50 rounded shadow-sm flex items-center justify-center text-[8px] font-bold text-indigo-800">A</div>
                  <div className="w-8 h-8 border border-slate-300 bg-orange-50 rounded shadow-sm flex items-center justify-center text-[8px] font-bold text-orange-800">B</div>
                  <div className="w-8 h-8 border border-slate-300 bg-emerald-50 rounded shadow-sm flex items-center justify-center text-[8px] font-bold text-emerald-800">C</div>
               </div>
             </div>
          </div>
        </div>

      </div>

      {/* Footer: Value Proposition */}
      <div className="mt-8 grid grid-cols-12 gap-4">
        <div className="col-start-8 col-span-5">
           <div className="bg-slate-100 rounded-lg p-4 border border-slate-200">
             <h4 className="font-bold text-slate-700 mb-3 flex items-center gap-2 text-sm uppercase">
               <CheckCircle2 className="w-4 h-4 text-teal-600" />
               왜 세 가지 별도 병실이 아닌가?
             </h4>
             <ul className="space-y-2">
               {VALUE_PROPS.map((prop, i) => (
                 <li key={i} className="text-xs text-slate-600 flex items-start gap-2">
                    <span className="text-teal-500 mt-0.5">›</span>
                    {prop}
                 </li>
               ))}
             </ul>
           </div>
        </div>
      </div>

    </div>
  );
};

export default DesignMechanism;

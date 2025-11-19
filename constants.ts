import { UserGroupType, UserGroupData, DesignFactorData, RoomModeData } from './types';

export const USER_GROUPS: UserGroupData[] = [
  {
    id: UserGroupType.DEMENTIA,
    title: "경도/중등도 치매",
    subtitle: "인지 지원 (Cognitive Support)",
    colorTheme: {
      bg: "bg-indigo-50",
      border: "border-indigo-500",
      text: "text-indigo-700",
      heading: "text-indigo-900",
      light: "bg-indigo-100"
    },
    requirements: [
      "지남력(방향감각) 상실",
      "정서적 안정 필요",
      "고대비 시각적 단서",
      "명확한 이동 경로",
      "기억 회상 자극 (Memory Prompts)",
      "서카디안(일주기) 리듬 조명"
    ]
  },
  {
    id: UserGroupType.FALL_RISK,
    title: "낙상 고위험군",
    subtitle: "신체적 안전 (Physical Safety)",
    colorTheme: {
      bg: "bg-orange-50",
      border: "border-orange-500",
      text: "text-orange-800",
      heading: "text-orange-900",
      light: "bg-orange-100"
    },
    requirements: [
      "안정적인 지지 필요",
      "연속적인 핸드레일",
      "간호 구역 폭 ≥ 1.0m",
      "회전 반경 Ø1500",
      "낙상 감지 센서 조명",
      "양방향 도어 / 비상 호출"
    ]
  },
  {
    id: UserGroupType.SENSORY,
    title: "감각 기능 저하",
    subtitle: "편안함 & 명확성 (Comfort & Clarity)",
    colorTheme: {
      bg: "bg-emerald-50",
      border: "border-emerald-500",
      text: "text-emerald-800",
      heading: "text-emerald-900",
      light: "bg-emerald-100"
    },
    requirements: [
      "빛 민감도 증가",
      "시력 약화 (눈부심 방지)",
      "균일한 조도",
      "저반사 마감재",
      "단순화된 질감/텍스처",
      "명확한 정보 표지 (Signage)"
    ]
  }
];

export const DESIGN_FACTORS: DesignFactorData = {
  shared: [
    "전반적 안전성",
    "무장애 접근성 (Accessibility)",
    "위생 및 유지관리",
    "야간 조명",
    "미끄럼 방지 마감",
    "환기 시스템",
    "배리어 프리 화장실",
    "기본 조명 제어",
    "개인 수납공간"
  ],
  adaptive: [
    "가변 조명 시스템 (조광/조색)",
    "교체형 정보 레이어 (벽면/색상)",
    "모듈러 핸드레일 (탈부착 가능)",
    "이동식/가변형 가구",
    "다중 시나리오 조명 프리셋"
  ]
};

export const ROOM_MODES: RoomModeData[] = [
  {
    id: 'mode-a',
    modeName: "Mode A: 치매 대응 모드",
    description: "지남력 유지 및 인지 지원에 초점.",
    features: ["고대비", "메모리 월 활성화", "서카디안 조명"],
    targetGroup: UserGroupType.DEMENTIA
  },
  {
    id: 'mode-b',
    modeName: "Mode B: 낙상 예방 모드",
    description: "신체적 안정성 및 이동 지원에 초점.",
    features: ["전면 핸드레일", "장애물 없는 바닥", "저위치 조명"],
    targetGroup: UserGroupType.FALL_RISK
  },
  {
    id: 'mode-c',
    modeName: "Mode C: 감각 편안 모드",
    description: "시각적 편안함 및 심리적 안정에 초점.",
    features: ["부드러운 균일광", "무광 표면", "소음 저감"],
    targetGroup: UserGroupType.SENSORY
  }
];

export const VALUE_PROPS = [
  "운영 유연성: 재건축 없이 다양한 입소자 요구 수용 가능.",
  "Aging in Place (거주지 지속 거주): 입소자의 상태 변화에 매끄럽게 적응.",
  "프라이버시 & 존엄성: 개인화된 1인실에서의 높은 삶의 질.",
  "비용 효율성: 유닛 케어(Unit Care) 운영 모델에 부합.",
  "미래 대응: 고급 개별 케어 트렌드에 부합."
];
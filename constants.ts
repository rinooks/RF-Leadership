
import { Instructor, CurriculumTrack, JourneyStep, HistoryItem } from './types';

export const JOURNEY_STEPS: JourneyStep[] = [
  {
    step: 1,
    title: "Celebration",
    description: "신임 리더의 출발을 축하하며 자부심 고취",
    items: ["경영진 축하 및 간담회", "Celebration Gift", "온보딩 가이드 제공", "리더십 툴킷 제공"]
  },
  {
    step: 2,
    title: "On-Boarding",
    description: "리더 역할 인식 및 초기 적응 지원",
    items: ["엄선된 온라인 콘텐츠 사전교육", "리더십 역량수준 진단", "리더십 기본 교육", "선배 리더 멘토링 매칭"]
  },
  {
    step: 3,
    title: "성과관리 패키지",
    description: "성과 창출을 위한 실전 프로세스 습득",
    items: ["성과관리 프로세스", "목표수립 워크숍", "중간점검 및 성과면담", "성과평가 피드백", "성과관리 코칭"]
  },
  {
    step: 4,
    title: "리더십 심화 모듈",
    description: "조직 관리 및 사람 관리 역량 심화",
    items: ["팀 갈등관리", "리더의 업무지시", "리더 강점 워크숍", "리더의 자기이해", "단단한 팀 만들기"]
  },
  {
    step: 5,
    title: "진단 및 사후관리",
    description: "지속적인 성장과 행동 변화 유도",
    items: ["주기적 리더십 진단", "리더십 성과평가", "리더십 성과공유회"]
  }
];

export const INSTRUCTORS: Instructor[] = [
  {
    name: "원운식",
    title: "소장",
    education: ["연세대학교 의용전자공학 전공"],
    role: ["(현) 레퍼런스에이치알디 전문교수", "(현) 인생학교 Business Facilitator", "(전) 청호그룹 기획조정실"],
    specialty: ["셀프리더십", "문제해결", "업무생산성", "조직 커뮤니케이션"]
  },
  {
    name: "이제복",
    title: "소장",
    education: ["한성대학교 컨설팅학 박사", "고려대학교 교육학 석사"],
    role: ["(현) 레퍼런스에이치알디 전문교수", "(현) 케이브레인컴퍼니 리더십 연구소장", "(전) 동부그룹 핵심가치 및 리더 육성"],
    specialty: ["계층별 리더십", "조직문화 개발", "갈등관리", "의사소통"]
  },
  {
    name: "김주연",
    title: "소장",
    education: ["건국대학교 경영학 박사 (인사조직/노사관계)"],
    role: ["(현) 레퍼런스에이치알디 전문교수", "(현) 유쾌한리더십 대표", "(전) CJ ENM 커머스 인사담당 팀장"],
    specialty: ["신임 팀장 리더십", "성과관리(OKR)", "코칭 및 피드백", "동기부여"]
  },
  {
    name: "이인우",
    title: "박사",
    education: ["한국기술교육대학교 인력경영학 박사", "고려대학교 경영대학 MBA"],
    role: ["(현) 레퍼런스에이치알디 전문교수", "(현) 리더십인사이트 대표", "(전) 풀무원 인재혁신센터장"],
    specialty: ["임원/팀장 리더십", "변화관리", "코칭 스킬", "영업 관리"]
  },
  {
    name: "함병우",
    title: "박사",
    education: ["숭실대학교 일반대학원 교육학 박사 (성인교육, 리더십)"],
    role: ["(현) 레퍼런스에이치알디 전문교수", "(전) 미국 CCL LEAP Instructor", "(전) 삼성SDS 멀티캠퍼스 리더십 교수"],
    specialty: ["리더십", "피드백 스킬", "임파워먼트", "갈등관리"]
  },
  {
    name: "박혁종",
    title: "대표",
    education: ["연세대 교육대학원 인적자원개발 전공"],
    role: ["(현) 레퍼런스에이치알디 전문교수", "(현) Bandwagon 대표", "(전) 현대자동차그룹사 리더십/기본교육 총괄"],
    specialty: ["중간관리자 리더십", "업무지시/질책대화", "기획력/보고력", "설득 프레젠테이션"]
  },
  {
    name: "서인수",
    title: "소장",
    education: ["아주대학교 경영대학원 인사조직 석사"],
    role: ["(현) 레퍼런스에이치알디 전문교수", "(현) 프랙티스디자인랩 대표", "(전) 임팩트그룹코리아 HRD사업 본부장"],
    specialty: ["리더십", "동기부여", "인재육성 코칭", "리더십 모델 개발"]
  }
];

export const CURRICULUM_TRACKS: CurriculumTrack[] = [
  {
    id: "onboarding",
    title: "신임리더 온보딩",
    description: "조직의 기대사항을 이해하고 리더 역할에 빠르게 적응할 수 있도록 지원합니다.",
    target: "신임 팀장 (루키 리더)",
    programs: [
      {
        id: "onboarding-basic",
        title: "신임팀장 리더십 기본",
        description: "리더로서의 마인드셋 정립과 사람관리, 성과관리의 기초를 다집니다.",
        modules: [
          {
            code: "M1",
            title: "팀장의 역할과 마인드셋",
            duration: "1.0~2.0 H",
            description: ["개인의 성과 vs 팀을 통한 성과", "리더십의 2가지 핵심 축: 성과관리와 사람관리", "리더와 성과의 상관관계"],
            method: "강의/실습"
          },
          {
            code: "M2",
            title: "성과관리 (1) 올바른 목표",
            duration: "1.5~3.0 H",
            description: ["올바른 목표 3요소 (Align/Be/Stretch)", "조직의 전략과 Align된 핵심 과업 정리", "명확한 지시를 위한 저맥락 대화법"],
            method: "강의/사례/실습"
          },
          {
            code: "M3",
            title: "성과관리 (2) 효과적 관리",
            duration: "2.0~4.0 H",
            description: ["P-D-C-A 사이클", "AAP(After Action Plan) 코칭 대화법", "분기별 성과리뷰 및 평가 면담 Tip"],
            method: "강의/사례/실습"
          },
          {
            code: "M4",
            title: "사람관리 (1) 성숙도별 관리 방안",
            duration: "1.0~2.0 H",
            description: ["역량-의욕 Matrix 분석", "구성원의 업무 성숙도에 따른 리더십 지시/지원 방법"],
            method: "강의/실습"
          },
          {
            code: "M5",
            title: "사람관리 (2) 위임과 동기부여",
            duration: "1.0~2.0 H",
            description: ["자기 결정성 이론(자율성, 유능감, 관계성)", "애플의 재량적 리더십 모델", "성장 동기를 촉진하는 대화법"],
            method: "강의/사례/실습"
          },
          {
            code: "M6",
            title: "사람관리 (3) 효과적인 피드백",
            duration: "1.5~3.0 H",
            description: ["질책이 아닌 건설적 피드백", "3F(Fact-Feel-Forward) 피드백 실습", "인정의 힘: 칭찬보다 인정"],
            method: "강의/사례/실습"
          }
        ]
      }
    ]
  },
  {
    id: "practical",
    title: "실전 리더십 역량강화 (성과관리)",
    description: "목표 설정부터 평가 피드백, 코칭까지 성과관리의 전 과정을 마스터합니다.",
    target: "팀장 2~3년차 (챌린저/솔리드 리더)",
    programs: [
      {
        id: "pm-basic",
        title: "성과관리 프로세스 기본",
        description: "연간 성과관리 싸이클을 이해하고 공정한 평가를 위한 기준을 수립합니다.",
        modules: [
          {
            code: "M1",
            title: "연간 성과관리 싸이클",
            duration: "2.0 H",
            description: ["측정과 관리의 개념", "성과관리 싸이클별 10대 이슈", "성과 관리 이슈와 관련한 Good & Bad 경험"],
            method: "강의/토의"
          },
          {
            code: "M2",
            title: "목표 설정 및 관리",
            duration: "2.0 H",
            description: ["목표 합의(Commitment) vs 할당", "S.M.A.R.T 목표 수립 실습", "KPI 도출 프로세스"],
            method: "강의/실습/토의"
          },
          {
            code: "M3",
            title: "평가 공정성",
            duration: "1.5 H",
            description: ["평가 공정성의 3요소 (분배/절차/상호작용)", "팀원 관찰 일지 기록법", "상호작용 공정성을 높이는 중간 면담"],
            method: "강의/사례분석"
          },
          {
            code: "M4",
            title: "성과 평가 면담",
            duration: "2.5 H",
            description: ["평가 면담 Process", "면담 시나리오 분석 및 R/P", "대화 스킬: 공감, 경청, 인정, 질문"],
            method: "강의/실습/피드백"
          }
        ]
      },
      {
        id: "goal-workshop",
        title: "팀 목표수립 워크숍",
        description: "팀의 핵심 성과지표(KPI)를 도출하고 구체적인 실행 계획을 수립합니다.",
        modules: [
          {
            code: "M1",
            title: "성과관리 싸이클 이해",
            duration: "2.0 H",
            description: ["관리의 개념과 측정", "연간 성과관리 싸이클 이슈 토의"],
            method: "강의/토의"
          },
          {
            code: "M2",
            title: "목표 설정 실습",
            duration: "4.0 H",
            description: ["전사 목표 Cascading", "도전적 목표 합의", "KPI 도출 프로세스 및 팀 KPI 점검"],
            method: "강의/사례/토의"
          },
          {
            code: "M3",
            title: "목표 관리 및 피드백",
            duration: "2.0 H",
            description: ["측정 지표 수립(Milestone)", "Outcome 중심 측정", "상시 피드백 스킬"],
            method: "강의/실습"
          }
        ]
      },
      {
        id: "mid-check",
        title: "성과면담 및 중간점검",
        description: "과정 관리를 위한 수시 면담 스킬과 중간 점검 프로세스를 학습합니다.",
        modules: [
          {
            code: "M1",
            title: "과정 관리와 수시 면담",
            duration: "1.0 H",
            description: ["수시 면담의 핵심 요소", "업무 진행 기록표와 사전 아젠다 관리"],
            method: "강의/토의"
          },
          {
            code: "M2",
            title: "중간 면담 진행 방법",
            duration: "1.0 H",
            description: ["AAP 코칭 5단계 프로세스", "Candor(완전한 솔직함) 의견 제시"],
            method: "강의/토의"
          },
          {
            code: "M3",
            title: "중간 면담 사례 연구",
            duration: "1.0 H",
            description: ["노력 대비 성과 저조 팀원", "책임 회피형 팀원 등 사례별 토의"],
            method: "토의/피드백"
          },
          {
            code: "M4",
            title: "중간 면담 피드백 스킬",
            duration: "1.0 H",
            description: ["척도 질문 활용", "중간 면담 역할 연기(R/P)"],
            method: "강의/실습"
          }
        ]
      },
      {
        id: "eval-feedback",
        title: "성과평가 피드백",
        description: "공정하고 수용성 높은 평가 결과 전달 및 피드백 스킬을 익힙니다.",
        modules: [
          {
            code: "M1",
            title: "평가의 목적과 프로세스",
            duration: "1.0 H",
            description: ["평가 제도의 목적", "평가 시 주의해야 할 대상과 피드백 금지 사항"],
            method: "강의/토의"
          },
          {
            code: "M2",
            title: "공정하고 객관적인 평가",
            duration: "1.5 H",
            description: ["성과 캘리브레이션", "성과 근거 기록 및 공유", "면담 기록표 작성 스킬"],
            method: "강의/토의"
          },
          {
            code: "M3",
            title: "평가 피드백 스킬",
            duration: "1.5 H",
            description: ["평가 결과 작성 실습(저성과자)", "Good/Bad Case 분석", "평가 피드백 프로세스"],
            method: "강의/실습"
          }
        ]
      },
      {
        id: "pm-coaching",
        title: "성과관리 코칭",
        description: "구성원의 성장을 돕고 성과를 극대화하는 코칭 리더십을 배양합니다.",
        modules: [
          {
            code: "M1",
            title: "성과관리의 중요성",
            duration: "1.5 H",
            description: ["팀의 과업과 목표 명확화", "성과관리 이슈 토의"],
            method: "강의/토의"
          },
          {
            code: "M2",
            title: "업무 목표 및 업무 지시",
            duration: "2.0 H",
            description: ["S.M.A.R.T 목표 설정", "앤디 그로브의 업무 위임 10계명", "저맥락 대화"],
            method: "강의/토의"
          },
          {
            code: "M3",
            title: "건설적 피드백과 대화 스킬",
            duration: "2.0 H",
            description: ["I-message 대화법", "FTA 피드백 Process (Fact-Thought-Ask)", "교정적 피드백 R/P"],
            method: "강의/실습"
          },
          {
            code: "M4",
            title: "성과관리 코칭 스킬",
            duration: "2.5 H",
            description: ["GROW 코칭 대화법", "성과 리뷰를 위한 4가지 코칭 질문", "1:1 면담"],
            method: "강의/실습"
          }
        ]
      },
      {
        id: "pm-skills",
        title: "성과관리 리더십 스킬",
        description: "성과를 높이는 강점 활용과 부하 육성 피드백에 집중합니다.",
        modules: [
          {
            code: "M1",
            title: "리더의 역할과 마인드셋",
            duration: "1.0 H",
            description: ["관리 vs 리더십의 균형", "사람을 통해 성과 창출"],
            method: "강의/토의"
          },
          {
            code: "M2",
            title: "리더십 스타일에 따른 관리",
            duration: "1.0 H",
            description: ["리더십 스타일 진단", "지시/지도/지원/코칭 방법"],
            method: "진단/토의"
          },
          {
            code: "M3",
            title: "고성과 리더의 업무 지시",
            duration: "2.0 H",
            description: ["고맥락 vs 저맥락 지시", "생각 구체화 질문법", "업무 합의 스킬"],
            method: "강의/토의"
          },
          {
            code: "M4",
            title: "강점과 집중",
            duration: "1.5 H",
            description: ["강점 관리의 중요성", "집중(Focus)의 힘"],
            method: "강의/토의"
          },
          {
            code: "M5",
            title: "성장을 위한 피드백",
            duration: "2.5 H",
            description: ["심리적 안전감", "FTA 피드백", "경청과 인정"],
            method: "강의/실습"
          }
        ]
      }
    ]
  },
  {
    id: "advanced",
    title: "리더십 심화 프로그램",
    description: "갈등 관리, 강점 활용, 자기 이해 등 조직 관리의 디테일을 강화합니다.",
    target: "전체 팀장 및 마스터 리더",
    programs: [
      {
        id: "conflict",
        title: "팀 갈등관리",
        description: "갈등을 성장의 기회로 전환하는 갈등 관리 역량을 강화합니다.",
        modules: [
          {
            code: "M1",
            title: "갈등에 대한 이해",
            duration: "1.0 H",
            description: ["세대/직급 간 갈등 인식", "갈등 관리: 이기는 것이 아니라 얻는 것"],
            method: "강의/토의"
          },
          {
            code: "M2",
            title: "나의 갈등 관리 스타일",
            duration: "2.5 H",
            description: ["갈등 관리 스타일 진단", "상황에 따른 적합한 대응"],
            method: "진단/토의"
          },
          {
            code: "M3",
            title: "갈등 관리 역량 강화",
            duration: "3.5 H",
            description: ["추론의 사다리", "생각과 감정의 이중 고리", "욕구 찾기 및 대안 수립"],
            method: "강의/R.P"
          },
          {
            code: "M4",
            title: "갈등 관리 내재화",
            duration: "1.0 H",
            description: ["실행력 강화 방안 토의 (만다라트)", "자기 실천 계획 다짐"],
            method: "토의/다짐"
          }
        ]
      },
      {
        id: "command",
        title: "리더의 업무지시",
        description: "명확하고 동기부여가 되는 업무 지시 스킬을 훈련합니다.",
        modules: [
          {
            code: "Intro",
            title: "나쁜 업무지시 이해하기",
            duration: "1.0 H",
            description: ["팀원의 몰입을 망치는 지시 방식", "앤디 그로브의 철학"],
            method: "강의/퀴즈"
          },
          {
            code: "Prep",
            title: "업무지시 준비 하기",
            duration: "2.0 H",
            description: ["명분 & 실리", "일의 배경/맥락 파악", "적절 인물 선정"],
            method: "강의"
          },
          {
            code: "Skill",
            title: "업무지시 대화 실행",
            duration: "2.0 H",
            description: ["C.O.A.C.H 대화 모델", "3,2,1 대화법 (3분, 2가지 질문, 1번 확인)"],
            method: "강의/실습"
          },
          {
            code: "Follow",
            title: "실행 관리 하기",
            duration: "2.0 H",
            description: ["업무 지시 후 피드백", "중간 점검의 기술"],
            method: "강의"
          }
        ]
      },
      {
        id: "strength",
        title: "리더 강점 워크숍",
        description: "자신과 팀원의 강점을 발견하고 이를 활용하여 탁월한 성과를 창출합니다.",
        modules: [
          {
            code: "M1",
            title: "업무 강점의 이해",
            duration: "1.0 H",
            description: ["약점이 아닌 강점에 집중해야 하는 이유", "4가지 강점 영역"],
            method: "강의/사례"
          },
          {
            code: "M2",
            title: "개인의 강점 파악",
            duration: "2.0 H",
            description: ["사전 진단 리뷰", "상위 5개 강점 특성 파악", "나의 일하는 방식 이해"],
            method: "진단리뷰"
          },
          {
            code: "M3",
            title: "강점과 차별화 전략",
            duration: "2.0 H",
            description: ["나의 강력한 무기 발견", "상호 보완적 성과 창출"],
            method: "강의/사례"
          },
          {
            code: "M4",
            title: "강점으로 시너지 높이기",
            duration: "3.0 H",
            description: ["강점 활용 및 약점 보완", "타인 강점 발견 및 개발 방안"],
            method: "강의/실습"
          }
        ]
      },
      {
        id: "self",
        title: "리더의 자기이해",
        description: "객관적인 진단을 통해 리더로서의 자신을 성찰하고 행동 변화를 모색합니다.",
        modules: [
          {
            code: "M1",
            title: "나는 어떤 리더인가?",
            duration: "1.0 H",
            description: ["Self Awareness의 중요성", "리더십 신념과 상황적 맥락"],
            method: "강의/토의"
          },
          {
            code: "M2",
            title: "진단과 성찰을 통한 자기이해",
            duration: "2.0 H",
            description: ["Firo-B 진단 (대인관계 욕구)", "팀원과의 관계 역동 분석"],
            method: "진단/사례"
          },
          {
            code: "M3",
            title: "리더십 탈선 방지",
            duration: "2.0 H",
            description: ["Harrison 진단 (스트레스 상황)", "리더십 역설(Paradox)", "행동 계획 수립"],
            method: "강의/실습"
          }
        ]
      },
      {
        id: "team",
        title: "단단한 팀 만들기",
        description: "심리적 안전감을 바탕으로 소통하고 협력하는 강한 팀을 구축합니다.",
        modules: [
          {
            code: "M1",
            title: "좋은 팀과 리더",
            duration: "1.0 H",
            description: ["Shared Leadership", "정원사로서의 리더"],
            method: "강의/토의"
          },
          {
            code: "M2",
            title: "팀 리더십의 3요소",
            duration: "4.0 H",
            description: ["방향과 책임 (팀 목적 공유)", "소통과 자율 (심리적 안전감)", "개방과 수용 (취약성 오픈)"],
            method: "강의/토의"
          }
        ]
      }
    ]
  }
];

export const COMPANY_HISTORY: HistoryItem[] = [
  {
    year: "2024~2025",
    events: [
      "바로스시공 팀장 인재육성 체계 구축 컨설팅 (인증제 및 교육체계)",
      "LS전선 비전이음 HR 3.0 전사 교육 프로그램 개발 및 운영",
      "무림제지그룹 전사 AI 리터러시 및 핵심가치 개발 및 운영",
      "동국제강그룹 전사 AI 리터러시 및 업무활용 교육",
      "LG인화원 안전환경 전문가 AI APP 개발",
      "삼양홀딩스 평가자 면담 AI 시뮬레이션 APP 개발",
      "SM C&C 영업직 AI 시뮬레이션 AI APP 개발",
      "엘카코리아 현장리더 코칭 AI APP 개발",
      "동양생명 전직급 승진자 AI 업무활용 교육",
      "한국앤컴퍼니 전사 조직개발 워크숍 프로그램 개발 및 운영",
      "신한라이프 핵심인재 AI 기획력 과정",
      "서울시복지재단 청년자산형성지원사업 5년 연속 진행"
    ]
  },
  {
    year: "2022~2023",
    events: [
      "여성기업 인증 (제 0118-2022-23209호)",
      "국내 최초 메타버스 오픈런 '메타버쓱' 프로젝트 (SSG)",
      "국내 최초 게임형 메타버스 ESG '탄소잡는 삐씨농장' 프로젝트 (BC카드)",
      "현대차 신차개발 프로세스 기반 품질관리 과정 퀘스트러닝 개발",
      "기아 안전부문 메타버스 퀘스트러닝 개발",
      "LG ESG 실사 시뮬레이션 메타버스 퀘스트러닝 프로그램 개발",
      "무림그룹 메타버스 기반 핵심가치 과정 개발 및 교육",
      "한국타이어앤테크놀로지 전직급 직무공통과정 교육"
    ]
  },
  {
    year: "2020~2021",
    events: [
      "비대면 교육 전용 유클래스 스튜디오 오픈",
      "국내 최초 언택트 워크숍 성공사례 발표 (with 뉴인)",
      "국내 최초 메타버스를 활용한 기업교육 현황 리뷰 & 트랜드 리포트 발행",
      "지방자치인재개발원 이러닝 교육체계 수립 컨설팅",
      "KT그룹 언택트러닝 가이드북 제작 프로젝트",
      "현대해상 하트리더 양성 / 보상협상 개발 및 교육",
      "현대HDS 경력직 자기주도성 교육",
      "초록우산어린이재단 퍼실리테이티브 리더 워크숍"
    ]
  },
  {
    year: "2018~2019",
    events: [
      "(주)레퍼런스에이치알디 법인 설립",
      "휴넷 골드명사 및 MBA 명사 특강 위탁 운영사 선정",
      "뉴인 터치클래스 전략적 제휴 및 업무협약",
      "수피아에코라이프 전략적 제휴 및 업무협약",
      "KT그룹 변화혁신, 그룹사간 협업 과정, 수납지원센터 잡크래프팅 개발",
      "무림그룹 핵심가치 내재화 과정 개발 및 교육",
      "한국타이어 전직급 리더십, 직무공통 교육"
    ]
  }
];

export const CLIENTS: string[] = [
  "SAMSUNG", "HYUNDAI", "SK", "LG", "LOTTE",
  "POSCO", "HANWHA", "GS", "KT", "CJ",
  "DOOSAN", "SHINSEGAE", "NAVER", "KAKAO", "KOREAN AIR",
  "AMOREPACIFIC", "LS", "DL", "HD HYUNDAI", "HYUNDAI MOBIS",
  "LG CHEM", "SK HYNIX", "S-OIL", "KT&G", "KOGAS",
  "KEPCO", "KOLON", "HYOSUNG", "WOOWA BROS", "KRAFTON"
];

// Added for Home Page
export const MAIN_STATS = [
  { value: "40+", label: "고객사 파트너십" },
  { value: "5,000명+", label: "함께한 팀장님" },
  { value: "95%", label: "교육 만족도" }
];

export const MAIN_STRATEGIES = [
  {
    title: "Reference",
    subtitle: "검증된 HRD 레퍼런스",
    desc: "검증된 HRD 레퍼런스를 기반으로 구성된 교육 프로그램과 강사풀로 성과지향적인 HRD를 추구합니다.",
    icon: "BookOpen"
  },
  {
    title: "Customizing",
    subtitle: "맞춤형 교육과정 개발",
    desc: "업종, 계층, 조직문화에 기반한 맞춤형 과정 개발 역량을 보유하여 우리 회사만을 위한 교육 콘텐츠를 제공합니다.",
    icon: "Target"
  },
  {
    title: "Operation",
    subtitle: "차별화된 교육 운영",
    desc: "교육 전, 교육 중, 교육 후로 구분된 교육 운영 전략으로 고객의 교육 만족도를 극대화 합니다.",
    icon: "Settings"
  }
];

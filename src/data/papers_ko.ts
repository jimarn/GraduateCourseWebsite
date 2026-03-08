export interface Paper {
    title: string;
    citation: string;
    summary: string;
    url?: string;
}

export interface Category {
    id: number;
    title: string;
    papers: Paper[];
}

export const courseData: Category[] = [
    {
        id: 1,
        title: "Trueness and Precision of Intraoral Scanners in Different Clinical Scenarios",
        papers: [
            {
                title: "Scan accuracy of wireless intraoral scanners while digitizing a combined scan body-healing abutment system",
                citation: "Dinçer G, Molinero-Mourelle P, Dönmez MB, Kahveci Ç, Yilmaz B, Çakmak G. Scan accuracy of wireless intraoral scanners while digitizing a combined scan body-healing abutment system. J Dent. 2024;151:105413.",
                summary: "**주요 발견 및 핵심 요약:** 유선 및 무선 구강스캐너를 이용하여 힐링 어버트먼트와 스캔 바디가 결합된 시스템을 스캔할 때의 진실성과 정밀도를 평가했습니다. 무선 스캐너가 유선 스캐너와 대등하거나 특정 평면에서는 오히려 더 높은 정밀도를 보였으나, 임플란트 스캔 시 근심협측으로 미세하게 기울어지는 경향성을 확인했습니다.\n\n**이 논문이 해당 연구 주제에서 중요한 이유:** 임상 현장에서 무선 스캐너 도입이 가속화되는 가운데, 하드웨어(유/무선) 차이가 데이터 왜곡 패턴에 미치는 영향을 분석하여 대학원생들이 스캐너 기기 자체의 특성을 변수로 삼는 연구를 기획하는 데 좋은 기준점이 됩니다.",
                url: "https://pubmed.ncbi.nlm.nih.gov/39419370/"
            },
            {
                title: "Accuracy of Complete-Arch Scans Obtained by Intraoral Scanner and Smartphone Three-Dimensional Scanning Applications With Different Smartphone Position Setups",
                citation: "Jiang Y, Long H, Soo SY, Mavani H, Tew IM. Accuracy of Complete-Arch Scans Obtained by Intraoral Scanner and Smartphone Three-Dimensional Scanning Applications With Different Smartphone Position Setups: An In Vitro Study. Cureus. 2024;16(6):e63471.",
                summary: "**주요 발견 및 핵심 요약:** 기존의 전용 구강스캐너와 스마트폰 기반의 3D 스캐닝 애플리케이션(Photogrammetry 방식)을 활용한 전악 인상의 정확도를 입체적(3D) 및 선형적으로 비교 분석했습니다. 촬영 각도(30°, 45°, 90° 등)에 따라 스마트폰 앱을 통한 스캔 정확도가 임상적으로 유의미한 수준까지 도달할 수 있음을 확인했습니다.\n\n**이 논문이 해당 연구 주제에서 중요한 이유:** 값비싼 전용 스캐너 없이도 모바일 기기와 AI 애플리케이션을 접목하는 초저비용 디지털 워크플로우라는 획기적인 주제를 던져주어, 학생들의 혁신적인 후속 연구 아이디어를 자극합니다.",
                url: "https://pubmed.ncbi.nlm.nih.gov/39077296/"
            },
            {
                title: "Trueness evaluation of three intraoral scanners for the recording of maximal intercuspal position",
                citation: "Wang S, Zhou Z, Yuan Q, Yue L, Yang S. Trueness evaluation of three intraoral scanners for the recording of maximal intercuspal position. Hua Xi Kou Qiang Yi Xue Za Zhi. 2024;42(2):227-233.",
                summary: "**주요 발견 및 핵심 요약:** Trios 3, Carestream 3600, Aoralscan 3 등 세 가지 구강스캐너를 사용하여 최대 교합위(Maximal Intercuspal Position, MIP)를 기록할 때의 진실성을 전통적인 페이스보우 트랜스퍼 및 교합기 방식과 비교했습니다. 표준화된 스캐닝 프로토콜 하에서는 디지털 방식이 아날로그 방식과 동등한 수준의 교합 채득 정확도를 보임을 입증했습니다.\n\n**이 논문이 해당 연구 주제에서 중요한 이유:** 단일 지대치 캡처를 넘어 상하악 악간 관계(교합)를 디지털로 기록하는 메커니즘을 다루므로, 전악 수복 및 교합 재구성 관련 연구 제안서를 작성할 때 필수적인 근거 자료가 됩니다.",
                url: "https://pubmed.ncbi.nlm.nih.gov/38597082/"
            },
            {
                title: "Influence of intraoral scanner and finish line location on the fabrication trueness and margin quality of additively manufactured laminate veneers",
                citation: "Çakmak G, Chebaro J, Donmez MB, Yılmaz D, Yoon HI, Kahveci Ç, Schimmel M, Yilmaz B. Influence of intraoral scanner and finish line location on the fabrication trueness and margin quality of additively manufactured laminate veneers fabricated with a completely digital workflow. J Prosthet Dent. 2024;131(2):313.e1-313.e9.",
                summary: "**주요 발견 및 핵심 요약:** 라미네이트 베니어 변연(finish line)의 위치(치은 연상 vs 연하)와 구강스캐너의 종류가 최종 3D 프린팅 수복물의 진실성 및 변연 적합도에 미치는 영향을 평가했습니다. 스캐너의 기종과 무관하게 치은 연하 마진에서 진실성이 가장 낮게 나타났으며, 기종에 따라 세부적인 적합도 편차가 존재했습니다.\n\n**이 논문이 해당 연구 주제에서 중요한 이유:** 최소 침습 수복물(베니어) 제작 시 구강 내 해부학적 한계(치은)가 광학 스캔의 한계와 어떻게 맞물리는지 보여주어, 심미 보철 스캐닝 프로토콜을 주제로 한 연구에 통찰력을 제공합니다.",
                url: "https://pubmed.ncbi.nlm.nih.gov/37978007/"
            }
        ]
    },
    {
        id: 2,
        title: "Comparative Performance of Intraoral Scanners: Technology and Scanning Conditions",
        papers: [
            {
                title: "Accuracy of intraoral scanners in maxillary multiple restorations: An in vitro study",
                citation: "Aung HMM, Linn TY, Lee WF, Chao JC, Teng NC, Renn TY, Chang WJ. Accuracy of intraoral scanners in maxillary multiple restorations: An <i>in vitro</i> study. J Dent Sci. 2024;19(Suppl 2):S116-S121.",
                summary: "**주요 발견 및 핵심 요약:** 단일 크라운, 3-unit 브릿지, 완전 무치악 등 다양한 상악 수복 시나리오에서 서로 다른 데이터 획득 방식을 가진 두 스캐너(Trios 3, Virtuo Vivo)의 정확도를 비교했습니다. 국소 부위에서는 두 기기의 진실성 차이가 미미했으나, 브릿지와 같은 다수치 수복 구간에서는 이미지 캡처 방식에 따라 결과값의 유의미한 차이가 발생했습니다.\n\n**이 논문이 해당 연구 주제에서 중요한 이유:** 임상 적응증(수복물의 크기와 범위)에 따라 최적의 성능을 발휘하는 하드웨어 기술(공초점 현미경 등)이 다를 수 있음을 시사하여, 기기 비교 논문을 작성할 때 변인 통제의 중요성을 알려줍니다.",
                url: "https://pubmed.ncbi.nlm.nih.gov/39807255/"
            },
            {
                title: "Evaluating the influence of palate scanning on the accuracy of complete-arch digital impressions",
                citation: "Schmalzl J, Keskeny GÁ, Hermann P, Pál A, Géczi Z, Borbély J, Róth I. Evaluating the influence of palate scanning on the accuracy of complete-arch digital impressions-An in vitro study. J Dent. 2024;145:105014.",
                summary: "**주요 발견 및 핵심 요약:** 전악 디지털 인상 채득 시, 구개부(Palate)를 포함하여 스캔하는 것이 전체 악궁 데이터의 정확도(특히 아치 변형 방지)에 미치는 영향을 평가했습니다. 구개부를 스캔 경로에 포함시킬 경우 전악 스캔의 진실성이 유의미하게 향상됨을 확인했습니다.\n\n**이 논문이 해당 연구 주제에서 중요한 이유:** 구강 내의 움직이지 않는 구조물(구개 추벽 등)을 스티칭(stitching)의 레퍼런스로 활용하는 소프트웨어 알고리즘의 원리를 보여주며, 새로운 스캔 랜드마크를 발굴하는 연구에 직결됩니다.",
                url: "https://pubmed.ncbi.nlm.nih.gov/38648874/"
            },
            {
                title: "Influence of operator experience on the complete-arch accuracy and time-based efficiency of three intraoral scanners",
                citation: "Lin WC, Lee CC, Lee SY, Peng CY, Lin CC. Influence of operator experience on the complete-arch accuracy and time-based efficiency of three intraoral scanners. J Dent Sci. 2025;20(1):620-625.",
                summary: "**주요 발견 및 핵심 요약:** 최신 구강스캐너 3종을 대상으로 작업자의 숙련도가 전악 스캔의 정확도 및 이미지 렌더링 시간에 미치는 영향을 조사했습니다. 흥미롭게도 최신 스캐너 환경에서는 숙련자와 비숙련자 간의 진실성 차이가 통계적으로 유의미하지 않았으며, 기기의 소프트웨어 렌더링 능력이 시간 효율성에 더 큰 영향을 미쳤습니다.\n\n**이 논문이 해당 연구 주제에서 중요한 이유:** AI와 소프트웨어의 발전이 '작업자 의존성(Operator dependency)'을 어느 정도까지 상쇄할 수 있는지에 대한 중요한 단서를 제공하여 임상 워크플로우 효율성 연구에 영감을 줍니다.",
                url: "https://pubmed.ncbi.nlm.nih.gov/39873045/"
            },
            {
                title: "Digital Impressions Versus Conventional Impressions In Prosthodontics: A Review Of Literature",
                citation: "Anonymous. Digital Impressions Versus Conventional Impressions In Prosthodontics: A Review Of Literature. Quest Journals. 2025.",
                summary: "**주요 발견 및 핵심 요약:** 환자의 수용도(구역 반사, 불편감 감소)와 치과의사의 작업 효율성(부분 재스캔 기능 등) 측면에서 디지털 인상과 전통 인상의 성능 및 조건을 비교한 종합 리뷰입니다.\n\n**이 논문이 해당 연구 주제에서 중요한 이유:** 단순히 수치적인 정확도(µm)를 넘어 임상 조건(환자의 협조도, 체어타임)이 최종 스캔 결과물의 퀄리티에 미치는 인체공학적·심리적 변수를 연구 제안서에 포함시키는 방법을 배울 수 있습니다.",
                url: "https://pubmed.ncbi.nlm.nih.gov/?term=Digital+Impressions+Versus+Conventional+Impressions+In+Prosthodontics"
            }
        ]
    },
    {
        id: 3,
        title: "Impact of Scanning Strategy and Operator Skill on Intraoral Scanner Accuracy",
        papers: [
            {
                title: "The effect of different scanning protocols on precision and trueness of intraoral scanning: A pilot trial",
                citation: "Sjögren P, Lindholm Y, Al-Bitar K. The effect of different scanning protocols on precision and trueness of intraoral scanning: A pilot trial. Journal of Clinical and Experimental Dentistry. 2024.",
                summary: "**주요 발견 및 핵심 요약:** ZIGZAG, ROCK, OBP, OWBP 등 4가지 서로 다른 스캔 경로(프로토콜)가 스캔 정확도에 미치는 영향을 파일럿 테스트했습니다. 제조사에서 권장하는 특정 패턴(OWBP 등)이 이미지 스티칭 오류를 최소화하여 기준 모형에 가장 근접한 진실성을 나타냈습니다.\n\n**이 논문이 해당 연구 주제에서 중요한 이유:** 학생들은 이 논문을 통해 다양한 스캔 전략(경로)을 디자인하고 이를 통계적으로 검증하는 인비트로(in-vitro) 실험 방법론을 구체적으로 학습할 수 있습니다.",
                url: "https://pubmed.ncbi.nlm.nih.gov/39544207/"
            },
            {
                title: "Digital integration in dental education: A novel self-directed learning model using intraoral scanners for tooth preparation training",
                citation: "Liu CM, Hsu MH, Ng MY, Yu CH. Digital integration in dental education: A novel self-directed learning model using intraoral scanners for tooth preparation training. J Dent Sci. 2025;20(1):639-645.",
                summary: "**주요 발견 및 핵심 요약:** 구강스캐너를 활용한 자기 주도 학습 모델이 치과대학생들의 지대치 형성 능력을 어떻게 향상시키는지 분석했습니다. 스캐너의 즉각적인 3D 피드백이 작업자의 실무 기술(prep 정확도)을 유의미하게 상승시키고 불안감을 감소시키는 데 기여했음을 증명했습니다.\n\n**이 논문이 해당 연구 주제에서 중요한 이유:** 디지털 치의학 기기가 단순한 '도구'를 넘어 임상가의 기술을 교정하는 '교육 보조 시스템'으로 작동할 수 있음을 보여주어, 덴탈 에듀테크 관련 연구를 기획하는 데 유용합니다.",
                url: "https://pubmed.ncbi.nlm.nih.gov/39873029/"
            },
            {
                title: "Accuracy of Digital Intraoral Scans Three-dimensional Surface Analysis Compared with Plaster Models Dental Measurement in Mixed Dentition",
                citation: "Nelwan SC, Karuniadewi AAS, Nowwarote N, Dewi AM, Prayogo RD. Accuracy of Digital Intraoral Scans Three-dimensional Surface Analysis Compared with Plaster Models Dental Measurement in Mixed Dentition. Int J Clin Pediatr Dent. 2024;17(12):1363-1369.",
                summary: "**주요 발견 및 핵심 요약:** 치열이 불규칙한 혼합 치열기 환경에서 작업자가 구강스캐너를 사용할 때와 전통적 석고 모형을 측정할 때의 정확도를 Moyer's analysis로 비교했습니다. 복잡한 표면 조건에서도 디지털 스캔 전략이 치아 계측에 임상적으로 수용 가능한 정확도를 달성함을 확인했습니다.\n\n**이 논문이 해당 연구 주제에서 중요한 이유:** 언더컷이 심하고 타액 조절이 어려운 특수 환자군(소아, 교정 환자 등)을 대상으로 스캐닝 난이도를 극복하기 위한 작업자 기술 및 전략 연구에 적합합니다.",
                url: "https://pubmed.ncbi.nlm.nih.gov/39867119/"
            },
            {
                title: "Effect of tooth color on the accuracy of intraoral complete arch scanning under different light conditions using a zirconia restoration model",
                citation: "Zhou Y, Fu L, Zhang Z, Tang X. Effect of tooth color on the accuracy of intraoral complete arch scanning under different light conditions using a zirconia restoration model. J Prosthet Dent. 2024;131(1):145.e1-145.e8.",
                summary: "**주요 발견 및 핵심 요약:** 다양한 주변 조명 조건(체어 라이트, 자연광, 무광 등)과 수복물의 색상(크로마, 명도)이 구강 스캐너의 데이터 획득 정확도에 미치는 영향을 다변량 분석했습니다. 특정 조명 환경과 치아 색상의 상호작용이 스티칭 오류를 유발할 수 있음을 입증했습니다.\n\n**이 논문이 해당 연구 주제에서 중요한 이유:** 작업자의 손기술(동선)뿐만 아니라, 체어사이드의 환경(조도)을 통제하는 것도 매우 중요한 '오퍼레이팅 스킬'임을 인지시켜 다각적인 실험 설계 능력을 배양합니다.",
                url: "https://pubmed.ncbi.nlm.nih.gov/37923645/"
            }
        ]
    },
    {
        id: 4,
        title: "Accuracy of Intraoral Scanners in Complete-Arch Impressions: Techniques and Innovations",
        papers: [
            {
                title: "Photogrammetry Versus Intraoral Scanning in Complete-Arch Digital Implant Impression: A Systematic Review and Meta-Analysis",
                citation: "Pozzi A, Arcuri L, Carosi P, Laureti A, Londono J, Wang HL. Photogrammetry Versus Intraoral Scanning in Complete-Arch Digital Implant Impression: A Systematic Review and Meta-Analysis. Clin Implant Dent Relat Res. 2025;27(3):e70059.",
                summary: "**주요 발견 및 핵심 요약:** 전악 임플란트 인상에서 기존의 구강스캐너(IOS)와 입체사진측량술(Photogrammetry, SPG) 장비의 정확도를 비교한 최신 메타 분석입니다. SPG 시스템이 다수 임플란트의 선형 및 각도 편차를 줄이는 데 구강스캐너보다 통계적으로 훨씬 우수하고 신뢰성 높은 결과를 냄을 확인했습니다.\n\n**이 논문이 해당 연구 주제에서 중요한 이유:** 전악 무치악 디지털 워크플로우의 한계를 극복하기 위해 기존 IOS 기술에서 벗어나 Photogrammetry라는 최신 혁신 장비로 연구의 초점을 확장할 수 있는 탄탄한 근거를 제공합니다.",
                url: "https://pubmed.ncbi.nlm.nih.gov/40481748/"
            },
            {
                title: "Accuracy of intraoral optical scan versus stereophotogrammetry for complete-arch digital implant impression: An in vitro study",
                citation: "Pozzi A, Agliardi E, Lio F, Nagy K, Nardi A, Arcuri L. Accuracy of intraoral optical scan versus stereophotogrammetry for complete-arch digital implant impression: An in vitro study. J Prosthodont Res. 2024;68(1):172-180.",
                summary: "**주요 발견 및 핵심 요약:** 시험관(in-vitro) 환경에서 전악 임플란트 모델을 대상으로 광학 IOS와 SPG 장비의 3차원 및 각도 편차를 측정한 결과, 광학 스캐너의 경우 극단적인 편차(수동적 적합 허용치 초과)가 빈번하게 발생하는 반면 SPG는 일관된 반복 정밀도를 보였습니다.\n\n**이 논문이 해당 연구 주제에서 중요한 이유:** 임플란트 보철물에서 가장 중요한 '수동적 적합(Passive fit)' 달성 여부를 3D 편차 값과 결합하여 설명하므로, 보철학의 고전적 가치와 디지털 기술을 융합하는 훌륭한 연구 사례입니다.",
                url: "https://pubmed.ncbi.nlm.nih.gov/37574278/"
            },
            {
                title: "Complete-arch accuracy of seven intraoral scanners measured by the virtual-fit method",
                citation: "Borbola D, Mikolicz A, Romanszky L, Sersli G, DeFee M, Renne W, Vag J. Complete-arch accuracy of seven intraoral scanners measured by the virtual-fit method. J Dent. 2024;149:105281.",
                summary: "**주요 발견 및 핵심 요약:** 7종의 상용 구강스캐너를 사용하여 획득한 전악 데이터를 'Virtual-fit' 방식으로 평가했습니다. 스티칭으로 인해 왜곡된 전악 데이터에 대해 소프트웨어 상에서 내부 시멘트 갭을 인위적으로 증가시킬 경우, 기기간의 적합도 편차를 어떻게 보상할 수 있는지 시뮬레이션했습니다.\n\n**이 논문이 해당 연구 주제에서 중요한 이유:** 하드웨어(스캐너)가 가진 물리적 오차의 한계를 소프트웨어(CAD 디자인 단계의 시멘트 갭 설정) 파라미터 조정을 통해 극복하려는 매우 혁신적인 보철학적 해결책을 제시합니다.",
                url: "https://pubmed.ncbi.nlm.nih.gov/39094976/"
            },
            {
                title: "Improving the accuracy of complete arch implant intraoral digital scans by using horizontal scan bodies with occlusal geometry",
                citation: "Etxaniz O, Amezua X, Jauregi M, Solaberrieta E. Improving the accuracy of complete arch implant intraoral digital scans by using horizontal scan bodies with occlusal geometry: A dental technique. J Prosthet Dent. 2025;133(1):57-61.",
                summary: "**주요 발견 및 핵심 요약:** 전악 임플란트 스캔의 정확도를 높이기 위해, 기존의 수직형 스캔 바디 대신 교합면 형태가 부여된 수평형 확장 스캔 바디(horizontal scan bodies)를 사용하는 새로운 치과적 기법을 제안했습니다. 이를 통해 스캐너가 형태학적 데이터를 더 쉽게 인식하고 병합(stitching)할 수 있게 됩니다.\n\n**이 논문이 해당 연구 주제에서 중요한 이유:** 제조사가 제공하는 획일화된 스캔 바디의 디자인을 직접 개량하여 구조적 혁신을 이뤄낸 실증 연구로, 치과 재료 및 기구의 디자인적 변형을 주제로 한 논문 작성에 큰 인사이트를 줍니다.",
                url: "https://pubmed.ncbi.nlm.nih.gov/38395642/"
            }
        ]
    },
    {
        id: 5,
        title: "Mechanical Properties and Clinical Performance of 3D-Printed Zirconia Restorations",
        papers: [
            {
                title: "Comparative analysis of flexural strength of 3D printed and milled 4Y-TZP and 3Y-TZP zirconia",
                citation: "Kyung KY, Park JM, Heo SJ, Koak JY, Kim SK, Ahn JS, Yi Y. Comparative analysis of flexural strength of 3D printed and milled 4Y-TZP and 3Y-TZP zirconia. J Prosthet Dent. 2024;131(3):529.e1-529.e9.",
                summary: "**주요 발견 및 핵심 요약:** 절삭 가공(밀링) 및 3D 프린팅으로 제작된 3Y-TZP와 4Y-TZP 지르코니아의 이축 굴곡 강도를 비교 분석했습니다. 3D 프린팅 4Y-TZP가 밀링 4Y-TZP보다 유의미하게 높은 굴곡 강도(800 MPa 초과)를 보여 임상적으로 훌륭한 대안이 될 수 있음을 구조적으로 증명했습니다.\n\n**이 논문이 해당 연구 주제에서 중요한 이유:** 이트리아(Yttria) 함량비에 따른 세라믹 소재의 역학적 특성 변화를 3D 프린팅 제조 공법과 연결 지은 뛰어난 재료공학적 논문으로, 세라믹 프린팅 파라미터 연구의 이정표 역할을 합니다.",
                url: "https://pubmed.ncbi.nlm.nih.gov/38212154/"
            },
            {
                title: "Trueness and precision of digital light processing fabricated 3D printed monolithic zirconia crowns",
                citation: "Refaie A, Bourauel C, Elshazly T, Evers-Dietze B, Alhotan A, Aldesoki M. Trueness and precision of digital light processing fabricated 3D printed monolithic zirconia crowns. J Dent. 2024;148:105151.",
                summary: "**주요 발견 및 핵심 요약:** DLP(Digital Light Processing) 방식의 3D 프린터로 제작한 단일 구조 지르코니아 크라운의 진실성과 정밀도를 밀링 방식과 비교했습니다. 밀링 방식이 진실성(형태 재현력)은 높았으나, 3D 프린팅 방식이 더 뛰어난 반복 정밀도(일관성)를 보여 임상적 수용성에 문제가 없음을 확인했습니다.\n\n**이 논문이 해당 연구 주제에서 중요한 이유:** '진실성'과 '정밀성'의 상충 관계(Trade-off)를 3D 프린팅 세라믹 수복물 관점에서 분석하여, 제조 기법 간의 임상적 득실을 객관적으로 평가하는 기준을 제시합니다.",
                url: "https://pubmed.ncbi.nlm.nih.gov/38909644/"
            },
            {
                title: "Optimized 3D printed zirconia-reinforced leucite with antibacterial coating for dental applications",
                citation: "Branco AC, Santos T, Bessa LJ, Barahona I, Polido M, Colaço R, Serro AP, Figueiredo-Pina CG. Optimized 3D printed zirconia-reinforced leucite with antibacterial coating for dental applications. Dent Mater. 2024;40(4):629-642.",
                summary: "**주요 발견 및 핵심 요약:** 지르코니아로 강화된 류사이트(leucite) 복합 소재를 3D 프린팅(Robocasting)으로 출력하고, 항균 코팅(SDF+KI)을 적용하여 밀도, 다공성, 파절 인성 등을 평가했습니다. 지르코니아 나노입자를 통해 강도를 보강하면서 동시에 수복물 주변의 박테리아 감염 위험을 억제하는 우수한 임상적 특성을 도출했습니다.\n\n**이 논문이 해당 연구 주제에서 중요한 이유:** 단순한 기계적 특성을 넘어서 구강 내 미생물학적 환경(항균)까지 고려한 다기능성(Multi-functional) 3D 프린팅 신소재 연구의 훌륭한 본보기가 됩니다.",
                url: "https://pubmed.ncbi.nlm.nih.gov/38369404/"
            },
            {
                title: "Influence of 3D printed surface micro-structures on molding performance and dental bonding properties of zirconia",
                citation: "Zhang C, Meng J, Zhang L, Fan S, Yi Y, Zhang J, Wu G. Influence of 3D printed surface micro-structures on molding performance and dental bonding properties of zirconia. J Dent. 2024;144:104937.",
                summary: "**주요 발견 및 핵심 요약:** 3D 프린팅 지르코니아 표면에 정밀한 마이크로 구조를 출력 시부터 부여하여 레진 시멘트와의 전단 결합 강도(SBS)를 높이는 실험을 진행했습니다. 기존 샌드블라스팅 처리보다 3D 프린팅으로 미세 구조를 형성했을 때 결합 강도가 약 56% 향상됨을 확인했습니다.\n\n**이 논문이 해당 연구 주제에서 중요한 이유:** 화학적 전처리 방식에 의존하던 지르코니아의 결합력 한계를 3D 프린터 특유의 미세 위상 제어 능력을 이용해 물리적으로 해결하는 획기적이고 실용적인 연구 아이디어를 던져줍니다.",
                url: "https://pubmed.ncbi.nlm.nih.gov/38479706/"
            }
        ]
    },
    {
        id: 6,
        title: "Evaluation of Metal and Polymer 3D Printing in Prosthodontics",
        papers: [
            {
                title: "Clinical performance, accuracy, and physical-mechanical properties of 3D-printed removable partial denture metal frameworks compared with conventionally and partially digitally produced frameworks: A systematic review",
                citation: "Alqutaibi AY, Al-Gabri RS, Al-Zaghruri AS, Farghal AE, Alnazzawi AA, Alghauli MA. Clinical performance, accuracy, and physical-mechanical properties of 3D-printed removable partial denture metal frameworks compared with conventionally and partially digitally produced frameworks: A systematic review. J Prosthodont Res. 2025;:10.2186/jpr.JPR_D_25_00028.",
                summary: "**주요 발견 및 핵심 요약:** 3D 프린팅 기술로 제작된 국소의치 금속 구조물의 적합도, 물리·기계적 특성 및 임상적 결과를 기존 주조 방식과 비교한 체계적 문헌 고찰입니다. SLM(선택적 레이저 용융) 방식 등이 기존 주조법보다 항복 강도, 표면 거칠기, 미세경도 등에서 우수하거나 대등한 기계적 성능을 발휘함을 입증했습니다.\n\n**이 논문이 해당 연구 주제에서 중요한 이유:** 국소의치 금속 구조물이라는 복잡한 형태를 3D 프린팅으로 구현할 때의 임상적 신뢰성을 종합적으로 보여주어, 학생들의 금속 적층 제조 공법 관련 연구 제안에 탄탄한 이론적 근거를 제공합니다.",
                url: "https://pubmed.ncbi.nlm.nih.gov/40903281/"
            },
            {
                title: "Retention of 3D-printed versus conventional metal-reinforced acrylic mandibular denture bases: a comparative study",
                citation: "El-Din ME, Elawady AF, Elsadany HF. Retention of 3D-printed versus conventional metal-reinforced acrylic mandibular denture bases: a comparative study. BMC Oral Health. 2025;25(1):1873.",
                summary: "**주요 발견 및 핵심 요약:** 완전 무치악 환자를 대상으로 3D 프린팅 하악 총의치와 전통적인 금속 보강 아크릴 레진 의치의 유지력을 생체 내(in vivo)에서 비교 평가했습니다. 3D 프린팅 의치가 기존 방식보다 유의미하게 향상된 유지력과 우수한 적합성을 보임을 확인했습니다.\n\n**이 논문이 해당 연구 주제에서 중요한 이유:** 프린팅 레진의 기계적 한계를 극복하기 위해 기존에 사용되던 금속 메쉬 보강법과 순수 3D 프린팅 의치를 직접 비교함으로써, 새로운 프린팅 소재의 단독 임상 적용 가능성을 탐구하게 합니다.",
                url: "https://pubmed.ncbi.nlm.nih.gov/41316168/"
            },
            {
                title: "Effect of post-curing conditions on surface characteristics, physico-mechanical properties, and cytotoxicity of a 3D-printed denture base polymer",
                citation: "Luo K, Liu Q, Alhotan A, Dai J, Li A, Xu S, Li P. Effect of post-curing conditions on surface characteristics, physico-mechanical properties, and cytotoxicity of a 3D-printed denture base polymer. Dent Mater. 2024;40(3):500-507.",
                summary: "**주요 발견 및 핵심 요약:** 3D 프린팅 의치상 폴리머의 굽힘 강도, 수분 흡수도 및 세포독성에 후경화(post-curing) 조건이 미치는 영향을 분석했습니다. 특히 수중(water-submerged) 환경에서의 후경화가 굴곡 탄성률을 극대화하고 생체 적합성을 안정화하는 데 효과적임을 밝혔습니다.\n\n**이 논문이 해당 연구 주제에서 중요한 이유:** 단순히 3D 프린터의 출력 방식을 넘어 '후처리(Post-processing) 공정'이 보철물의 최종 물리적/생물학적 물성에 직결된다는 점을 시사하여, 제조 변수 제어 연구로 시야를 넓혀줍니다.",
                url: "https://pubmed.ncbi.nlm.nih.gov/38184445/"
            },
            {
                title: "Development of 3-dimensionally printed denture base material utilizing hybrid polymer: A preliminary investigation",
                citation: "Zahari NAH, Farid DAM, Alauddin MS, Said Z, Ghazali MIM, Lee HE, Zol SM. Development of 3-dimensionally printed denture base material utilizing hybrid polymer: A preliminary investigation. J Prosthet Dent. 2024;132(6):1329.e1-1329.e6.",
                summary: "**주요 발견 및 핵심 요약:** 기존 3D 프린팅 의치상 수지의 부족한 강도와 내구성을 개선하기 위해 마이크로 입자를 혼합한 하이브리드 폴리머 소재를 개발하고 평가했습니다. 변형된 3D 프린팅 레진이 기존 열중합 레진보다 높은 굴곡 강도를 보였으며 항균 활성도 크게 향상됨을 확인했습니다.\n\n**이 논문이 해당 연구 주제에서 중요한 이유:** 치과용 3D 프린팅 소재 개발이라는 재료공학적 측면에 접근하는 연구로, 대학원생들이 기존 상용 소재의 한계를 지적하고 새로운 복합 물질을 제안하는 융합 연구를 기획하는 데 유용합니다.",
                url: "https://pubmed.ncbi.nlm.nih.gov/39147631/"
            }
        ]
    },
    {
        id: 7,
        title: "Advances in Robotic-Assisted Implant Surgery: Precision and Clinical Outcomes",
        papers: [
            {
                title: "Accuracy analysis of robotic-assisted immediate implant placement: A retrospective case series",
                citation: "Zhao N, Du L, Lv C, Liang J, He L, Zhou Q. Accuracy analysis of robotic-assisted immediate implant placement: A retrospective case series. J Dent. 2024;146:105035.",
                summary: "**주요 발견 및 핵심 요약:** 로봇 보조 시스템을 활용한 즉시 임플란트 식립의 정확도를 후향적으로 평가했습니다. 플랫폼 및 발치창 하방(apex)의 위치 편차가 평균 1mm 이내, 각도 편차가 평균 1.17° 수준으로 나타나 까다로운 수술 환경에서도 매우 높은 정확도를 달성함을 입증했습니다.\n\n**이 논문이 해당 연구 주제에서 중요한 이유:** 치조골 흡수나 불규칙한 발치창 구조 때문에 드릴링 오차가 발생하기 쉬운 '즉시 식립' 시나리오에서 로봇의 기계적 통제력이 어떻게 작용하는지를 명확히 보여줍니다.",
                url: "https://pubmed.ncbi.nlm.nih.gov/38734299/"
            },
            {
                title: "Trueness and precision of immediate implant placement using dynamic and robotic computer-assisted techniques at the mandibular molar site: An in vitro study",
                citation: "Wang W, Tao B, Wang F, Wu Y. Trueness and precision of immediate implant placement using dynamic and robotic computer-assisted techniques at the mandibular molar site: An in vitro study. J Dent. 2025;163:106190.",
                summary: "**주요 발견 및 핵심 요약:** 하악 대구치 부위 즉시 식립 시 동적 네비게이션과 로봇 보조 수술의 진실성 및 정밀도를 시험관 모델로 비교했습니다. 두 시스템 모두 높은 정확도를 보였으나, 단일 치근 발치창과 같은 특정 조건에서 로봇 보조 시스템이 협설 측 진실성 제어에 더 유리함을 확인했습니다.\n\n**이 논문이 해당 연구 주제에서 중요한 이유:** 기존의 동적 가이드 시스템과 최신 로봇 시스템의 성능을 해부학적 형태에 따라 직접 대조함으로써, 새로운 수술 시스템의 적응증을 세밀하게 구별하는 연구 설계 방식을 학습할 수 있습니다.",
                url: "https://pubmed.ncbi.nlm.nih.gov/41135654/"
            },
            {
                title: "Accuracy, Safety, and Efficiency in Robotic-Assisted vs. Freehand Dental Implant Surgery: A 6-Month Follow-Up Randomized Controlled Trial",
                citation: "Chen J, Wang Y, Bai Y, Chen Y, Chen Z, Yan Q, Zhang Y. Accuracy, Safety, and Efficiency in Robotic-Assisted vs. Freehand Dental Implant Surgery: A 6-Month Follow-Up Randomized Controlled Trial. Clin Oral Implants Res. 2025;36(5):662-670.",
                summary: "**주요 발견 및 핵심 요약:** 로봇 보조 수술과 프리핸드 수술의 임플란트 식립 정확도, 안전성, 효율성을 6개월간 추적 관찰한 무작위 대조 임상시험(RCT)입니다. 로봇 수술이 식립 오차를 통계적으로 유의미하게 감소시켰으나, 장비 세팅 및 정합 과정으로 인해 수술 시간은 다소 길어짐을 보고했습니다.\n\n**이 논문이 해당 연구 주제에서 중요한 이유:** 수치적인 정밀도뿐만 아니라 '수술 시간'과 '체어사이드 효율성'이라는 실제 임상적 한계를 동시에 지적하고 있어, 로봇 시스템의 워크플로우 간소화를 주제로 하는 실용적인 후속 연구를 촉발합니다.",
                url: "https://pubmed.ncbi.nlm.nih.gov/39899324/"
            },
            {
                title: "Comparison of implant placement deviation between dynamic- and robotic-assisted implant surgery for complete arch implant-supported prostheses: An in vitro study",
                citation: "Su G, Tao B, Zhuang M, Wang F, Wu PY. Comparison of implant placement deviation between dynamic- and robotic-assisted implant surgery for complete arch implant-supported prostheses: An in vitro study. J Prosthet Dent. 2026;135(2):374.e1-374.e10.",
                summary: "**주요 발견 및 핵심 요약:** 전악 임플란트 지지형 보철물을 위한 다수 임플란트 식립 시 동적 네비게이션과 로봇 보조 수술의 편차를 비교했습니다. 로봇 보조 수술이 기울어진(tilted) 임플란트를 식립할 때 각도 및 위치 편차를 통제하는 데 탁월한 성능을 보였습니다.\n\n**이 논문이 해당 연구 주제에서 중요한 이유:** 전악 무치악 재건과 같은 고난도 보철 설계와 로봇 수술의 융합을 다루고 있어, 단순 식립을 넘어 '보철 주도형(Prosthetically driven)' 치료 계획의 완벽한 이행을 연구하는 데 핵심 자료가 됩니다.",
                url: "https://pubmed.ncbi.nlm.nih.gov/40940264/"
            }
        ]
    },
    {
        id: 8,
        title: "AI in Automated Detection of Dental Crown Margins",
        papers: [
            {
                title: "Automatic margin line extraction using 3D deep learning on digital surface models of prepared teeth for crown generation",
                citation: "Alsheghri A, Zhang Y, Keren J, Cheriet F, Guibault F. Automatic margin line extraction using 3D deep learning on digital surface models of prepared teeth for crown generation. Comput Biol Med. 2025;196(Pt C):110960.",
                summary: "**주요 발견 및 핵심 요약:** 지대치로 형성된 3D 디지털 스캔 표면 모델에서 딥러닝을 사용하여 마진(변연) 라인을 자동으로 추출하는 알고리즘을 개발했습니다. 치과 기공사의 수동 작업과 비교하여 100~200µm 이내의 매우 정밀한 오차 범위 내에서 성공적인 3D 메쉬 분할 및 마진 인식을 달성했습니다.\n\n**이 논문이 해당 연구 주제에서 중요한 이유:** AI를 활용한 CAD 설계의 가장 어려운 단계인 마진 추출 과정을 3D 딥러닝 아키텍처로 어떻게 풀어냈는지 상세히 다루어, 치의학과 컴퓨터 공학을 연결하는 연구 제안서에 적합합니다.",
                url: "https://pubmed.ncbi.nlm.nih.gov/40839933/"
            },
            {
                title: "A comparison between commercially available artificial intelligence-based and conventional human expert-based digital workflows for designing anterior crowns",
                citation: "Cho JH, Çakmak G, Jee EB, Yoon HI, Yilmaz B, Schimmel M. A comparison between commercially available artificial intelligence-based and conventional human expert-based digital workflows for designing anterior crowns. J Prosthet Dent. 2025;:S0022-3913(25)00520-7.",
                summary: "**주요 발견 및 핵심 요약:** 상용화된 두 가지 AI 기반 보철 디자인 소프트웨어와 인간 전문가가 설계한 전치부 크라운의 기능적, 심미적 결과를 비교했습니다. AI가 설계한 수복물이 치아 축 각도, 인접면 접촉, 절단로 등의 항목에서 전문가 설계와 통계적으로 비열등성(noninferiority)을 나타냈습니다.\n\n**이 논문이 해당 연구 주제에서 중요한 이유:** 연구실 수준의 알고리즘을 넘어 실제 상용화된 AI CAD 소프트웨어의 임상적 타당성을 직접 검증하는 연구 방법을 제시하여, 실무 중심의 평가 연구를 기획하게 합니다.",
                url: "https://pubmed.ncbi.nlm.nih.gov/40628576/"
            },
            {
                title: "Preclinical Investigation of Artificial Intelligence-Assisted Implant Surgery Planning for Single Tooth Defects: A Case Series Study",
                citation: "Ma H, Wu Y, Bai H, Xu Z, Ding P, Deng X, Tang Z. Preclinical Investigation of Artificial Intelligence-Assisted Implant Surgery Planning for Single Tooth Defects: A Case Series Study. J Oral Rehabil. 2025;52(8):1220-1227.",
                summary: "**주요 발견 및 핵심 요약:** 단일치 결손 환자를 대상으로 인공지능을 활용하여 임플란트 식립 위치 선정부터 상부 크라운 설계까지의 과정을 보조한 전임상 결과를 평가했습니다. AI 시스템이 3D 재구성 데이터를 병합하여 크라운 마진 및 보철 설계를 빠르고 정확하게 수행하여 전체 계획 시간을 유의미하게 단축했습니다.\n\n**이 논문이 해당 연구 주제에서 중요한 이유:** 크라운 마진 감지 기술이 단순히 보철물 제작에 그치지 않고, 임플란트 외과적 수술 계획과 융합되는 'Top-down' 디지털 워크플로우를 실증적으로 보여줍니다.",
                url: "https://pubmed.ncbi.nlm.nih.gov/40506671/"
            },
            {
                title: "Assessment of the Diagnostic Accuracy of Artificial Intelligence Software in Identifying Common Periodontal and Restorative Dental Conditions in Intraoral Periapical Radiographs",
                citation: "Ibraheem WI, Jain S, Ayoub MN, Namazi MA, Alfaqih AI, Aggarwal A, Meshni AA, Almarghlani A, Alhumaidan AA. Assessment of the Diagnostic Accuracy of Artificial Intelligence Software in Identifying Common Periodontal and Restorative Dental Conditions (Marginal Bone Loss, Periapical Lesion, Crown, Restoration, Dental Caries) in Intraoral Periapical Radiographs. Diagnostics (Basel). 2025;15(11):1432.",
                summary: "**주요 발견 및 핵심 요약:** 구내 방사선 사진에서 AI 소프트웨어가 크라운의 변연 적합도, 충치, 치조골 흡수 등을 얼마나 정확하게 판별하는지 평가했습니다. AI를 활용했을 때 전공의 및 전문의의 열린 변연(open margin) 및 수복물 결함 진단 민감도와 특이도가 눈에 띄게 향상되었습니다.\n\n**이 논문이 해당 연구 주제에서 중요한 이유:** 제작 과정의 마진 '설계'를 넘어, 장착된 보철물의 마진 '결함'을 방사선학적으로 판독하는 영상 의학적 AI 적용 사례를 통해 새로운 진단 보조 시스템 연구 아이디어를 제공합니다.",
                url: "https://pubmed.ncbi.nlm.nih.gov/40507004/"
            }
        ]
    },
    {
        id: 9,
        title: "Machine Learning Applications in Predicting Prosthodontic Treatment Outcomes",
        papers: [
            {
                title: "Multicentre validation and clinical interpretation of an explainable gradient-boosting model for dental-implant survival/failure prediction",
                citation: "Kheder W, Leblouba M, Rego R, Hamdoon Z. Multicentre validation and clinical interpretation of an explainable gradient-boosting model for dental-implant survival/failure prediction. J Dent. 2025;163:106166.",
                summary: "**주요 발견 및 핵심 요약:** 다기관 환자 데이터를 활용하여 치과 임플란트의 생존 및 실패를 예측하는 설명 가능한 그래디언트 부스팅(gradient-boosting) 모델을 검증했습니다. 당뇨병, 골밀도, 흡연 등의 변수가 실패에 미치는 영향을 정량화했으며, 의료진이 결과를 쉽게 해석할 수 있도록 구현했습니다.\n\n**이 논문이 해당 연구 주제에서 중요한 이유:** AI의 예측 결과를 임상가가 신뢰할 수 있도록 인과 관계를 설명하는 '설명 가능한 인공지능(XAI)' 기법을 보철 및 임플란트학에 도입한 혁신적인 선행 연구입니다.",
                url: "https://pubmed.ncbi.nlm.nih.gov/41072899/"
            },
            {
                title: "Prediction and risk factor analysis of dental implant failure using Cox regression and machine learning",
                citation: "Hwang IK, Ahn SH, Kim SK, Kim TI. Prediction and risk factor analysis of dental implant failure using Cox regression and machine learning. J Periodontol. 2026;:10.1002/jper.70112.",
                summary: "**주요 발견 및 핵심 요약:** 임플란트 실패의 위험 요인을 분석하기 위해 통계 방식인 Cox 회귀 분석과 다양한 머신러닝 기법의 예측 성능을 비교했습니다. 머신러닝 방식이 우수한 예측 정확도를 보였으며 전치부 식립과 치주염 병력을 주요 실패 위험 요인으로 식별했습니다.\n\n**이 논문이 해당 연구 주제에서 중요한 이유:** 기존 치의학계에서 익숙한 고전적 생존 통계 기법과 현대적인 머신러닝 알고리즘을 나란히 대조하여 장단점을 명확히 보여주는 훌륭한 방법론적 가이드입니다.",
                url: "https://pubmed.ncbi.nlm.nih.gov/41761925/"
            },
            {
                title: "Clinical Evaluation and Bone Loss Prediction of Titanium-Zirconium Implants: A Retrospective Study of 1-5-Year Follow-Up",
                citation: "Ling Z, Chen C, Wang S, Zhu Y, Shen X, Sun K, Lu H, He F. Clinical evaluation and bone loss prediction of titanium-zirconium implants: A retrospective study of 1-5-year follow-up. J Dent. 2026;166:106516.",
                summary: "**주요 발견 및 핵심 요약:** 티타늄-지르코늄 임플란트 보철물의 장기 임상 결과를 후향적으로 평가하고, 인공신경망(ANN) 및 서포트 벡터 머신(SVM)을 활용해 변연골 소실을 예측하는 모델을 구축했습니다. 예측 모델이 93.5%의 높은 정확도를 기록하며 보철물의 예후를 성공적으로 추정했습니다.\n\n**이 논문이 해당 연구 주제에서 중요한 이유:** 단순한 임플란트의 생존 여부를 넘어, '변연골 흡수량'이라는 보철학적으로 더욱 세밀하고 연속적인 지표를 머신러닝의 타겟 변수로 삼는 연구 방향을 제시합니다.",
                url: "https://pubmed.ncbi.nlm.nih.gov/41577164/"
            },
            {
                title: "A hybrid unsupervised clustering method for predicting the risk of dental implant loss",
                citation: "Xie C, Li Y, Liu K, Liu J, Zeng J, Huang N, Yang S. A hybrid unsupervised clustering method for predicting the risk of dental implant loss. J Dent. 2024;149:105260.",
                summary: "**주요 발견 및 핵심 요약:** 임플란트 상실 위험을 예측하기 위해 비지도 학습 알고리즘(unsupervised clustering)과 생존 분석을 통합한 하이브리드 모델을 적용했습니다. 사전 레이블 없이 환자의 임상 데이터를 6개의 군집으로 자동 분류하여 고위험군 특성을 시각적인 노모그램으로 구현해 냈습니다.\n\n**이 논문이 해당 연구 주제에서 중요한 이유:** 데이터의 정답이 주어지지 않은 비지도 학습 상태에서도 임상 데이터 속에 숨겨진 실패 패턴을 기계가 스스로 찾아내게 하는 최신 데이터 마이닝 기법을 배울 수 있습니다.",
                url: "https://pubmed.ncbi.nlm.nih.gov/39096996/"
            }
        ]
    },
    {
        id: 10,
        title: "Integration of Digital Workflows in the Fabrication of Complete Digital Dentures",
        papers: [
            {
                title: "Patient Satisfaction and Perception with Digital Complete Dentures Compared to Conventional Complete Dentures-A Pilot Study",
                citation: "Bors A, Szekely M, Beresescu L, Maier A, Beresescu F. Patient Satisfaction and Perception with Digital Complete Dentures Compared to Conventional Complete Dentures-A Pilot Study. Dent J (Basel). 2025;13(7):291.",
                summary: "**주요 발견 및 핵심 요약:** 완전 무치악 환자들을 대상으로 디지털 방식으로 제작된 총의치와 전통적인 아날로그 총의치 간의 만족도를 교차(crossover) 실험으로 비교했습니다. 디지털 총의치가 장착 후 조정 횟수가 확연히 적었고 유지력과 편안함 측면에서 통계적으로 유의미하게 더 높은 환자 만족도를 이끌어냈습니다.\n\n**이 논문이 해당 연구 주제에서 중요한 이유:** 치의학적 파라미터뿐 아니라 '환자 주관적 만족도(PROMs)'라는 임상 결과를 디지털 워크플로우 평가의 핵심 지표로 활용하는 연구 설계를 명확히 보여줍니다.",
                url: "https://pubmed.ncbi.nlm.nih.gov/40710136/"
            },
            {
                title: "Digital Removable Denture Workflows in Dental Education: A Systematic Review and Curriculum Development Exploration",
                citation: "Veerasamy A, Ghuloum F, Lo Y, van Vuuren WJ. Digital Removable Denture Workflows in Dental Education: A Systematic Review and Curriculum Development Exploration. Eur J Dent Educ. 2025;:10.1111/eje.70001.",
                summary: "**주요 발견 및 핵심 요약:** 전 세계 치과 교육 기관에서 가철성 디지털 의치 워크플로우가 어떻게 교육 과정에 통합되고 있는지 조사한 체계적 문헌 고찰입니다. 디지털 시뮬레이션 및 임상 교육의 도입이 학생들의 학습 효율성과 동기 부여를 높이는 데 긍정적인 영향을 미치고 있음을 입증했습니다.\n\n**이 논문이 해당 연구 주제에서 중요한 이유:** 최신 디지털 워크플로우를 실제 임상 술기에 머물게 하지 않고, 학내 치과 교육 과정에 어떻게 효과적으로 편입시킬 것인가를 다루는 치의학 교육(Education) 연구로 주제를 확장할 수 있습니다.",
                url: "https://pubmed.ncbi.nlm.nih.gov/40524603/"
            },
            {
                title: "Complete Dentures Manufactured Using CAD/CAM Technology and a Modified Individual Tray Recording Method",
                citation: "Kongkon P, Katheng A, Saiprasert P, Amornvit P. Complete Dentures Manufactured Using CAD/CAM Technology and a Modified Individual Tray Recording Method. Case Rep Dent. 2025;2025:6224091.",
                summary: "**주요 발견 및 핵심 요약:** 변형된 개인 트레이(폐구 인상 채득법)와 CAD/CAM 밀링 기술을 결합하여 환자의 내원 횟수를 대폭 줄이는 혁신적인 워크플로우를 임상 케이스로 증명했습니다. 전통적 인상법의 장점과 디지털 제작 공정의 효율성을 결합하여 완벽한 교합 기록과 기능성을 확보했습니다.\n\n**이 논문이 해당 연구 주제에서 중요한 이유:** 100% 순수 디지털 방식에 얽매이지 않고 임상 현장의 효율성을 극대화하기 위한 '아날로그-디지털 하이브리드 워크플로우'의 성공적인 프로토콜을 연구하고 제안하는 좋은 예시입니다.",
                url: "https://pubmed.ncbi.nlm.nih.gov/40822911/"
            },
            {
                title: "A combined 3D printed metal and resin digital denture: 5-year follow-up data and a creative design concept",
                citation: "Park S, Park C. A combined 3D printed metal and resin digital denture: 5-year follow-up data and a creative design concept. J Prosthet Dent. 2025;134(4):967-970.",
                summary: "**주요 발견 및 핵심 요약:** 3D 프린팅 금속 구조물과 레진을 창의적으로 결합한 하이브리드 디지털 의치의 새로운 디자인 콘셉트를 소개하고 5년간의 추적 관찰 데이터를 제시했습니다. 마모되지 않는 교합면과 파절 저항성을 갖춘 의치상 설계가 장기적인 임상적 안정성을 유지함을 확인했습니다.\n\n**이 논문이 해당 연구 주제에서 중요한 이유:** 기존에 없던 독창적인 의치 디자인(금속-레진 결합구조)을 제안하고 그 장기 예후를 평가한 실증 자료로서, 기존 워크플로우의 한계를 극복하는 혁신적 설계 아이디어를 도출하게 합니다.",
                url: "https://pubmed.ncbi.nlm.nih.gov/38272761/"
            }
        ]
    }
];

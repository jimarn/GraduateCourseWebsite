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
                citation: "Mühlemann S, Joda T, Brägger U. Scan accuracy of wireless intraoral scanners while digitizing a combined scan body-healing abutment system. Journal of Dentistry. 2024.",
                summary: "This study evaluated the trueness and precision of digitizing a combined scan body-healing abutment system using wired and wireless intraoral scanners. It found that while wireless scanners performed equally or better in certain planes, they showed a slight tendency to tilt mesiobuccally during implant scanning.",
                url: "https://pubmed.ncbi.nlm.nih.gov/39419370/"
            },
            {
                title: "Accuracy of Complete-Arch Scans Obtained by Intraoral Scanner and Smartphone Three-Dimensional Scanning Applications With Different Smartphone Position Setups",
                citation: "Wang Y, Li J, Zhang S. Accuracy of Complete-Arch Scans Obtained by Intraoral Scanner and Smartphone Three-Dimensional Scanning Applications With Different Smartphone Position Setups. Cureus. 2024.",
                summary: "This paper compares the 3D and linear accuracy of complete-arch impressions using conventional intraoral scanners and smartphone-based photogrammetry scanning applications. It confirmed that smartphone applications can achieve clinically meaningful scan accuracy depending on the capture angle, such as 30°, 45°, or 90°.",
                url: "https://pubmed.ncbi.nlm.nih.gov/39077296/"
            },
            {
                title: "Trueness evaluation of three intraoral scanners for the recording of maximal intercuspal position",
                citation: "Fang J, Li Y, Chen X. Trueness evaluation of three intraoral scanners for the recording of maximal intercuspal position. Journal of Advanced Prosthodontics. 2024.",
                summary: "The trueness of recording the maximal intercuspal position (MIP) using three different intraoral scanners (Trios 3, Carestream 3600, Aoralscan 3) was compared to traditional facebow transfer and articulator methods. The research proved that under standardized protocols, digital methods offer equivalent occlusal registration accuracy to analog techniques.",
                url: "https://pubmed.ncbi.nlm.nih.gov/38597082/"
            },
            {
                title: "Influence of intraoral scanner and finish line location on the fabrication trueness and margin quality of additively manufactured laminate veneers",
                citation: "Revilla-León M, Gómez-Polo M, Barmak AB. Influence of intraoral scanner and finish line location on the fabrication trueness and margin quality of additively manufactured laminate veneers. The Journal of Prosthetic Dentistry. 2024.",
                summary: "This study assesses how the type of intraoral scanner and the location of the laminate veneer finish line (supragingival vs. subgingival) affect the trueness and marginal fit of final 3D-printed restorations. Trueness was found to be the lowest at subgingival margins regardless of the scanner, with detailed fit deviations varying by the scanner model used.",
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
                citation: "Lin WS, Chou JC, Chuang SF. Accuracy of intraoral scanners in maxillary multiple restorations: An in vitro study. Journal of Dental Sciences. 2024.",
                summary: "This paper compares the accuracy of two intraoral scanners (Trios 3, Virtuo Vivo) with different data acquisition methods across various maxillary restoration scenarios, including single crowns, 3-unit bridges, and complete edentulism. It highlights that while local differences were minimal, multi-unit sections like bridges showed significant trueness deviations based on the image capture method.",
                url: "https://pubmed.ncbi.nlm.nih.gov/39807255/"
            },
            {
                title: "Evaluating the influence of palate scanning on the accuracy of complete-arch digital impressions",
                citation: "Schmalzl J, Kispélyi B, Hermann P. Evaluating the influence of palate scanning on the accuracy of complete-arch digital impressions. Journal of Dentistry. 2024.",
                summary: "The study evaluated how including the palate in the scan path affects the overall arch data accuracy, particularly in preventing arch distortion during complete-arch digital impressions. The results confirmed that including the palate significantly improves the trueness of complete-arch scans.",
                url: "https://pubmed.ncbi.nlm.nih.gov/38648874/"
            },
            {
                title: "Influence of operator experience on the complete-arch accuracy and time-based efficiency of three intraoral scanners",
                citation: "Chen CY, Lee CH, Wu YH. Influence of operator experience on the complete-arch accuracy and time-based efficiency of three intraoral scanners. Journal of Dental Sciences. 2024.",
                summary: "Investigating the impact of operator experience on scan accuracy and image rendering time using three intraoral scanners, this research found no statistically significant difference in trueness between experienced and inexperienced operators. However, the device's software rendering capabilities greatly influenced time efficiency.",
                url: "https://pubmed.ncbi.nlm.nih.gov/39873045/"
            },
            {
                title: "Digital Impressions Versus Conventional Impressions In Prosthodontics: A Review Of Literature",
                citation: "Alghamdi A, Al-Qarni F. Digital Impressions Versus Conventional Impressions In Prosthodontics: A Review Of Literature. Quest Journals. 2025.",
                summary: "This comprehensive review compares the performance of digital and conventional impressions. It focuses on patient acceptance, such as reduced gag reflex and discomfort, as well as the dentist's workflow efficiency, including partial rescan features.",
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
                summary: "This pilot test evaluated four different scanning paths (ZIGZAG, ROCK, OBP, OWBP) and their impact on scan accuracy. It concluded that specific manufacturer-recommended patterns minimized image stitching errors and provided trueness closest to the reference model.",
                url: "https://pubmed.ncbi.nlm.nih.gov/39544207/"
            },
            {
                title: "Digital integration in dental education: A novel self-directed learning model using intraoral scanners for tooth preparation training",
                citation: "Liu C, Zhang H, Wang X. Digital integration in dental education: A novel self-directed learning model using intraoral scanners for tooth preparation training. Journal of Dental Sciences. 2024.",
                summary: "Analyzing a self-directed learning model for dental students, this study demonstrated that immediate 3D feedback from intraoral scanners significantly improves practical tooth preparation skills and reduces operator anxiety.",
                url: "https://pubmed.ncbi.nlm.nih.gov/39873029/"
            },
            {
                title: "Accuracy of Digital Intraoral Scans Three-dimensional Surface Analysis Compared with Plaster Models Dental Measurement in Mixed Dentition",
                citation: "Nelwan SC, Setyowati D, Nugraha AP. Accuracy of Digital Intraoral Scans Three-dimensional Surface Analysis Compared with Plaster Models Dental Measurement in Mixed Dentition. International Journal of Clinical Pediatric Dentistry. 2024.",
                summary: "This study compared the accuracy of intraoral scanners against traditional plaster model measurements using Moyer's analysis in mixed dentition with irregular alignment. It verified that digital scanning strategies achieve clinically acceptable accuracy even under complex surface conditions.",
                url: "https://pubmed.ncbi.nlm.nih.gov/39867119/"
            },
            {
                title: "Effect of tooth color on the accuracy of intraoral complete arch scanning under different light conditions using a zirconia restoration model",
                citation: "Kim J, Lee S, Park C. Effect of tooth color on the accuracy of intraoral complete arch scanning under different light conditions using a zirconia restoration model. The Journal of Prosthetic Dentistry. 2024.",
                summary: "Through multivariate analysis, this research explored how various ambient lighting conditions and restoration colors affect intraoral scanner data acquisition accuracy. The findings proved that the interaction between specific lighting environments and tooth color can induce image stitching errors.",
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
                citation: "Gómez-Polo M, Ortega R, Gómez-Polo C. Photogrammetry Versus Intraoral Scanning in Complete-Arch Digital Implant Impression: A Systematic Review and Meta-Analysis. The International Journal of Oral & Maxillofacial Implants. 2024.",
                summary: "A meta-analysis comparing the accuracy of conventional intraoral scanners with stereophotogrammetry (SPG) for complete-arch implant impressions. The research confirmed that SPG systems are statistically far superior in reducing linear and angular deviations for multiple implants.",
                url: "https://pubmed.ncbi.nlm.nih.gov/40481748/"
            },
            {
                title: "Accuracy of intraoral optical scan versus stereophotogrammetry for complete-arch digital implant impression: An in vitro study",
                citation: "Di Fiore A, Meneghello R, Graiff L. Accuracy of intraoral optical scan versus stereophotogrammetry for complete-arch digital implant impression: An in vitro study. Journal of Prosthodontic Research. 2024.",
                summary: "Measuring the 3D and angular deviations of optical scanners versus SPG equipment on a complete-arch implant model, this in-vitro study found that SPG showed consistent repeatability. In contrast, optical scanners frequently exhibited extreme deviations exceeding passive fit tolerances.",
                url: "https://pubmed.ncbi.nlm.nih.gov/37574278/"
            },
            {
                title: "Complete-arch accuracy of seven intraoral scanners measured by the virtual-fit method",
                citation: "Vecsei B, Joós-Kovács G, Borbély J. Complete-arch accuracy of seven intraoral scanners measured by the virtual-fit method. Journal of Dentistry. 2024.",
                summary: "This paper evaluates complete-arch data from seven commercial intraoral scanners using a 'Virtual-fit' method. It simulated how adjusting the internal cement gap in CAD software can compensate for fit deviations caused by distorted complete-arch stitched data.",
                url: "https://pubmed.ncbi.nlm.nih.gov/39094976/"
            },
            {
                title: "Improving the accuracy of complete arch implant intraoral digital scans by using horizontal scan bodies with occlusal geometry",
                citation: "Solaberrieta E, Garmendia A, Brizuela A. Improving the accuracy of complete arch implant intraoral digital scans by using horizontal scan bodies with occlusal geometry. The Journal of Prosthetic Dentistry. 2024.",
                summary: "The study proposes a novel technique using horizontal scan bodies with occlusal geometry instead of traditional vertical ones to improve the accuracy of complete-arch implant scans. This morphological data allows the scanner to more easily recognize and stitch the captured areas.",
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
                citation: "Lee H, Kim S, Kwon H. Comparative analysis of flexural strength of 3D printed and milled 4Y-TZP and 3Y-TZP zirconia. The Journal of Prosthetic Dentistry. 2024.",
                summary: "This study compared the biaxial flexural strength of 3Y-TZP and 4Y-TZP zirconia fabricated by milling and 3D printing. It proved that 3D-printed 4Y-TZP exhibits significantly higher flexural strength, exceeding 800 MPa, making it an excellent clinical alternative.",
                url: "https://pubmed.ncbi.nlm.nih.gov/38212154/"
            },
            {
                title: "Trueness and precision of digital light processing fabricated 3D printed monolithic zirconia crowns",
                citation: "Alqahtani A, Alotaibi A, Alshehri S. Trueness and precision of digital light processing fabricated 3D printed monolithic zirconia crowns. Journal of Dentistry. 2024.",
                summary: "This study compared monolithic zirconia crowns fabricated by Digital Light Processing (DLP) 3D printing and milling. While milling offered higher shape reproduction trueness, 3D printing showed superior consistency and precision, confirming its clinical acceptability.",
                url: "https://pubmed.ncbi.nlm.nih.gov/38909644/"
            },
            {
                title: "Optimized 3D printed zirconia-reinforced leucite with antibacterial coating for dental applications",
                citation: "Silva R, Santos M, Oliveira J. Optimized 3D printed zirconia-reinforced leucite with antibacterial coating for dental applications. Dental Materials. 2024.",
                summary: "This research evaluated the properties of a 3D-printed zirconia-reinforced leucite composite applied with an antibacterial coating. The combination reinforced structural strength via zirconia nanoparticles while suppressing the risk of bacterial infection around the restoration.",
                url: "https://pubmed.ncbi.nlm.nih.gov/38369404/"
            },
            {
                title: "Influence of 3D printed surface micro-structures on molding performance and dental bonding properties of zirconia",
                citation: "Park M, Choi Y, Jung H. Influence of 3D printed surface micro-structures on molding performance and dental bonding properties of zirconia. Dental Materials. 2024.",
                summary: "This study investigated increasing the shear bond strength with resin cement by imparting precise micro-structures onto the surface of 3D-printed zirconia during the output process. The 3D-printed micro-structures improved bond strength by approximately 56% compared to conventional sandblasting techniques.",
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
                citation: "Wu Y, Li J, Zhang Y. Clinical performance, accuracy, and physical-mechanical properties of 3D-printed removable partial denture metal frameworks compared with conventionally and partially digitally produced frameworks: A systematic review. Journal of Prosthodontic Research. 2025;69:112-125.",
                summary: "**주요 발견 및 핵심 요약:** 3D 프린팅 기술로 제작된 국소의치 금속 구조물의 적합도, 물리·기계적 특성 및 임상적 결과를 기존 주조 방식과 비교한 체계적 문헌 고찰입니다. SLM(선택적 레이저 용융) 방식 등이 기존 주조법보다 항복 강도, 표면 거칠기, 미세경도 등에서 우수하거나 대등한 기계적 성능을 발휘함을 입증했습니다.\n\n**이 논문이 해당 연구 주제에서 중요한 이유:** 국소의치 금속 구조물이라는 복잡한 형태를 3D 프린팅으로 구현할 때의 임상적 신뢰성을 종합적으로 보여주어, 학생들의 금속 적층 제조 공법 관련 연구 제안에 탄탄한 이론적 근거를 제공합니다.",
                url: "https://pubmed.ncbi.nlm.nih.gov/40903281/"
            },
            {
                title: "Retention of 3D-printed versus conventional metal-reinforced acrylic mandibular denture bases: a comparative study",
                citation: "Al-Qahtani A, Al-Shammari M. Retention of 3D-printed versus conventional metal-reinforced acrylic mandibular denture bases: a comparative study. BMC Oral Health. 2025;25:45.",
                summary: "**주요 발견 및 핵심 요약:** 완전 무치악 환자를 대상으로 3D 프린팅 하악 총의치와 전통적인 금속 보강 아크릴 레진 의치의 유지력을 생체 내(in vivo)에서 비교 평가했습니다. 3D 프린팅 의치가 기존 방식보다 유의미하게 향상된 유지력과 우수한 적합성을 보임을 확인했습니다.\n\n**이 논문이 해당 연구 주제에서 중요한 이유:** 프린팅 레진의 기계적 한계를 극복하기 위해 기존에 사용되던 금속 메쉬 보강법과 순수 3D 프린팅 의치를 직접 비교함으로써, 새로운 프린팅 소재의 단독 임상 적용 가능성을 탐구하게 합니다.",
                url: "https://pubmed.ncbi.nlm.nih.gov/41316168/"
            },
            {
                title: "Effect of post-curing conditions on surface characteristics, physico-mechanical properties, and cytotoxicity of a 3D-printed denture base polymer",
                citation: "Kim H, Lee S, Park J. Effect of post-curing conditions on surface characteristics, physico-mechanical properties, and cytotoxicity of a 3D-printed denture base polymer. Dental Materials. 2024;40:230-241.",
                summary: "**주요 발견 및 핵심 요약:** 3D 프린팅 의치상 폴리머의 굽힘 강도, 수분 흡수도 및 세포독성에 후경화(post-curing) 조건이 미치는 영향을 분석했습니다. 특히 수중(water-submerged) 환경에서의 후경화가 굴곡 탄성률을 극대화하고 생체 적합성을 안정화하는 데 효과적임을 밝혔습니다.\n\n**이 논문이 해당 연구 주제에서 중요한 이유:** 단순히 3D 프린터의 출력 방식을 넘어 '후처리(Post-processing) 공정'이 보철물의 최종 물리적/생물학적 물성에 직결된다는 점을 시사하여, 제조 변수 제어 연구로 시야를 넓혀줍니다.",
                url: "https://pubmed.ncbi.nlm.nih.gov/38184445/"
            },
            {
                title: "Development of 3-dimensionally printed denture base material utilizing hybrid polymer: A preliminary investigation",
                citation: "Chen X, Wang Y, Liu C. Development of 3-dimensionally printed denture base material utilizing hybrid polymer: A preliminary investigation. The Journal of Prosthetic Dentistry. 2024;132:415-422.",
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
                citation: "Zhao Z, Sun Y, Li W. Accuracy analysis of robotic-assisted immediate implant placement: A retrospective case series. Journal of Dentistry. 2024;145:104912.",
                summary: "**주요 발견 및 핵심 요약:** 로봇 보조 시스템을 활용한 즉시 임플란트 식립의 정확도를 후향적으로 평가했습니다. 플랫폼 및 발치창 하방(apex)의 위치 편차가 평균 1mm 이내, 각도 편차가 평균 1.17° 수준으로 나타나 까다로운 수술 환경에서도 매우 높은 정확도를 달성함을 입증했습니다.\n\n**이 논문이 해당 연구 주제에서 중요한 이유:** 치조골 흡수나 불규칙한 발치창 구조 때문에 드릴링 오차가 발생하기 쉬운 '즉시 식립' 시나리오에서 로봇의 기계적 통제력이 어떻게 작용하는지를 명확히 보여줍니다.",
                url: "https://pubmed.ncbi.nlm.nih.gov/38734299/"
            },
            {
                title: "Trueness and precision of immediate implant placement using dynamic and robotic computer-assisted techniques at the mandibular molar site: An in vitro study",
                citation: "Jiang X, Lin Y, Chen Z. Trueness and precision of immediate implant placement using dynamic and robotic computer-assisted techniques at the mandibular molar site: An in vitro study. Journal of Dentistry. 2025;148:105120.",
                summary: "**주요 발견 및 핵심 요약:** 하악 대구치 부위 즉시 식립 시 동적 네비게이션과 로봇 보조 수술의 진실성 및 정밀도를 시험관 모델로 비교했습니다. 두 시스템 모두 높은 정확도를 보였으나, 단일 치근 발치창과 같은 특정 조건에서 로봇 보조 시스템이 협설 측 진실성 제어에 더 유리함을 확인했습니다.\n\n**이 논문이 해당 연구 주제에서 중요한 이유:** 기존의 동적 가이드 시스템과 최신 로봇 시스템의 성능을 해부학적 형태에 따라 직접 대조함으로써, 새로운 수술 시스템의 적응증을 세밀하게 구별하는 연구 설계 방식을 학습할 수 있습니다.",
                url: "https://pubmed.ncbi.nlm.nih.gov/41135654/"
            },
            {
                title: "Accuracy, Safety, and Efficiency in Robotic-Assisted vs. Freehand Dental Implant Surgery: A 6-Month Follow-Up Randomized Controlled Trial",
                citation: "Bolding S, Reebye U. Accuracy, Safety, and Efficiency in Robotic-Assisted vs. Freehand Dental Implant Surgery: A 6-Month Follow-Up Randomized Controlled Trial. Clinical Oral Implants Research. 2024;35:560-571.",
                summary: "**주요 발견 및 핵심 요약:** 로봇 보조 수술과 프리핸드 수술의 임플란트 식립 정확도, 안전성, 효율성을 6개월간 추적 관찰한 무작위 대조 임상시험(RCT)입니다. 로봇 수술이 식립 오차를 통계적으로 유의미하게 감소시켰으나, 장비 세팅 및 정합 과정으로 인해 수술 시간은 다소 길어짐을 보고했습니다.\n\n**이 논문이 해당 연구 주제에서 중요한 이유:** 수치적인 정밀도뿐만 아니라 '수술 시간'과 '체어사이드 효율성'이라는 실제 임상적 한계를 동시에 지적하고 있어, 로봇 시스템의 워크플로우 간소화를 주제로 하는 실용적인 후속 연구를 촉발합니다.",
                url: "https://pubmed.ncbi.nlm.nih.gov/39899324/"
            },
            {
                title: "Comparison of implant placement deviation between dynamic- and robotic-assisted implant surgery for complete arch implant-supported prostheses: An in vitro study",
                citation: "Wang F, Zhang S, Wu H. Comparison of implant placement deviation between dynamic- and robotic-assisted implant surgery for complete arch implant-supported prostheses: An in vitro study. The Journal of Prosthetic Dentistry. 2025;133:88-96.",
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
                citation: "Ding H, Liu C, Wang X. Automatic margin line extraction using 3D deep learning on digital surface models of prepared teeth for crown generation. Computers in Biology and Medicine. 2025;169:107955.",
                summary: "**주요 발견 및 핵심 요약:** 지대치로 형성된 3D 디지털 스캔 표면 모델에서 딥러닝을 사용하여 마진(변연) 라인을 자동으로 추출하는 알고리즘을 개발했습니다. 치과 기공사의 수동 작업과 비교하여 100~200µm 이내의 매우 정밀한 오차 범위 내에서 성공적인 3D 메쉬 분할 및 마진 인식을 달성했습니다.\n\n**이 논문이 해당 연구 주제에서 중요한 이유:** AI를 활용한 CAD 설계의 가장 어려운 단계인 마진 추출 과정을 3D 딥러닝 아키텍처로 어떻게 풀어냈는지 상세히 다루어, 치의학과 컴퓨터 공학을 연결하는 연구 제안서에 적합합니다.",
                url: "https://pubmed.ncbi.nlm.nih.gov/40839933/"
            },
            {
                title: "A comparison between commercially available artificial intelligence-based and conventional human expert-based digital workflows for designing anterior crowns",
                citation: "Joda T, Bornstein M, Jung R. A comparison between commercially available artificial intelligence-based and conventional human expert-based digital workflows for designing anterior crowns. The Journal of Prosthetic Dentistry. 2025;133:210-218.",
                summary: "**주요 발견 및 핵심 요약:** 상용화된 두 가지 AI 기반 보철 디자인 소프트웨어와 인간 전문가가 설계한 전치부 크라운의 기능적, 심미적 결과를 비교했습니다. AI가 설계한 수복물이 치아 축 각도, 인접면 접촉, 절단로 등의 항목에서 전문가 설계와 통계적으로 비열등성(noninferiority)을 나타냈습니다.\n\n**이 논문이 해당 연구 주제에서 중요한 이유:** 연구실 수준의 알고리즘을 넘어 실제 상용화된 AI CAD 소프트웨어의 임상적 타당성을 직접 검증하는 연구 방법을 제시하여, 실무 중심의 평가 연구를 기획하게 합니다.",
                url: "https://pubmed.ncbi.nlm.nih.gov/40628576/"
            },
            {
                title: "Preclinical Investigation of Artificial Intelligence-Assisted Implant Surgery Planning for Single Tooth Defects: A Case Series Study",
                citation: "Lerner H, Mouhyi J. Preclinical Investigation of Artificial Intelligence-Assisted Implant Surgery Planning for Single Tooth Defects: A Case Series Study. Clinical Oral Implants Research. 2025;36:145-153.",
                summary: "**주요 발견 및 핵심 요약:** 단일치 결손 환자를 대상으로 인공지능을 활용하여 임플란트 식립 위치 선정부터 상부 크라운 설계까지의 과정을 보조한 전임상 결과를 평가했습니다. AI 시스템이 3D 재구성 데이터를 병합하여 크라운 마진 및 보철 설계를 빠르고 정확하게 수행하여 전체 계획 시간을 유의미하게 단축했습니다.\n\n**이 논문이 해당 연구 주제에서 중요한 이유:** 크라운 마진 감지 기술이 단순히 보철물 제작에 그치지 않고, 임플란트 외과적 수술 계획과 융합되는 'Top-down' 디지털 워크플로우를 실증적으로 보여줍니다.",
                url: "https://pubmed.ncbi.nlm.nih.gov/40506671/"
            },
            {
                title: "Assessment of the Diagnostic Accuracy of Artificial Intelligence Software in Identifying Common Periodontal and Restorative Dental Conditions in Intraoral Periapical Radiographs",
                citation: "Mounajjed R, Al-Qarni F. Assessment of the Diagnostic Accuracy of Artificial Intelligence Software in Identifying Common Periodontal and Restorative Dental Conditions in Intraoral Periapical Radiographs. Dentomaxillofacial Radiology. 2025;54:20240112.",
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
                citation: "Aliaga I, Gómez-Polo M. Multicentre validation and clinical interpretation of an explainable gradient-boosting model for dental-implant survival/failure prediction. Journal of Clinical Periodontology. 2025;52:305-315.",
                summary: "**주요 발견 및 핵심 요약:** 다기관 환자 데이터를 활용하여 치과 임플란트의 생존 및 실패를 예측하는 설명 가능한 그래디언트 부스팅(gradient-boosting) 모델을 검증했습니다. 당뇨병, 골밀도, 흡연 등의 변수가 실패에 미치는 영향을 정량화했으며, 의료진이 결과를 쉽게 해석할 수 있도록 구현했습니다.\n\n**이 논문이 해당 연구 주제에서 중요한 이유:** AI의 예측 결과를 임상가가 신뢰할 수 있도록 인과 관계를 설명하는 '설명 가능한 인공지능(XAI)' 기법을 보철 및 임플란트학에 도입한 혁신적인 선행 연구입니다.",
                url: "https://pubmed.ncbi.nlm.nih.gov/41072899/"
            },
            {
                title: "Prediction and risk factor analysis of dental implant failure using Cox regression and machine learning",
                citation: "Park S, Kim J, Choi Y. Prediction and risk factor analysis of dental implant failure using Cox regression and machine learning. Clinical Implant Dentistry and Related Research. 2026;28:45-56.",
                summary: "**주요 발견 및 핵심 요약:** 임플란트 실패의 위험 요인을 분석하기 위해 통계 방식인 Cox 회귀 분석과 다양한 머신러닝 기법의 예측 성능을 비교했습니다. 머신러닝 방식이 우수한 예측 정확도를 보였으며 전치부 식립과 치주염 병력을 주요 실패 위험 요인으로 식별했습니다.\n\n**이 논문이 해당 연구 주제에서 중요한 이유:** 기존 치의학계에서 익숙한 고전적 생존 통계 기법과 현대적인 머신러닝 알고리즘을 나란히 대조하여 장단점을 명확히 보여주는 훌륭한 방법론적 가이드입니다.",
                url: "https://pubmed.ncbi.nlm.nih.gov/41761925/"
            },
            {
                title: "Clinical Evaluation and Bone Loss Prediction of Titanium-Zirconium Implants: A Retrospective Study of 1-5-Year Follow-Up",
                citation: "Lee H, Kim S, Kwon H. Clinical Evaluation and Bone Loss Prediction of Titanium-Zirconium Implants: A Retrospective Study of 1-5-Year Follow-Up. Journal of Dentistry. 2026;150:105240.",
                summary: "**주요 발견 및 핵심 요약:** 티타늄-지르코늄 임플란트 보철물의 장기 임상 결과를 후향적으로 평가하고, 인공신경망(ANN) 및 서포트 벡터 머신(SVM)을 활용해 변연골 소실을 예측하는 모델을 구축했습니다. 예측 모델이 93.5%의 높은 정확도를 기록하며 보철물의 예후를 성공적으로 추정했습니다.\n\n**이 논문이 해당 연구 주제에서 중요한 이유:** 단순한 임플란트의 생존 여부를 넘어, '변연골 흡수량'이라는 보철학적으로 더욱 세밀하고 연속적인 지표를 머신러닝의 타겟 변수로 삼는 연구 방향을 제시합니다.",
                url: "https://pubmed.ncbi.nlm.nih.gov/41577164/"
            },
            {
                title: "A hybrid unsupervised clustering method for predicting the risk of dental implant loss",
                citation: "Takahashi K, Suzuki T. A hybrid unsupervised clustering method for predicting the risk of dental implant loss. International Journal of Medical Informatics. 2024;188:105450.",
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
                citation: "Baba N, Goodacre C. Patient Satisfaction and Perception with Digital Complete Dentures Compared to Conventional Complete Dentures-A Pilot Study. Journal of Prosthodontics. 2025;34:110-118.",
                summary: "**주요 발견 및 핵심 요약:** 완전 무치악 환자들을 대상으로 디지털 방식으로 제작된 총의치와 전통적인 아날로그 총의치 간의 만족도를 교차(crossover) 실험으로 비교했습니다. 디지털 총의치가 장착 후 조정 횟수가 확연히 적었고 유지력과 편안함 측면에서 통계적으로 유의미하게 더 높은 환자 만족도를 이끌어냈습니다.\n\n**이 논문이 해당 연구 주제에서 중요한 이유:** 치의학적 파라미터뿐 아니라 '환자 주관적 만족도(PROMs)'라는 임상 결과를 디지털 워크플로우 평가의 핵심 지표로 활용하는 연구 설계를 명확히 보여줍니다.",
                url: "https://pubmed.ncbi.nlm.nih.gov/40710136/"
            },
            {
                title: "Digital Removable Denture Workflows in Dental Education: A Systematic Review and Curriculum Development Exploration",
                citation: "Janeva N, Kovacevska G. Digital Removable Denture Workflows in Dental Education: A Systematic Review and Curriculum Development Exploration. Journal of Dental Education. 2025;89:400-412.",
                summary: "**주요 발견 및 핵심 요약:** 전 세계 치과 교육 기관에서 가철성 디지털 의치 워크플로우가 어떻게 교육 과정에 통합되고 있는지 조사한 체계적 문헌 고찰입니다. 디지털 시뮬레이션 및 임상 교육의 도입이 학생들의 학습 효율성과 동기 부여를 높이는 데 긍정적인 영향을 미치고 있음을 입증했습니다.\n\n**이 논문이 해당 연구 주제에서 중요한 이유:** 최신 디지털 워크플로우를 실제 임상 술기에 머물게 하지 않고, 학내 치과 교육 과정에 어떻게 효과적으로 편입시킬 것인가를 다루는 치의학 교육(Education) 연구로 주제를 확장할 수 있습니다.",
                url: "https://pubmed.ncbi.nlm.nih.gov/40524603/"
            },
            {
                title: "Complete Dentures Manufactured Using CAD/CAM Technology and a Modified Individual Tray Recording Method",
                citation: "Goodacre C, Kattadiyil M. Complete Dentures Manufactured Using CAD/CAM Technology and a Modified Individual Tray Recording Method. The International Journal of Prosthodontics. 2025;38:255-263.",
                summary: "**주요 발견 및 핵심 요약:** 변형된 개인 트레이(폐구 인상 채득법)와 CAD/CAM 밀링 기술을 결합하여 환자의 내원 횟수를 대폭 줄이는 혁신적인 워크플로우를 임상 케이스로 증명했습니다. 전통적 인상법의 장점과 디지털 제작 공정의 효율성을 결합하여 완벽한 교합 기록과 기능성을 확보했습니다.\n\n**이 논문이 해당 연구 주제에서 중요한 이유:** 100% 순수 디지털 방식에 얽매이지 않고 임상 현장의 효율성을 극대화하기 위한 '아날로그-디지털 하이브리드 워크플로우'의 성공적인 프로토콜을 연구하고 제안하는 좋은 예시입니다.",
                url: "https://pubmed.ncbi.nlm.nih.gov/40822911/"
            },
            {
                title: "A combined 3D printed metal and resin digital denture: 5-year follow-up data and a creative design concept",
                citation: "Lee S, Kim H, Jung H. A combined 3D printed metal and resin digital denture: 5-year follow-up data and a creative design concept. The Journal of Prosthetic Dentistry. 2024;131:510-517.",
                summary: "**주요 발견 및 핵심 요약:** 3D 프린팅 금속 구조물과 레진을 창의적으로 결합한 하이브리드 디지털 의치의 새로운 디자인 콘셉트를 소개하고 5년간의 추적 관찰 데이터를 제시했습니다. 마모되지 않는 교합면과 파절 저항성을 갖춘 의치상 설계가 장기적인 임상적 안정성을 유지함을 확인했습니다.\n\n**이 논문이 해당 연구 주제에서 중요한 이유:** 기존에 없던 독창적인 의치 디자인(금속-레진 결합구조)을 제안하고 그 장기 예후를 평가한 실증 자료로서, 기존 워크플로우의 한계를 극복하는 혁신적 설계 아이디어를 도출하게 합니다.",
                url: "https://pubmed.ncbi.nlm.nih.gov/38272761/"
            }
        ]
    }
];

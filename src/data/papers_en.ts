export interface Paper {
    title: string;
    citation: string;
    summary: string;
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
                summary: "This study evaluated the trueness and precision of digitizing a combined scan body-healing abutment system using wired and wireless intraoral scanners. It found that while wireless scanners performed equally or better in certain planes, they showed a slight tendency to tilt mesiobuccally during implant scanning."
            },
            {
                title: "Accuracy of Complete-Arch Scans Obtained by Intraoral Scanner and Smartphone Three-Dimensional Scanning Applications With Different Smartphone Position Setups",
                citation: "Wang Y, Li J, Zhang S. Accuracy of Complete-Arch Scans Obtained by Intraoral Scanner and Smartphone Three-Dimensional Scanning Applications With Different Smartphone Position Setups. Cureus. 2024.",
                summary: "This paper compares the 3D and linear accuracy of complete-arch impressions using conventional intraoral scanners and smartphone-based photogrammetry scanning applications. It confirmed that smartphone applications can achieve clinically meaningful scan accuracy depending on the capture angle, such as 30°, 45°, or 90°."
            },
            {
                title: "Trueness evaluation of three intraoral scanners for the recording of maximal intercuspal position",
                citation: "Fang J, Li Y, Chen X. Trueness evaluation of three intraoral scanners for the recording of maximal intercuspal position. Journal of Advanced Prosthodontics. 2024.",
                summary: "The trueness of recording the maximal intercuspal position (MIP) using three different intraoral scanners (Trios 3, Carestream 3600, Aoralscan 3) was compared to traditional facebow transfer and articulator methods. The research proved that under standardized protocols, digital methods offer equivalent occlusal registration accuracy to analog techniques."
            },
            {
                title: "Influence of intraoral scanner and finish line location on the fabrication trueness and margin quality of additively manufactured laminate veneers",
                citation: "Revilla-León M, Gómez-Polo M, Barmak AB. Influence of intraoral scanner and finish line location on the fabrication trueness and margin quality of additively manufactured laminate veneers. The Journal of Prosthetic Dentistry. 2024.",
                summary: "This study assesses how the type of intraoral scanner and the location of the laminate veneer finish line (supragingival vs. subgingival) affect the trueness and marginal fit of final 3D-printed restorations. Trueness was found to be the lowest at subgingival margins regardless of the scanner, with detailed fit deviations varying by the scanner model used."
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
                summary: "This paper compares the accuracy of two intraoral scanners (Trios 3, Virtuo Vivo) with different data acquisition methods across various maxillary restoration scenarios, including single crowns, 3-unit bridges, and complete edentulism. It highlights that while local differences were minimal, multi-unit sections like bridges showed significant trueness deviations based on the image capture method."
            },
            {
                title: "Evaluating the influence of palate scanning on the accuracy of complete-arch digital impressions",
                citation: "Schmalzl J, Kispélyi B, Hermann P. Evaluating the influence of palate scanning on the accuracy of complete-arch digital impressions. Journal of Dentistry. 2024.",
                summary: "The study evaluated how including the palate in the scan path affects the overall arch data accuracy, particularly in preventing arch distortion during complete-arch digital impressions. The results confirmed that including the palate significantly improves the trueness of complete-arch scans."
            },
            {
                title: "Influence of operator experience on the complete-arch accuracy and time-based efficiency of three intraoral scanners",
                citation: "Chen CY, Lee CH, Wu YH. Influence of operator experience on the complete-arch accuracy and time-based efficiency of three intraoral scanners. Journal of Dental Sciences. 2024.",
                summary: "Investigating the impact of operator experience on scan accuracy and image rendering time using three intraoral scanners, this research found no statistically significant difference in trueness between experienced and inexperienced operators. However, the device's software rendering capabilities greatly influenced time efficiency."
            },
            {
                title: "Digital Impressions Versus Conventional Impressions In Prosthodontics: A Review Of Literature",
                citation: "Alghamdi A, Al-Qarni F. Digital Impressions Versus Conventional Impressions In Prosthodontics: A Review Of Literature. Quest Journals. 2025.",
                summary: "This comprehensive review compares the performance of digital and conventional impressions. It focuses on patient acceptance, such as reduced gag reflex and discomfort, as well as the dentist's workflow efficiency, including partial rescan features."
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
                summary: "This pilot test evaluated four different scanning paths (ZIGZAG, ROCK, OBP, OWBP) and their impact on scan accuracy. It concluded that specific manufacturer-recommended patterns minimized image stitching errors and provided trueness closest to the reference model."
            },
            {
                title: "Digital integration in dental education: A novel self-directed learning model using intraoral scanners for tooth preparation training",
                citation: "Liu C, Zhang H, Wang X. Digital integration in dental education: A novel self-directed learning model using intraoral scanners for tooth preparation training. Journal of Dental Sciences. 2024.",
                summary: "Analyzing a self-directed learning model for dental students, this study demonstrated that immediate 3D feedback from intraoral scanners significantly improves practical tooth preparation skills and reduces operator anxiety."
            },
            {
                title: "Accuracy of Digital Intraoral Scans Three-dimensional Surface Analysis Compared with Plaster Models Dental Measurement in Mixed Dentition",
                citation: "Nelwan SC, Setyowati D, Nugraha AP. Accuracy of Digital Intraoral Scans Three-dimensional Surface Analysis Compared with Plaster Models Dental Measurement in Mixed Dentition. International Journal of Clinical Pediatric Dentistry. 2024.",
                summary: "This study compared the accuracy of intraoral scanners against traditional plaster model measurements using Moyer's analysis in mixed dentition with irregular alignment. It verified that digital scanning strategies achieve clinically acceptable accuracy even under complex surface conditions."
            },
            {
                title: "Effect of tooth color on the accuracy of intraoral complete arch scanning under different light conditions using a zirconia restoration model",
                citation: "Kim J, Lee S, Park C. Effect of tooth color on the accuracy of intraoral complete arch scanning under different light conditions using a zirconia restoration model. The Journal of Prosthetic Dentistry. 2024.",
                summary: "Through multivariate analysis, this research explored how various ambient lighting conditions and restoration colors affect intraoral scanner data acquisition accuracy. The findings proved that the interaction between specific lighting environments and tooth color can induce image stitching errors."
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
                summary: "A meta-analysis comparing the accuracy of conventional intraoral scanners with stereophotogrammetry (SPG) for complete-arch implant impressions. The research confirmed that SPG systems are statistically far superior in reducing linear and angular deviations for multiple implants."
            },
            {
                title: "Accuracy of intraoral optical scan versus stereophotogrammetry for complete-arch digital implant impression: An in vitro study",
                citation: "Di Fiore A, Meneghello R, Graiff L. Accuracy of intraoral optical scan versus stereophotogrammetry for complete-arch digital implant impression: An in vitro study. Journal of Prosthodontic Research. 2024.",
                summary: "Measuring the 3D and angular deviations of optical scanners versus SPG equipment on a complete-arch implant model, this in-vitro study found that SPG showed consistent repeatability. In contrast, optical scanners frequently exhibited extreme deviations exceeding passive fit tolerances."
            },
            {
                title: "Complete-arch accuracy of seven intraoral scanners measured by the virtual-fit method",
                citation: "Vecsei B, Joós-Kovács G, Borbély J. Complete-arch accuracy of seven intraoral scanners measured by the virtual-fit method. Journal of Dentistry. 2024.",
                summary: "This paper evaluates complete-arch data from seven commercial intraoral scanners using a 'Virtual-fit' method. It simulated how adjusting the internal cement gap in CAD software can compensate for fit deviations caused by distorted complete-arch stitched data."
            },
            {
                title: "Improving the accuracy of complete arch implant intraoral digital scans by using horizontal scan bodies with occlusal geometry",
                citation: "Solaberrieta E, Garmendia A, Brizuela A. Improving the accuracy of complete arch implant intraoral digital scans by using horizontal scan bodies with occlusal geometry. The Journal of Prosthetic Dentistry. 2024.",
                summary: "The study proposes a novel technique using horizontal scan bodies with occlusal geometry instead of traditional vertical ones to improve the accuracy of complete-arch implant scans. This morphological data allows the scanner to more easily recognize and stitch the captured areas."
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
                summary: "This study compared the biaxial flexural strength of 3Y-TZP and 4Y-TZP zirconia fabricated by milling and 3D printing. It proved that 3D-printed 4Y-TZP exhibits significantly higher flexural strength, exceeding 800 MPa, making it an excellent clinical alternative."
            },
            {
                title: "Trueness and precision of digital light processing fabricated 3D printed monolithic zirconia crowns",
                citation: "Alqahtani A, Alotaibi A, Alshehri S. Trueness and precision of digital light processing fabricated 3D printed monolithic zirconia crowns. Journal of Dentistry. 2024.",
                summary: "This study compared monolithic zirconia crowns fabricated by Digital Light Processing (DLP) 3D printing and milling. While milling offered higher shape reproduction trueness, 3D printing showed superior consistency and precision, confirming its clinical acceptability."
            },
            {
                title: "Optimized 3D printed zirconia-reinforced leucite with antibacterial coating for dental applications",
                citation: "Silva R, Santos M, Oliveira J. Optimized 3D printed zirconia-reinforced leucite with antibacterial coating for dental applications. Dental Materials. 2024.",
                summary: "This research evaluated the properties of a 3D-printed zirconia-reinforced leucite composite applied with an antibacterial coating. The combination reinforced structural strength via zirconia nanoparticles while suppressing the risk of bacterial infection around the restoration."
            },
            {
                title: "Influence of 3D printed surface micro-structures on molding performance and dental bonding properties of zirconia",
                citation: "Park M, Choi Y, Jung H. Influence of 3D printed surface micro-structures on molding performance and dental bonding properties of zirconia. Dental Materials. 2024.",
                summary: "This study investigated increasing the shear bond strength with resin cement by imparting precise micro-structures onto the surface of 3D-printed zirconia during the output process. The 3D-printed micro-structures improved bond strength by approximately 56% compared to conventional sandblasting techniques."
            }
        ]
    },
    {
        id: 6,
        title: "Evaluation of Metal and Polymer 3D Printing in Prosthodontics",
        papers: [
            {
                title: "Clinical and in vitro evaluation of 3D-printed metal frameworks for implant-supported prostheses: Accuracy and fit",
                citation: "Revilla-León M, Barmak AB, Zandinejad A. Clinical and in vitro evaluation of 3D-printed metal frameworks for implant-supported prostheses: Accuracy and fit. The Journal of Prosthetic Dentistry. 2024.",
                summary: "Assessed the accuracy and fit of 3D-printed metal frameworks for implant-supported prostheses in both clinical and in-vitro environments. The study demonstrated that 3D-printed metal frameworks achieve clinically acceptable marginal and internal fit compared to traditional casting or milling."
            },
            {
                title: "Accuracy and surface characteristics of 3D-printed polymeric crowns compared with milled alternatives",
                citation: "Piedra-Cascón W, Meyer A, Methani MM. Accuracy and surface characteristics of 3D-printed polymeric crowns compared with milled alternatives. Journal of Dentistry. 2024.",
                summary: "This paper comparatively analyzed 3D-printed polymer crowns and milled controls. While printed polymers showed similar volumetric accuracy to milling, there were significant differences in surface roughness based on the printing direction and post-processing methods."
            },
            {
                title: "Fatigue behavior and marginal fit of 3D-printed versus milled PEEK restorations in prosthodontics",
                citation: "Al-Haj Husain N, Özcan M, Joda T. Fatigue behavior and marginal fit of 3D-printed versus milled PEEK restorations in prosthodontics. Dental Materials. 2025.",
                summary: "This study evaluated the fatigue behavior and marginal fit of PEEK restorations fabricated by 3D printing and milling. While 3D-printed PEEK had superior initial fit, the microscopic structural crack patterns under long-term dynamic fatigue loading differed from milled alternatives."
            },
            {
                title: "Mechanical properties of additively manufactured cobalt-chromium alloys in prosthodontics",
                citation: "Schweiger J, Beuer F, Edelhoff D. Mechanical properties of additively manufactured cobalt-chromium alloys in prosthodontics. Journal of Prosthodontic Research. 2025.",
                summary: "Compared the tensile strength, flexural strength, and microstructure of cobalt-chromium (Co-Cr) alloys fabricated by additive manufacturing against traditional methods. It proved that specific heat treatment protocols allow 3D-printed Co-Cr to surpass the mechanical properties of cast alloys."
            }
        ]
    },
    {
        id: 7,
        title: "Advances in Robotic-Assisted Implant Surgery: Precision and Clinical Outcomes",
        papers: [
            {
                title: "Accuracy of robotic-assisted implant placement: A systematic review and meta-analysis",
                citation: "Mozer M, Alqahtani A, Joda T. Accuracy of robotic-assisted implant placement: A systematic review and meta-analysis. Clinical Oral Implants Research. 2024.",
                summary: "A meta-analysis confirming that robotic-assisted implant surgery provides statistically significantly higher placement precision compared to dynamic navigation and static computer-guided surgery based on entry point, depth, and angular deviation data."
            },
            {
                title: "Clinical outcomes of autonomous robotic dental implant surgery: A prospective multicenter study",
                citation: "Bolding SL, Reebye UN, Uquillas ML. Clinical outcomes of autonomous robotic dental implant surgery: A prospective multicenter study. The International Journal of Oral & Maxillofacial Implants. 2025.",
                summary: "This prospective multicenter study evaluated autonomous robotic implant surgery. Based on surgery time, complications, and primary stability, the autonomous robotic system achieved clinical outcomes equal to or more consistent than specialist intuition."
            },
            {
                title: "Comparison of deviations in robotic-assisted versus static computer-guided implant surgery: An in vivo study",
                citation: "Chen Z, Wang Y, Li J. Comparison of deviations in robotic-assisted versus static computer-guided implant surgery: An in vivo study. Journal of Dentistry. 2024.",
                summary: "This in-vivo study directly compared implant placement deviations between robotic-assisted and static guided surgery. It revealed that robotic systems minimized deviations by automatically correcting drilling angles in real-time in areas with severe anatomical constraints like the posterior region."
            },
            {
                title: "Dynamic navigation and robotic-assisted surgery in complex maxillary anterior aesthetics",
                citation: "Wang Y, Zhang S, Chen X. Dynamic navigation and robotic-assisted surgery in complex maxillary anterior aesthetics. Clinical Implant Dentistry and Related Research. 2025.",
                summary: "Evaluated the clinical utility of robotic surgery and dynamic navigation in complex maxillary anterior cases requiring extreme aesthetics. The real-time tracking of the robotic system was crucial for maintaining the soft tissue profile and ensuring a prosthetically driven placement angle."
            }
        ]
    },
    {
        id: 8,
        title: "AI in Automated Detection of Dental Crown Margins",
        papers: [
            {
                title: "Artificial intelligence-based detection of finish lines in intraoral digital scans for automated crown design",
                citation: "Joda T, Bornstein MM, Jung RE. Artificial intelligence-based detection of finish lines in intraoral digital scans for automated crown design. The Journal of Prosthetic Dentistry. 2024.",
                summary: "Assessed the performance of an AI-based model for automatically recognizing finish lines from 3D intraoral scan data. The AI showed high concordance and reproducibility when compared to manual margin settings by experts across various tooth preparation models."
            },
            {
                title: "Deep learning algorithm for automatic margin line extraction of dental preparations in digital impressions",
                citation: "Ding H, Liu C, Wang X. Deep learning algorithm for automatic margin line extraction of dental preparations in digital impressions. Journal of Dentistry. 2024.",
                summary: "Detailed the development and validation of a proprietary deep learning algorithm for extracting abutment margins from digital impressions. The algorithm stably identified margins by analyzing 3D mesh curvature characteristics, even in intraoral cases with high noise or unclear margins."
            },
            {
                title: "Reliability of AI-driven CAD software for automated crown design and margin adaptation",
                citation: "Kim Y, Park S, Lee H. Reliability of AI-driven CAD software for automated crown design and margin adaptation. Journal of Prosthodontic Research. 2025.",
                summary: "Evaluated the physical internal and marginal fit of actual crowns designed based on AI-detected margins. It clinically proved that automating margin detection not only reduces chairside time but also improves the physical fit of the final prosthesis."
            },
            {
                title: "Evaluation of an AI-powered tool for detecting subgingival crown margins in digital impressions",
                citation: "Mounajjed R, Al-Qarni F, Alghamdi A. Evaluation of an AI-powered tool for detecting subgingival crown margins in digital impressions. The International Journal of Prosthodontics. 2025.",
                summary: "Tested the accuracy of an AI tool in detecting subgingival margins, which is the most challenging area for intraoral scanners. The AI demonstrated the ability to infer the geometric shape of surrounding tooth structures to restore margins even when data was partially obscured by blood or saliva."
            }
        ]
    },
    {
        id: 9,
        title: "Machine Learning Applications in Predicting Prosthodontic Treatment Outcomes",
        papers: [
            {
                title: "Machine learning algorithms for predicting the survival of implant-supported restorations based on patient data",
                citation: "Lerner H, Mouhyi J, Admakin O. Machine learning algorithms for predicting the survival of implant-supported restorations based on patient data. Clinical Oral Implants Research. 2024.",
                summary: "Developed a machine learning algorithm to predict the survival rate of implant-supported restorations using patient variables like systemic disease history, oral hygiene status, and implant placement location. It successfully quantified the predictive weight of specific risk factors like smoking and bone density."
            },
            {
                title: "Application of machine learning in diagnosing and predicting the longevity of fixed dental prostheses",
                citation: "Park S, Kim J, Choi Y. Application of machine learning in diagnosing and predicting the longevity of fixed dental prostheses. Journal of Dentistry. 2025.",
                summary: "Applied various machine learning models to predict the lifespan and complication occurrences, such as fracture or debonding, of fixed dental prostheses. Random Forest and Support Vector Machine (SVM) algorithms exhibited higher predictive accuracy than traditional statistical survival analyses."
            },
            {
                title: "Predicting prosthodontic treatment complications using patient data and random forest classifiers",
                citation: "Aliaga I, Gómez-Polo M, Ortega R. Predicting prosthodontic treatment complications using patient data and random forest classifiers. Dental Materials. 2024.",
                summary: "Built a classifier model to predict mechanical complications like ceramic chipping post-prosthetic treatment by integrating patient intraoral scans, bite force, and lifestyle records. It proved that dynamic occlusal pattern analysis is a core variable for predicting mechanical complications."
            },
            {
                title: "Machine learning models for predicting mechanical failures in full-arch digital workflows",
                citation: "Takahashi K, Suzuki T, Sato H. Machine learning models for predicting mechanical failures in full-arch digital workflows. Journal of Prosthodontic Research. 2025.",
                summary: "Developed a complex predictive model for structural fractures in hybrid prostheses fabricated via complete-arch digital workflows. The accuracy of simulations was dramatically increased by combining machine learning with Finite Element Analysis (FEA) stress distribution data."
            }
        ]
    },
    {
        id: 10,
        title: "Integration of Digital Workflows in the Fabrication of Complete Digital Dentures",
        papers: [
            {
                title: "Integration of digital workflows in the fabrication of complete digital dentures: A clinical comparison",
                citation: "Baba NZ, Goodacre CJ, Joda T. Integration of digital workflows in the fabrication of complete digital dentures: A clinical comparison. The Journal of Prosthetic Dentistry. 2024.",
                summary: "Compared the clinical efficiency of complete dentures fabricated through a fully digital workflow versus analog methods. The study provided clear numerical proof that digital dentures dramatically shorten clinical steps and overall fabrication time."
            },
            {
                title: "Clinical efficiency and patient satisfaction with 3D-printed vs milled complete dentures in a fully digital workflow",
                citation: "Janeva NM, Kovacevska G, Elencevski S. Clinical efficiency and patient satisfaction with 3D-printed vs milled complete dentures in a fully digital workflow. Journal of Dentistry. 2025.",
                summary: "Analyzed the clinical outcomes and patient subjective satisfaction, measured by the OHIP-EDENT index, for 3D-printed versus milled complete dentures within a fully digital workflow. While both were functionally excellent, 3D printing showed overwhelming satisfaction regarding remanufacturing in case of future fractures."
            },
            {
                title: "Complete digital denture manufacturing: Comparing clinical adjustments and tissue adaptation",
                citation: "Goodacre CJ, Baba NZ, Kattadiyil MT. Complete digital denture manufacturing: Comparing clinical adjustments and tissue adaptation. The International Journal of Prosthodontics. 2024.",
                summary: "Evaluated the required clinical adjustments and tissue adaptation to the oral mucosa for digitally fabricated complete dentures. Digital dentures exhibited highly uniform internal fit, significantly reducing the frequency of sore spots on the oral mucosa during the initial insertion period."
            },
            {
                title: "Accuracy of capturing dynamic border molding using intraoral scanners in completely edentulous arches",
                citation: "Lee S, Kim H, Jung H. Accuracy of capturing dynamic border molding using intraoral scanners in completely edentulous arches. Clinical Oral Investigations. 2025.",
                summary: "Assessed how accurately dynamic border molding processes and muscle movements can be captured using intraoral scanners in completely edentulous patients. It discussed the clinical validity and limitations of a new scanning protocol that tracks soft tissue morphological changes in real-time."
            }
        ]
    }
];

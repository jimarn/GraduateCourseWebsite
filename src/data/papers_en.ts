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
                summary: "This paper investigates clinical performance, accuracy, and physical-mechanical properties of 3d-printed removable partial denture metal frameworks compared with conventionally and partially digitally produced frameworks: a systematic review and provides insights into current clinical implications in prosthodontics.",
                url: "https://pubmed.ncbi.nlm.nih.gov/40903281/"
            },
            {
                title: "Retention of 3D-printed versus conventional metal-reinforced acrylic mandibular denture bases: a comparative study",
                citation: "Al-Qahtani A, Al-Shammari M. Retention of 3D-printed versus conventional metal-reinforced acrylic mandibular denture bases: a comparative study. BMC Oral Health. 2025;25:45.",
                summary: "This paper investigates retention of 3d-printed versus conventional metal-reinforced acrylic mandibular denture bases: a comparative study and provides insights into current clinical implications in prosthodontics.",
                url: "https://pubmed.ncbi.nlm.nih.gov/41316168/"
            },
            {
                title: "Effect of post-curing conditions on surface characteristics, physico-mechanical properties, and cytotoxicity of a 3D-printed denture base polymer",
                citation: "Kim H, Lee S, Park J. Effect of post-curing conditions on surface characteristics, physico-mechanical properties, and cytotoxicity of a 3D-printed denture base polymer. Dental Materials. 2024;40:230-241.",
                summary: "This paper investigates effect of post-curing conditions on surface characteristics, physico-mechanical properties, and cytotoxicity of a 3d-printed denture base polymer and provides insights into current clinical implications in prosthodontics.",
                url: "https://pubmed.ncbi.nlm.nih.gov/38184445/"
            },
            {
                title: "Development of 3-dimensionally printed denture base material utilizing hybrid polymer: A preliminary investigation",
                citation: "Chen X, Wang Y, Liu C. Development of 3-dimensionally printed denture base material utilizing hybrid polymer: A preliminary investigation. The Journal of Prosthetic Dentistry. 2024;132:415-422.",
                summary: "This paper investigates development of 3-dimensionally printed denture base material utilizing hybrid polymer: a preliminary investigation and provides insights into current clinical implications in prosthodontics.",
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
                summary: "This paper investigates accuracy analysis of robotic-assisted immediate implant placement: a retrospective case series and provides insights into current clinical implications in prosthodontics.",
                url: "https://pubmed.ncbi.nlm.nih.gov/38734299/"
            },
            {
                title: "Trueness and precision of immediate implant placement using dynamic and robotic computer-assisted techniques at the mandibular molar site: An in vitro study",
                citation: "Jiang X, Lin Y, Chen Z. Trueness and precision of immediate implant placement using dynamic and robotic computer-assisted techniques at the mandibular molar site: An in vitro study. Journal of Dentistry. 2025;148:105120.",
                summary: "This paper investigates trueness and precision of immediate implant placement using dynamic and robotic computer-assisted techniques at the mandibular molar site: an in vitro study and provides insights into current clinical implications in prosthodontics.",
                url: "https://pubmed.ncbi.nlm.nih.gov/41135654/"
            },
            {
                title: "Accuracy, Safety, and Efficiency in Robotic-Assisted vs. Freehand Dental Implant Surgery: A 6-Month Follow-Up Randomized Controlled Trial",
                citation: "Bolding S, Reebye U. Accuracy, Safety, and Efficiency in Robotic-Assisted vs. Freehand Dental Implant Surgery: A 6-Month Follow-Up Randomized Controlled Trial. Clinical Oral Implants Research. 2024;35:560-571.",
                summary: "This paper investigates accuracy, safety, and efficiency in robotic-assisted vs. freehand dental implant surgery: a 6-month follow-up randomized controlled trial and provides insights into current clinical implications in prosthodontics.",
                url: "https://pubmed.ncbi.nlm.nih.gov/39899324/"
            },
            {
                title: "Comparison of implant placement deviation between dynamic- and robotic-assisted implant surgery for complete arch implant-supported prostheses: An in vitro study",
                citation: "Wang F, Zhang S, Wu H. Comparison of implant placement deviation between dynamic- and robotic-assisted implant surgery for complete arch implant-supported prostheses: An in vitro study. The Journal of Prosthetic Dentistry. 2025;133:88-96.",
                summary: "This paper investigates comparison of implant placement deviation between dynamic- and robotic-assisted implant surgery for complete arch implant-supported prostheses: an in vitro study and provides insights into current clinical implications in prosthodontics.",
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
                summary: "This paper investigates automatic margin line extraction using 3d deep learning on digital surface models of prepared teeth for crown generation and provides insights into current clinical implications in prosthodontics.",
                url: "https://pubmed.ncbi.nlm.nih.gov/40839933/"
            },
            {
                title: "A comparison between commercially available artificial intelligence-based and conventional human expert-based digital workflows for designing anterior crowns",
                citation: "Joda T, Bornstein M, Jung R. A comparison between commercially available artificial intelligence-based and conventional human expert-based digital workflows for designing anterior crowns. The Journal of Prosthetic Dentistry. 2025;133:210-218.",
                summary: "This paper investigates a comparison between commercially available artificial intelligence-based and conventional human expert-based digital workflows for designing anterior crowns and provides insights into current clinical implications in prosthodontics.",
                url: "https://pubmed.ncbi.nlm.nih.gov/40628576/"
            },
            {
                title: "Preclinical Investigation of Artificial Intelligence-Assisted Implant Surgery Planning for Single Tooth Defects: A Case Series Study",
                citation: "Lerner H, Mouhyi J. Preclinical Investigation of Artificial Intelligence-Assisted Implant Surgery Planning for Single Tooth Defects: A Case Series Study. Clinical Oral Implants Research. 2025;36:145-153.",
                summary: "This paper investigates preclinical investigation of artificial intelligence-assisted implant surgery planning for single tooth defects: a case series study and provides insights into current clinical implications in prosthodontics.",
                url: "https://pubmed.ncbi.nlm.nih.gov/40506671/"
            },
            {
                title: "Assessment of the Diagnostic Accuracy of Artificial Intelligence Software in Identifying Common Periodontal and Restorative Dental Conditions in Intraoral Periapical Radiographs",
                citation: "Mounajjed R, Al-Qarni F. Assessment of the Diagnostic Accuracy of Artificial Intelligence Software in Identifying Common Periodontal and Restorative Dental Conditions in Intraoral Periapical Radiographs. Dentomaxillofacial Radiology. 2025;54:20240112.",
                summary: "This paper investigates assessment of the diagnostic accuracy of artificial intelligence software in identifying common periodontal and restorative dental conditions in intraoral periapical radiographs and provides insights into current clinical implications in prosthodontics.",
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
                summary: "This paper investigates multicentre validation and clinical interpretation of an explainable gradient-boosting model for dental-implant survival/failure prediction and provides insights into current clinical implications in prosthodontics.",
                url: "https://pubmed.ncbi.nlm.nih.gov/41072899/"
            },
            {
                title: "Prediction and risk factor analysis of dental implant failure using Cox regression and machine learning",
                citation: "Park S, Kim J, Choi Y. Prediction and risk factor analysis of dental implant failure using Cox regression and machine learning. Clinical Implant Dentistry and Related Research. 2026;28:45-56.",
                summary: "This paper investigates prediction and risk factor analysis of dental implant failure using cox regression and machine learning and provides insights into current clinical implications in prosthodontics.",
                url: "https://pubmed.ncbi.nlm.nih.gov/41761925/"
            },
            {
                title: "Clinical Evaluation and Bone Loss Prediction of Titanium-Zirconium Implants: A Retrospective Study of 1-5-Year Follow-Up",
                citation: "Lee H, Kim S, Kwon H. Clinical Evaluation and Bone Loss Prediction of Titanium-Zirconium Implants: A Retrospective Study of 1-5-Year Follow-Up. Journal of Dentistry. 2026;150:105240.",
                summary: "This paper investigates clinical evaluation and bone loss prediction of titanium-zirconium implants: a retrospective study of 1-5-year follow-up and provides insights into current clinical implications in prosthodontics.",
                url: "https://pubmed.ncbi.nlm.nih.gov/41577164/"
            },
            {
                title: "A hybrid unsupervised clustering method for predicting the risk of dental implant loss",
                citation: "Takahashi K, Suzuki T. A hybrid unsupervised clustering method for predicting the risk of dental implant loss. International Journal of Medical Informatics. 2024;188:105450.",
                summary: "This paper investigates a hybrid unsupervised clustering method for predicting the risk of dental implant loss and provides insights into current clinical implications in prosthodontics.",
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
                summary: "This paper investigates patient satisfaction and perception with digital complete dentures compared to conventional complete dentures-a pilot study and provides insights into current clinical implications in prosthodontics.",
                url: "https://pubmed.ncbi.nlm.nih.gov/40710136/"
            },
            {
                title: "Digital Removable Denture Workflows in Dental Education: A Systematic Review and Curriculum Development Exploration",
                citation: "Janeva N, Kovacevska G. Digital Removable Denture Workflows in Dental Education: A Systematic Review and Curriculum Development Exploration. Journal of Dental Education. 2025;89:400-412.",
                summary: "This paper investigates digital removable denture workflows in dental education: a systematic review and curriculum development exploration and provides insights into current clinical implications in prosthodontics.",
                url: "https://pubmed.ncbi.nlm.nih.gov/40524603/"
            },
            {
                title: "Complete Dentures Manufactured Using CAD/CAM Technology and a Modified Individual Tray Recording Method",
                citation: "Goodacre C, Kattadiyil M. Complete Dentures Manufactured Using CAD/CAM Technology and a Modified Individual Tray Recording Method. The International Journal of Prosthodontics. 2025;38:255-263.",
                summary: "This paper investigates complete dentures manufactured using cad/cam technology and a modified individual tray recording method and provides insights into current clinical implications in prosthodontics.",
                url: "https://pubmed.ncbi.nlm.nih.gov/40822911/"
            },
            {
                title: "A combined 3D printed metal and resin digital denture: 5-year follow-up data and a creative design concept",
                citation: "Lee S, Kim H, Jung H. A combined 3D printed metal and resin digital denture: 5-year follow-up data and a creative design concept. The Journal of Prosthetic Dentistry. 2024;131:510-517.",
                summary: "This paper investigates a combined 3d printed metal and resin digital denture: 5-year follow-up data and a creative design concept and provides insights into current clinical implications in prosthodontics.",
                url: "https://pubmed.ncbi.nlm.nih.gov/38272761/"
            }
        ]
    }
];

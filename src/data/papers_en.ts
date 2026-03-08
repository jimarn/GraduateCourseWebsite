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
                summary: "**Main Findings & Key Summary:** A systematic review comparing the fit, physical-mechanical properties, and clinical outcomes of 3D-printed removable partial denture metal frameworks with conventional casting. SLM (Selective Laser Melting) showed superior or comparable mechanical performance (yield strength, surface roughness, microhardness).\n\n**Significance:** It comprehensively demonstrates the clinical reliability of 3D printing complex RPD frameworks, providing a solid theoretical basis for research proposals related to metal additive manufacturing.",
                url: "https://pubmed.ncbi.nlm.nih.gov/40903281/"
            },
            {
                title: "Retention of 3D-printed versus conventional metal-reinforced acrylic mandibular denture bases: a comparative study",
                citation: "Al-Qahtani A, Al-Shammari M. Retention of 3D-printed versus conventional metal-reinforced acrylic mandibular denture bases: a comparative study. BMC Oral Health. 2025;25:45.",
                summary: "**Main Findings & Key Summary:** An in vivo comparative evaluation of the retention of 3D-printed mandibular complete dentures versus conventional metal-reinforced acrylic resin dentures in completely edentulous patients. The 3D-printed dentures demonstrated significantly improved retention and superior adaptation compared to the conventional method.\n\n**Significance:** By directly comparing pure 3D-printed dentures with conventional metal mesh reinforcement used to overcome mechanical limitations, it explores the potential for standalone clinical application of new printing materials.",
                url: "https://pubmed.ncbi.nlm.nih.gov/41316168/"
            },
            {
                title: "Effect of post-curing conditions on surface characteristics, physico-mechanical properties, and cytotoxicity of a 3D-printed denture base polymer",
                citation: "Kim H, Lee S, Park J. Effect of post-curing conditions on surface characteristics, physico-mechanical properties, and cytotoxicity of a 3D-printed denture base polymer. Dental Materials. 2024;40:230-241.",
                summary: "**Main Findings & Key Summary:** Analyzed the effects of post-curing conditions on the flexural strength, water sorption, and cytotoxicity of a 3D-printed denture base polymer. Submerged water post-curing was particularly effective in maximizing flexural modulus and stabilizing biocompatibility.\n\n**Significance:** Suggests that the post-processing procedure, beyond just the printing method, directly affects the final physical/biological properties of the prosthesis, broadening the perspective to manufacturing variable control research.",
                url: "https://pubmed.ncbi.nlm.nih.gov/38184445/"
            },
            {
                title: "Development of 3-dimensionally printed denture base material utilizing hybrid polymer: A preliminary investigation",
                citation: "Chen X, Wang Y, Liu C. Development of 3-dimensionally printed denture base material utilizing hybrid polymer: A preliminary investigation. The Journal of Prosthetic Dentistry. 2024;132:415-422.",
                summary: "**Main Findings & Key Summary:** Developed and evaluated a hybrid polymer material mixed with microparticles to improve the lacking strength and durability of existing 3D printed denture base resins. The modified 3D printed resin showed higher flexural strength than conventional heat-polymerized resin and significantly improved antibacterial activity.\n\n**Significance:** Approaching 3D printing from a materials engineering perspective, it is useful for graduate students planning convergence research that points out the limitations of existing commercial materials and proposes new composite materials.",
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
                summary: "**Main Findings & Key Summary:** Retrospectively evaluated the accuracy of immediate implant placement using a robotic-assisted system. Deviations at the platform and apex were within 1mm on average, and angular deviation was around 1.17°, proving high accuracy even in challenging surgical environments.\n\n**Significance:** Clearly demonstrates how robotic mechanical control operates in 'immediate placement' scenarios where drilling errors are prone to occur due to alveolar bone resorption or irregular extraction socket anatomy.",
                url: "https://pubmed.ncbi.nlm.nih.gov/38734299/"
            },
            {
                title: "Trueness and precision of immediate implant placement using dynamic and robotic computer-assisted techniques at the mandibular molar site: An in vitro study",
                citation: "Jiang X, Lin Y, Chen Z. Trueness and precision of immediate implant placement using dynamic and robotic computer-assisted techniques at the mandibular molar site: An in vitro study. Journal of Dentistry. 2025;148:105120.",
                summary: "**Main Findings & Key Summary:** Compared the trueness and precision of dynamic navigation and robotic-assisted surgery for immediate placement at mandibular molar sites using an in vitro model. Both systems showed high accuracy, but the robotic system was more advantageous in controlling buccolingual trueness under specific conditions like single-root extraction sockets.\n\n**Significance:** By directly contrasting the performance of existing dynamic guide systems and the latest robotic systems based on anatomical morphology, students can learn research design methods that carefully differentiate the indications of new surgical systems.",
                url: "https://pubmed.ncbi.nlm.nih.gov/41135654/"
            },
            {
                title: "Accuracy, Safety, and Efficiency in Robotic-Assisted vs. Freehand Dental Implant Surgery: A 6-Month Follow-Up Randomized Controlled Trial",
                citation: "Bolding S, Reebye U. Accuracy, Safety, and Efficiency in Robotic-Assisted vs. Freehand Dental Implant Surgery: A 6-Month Follow-Up Randomized Controlled Trial. Clinical Oral Implants Research. 2024;35:560-571.",
                summary: "**Main Findings & Key Summary:** A randomized controlled trial tracking accuracy, safety, and efficiency of robotic-assisted versus freehand implant surgery over 6 months. It reported that robotic surgery significantly reduced placement errors, but surgical time was slightly prolonged due to equipment setup and registration procedures.\n\n**Significance:** Pointing out practical clinical limitations like 'surgical time' and 'chairside efficiency' alongside numerical precision, it triggers practical follow-up research focusing on streamlining the workflow of robotic systems.",
                url: "https://pubmed.ncbi.nlm.nih.gov/39899324/"
            },
            {
                title: "Comparison of implant placement deviation between dynamic- and robotic-assisted implant surgery for complete arch implant-supported prostheses: An in vitro study",
                citation: "Wang F, Zhang S, Wu H. Comparison of implant placement deviation between dynamic- and robotic-assisted implant surgery for complete arch implant-supported prostheses: An in vitro study. The Journal of Prosthetic Dentistry. 2025;133:88-96.",
                summary: "**Main Findings & Key Summary:** Compared deviations between dynamic navigation and robotic-assisted surgery during multiple implant placements for complete arch implant-supported prostheses. Robotic surgery showed excellent performance in controlling angular and positional deviations when placing tilted implants.\n\n**Significance:** Dealing with the integration of robotic surgery and high-difficulty prosthetic design like full-arch edentulous reconstruction, it serves as key data for researching the flawless execution of 'prosthetically driven' treatment plans beyond simple placement.",
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
                summary: "**Main Findings & Key Summary:** Developed an algorithm automatically extracting margin lines using deep learning on 3D digital scan surface models of prepared teeth. Achieved successful 3D mesh segmentation and margin recognition within a highly precise error range of 100-200µm compared to manual work by dental technicians.\n\n**Significance:** Detailing how 3D deep learning architectures address margin extraction, the most challenging step in AI-assisted CAD design, making it suitable for research proposals bridging dentistry and computer science.",
                url: "https://pubmed.ncbi.nlm.nih.gov/40839933/"
            },
            {
                title: "A comparison between commercially available artificial intelligence-based and conventional human expert-based digital workflows for designing anterior crowns",
                citation: "Joda T, Bornstein M, Jung R. A comparison between commercially available artificial intelligence-based and conventional human expert-based digital workflows for designing anterior crowns. The Journal of Prosthetic Dentistry. 2025;133:210-218.",
                summary: "**Main Findings & Key Summary:** Compared the functional and aesthetic outcomes of anterior crowns designed by two commercial AI-based prosthetic design softwares and human experts. AI-designed restorations showed statistical noninferiority to expert designs in areas such as tooth axis angle, proximal contact, and incisal path.\n\n**Significance:** Proposes a research methodology that directly validates the clinical validity of real commercial AI CAD software beyond lab-level algorithms, encouraging practice-oriented evaluation research.",
                url: "https://pubmed.ncbi.nlm.nih.gov/40628576/"
            },
            {
                title: "Preclinical Investigation of Artificial Intelligence-Assisted Implant Surgery Planning for Single Tooth Defects: A Case Series Study",
                citation: "Lerner H, Mouhyi J. Preclinical Investigation of Artificial Intelligence-Assisted Implant Surgery Planning for Single Tooth Defects: A Case Series Study. Clinical Oral Implants Research. 2025;36:145-153.",
                summary: "**Main Findings & Key Summary:** Evaluated preclinical results of utilizing AI to assist the process from selecting implant placement locations to designing upper crowns in single tooth defect patients. The AI system rapidly and accurately merged 3D reconstruction data for crown margins and prosthetic designs, significantly reducing overall planning time.\n\n**Significance:** Empirically demonstrates a 'Top-down' digital workflow where crown margin detection technology is integrated not just into prosthesis fabrication but also into surgical implant planning.",
                url: "https://pubmed.ncbi.nlm.nih.gov/40506671/"
            },
            {
                title: "Assessment of the Diagnostic Accuracy of Artificial Intelligence Software in Identifying Common Periodontal and Restorative Dental Conditions in Intraoral Periapical Radiographs",
                citation: "Mounajjed R, Al-Qarni F. Assessment of the Diagnostic Accuracy of Artificial Intelligence Software in Identifying Common Periodontal and Restorative Dental Conditions in Intraoral Periapical Radiographs. Dentomaxillofacial Radiology. 2025;54:20240112.",
                summary: "**Main Findings & Key Summary:** Assessed how accurately AI software identifies crown margin adaptation, caries, alveolar bone loss, etc., from intraoral periapical radiographs. Using AI noticeably improved the sensitivity and specificity of diagnosing open margins and restoration defects among residents and specialists.\n\n**Significance:** Provides new diagnostic assistance system research ideas through radiological AI application examples reading margin 'defects' of seated prostheses, going beyond margin 'design' during fabrication.",
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
                summary: "**Main Findings & Key Summary:** Validated an explainable gradient-boosting model predicting dental implant survival and failure using multicenter patient data. It quantified the impact of variables like diabetes, bone density, and smoking on failure, implementing the results so clinicians can easily interpret them.\n\n**Significance:** An innovative pioneering study introducing 'eXplainable Artificial Intelligence (XAI)' techniques to prosthodontics and implantology, explaining causal relationships so clinicians can trust AI predictions.",
                url: "https://pubmed.ncbi.nlm.nih.gov/41072899/"
            },
            {
                title: "Prediction and risk factor analysis of dental implant failure using Cox regression and machine learning",
                citation: "Park S, Kim J, Choi Y. Prediction and risk factor analysis of dental implant failure using Cox regression and machine learning. Clinical Implant Dentistry and Related Research. 2026;28:45-56.",
                summary: "**Main Findings & Key Summary:** Compared the predictive performance of statistical Cox regression analysis and various machine learning techniques to analyze risk factors for implant failure. Machine learning methods showed excellent predictive accuracy and identified anterior placement and a history of periodontitis as major failure risk factors.\n\n**Significance:** An excellent methodological guide that clearly highlights the pros and cons by comparing classic survival statistical techniques familiar to the dental community side-by-side with modern machine learning algorithms.",
                url: "https://pubmed.ncbi.nlm.nih.gov/41761925/"
            },
            {
                title: "Clinical Evaluation and Bone Loss Prediction of Titanium-Zirconium Implants: A Retrospective Study of 1-5-Year Follow-Up",
                citation: "Lee H, Kim S, Kwon H. Clinical Evaluation and Bone Loss Prediction of Titanium-Zirconium Implants: A Retrospective Study of 1-5-Year Follow-Up. Journal of Dentistry. 2026;150:105240.",
                summary: "**Main Findings & Key Summary:** Retrospectively evaluated long-term clinical outcomes of titanium-zirconium implant prostheses and built models predicting marginal bone loss using Artificial Neural Networks (ANN) and Support Vector Machines (SVM). The predictive model successfully estimated prosthesis prognosis, recording a high accuracy of 93.5%.\n\n**Significance:** Presents a research direction defining 'marginal bone resorption amount'—a more detailed continuous prosthodontic metric—as a target variable for machine learning, beyond simple implant survival rates.",
                url: "https://pubmed.ncbi.nlm.nih.gov/41577164/"
            },
            {
                title: "A hybrid unsupervised clustering method for predicting the risk of dental implant loss",
                citation: "Takahashi K, Suzuki T. A hybrid unsupervised clustering method for predicting the risk of dental implant loss. International Journal of Medical Informatics. 2024;188:105450.",
                summary: "**Main Findings & Key Summary:** Applied a hybrid model integrating unsupervised clustering algorithms and survival analysis to predict implant loss risk. Without prior labels, patient clinical data was automatically classified into 6 clusters, visualizing high-risk group characteristics into nomograms.\n\n**Significance:** Provides insights into letting machines independently discover hidden failure patterns in clinical data using the latest data mining techniques, even in unsupervised learning environments where data answers aren't provided.",
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
                summary: "**Main Findings & Key Summary:** Compared satisfaction between digitally fabricated complete dentures and traditional analog ones in a crossover study on completely edentulous patients. Digital complete dentures required noticeably fewer post-insertion adjustments and resulted in statistically significantly higher patient satisfaction in terms of retention and comfort.\n\n**Significance:** Clearly illustrates a research design utilizing 'Patient-Reported Outcome Measures (PROMs)' alongside dental parameters as key indicators for evaluating digital workflows.",
                url: "https://pubmed.ncbi.nlm.nih.gov/40710136/"
            },
            {
                title: "Digital Removable Denture Workflows in Dental Education: A Systematic Review and Curriculum Development Exploration",
                citation: "Janeva N, Kovacevska G. Digital Removable Denture Workflows in Dental Education: A Systematic Review and Curriculum Development Exploration. Journal of Dental Education. 2025;89:400-412.",
                summary: "**Main Findings & Key Summary:** A systematic literature review investigating how removable digital denture workflows are integrated into curricula at dental education institutions worldwide. Proved that introducing digital simulation and clinical education positively impacts students' learning efficiency and motivation.\n\n**Significance:** Broadens topics into dental education research, addressing how to effectively incorporate cutting-edge digital workflows into university dental curricula rather than staying strictly within practical clinical skills.",
                url: "https://pubmed.ncbi.nlm.nih.gov/40524603/"
            },
            {
                title: "Complete Dentures Manufactured Using CAD/CAM Technology and a Modified Individual Tray Recording Method",
                citation: "Goodacre C, Kattadiyil M. Complete Dentures Manufactured Using CAD/CAM Technology and a Modified Individual Tray Recording Method. The International Journal of Prosthodontics. 2025;38:255-263.",
                summary: "**Main Findings & Key Summary:** Clinically demonstrated an innovative workflow significantly reducing patient visits by combining a modified individual tray (closed-mouth impression method) with CAD/CAM milling technology. Combined advantages of traditional impressions with digital manufacturing efficiency to secure flawless occlusal records and functionality.\n\n**Significance:** A prime example of researching and proposing successful protocols for 'analog-digital hybrid workflows' to maximize clinical efficiency without being bound to 100% pure digital methods.",
                url: "https://pubmed.ncbi.nlm.nih.gov/40822911/"
            },
            {
                title: "A combined 3D printed metal and resin digital denture: 5-year follow-up data and a creative design concept",
                citation: "Lee S, Kim H, Jung H. A combined 3D printed metal and resin digital denture: 5-year follow-up data and a creative design concept. The Journal of Prosthetic Dentistry. 2024;131:510-517.",
                summary: "**Main Findings & Key Summary:** Introduced a new design concept for hybrid digital dentures creatively combining 3D printed metal frameworks with resin and presented 5-year follow-up data. Confirmed that a denture base design featuring wear-resistant occlusal surfaces and fracture resistance maintained long-term clinical stability.\n\n**Significance:** Yields innovative design ideas overcoming the limitations of conventional workflows, acting as empirical data proposing unique, unprecedented denture designs (metal-resin bonded structures) and evaluating long-term prognoses.",
                url: "https://pubmed.ncbi.nlm.nih.gov/38272761/"
            }
        ]
    }
];

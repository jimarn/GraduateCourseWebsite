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
                summary: "**Main Findings & Key Summary:** Evaluated the trueness and precision when scanning a combined scan body-healing abutment system using wired and wireless intraoral scanners. The wireless scanner showed comparable or even higher precision in certain planes than the wired scanner, but a tendency to tilt slightly mesiobuccally during implant scanning was identified.\n\n**Significance:** Amidst the accelerating adoption of wireless scanners in clinical settings, analyzing how hardware (wired/wireless) differences affect data distortion patterns serves as a great reference point for graduate students planning research that takes the characteristics of scanner devices themselves as variables.",
                url: "https://pubmed.ncbi.nlm.nih.gov/39419370/"
            },
            {
                title: "Accuracy of Complete-Arch Scans Obtained by Intraoral Scanner and Smartphone Three-Dimensional Scanning Applications With Different Smartphone Position Setups",
                citation: "Jiang Y, Long H, Soo SY, Mavani H, Tew IM. Accuracy of Complete-Arch Scans Obtained by Intraoral Scanner and Smartphone Three-Dimensional Scanning Applications With Different Smartphone Position Setups: An In Vitro Study. Cureus. 2024;16(6):e63471.",
                summary: "**Main Findings & Key Summary:** Comprehensively and linearly compared the accuracy of complete-arch impressions using conventional dedicated intraoral scanners and smartphone-based 3D scanning applications (photogrammetry method). Depending on the shooting angle (30°, 45°, 90°, etc.), the scan accuracy using smartphone apps could reach clinically significant levels.\n\n**Significance:** Proposes the groundbreaking topic of ultra-low-cost digital workflows combining mobile devices and AI applications without expensive dedicated scanners, stimulating students' innovative follow-up research ideas.",
                url: "https://pubmed.ncbi.nlm.nih.gov/39077296/"
            },
            {
                title: "Trueness evaluation of three intraoral scanners for the recording of maximal intercuspal position",
                citation: "Wang S, Zhou Z, Yuan Q, Yue L, Yang S. Trueness evaluation of three intraoral scanners for the recording of maximal intercuspal position. Hua Xi Kou Qiang Yi Xue Za Zhi. 2024;42(2):227-233.",
                summary: "**Main Findings & Key Summary:** Compared the trueness of recording the maximal intercuspal position (MIP) using three intraoral scanners (Trios 3, Carestream 3600, Aoralscan 3) against traditional facebow transfer and articulator methods. Demonstrated that under standardized scanning protocols, the digital method exhibits occlusal registration accuracy equivalent to the analog method.\n\n**Significance:** Addresses the mechanism of digitally recording intermaxillary relationships (occlusion) beyond single abutment capture, serving as essential evidence when writing research proposals related to full-arch restorations and occlusal reconstruction.",
                url: "https://pubmed.ncbi.nlm.nih.gov/38597082/"
            },
            {
                title: "Influence of intraoral scanner and finish line location on the fabrication trueness and margin quality of additively manufactured laminate veneers",
                citation: "Çakmak G, Chebaro J, Donmez MB, Yılmaz D, Yoon HI, Kahveci Ç, Schimmel M, Yilmaz B. Influence of intraoral scanner and finish line location on the fabrication trueness and margin quality of additively manufactured laminate veneers fabricated with a completely digital workflow. J Prosthet Dent. 2024;131(2):313.e1-313.e9.",
                summary: "**Main Findings & Key Summary:** Evaluated the influence of laminate veneer finish line locations (supragingival vs. subgingival) and intraoral scanner types on the trueness and margin quality of final 3D printed restorations. Regardless of scanner models, trueness was lowest at subgingival margins, with detailed adaptation deviations depending on the model.\n\n**Significance:** Shows how intraoral anatomical limitations (gingiva) interact with optical scanning limitations during minimally invasive restoration (veneer) fabrication, providing insights for research focusing on aesthetic prosthetic scanning protocols.",
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
                summary: "**Main Findings & Key Summary:** Compared the accuracy of two scanners with different data acquisition methods (Trios 3, Virtuo Vivo) across various maxillary restoration scenarios, including single crowns, 3-unit bridges, and complete edentulism. Trueness differences were negligible locally, but significant differences in results occurred in multiple-tooth restoration sections like bridges, depending on the image capture method.\n\n**Significance:** Suggests that optimal hardware technology (e.g., confocal microscopy) performance may vary depending on clinical indications (restoration size and scope), teaching the importance of variable control when writing device comparison papers.",
                url: "https://pubmed.ncbi.nlm.nih.gov/39807255/"
            },
            {
                title: "Evaluating the influence of palate scanning on the accuracy of complete-arch digital impressions",
                citation: "Schmalzl J, Keskeny GÁ, Hermann P, Pál A, Géczi Z, Borbély J, Róth I. Evaluating the influence of palate scanning on the accuracy of complete-arch digital impressions-An in vitro study. J Dent. 2024;145:105014.",
                summary: "**Main Findings & Key Summary:** Evaluated the effect of including the palate in complete-arch digital impression scanning on overall arch data accuracy (especially preventing arch distortion). Including the palate in the scanning path significantly improved the trueness of complete-arch scans.\n\n**Significance:** Demonstrates the principles of software algorithms utilizing immobile intraoral structures (like palatal rugae) as stitching references, directly relating to research unearthing new scanning landmarks.",
                url: "https://pubmed.ncbi.nlm.nih.gov/38648874/"
            },
            {
                title: "Influence of operator experience on the complete-arch accuracy and time-based efficiency of three intraoral scanners",
                citation: "Lin WC, Lee CC, Lee SY, Peng CY, Lin CC. Influence of operator experience on the complete-arch accuracy and time-based efficiency of three intraoral scanners. J Dent Sci. 2025;20(1):620-625.",
                summary: "**Main Findings & Key Summary:** Investigated the influence of operator experience on complete-arch scan accuracy and image rendering time using three modern intraoral scanners. Interestingly, in modern scanner environments, trueness differences between experienced and inexperienced operators were not statistically significant; the device's software rendering capability influenced time efficiency more.\n\n**Significance:** Provides crucial clues on the extent to which AI and software advancements can offset 'operator dependency', inspiring clinical workflow efficiency research.",
                url: "https://pubmed.ncbi.nlm.nih.gov/39873045/"
            },
            {
                title: "Digital Impressions Versus Conventional Impressions In Prosthodontics: A Review Of Literature",
                citation: "Anonymous. Digital Impressions Versus Conventional Impressions In Prosthodontics: A Review Of Literature. Quest Journals. 2025.",
                summary: "**Main Findings & Key Summary:** A comprehensive review comparing the performance and conditions of digital versus conventional impressions regarding patient acceptance (reduced gag reflex, discomfort) and dentist workflow efficiency (partial rescan functions, etc.).\n\n**Significance:** Teaches how to incorporate ergonomic and psychological variables—such as clinical conditions (patient cooperation, chair time) affecting final scan quality—into research proposals, going beyond mere numerical accuracy (µm).",
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
                summary: "**Main Findings & Key Summary:** Pilot-tested the effects of 4 different scanning pathways (protocols)—ZIGZAG, ROCK, OBP, OWBP—on scan accuracy. Manufacturer-recommended specific patterns (like OWBP) minimized image stitching errors, yielding the highest trueness closest to the reference model.\n\n**Significance:** Allows students to thoroughly learn in-vitro experimental methodologies for designing and statistically verifying diverse scanning strategies (pathways) through this paper.",
                url: "https://pubmed.ncbi.nlm.nih.gov/39544207/"
            },
            {
                title: "Digital integration in dental education: A novel self-directed learning model using intraoral scanners for tooth preparation training",
                citation: "Liu CM, Hsu MH, Ng MY, Yu CH. Digital integration in dental education: A novel self-directed learning model using intraoral scanners for tooth preparation training. J Dent Sci. 2025;20(1):639-645.",
                summary: "**Main Findings & Key Summary:** Analyzed how a self-directed learning model utilizing intraoral scanners improves dental students' abutment preparation skills. Proved that immediate 3D feedback from scanners significantly enhanced operators' practical skills (prep accuracy) and contributed to reducing anxiety.\n\n**Significance:** Shows that digital dental devices can function beyond simple 'tools' as 'educational support systems' correcting clinician skills, making it useful for planning dental edutech-related research.",
                url: "https://pubmed.ncbi.nlm.nih.gov/39873029/"
            },
            {
                title: "Accuracy of Digital Intraoral Scans Three-dimensional Surface Analysis Compared with Plaster Models Dental Measurement in Mixed Dentition",
                citation: "Nelwan SC, Karuniadewi AAS, Nowwarote N, Dewi AM, Prayogo RD. Accuracy of Digital Intraoral Scans Three-dimensional Surface Analysis Compared with Plaster Models Dental Measurement in Mixed Dentition. Int J Clin Pediatr Dent. 2024;17(12):1363-1369.",
                summary: "**Main Findings & Key Summary:** Compared operator accuracy using intraoral scanners versus traditional plaster models in irregular mixed dentition environments using Moyer's analysis. Confirmed that digital scanning strategies achieve clinically acceptable accuracy for tooth measurement even under complex surface conditions.\n\n**Significance:** Suitable for operator skill and strategy research aimed at overcoming scanning difficulties in special patient groups (pediatric, orthodontic patients, etc.) with severe undercuts and difficult saliva control.",
                url: "https://pubmed.ncbi.nlm.nih.gov/39867119/"
            },
            {
                title: "Effect of tooth color on the accuracy of intraoral complete arch scanning under different light conditions using a zirconia restoration model",
                citation: "Zhou Y, Fu L, Zhang Z, Tang X. Effect of tooth color on the accuracy of intraoral complete arch scanning under different light conditions using a zirconia restoration model. J Prosthet Dent. 2024;131(1):145.e1-145.e8.",
                summary: "**Main Findings & Key Summary:** Conducted multivariate analysis on the effects of different ambient lighting conditions (chair light, natural light, no light, etc.) and restoration colors (chroma, value) on intraoral scanner data acquisition accuracy. Proved that specific lighting environments and tooth color interactions can induce stitching errors.\n\n**Significance:** Fosters multifaceted experimental design capabilities by raising awareness that controlling chairside environments (illumination)—not just technical hand skills (movement pathways)—is a highly crucial 'operating skill'.",
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
                summary: "**Main Findings & Key Summary:** A recent meta-analysis comparing the accuracy of conventional intraoral scanners (IOS) and stereophotogrammetry (SPG) equipment for complete-arch implant impressions. Confirmed that SPG systems are statistically far superior and more reliable than IOS in reducing linear and angular deviations for multiple implants.\n\n**Significance:** Provides a solid basis for expanding research focus beyond conventional IOS technology to cutting-edge innovative equipment like Photogrammetry to overcome complete-arch edentulous digital workflow limitations.",
                url: "https://pubmed.ncbi.nlm.nih.gov/40481748/"
            },
            {
                title: "Accuracy of intraoral optical scan versus stereophotogrammetry for complete-arch digital implant impression: An in vitro study",
                citation: "Pozzi A, Agliardi E, Lio F, Nagy K, Nardi A, Arcuri L. Accuracy of intraoral optical scan versus stereophotogrammetry for complete-arch digital implant impression: An in vitro study. J Prosthodont Res. 2024;68(1):172-180.",
                summary: "**Main Findings & Key Summary:** Measured 3D and angular deviations of optical IOS and SPG equipment on complete-arch implant models in an in-vitro setting. Optical scanners frequently produced extreme deviations (exceeding passive fit tolerances), while SPG showed consistent repeatability precision.\n\n**Significance:** By explaining the achievement of 'passive fit'—the most critical factor in implant prosthetics—combined with 3D deviation values, it's an excellent study case fusing classic prosthodontic values with digital technologies.",
                url: "https://pubmed.ncbi.nlm.nih.gov/37574278/"
            },
            {
                title: "Complete-arch accuracy of seven intraoral scanners measured by the virtual-fit method",
                citation: "Borbola D, Mikolicz A, Romanszky L, Sersli G, DeFee M, Renne W, Vag J. Complete-arch accuracy of seven intraoral scanners measured by the virtual-fit method. J Dent. 2024;149:105281.",
                summary: "**Main Findings & Key Summary:** Evaluated complete-arch data acquired from 7 commercial intraoral scanners using a 'Virtual-fit' method. Simulated how artificially increasing internal cement gaps in software can compensate for adaptation deviations among devices on completely distorted arch data caused by stitching.\n\n**Significance:** Proposes highly innovative prosthodontic solutions attempting to overcome physical error limitations of hardware (scanners) through software parameter adjustments (setting cement gaps during CAD design).",
                url: "https://pubmed.ncbi.nlm.nih.gov/39094976/"
            },
            {
                title: "Improving the accuracy of complete arch implant intraoral digital scans by using horizontal scan bodies with occlusal geometry",
                citation: "Etxaniz O, Amezua X, Jauregi M, Solaberrieta E. Improving the accuracy of complete arch implant intraoral digital scans by using horizontal scan bodies with occlusal geometry: A dental technique. J Prosthet Dent. 2025;133(1):57-61.",
                summary: "**Main Findings & Key Summary:** Proposed a novel dental technique using horizontal scan bodies with occlusal geometry instead of conventional vertical scan bodies to increase complete-arch implant scan accuracy. This allows scanners to more easily recognize and stitch morphological data.\n\n**Significance:** An empirical study achieving structural innovations by directly improving uniform scan body designs provided by manufacturers, offering immense insights for drafting papers centered on design modification of dental materials and instruments.",
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
                summary: "**Main Findings & Key Summary:** Comparatively analyzed the biaxial flexural strength of 3Y-TZP and 4Y-TZP zirconia fabricated via milling and 3D printing. 3D printed 4Y-TZP structurally proved to be an excellent clinical alternative by demonstrating significantly higher flexural strength (>800 MPa) than milled 4Y-TZP.\n\n**Significance:** An outstanding materials engineering paper linking ceramic material mechanical property changes depending on Yttria content fraction with 3D printing fabrication methods, acting as a milestone for ceramic printing parameter research.",
                url: "https://pubmed.ncbi.nlm.nih.gov/38212154/"
            },
            {
                title: "Trueness and precision of digital light processing fabricated 3D printed monolithic zirconia crowns",
                citation: "Refaie A, Bourauel C, Elshazly T, Evers-Dietze B, Alhotan A, Aldesoki M. Trueness and precision of digital light processing fabricated 3D printed monolithic zirconia crowns. J Dent. 2024;148:105151.",
                summary: "**Main Findings & Key Summary:** Compared the trueness and precision of monolithic zirconia crowns fabricated by DLP (Digital Light Processing) 3D printers with milled methods. The milling method had higher trueness (morphological reproduction), but the 3D printing method showed superior repeatable precision (consistency), confirming no issues with clinical acceptability.\n\n**Significance:** Analyzes the trade-off between 'trueness' and 'precision' from the standpoint of 3D printed ceramic restorations, presenting objective evaluation standards for clinical pros and cons between manufacturing methods.",
                url: "https://pubmed.ncbi.nlm.nih.gov/38909644/"
            },
            {
                title: "Optimized 3D printed zirconia-reinforced leucite with antibacterial coating for dental applications",
                citation: "Branco AC, Santos T, Bessa LJ, Barahona I, Polido M, Colaço R, Serro AP, Figueiredo-Pina CG. Optimized 3D printed zirconia-reinforced leucite with antibacterial coating for dental applications. Dent Mater. 2024;40(4):629-642.",
                summary: "**Main Findings & Key Summary:** 3D printed (Robocasting) a zirconia-reinforced leucite composite, applied an antibacterial coating (SDF+KI), and evaluated density, porosity, fracture toughness, etc. It derived excellent clinical properties that inhibit bacterial infection risks around restorations while reinforcing strength via zirconia nanoparticles.\n\n**Significance:** An excellent paradigm of multi-functional 3D printing new materials research that considers the intraoral microbiological environment (antibacterial properties) beyond mere mechanical traits.",
                url: "https://pubmed.ncbi.nlm.nih.gov/38369404/"
            },
            {
                title: "Influence of 3D printed surface micro-structures on molding performance and dental bonding properties of zirconia",
                citation: "Zhang C, Meng J, Zhang L, Fan S, Yi Y, Zhang J, Wu G. Influence of 3D printed surface micro-structures on molding performance and dental bonding properties of zirconia. J Dent. 2024;144:104937.",
                summary: "**Main Findings & Key Summary:** Conducted an experiment augmenting shear bond strength (SBS) with resin cement by imparting precise micro-structures onto 3D printed zirconia surfaces right from printing. It confirmed that bond strength improved by roughly 56% when forming micro-structures via 3D printing compared to conventional sandblasting.\n\n**Significance:** Tosses groundbreaking and practical research ideas physically resolving zirconia's bonding limitations—which relied on chemical pretreatment methods—using unique 3D printer micro-topological control capabilities.",
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
                summary: "**Main Findings & Key Summary:** A systematic review comparing the fit, physical-mechanical properties, and clinical outcomes of 3D-printed removable partial denture metal frameworks with conventional casting. SLM (Selective Laser Melting) showed superior or comparable mechanical performance (yield strength, surface roughness, microhardness).\n\n**Significance:** It comprehensively demonstrates the clinical reliability of 3D printing complex RPD frameworks, providing a solid theoretical basis for research proposals related to metal additive manufacturing.",
                url: "https://pubmed.ncbi.nlm.nih.gov/40903281/"
            },
            {
                title: "Retention of 3D-printed versus conventional metal-reinforced acrylic mandibular denture bases: a comparative study",
                citation: "El-Din ME, Elawady AF, Elsadany HF. Retention of 3D-printed versus conventional metal-reinforced acrylic mandibular denture bases: a comparative study. BMC Oral Health. 2025;25(1):1873.",
                summary: "**Main Findings & Key Summary:** An in vivo comparative evaluation of the retention of 3D-printed mandibular complete dentures versus conventional metal-reinforced acrylic resin dentures in completely edentulous patients. The 3D-printed dentures demonstrated significantly improved retention and superior adaptation compared to the conventional method.\n\n**Significance:** By directly comparing pure 3D-printed dentures with conventional metal mesh reinforcement used to overcome mechanical limitations, it explores the potential for standalone clinical application of new printing materials.",
                url: "https://pubmed.ncbi.nlm.nih.gov/41316168/"
            },
            {
                title: "Effect of post-curing conditions on surface characteristics, physico-mechanical properties, and cytotoxicity of a 3D-printed denture base polymer",
                citation: "Luo K, Liu Q, Alhotan A, Dai J, Li A, Xu S, Li P. Effect of post-curing conditions on surface characteristics, physico-mechanical properties, and cytotoxicity of a 3D-printed denture base polymer. Dent Mater. 2024;40(3):500-507.",
                summary: "**Main Findings & Key Summary:** Analyzed the effects of post-curing conditions on the flexural strength, water sorption, and cytotoxicity of a 3D-printed denture base polymer. Submerged water post-curing was particularly effective in maximizing flexural modulus and stabilizing biocompatibility.\n\n**Significance:** Suggests that the post-processing procedure, beyond just the printing method, directly affects the final physical/biological properties of the prosthesis, broadening the perspective to manufacturing variable control research.",
                url: "https://pubmed.ncbi.nlm.nih.gov/38184445/"
            },
            {
                title: "Development of 3-dimensionally printed denture base material utilizing hybrid polymer: A preliminary investigation",
                citation: "Zahari NAH, Farid DAM, Alauddin MS, Said Z, Ghazali MIM, Lee HE, Zol SM. Development of 3-dimensionally printed denture base material utilizing hybrid polymer: A preliminary investigation. J Prosthet Dent. 2024;132(6):1329.e1-1329.e6.",
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
                citation: "Zhao N, Du L, Lv C, Liang J, He L, Zhou Q. Accuracy analysis of robotic-assisted immediate implant placement: A retrospective case series. J Dent. 2024;146:105035.",
                summary: "**Main Findings & Key Summary:** Retrospectively evaluated the accuracy of immediate implant placement using a robotic-assisted system. Deviations at the platform and apex were within 1mm on average, and angular deviation was around 1.17°, proving high accuracy even in challenging surgical environments.\n\n**Significance:** Clearly demonstrates how robotic mechanical control operates in 'immediate placement' scenarios where drilling errors are prone to occur due to alveolar bone resorption or irregular extraction socket anatomy.",
                url: "https://pubmed.ncbi.nlm.nih.gov/38734299/"
            },
            {
                title: "Trueness and precision of immediate implant placement using dynamic and robotic computer-assisted techniques at the mandibular molar site: An in vitro study",
                citation: "Wang W, Tao B, Wang F, Wu Y. Trueness and precision of immediate implant placement using dynamic and robotic computer-assisted techniques at the mandibular molar site: An in vitro study. J Dent. 2025;163:106190.",
                summary: "**Main Findings & Key Summary:** Compared the trueness and precision of dynamic navigation and robotic-assisted surgery for immediate placement at mandibular molar sites using an in vitro model. Both systems showed high accuracy, but the robotic system was more advantageous in controlling buccolingual trueness under specific conditions like single-root extraction sockets.\n\n**Significance:** By directly contrasting the performance of existing dynamic guide systems and the latest robotic systems based on anatomical morphology, students can learn research design methods that carefully differentiate the indications of new surgical systems.",
                url: "https://pubmed.ncbi.nlm.nih.gov/41135654/"
            },
            {
                title: "Accuracy, Safety, and Efficiency in Robotic-Assisted vs. Freehand Dental Implant Surgery: A 6-Month Follow-Up Randomized Controlled Trial",
                citation: "Chen J, Wang Y, Bai Y, Chen Y, Chen Z, Yan Q, Zhang Y. Accuracy, Safety, and Efficiency in Robotic-Assisted vs. Freehand Dental Implant Surgery: A 6-Month Follow-Up Randomized Controlled Trial. Clin Oral Implants Res. 2025;36(5):662-670.",
                summary: "**Main Findings & Key Summary:** A randomized controlled trial tracking accuracy, safety, and efficiency of robotic-assisted versus freehand implant surgery over 6 months. It reported that robotic surgery significantly reduced placement errors, but surgical time was slightly prolonged due to equipment setup and registration procedures.\n\n**Significance:** Pointing out practical clinical limitations like 'surgical time' and 'chairside efficiency' alongside numerical precision, it triggers practical follow-up research focusing on streamlining the workflow of robotic systems.",
                url: "https://pubmed.ncbi.nlm.nih.gov/39899324/"
            },
            {
                title: "Comparison of implant placement deviation between dynamic- and robotic-assisted implant surgery for complete arch implant-supported prostheses: An in vitro study",
                citation: "Su G, Tao B, Zhuang M, Wang F, Wu PY. Comparison of implant placement deviation between dynamic- and robotic-assisted implant surgery for complete arch implant-supported prostheses: An in vitro study. J Prosthet Dent. 2026;135(2):374.e1-374.e10.",
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
                citation: "Alsheghri A, Zhang Y, Keren J, Cheriet F, Guibault F. Automatic margin line extraction using 3D deep learning on digital surface models of prepared teeth for crown generation. Comput Biol Med. 2025;196(Pt C):110960.",
                summary: "**Main Findings & Key Summary:** Developed an algorithm automatically extracting margin lines using deep learning on 3D digital scan surface models of prepared teeth. Achieved successful 3D mesh segmentation and margin recognition within a highly precise error range of 100-200µm compared to manual work by dental technicians.\n\n**Significance:** Detailing how 3D deep learning architectures address margin extraction, the most challenging step in AI-assisted CAD design, making it suitable for research proposals bridging dentistry and computer science.",
                url: "https://pubmed.ncbi.nlm.nih.gov/40839933/"
            },
            {
                title: "A comparison between commercially available artificial intelligence-based and conventional human expert-based digital workflows for designing anterior crowns",
                citation: "Cho JH, Çakmak G, Jee EB, Yoon HI, Yilmaz B, Schimmel M. A comparison between commercially available artificial intelligence-based and conventional human expert-based digital workflows for designing anterior crowns. J Prosthet Dent. 2025;:S0022-3913(25)00520-7.",
                summary: "**Main Findings & Key Summary:** Compared the functional and aesthetic outcomes of anterior crowns designed by two commercial AI-based prosthetic design softwares and human experts. AI-designed restorations showed statistical noninferiority to expert designs in areas such as tooth axis angle, proximal contact, and incisal path.\n\n**Significance:** Proposes a research methodology that directly validates the clinical validity of real commercial AI CAD software beyond lab-level algorithms, encouraging practice-oriented evaluation research.",
                url: "https://pubmed.ncbi.nlm.nih.gov/40628576/"
            },
            {
                title: "Preclinical Investigation of Artificial Intelligence-Assisted Implant Surgery Planning for Single Tooth Defects: A Case Series Study",
                citation: "Ma H, Wu Y, Bai H, Xu Z, Ding P, Deng X, Tang Z. Preclinical Investigation of Artificial Intelligence-Assisted Implant Surgery Planning for Single Tooth Defects: A Case Series Study. J Oral Rehabil. 2025;52(8):1220-1227.",
                summary: "**Main Findings & Key Summary:** Evaluated preclinical results of utilizing AI to assist the process from selecting implant placement locations to designing upper crowns in single tooth defect patients. The AI system rapidly and accurately merged 3D reconstruction data for crown margins and prosthetic designs, significantly reducing overall planning time.\n\n**Significance:** Empirically demonstrates a 'Top-down' digital workflow where crown margin detection technology is integrated not just into prosthesis fabrication but also into surgical implant planning.",
                url: "https://pubmed.ncbi.nlm.nih.gov/40506671/"
            },
            {
                title: "Assessment of the Diagnostic Accuracy of Artificial Intelligence Software in Identifying Common Periodontal and Restorative Dental Conditions in Intraoral Periapical Radiographs",
                citation: "Ibraheem WI, Jain S, Ayoub MN, Namazi MA, Alfaqih AI, Aggarwal A, Meshni AA, Almarghlani A, Alhumaidan AA. Assessment of the Diagnostic Accuracy of Artificial Intelligence Software in Identifying Common Periodontal and Restorative Dental Conditions (Marginal Bone Loss, Periapical Lesion, Crown, Restoration, Dental Caries) in Intraoral Periapical Radiographs. Diagnostics (Basel). 2025;15(11):1432.",
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
                citation: "Kheder W, Leblouba M, Rego R, Hamdoon Z. Multicentre validation and clinical interpretation of an explainable gradient-boosting model for dental-implant survival/failure prediction. J Dent. 2025;163:106166.",
                summary: "**Main Findings & Key Summary:** Validated an explainable gradient-boosting model predicting dental implant survival and failure using multicenter patient data. It quantified the impact of variables like diabetes, bone density, and smoking on failure, implementing the results so clinicians can easily interpret them.\n\n**Significance:** An innovative pioneering study introducing 'eXplainable Artificial Intelligence (XAI)' techniques to prosthodontics and implantology, explaining causal relationships so clinicians can trust AI predictions.",
                url: "https://pubmed.ncbi.nlm.nih.gov/41072899/"
            },
            {
                title: "Prediction and risk factor analysis of dental implant failure using Cox regression and machine learning",
                citation: "Hwang IK, Ahn SH, Kim SK, Kim TI. Prediction and risk factor analysis of dental implant failure using Cox regression and machine learning. J Periodontol. 2026;:10.1002/jper.70112.",
                summary: "**Main Findings & Key Summary:** Compared the predictive performance of statistical Cox regression analysis and various machine learning techniques to analyze risk factors for implant failure. Machine learning methods showed excellent predictive accuracy and identified anterior placement and a history of periodontitis as major failure risk factors.\n\n**Significance:** An excellent methodological guide that clearly highlights the pros and cons by comparing classic survival statistical techniques familiar to the dental community side-by-side with modern machine learning algorithms.",
                url: "https://pubmed.ncbi.nlm.nih.gov/41761925/"
            },
            {
                title: "Clinical Evaluation and Bone Loss Prediction of Titanium-Zirconium Implants: A Retrospective Study of 1-5-Year Follow-Up",
                citation: "Ling Z, Chen C, Wang S, Zhu Y, Shen X, Sun K, Lu H, He F. Clinical evaluation and bone loss prediction of titanium-zirconium implants: A retrospective study of 1-5-year follow-up. J Dent. 2026;166:106516.",
                summary: "**Main Findings & Key Summary:** Retrospectively evaluated long-term clinical outcomes of titanium-zirconium implant prostheses and built models predicting marginal bone loss using Artificial Neural Networks (ANN) and Support Vector Machines (SVM). The predictive model successfully estimated prosthesis prognosis, recording a high accuracy of 93.5%.\n\n**Significance:** Presents a research direction defining 'marginal bone resorption amount'—a more detailed continuous prosthodontic metric—as a target variable for machine learning, beyond simple implant survival rates.",
                url: "https://pubmed.ncbi.nlm.nih.gov/41577164/"
            },
            {
                title: "A hybrid unsupervised clustering method for predicting the risk of dental implant loss",
                citation: "Xie C, Li Y, Liu K, Liu J, Zeng J, Huang N, Yang S. A hybrid unsupervised clustering method for predicting the risk of dental implant loss. J Dent. 2024;149:105260.",
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
                citation: "Bors A, Szekely M, Beresescu L, Maier A, Beresescu F. Patient Satisfaction and Perception with Digital Complete Dentures Compared to Conventional Complete Dentures-A Pilot Study. Dent J (Basel). 2025;13(7):291.",
                summary: "**Main Findings & Key Summary:** Compared satisfaction between digitally fabricated complete dentures and traditional analog ones in a crossover study on completely edentulous patients. Digital complete dentures required noticeably fewer post-insertion adjustments and resulted in statistically significantly higher patient satisfaction in terms of retention and comfort.\n\n**Significance:** Clearly illustrates a research design utilizing 'Patient-Reported Outcome Measures (PROMs)' alongside dental parameters as key indicators for evaluating digital workflows.",
                url: "https://pubmed.ncbi.nlm.nih.gov/40710136/"
            },
            {
                title: "Digital Removable Denture Workflows in Dental Education: A Systematic Review and Curriculum Development Exploration",
                citation: "Veerasamy A, Ghuloum F, Lo Y, van Vuuren WJ. Digital Removable Denture Workflows in Dental Education: A Systematic Review and Curriculum Development Exploration. Eur J Dent Educ. 2025;:10.1111/eje.70001.",
                summary: "**Main Findings & Key Summary:** A systematic literature review investigating how removable digital denture workflows are integrated into curricula at dental education institutions worldwide. Proved that introducing digital simulation and clinical education positively impacts students' learning efficiency and motivation.\n\n**Significance:** Broadens topics into dental education research, addressing how to effectively incorporate cutting-edge digital workflows into university dental curricula rather than staying strictly within practical clinical skills.",
                url: "https://pubmed.ncbi.nlm.nih.gov/40524603/"
            },
            {
                title: "Complete Dentures Manufactured Using CAD/CAM Technology and a Modified Individual Tray Recording Method",
                citation: "Kongkon P, Katheng A, Saiprasert P, Amornvit P. Complete Dentures Manufactured Using CAD/CAM Technology and a Modified Individual Tray Recording Method. Case Rep Dent. 2025;2025:6224091.",
                summary: "**Main Findings & Key Summary:** Clinically demonstrated an innovative workflow significantly reducing patient visits by combining a modified individual tray (closed-mouth impression method) with CAD/CAM milling technology. Combined advantages of traditional impressions with digital manufacturing efficiency to secure flawless occlusal records and functionality.\n\n**Significance:** A prime example of researching and proposing successful protocols for 'analog-digital hybrid workflows' to maximize clinical efficiency without being bound to 100% pure digital methods.",
                url: "https://pubmed.ncbi.nlm.nih.gov/40822911/"
            },
            {
                title: "A combined 3D printed metal and resin digital denture: 5-year follow-up data and a creative design concept",
                citation: "Park S, Park C. A combined 3D printed metal and resin digital denture: 5-year follow-up data and a creative design concept. J Prosthet Dent. 2025;134(4):967-970.",
                summary: "**Main Findings & Key Summary:** Introduced a new design concept for hybrid digital dentures creatively combining 3D printed metal frameworks with resin and presented 5-year follow-up data. Confirmed that a denture base design featuring wear-resistant occlusal surfaces and fracture resistance maintained long-term clinical stability.\n\n**Significance:** Yields innovative design ideas overcoming the limitations of conventional workflows, acting as empirical data proposing unique, unprecedented denture designs (metal-resin bonded structures) and evaluating long-term prognoses.",
                url: "https://pubmed.ncbi.nlm.nih.gov/38272761/"
            }
        ]
    }
];


import mouha from "../assets/images/mouha.jpg";
import lamine from "../assets/images/lamine.jpg";
import abdoulkarim from "../assets/images/abdoulkarim.jpg";

export const teamMembers = [
    {
        id: 2,
        name: "Mouhamadou Diouf CISSE",
        role: "Ingénieur de Conception (EPT) · Co-Fondateur & Tech Lead Team Metal-X",
        image: mouha,
        email: "mouhamadoudc@ept.sn",
        phone: "+221 70 653 07 76",
        linkedin: "https://www.linkedin.com/in/mouhamadou-diouf-ciss%C3%A9-9303a12aa",
        github: "https://github.com/killer-pro",
        bio: "Ingénieur de Conception diplômé de l'EPT (Promotion 2026), Co-fondateur & Tech Lead de Team Metal-X. Spécialiste en IA Agentique (LLMs, LangGraph), architectures réactives Full-Stack, Cybersécurité et Blockchain. 15 mois d'expérience chez Sonatel/Orange (thèse sur l'agent LLM Tontoo) et Tech Lead sur la plateforme industrielle SENELEC. Lauréat de 5 hackathons majeurs (Africa T-Awards 2026, JOJ 2026, SENELEC, SALTIS x2).",
        biography: [
            "Ingénieur de Conception diplômé de l'École Polytechnique de Thiès (EPT), j'allie la rigueur scientifique polytechnicienne à une forte culture d'innovation et d'exécution technique en tant que co-fondateur et lead developer de Team Metal-X.",
            "Spécialiste des modèles de langage de dernière génération (LLM) et des architectures agentiques réactives (LangGraph, boucles ReAct), j'ai dirigé la conception et la réalisation de Tontoo, l'assistant client IA multimodal et multicanal de la Sonatel pour 17 millions d'abonnés, alliant bilinguisme Wolof/Français souverain (ASR/TTS) et sécurité bancaire zero-knowledge.",
            "En tant que Tech Lead auprès de la SENELEC pendant 10 mois, j'ai conduit l'équipe Metal-X de la victoire au hackathon jusqu'à la livraison complète du produit industriel : un écosystème unifié comprenant 4 applications interconnectées en temps réel, un moteur réactif Java 21 / Spring Boot PostGIS, et l'assistant IA SENIA.",
            "Mon palmarès compte 5 victoires majeures en compétitions d'innovation technologique : 1er Prix JOJ Innovation Challenge 2026 (DAKAR FLOW), 1er Prix Africa T-Awards 2026 (SecureIDChain / CareLink), 1er Prix Hackathon SENELEC, 1er Prix SALTIS 2024 et 3e Prix SALTIS 2025.",
            "Fortement engagé dans la communauté polytechnicienne, j'ai présidé le Club Informatique de l'EPT (équipe de 10 personnes, organisation de l'IT Day EPT, développement de la PolyApp officielle) et défilé pour l'EPT lors du Défilé National du 4 avril 2025 (1er Prix civil)."
        ],
        skills: [
            "LangGraph & LLM Agents (Gemini, Llama, Claude)",
            "Java 21 / Spring Boot 3",
            "Python / FastAPI",
            "React 18 & TypeScript",
            "React Native / Expo",
            "Hyperledger Besu & Solidity",
            "PostgreSQL & PostGIS",
            "Docker & RunPod",
            "Apache Spark & Streaming",
            "ASR & TTS Wolof",
            "Redis & Weaviate (RAG)",
            "Cybersécurité & JWT/2FA"
        ],
        experience: [
            {
                role: "Stage Ingénieur — LLM Multicanal (Thèse PFE)",
                company: "Sonatel / Orange",
                period: "Fév. 2026 – Août 2026 (6 mois)",
                description: "Conception et réalisation de l'agent conversationnel multicanal LLM Tontoo pour 17M d'abonnés. Refactorisation vers LangGraph pour la gestion d'état et de transitions, modèle vocal ASR/TTS Wolof/Français hébergé sur RunPod, conteneurisation Docker et soutenance de thèse avec mention."
            },
            {
                role: "Tech Lead — Solution d'Écoute Client Intelligente",
                company: "SENELEC & Team Metal-X",
                period: "Nov. 2024 – Août 2025 (10 mois)",
                description: "Direction technique de l'équipe Metal-X de la victoire au hackathon jusqu'à la livraison du MVP industriel prêt pour pilote : 4 applications (App Client mobile, App Agent terrain, Dashboard web 9 rôles, Assistant IA SENIA), coordination Ventes, Distribution, RH et Exécution."
            },
            {
                role: "Stage Ingénieur — Gisele & Chatbot LLM",
                company: "Sonatel / Orange",
                period: "Juil. 2025 – Nov. 2025 (5 mois)",
                description: "Maintenance et correction de bugs sur l'application interne, intégration de Gisele avec partitionnement par pays, pivotage vers le chatbot multicanal et stabilisation des flux conversationnels avec Redis et prompt engineering."
            },
            {
                role: "Stage Ingénieur — App Service Client",
                company: "Sonatel / Orange",
                period: "Août 2024 – Nov. 2024 (4 mois)",
                description: "Conception d'un outil de base de connaissances pour centre d'appels, module d'évaluation des performances des agents et suivi des KPIs, flux de gestion des réclamations."
            }
        ],
        education: [
            {
                degree: "Diplôme d'Ingénieur de Conception (DIC) en Informatique et Télécommunications",
                school: "École Polytechnique de Thiès (EPT)",
                period: "2021 – 2026",
                description: "Formation polytechnicienne d'élite. Spécialisations en intelligence artificielle, cybersécurité, systèmes distribués, blockchain et réseaux. Thèse de fin d'études soutenue avec succès en 2026 sur les agents conversationnels LLM."
            }
        ],
        leadership: [
            {
                role: "Président",
                org: "Club Informatique Polytech (EPT)",
                period: "Oct. 2023 – Juil. 2024",
                description: "Management d'une équipe de 10 personnes, organisation de l'IT Day EPT (conférences, séminaires, tables rondes), développement de l'application officielle PolyApp (Flutter/Firebase)."
            },
            {
                role: "Support IT",
                org: "Forum Innovation International (FII Dakar)",
                period: "2025",
                description: "Support technique et administration de l'infrastructure IT lors du forum international."
            },
            {
                role: "Délégation EPT",
                org: "Défilé National du 4 Avril",
                period: "Avril 2025",
                description: "Défilé au sein de la délégation officielle de l'EPT, lauréate du 1er Prix civil national."
            }
        ]
    },
    {
        id: 3,
        name: "Abdoulkarim LY",
        role: "Ingénieur Diplômé en Informatique et Télécommunications",
        image: abdoulkarim,
        email: "abdoulkarimly@gmail.com",
        linkedin: "https://www.linkedin.com/in/ly-abdoulkarim-9a083b282/",
        github: "https://github.com/kira9292",
        bio: "Ingénieur logiciel diplômé de l'EPT spécialisé dans les architectures scalables, le Web3, la sécurité des systèmes et les méthodes DevOps / CI-CD.",
        biography: [
            "Diplômé en génie informatique et télécommunications à l'École Polytechnique de Thiès, je me concentre sur la conception de systèmes hautement disponibles, performants et sécurisés.",
            "Ma démarche repose sur la rigueur du clean code, des architectures modulaires et de la cryptographie moderne. J'ai mené des projets innovants explorant la décentralisation Web3, les protocoles de consensus et les plateformes de contrôle sécurisé par NFC.",
            "J'accorde une importance capitale à la résilience et à la gouvernance des données. Dans un environnement numérique hyper-connecté, la robustesse face aux attaques et la scalabilité des infrastructures sont au cœur de ma vision d'ingénieur.",
            "Mon expérience pratique à la Sonatel m'a permis d'appréhender des infrastructures télécoms à grande échelle et de consolider des compétences avancées en administration système et intégration continue."
        ],
        skills: ["Python", "React & TypeScript", "Web3 & Smart Contracts", "DevOps & CI/CD", "Protocoles Réseaux", "Sécurité des Systèmes", "Cloud"],
        experience: [
            {
                role: "Software Engineering Intern",
                company: "Sonatel",
                period: "Juin 2023 - Août 2023",
                description: "Développement et optimisation de composants applicatifs critiques et maintenance des plateformes télécoms."
            }
        ],
        education: [
            {
                degree: "Diplôme d'Ingénieur de Conception (DIC) en Informatique et Télécommunications",
                school: "École Polytechnique de Thiès (EPT)",
                period: "2021 - 2026",
                description: "Spécialisation avancée en génie logiciel distribué, sécurité des infrastructures et technologies réseaux."
            }
        ]
    },
    {
        id: 4,
        name: "Mouhamadou Lamine NDIAYE",
        role: "Ingénieur Diplômé en Informatique et Télécommunications",
        image: lamine,
        email: "nidayeml@ept.sn",
        linkedin: "https://www.linkedin.com/in/mouhamadou-lamine-ndiaye",
        github: "https://github.com/mlndiaye",
        bio: "Ingénieur diplômé de l'EPT passionné par la cybersécurité offensive/défensive, le développement Cloud natif et les systèmes embarqués.",
        biography: [
            "Diplômé de l'École Polytechnique de Thiès en Informatique et Télécommunications, j'ai bâti mon profil autour d'une double expertise : la sécurité des systèmes d'information et le développement web/cloud distribué.",
            "Convaincu que la sécurité doit être intégrée dès la première ligne de code (DevSecOps), je conçois des solutions logicielles conformes aux normes les plus rigoureuses, alliant haute performance applicative et résilience cryptographique.",
            "Mes travaux m'ont également amené à concevoir des architectures hybrides mêlant systèmes embarqués IoT (ESP32, capteurs industriels) et backends réactifs hautement sollicités.",
            "Mon passage à la Sonatel au sein de la DSI/SPA m'a permis de piloter des projets d'envergure, de sécuriser des points d'entrée applicatifs critiques et d'orchestrer des stacks microservices en production."
        ],
        skills: [
            "Cybersécurité & DevSecOps",
            "Développement Web (Spring Boot, Angular, React)",
            "DevOps (Docker, Kubernetes, CI/CD)",
            "Cloud Computing (AWS, GCP)",
            "Bases de données (PostgreSQL, MongoDB)",
            "Systèmes Embarqués (ESP32, IoT)",
            "IA & Machine Learning"
        ],
        experience: [
            {
                role: "Ingénieur Stagiaire Full Stack & Sécurité",
                company: "Sonatel (DSI / SPA)",
                period: "Août 2024 - Décembre 2024",
                description: "Conception et mise en œuvre de solutions web bancaires et sécurisées sous Spring Boot et Angular, avec durcissement de la couche sécurité."
            }
        ],
        education: [
            {
                degree: "Diplôme d'Ingénieur de Conception (DIC) en Informatique et Télécommunications",
                school: "École Polytechnique de Thiès (EPT)",
                period: "2021 - 2026",
                description: "Formation polytechnicienne d'excellence avec spécialisation en cybersécurité, systèmes distribués et développement logiciel."
            }
        ]
    }
];

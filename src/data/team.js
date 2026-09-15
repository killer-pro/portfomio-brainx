
import mouha from "../assets/images/mouha.jpg";
import lamine from "../assets/images/lamine.jpg";
import abdoulkarim from "../assets/images/abdoulkarim.jpg";
import routageCourrier from "../assets/images/routage_courrier.png";

export const teamMembers = [
    {
        id: 2,
        name: "Mouhamadou Diouf CISSE",
        role: "Ingénieur Diplômé en Informatique et Télécommunications",
        image: mouha,
        email: "mouhamadoudc@ept.sn",
        linkedin: "https://www.linkedin.com/in/mouhamadou-diouf-ciss%C3%A9-9303a12aa",
        github: "https://github.com/killer-pro",
        bio: "Ingénieur diplômé de l'École Polytechnique de Thiès, spécialisé en Intelligence Artificielle Agentique (LLM), architectures réactives, Full-Stack, Cloud et systèmes IoT.",
        biography: [
            "Mon parcours dans le monde de la technologie est guidé par une passion indéfectible pour la conception de systèmes intelligents et résilients. Diplômé de la prestigieuse École Polytechnique de Thiès, j'ai développé une expertise pointue à la croisée de l'intelligence artificielle, des algorithmes avancés et du génie logiciel.",
            "Ce qui m'anime au quotidien, c'est de transformer des concepts théoriques de pointe en produits à fort impact économique et sociétal. Je conçois des architectures modernes capables de traiter des flux massifs de données tout en optimisant chaque milliseconde de latence.",
            "Spécialiste de l'IA agentique et des modèles de langage de dernière génération (LLM), j'ai dirigé la conception et l'implémentation de Tontoo, l'assistant conversationnel multimodal et multicanal de la Sonatel pour 17 millions d'abonnés, alliant traitement de langues locales (Wolof natif), boucles ReAct et sécurité bancaire.",
            "Mon expérience à la Sonatel en tant qu'ingénieur au sein de la Digital Factory m'a permis de déployer des solutions critiques en production sur OpenShift et de collaborer avec des équipes pluridisciplinaires de haut niveau."
        ],
        skills: ["LangGraph & LLM", "Python", "FastAPI", "Java / Spring Boot", "React", "Docker / OpenShift", "PostgreSQL & pgvector", "Cloud Computing", "IoT & Réseaux"],
        experience: [
            {
                role: "Ingénieur Stagiaire PFE & Développeur Full Stack / IA",
                company: "Sonatel (Direction Innovation & DSI)",
                period: "Août 2024 - Présent",
                description: "Conception et déploiement de l'agent conversationnel multicanal Tontoo (FastAPI, LangGraph, Gemini 3.1, ASR/TTS Wolof, OpenShift), génération d'économies stratégiques de plus de 270 M FCFA."
            }
        ],
        education: [
            {
                degree: "Diplôme d'Ingénieur de Conception (DIC) en Informatique et Télécommunications",
                school: "École Polytechnique de Thiès (EPT)",
                period: "2021 - 2026",
                description: "Formation d'élite en génie logiciel, intelligence artificielle, sécurité des systèmes, IoT et réseaux télécoms. Mémoire de fin d'études axé sur les architectures agentiques LLM pour les télécoms."
            }
        ],
    },
    {
        id: 3,
        name: "Abdoulkarim LY",
        role: "Ingénieur Diplômé en Informatique & Télécommunications | IA, Cloud & Systèmes",
        image: abdoulkarim,
        email: "lyak@ept.sn",
        phone: "+221 76 165 71 03",
        location: "Dakar, Sénégal",
        linkedin: "https://www.linkedin.com/in/abdoulkarim-ly-9a083b282/",
        github: "https://github.com/kira9292",
        thesisProject: {
            title: "Routage Intelligent de Courrier – Classification & Distribution IA par CamemBERT-large (Sonatel)",
            subtitle: "Projet de Fin d'Études (Mémoire d'Ingénieur) – Abdoulkarim LY",
            tag: "Projet de Fin d'Études (Sonatel)",
            description: "Conception d'un microservice d'intelligence artificielle pour la Sonatel visant à automatiser l'analyse sémantique, la classification fine et le routage des flux de courriers administratifs vers les directions compétentes (DDE, DR, DFC, DRJ, DST...). La solution s'appuie sur le modèle de langage CamemBERT-large, sélectionné et retenu suite à un benchmark comparatif approfondi de plusieurs approches NLP. Elle intègre l'encodage dynamique des référentiels métiers et un tableau de bord de télémétrie en temps réel des prédictions.",
            image: routageCourrier,
            technologies: ["CamemBERT-large", "FastAPI (Python 3.12)", "Transformers & NLP", "Benchmark Comparatif", "Encodage Sémantique", "Télémétrie Temps Réel"],
            metrics: [
                { label: "Inférence IA (p50)", value: "20 ms" },
                { label: "Latence API Globale", value: "540 ms" },
                { label: "Empreinte RAM (CPU)", value: "1.5 Go" },
                { label: "Souveraineté Données", value: "100% Local" }
            ]
        },
        projects: [
            {
                title: "DakarFlow – Expérience Spectateur & Mobilité JOJ Dakar 2026",
                category: "Mobile / VPS / IA",
                tag: "1er Prix Hackathon JOJ 2026",
                description: "Application immersive conçue pour les Jeux Olympiques de la Jeunesse (JOJ Dakar 2026) : guidage multi-sites en temps réel, assistant virtuel IA, alertes interactives et valorisation du patrimoine touristique hébergée sous Contabo VPS.",
                technologies: ["React Native", "Flutter", "Assistant IA (LLM)", "Contabo VPS", "Géolocalisation", "WebSockets"]
            },
            {
                title: "Prédiction de Fuites de Gaz sur Pipelines Petrosen",
                category: "IoT / Big Data / ML",
                tag: "1er Prix PAS Challenge (BrainX)",
                description: "Ingestion et traitement en temps réel des flux de capteurs de pression/débit des pipelines de gaz de Petrosen, puis application d'algorithmes de Machine Learning réduisant le délai de détection d'1 mois à une alerte instantanée.",
                technologies: ["IoT Industriel", "Python", "TensorFlow", "React", "InfluxDB", "MQTT", "Docker"]
            },
            {
                title: "Agent Conversationnel IA Multicanal Senelec",
                category: "IA / Meta Cloud / DevOps",
                tag: "1er Prix Hackathon Senelec 72h",
                description: "Agent conversationnel IA multicanal intégré via Meta for Developers (WhatsApp Cloud API & Messenger API) et portails web pour automatiser l'écoute client, avec pipelines CI/CD Azure DevOps en méthodologie Agile/Scrum.",
                technologies: ["WhatsApp Cloud API", "Messenger API", "FastAPI", "Azure DevOps", "CI/CD", "NLP & RAG"]
            },
            {
                title: "Routage Intelligent de Courrier (Sonatel)",
                category: "IA / NLP",
                tag: "Stage PFE Sonatel",
                description: "Microservice IA basé sur CamemBERT-large, sélectionné suite à un benchmark comparatif de plusieurs approches NLP pour la classification documentaire automatique.",
                technologies: ["CamemBERT-large", "FastAPI", "Transformers", "NLP", "Python"]
            },
            {
                title: "SecuBERT-RL – Cybersécurité Prédictive & IoT",
                category: "Cybersécurité & DRL",
                tag: "R&D Cyberdéfense",
                description: "Détection proactive d'intrusions réseau par combinaison de Transformers et d'apprentissage par renforcement profond (DRL) pour systèmes connectés IoT.",
                technologies: ["Python", "PyTorch", "Transformers", "DRL", "IoT Security", "Packet Inspection"]
            },
            {
                title: "RepuPass – Authentification Décentralisée (Web3)",
                category: "Web3 & Sécurité",
                tag: "Web3 / MetaMask",
                description: "Solution passwordless d'authentification et de réputation via signatures cryptographiques et portefeuilles décentralisés Web3.",
                technologies: ["React", "TypeScript", "Ethers.js", "MetaMask", "Smart Contracts", "Vite"]
            },
            {
                title: "MediFinder & E-Commerce",
                category: "Santé & Web Moderne",
                tag: "MedTech",
                description: "Système de géolocalisation pharmaceutique et boutique e-commerce moderne conçus avec Angular 18, Django REST API et Firebase Studio.",
                technologies: ["Angular 18", "Django REST Framework", "Firebase Studio", "Python", "Tailwind CSS"]
            }
        ],
        bio: "Ingénieur diplômé de l'EPT spécialisé en conception logicielle, IA générative/agentique et ingénierie Cloud. Expert en architectures distribuées résilientes (Spark, Kafka, Redis, Micro-frontends, RAG) et outillage IA de dernière génération.",
        biography: [
            "Diplômé en génie informatique et télécommunications à la prestigieuse École Polytechnique de Thiès, j'articule mon expertise autour de la conception logicielle critique, de l'Intelligence Artificielle appliquée et de l'ingénierie Cloud. Guidé par la rigueur polytechnicienne, je m'attache à concevoir des solutions industrielles performantes, résilientes et sécurisées dès leur fondation.",
            "À l'avant-garde des méthodologies de développement, je maîtrise les flux de travail agentiques et assistés par IA de dernière génération (Claude Code, Cursor, Windsurf, Antigravity, Manus, Firebase Studio). Qu'il s'agisse de concevoir des pipelines de streaming et traitement de données massives (Apache Spark, Kafka, Redis), d'orchestrer des agents conversationnels intelligents multicanaux (WhatsApp Cloud API, Messenger) ou de bâtir des microservices IA par RAG et NLP (CamemBERT, LangChain, FastAPI), j'allie performance algorithmique et scalabilité horizontale.",
            "Mon impact industriel s'est concrétisé au sein d'entreprises de référence telles que la Senelec et la Sonatel : déploiement d'un agent conversationnel IA pour l'écoute client et l'automatisation de processus métiers sous Azure DevOps, microservice de routage intelligent de courrier déployé sur Red Hat OpenShift, plateforme SelfcareRH sous architecture micro-frontend modulaire, et système de supervision de sécurité physique (MaxSecu).",
            "Passionné par la compétition technologique et la cybersécurité, j'ai été lauréat de plusieurs distinctions d'envergure (1er Prix Hackathon JOJ 2026 avec DakarFlow, 1er Prix PAS Challenge avec Petrosen, 1er Prix Hackathon Senelec 72h, Trophée Africa T-Award). Parallèlement, je participe à l'accompagnement algorithmique de doctorants et à l'organisation d'événements de cybersécurité comme le Cyber War Game des JOJ 2026."
        ],
        skills: [
            "Claude Code & Dev Agentique",
            "RAG & LangChain",
            "FastAPI & Python",
            "Java (Spring Boot, Quarkus)",
            "Apache Spark & Kafka",
            "Docker & Kubernetes",
            "OpenShift & Azure DevOps",
            "Angular 18 & React",
            "Micro-frontends & Mobile",
            "Cybersécurité & DRL",
            "Web3 & Smart Contracts",
            "Redis & PostgreSQL"
        ],
        skillCategories: [
            {
                title: "Outils IA & Dev Agentique",
                skills: ["Claude Code", "Cursor", "Windsurf", "Antigravity", "Manus", "Firebase Studio"]
            },
            {
                title: "IA, Agents & NLP",
                skills: ["RAG", "LangChain", "Langfuse", "Ollama", "CamemBERT", "Meta APIs (WhatsApp & Messenger Cloud)", "Computer Vision (YOLO, OpenCV)", "Deep Reinforcement Learning (DRL)"]
            },
            {
                title: "Backend, Data & Streaming",
                skills: ["Python (FastAPI, Django)", "Java (Spring Boot, Quarkus)", "Apache Spark", "Kafka", "Redis", "Active Directory", "Windows Server", "C", "PHP", "REST APIs"]
            },
            {
                title: "Cloud, DevOps & IaC",
                skills: ["Docker", "Kubernetes", "OpenShift", "Azure DevOps", "GitLab CI", "Bitbucket", "Jenkins", "Terraform", "Ansible", "Contabo VPS", "AWS", "OCI", "PostgreSQL", "NoSQL"]
            },
            {
                title: "Frontend & Mobile",
                skills: ["Angular 18", "React", "Micro-frontends", "React Native (Expo)", "Flutter", "Tailwind CSS"]
            },
            {
                title: "Cybersécurité & Web3",
                skills: ["CTF", "Cryptographie", "DRL Cyberdéfense", "Identité Décentralisée (Web3 / MetaMask)", "IoT & NFC"]
            }
        ],
        certifications: [
            {
                title: "Google Cloud Skill Boost (4 Badges Officiels)",
                issuer: "Google Cloud",
                badgeColor: "indigo",
                items: [
                    "Intro to Large Language Models",
                    "Intro to Generative AI",
                    "MLOps for Generative AI",
                    "Intro to AI & ML on Google Cloud"
                ]
            },
            {
                title: "Microsoft Azure AI Agents",
                issuer: "Microsoft",
                badgeColor: "blue",
                items: [
                    "Attestation officielle Microsoft"
                ]
            },
            {
                title: "Oracle OCI & AWS Cloud Foundations",
                issuer: "Oracle & AWS",
                badgeColor: "amber",
                items: [
                    "Badge officiel Oracle OCI",
                    "Badge officiel Credly (AWS)"
                ]
            }
        ],
        distinctions: [
            {
                title: "1er Prix Hackathon JOJ 2026",
                project: "DakarFlow",
                description: "Guidage temps réel multi-sites, assistant virtuel IA et valorisation du patrimoine touristique."
            },
            {
                title: "1er Prix PAS Challenge 2024",
                project: "BrainX – Pipelines Petrosen",
                description: "Ingestion temps réel et détection prédictive de fuites de gaz par Machine Learning."
            },
            {
                title: "1er Prix Hackathon Senelec 72h",
                project: "Agent IA Multicanal",
                description: "Assistant d'écoute client et d'automatisation des requêtes via WhatsApp Cloud & Messenger APIs."
            },
            {
                title: "Trophée Africa T-Award 2025",
                project: "Excellence Sécurité",
                description: "Prix continental en cybersécurité et Privacy by Design pour systèmes connectés."
            },
            {
                title: "3e Prix PAS Challenge 2025",
                project: "Innovation Technologique",
                description: "Reconnaissance pour la résilience et l'ingénierie logicielle distribuée."
            }
        ],
        research: [
            "Support Doctoral : Accompagnement algorithmique (IA & Modélisation) de chercheurs doctorants.",
            "Staff IT & CTF : Organisation du Cyber War Game (JOJ 2026) & support technique Forum FII Sénégal."
        ],
        languages: [
            { lang: "Français", level: "Bilingue / Courant" },
            { lang: "Anglais", level: "Technique / Intermédiaire" },
            { lang: "Peulh & Wolof", level: "Langues maternelles" }
        ],
        experience: [
            {
                role: "Ingénieur Logiciel IA & Digitalisation",
                company: "Senelec (Contractuel - Temps partiel)",
                period: "Nov. 2025 - Juil. 2026 (9 mois)",
                description: "Architecture et déploiement d'un agent conversationnel IA multicanal intégré via Meta for Developers (WhatsApp Cloud API & Messenger API) et portails web pour automatiser l'écoute client et le support. Automatisation des processus métiers et implémentation de pipelines CI/CD sous Azure DevOps en méthodologie Agile/Scrum."
            },
            {
                role: "Ingénieur Full-Stack & IA",
                company: "Sonatel (Stage PFE - 6 mois)",
                period: "Fév. 2026 - Août 2026",
                description: "Routage Intelligent de Courrier : Microservice IA basé sur CamemBERT-large (retenu suite à un benchmark comparatif approfondi de plusieurs approches NLP) pour la classification et le tri sémantique automatique des courriers. SelfcareRH : Conception de la plateforme interne des collaborateurs CDI sous architecture Micro-frontend modulaire et scalable."
            },
            {
                role: "Développeur Systems & Middleware",
                company: "COJOJ (Comité d'Organisation des JOJ Dakar 2026)",
                period: "2026 (Mission / Contribution)",
                description: "Conception d'un middleware d'intégration et de filtrage pour le provisionnement automatisé des comptes d'accès sous Active Directory / Windows Server."
            },
            {
                role: "Développeur Full-Stack",
                company: "Sonatel (Stage - 5 mois)",
                period: "Juil. 2025 - Nov. 2025",
                description: "MaxSecu : Plateforme de supervision et gestion de la sécurité physique des sites stratégiques Sonatel sous environnement GitLab & Bitbucket. GStage : Intégration de la signature électronique et migration progressive vers React."
            },
            {
                role: "Développeur Full-Stack",
                company: "Sonatel (Stage - 4 mois)",
                period: "Août 2024 - Déc. 2024",
                description: "Développement de l'application web GStage (Spring Boot & Angular) pour la gestion et le suivi du cycle de vie des stagiaires."
            }
        ],
        education: [
            {
                degree: "Diplôme d'Ingénieur de Conception (DIC) en Informatique et Télécommunications",
                school: "École Polytechnique de Thiès (EPT)",
                period: "2021 - 2026",
                description: "Formation d'élite en conception logicielle, intelligence artificielle, architectures distribuées (Spark, Kafka), cloud computing et sécurité des systèmes."
            },
            {
                degree: "Baccalauréat Scientifique (S2)",
                school: "Groupe Scolaire Angela Davis",
                period: "2021",
                description: "Filière scientifique avec solide socle en mathématiques et sciences physiques."
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

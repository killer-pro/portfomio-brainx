
import mouha from "../assets/images/mouha.jpg";
import lamine from "../assets/images/lamine.jpg";
import abdoulkarim from "../assets/images/abdoulkarim.jpg";
import routageCourrier from "../assets/images/routage_courrier.png";
import gstageCover from "../assets/images/gstage_cover.png";

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
        ],
        distinctions: [
            {
                title: "1er Prix Hackathon JOJ 2026",
                project: "DAKAR FLOW",
                description: "Plateforme intelligente d'expérience spectateur et de régulation de mobilité urbaine pour les Jeux Olympiques de la Jeunesse Dakar 2026."
            },
            {
                title: "1er Prix Africa T-Awards 2026",
                project: "Fadju Gaww (CareLink / SecureIDChain)",
                description: "Trophée continental récompensant l'excellence technologique, la cybersécurité et l'écosystème e-santé de nouvelle génération."
            },
            {
                title: "1er Prix Hackathon SENELEC 2025",
                project: "Écosystème Industriel Unifié & SENIA",
                description: "Plateforme d'écoute client intelligente et gestion opérationnelle H24 unifiant 4 applications et l'IA SENIA."
            },
            {
                title: "1er Prix SALTIS 2026",
                project: "Excellence Numérique & Solutions Distribuées",
                description: "Grand vainqueur de la compétition nationale d'innovation numérique face aux projets les plus compétitifs du pays."
            },
            {
                title: "3e Prix SALTIS 2024",
                project: "Innovation Technologique",
                description: "Distinction nationale récompensant des architectures logicielles distribuées innovantes."
            }
        ]
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
        role: "Ingénieur de Conception en Génie Informatique et Télécommunications | Software & AI Engineer",
        image: lamine,
        email: "nidayeml@ept.sn",
        location: "Dakar, Sénégal",
        linkedin: "https://www.linkedin.com/in/mouhamadou-lamine-ndiaye",
        github: "https://github.com/mlndiaye",
        bio: "Ingénieur de Conception en Génie Informatique et Télécommunications diplômé de l'EPT (Promotion 2026), Software & AI Engineer au sein de Team Metal-X. Expérience d'envergure chez Sonatel / Orange Sénégal (thèse PFE sur la plateforme de gestion des stages avec workflows IA LangGraph et déploiement OpenShift). Tout comme Mouhamadou Diouf Cissé, il a remporté l'ensemble des grands concours d'innovation technologique : lauréat de 5 hackathons majeurs (1er Prix Africa T-Awards 2026, 1er Prix JOJ Dakar 2026, 1er Prix Hackathon SENELEC, SALTIS x2).",
        thesisProject: {
            title: "Plateforme Full-Stack de Gestion des Stages & Workflows IA en Production (Sonatel)",
            subtitle: "Projet de Fin d'Études (Mémoire d'Ingénieur) – Mouhamadou Lamine NDIAYE",
            tag: "Projet de Fin d'Études (Sonatel / Orange)",
            description: "Conception et déploiement en environnement de production d'une plateforme d'entreprise full-stack de gestion intégrale des stages pour Sonatel (Orange Sénégal), intégrant des services d'Intelligence Artificielle au cœur des flux métiers RH. La solution couvre tout le cycle de vie du stagiaire : soumission et suivi des candidatures, génération automatisée de documents administratifs, signature électronique et préparation des allocations. Elle embarque des services IA hébergés localement, dont un assistant d'orientation candidat basé sur RAG pour la recherche contextuelle d'informations et un agent IA d'automatisation des workflows RH orchestré par LangGraph (LLM, retrieval, tool calling). Développée avec un backend Spring Boot et une interface React moderne selon une architecture modulaire, interconnectée aux SI d'entreprise et déployée sur Red Hat OpenShift avec monitoring opérationnel et pipelines CI/CD.",
            image: gstageCover,
            badge: "LangGraph & OpenShift",
            imageLabel: "Plateforme d'Entreprise & Workflows IA (Sonatel)",
            technologies: [
                "LangGraph (Workflows & Agents IA)",
                "LLMs & RAG Contextuel",
                "Spring Boot",
                "React",
                "Red Hat OpenShift",
                "CI/CD Pipelines",
                "APIs SI d'Entreprise",
                "Signature Électronique",
                "Supervision & Monitoring"
            ],
            metrics: [
                { label: "Cycle de vie RH", value: "100% Intégré" },
                { label: "Orchestration IA", value: "LangGraph" },
                { label: "Déploiement", value: "OpenShift" },
                { label: "Hébergement IA", value: "100% Local" }
            ]
        },
        biography: [
            "Ingénieur de Conception diplômé en Génie Informatique et Télécommunications de la prestigieuse École Polytechnique de Thiès (EPT), j'allie la rigueur scientifique polytechnicienne à une forte passion pour le génie logiciel moderne et l'intelligence artificielle appliquée en tant que Software & AI Engineer au sein de Team Metal-X.",
            "Dans le cadre de mon Projet de Fin d'Études chez Sonatel (Orange Sénégal), j'ai conçu et déployé en production une plateforme d'entreprise full-stack de gestion des stages intégrant des services d'IA de pointe. La solution couvre tout le cycle de vie RH (candidatures, génération documentaire, signature électronique, gestion des allocations) et intègre des workflows d'IA agentique orchestrés par LangGraph (assistant RAG, tool calling, automatisation de processus métiers). Bâtie sur Spring Boot et React, interfacée aux SI d'entreprise et déployée sous Red Hat OpenShift avec CI/CD et télémétrie continue, elle démontre ma capacité à industrialiser des solutions logicielles et IA critiques en production.",
            "Tout comme Mouhamadou Diouf Cissé et au sein du collectif d'élite Team Metal-X, j'ai remporté l'ensemble des compétitions et hackathons majeurs d'innovation technologique : 1er Prix Hackathon JOJ Dakar 2026 (DAKAR FLOW), 1er Prix Africa T-Awards 2026 (Fadju Gaww / SecureIDChain / CareLink), 1er Prix Hackathon National SENELEC 2025 (Écosystème Industriel Unifié & SENIA), 1er Prix SALTIS 2026 et 3e Prix SALTIS 2024.",
            "Fort d'une solide expérience au sein de la Sonatel (DSI / SPA et PFE), je maîtrise l'ensemble du cycle de vie logiciel, de la modélisation à l'orchestration microservices et au monitoring opérationnel en environnement cloud et haute disponibilité."
        ],
        skills: [
            "Génie Logiciel & Architecture Système",
            "Intelligence Artificielle & LLMs",
            "Full-Stack (Spring Boot, React, Angular)",
            "Python & FastAPI",
            "DevOps & Cloud (Docker, Kubernetes, CI/CD)",
            "Architectures Distribuées & Microservices",
            "Bases de Données (PostgreSQL, MongoDB)",
            "IA Générative & RAG",
            "API Design & Intégration",
            "Systèmes Temps Réel & WebSockets"
        ],
        skillCategories: [
            {
                title: "Génie Logiciel & Backend",
                skills: ["Java (Spring Boot)", "Python (FastAPI, Django)", "Architecture Microservices", "API REST", "Design Patterns", "Clean Architecture"]
            },
            {
                title: "Intelligence Artificielle & IA Générative",
                skills: ["LLMs & Prompt Engineering", "RAG & Vector Search", "Agents IA", "Machine Learning", "NLP", "PyTorch"]
            },
            {
                title: "Frontend & Mobile",
                skills: ["React.js", "Angular", "TypeScript", "Tailwind CSS", "React Native", "Next.js"]
            },
            {
                title: "Cloud, DevOps & Données",
                skills: ["Docker", "Kubernetes", "CI/CD (GitLab, GitHub Actions)", "PostgreSQL", "MongoDB", "AWS / GCP", "Redis"]
            }
        ],
        distinctions: [
            {
                title: "1er Prix Hackathon JOJ 2026",
                project: "DAKAR FLOW",
                description: "Plateforme intelligente d'expérience spectateur et de mobilité urbaine pour les Jeux Olympiques de la Jeunesse Dakar 2026."
            },
            {
                title: "1er Prix Africa T-Awards 2026",
                project: "Fadju Gaww (CareLink / SecureIDChain)",
                description: "Trophée continental récompensant l'innovation technologique et l'écosystème e-santé souverain de nouvelle génération."
            },
            {
                title: "1er Prix Hackathon SENELEC 2025",
                project: "Écosystème Industriel Unifié & SENIA",
                description: "Plateforme d'écoute client intelligente et supervision opérationnelle H24 unifiant 4 applications et l'IA SENIA."
            },
            {
                title: "1er Prix SALTIS 2026",
                project: "Excellence Numérique & Solutions Distribuées",
                description: "Grand vainqueur de la compétition nationale d'innovation numérique face aux projets d'ingénierie les plus compétitifs."
            },
            {
                title: "3e Prix SALTIS 2024",
                project: "Innovation Technologique",
                description: "Reconnaissance nationale pour la résilience et l'ingénierie de solutions distribuées novatrices."
            }
        ],
        experience: [
            {
                role: "Software & AI Engineer — Plateforme Intelligente de Gestion des Stages (PFE)",
                company: "Sonatel (Orange Sénégal)",
                period: "Déc. 2025 – Juin 2026 (7 mois)",
                description: "Projet de Fin d'Études : Conception et déploiement d'une plateforme d'entreprise full-stack de gestion des stages avec intégration de services IA en production. Développement backend Spring Boot et frontend React selon une architecture modulaire. Intégration de services IA hébergés localement (assistant RAG d'orientation candidat et agent d'automatisation des workflows RH sous LangGraph avec tool calling et orchestration). Interconnexion aux SI d'entreprise via APIs et déploiement sous Red Hat OpenShift avec pipelines CI/CD et monitoring opérationnel."
            },
            {
                role: "Ingénieur Logiciel Full Stack & Solutions IA",
                company: "Sonatel (DSI / SPA)",
                period: "Août 2024 – Décembre 2024 (5 mois)",
                description: "Conception, développement et déploiement de solutions logicielles d'entreprise sous architectures microservices (Spring Boot, Angular, React). Intégration de briques applicatives performantes, optimisation des flux de données et mise en place de pipelines CI/CD."
            }
        ],
        education: [
            {
                degree: "Diplôme d'Ingénieur de Conception (DIC) en Génie Informatique et Télécommunications",
                school: "École Polytechnique de Thiès (EPT)",
                period: "2021 - 2026",
                description: "Formation polytechnicienne d'élite axée sur le génie logiciel avancé, l'intelligence artificielle, les systèmes distribués, le cloud computing et les télécommunications. Thèse / Projet de Fin d'Études soutenu chez Sonatel (Orange Sénégal) sur une plateforme de gestion des stages avec intégration d'IA agentique (LangGraph) et OpenShift."
            }
        ],
        languages: [
            { lang: "Français", level: "Bilingue / Courant" },
            { lang: "Anglais", level: "Technique / Professionnel" },
            { lang: "Wolof", level: "Langue maternelle" }
        ]
    }
];

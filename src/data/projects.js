
import brainx from "../assets/images/brainx.jpeg";
import senproject from "../assets/images/senproject.png";
import bhybride from "../assets/images/bhybride.png";
import medical from "../assets/images/medical.jpg";
import compression_audio from "../assets/images/compression_audio.jpg";
import sommeil from "../assets/images/sommeil.jpg";
import echo_code from "../assets/images/echo code.png";
import internsense from "../assets/images/internsense.jpg";
import dreamforge from "../assets/images/dreamforge.png";
import repupass from "../assets/images/repupass.jpg";
import trafficnfc from "../assets/images/trafficnfc.png";
import nfc4care from "../assets/images/nfc4care.png";
import tontooCover from "../assets/images/tontoo_cover.jpg";
import senelecCover from "../assets/images/senelec_cover.jpg";
import dakarflowCover from "../assets/images/dakarflow_cover.jpg";
import fadjugawCover from "../assets/images/fadjugaw_cover.jpg";

export const projects = [
    {
        id: 1,
        title: "Tontoo – Assistant IA Conversationnel Agentique Multimodal (Sonatel)",
        subtitle: "Projet de Fin d'Études (Mémoire) – Mouhamadou Diouf CISSÉ",
        category: "Mémoire / PFE",
        featured: true,
        author: "Mouhamadou Diouf CISSE",
        tag: "Projet de Fin d'Études (Sonatel)",
        description: "Refonte agentique de nouvelle génération de la relation client pour les 17 millions d'abonnés de Sonatel. Basé sur LangGraph et la boucle ReAct (raisonnement, action, observation), l'agent pilote 12 outils et 87 fonctionnalités métier (Orange Money, Pass Internet/Illimix, factures Woyofal/Senelec/Sen'Eau, réclamations). Il intègre une compréhension bilingue fluide Français & Wolof natif avec brique vocale souveraine (ASR WhisperLive & TTS Orpheus) et traitement multimodal (voix, texte, images, PDF). Sécurité bancaire inviolable via WebView Pinpad à usage unique (zero-knowledge LLM), supervision temps réel par LeeralAI (98,4% de fiabilité) et rentabilité majeure avec 90% de réduction de coûts (~272 M FCFA d'économies sur 3 ans).",
        image: tontooCover,
        technologies: ["LangGraph (ReAct)", "Gemini 3.1 Flash-Lite", "FastAPI (Python 3.12)", "ASR & TTS Wolof", "OpenShift (Malaaw)", "PostgreSQL / pgvector", "Redis", "Langfuse", "WebSockets"],
        demoUrl: "/tontoo_demo.mp4",
        isVideoDemo: true,
        githubUrl: null,
        metrics: [
            { label: "Abonnés cibles", value: "17 Millions" },
            { label: "Économie sur 3 ans", value: "272 M FCFA" },
            { label: "Fiabilité mesurée", value: "98.4%" },
            { label: "Latence moyenne", value: "4.1s" }
        ]
    },
    {
        id: 25,
        title: "DakarFlow – Expérience Spectateur & Mobilité Intelligente (JOJ Dakar 2026)",
        subtitle: "Lauréat 1er Prix JOJ Innovation Challenge Hackathon 2026",
        category: "Applications & Cloud",
        featured: true,
        author: "Team Metal-X",
        tag: "JOJ Dakar 2026 (1er Prix)",
        description: "Solution digitale d'expérience spectateur et de mobilité urbaine conçue pour accompagner les Jeux Olympiques de la Jeunesse (JOJ Dakar 2026). L'application fluidifie le parcours des visiteurs et participants à travers une navigation multi-sites simple, des informations temps réel sur les épreuves, un espace programme officiel, un module de signalement d'incidents, une couche d'engagement interactive et un assistant virtuel intelligent multilingue (Français, Wolof, Anglais). Cette plateforme multilingue met en valeur la richesse touristique du Sénégal et sélectionne les meilleurs bons plans afin d'enrichir la découverte culturelle, de guider les usagers et de rendre l'expérience sportive totalement immersive.",
        image: dakarflowCover,
        technologies: ["React Native (Expo)", "Spring Boot 3", "PostgreSQL", "Assistant Virtuel IA (LLM)", "Routage OSRM", "Mapbox", "REST API", "JWT"],
        demoUrl: "https://www.canva.com/design/DAHH25J-G5k/KkkodiZBP7l2KvSi-LxLuQ/view",
        githubUrl: null,
        metrics: [
            { label: "Distinction", value: "🥇 1er Prix JOJ" },
            { label: "Édition", value: "JOJ Dakar 2026" },
            { label: "Sites Couverts", value: "Multi-sites" },
            { label: "Langues", value: "Multilingue" }
        ]
    },
    {
        id: 24,
        title: "SENELEC – Plateforme d'Écoute Client Intelligente & Gestion Opérationnelle H24",
        subtitle: "Écosystème Industriel Unifié (4 Applications & Assistant IA SENIA)",
        category: "Intelligence Artificielle",
        featured: true,
        author: "Team Metal-X (Tech Lead: Mouhamadou Diouf CISSE)",
        tag: "Projet Industriel SENELEC",
        description: "Plateforme d'entreprise de bout en bout conçue pour la SENELEC, unifiant la gestion commerciale (réclamations clients, facturation, compteurs) et la distribution H24 (incidents réseau & dispatching cartographique temps réel). Issue de la victoire de MetalX au hackathon SENELEC et menée jusqu'à la livraison du MVP industriel prêt pour pilote, la solution orchestre 4 applications : App Mobile Client (déclaration et suivi d'interventions), App Mobile Agent Terrain (gestion des ordres de mission géolocalisés), Tableau de Bord Web unifié pour 9 rôles métier (déduplication automatique des pannes et suivi SLA), et l'Assistant IA multi-canal SENIA (RAG Weaviate, bilingue Français & Wolof, intégré sur Mobile, WhatsApp et Facebook). Cœur réactif haute performance développé en Java 21, Spring Boot, PostgreSQL/PostGIS, Redis et WebSockets.",
        image: senelecCover,
        technologies: ["Java 21 / Spring Boot", "Python / FastAPI", "Assistant IA SENIA (Wolof & FR)", "RAG (Weaviate)", "React & TypeScript", "React Native (Expo)", "PostgreSQL & PostGIS", "Redis & WebSockets", "Mapbox", "Docker"],
        demoUrl: null,
        githubUrl: null,
        metrics: [
            { label: "Applications", value: "4 Apps" },
            { label: "Rôles Métier", value: "9 Profils" },
            { label: "Supervision", value: "H24 / Temps Réel" },
            { label: "Langues IA", value: "FR & Wolof" }
        ]
    },
    {
        id: 23,
        title: "Fadju Gaww – Écosystème e-Santé, Dossier Médical NFC & IA d'Aide au Diagnostic",
        subtitle: "Lauréat 1er Prix Africa T-Awards 2026 (Security & Privacy by Design)",
        category: "Santé & MedTech",
        featured: true,
        author: "Team Metal-X",
        tag: "Africa T-Awards 2026 (1er Prix)",
        description: "Écosystème e-Santé souverain et sécurisé primé au niveau continental par le 1er Prix Africa T-Awards 2026 (Security & Privacy by Design). Fadju Gaww (conçu sous le projet CareLink / SecureIDChain) interconnecte les patients, soignants, pharmacies et services d'urgence dans une architecture résiliente. La solution intègre une application mobile patient complète (carnet de santé numérique, rappels intelligents de prises de traitement, recherche de pharmacies et commande d'ordonnances), un dossier médical d'urgence sans contact consultable instantanément par carte NFC même hors connexion internet, et un copilote IA clinique d'aide au diagnostic analysant l'ensemble de l'historique médical (antécédents, pathologies chroniques, allergies) pour alerter sur les interactions médicamenteuses à risque et guider le médecin. Le tout est sécurisé par la blockchain Hyperledger Besu garantissant une intégrité infalsifiable des données de santé et un consentement strict du patient.",
        image: fadjugawCover,
        technologies: ["React Native / Expo", "Java 21 / Spring Boot 3", "Hyperledger Besu (Blockchain)", "NFC (NTAG / Mifare)", "IA Clinique (Aide au Diagnostic)", "PostgreSQL", "Solidity & Smart Contracts", "Chiffrement AES-256 & 2FA"],
        demoUrl: "https://www.canva.com/design/DAHJYXBxEJI/vpJpVWNXE1PkkGqARV_8Vw/view",
        githubUrl: null,
        metrics: [
            { label: "Distinction", value: "🥇 1er Prix Africa" },
            { label: "Sécurité", value: "Privacy by Design" },
            { label: "Dossier Médical", value: "NFC Offline" },
            { label: "Architecture", value: "Blockchain & IA" }
        ]
    },
    {
        id: 2,
        title: "Surveillance Prédictive de Pipelines de Gaz (Petrosen)",
        subtitle: "Plateforme Industrielle IoT & Machine Learning Temps Réel",
        category: "IoT & Systèmes",
        featured: true,
        tag: "Industrie & Énergie",
        description: "Solution critique d'ingénierie industrielle pour le réseau de transport gazier de Petrosen. Déploiement d'un maillage de capteurs IoT haute fréquence connectés à un moteur d'IA de détection prédictive d'anomalies et de fuites de pression en temps réel. Visualisation télémétrique instantanée, déclenchement d'alertes automatisées et maintenance préventive pour une sécurité énergétique optimale.",
        image: brainx,
        technologies: ["IoT Industriel", "Python", "TensorFlow", "React", "InfluxDB (Time-Series)", "MQTT", "Docker"],
        demoUrl: null,
        githubUrl: null
    },
    {
        id: 3,
        title: "InternSense – Écosystème RH Intelligent & Matching Prédictif",
        subtitle: "Plateforme IA de Gestion des Recrutements & Talents",
        category: "Intelligence Artificielle",
        featured: true,
        tag: "RH Tech & IA",
        description: "Plateforme nouvelle génération automatisant le cycle de recrutement de stages grâce à l'IA. Parsing automatique et scoring sémantique de CVs, interface conversationnelle intelligente d'accompagnement des postulants et intégration CRM d'entreprise avec Salesforce Agentforce pour des prises de décision RH rapides et équitables.",
        image: internsense,
        technologies: ["Angular", "Spring Boot", "Salesforce Agentforce", "NLP & Matching Sémantique", "MySQL", "JWT & OAuth 2.0"],
        demoUrl: "https://www.youtube.com/watch?v=dBGEsJzx9iQ",
        isVideoDemo: true,
        githubUrl: null
    },
    {
        id: 4,
        title: "Echo Code Detective – Jeu d'Enquête Procédurale & PNJ Autonomes",
        subtitle: "Génération Dynamique de Mystères & PNJ pilotés par LLM",
        category: "Intelligence Artificielle",
        featured: false,
        tag: "Game Tech & LLM",
        description: "Expérience narrative interactive révolutionnaire où chaque scène de crime et mobile est généré dynamiquement par des modèles de langage avancés (Google Gemini). Les personnages non-joueurs (PNJ) possèdent une mémoire contextuelle, une psychologie vivante et adaptent leurs dépositions face aux interrogatoires du joueur.",
        image: echo_code,
        technologies: ["React", "TypeScript", "Konva (Canvas 2D)", "Google Gemini", "Pollination.ai", "Supabase"],
        demoUrl: "https://echo-code-detective.netlify.app",
        githubUrl: "https://github.com/killer-pro/echo-code-detective-quest"
    },
    {
        id: 5,
        title: "DreamForge – Moteur d'Analyse Onirique Multimodale & Génération IA",
        subtitle: "Exploration Cognitive & Interprétation Sémantique de Rêves",
        category: "Intelligence Artificielle",
        featured: false,
        tag: "IA Cognitive",
        description: "Application d'analyse symbolique et psychologique alimentée par l'API Sonar de Perplexity AI. Décodage approfondi des émotions, des métaphores culturelles et génération dynamique d'illustrations surréalistes immersives matérialisant les récits oniriques.",
        image: dreamforge,
        technologies: ["React", "TypeScript", "Vite", "Sonar API (Perplexity)", "Génération d'images IA", "Tailwind CSS"],
        demoUrl: "https://dream-uwg8.onrender.com",
        githubUrl: null
    },
    {
        id: 6,
        title: "RepuPass – Passerelle d'Authentification Web3 Décentralisée",
        subtitle: "Contrôle d'Accès On-Chain Fondé sur un Score de Réputation",
        category: "Web3 & FinTech",
        featured: false,
        tag: "Web3 & Sécurité",
        description: "Protocole de sécurité décentralisé permettant une connexion sécurisée par wallet crypto (MetaMask) conditionnée par un score de confiance et d'intégrité calculé sur la blockchain. Élimine les attaques Sybil et sécurise les DAOs et applications à forte valeur ajoutée.",
        image: repupass,
        technologies: ["React", "TypeScript", "Ethers.js", "MetaMask", "Smart Contracts", "Tailwind CSS", "Vite"],
        demoUrl: null,
        githubUrl: "https://github.com/kira9292/repupass-trust-gate"
    },
    {
        id: 8,
        title: "TrafficNFC – Contrôle Routier Intelligent & Lutte Anti-Fraude",
        subtitle: "Vérification Numérique Instantanée des Titres de Transport",
        category: "IoT & Systèmes",
        featured: false,
        tag: "Mobile & Sécurité Publique",
        description: "Système mobile pour les forces de l'ordre permettant l'authentification sans contact NFC des permis, cartes grises et attestations de crise. Centralisation instantanée des infractions, contrôle anti-corruption et synchronisation sécurisée avec les registres nationaux des transports.",
        image: trafficnfc,
        technologies: ["Flutter", "Dart", "Spring Boot", "NFC", "Architecture Microservices", "MySQL", "REST API"],
        demoUrl: "https://trafficnfc-demo.vercel.app",
        githubUrl: "https://github.com/ton-org/trafficnfc"
    },
    {
        id: 19,
        title: "Boutique Hybride – Commerce Phygital & Chatbot Conversationnel",
        subtitle: "Convergence Vente Physique & Numérique par QR Dynamiques",
        category: "Applications & Cloud",
        featured: false,
        tag: "Phygital & E-Commerce",
        description: "Solution unifiée alliant magasin physique et boutique digitale. Génération automatique de QR Codes intelligents pour chaque produit en rayon et intégration d'un assistant conversationnel guidant les acheteurs en temps réel, garantissant une expérience d'achat omnicanale fluide.",
        image: bhybride,
        technologies: ["React", "Node.js", "QR Code Engine", "Chatbot IA", "MongoDB", "Express"],
        demoUrl: "https://drive.google.com/file/d/1dkUHXjS9AAc2VLkMJlWcrP5Z6C6MvDQF/view?usp=sharing",
        isVideoDemo: true,
        githubUrl: null
    },
    {
        id: 7,
        title: "Ordonnancement Algorithmique d'Emplois du Temps Complexes",
        subtitle: "Optimisation Mathématique sous Multi-Contraintes & Théorie des Graphes",
        category: "Applications & Cloud",
        featured: false,
        tag: "Recherche Opérationnelle",
        description: "Moteur de calcul mathématique d'optimisation d'affectation des ressources pédagogiques et professionnelles. Résolution de contraintes dures et souples via algorithmes de coloriage de graphes et programmation linéaire pour éliminer tout conflit d'horaire.",
        image: "https://emjpv36xdx4.exactdn.com/wp-content/uploads/2024/10/Emploi-du-temps-detude.jpg?strip=all&lossy=1&quality=83&sharp=1&ssl=1",
        technologies: ["Python", "NetworkX (Graphes)", "FastAPI", "Algorithmes Génétiques", "React"],
        demoUrl: null,
        githubUrl: null
    },
    {
        id: 20,
        title: "Système Décisionnel Clinique de Pré-diagnostic Médical (ML)",
        subtitle: "Apprentissage Supervisé pour la Détection Précoce de Pathologies",
        category: "Santé & MedTech",
        featured: false,
        tag: "Santé & Machine Learning",
        description: "Modèle prédictif de machine learning entraîné sur des jeux de données cliniques permettant d'orienter les soignants dès le triage initial. Analyse fine des symptômes et biomarqueurs pour estimer les probabilités diagnostiques avec un indice de confiance explicable.",
        image: medical,
        technologies: ["Python", "Scikit-learn", "Classification ML", "Streamlit", "Data Science"],
        demoUrl: null,
        githubUrl: null
    },
    {
        id: 21,
        title: "Moteur DSP de Compression Audio Haute Fidélité",
        subtitle: "Traitement Numérique du Signal & Réduction Débit Temps Réel",
        category: "IoT & Systèmes",
        featured: false,
        tag: "Traitement du Signal (DSP)",
        description: "Algorithme novateur de compression acoustique réduisant l'empreinte mémoire des flux audio tout en préservant l'intelligibilité vocale et la clarté fréquentielle. Optimisé pour la transmission à bas débit sur canaux contraints et les architectures embarquées.",
        image: compression_audio,
        technologies: ["Python", "C++", "DSP (Digital Signal Processing)", "Transformée de Fourier", "Audio Engineering"],
        demoUrl: null,
        githubUrl: null
    },
    {
        id: 22,
        title: "Analyse Prédictive des Cycles de Sommeil & Biomarqueurs",
        subtitle: "Mining de Données Physiologiques & Recommandations Santé",
        category: "Santé & MedTech",
        featured: false,
        tag: "Data Science & Santé",
        description: "Traitement statistique et modélisation de signaux polysomnographiques visant à identifier les perturbateurs de repos et prédire les anomalies des cycles circadiens afin d'émettre des préconisations de récupération individualisées.",
        image: sommeil,
        technologies: ["Python", "Pandas", "NumPy", "Modélisation Statistique", "Machine Learning"],
        demoUrl: null,
        githubUrl: null
    },
    {
        id: 10,
        title: "Télémétrie IoT & Contrôle Intelligent de Séchoirs Solaires",
        subtitle: "Supervision Énergétique Agro-Industrielle par Cloud & MQTT",
        category: "IoT & Systèmes",
        featured: false,
        tag: "IoT & Énergie Verte",
        description: "Système de supervision thermique et hygrométrique en continu d'un parc de séchoirs solaires agricoles. Régulation dynamique à distance, journalisation en base temporelle et alertes pour préserver la qualité des denrées séchées.",
        image: "https://www.shieldenchannel.com/cdn/shop/articles/solar-monitoring-systems-from-how-they-work-to-buying-guide-989992.jpg?v=1737592676&width=600",
        technologies: ["IoT", "ESP32", "Protocole MQTT", "InfluxDB", "React Dashboard", "Python"],
        demoUrl: null,
        githubUrl: null
    },
    {
        id: 13,
        title: "Analyseur Sémantique de Sentiments & Veille d'Opinion (NLP)",
        subtitle: "Traitement Automatique du Langage Naturel & Profilage de Communautés",
        category: "Intelligence Artificielle",
        featured: false,
        tag: "NLP & Sentiment Analysis",
        description: "Plateforme de veille réputationnelle analysant en continu les flux de commentaires des réseaux sociaux. Classification émotionnelle multilingue (positif, neutre, négatif) et détection de signaux faibles pour la gestion de crise de marque.",
        image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
        technologies: ["Python", "NLTK & Transformers", "TensorFlow", "FastAPI", "React"],
        demoUrl: null,
        githubUrl: null
    },
    {
        id: 12,
        title: "Plateforme Nationale de Valorisation de Projets d'Ingénierie",
        subtitle: "Hub Collaboratif d'Innovation & Partage Technologique",
        category: "Applications & Cloud",
        featured: false,
        tag: "Web & Plateforme",
        description: "Plateforme centralisée permettant aux innovateurs, chercheurs et ingénieurs de publier, documenter et lever des fonds ou des partenariats pour des projets techniques à fort impact communautaire.",
        image: senproject,
        technologies: ["React", "Node.js", "MongoDB Atlas", "AWS S3", "Express"],
        demoUrl: null,
        githubUrl: null
    }
];

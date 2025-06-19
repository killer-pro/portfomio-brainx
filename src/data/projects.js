
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
export const projects = [
    {
        id: 2,
        title: "Surveillance intelligente de pipelines de gaz de la petrosen",
        description: "Développement d'une plateforme IoT intelligente pour le suivi d'un réseau de pipelines de gaz avec détection de fuites en temps réel via IA.",
        image: brainx,
        technologies: ["IoT", "Python", "TensorFlow", "React", "InfluxDB"],
        demoUrl: "#",
        githubUrl: "#"
    },
    {
        id: 3,
        title: "InternSense - Plateforme IA de gestion de stages",
        description: "Système révolutionnaire de gestion de stages alimenté par l'IA avec analyse automatique des candidatures, interface conversationnelle et accompagnement personnalisé pour candidats et RH.",
        image: internsense ,
        technologies: ["Angular", "Spring Boot", "MySQL", "Salesforce Agentforce", "JWT", "OAuth 2.0"],
        demoUrl: "https://www.youtube.com/watch?v=dBGEsJzx9iQ",
        githubUrl: "#"
    },
    {
        id: 4,
        title: "Echo Code Detective - Jeu d'enquête procédural IA",
        description: "Jeu de détective mystère où chaque enquête est générée dynamiquement par l'IA. Explorez un monde 2D, interrogez des PNJ avec des personnalités uniques et résolvez des mystères infinis.",
        image: echo_code,
        technologies: ["React", "TypeScript", "Konva", "Google Gemini", "Pollination.ai", "Supabase"],
        demoUrl: "https://echo-code-detective.netlify.app",
        githubUrl: "https://github.com/killer-pro/echo-code-detective-quest"
    },
    {
        id: 5,
        title: "DreamForge - Interpréteur de rêves IA",
        description: "Application d'interprétation de rêves alimentée par l'IA utilisant l'API Sonar de Perplexity. Analyse les symboles, émotions et thèmes des rêves avec contexte culturel et génération d'images immersives.",
        image: dreamforge,
        technologies: ["React", "TypeScript", "Vite", "Sonar API", "Perplexity AI", "Tailwind CSS"],
        demoUrl: "https://dream-uwg8.onrender.com",
        githubUrl: "#"
    },
    {
        id: 6,
        title: "RepuPass – Authentification Web3 basée sur la réputation",
        description: "RepuPass est un système d'authentification décentralisé exploitant les technologies Web3. Il permet de se connecter via un portefeuille crypto (ex: MetaMask) tout en s'appuyant sur un score de réputation pour sécuriser l'accès aux plateformes. Idéal pour les apps communautaires et décentralisées.",
        image: repupass,
        technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Graphite", "MetaMask", "Ethers.js"],
        demoUrl: "#", // Remplace par ton vrai lien si nécessaire
        githubUrl: "https://github.com/kira9292/repupass-trust-gate" // Remplace par ton vrai repo

    },

    {
        id: 7,
        title: "Optimisation d'emploi du temps",
        description: "Développement d'un système d'optimisation d'emplois du temps prenant en compte toutes les contraintes utilisateurs à l'aide d'algorithmes de graphes et de techniques d'ordonnancement.",
        image: "https://emjpv36xdx4.exactdn.com/wp-content/uploads/2024/10/Emploi-du-temps-detude.jpg?strip=all&lossy=1&quality=83&sharp=1&ssl=1",
        technologies: ["Python", "NetworkX", "React", "FastAPI"],
        demoUrl: "#",
        githubUrl: "#"
    },
    {
        id: 8,
        title: "TrafficNFC – Système de contrôle routier intelligent par NFC",
        description: "TrafficNFC est une application mobile de contrôle routier utilisant la technologie NFC pour identifier rapidement les véhicules et les conducteurs. Elle facilite la vérification des cartes de crise et aide à lutter contre la corruption routière grâce à une base de données centralisée et une interface intuitive.",
        image: trafficnfc,
        technologies: ["Flutter", "Dart", "Spring Boot", "NFC", "MySQL", "REST API"],
        demoUrl: "https://trafficnfc-demo.vercel.app", // remplace par ton vrai lien de démo
        githubUrl: "https://github.com/ton-org/trafficnfc" // remplace par ton vrai repo

    },

    {
        id: 9,
        title: "Environnement Jupyter Notebook en HTML",
        description: "Création d'une application web qui simule l'environnement Jupyter Notebook, en interprétant du HTML pour afficher et exécuter dynamiquement du code dans une interface interactive.",
        image: "https://www.esrf.fr/files/live/sites/www/files/UsersAndScience/Experiments/CRG/BM02/fromProfileChahine/data_analysis/Jupyter.PNG",
        technologies: ["JavaScript", "React", "Monaco Editor", "WebAssembly"],
        demoUrl: "#",
        githubUrl: "#"
    },
    {
        id: 10,
        title: "Système IoT de surveillance de séchoirs solaires",
        description: "Développement d'un dispositif de surveillance et de contrôle à distance d'un réseau de séchoirs solaires, basé sur l'IoT et le cloud.",
        image: "https://www.shieldenchannel.com/cdn/shop/articles/solar-monitoring-systems-from-how-they-work-to-buying-guide-989992.jpg?v=1737592676&width=600",
        technologies: ["IoT", "Python", "MQTT", "React", "InfluxDB"],
        demoUrl: "#",
        githubUrl: "#"
    },
    {
        id: 11,
        title: "Mini-jeux JavaScript",
        description: "Programmation de plusieurs jeux classiques en JavaScript, notamment : Démineur, Dames, 2048 et Tic-Tac-Toe, en mettant l'accent sur l'interactivité, les animations et l'algorithmique.",
        image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*QXUdmpRnVlfEn2ZuEfoiEw.png",
        technologies: ["JavaScript", "HTML5 Canvas", "CSS3"],
        demoUrl: "#",
        githubUrl: "#"
    },
    {
        id: 12,
        title: "Plateforme de soumission de projets",
        description: "Développement d'une application web permettant aux porteurs de projets de publier, vulgariser et partager leurs idées à l'échelle nationale.",
        image: senproject ,
        technologies: ["React", "Node.js", "MongoDB", "AWS"],
        demoUrl: "#",
        githubUrl: "#"
    },
    {
        id: 13,
        title: "Détection de sentiments sur les réseaux sociaux",
        description: "Création d'une application de détection et de profilage des sentiments exprimés dans les commentaires des réseaux sociaux à l'aide de techniques de NLP et ML.",
        image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
        technologies: ["Python", "NLTK", "TensorFlow", "React", "FastAPI"],
        demoUrl: "#",
        githubUrl: "#"
    },
    {
        id: 14,
        title: "Application de transcodage numérique",
        description: "Développement d'un outil de conversion efficace entre différentes bases numériques, incluant une interface simple et des explications pédagogiques.",
        image: "https://images.pexels.com/photos/4709285/pexels-photo-4709285.jpeg",
        technologies: ["JavaScript", "React", "MathJax"],
        demoUrl: "#",
        githubUrl: "#"
    },
    {
        id: 15,
        title: "Plateforme de streaming vidéo",
        description: "Réalisation d'une plateforme de streaming vidéo, avec gestion des utilisateurs, encodage des vidéos, système de lecture optimisé et fonctionnalités communautaires.",
        image: "https://images.pexels.com/photos/2510428/pexels-photo-2510428.jpeg",
        technologies: ["React", "Node.js", "FFmpeg", "AWS S3", "MongoDB"],
        demoUrl: "#",
        githubUrl: "#"
    },
    {
        id: 16,
        title: "Prévision du prix des matériaux",
        description: "Conception d'une application de prévision de l'évolution des prix des matières premières à l'aide de l'analyse de données historiques.",
        image: "https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg",
        technologies: ["Python", "Scikit-learn", "React", "FastAPI", "PostgreSQL"],
        demoUrl: "#",
        githubUrl: "#"
    },
    {
        id: 17,
        title: "Plateforme de recommandation d'ordinateurs (ML)",
        description: "Création d'une application de traitement de données et de machine learning basée sur une base de données d'ordinateurs, permettant de recommander automatiquement la machine la plus adaptée et la moins chère selon les critères définis par l'utilisateur.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_EhDQiNf0FTUdu8VBCgYBrcD-gr3BXeW5WQ&s",
        technologies: ["Python", "TensorFlow", "React", "FastAPI", "PostgreSQL"],
        demoUrl: "#",
        githubUrl: "#"
    },
    {
        id: 18,
        title: "Application e-commerce complète",
        description: "Développement d'une boutique en ligne pour produits électroniques couvrant l'ensemble du processus : gestion des stocks, panier, paiement sécurisé, et suivi des commandes.",
        image: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/259622089/original/20f7f0b51335b8f8ea8a278e55d2d6ca50d53a1e/build-e-commerce-application.jpg",
        technologies: ["Django", "SQLite", "Bootstrap", "PayPal API"],
        demoUrl: "#",
        githubUrl: "#"
    },  
    {
        id: 19,
        title: "Boutique Hybride",
        description: "Développement d'une solution innovante combinant vente physique et digitale, intégrant la génération de QR Codes pour chaque produit et un chatbot intelligent pour accompagner les clients, que ce soit en magasin ou en ligne.",
        image: bhybride,
        technologies: ["React", "Node.js", "QR Code", "Chatbot", "MongoDB"],
        demoUrl: "https://drive.google.com/file/d/1dkUHXjS9AAc2VLkMJlWcrP5Z6C6MvDQF/view?usp=sharing",
        githubUrl: "#"
    },
    {
        id: 20,
        title: "Aide au Pré-diagnostic Médical",
        description: "Mise en place d'un modèle de machine learning pour assister les professionnels de santé dans le pré-diagnostic médical, en analysant les symptômes et antécédents pour proposer des pistes de diagnostic.",
        image: medical,
        technologies: ["Python", "Scikit-learn", "ML", "Streamlit"],
        demoUrl: "#",
        githubUrl: "#"
    },
    {
        id: 21,
        title: "Compression Audio",
        description: "Développement d'un algorithme de compression audio innovant permettant de réduire la taille des fichiers tout en préservant la qualité sonore, idéal pour le streaming et le stockage efficace.",
        image: compression_audio,
        technologies: ["Python", "DSP", "Audio Processing", "C++"],
        demoUrl: "#",
        githubUrl: "#"
    },
    {
        id: 22,
        title: "Analyse du Sommeil (Analyse de données)",
        description: "Étude approfondie des données de sommeil à l'aide de techniques d'analyse de données pour identifier les facteurs influençant la qualité du sommeil et proposer des recommandations personnalisées.",
        image: sommeil,
        technologies: ["Python", "Pandas", "Data Analysis", "ML"],
        demoUrl: "#",
        githubUrl: "#"
    },
    {
        id: 23,
        title: "NFC4Care – Carte de santé numérique via NFC",
        description: "NFC4Care est une solution de santé numérique permettant de stocker et lire les informations médicales critiques via des cartes NFC. Elle permet aux professionnels de santé d'accéder rapidement à l’historique du patient, même hors ligne, améliorant ainsi la réactivité en situation d'urgence.",
        image: nfc4care,
        technologies: ["Flutter", "Dart", "Spring Boot", "NFC", "MySQL", "REST API", "JWT"],
        demo: "", // remplace par ton vrai lien de démo
        github: "" // remplace par ton vrai repo

    }

];

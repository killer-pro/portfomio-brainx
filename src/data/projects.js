
import brainx from "../assets/images/brainx.jpeg";
import senproject from "../assets/images/senproject.png";
import echo_code from "../assets/images/echo code.png";
import internsense from "../assets/images/internsense.jpg";
import dreamforge from "../assets/images/dreamforge.png";

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
        title: "Optimisation d'emploi du temps",
        description: "Développement d'un système d'optimisation d'emplois du temps prenant en compte toutes les contraintes utilisateurs à l'aide d'algorithmes de graphes et de techniques d'ordonnancement.",
        image: "https://emjpv36xdx4.exactdn.com/wp-content/uploads/2024/10/Emploi-du-temps-detude.jpg?strip=all&lossy=1&quality=83&sharp=1&ssl=1",
        technologies: ["Python", "NetworkX", "React", "FastAPI"],
        demoUrl: "#",
        githubUrl: "#"
    },
    {
        id: 7,
        title: "Environnement Jupyter Notebook en HTML",
        description: "Création d'une application web qui simule l'environnement Jupyter Notebook, en interprétant du HTML pour afficher et exécuter dynamiquement du code dans une interface interactive.",
        image: "https://www.esrf.fr/files/live/sites/www/files/UsersAndScience/Experiments/CRG/BM02/fromProfileChahine/data_analysis/Jupyter.PNG",
        technologies: ["JavaScript", "React", "Monaco Editor", "WebAssembly"],
        demoUrl: "#",
        githubUrl: "#"
    },
    {
        id: 8,
        title: "Système IoT de surveillance de séchoirs solaires",
        description: "Développement d'un dispositif de surveillance et de contrôle à distance d'un réseau de séchoirs solaires, basé sur l'IoT et le cloud.",
        image: "https://www.shieldenchannel.com/cdn/shop/articles/solar-monitoring-systems-from-how-they-work-to-buying-guide-989992.jpg?v=1737592676&width=600",
        technologies: ["IoT", "Python", "MQTT", "React", "InfluxDB"],
        demoUrl: "#",
        githubUrl: "#"
    },
    {
        id: 9,
        title: "Mini-jeux JavaScript",
        description: "Programmation de plusieurs jeux classiques en JavaScript, notamment : Démineur, Dames, 2048 et Tic-Tac-Toe, en mettant l'accent sur l'interactivité, les animations et l'algorithmique.",
        image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*QXUdmpRnVlfEn2ZuEfoiEw.png",
        technologies: ["JavaScript", "HTML5 Canvas", "CSS3"],
        demoUrl: "#",
        githubUrl: "#"
    },
    {
        id: 10,
        title: "Plateforme de soumission de projets",
        description: "Développement d'une application web permettant aux porteurs de projets de publier, vulgariser et partager leurs idées à l'échelle nationale.",
        image: senproject ,
        technologies: ["React", "Node.js", "MongoDB", "AWS"],
        demoUrl: "#",
        githubUrl: "#"
    },
    {
        id: 11,
        title: "Détection de sentiments sur les réseaux sociaux",
        description: "Création d'une application de détection et de profilage des sentiments exprimés dans les commentaires des réseaux sociaux à l'aide de techniques de NLP et ML.",
        image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
        technologies: ["Python", "NLTK", "TensorFlow", "React", "FastAPI"],
        demoUrl: "#",
        githubUrl: "#"
    },
    {
        id: 12,
        title: "Application de transcodage numérique",
        description: "Développement d'un outil de conversion efficace entre différentes bases numériques, incluant une interface simple et des explications pédagogiques.",
        image: "https://images.pexels.com/photos/4709285/pexels-photo-4709285.jpeg",
        technologies: ["JavaScript", "React", "MathJax"],
        demoUrl: "#",
        githubUrl: "#"
    },
    {
        id: 13,
        title: "Plateforme de streaming vidéo",
        description: "Réalisation d'une plateforme de streaming vidéo, avec gestion des utilisateurs, encodage des vidéos, système de lecture optimisé et fonctionnalités communautaires.",
        image: "https://images.pexels.com/photos/2510428/pexels-photo-2510428.jpeg",
        technologies: ["React", "Node.js", "FFmpeg", "AWS S3", "MongoDB"],
        demoUrl: "#",
        githubUrl: "#"
    },
    {
        id: 14,
        title: "Prévision du prix des matériaux",
        description: "Conception d'une application de prévision de l'évolution des prix des matières premières à l'aide de l'analyse de données historiques.",
        image: "https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg",
        technologies: ["Python", "Scikit-learn", "React", "FastAPI", "PostgreSQL"],
        demoUrl: "#",
        githubUrl: "#"
    },
    {
        id: 15,
        title: "Plateforme de recommandation d'ordinateurs (ML)",
        description: "Création d'une application de traitement de données et de machine learning basée sur une base de données d'ordinateurs, permettant de recommander automatiquement la machine la plus adaptée et la moins chère selon les critères définis par l'utilisateur.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_EhDQiNf0FTUdu8VBCgYBrcD-gr3BXeW5WQ&s",
        technologies: ["Python", "TensorFlow", "React", "FastAPI", "PostgreSQL"],
        demoUrl: "#",
        githubUrl: "#"
    },
    {
        id: 16,
        title: "Application e-commerce complète",
        description: "Développement d'une boutique en ligne pour produits électroniques couvrant l'ensemble du processus : gestion des stocks, panier, paiement sécurisé, et suivi des commandes.",
        image: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/259622089/original/20f7f0b51335b8f8ea8a278e55d2d6ca50d53a1e/build-e-commerce-application.jpg",
        technologies: ["Django", "SQLite", "Bootstrap", "PayPal API"],
        demoUrl: "#",
        githubUrl: "#"
    },


];

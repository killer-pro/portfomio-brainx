
import mouha from "../assets/images/mouha.jpg";
import lamine from "../assets/images/lamine.jpg";
import abdoulkarim from "../assets/images/abdoulkarim.jpg";

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

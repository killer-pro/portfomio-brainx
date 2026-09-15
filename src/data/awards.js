import awardJoj from "../assets/images/award_joj_2026.jpg";
import awardAfricaTAwards from "../assets/images/award_africa_tawards_2026.jpg";
import awardSenelec from "../assets/images/award_senelec_2025.jpg";
import awardSaltis from "../assets/images/brainx.jpeg";

export const awards = [
  {
    id: 1,
    rank: "1er Prix",
    rankEn: "1st Prize",
    title: "Hackathon JOJ Dakar 2026",
    category: "Smart Urban Mobility",
    project: "DAKAR FLOW",
    period: "Avril 2026",
    prize: "1 500 000 FCFA",
    team: "Team Metal-X",
    description: "Vainqueur du 1er Prix (1 500 000 FCFA) pour la conception et l'implémentation de DAKAR FLOW, plateforme intelligente d'expérience spectateur et de régulation de mobilité urbaine pour les Jeux Olympiques de la Jeunesse.",
    badgeColor: "amber",
    image: awardJoj,
    imagePosition: "object-center"
  },
  {
    id: 2,
    rank: "1er Prix",
    rankEn: "1st Prize",
    title: "Africa T-Awards 2026",
    category: "Security & Privacy by Design",
    project: "Fadju Gaww (CareLink / SecureIDChain)",
    period: "2026",
    prize: "Trophée Continental",
    team: "Team Metal-X",
    description: "Premier prix continental récompensant l'excellence en sécurité et protection des données sensibles (Privacy by Design) appliquée à l'écosystème e-santé et identité décentralisée avec Fadju Gaww (SecureID Chain).",
    badgeColor: "amber",
    image: awardAfricaTAwards,
    imagePosition: "object-top"
  },
  {
    id: 3,
    rank: "1er Prix",
    rankEn: "1st Prize",
    title: "Hackathon SENELEC 2025",
    category: "Mobile App & Customer Experience",
    project: "Customer Feedback Dashboard & Smart Mobile",
    period: "Juillet 2025",
    prize: "4 000 000 FCFA",
    team: "Team Metal-X",
    description: "Grand vainqueur du 1er Prix (4 000 000 FCFA) du Hackathon national SENELEC pour le développement d'une application mobile et d'un tableau de bord IA d'écoute client et d'alignement stratégique opérationnel.",
    badgeColor: "amber",
    image: awardSenelec,
    imagePosition: "object-center"
  },
  {
    id: 4,
    rank: "1er Prix",
    rankEn: "1st Prize",
    title: "SALTIS 2026 – Salon des Technologies et de l'Innovation",
    category: "National Digital Innovation Competition",
    project: "Excellence Numérique & Solutions Distribuées",
    period: "2026",
    prize: "1er Prix National",
    team: "Team Metal-X",
    description: "Grand vainqueur de la compétition nationale d'innovation numérique au SALTIS 2026 face aux projets technologiques les plus compétitifs du pays.",
    badgeColor: "amber",
    image: awardSaltis,
    imagePosition: "object-center"
  },
  {
    id: 5,
    rank: "3ème Prix",
    rankEn: "3rd Prize",
    title: "SALTIS 2024 – Salon des Technologies et de l'Innovation",
    category: "National Digital Innovation Competition",
    project: "Innovation Technologique",
    period: "Décembre 2024",
    team: "Team Metal-X",
    description: "3ème Prix national récompensant une solution logicielle innovante lors de l'édition SALTIS 2024.",
    badgeColor: "orange",
    image: null
  }
];

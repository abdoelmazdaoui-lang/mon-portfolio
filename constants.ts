export const professionalExperience = [
  {
    role: 'ECM Test Leader / ECU Software',
    company: 'Emitech-Stellantis',
    location: 'Paris, France',
    period: 'Sept. 2023 - Présent',
    tasks: [
      "Planification de l'intégration et validation logicielle (PIV)",
      "Gestion des ressources de test (bancs HIL et/ou véhicules)",
      "Exécution des tests de pré-acceptation avec les fournisseurs SW",
      "Suivi et reporting des activités de validation (KPIs)",
      "Analyse des problèmes et support technique",
      "Validation des fonctions EE (CAN, LIN, Gateway, RCD)"
    ],
    skills: ['AVL CRETA', 'INCA', 'PLM Platform', 'ETAS INCA', 'ControlDesk', 'DiagAlyser', 'Vector CANalyzer']
  },
  {
    role: 'FOTA Software Testing and Sys Debug',
    company: 'Celad-Renault',
    location: 'Toulouse, France',
    period: 'Sept. 2022 - Sept. 2023',
    tasks: [
      'Préparation, câblage, et configuration des véhicules de test FOTA.',
      'Validation FOTA sur banc (création, exécution, analyse et débogage).',
      'Test du système et automatisation des tests avec CAPL.',
      'Implémentation de l\'environnement de validation et de l\'architecture de test.',
      'Développement de tests automatiques dans CANoe (CAPL).',
      'Mise à jour de la spécification du Clock Manager sur IVI et IVC en respectant les contraintes de cybersécurité.',
      'Validation FOTA sur véhicule (plus de 30 ECUs).'
    ],
    skills: ['CANoe', 'Vector CANalyzer', 'Vnext', 'Vespa mock', 'Gestion de projet agile', 'Confluence', 'Adas', 'JIRA']
  },
  {
    role: 'Vehicle Test and Validation Engineer',
    company: 'IT Link-Stellantis',
    location: 'France',
    period: 'Jan. 2021 - Août 2022',
    tasks: [
      'Conception et exécution des plans de tests pour les véhicules.',
      'Analyse des signaux et des trames CAN avec Canalyzer.',
      'Validation des fonctions des systèmes ADAS (RVV, LVV, ACC, LKA, ILV, AAS, ...).',
      'Vérification de la conformité des véhicules aux exigences de PSA.',
      'Expertise des défauts électriques et électroniques d\'origine.',
      'Création et analyse de défauts avec l\'outil Altis.',
      'Lecture du Journal de Défauts Diagnostiqués (JDD) et diagnostic des défauts.'
    ],
    skills: ['Intégration', 'Aide à la conduite automobile', 'Vector CANalyzer', 'Bus de données CAN', 'Modernisation', 'adas', 'sw', 'altis', 'Test d\'intégration']
  },
  {
    role: 'Stage: Outil de Règle Métier Boucle d\'Air et Combustion',
    company: 'FEV Group',
    location: 'Maroc',
    period: 'janv. 2020 - juil. 2020',
    tasks: [
      'Analyser les relations entre les paramètres du moteur via un modèle physique/mathématique.',
      'Évaluer la sensibilité des performances du moteur par rapport à ses entrées.',
      'Accélérer les comparaisons entre les performances des essais moteurs.',
      'Développer une interface homme-machine (IHM) claire et explicite.'
    ],
    skills: ['Gmp', 'Moteur', 'Cycle en V', 'norme euro', 'controle commande', 'Moteur diesel', 'cycle à 4 temps']
  },
  {
    role: 'Stage: Système de Sécurité Automobile par Reconnaissance Faciale',
    company: 'FREERAY S.A.R.L.',
    location: 'Rabat',
    period: 'mars 2019 - août 2019',
    tasks: [
      'Création d\'une base de données d\'images faciales pour l\'entraînement du système ADAS.',
      'Utilisation d\'une carte Raspberry Pi comme unité de traitement.',
      'Intégration d\'une caméra pour la détection de visages.',
      'Utilisation de la librairie OpenCV en Python pour la reconnaissance faciale en temps réel.'
    ],
    skills: ['Python', 'OpenCV', 'MySQL', 'computer vision', 'Raspberry Pi', 'Adas']
  },
  {
    role: "PFA : Détection d'obstacles par LIDAR et caméra",
    company: "Ecole Nationale Supérieure d'Informatique et d'Analyse des Systèmes - ENSIAS",
    location: "Rabat",
    period: "nov. 2018 - mars 2019",
    tasks: [
      "Utilisation de la technologie LIDAR (modèle HOKUYO 10LX) pour la détection d'obstacles.",
      "Développement d'une solution pour transformer le LIDAR 2D en un système capable de fournir des informations 3D.",
      "Mise en oeuvre d'une variation d'angle de mesure pour scanner différentes surfaces de l'espace.",
      "Amélioration de la fiabilité du détecteur pour des applications en cartographie, robotique et sécurité automobile."
    ],
    skills: ['LIDAR', '3D Perception', 'Robotique', 'Sensor Fusion']
  },
  {
    role: "Projet de fin d'étude : Interféromètre de Michelson",
    company: "Faculté des Sciences Semlalia Marrakech",
    location: "Marrakech, Maroc",
    period: "janv. 2018 - juin 2018",
    tasks: [
      "Réalisation d'un interféromètre de Michelson avec un laser et des miroirs pour la détection d'ondes gravitationnelles.",
      "Capture des ondulations dans l'espace-temps provoquées par des événements cosmiques intenses.",
      "Travail s'inscrivant dans le cadre des projets internationaux LIGO et VIRGO.",
      "Utilisation de la précision de l'interféromètre pour ouvrir de nouvelles perspectives en astronomie."
    ],
    skills: ['Interférométrie', 'Optique', 'Laser', 'Ondes gravitationnelles', 'Physique']
  }
];

export const skills = [
  { category: 'Outils de Validation', items: ['CANalyzer', 'CANoe', 'Diagalyser', 'INCA', 'DDT2000', 'BlackBox Sim', 'JIRA Agile'] },
  { category: 'Technologies Automobiles', items: ['Systèmes ADAS', 'CAN/LIN', 'ControlComm', 'GMP powertrain', 'ECU', 'MBD (MIL, SIL, HIL, VIL)', 'Cycle en V', 'ISO 26262'] },
  { category: 'Programmation', items: ['C/C++', 'Python', 'HTML', 'CSS', 'CAPL', 'VBA', 'Django', 'Flask', 'Android Studio'] },
  { category: 'Électronique', items: ['Analogique', 'Numérique', 'Puissance', 'Capteurs', 'Actionneurs', 'AVR'] },
  { category: 'Automatique', items: ['Traitement du Signal', 'Régulation Numérique', 'PID', 'Contrôle Automatique'] },
  { category: 'Logiciels', items: ['Matlab/Simulink', 'ISIS Proteus', 'Arduino IDE', 'PyCharm', 'MySQL', 'LaTeX'] }
];

export const education = [
  {
    degree: "Master Spécialisé en Systèmes Embarqués pour l'Automobile",
    institution: "ENSIAS - École Nationale Supérieure d'Informatique et d'Analyse des Systèmes",
    period: '2018 - 2020',
    location: 'Rabat, Maroc'
  },
  {
    degree: "Licence en Électronique et Informatique",
    institution: 'FSSM - Faculté des Sciences Semlalia',
    period: '2015 - 2018',
    location: 'Marrakech, Maroc'
  }
];

export const projects = [
  {
    title: "Outil 0D de Boucle d'Air et Combustion",
    description: "Développement d'un outil de simulation pour l'analyse de la boucle d'air et de la combustion dans les moteurs thermiques.",
    tags: ['VBA', 'Simulation', 'Moteurs Thermiques'],
    context: 'Stage PFE - FEV Morocco'
  },
  {
    title: 'Système de Sécurité par Reconnaissance Faciale',
    description: "Implémentation d'un système de sécurité pour véhicules dans le cadre des systèmes ADAS.",
    tags: ['OpenCV', 'Python', 'ADAS', 'Computer Vision'],
    context: 'Stage - FREERAY'
  },
  {
    title: "Détection d'Obstacles avec LIDAR",
    description: "Étude et réalisation d'un détecteur d'obstacles 3D en utilisant un LIDAR 2D (HOKUYO 10LX) et une caméra, impliquant une variation d'angle pour scanner l'espace.",
    tags: ['LIDAR', 'Camera', 'Sensor Fusion', 'Arduino'],
    context: 'Projet PFA'
  },
  {
    title: 'Prototype de Véhicule Autonome',
    description: "Développement d'un prototype équipé de capteurs ultrasoniques, Arduino, et servomoteur pour une détection efficace des obstacles.",
    tags: ['Arduino', 'Capteurs Ultrasoniques', 'Servomoteur'],
    context: 'Projet Académique'
  },
  {
    title: "Système de surveillance de la pression des pneus (TPMS)",
    description: "Conception et réalisation d'un système TPMS basse consommation utilisant des capteurs de pression et un module de communication sans fil avec Arduino.",
    tags: ['Arduino', 'Capteurs', 'Communication RF'],
    context: 'Projet Personnel'
  },
  {
    title: "Gateway IoT pour la collecte de données véhicule",
    description: "Mise en place d'une passerelle IoT avec ESP32 pour lire les données du bus CAN et les transmettre à une plateforme cloud via Wi-Fi pour une surveillance à distance.",
    tags: ['ESP32', 'IoT', 'CAN', 'Cloud'],
    context: 'Projet Personnel'
  },
  {
    title: "Tableau de bord de véhicule personnalisé",
    description: "Création d'un tableau de bord numérique sur un écran tactile avec un Raspberry Pi, affichant des données en temps réel (vitesse, RPM) lues depuis le port OBD-II.",
    tags: ['Raspberry Pi', 'Python', 'GUI', 'OBD-II'],
    context: 'Projet Personnel'
  },
  {
    title: "Script d'automatisation pour l'analyse de logs CAN",
    description: "Développement d'un script Python pour parser, analyser et visualiser des gigaoctets de logs CAN, identifiant automatiquement les anomalies et générant des rapports.",
    tags: ['Python', 'Pandas', 'Automatisation', 'CAN'],
    context: 'Projet Professionnel'
  },
  {
    title: "Outil de reporting automatisé pour tests HIL",
    description: "Création d'un outil en VBA pour Excel qui agrège automatiquement les résultats de différentes campagnes de tests HIL, générant des dashboards et des rapports de synthèse.",
    tags: ['VBA', 'Excel', 'Automatisation', 'HIL'],
    context: 'Projet Professionnel'
  },
  {
    title: "Contrôle à distance des actionneurs de véhicule",
    description: "Développement d'un système basé sur ESP32 permettant de contrôler les serrures, fenêtres et lumières d'un véhicule via une application mobile en Bluetooth.",
    tags: ['ESP32', 'Bluetooth', 'Android', 'Actionneurs'],
    context: 'Projet Personnel'
  },
  {
    title: "Interféromètre de Michelson pour Détection d'Ondes Gravitationnelles",
    description: "Réalisation d'un interféromètre de Michelson avec laser et miroirs pour détecter les ondes gravitationnelles, dans le cadre des projets LIGO/VIRGO.",
    tags: ['Optique', 'Laser', 'Physique', 'Astronomie'],
    context: 'Projet de fin d\'étude - FSSM'
  },
  {
    title: "Système de diagnostic OBD-II avancé",
    description: "Développement d'un système de diagnostic complet pour véhicules utilisant le protocole OBD-II, avec interface graphique et export des données en temps réel.",
    tags: ['Python', 'OBD-II', 'Diagnostic', 'GUI'],
    context: 'Projet Personnel'
  },
  {
    title: "Simulateur de réseau CAN",
    description: "Création d'un simulateur de réseau CAN pour tester et valider des ECU sans avoir besoin de véhicule physique, avec injection de messages et simulation de pannes.",
    tags: ['CANoe', 'CAPL', 'Simulation', 'Test'],
    context: 'Projet Professionnel'
  },
  {
    title: "Plateforme de test automatisé pour ECU",
    description: "Développement d'une plateforme complète de test automatisé pour ECU incluant gestion de campagnes de test, exécution parallèle et génération de rapports.",
    tags: ['Python', 'Automatisation', 'ECU', 'Testing'],
    context: 'Projet Professionnel'
  },
  {
    title: "Analyseur de performance moteur en temps réel",
    description: "Application mobile Android pour analyser les performances moteur en temps réel via connexion Bluetooth OBD-II, avec graphiques et alertes personnalisables.",
    tags: ['Android', 'Java', 'OBD-II', 'Bluetooth'],
    context: 'Projet Personnel'
  },
  {
    title: "Système de détection de fatigue du conducteur",
    description: "Implémentation d'un système ADAS de détection de fatigue basé sur l'analyse du comportement de conduite et de la direction, avec alertes sonores et visuelles.",
    tags: ['OpenCV', 'Python', 'ADAS', 'Machine Learning'],
    context: 'Projet Académique'
  },
  {
    title: "Dashboard de monitoring de flotte de véhicules",
    description: "Développement d'un tableau de bord web pour le monitoring en temps réel d'une flotte de véhicules, incluant localisation GPS, consommation et alertes de maintenance.",
    tags: ['Django', 'JavaScript', 'GPS', 'IoT'],
    context: 'Projet Professionnel'
  },
  {
    title: "Système de parking automatisé",
    description: "Prototype d'un système de parking automatisé utilisant capteurs ultrasoniques et caméra pour détecter les espaces disponibles et guider le véhicule.",
    tags: ['Arduino', 'Capteurs', 'Computer Vision', 'Automatisation'],
    context: 'Projet Académique'
  },
  {
    title: "Outil de génération de tests HIL automatiques",
    description: "Création d'un outil qui génère automatiquement des cas de test HIL à partir de spécifications fonctionnelles, réduisant le temps de préparation de 60%.",
    tags: ['Python', 'XML', 'HIL', 'Automatisation'],
    context: 'Projet Professionnel'
  },
  {
    title: "Station météo connectée pour véhicule",
    description: "Développement d'une station météo embarquée collectant température, humidité et pression atmosphérique, avec transmission des données vers le cloud.",
    tags: ['ESP32', 'Capteurs', 'IoT', 'Cloud'],
    context: 'Projet Personnel'
  },
  {
    title: "Système d'alerte de franchissement de ligne (LDW)",
    description: "Implémentation d'un système d'alerte de franchissement de ligne involontaire utilisant une caméra et traitement d'image pour détecter les marquages routiers.",
    tags: ['OpenCV', 'Python', 'ADAS', 'Computer Vision'],
    context: 'Projet Académique'
  },
  {
    title: "Bibliothèque Python pour protocole UDS",
    description: "Développement d'une bibliothèque Python complète pour la communication avec des ECU via le protocole UDS (ISO 14229), avec support de tous les services standards.",
    tags: ['Python', 'UDS', 'ISO 14229', 'CAN'],
    context: 'Projet Open Source'
  },
  {
    title: "Simulateur de consommation de carburant",
    description: "Application web de simulation de consommation de carburant basée sur différents paramètres de conduite, avec recommandations d'éco-conduite personnalisées.",
    tags: ['Flask', 'JavaScript', 'Data Analysis', 'Web'],
    context: 'Projet Personnel'
  },
  {
    title: "Système de détection de collision avant (FCW)",
    description: "Prototype d'un système d'avertissement de collision frontale utilisant capteurs radar et caméra pour calculer la distance et la vitesse relative des obstacles.",
    tags: ['Arduino', 'Radar', 'ADAS', 'Sensor Fusion'],
    context: 'Projet Académique'
  },
  {
    title: "Outil de visualisation de données CAN en 3D",
    description: "Application de visualisation interactive des signaux CAN en temps réel avec représentation 3D du véhicule et de ses composants électroniques.",
    tags: ['Python', 'Three.js', 'CAN', 'Visualisation'],
    context: 'Projet Personnel'
  },
  {
    title: "Assistant vocal pour commande véhicule",
    description: "Développement d'un assistant vocal embarqué permettant de contrôler diverses fonctions du véhicule (climatisation, radio, navigation) par commande vocale.",
    tags: ['Python', 'Speech Recognition', 'NLP', 'Raspberry Pi'],
    context: 'Projet Personnel'
  },
  {
    title: "Système de surveillance de batterie électrique",
    description: "Conception d'un système de monitoring avancé pour batteries de véhicules électriques, incluant estimation de l'état de charge et prédiction de durée de vie.",
    tags: ['Arduino', 'Capteurs', 'IoT', 'Machine Learning'],
    context: 'Projet Académique'
  },
  {
    title: "Plateforme de formation aux protocoles automobiles",
    description: "Développement d'une plateforme e-learning interactive pour la formation aux protocoles de communication automobile (CAN, LIN, FlexRay, Ethernet).",
    tags: ['Django', 'JavaScript', 'Formation', 'Automobile'],
    context: 'Projet Professionnel'
  },
  {
    title: "Générateur de documentation technique automatique",
    description: "Outil automatisant la génération de documentation technique à partir du code source et des spécifications, incluant diagrammes UML et matrices de traçabilité.",
    tags: ['Python', 'LaTeX', 'Documentation', 'Automatisation'],
    context: 'Projet Professionnel'
  },
  {
    title: "Application mobile de suivi de maintenance véhicule",
    description: "Application Android de gestion de maintenance préventive avec rappels automatiques, historique complet et recommandations basées sur le kilométrage.",
    tags: ['Android', 'Java', 'SQLite', 'Mobile'],
    context: 'Projet Personnel'
  }
];
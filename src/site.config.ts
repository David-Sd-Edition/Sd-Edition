// Identité de l'entreprise : seule source des informations affichées sur le site (en-tête,
// contact, mentions légales, confidentialité). Toute valeur « À COMPLÉTER » bloque le
// déploiement (`npm run check:config`, lancé par la CI).

export const site = {
  commercialName: 'Sd-Edition',
  domain: 'sd-edition.fr',
  url: 'https://sd-edition.fr',
  tagline: 'Création et exploitation de sites Internet',

  // Entrepreneur individuel : le nom et le prénom doivent apparaître, suivis de la mention
  // « EI » (loi du 14 février 2022). Le nom commercial ne les remplace pas.
  owner: {
    firstName: 'David',
    lastName: 'Vallade',
    // Adresse de l'établissement (ou adresse de domiciliation déclarée).
    address: '7 Le Brillet, 35290 Saint-Onen-la-Chapelle, France',
    siret: '984 487 116 00019',
    // Ligne d'immatriculation telle qu'elle figure sur l'avis de situation (ex. « Immatriculé au
    // RNE »). Laisser vide pour ne pas l'afficher.
    registration: '',
    // Franchise en base de TVA : mention obligatoire sur les documents commerciaux.
    vatMention: 'TVA non applicable, article 293 B du CGI',
  },

  contact: {
    email: 'contact@sd-edition.fr',
    // Laisser vide pour ne pas afficher de téléphone.
    phone: '',
  },

  // Coordonnées publiées par o2switch dans ses propres mentions légales : à revérifier sur
  // https://www.o2switch.fr/mentions-legales/ avant la mise en ligne.
  host: {
    name: 'o2switch (SAS)',
    address: '222-224 Boulevard Gustave Flaubert, 63000 Clermont-Ferrand, France',
    phone: '04 44 44 60 40',
    url: 'https://www.o2switch.fr',
  },

  // Sites édités et exploités par Sd-Edition (page d'accueil, section « Nos sites »).
  // `inDevelopment: true` affiche la mention « En développement ».
  projects: [
    {
      name: 'VoxLiber',
      url: 'https://voxliber.sd-edition.fr',
      description:
        'Écrivez vos mémoires ou une histoire originale, au clavier ou par dictée, sur ordinateur comme sur mobile.',
    },
    {
      name: 'MyRefereeExperience',
      url: 'https://myrefereeexperience.sd-edition.fr',
      description:
        "Apprenez les règles du football de façon interactive : de courts modules suivis d'un questionnaire rapide.",
      inDevelopment: true,
    },
    {
      name: 'EquiCompetManager',
      url: 'https://ecm.sd-edition.fr',
      description:
        'Gestion des compétitions équestres, de la création de la compétition aux inscriptions, à la saisie des résultats et aux classements.',
      inDevelopment: true,
    },
  ],

  // Date de dernière mise à jour des pages légales (affichée en bas de ces pages).
  legalUpdatedAt: '5 octobre 2026',
}

export const ownerFullName = `${site.owner.firstName} ${site.owner.lastName}`

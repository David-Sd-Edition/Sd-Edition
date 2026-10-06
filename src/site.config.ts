// Identité de l'entreprise : seule source des informations affichées sur le site (en-tête,
// contact, mentions légales, confidentialité). Toute valeur « À COMPLÉTER » bloque le
// déploiement (`npm run check:config`, lancé par la CI).

// Sites édités et exploités par Sd-Edition (accueil et page « Éditeur de sites »).
// - `inDevelopment: true` affiche la mention « En développement ».
// - `logo`, `screenshot` : nom d'un fichier de `src/assets/projects/` (facultatif).
// - `privacyUrl` : politique de confidentialité du site (facultatif, lien affiché sur la carte).
export interface Project {
  name: string
  url: string
  description: string
  inDevelopment?: boolean
  logo?: string
  screenshot?: string
  privacyUrl?: string
}

const projects: Project[] = [
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
]

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
    // Types de demande : lien e-mail avec objet et corps préremplis (page Contact et boutons des
    // pages d'activité). Pas de formulaire : le site reste sans serveur.
    requests: {
      development: {
        label: 'Demander un devis de développement',
        subject: 'Demande de devis : développement',
        body: 'Entreprise :\nBesoin :\nDélai souhaité :\n',
      },
      ai: {
        label: 'Demander un accompagnement IA',
        subject: "Demande d'accompagnement : automatisation IA",
        body: "Entreprise :\nTâches à automatiser :\nOutils utilisés aujourd'hui :\n",
      },
      publishedSite: {
        label: 'Poser une question sur un de nos sites',
        subject: 'Question sur un site édité par Sd-Edition',
        body: 'Site concerné :\nQuestion :\n',
      },
    },
  },

  // Coordonnées publiées par o2switch dans ses propres mentions légales : à revérifier sur
  // https://www.o2switch.fr/mentions-legales/ avant la mise en ligne.
  host: {
    name: 'o2switch (SAS)',
    address: '222-224 Boulevard Gustave Flaubert, 63000 Clermont-Ferrand, France',
    phone: '04 44 44 60 40',
    url: 'https://www.o2switch.fr',
  },

  projects,

  // Date de dernière mise à jour des pages légales (affichée en bas de ces pages).
  legalUpdatedAt: '5 octobre 2026',
}

export const ownerFullName = `${site.owner.firstName} ${site.owner.lastName}`

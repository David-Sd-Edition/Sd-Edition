<script setup lang="ts">
import { site, ownerFullName } from '../site.config'

const terms = site.terms
</script>

<template>
  <section class="section">
    <div class="container narrow legal">
      <h1>Conditions générales de prestation</h1>
      <p>
        Prestataire : <strong>{{ ownerFullName }}, EI</strong> (entrepreneur individuel), exerçant sous
        le nom commercial <strong>{{ site.commercialName }}</strong> — {{ site.owner.address }} —
        SIRET {{ site.owner.siret }} —
        <a :href="`mailto:${site.contact.email}`">{{ site.contact.email }}</a>.
      </p>

      <h2>1. Champ d'application</h2>
      <p>
        Les présentes conditions s'appliquent aux prestations fournies par {{ site.commercialName }} :
        développement d'applications web, mobile ou pour ordinateur, hébergement et maintenance des
        applications livrées, accompagnement à l'automatisation de tâches avec l'intelligence
        artificielle.
      </p>
      <p>
        Ces prestations sont <strong>réservées aux professionnels</strong> agissant pour les besoins
        de leur activité. Elles ne sont pas proposées aux consommateurs ni aux non-professionnels.
      </p>
      <p>
        Le devis accepté et ses éventuelles conditions particulières prévalent sur les présentes
        conditions. Les conditions générales d'achat du client ne s'appliquent qu'avec l'accord écrit
        de {{ site.commercialName }}.
      </p>

      <h2>2. Devis et commande</h2>
      <p>
        Chaque prestation fait l'objet d'un devis gratuit, valable {{ terms.quoteValidityDays }} jours
        à compter de son émission. La commande est ferme à réception du devis accepté (signature avec la
        mention « bon pour accord » ou acceptation écrite par e-mail) et, le cas échéant, de l'acompte.
      </p>
      <p>
        Toute modification du périmètre après la commande fait l'objet d'un devis complémentaire.
      </p>

      <h2>3. Prix</h2>
      <p>
        Les prix sont établis sur devis, en euros. {{ site.owner.vatMention }}. Les prestations
        récurrentes (hébergement, maintenance) sont facturées selon la périodicité prévue au devis.
      </p>

      <h2>4. Paiement</h2>
      <p>
        Sauf mention contraire du devis, un acompte de {{ terms.depositPercent }} % est versé à la
        commande et le solde à la livraison. Les factures sont payables par virement dans un délai de
        {{ terms.paymentDays }} jours à compter de leur date d'émission. Aucun escompte n'est accordé
        en cas de paiement anticipé.
      </p>

      <h2>5. Retard de paiement</h2>
      <p>
        Tout retard de paiement entraîne de plein droit, sans rappel préalable :
      </p>
      <ul>
        <li>
          des pénalités de retard au taux d'intérêt appliqué par la Banque centrale européenne à son
          opération de refinancement la plus récente, majoré de 10 points (article L. 441-10 du Code de
          commerce) ;
        </li>
        <li>
          une indemnité forfaitaire pour frais de recouvrement de <strong>40 €</strong> (article
          D. 441-5 du Code de commerce). Une indemnisation complémentaire peut être demandée, sur
          justificatifs, lorsque les frais de recouvrement exposés dépassent ce montant.
        </li>
      </ul>
      <p>
        Après une mise en demeure restée sans effet pendant 15 jours, {{ site.commercialName }} peut
        suspendre les prestations en cours, y compris l'hébergement et la maintenance.
      </p>

      <h2>6. Réalisation et livraison</h2>
      <p>
        Les délais indiqués au devis sont donnés à titre indicatif, sauf engagement exprès. Le client
        fournit en temps utile les contenus, accès et validations nécessaires ; tout retard de sa part
        décale d'autant la livraison.
      </p>
      <p>
        À la livraison, le client dispose de {{ terms.acceptanceDays }} jours pour signaler par écrit
        les anomalies constatées au regard du devis. Passé ce délai sans réserve, ou dès la mise en
        production par le client, la livraison est réputée acceptée. Les anomalies signalées dans ce
        délai sont corrigées sans frais.
      </p>

      <h2>7. Propriété du code livré</h2>
      <p>
        À compter du paiement intégral du prix, {{ site.commercialName }} cède au client les droits
        patrimoniaux d'auteur sur le code développé spécifiquement pour lui : droits de reproduction,
        de représentation, d'adaptation et de modification, pour tout usage, pour le monde entier et
        pour toute la durée de protection. Jusqu'au paiement intégral, le client dispose d'un simple
        droit d'utilisation.
      </p>
      <p>
        Sont exclus de cette cession : les composants libres (open source), qui restent soumis à leur
        propre licence, et les outils et bibliothèques génériques de {{ site.commercialName }}, sur
        lesquels le client reçoit un droit d'utilisation non exclusif, gratuit et sans limite de durée
        pour les besoins du livrable.
      </p>
      <p>
        Sauf refus écrit du client, {{ site.commercialName }} peut mentionner la réalisation parmi ses
        références.
      </p>

      <h2>8. Hébergement et maintenance</h2>
      <p>
        Les prestations d'hébergement et de maintenance sont conclues pour la durée prévue au devis,
        puis renouvelées tacitement par périodes identiques. Chaque partie peut y mettre fin par écrit
        avec un préavis de {{ terms.terminationNoticeMonths }} mois. À la fin de la prestation, le
        client reçoit le code et ses données dans un format exploitable.
      </p>

      <h2>9. Responsabilité</h2>
      <p>
        {{ site.commercialName }} est tenu d'une obligation de moyens. Sa responsabilité est limitée aux
        dommages directs et prévisibles, dans la limite des sommes payées par le client au titre de la
        prestation concernée au cours des douze derniers mois. Elle ne couvre pas les dommages
        indirects (perte de chiffre d'affaires, de clientèle ou d'exploitation).
      </p>
      <p>
        {{ site.commercialName }} ne répond pas des interruptions ou défaillances des services tiers
        utilisés (hébergeur, fournisseurs d'API, fournisseurs d'intelligence artificielle). Les
        résultats produits par une intelligence artificielle peuvent comporter des erreurs : le client
        les vérifie avant tout usage engageant.
      </p>

      <h2>10. Données personnelles et sous-traitance</h2>
      <p>
        Lorsque {{ site.commercialName }} traite des données personnelles pour le compte du client, le
        client est responsable de traitement et {{ site.commercialName }} sous-traitant, au sens de
        l'article 28 du RGPD. À ce titre, {{ site.commercialName }} :
      </p>
      <ul>
        <li>ne traite les données que sur instruction documentée du client ;</li>
        <li>garantit la confidentialité des données et met en œuvre des mesures de sécurité adaptées ;</li>
        <li>aide le client à répondre aux demandes d'exercice des droits des personnes ;</li>
        <li>notifie au client toute violation de données dans les meilleurs délais ;</li>
        <li>supprime ou restitue les données à la fin de la prestation, au choix du client.</li>
      </ul>
      <p>
        Les sous-traitants ultérieurs sont indiqués au devis : notamment l'hébergeur et, pour les
        prestations d'automatisation IA, Anthropic (fournisseur de Claude), établi aux États-Unis. Les
        données transmises à Anthropic peuvent donc être traitées hors de l'Union européenne ; ce
        transfert est encadré par l'accord de traitement des données d'Anthropic. Le client est informé
        de tout changement de sous-traitant ultérieur et peut s'y opposer.
      </p>

      <h2>11. Confidentialité</h2>
      <p>
        Chaque partie garde confidentielles les informations de l'autre dont elle a connaissance à
        l'occasion de la prestation, pendant toute sa durée et deux ans après sa fin.
      </p>

      <h2>12. Force majeure</h2>
      <p>
        Aucune partie n'est responsable d'un manquement causé par un cas de force majeure au sens de
        l'article 1218 du Code civil. Les obligations concernées sont suspendues pendant sa durée.
      </p>

      <h2>13. Droit applicable et litiges</h2>
      <p>
        Les présentes conditions sont soumises au droit français. En cas de litige, les parties
        recherchent d'abord une solution amiable. À défaut, et sous réserve des règles de compétence
        impératives, le litige est porté devant le {{ terms.court }}.
      </p>

      <p class="muted">Version du {{ terms.updatedAt }}.</p>
    </div>
  </section>
</template>

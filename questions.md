# Une œuvre qui fasse une critique du Big Data

## Qu’est-ce que mon projet dit / critique / interroge à propos du Big Data ?

Mon projet propose une critique visuelle du Big Data. Il met en lumière la surproduction massive de données et interroge leur réelle utilité. En distinguant les données utiles (comme des informations médicales, de localisation, ou de sécurité) des données inutiles (clics, logs techniques, interactions banales), le projet cherche à faire ressentir la saturation d'information que provoque cette accumulation constante.

Je pose la question suivante : que reste-t-il de l’information véritable dans un océan de bruit numérique ?

---

## En quoi consiste mon projet ?

Il s’agit d’une expérience interactive sous forme de site web développé avec Nuxt 3. L'utilisateur est confronté à un flux continu de blocs de données apparaissant sur l'écran pendant 30 secondes.  
Chaque bloc représente une donnée et est coloré :

- **Vert** pour une donnée jugée utile
- **Rouge** pour une donnée jugée inutile

La cadence augmente progressivement, simulant l’emballement de la production de données.  
Une **barre temporelle** se remplit à mesure que l'expérience avance.  
À la fin, un **écran de synthèse** affiche des statistiques récapitulatives : nombre total de données, répartition utile/inutile, pourcentage, et surtout une mise à l’échelle pour représenter ce que cela signifierait dans le monde réel.

---

## Quels sont les choix techniques et esthétiques mis en œuvre ?

Le projet utilise :
- **Nuxt 3** (framework Vue.js) pour la structure de l’application
- **Tailwind CSS v4** pour le style rapide, minimaliste et responsive
- Une animation d’apparition progressive et aléatoire des blocs, avec opacité, taille et mouvement pour donner une sensation organique

Visuellement, le fond est noir pour faire ressortir les blocs colorés.  
Les statistiques sont affichées de manière sobre dans des encadrés semi-transparents, renforçant la lisibilité sans rompre l'ambiance.  
Une barre temporelle permet de visualiser le temps restant, avec une animation de remplissage fluide.

---

## Quelles sont les pistes abandonnées, pourquoi les avez-vous laissées tomber ? Pourquoi vos choix sont les bons ?

J’avais envisagé un **crash graphique**, avec effet glitch à la fin de l'expérience, mais cela donnait une impression trop dramatique.  
J’ai préféré une **fin claire et structurée** avec des **statistiques** pour renforcer la dimension analytique du projet.

Ce choix me semble plus juste : il recentre la réflexion sur les données plutôt que sur une esthétique de l’effondrement.

---

## Est-ce que je doute ? Oui, et c’est normal.

Je doute de la manière dont l'utilisateur percevra la frontière entre données utiles et inutiles.  
Je doute aussi de la puissance critique de l’interface : est-ce qu'elle provoque une vraie prise de conscience ? ou seulement une curiosité visuelle ?  
Mais ces doutes m'ont permis d’améliorer l’expérience : rendre la légende plus visible, ajuster les animations, ajouter une synthèse finale.

Je pense que mon œuvre est plus percutante maintenant grâce à ces questionnements.

---

## Les sources utilisées pour les statistiques de la fin

Pendant les 30 secondes de l’expérience, environ **730 blocs** sont générés.  
Dans la réalité, on estime que :

> Plus de **2.5 quintillions d’octets** sont créés chaque jour (source : [Forbes](https://www.forbes.com/sites/bernardmarr/2018/05/21/how-much-data-do-we-create-every-day-the-mind-blowing-stats-everyone-should-read/)),  
> soit **environ 870 millions de nouvelles données** toutes les 30 secondes (source : extrapolation via [Internet Live Stats](https://www.internetlivestats.com)).

Mon projet en affiche à peine un millième, ce qui montre à quel point le phénomène est **massif, continu, et insaisissable**.

---

## Conclusion

Cette œuvre propose une expérience critique et immersive du Big Data.  
Elle met en tension la perception individuelle et la réalité globale de la production de données.  
L’utilisateur vit un **débordement visuel**, puis une **prise de recul chiffrée**.  
C’est une tentative de rendre visible l’invisible, et de provoquer une réflexion personnelle sur la quantité, la valeur et la lisibilité de nos données numériques.

# Une œuvre qui fasse une critique du Big Data

## Que dit / critique / interroge mon projet à propos du Big Data ?

À travers ce projet, je critique la logique de suraccumulation des données dans le Big Data. Je mets en lumière un paradoxe : on produit une quantité gigantesque de données chaque jour, mais la grande majorité d’entre elles ne seront jamais utilisées. D’après une étude de Seagate et IDC, environ **90 % des données stockées ne sont jamais analysées** ([source](https://www.seagate.com/files/www-content/our-story/trends/files/idc-seagate-dataage-whitepaper.pdf)). Cela m’a amené à me poser des questions : pourquoi conserve-t-on autant ? À quoi servent réellement toutes ces données ? Est-ce justifié sur le plan écologique ou matériel ?

Mon projet cherche donc à provoquer une réflexion sur ce déséquilibre entre **quantité et utilité** de la donnée.

## En quoi consiste mon projet ?

J’ai réalisé un site web interactif avec **Nuxt 3** (basé sur Vue.js) et **Tailwind CSS v4**. Sur ce site, des blocs de données apparaissent en continu. Certains sont considérés comme *utiles* (fond vert), d'autres *inutiles* (fond rouge). Les contenus sont variés : symboles, chiffres, fragments de texte générés aléatoirement.

Une **barre de mémoire** en bas de l’écran se remplit progressivement, simulant l’encombrement du système. Lorsqu’elle est pleine, le site entre dans un état de surcharge visuelle qui représente le "crash" du système : une métaphore du moment où la machine ne peut plus suivre.

J’ai aussi intégré une **légende en bas à droite** pour expliquer la signification des couleurs et des éléments, sans avoir besoin de texte explicatif direct sur chaque bloc.

## Quels sont les choix techniques et esthétiques que j’ai mis en œuvre ?

Techniquement, j’ai choisi **Nuxt 3** pour la simplicité du développement frontend avec Vue et pour ses capacités SSR (même si je n’en utilise pas toutes ici). **Tailwind CSS v4** m’a permis d’aller vite dans le design tout en gardant une esthétique sobre.

Visuellement, j’ai volontairement gardé une interface minimaliste avec un fond neutre, pour que l’attention se porte uniquement sur le flux de données. Le rythme d’apparition des blocs est assez rapide pour créer une sensation de saturation.

Le **code** gère dynamiquement la génération de blocs avec différentes données, et l’**opacité varie en fonction de leur utilité**. Cela permet une lecture visuelle intuitive de la critique : plus les blocs sont "inutiles", plus ils sont transparents – ou dans la dernière version, ils apparaissent clairement en rouge pour renforcer le contraste.

## Quelles sont les pistes abandonnées, pourquoi les ai-je laissées tomber ? Pourquoi mes choix sont-ils les bons ?

Au début, j’ai pensé à faire une **infographie statique**, ou une **timeline interactive** des données numériques. Mais ces formats n’étaient pas assez immersifs. J’ai aussi essayé d’intégrer des textes explicatifs dans chaque bloc, mais ça surchargeait visuellement l’œuvre et détournait de l’idée principale.

Le site web interactif permet une **expérience plus directe** : l’utilisateur ressent le trop-plein, il voit la mémoire saturer, il vit littéralement le déséquilibre.

## Est-ce que je doute ? Oui, et c’est plutôt bon signe.

Je me suis souvent demandé si le message était assez clair **sans explication explicite**. Est-ce que les visiteurs vont comprendre que ce que je montre est une critique ? Est-ce qu’ils vont ressentir un vrai malaise face au flot de données ? Ou vont-ils juste trouver ça "beau" ou "amusant" sans aller plus loin ?

Mais je pense que ce doute fait partie du processus artistique. Laisser un peu d’interprétation est aussi une force.

## Ma démarche en résumé

Je veux montrer quelque chose d’abstrait – la donnée – de manière sensible et concrète. Ce projet est donc **une métaphore visuelle** de ce qu’on vit dans le monde numérique actuel : trop de données, pas assez de sens, et une infrastructure qui ne suit pas toujours.

Ce n’est pas un rejet complet du Big Data, mais une **mise en question de son usage intensif et souvent non maîtrisé**. En filigrane, je questionne aussi les impacts environnementaux (via le stockage) et cognitifs (via la surcharge d'information).

## Références utilisées

- IDC & Seagate, *Data Age 2025* – [lien du rapport](https://www.seagate.com/files/www-content/our-story/trends/files/idc-seagate-dataage-whitepaper.pdf)  
- Forbes, “Only 2% of all data is saved” – [article](https://www.forbes.com/sites/gilpress/2016/03/23/how-much-data-do-we-create-every-day/?sh=19a2584162d9)  
- TechJury, “How Much Data Is Created Every Day?” – [lien](https://techjury.net/blog/how-much-data-is-created-every-day/)  
- Bernard Marr, *Big Data in Practice*, Wiley, 2016


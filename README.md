# PhantStudio : site portfolio

Site de PhantStudio, studio créatif d'Adrien Feuilloy : illustration, identité graphique, faire-parts, 2D, 3D, animation et web.

**Version publique « en travaux »** : seul l’accueil (console Switch sur ordinateur, Game Boy sur mobile) avec un message d’attente, la page Contact et les mentions légales sont en ligne. Le site complet est préparé à part.

Site statique : HTML, CSS et JavaScript, sans outil de compilation. Il s'ouvre directement dans un navigateur.

## Contenu du dépôt
| Fichier / dossier | Rôle |
|---|---|
| `index.html` | Page unique : en-tête, menu, pied de page |
| `css/style.css` | Tous les styles |
| `js/app.js` | Les pages (accueil en travaux, contact, mentions légales) et la navigation |
| `js/assets.js` | Liste des images utilisées par le site |
| `assets/img/` | Images allégées (SVG, WebP, PNG) |
| `404.html` | Renvoie vers la page « introuvable » du site |
| `robots.txt`, `.nojekyll` | Réglages pour les moteurs de recherche et GitHub Pages |

## Ajouter une page
Une page de modèle masquée existe à l'adresse `/#/_test`. Elle explique la marche à suivre :
1. Copier la fonction `pageTest()` dans `js/app.js` et la renommer.
2. Ajouter une ligne dans `ROUTES`.
3. Ajouter un lien dans le menu de `index.html` si besoin.
4. Un nom qui commence par `_` rend la page secrète (hors menu, non indexée).

## Changer une image
Remplace le fichier dans `assets/img/` en gardant exactement le même nom.

## Protéger le travail
Un site en ligne est toujours lisible par le navigateur : on ne peut pas rendre du code public « non copiable ». On limite donc ce qui est publié : seules les pages finales sont ici, les fonctionnalités innovantes, les sources et les originaux restent dans le dépôt privé.

## Ce qui n'est pas ici
Sources haute définition, charte, brouillons et notes sont dans le dépôt privé. Ne dépose jamais de mot de passe, de jeton ni de clé secrète dans ce dépôt public.

© 2026 PhantStudio. Tous droits réservés (code et images). Merci de ne pas réutiliser sans accord.

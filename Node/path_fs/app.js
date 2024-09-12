const path = require("path");
const fs = require("fs");

// const cheminFichier = path.join('.', 'documents', 'rapport.txt');
// const cheminAbsolu = path.resolve(cheminFichier);
// const aExtensionTxt = path.extname(cheminAbsolu) === '.txt';
// const repertoireFichier = path.dirname(cheminAbsolu);
// const nomFichier = path.basename(cheminAbsolu, path.extname(cheminAbsolu));
// const detailsChemin = path.parse(cheminAbsolu);
// const cheminNormalise = path.normalize("chemin//vers//fichier.txt");

// console.log("Chemin complet vers rapport.txt:", cheminFichier);
// console.log("Chemin absolu:", cheminAbsolu);
// console.log("Le fichier a une extension .txt:", aExtensionTxt);
// console.log("Répertoire du fichier:", repertoireFichier);
// console.log("Nom du fichier (sans extension):", nomFichier);
// console.log("Détails du chemin:", detailsChemin);
// console.log("Chemin normalisé:", cheminNormalise);

const cheminFichier = path.join(".",'user','nouveau-repertoire', 'fichier.txt')
const cheminAbsolu = path.resolve(cheminFichier)
const repertoire = path.dirname(cheminAbsolu)
fs.mkdir(repertoire, (err) => {
  if (err) throw err;
  console.log("répertoire créer avec succès");

  fs.writeFile(
    cheminAbsolu,
    "lalalala2",
    "utf8",
    (err) => {
      if (err) throw err;
      console.log("Le fichier a été enregistré");

      fs.readFile(
        cheminAbsolu,
        "utf8",
        (err, data) => {
          if (err) throw err;
          console.log(data);
          fs.readdir(repertoire, (err, files) => {
            if (err) throw err;
            console.log("Contenu du répertoire : ", files);

            fs.unlink(
              cheminAbsolu,
              (err) => {
                if (err) throw err;
                console.log("Fichier supprimé avec succès!");

                fs.rmdir(repertoire, (err) => {
                  if (err) throw err;
                  console.log("Répertoire supprimé avec succès!");
                });
              }
            );
          });
        }
      );
    }
  );
});

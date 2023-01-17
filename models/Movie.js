const movies = [


  {
    "titre": "cosmos 1999",
    "realisateur": "Gerry Anderson ET Sylvia Anderson",
    "duree": 52,
    "dureeVisionee": 23,
    "description": "est une série télévisée de science-fiction britannique en 48 épisodes de 52 minutes, créée par Gerry Anderson et Sylvia Anderson et diffusée entre le 4 septembre 1975 et le 12 novembre 1977 sur ITV et au Canada sur le réseau CBC. ",
    "logo": "assets/img/cosmos1999.jpg",
    "acteurprincipal": "Martin Landau",
    "_id":"cosmos1999",

  },

  {
    "titre": "Air Force One",
    "realisateur": "Wolfgang Petersen",
    "duree": 124,
    "dureeVisionee":100,
    "logo": "assets/img/airforceone.jpg",
    "description": "Air Force One partout et au Québec est un thriller politique germano-américain ",
    "acteurprincipal": "Harrison Ford",
    "_id":"AirForceOne",
  },

  {
    "titre": "Guet Appens",
    "realisateur": "Roger Donaldson",
    "duree": 116,
    "dureeVisionee":56,
    "description": "Guet-apens ou Le guet-apens au Québec (The Getaway) est un film américain réalisé par Roger Donaldson, sorti en 1994. Il s'agit d'une adaptation du roman The Getaway de Jim Thompson publié en 1958 aux États-Unis1. Le roman avait déjà été adapté au cinéma en 1972 avec Guet-apens ",
    "logo": "assets/img/guetappens.jpg",
    "acteurprincipal": "Alec Baldwine",
    "_id":"GuetAppens",
  },

  {
    "titre": "Forest Gump",
    "realisateur": "Robert Zemeckis",
    "duree": 142,
    "dureeVisionee":13,
    "description": "Forrest Gump est une comédie dramatique américaine de Robert Zemeckis, sortie en 1994, adaptation du roman du même nom de l'écrivain Winston Groom, paru en 1986. ",
    "logo": "assets/img/forestgump.jpg",
    "acteurprincipal": "Tom Hanks",
    "_id":"ForestGump",
  },

  {
    "titre": "Les Legendes d'Automne",
    "realisateur": "Edward Zwick",
    "duree": 133,
    "dureeVisionee":85,
    "description": "Dans le Montana dans les années 1960, un vieil indien raconte l'histoire de la famille Ludlow.Trois frères ont été élevés dans un ranch au cœur du Montana par leur père William Ludlow, un colonel en retraite qui a quitté l’armée car il ne supportait plus la façon dont le « gouvernement »traitait les Amérindiens : il y a Alfred, l’aîné, très sérieux et paraissant plus âgé qu'il ne l'est, Samuel, le plus jeune, dont les frères sont prêts à tout pour le protéger et Tristan, un garçon sauvage qui a grandi selon les rites indiens de la chasse. Ce dernier fera une dangereuse rencontre avec un ",
    "logo": "assets/img/legendesdautomne.jpg",
    "acteurprincipal": "Brad Pitt, Anthony Hopkins, Aidan Quinn",
    "_id":"LesLegendesdAutomne",
  },

  {
    "titre": "Gladiators",
    "realisateur": "Ridley Scott",
    "duree": 155,
    "dureeVisionee":99,
    "description": "L'intrigue raconte ainsi la chute du général romain Maximus Decimus (Russell Crowe), destiné à devenir le successeur de Marc Aurèle (Richard Harris), avant que l'empereur ne soit assassiné et le général brutalement trahi et laissé pour mort par l'ambitieux et maléfique Commode (Joaquin Phoenix) qui en profite pour revêtir la pourpre. Maximus, dont la famille a été massacrée, va devenir un esclave gladiateur, conquérir le cœur du peuple romain par ses talents de combattant dans l'arène du Colisée et finalement affronter Commode dans un ultime combat. Connie Nielsen, Ralf Moeller, Djimon Hounsou et Derek Jacobi font aussi partie de la distribution. ",
    "logo": "assets/img/gladiators.jpg",
    "acteurprincipal": "Russel Crow",
    "_id":"Gladiators",

  }


];

exports.find = () => {
  return new Promise((resolve, reject) => resolve(JSON.parse(JSON.stringify(movies))));
}

exports.findById = (id) => {
  return new Promise((resolve, reject) =>
    resolve(JSON.parse(JSON.stringify(movies)).find(movie =>
      movie._id == id)
    )
  );
}





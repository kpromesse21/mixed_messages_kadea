// Text generator //

let tab = [
    [
        "Dans l’aube d’un nouveau jour, la lumière du soleil se lève à l’horizon, illuminant le ciel de teintes vibrantes et chaudes. Les oiseaux chantent leur mélodie harmonieuse tandis que la brise fraîche embrasse notre peau. Cette scène magique est le signe d’un espoir renouvelé, un rappel que chaque lever de soleil est un nouveau départ. Les aurores de l’espoir nous rappellent que, peu importe les défis auxquels nous faisons face, il y aura toujours une lumière à la fin du tunnel. Cette poésie est dédiée à ceux qui cherchent l’inspiration pour persévérer dans leur quête, pour atteindre les plus grandes hauteurs et réaliser leurs rêves les plus fous. Les aurores de l’espoir",
        "Le monde est plongé dans l’obscurité,Les cœurs des hommes sont dans la tourmente,Et pourtant, nous sommes tous égaux en vérité,Unis par notre foi en un créateur clément.",
        "Dans chaque instant de doute et de crainte,Il y a une lumière qui brille dans le noir,Elle éclaire notre chemin et nous montre la sainte enceinte,Celle qui apaise nos peurs et remplit notre espoir.",
        "Car en nous réside l’espérance,Celle qui nous rappelle que nous sommes aimés,Aimés par Le Tout-Puissant dans Sa bienveillance,Nous guidant sur le chemin de la droiture et de la paix.",
        "Alors, levons les yeux vers les cieux,Et contemplons la grâce divine qui nous entoure,Car dans chaque lever de soleil radieux,Nous retrouvons l’espoir qui jamais ne meurt.",
        "Que nos cœurs se remplissent de foi,Et que nos esprits s’ouvrent à la vérité,Nous permettant de voir au-delà de la nuit noire,Et de vivre en paix pour l’éternité.",
        "Les aurores de l’espoir sont là pour nous guider,Pour nous montrer que la victoire est à portée de main,Saisissons cette chance de nous réveiller,Et de vivre notre vie pleine de confiance et d’amour divin. Les aurores de l’espoir se lèvent,Illuminant notre chemin obscure,",
    ],
    [
        "Les saisons de l’existence – les étapes de la vie qui nous façonnent et nous transforme de l’enfance à l’âge adulte. Ces différentes saisons apportent avec elles une multitude d’expériences et de leçons de vie qui nous aident à grandir et à évoluer. Dans cette poésie inspirante, nous verrons comment chacune de ces saisons nous mène à un voyage de découverte et d’introspection, pour devenir la meilleure version de nous-mêmes. Rejoignons-nous dans cette exploration des saisons de l’existence. Les saisons de l’existence",
        "Le temps passe, les saisons changent Mais l’existence demeure, immuable et étrange Nous sommes tous des voyageurs dans cette vie En quête de sens et de clarté pour l’infini ",
        "L’enfance est un temps béni, tout en innocence Avec l’amour et la protection en abondance Les rires, les jeux et les rêves à profusion Une pureté sans tache, sans perturbation ",
        "Puis vient l’âge adulte, avec ses défis Les choix, les dilemmes, le bien et le mauvais La lourde charge devenir responsable Et la responsabilité de devenir héroïque",
    ],
    [
        "Le chant des oiseaux est un rappel, Que la vie est une symphonie, Et chacun de nous est essentiel, Au rythme de l’univers, dans l’harmonie. ",
        "Chaque occasion est une opportunité, De louer Dieu avec gratitude et humilité, Comme les oiseaux qui chantent sans cesse, Ne jamais cesser de croire en sa sainte promesse. ",
        "Le chant des oiseaux m’invite à méditer, À réfléchir sur mon existence et la destinée, Il me rappelle que Dieu est présent en tout lieu, Que sa sagesse et sa miséricorde sont infinis et vrais. ",
        "Alors laissez les oiseaux chanter leur mélodie, Et que leur chant soit notre inspiraion et notre prière, Amen pour une vie de paix, d’amour et de bénédiction, Amen pour un monde de justice, de compassion et de coopération. Que Le chant des oiseaux continue de résonner, "],
]

let l=tab.length ,n1=Math.floor(Math.random() * l), tab1=tab[n1], l1=tab1.length, n2=Math.floor(Math.random() * l1), phrase=tab1[n2];

console.log('=============================================================='+phrase+"=========================================================");

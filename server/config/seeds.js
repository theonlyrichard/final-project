const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'January' },
    { name: 'February' },
    { name: 'March' },
    { name: 'April' },
    { name: 'May' },
    { name: 'June' },
    { name: 'July' },
    { name: 'August' },
    { name: 'September' },
    { name: 'October' },
    { name: 'November' },
    { name: 'December' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Project Hail Mary by Andy Weir',
      description:
        'Ryland Grace is the sole survivor on a desperate, last-chance mission—and if he fails, humanity and the earth itself will perish. Except that right now, he doesnt know that. He cant even remember his own name, let alone the nature of his assignment or how to complete it. All he knows is that hes been asleep for a very, very long time. And hes just been awakened to find himself millions of miles from home, with nothing but two corpses for company.His crewmates dead, his memories fuzzily returning, Ryland realizes that an impossible task now confronts him. Hurtling through space on this tiny ship, its up to him to puzzle out an impossible scientific mystery—and conquer an extinction-level threat to our species. And with the clock ticking down and the nearest human being light-years away, hes got to do it all alone. Or does he?',
      image: 'cookie-tin.jpg',
      category: categories[0]._id,
      price: 2.99,
      quantity: 500
    },
    {
      name: 'Dune by Frank Herbert',
      description:
        'Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides, heir to a noble family tasked with ruling an inhospitable world where the only thing of value is the “spice” melange, a drug capable of extending life and enhancing consciousness. Coveted across the known universe, melange is a prize worth killing for.... When House Atreides is betrayed, the destruction of Paul’s family will set the boy on a journey toward a destiny greater than he could ever have imagined. And as he evolves into the mysterious man known as Muad’Dib, he will bring to fruition humankind’s most ancient and unattainable dream. A stunning blend of adventure and mysticism, environmentalism and politics, Dune won the first Nebula Award, shared the Hugo Award, and formed the basis of what is undoubtedly the grandest epic in science fiction.',
      image: 'canned-coffee.jpg',
      category: categories[0]._id,
      price: 1.99,
      quantity: 500
    },
    {
      name: "Ender's Game by Orson Scott Card",
      category: categories[0]._id,
      description:
        "In order to develop a secure defense against a hostile alien race's next attack, government agencies breed child geniuses and train them as soldiers. A brilliant young boy, Andrew 'Ender' Wiggin lives with his kind but distant parents, his sadistic brother Peter, and the person he loves more than anyone else, his sister Valentine. Peter and Valentine were candidates for the soldier-training program but didn't make the cut - young Ender is the Wiggin drafted to the orbiting Battle School for rigorous military training. Ender's skills make him a leader in school and respected in the Battle Room, where children play at mock battles in zero gravity. Yet growing up in an artificial community of young soldiers Ender suffers greatly from isolation, rivalry from his peers, pressure from the adult teachers, and an unsettling fear of the alien invaders. His psychological battles include loneliness, fear that he is becoming like the cruel brother he remembers, and fanning the flames of devotion to his beloved sister. Is Ender the general Earth needs? But Ender is not the only result of the genetic experiments. The war with the Buggers has been raging for a hundred years, and the quest for the perfect general has been underway for almost as long. Ender's two older siblings are every bit as unusual as he is, but in very different ways. Between the three of them lie the abilities to remake a world. If, that is, the world survives. Orson Scott Card's Ender's Game is the winner of the 1985 Nebula Award for Best Novel and the 1986 Hugo Award for Best Novel.",
      image: 'toilet-paper.jpg',
      price: 7.99,
      quantity: 20
    },
    {
      name: 'Ready Player One by Ernest Cline',
      category: categories[0]._id,
      description:
        "It’s the year 2044, and the real world is an ugly place. Like most of humanity, Wade Watts escapes his grim surroundings by spending his waking hours jacked into the OASIS, a sprawling virtual utopia that lets you be anything you want to be, a place where you can live and play and fall in love on any of 10,000 planets. And like most of humanity, Wade dreams of being the one to discover the ultimate lottery ticket that lies concealed within this virtual world. For somewhere inside this giant networked playground, OASIS creator James Halliday has hidden a series of fiendish puzzles that will yield massive fortune - and remarkable power - to whoever can unlock them.For years, millions have struggled fruitlessly to attain this prize, knowing only that Halliday’s riddles are based in the pop culture he loved - that of the late 20th century. And for years, millions have found in this quest another means of escape, retreating into happy, obsessive study of Halliday’s icons. Like many of his contemporaries, Wade is as comfortable debating the finer points of John Hughes’s oeuvre, playing Pac-Man, or reciting Devo lyrics as he is scrounging power to run his OASIS rig. And then Wade stumbles upon the first puzzle. Suddenly the whole world is watching, and thousands of competitors join the hunt - among them certain powerful players who are willing to commit very real murder to beat Wade to this prize. Now the only way for Wade to survive and preserve everything he knows is to win. But to do so, he may have to leave behind his oh-so-perfect virtual existence and face up to life - and love - in the real world he’s always been so desperate to escape.",
      image: 'soap.jpg',
      price: 3.99,
      quantity: 50
    },
    {
      name: 'One Hundred Years of Solitude by Gabriel Garcia Marquez',
      category: categories[1]._id,
      description:
        'One of the twentieth century’s enduring works, One Hundred Years of Solitude is a widely beloved and acclaimed novel known throughout the world and the ultimate achievement in a Nobel Prize–winning career. The novel tells the story of the rise and fall of the mythical town of Macondo through the history of the Buendía family. Rich and brilliant, it is a chronicle of life, death, and the tragicomedy of humankind. In the beautiful, ridiculous, and tawdry story of the Buendía family, one sees all of humanity, just as in the history, myths, growth, and decay of Macondo, one sees all of Latin America. Love and lust, war and revolution, riches and poverty, youth and senility, the variety of life, the endlessness of death, the search for peace and truth—these universal themes dominate the novel. Alternately reverential and comical, One Hundred Years of Solitude weaves the political, personal, and spiritual to bring a new consciousness to storytelling. Translated into dozens of languages, this stunning work is no less than an account of the history of the human race.',
      image: 'wooden-spoons.jpg',
      price: 14.99,
      quantity: 100
    },
    {
      name: 'Crime and Punishment by Fyodor Dostoevsky',
      category: categories[1]._id,
      description:
        "'Crime and Punishment' is a novel by Fyodor Dostoyevsky, first published in 1866. It is the second of Dostoyevsky's full-length novels following his return from ten years of exile in Siberia. The plot of Crime and Punishment is probably familiar to many. An impoverished former student, Rodion Romanovich Raskolnikov lives in St. Petersburg. Raskolnikov is a nihilist, driven by a utilitarian prospective, he contemplates committing a terrible crime. Dostoyevsky explores psychology of crime and punishment and focuses on what lies between the two end points. Raskolnikov’s inner world is full of doubts, deliria and despair—partly a result of his utter disregard of social norms. Alienated from society, he is forced to face his tormenting guilt almost completely on his own. Pretty illustrations by Dmitrii Rybalko provide you with new impressions from reading this legendary story.",
      image: 'camera.jpg',
      price: 399.99,
      quantity: 30
    },
    {
      name: 'Wuthering Heights by Emily Brontë',
      category: categories[1]._id,
      description:
        "Wuthering Heights is a wild, passionate story of the intense and almost demonic love between Catherine Earnshaw and Heathcliff, a foundling adopted by Catherine's father. After Mr Earnshaw's death, Heathcliff is bullied and humiliated by Catherine's brother Hindley and wrongly believing that his love for Catherine is not reciprocated, leaves Wuthering Heights, only to return years later as a wealthy and polished man. He proceeds to exact a terrible revenge for his former miseries. The action of the story is chaotic and unremittingly violent, but the accomplished handling of a complex structure, the evocative descriptions of the lonely moorland setting and the poetic grandeur of vision combine to make this unique novel a masterpiece of English literature.",
      image: 'tablet.jpg',
      price: 199.99,
      quantity: 30
    },
    {
      name: "Alice's Adventures in Wonderland by Lewis Carroll",
      category: categories[1]._id,
      description:
        'After a tumble down the rabbit hole, Alice finds herself far away from home in the absurd world of Wonderland. As mind-bending as it is delightful, Lewis Carroll’s 1865 novel is pure magic for young and old alike.',
      image: 'bedtime-book.jpg',
      price: 9.99,
      quantity: 100
    },
    {
      name: 'Catch-22 by Joseph Heller',
      category: categories[2]._id,
      description: 'Set in Italy during World War II, this is the story of the incomparable, malingering bombardier, Yossarian, a hero who is furious because thousands of people he has never met are trying to kill him. But his real problem is not the enemy—it is his own army, which keeps increasing the number of missions the men must fly to complete their service. Yet if Yossarian makes any attempt to excuse himself from the perilous missions he’s assigned, he’ll be in violation of Catch-22, a hilariously sinister bureaucratic rule: a man is considered insane if he willingly continues to fly dangerous combat missions, but if he makes a formal request to be removed from duty, he is proven sane and therefore ineligible to be relieved.',
      image: 'spinning-top.jpg',
      price: 1.99,
      quantity: 1000
    },
    {
      name: 'The Lord of the Rings by J.R.R. Tolkien',
      category: categories[2]._id,
      description:
        "In ancient times the Rings of Power were crafted by the Elven-smiths, and Sauron, the Dark Lord, forged the One Ring, filling it with his own power so that he could rule all others. But the One Ring was taken from him, and though he sought it throughout Middle-earth, it remained lost to him. After many ages it fell by chance into the hands of the hobbit Bilbo Baggins. From Sauron's fastness in the Dark Tower of Mordor, his power spread far and wide. Sauron gathered all the Great Rings to him, but always he searched for the One Ring that would complete his dominion. When Bilbo reached his eleventy-first birthday he disappeared, bequeathing to his young cousin Frodo the Ruling Ring and a perilous quest: to journey across Middle-earth, deep into the shadow of the Dark Lord, and destroy the Ring by casting it into the Cracks of Doom. The Lord of the Rings tells of the great quest undertaken by Frodo and the Fellowship of the Ring: Gandalf the Wizard; the hobbits Merry, Pippin, and Sam; Gimli the Dwarf; Legolas the Elf; Boromir of Gondor; and a tall, mysterious stranger called Strider.",
      image: 'plastic-horses.jpg',
      price: 2.99,
      quantity: 1000
    },
    {
      name: 'To Paradise by Hanya Yanagihara',
      category: categories[2]._id,
      description:
        "In an alternate version of 1893 America, New York is part of the Free States, where people may live and love whomever they please (or so it seems). The fragile young scion of a distinguished family resists betrothal to a worthy suitor, drawn to a charming music teacher of no means. In a 1993 Manhattan besieged by the AIDS epidemic, a young Hawaiian man lives with his much older, wealthier partner, hiding his troubled childhood and the fate of his father. And in 2093, in a world riven by plagues and governed by totalitarian rule, a powerful scientist’s damaged granddaughter tries to navigate life without him—and solve the mystery of her husband’s disappearances. These three sections are joined in an enthralling and ingenious symphony, as recurring notes and themes deepen and enrich one another: A townhouse in Washington Square Park in Greenwich Village; illness, and treatments that come at a terrible cost; wealth and squalor; the weak and the strong; race; the definition of family, and of nationhood; the dangerous righteousness of the powerful, and of revolutionaries; the longing to find a place in an earthly paradise, and the gradual realization that it can’t exist. What unites not just the characters, but these Americas, are their reckonings with the qualities that make us human: Fear. Love. Shame. Need. Loneliness.",
      image: 'teddy-bear.jpg',
      price: 7.99,
      quantity: 100
    },
    {
      name: 'The Paris Apartment by Lucy Foley',
      category: categories[2]._id,
      description:
        "Jess needs a fresh start. She’s broke and alone, and she’s just left her job under less than ideal circumstances. Her half-brother Ben didn’t sound thrilled when she asked if she could crash with him for a bit, but he didn’t say no, and surely everything will look better from Paris. Only when she shows up – to find a very nice apartment, could Ben really have afforded this? – he’s not there. The longer Ben stays missing, the more Jess starts to dig into her brother’s situation, and the more questions she has. Ben’s neighbors are an eclectic bunch, and not particularly friendly. Jess may have come to Paris to escape her past, but it’s starting to look like it’s Ben’s future that’s in question. The socialite – The nice guy – The alcoholic – The girl on the verge – The concierge. Everyone’s a neighbor. Everyone’s a suspect. And everyone knows something they’re not telling.",
      image: 'alphabet-blocks.jpg',
      price: 9.99,
      quantity: 600
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});

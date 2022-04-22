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
    },
    {
      name: 'Sea of Tranquility by Emily St. John Mandel',
      category: categories[3]._id,
      description: "Edwin St. Andrew is eighteen years old when he crosses the Atlantic by steamship, exiled from polite society following an ill-conceived diatribe at a dinner party. He enters the forest, spellbound by the beauty of the Canadian wilderness, and suddenly hears the notes of a violin echoing in an airship terminal--an experience that shocks him to his core. Two centuries later a famous writer named Olive Llewellyn is on a book tour. She's traveling all over Earth, but her home is the second moon colony, a place of white stone, spired towers, and artificial beauty. Within the text of Olive's bestselling pandemic novel lies a strange passage: a man plays his violin for change in the echoing corridor of an airship terminal as the trees of a forest rise around him. When Gaspery-Jacques Roberts, a detective in the Night City, is hired to investigate an anomaly in the North American wilderness, he uncovers a series of lives upended: The exiled son of an earl driven to madness, a writer trapped far from home as a pandemic ravages Earth, and a childhood friend from the Night City who, like Gaspery himself, has glimpsed the chance to do something extraordinary that will disrupt the timeline of the universe. A virtuoso performance that is as human and tender as it is intellectually playful, Sea of Tranquility is a novel of time travel and metaphysics that precisely captures the reality of our current moment.",
      image: 'spinning-top.jpg',
      price: 1.99,
      quantity: 1000
    },
    {
      name: 'Moby Dick by Herman Melville',
      category: categories[3]._id,
      description: "So Melville wrote of his masterpiece, one of the greatest works of imagination in literary history. In part, Moby-Dick is the story of an eerily compelling madman pursuing an unholy war against a creature as vast and dangerous and unknowable as the sea itself. But more than just a novel of adventure, more than an encyclopaedia of whaling lore and legend, the book can be seen as part of its author's lifelong meditation on America. Written with wonderfully redemptive humour, Moby-Dick is also a profound inquiry into character, faith, and the nature of perception.",
      image: 'spinning-top.jpg',
      price: 1.99,
      quantity: 1000
    },
    {
      name: 'The Midnight Library by Matt Haig',
      category: categories[3]._id,
      description: "Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived. To see how things would be if you had made other choices . . . Would you have done anything different, if you had the chance to undo your regrets? A dazzling novel about all the choices that go into a life well lived, from the internationally bestselling author of Reasons to Stay Alive and How To Stop Time. Somewhere out beyond the edge of the universe there is a library that contains an infinite number of books, each one the story of another reality. One tells the story of your life as it is, along with another book for the other life you could have lived if you had made a different choice at any point in your life. While we all wonder how our lives might have been, what if you had the chance to go to the library and see for yourself? Would any of these other lives truly be better? In The Midnight Library, Matt Haig’s enchanting new novel, Nora Seed finds herself faced with this decision. Faced with the possibility of changing her life for a new one, following a different career, undoing old breakups, realizing her dreams of becoming a glaciologist; she must search within herself as she travels through the Midnight Library to decide what is truly fulfilling in life, and what makes it worth living in the first place.",
      image: 'spinning-top.jpg',
      price: 1.99,
      quantity: 1000
    },
    {
      name: 'Portrait of a Thief by Grace D. Li',
      category: categories[3]._id,
      description: 'History is told by the conquerors. Across the Western world, museums display the spoils of war, of conquest, of colonialism: priceless pieces of art looted from other countries, kept even now. Will Chen plans to steal them back. A senior at Harvard, Will fits comfortably in his carefully curated roles: a perfect student, an art history major and sometimes artist, the eldest son who has always been his parents’ American Dream. But when a mysterious Chinese benefactor reaches out with an impossible—and illegal—job offer, Will finds himself something else as well: the leader of a heist to steal back five priceless Chinese sculptures, looted from Beijing centuries ago. His crew is every heist archetype one can imag­ine—or at least, the closest he can get. A con artist: Irene Chen, a public policy major at Duke who can talk her way out of anything. A thief: Daniel Liang, a premed student with steady hands just as capable of lockpicking as suturing. A getaway driver: Lily Wu, an engineering major who races cars in her free time. A hacker: Alex Huang, an MIT dropout turned Silicon Valley software engineer. Each member of his crew has their own complicated relationship with China and the identity they’ve cultivated as Chinese Americans, but when Will asks, none of them can turn him down. Because if they succeed? They earn fifty million dollars—and a chance to make history. But if they fail, it will mean not just the loss of everything they’ve dreamed for themselves but yet another thwarted at­tempt to take back what colonialism has stolen. Equal parts beautiful, thoughtful, and thrilling, Portrait of a Thief is a cultural heist and an examination of Chinese American identity, as well as a necessary cri­tique of the lingering effects of colonialism.',
      image: 'spinning-top.jpg',
      price: 1.99,
      quantity: 1000
    },
    {
      name: 'Ulysses by James Joyce',
      category: categories[4]._id,
      description: 'Loosely based on the Odyssey, this landmark of modern literature follows ordinary Dubliners in 1904. Capturing a single day in the life of Dubliner Leopold Bloom, his friends Buck Mulligan and Stephen Dedalus, his wife Molly, and a scintillating cast of supporting characters, Joyce pushes Celtic lyricism and vulgarity to splendid extremes. Captivating experimental techniques range from interior monologues to exuberant wordplay and earthy humor. A major achievement in 20th century literature. ',
      image: 'spinning-top.jpg',
      price: 1.99,
      quantity: 1000
    },
    {
      name: 'The Great Gatsby by F. Scott Fitzgerald',
      category: categories[4]._id,
      description: "The Great Gatsby, F. Scott Fitzgerald's third book, stands as the supreme achievement of his career. This exemplary novel of the Jazz Age has been acclaimed by generations of readers. The story is of the fabulously wealthy Jay Gatsby and his new love for the beautiful Daisy Buchanan, of lavish parties on Long Island at a time when The New York Times noted 'gin was the national drink and sex the national obsession,' it is an exquisitely crafted tale of America in the 1920s.",
      image: 'spinning-top.jpg',
      price: 1.99,
      quantity: 1000
    },
    {
      name: 'A Portrait of the Artist as a Young Man by James Joyce',
      category: categories[4]._id,
      description: "The portrayal of Stephen Dedalus's Dublin childhood and youth, his quest for identity through art and his gradual emancipation from the claims of family, religion and Ireland itself, is also an oblique self-portrait of the young James Joyce and a universal testament to the artist's 'eternal imagination'. Both an insight into Joyce's life and childhood, and a unique work of modernist fiction, A Portrait of the Artist as a Young Man is a novel of sexual awakening, religious rebellion and the essential search for voice and meaning that every nascent artist must face in order to blossom fully into themselves.",
      image: 'spinning-top.jpg',
      price: 1.99,
      quantity: 1000
    },
    {
      name: 'Brave New World by Aldous Huxley',
      category: categories[4]._id,
      description: "Brave New World is a dystopian novel by English author Aldous Huxley, written in 1931 and published in 1932. Largely set in a futuristic World State, inhabited by genetically modified citizens and an intelligence-based social hierarchy, the novel anticipates huge scientific advancements in reproductive technology, sleep-learning, psychological manipulation and classical conditioning that are combined to make a dystopian society which is challenged by only a single individual: the story's protagonist.",
      image: 'spinning-top.jpg',
      price: 1.99,
      quantity: 1000
    },
    {
      name: 'The Sound and the Fury by William Faulkner',
      category: categories[5]._id,
      description: 'The tragedy of the Compson family features some of the most memorable characters in literature: beautiful, rebellious Caddy; the manchild Benjy; haunted, neurotic Quentin; Jason, the brutal cynic; and Dilsey, their black servant. Their lives fragmented and harrowed by history and legacy, the character’s voices and actions mesh to create what is arguably Faulkner’s masterpiece and one of the greatest novels of the twentieth century.',
      image: 'spinning-top.jpg',
      price: 1.99,
      quantity: 1000
    },
    {
      name: 'Darkness at Noon by Arthur Koestler',
      category: categories[5]._id,
      description: "Darkness at Noon (from the German: Sonnenfinsternis) is a novel by the Hungarian-born British novelist Arthur Koestler, first published in 1940. His best-known work tells the tale of Rubashov, a Bolshevik 1917 revolutionary who is cast out, imprisoned and tried for treason by the Soviet government he'd helped create. Darkness at Noon stands as an unequaled fictional portrayal of the nightmare politics of our time. Its hero is an aging revolutionary, imprisoned and psychologically tortured by the Party to which he has dedicated his life. As the pressure to confess preposterous crimes increases, he relives a career that embodies the terrible ironies and human betrayals of a totalitarian movement masking itself as an instrument of deliverance. Almost unbearably vivid in its depiction of one man's solitary agony, it asks questions about ends and means that have relevance not only for the past but for the perilous present.",
      image: 'spinning-top.jpg',
      price: 1.99,
      quantity: 1000
    },
    {
      name: 'Sons and Lovers by D.H. Lawrence',
      category: categories[5]._id,
      description: "The marriage of Gertrude and Walter Morel has become a battleground. Repelled by her uneducated and sometimes violent husband, delicate Gertrude devotes her life to her children, especially to her sons, William and Paul - determined they will not follow their father into working down the coal mines. But conflict is evitable when Paul seeks to escape his mother's suffocating grasp through relationships with women his own age. Set in Lawrence's native Nottinghamshire, Sons and Lovers is a highly autobiographical and compelling portrayal of childhood, adolescence and the clash of generations.",
      image: 'spinning-top.jpg',
      price: 1.99,
      quantity: 1000
    },
    {
      name: 'The Grapes of Wrath by John Steinbeck',
      category: categories[5]._id,
      description: 'The Pulitzer Prize-winning epic of the Great Depression, a book that galvanized—and sometimes outraged—millions of readers. First published in 1939, Steinbeck’s Pulitzer Prize-winning epic of the Great Depression chronicles the Dust Bowl migration of the 1930s and tells the story of one Oklahoma farm family, the Joads—driven from their homestead and forced to travel west to the promised land of California. Out of their trials and their repeated collisions against the hard realities of an America divided into Haves and Have-Nots evolves a drama that is intensely human yet majestic in its scale and moral vision, elemental yet plainspoken, tragic but ultimately stirring in its human dignity. A portrait of the conflict between the powerful and the powerless, of one man’s fierce reaction to injustice, and of one woman’s stoical strength, the novel captures the horrors of the Great Depression and probes into the very nature of equality and justice in America. At once a naturalistic epic, captivity narrative, road novel, and transcendental gospel, Steinbeck’s powerful landmark novel is perhaps the most American of American Classics.',
      image: 'spinning-top.jpg',
      price: 1.99,
      quantity: 1000
    },
    {
      name: 'The Name of the Wind by Patrick Rothfuss',
      category: categories[6]._id,
      description: "Told in Kvothe's own voice, this is the tale of the magically gifted young man who grows to be the most notorious wizard his world has ever seen. The intimate narrative of his childhood in a troupe of traveling players, his years spent as a near-feral orphan in a crime-ridden city, his daringly brazen yet successful bid to enter a legendary school of magic, and his life as a fugitive after the murder of a king form a gripping coming-of-age story unrivaled in recent literature. A high-action story written with a poet's hand, The Name of the Wind is a masterpiece that will transport readers into the body and mind of a wizard.",
      image: 'spinning-top.jpg',
      price: 1.99,
      quantity: 1000
    },
    {
      name: 'The Way of the Shadows by Brent Weeks',
      category: categories[6]._id,
      description: "For Durzo Blint, assassination is an art-and he is the city's most accomplished artist. For Azoth, survival is precarious. Something you never take for granted. As a guild rat, he's grown up in the slums, and learned to judge people quickly - and to take risks. Risks like apprenticing himself to Durzo Blint. But to be accepted, Azoth must turn his back on his old life and embrace a new identity and name. As Kylar Stern, he must learn to navigate the assassins' world of dangerous politics and strange magics - and cultivate a flair for death.",
      image: 'spinning-top.jpg',
      price: 1.99,
      quantity: 1000
    },
    {
      name: 'The Lies of Locke Lamora by Scott Lynch',
      category: categories[6]._id,
      description: 'An orphan’s life is harsh—and often short—in the mysterious island city of Camorr. But young Locke Lamora dodges death and slavery, becoming a thief under the tutelage of a gifted con artist. As leader of the band of light-fingered brothers known as the Gentleman Bastards, Locke is soon infamous, fooling even the underworld’s most feared ruler. But in the shadows lurks someone still more ambitious and deadly. Faced with a bloody coup that threatens to destroy everyone and everything that holds meaning in his mercenary life, Locke vows to beat the enemy at his own brutal game—or die trying.',
      image: 'spinning-top.jpg',
      price: 1.99,
      quantity: 1000
    },
    {
      name: 'The Book Thief by Markus Zusak',
      category: categories[6]._id,
      description: "It is 1939. Nazi Germany. The country is holding its breath. Death has never been busier, and will be busier still. By her brother's graveside, Liesel's life is changed when she picks up a single object, partially hidden in the snow. It is The Gravedigger's Handbook, left behind there by accident, and it is her first act of book thievery. So begins a love affair with books and words, as Liesel, with the help of her accordian-playing foster father, learns to read. Soon she is stealing books from Nazi book-burnings, the mayor's wife's library, wherever there are books to be found. But these are dangerous times. When Liesel's foster family hides a Jew in their basement, Liesel's world is both opened up, and closed down. In superbly crafted writing that burns with intensity, award-winning author Markus Zusak has given us one of the most enduring stories of our time.",
      image: 'spinning-top.jpg',
      price: 1.99,
      quantity: 1000
    },
    {
      name: 'Catch-22 by Joseph Heller',
      category: categories[7]._id,
      description: 'Set in Italy during World War II, this is the story of the incomparable, malingering bombardier, Yossarian, a hero who is furious because thousands of people he has never met are trying to kill him. But his real problem is not the enemy—it is his own army, which keeps increasing the number of missions the men must fly to complete their service. Yet if Yossarian makes any attempt to excuse himself from the perilous missions he’s assigned, he’ll be in violation of Catch-22, a hilariously sinister bureaucratic rule: a man is considered insane if he willingly continues to fly dangerous combat missions, but if he makes a formal request to be removed from duty, he is proven sane and therefore ineligible to be relieved.',
      image: 'spinning-top.jpg',
      price: 1.99,
      quantity: 1000
    },
    {
      name: 'Catch-22 by Joseph Heller',
      category: categories[7]._id,
      description: 'Set in Italy during World War II, this is the story of the incomparable, malingering bombardier, Yossarian, a hero who is furious because thousands of people he has never met are trying to kill him. But his real problem is not the enemy—it is his own army, which keeps increasing the number of missions the men must fly to complete their service. Yet if Yossarian makes any attempt to excuse himself from the perilous missions he’s assigned, he’ll be in violation of Catch-22, a hilariously sinister bureaucratic rule: a man is considered insane if he willingly continues to fly dangerous combat missions, but if he makes a formal request to be removed from duty, he is proven sane and therefore ineligible to be relieved.',
      image: 'spinning-top.jpg',
      price: 1.99,
      quantity: 1000
    },
    {
      name: 'Catch-22 by Joseph Heller',
      category: categories[7]._id,
      description: 'Set in Italy during World War II, this is the story of the incomparable, malingering bombardier, Yossarian, a hero who is furious because thousands of people he has never met are trying to kill him. But his real problem is not the enemy—it is his own army, which keeps increasing the number of missions the men must fly to complete their service. Yet if Yossarian makes any attempt to excuse himself from the perilous missions he’s assigned, he’ll be in violation of Catch-22, a hilariously sinister bureaucratic rule: a man is considered insane if he willingly continues to fly dangerous combat missions, but if he makes a formal request to be removed from duty, he is proven sane and therefore ineligible to be relieved.',
      image: 'spinning-top.jpg',
      price: 1.99,
      quantity: 1000
    },
    {
      name: 'Catch-22 by Joseph Heller',
      category: categories[7]._id,
      description: 'Set in Italy during World War II, this is the story of the incomparable, malingering bombardier, Yossarian, a hero who is furious because thousands of people he has never met are trying to kill him. But his real problem is not the enemy—it is his own army, which keeps increasing the number of missions the men must fly to complete their service. Yet if Yossarian makes any attempt to excuse himself from the perilous missions he’s assigned, he’ll be in violation of Catch-22, a hilariously sinister bureaucratic rule: a man is considered insane if he willingly continues to fly dangerous combat missions, but if he makes a formal request to be removed from duty, he is proven sane and therefore ineligible to be relieved.',
      image: 'spinning-top.jpg',
      price: 1.99,
      quantity: 1000
    },
    {
      name: 'Catch-22 by Joseph Heller',
      category: categories[8]._id,
      description: 'Set in Italy during World War II, this is the story of the incomparable, malingering bombardier, Yossarian, a hero who is furious because thousands of people he has never met are trying to kill him. But his real problem is not the enemy—it is his own army, which keeps increasing the number of missions the men must fly to complete their service. Yet if Yossarian makes any attempt to excuse himself from the perilous missions he’s assigned, he’ll be in violation of Catch-22, a hilariously sinister bureaucratic rule: a man is considered insane if he willingly continues to fly dangerous combat missions, but if he makes a formal request to be removed from duty, he is proven sane and therefore ineligible to be relieved.',
      image: 'spinning-top.jpg',
      price: 1.99,
      quantity: 1000
    },
    {
      name: 'Catch-22 by Joseph Heller',
      category: categories[8]._id,
      description: 'Set in Italy during World War II, this is the story of the incomparable, malingering bombardier, Yossarian, a hero who is furious because thousands of people he has never met are trying to kill him. But his real problem is not the enemy—it is his own army, which keeps increasing the number of missions the men must fly to complete their service. Yet if Yossarian makes any attempt to excuse himself from the perilous missions he’s assigned, he’ll be in violation of Catch-22, a hilariously sinister bureaucratic rule: a man is considered insane if he willingly continues to fly dangerous combat missions, but if he makes a formal request to be removed from duty, he is proven sane and therefore ineligible to be relieved.',
      image: 'spinning-top.jpg',
      price: 1.99,
      quantity: 1000
    },
    {
      name: 'Catch-22 by Joseph Heller',
      category: categories[8]._id,
      description: 'Set in Italy during World War II, this is the story of the incomparable, malingering bombardier, Yossarian, a hero who is furious because thousands of people he has never met are trying to kill him. But his real problem is not the enemy—it is his own army, which keeps increasing the number of missions the men must fly to complete their service. Yet if Yossarian makes any attempt to excuse himself from the perilous missions he’s assigned, he’ll be in violation of Catch-22, a hilariously sinister bureaucratic rule: a man is considered insane if he willingly continues to fly dangerous combat missions, but if he makes a formal request to be removed from duty, he is proven sane and therefore ineligible to be relieved.',
      image: 'spinning-top.jpg',
      price: 1.99,
      quantity: 1000
    },
    {
      name: 'Catch-22 by Joseph Heller',
      category: categories[8]._id,
      description: 'Set in Italy during World War II, this is the story of the incomparable, malingering bombardier, Yossarian, a hero who is furious because thousands of people he has never met are trying to kill him. But his real problem is not the enemy—it is his own army, which keeps increasing the number of missions the men must fly to complete their service. Yet if Yossarian makes any attempt to excuse himself from the perilous missions he’s assigned, he’ll be in violation of Catch-22, a hilariously sinister bureaucratic rule: a man is considered insane if he willingly continues to fly dangerous combat missions, but if he makes a formal request to be removed from duty, he is proven sane and therefore ineligible to be relieved.',
      image: 'spinning-top.jpg',
      price: 1.99,
      quantity: 1000
    },
    {
      name: 'Catch-22 by Joseph Heller',
      category: categories[9]._id,
      description: 'Set in Italy during World War II, this is the story of the incomparable, malingering bombardier, Yossarian, a hero who is furious because thousands of people he has never met are trying to kill him. But his real problem is not the enemy—it is his own army, which keeps increasing the number of missions the men must fly to complete their service. Yet if Yossarian makes any attempt to excuse himself from the perilous missions he’s assigned, he’ll be in violation of Catch-22, a hilariously sinister bureaucratic rule: a man is considered insane if he willingly continues to fly dangerous combat missions, but if he makes a formal request to be removed from duty, he is proven sane and therefore ineligible to be relieved.',
      image: 'spinning-top.jpg',
      price: 1.99,
      quantity: 1000
    },
    {
      name: 'Catch-22 by Joseph Heller',
      category: categories[9]._id,
      description: 'Set in Italy during World War II, this is the story of the incomparable, malingering bombardier, Yossarian, a hero who is furious because thousands of people he has never met are trying to kill him. But his real problem is not the enemy—it is his own army, which keeps increasing the number of missions the men must fly to complete their service. Yet if Yossarian makes any attempt to excuse himself from the perilous missions he’s assigned, he’ll be in violation of Catch-22, a hilariously sinister bureaucratic rule: a man is considered insane if he willingly continues to fly dangerous combat missions, but if he makes a formal request to be removed from duty, he is proven sane and therefore ineligible to be relieved.',
      image: 'spinning-top.jpg',
      price: 1.99,
      quantity: 1000
    },
    {
      name: 'Catch-22 by Joseph Heller',
      category: categories[9]._id,
      description: 'Set in Italy during World War II, this is the story of the incomparable, malingering bombardier, Yossarian, a hero who is furious because thousands of people he has never met are trying to kill him. But his real problem is not the enemy—it is his own army, which keeps increasing the number of missions the men must fly to complete their service. Yet if Yossarian makes any attempt to excuse himself from the perilous missions he’s assigned, he’ll be in violation of Catch-22, a hilariously sinister bureaucratic rule: a man is considered insane if he willingly continues to fly dangerous combat missions, but if he makes a formal request to be removed from duty, he is proven sane and therefore ineligible to be relieved.',
      image: 'spinning-top.jpg',
      price: 1.99,
      quantity: 1000
    },
    {
      name: 'Catch-22 by Joseph Heller',
      category: categories[9]._id,
      description: 'Set in Italy during World War II, this is the story of the incomparable, malingering bombardier, Yossarian, a hero who is furious because thousands of people he has never met are trying to kill him. But his real problem is not the enemy—it is his own army, which keeps increasing the number of missions the men must fly to complete their service. Yet if Yossarian makes any attempt to excuse himself from the perilous missions he’s assigned, he’ll be in violation of Catch-22, a hilariously sinister bureaucratic rule: a man is considered insane if he willingly continues to fly dangerous combat missions, but if he makes a formal request to be removed from duty, he is proven sane and therefore ineligible to be relieved.',
      image: 'spinning-top.jpg',
      price: 1.99,
      quantity: 1000
    },
    {
      name: 'Catch-22 by Joseph Heller',
      category: categories[10]._id,
      description: 'Set in Italy during World War II, this is the story of the incomparable, malingering bombardier, Yossarian, a hero who is furious because thousands of people he has never met are trying to kill him. But his real problem is not the enemy—it is his own army, which keeps increasing the number of missions the men must fly to complete their service. Yet if Yossarian makes any attempt to excuse himself from the perilous missions he’s assigned, he’ll be in violation of Catch-22, a hilariously sinister bureaucratic rule: a man is considered insane if he willingly continues to fly dangerous combat missions, but if he makes a formal request to be removed from duty, he is proven sane and therefore ineligible to be relieved.',
      image: 'spinning-top.jpg',
      price: 1.99,
      quantity: 1000
    },
    {
      name: 'Catch-22 by Joseph Heller',
      category: categories[10]._id,
      description: 'Set in Italy during World War II, this is the story of the incomparable, malingering bombardier, Yossarian, a hero who is furious because thousands of people he has never met are trying to kill him. But his real problem is not the enemy—it is his own army, which keeps increasing the number of missions the men must fly to complete their service. Yet if Yossarian makes any attempt to excuse himself from the perilous missions he’s assigned, he’ll be in violation of Catch-22, a hilariously sinister bureaucratic rule: a man is considered insane if he willingly continues to fly dangerous combat missions, but if he makes a formal request to be removed from duty, he is proven sane and therefore ineligible to be relieved.',
      image: 'spinning-top.jpg',
      price: 1.99,
      quantity: 1000
    },
    {
      name: 'Catch-22 by Joseph Heller',
      category: categories[10]._id,
      description: 'Set in Italy during World War II, this is the story of the incomparable, malingering bombardier, Yossarian, a hero who is furious because thousands of people he has never met are trying to kill him. But his real problem is not the enemy—it is his own army, which keeps increasing the number of missions the men must fly to complete their service. Yet if Yossarian makes any attempt to excuse himself from the perilous missions he’s assigned, he’ll be in violation of Catch-22, a hilariously sinister bureaucratic rule: a man is considered insane if he willingly continues to fly dangerous combat missions, but if he makes a formal request to be removed from duty, he is proven sane and therefore ineligible to be relieved.',
      image: 'spinning-top.jpg',
      price: 1.99,
      quantity: 1000
    },
    {
      name: 'Catch-22 by Joseph Heller',
      category: categories[10]._id,
      description: 'Set in Italy during World War II, this is the story of the incomparable, malingering bombardier, Yossarian, a hero who is furious because thousands of people he has never met are trying to kill him. But his real problem is not the enemy—it is his own army, which keeps increasing the number of missions the men must fly to complete their service. Yet if Yossarian makes any attempt to excuse himself from the perilous missions he’s assigned, he’ll be in violation of Catch-22, a hilariously sinister bureaucratic rule: a man is considered insane if he willingly continues to fly dangerous combat missions, but if he makes a formal request to be removed from duty, he is proven sane and therefore ineligible to be relieved.',
      image: 'spinning-top.jpg',
      price: 1.99,
      quantity: 1000
    },
    {
      name: 'Catch-22 by Joseph Heller',
      category: categories[11]._id,
      description: 'Set in Italy during World War II, this is the story of the incomparable, malingering bombardier, Yossarian, a hero who is furious because thousands of people he has never met are trying to kill him. But his real problem is not the enemy—it is his own army, which keeps increasing the number of missions the men must fly to complete their service. Yet if Yossarian makes any attempt to excuse himself from the perilous missions he’s assigned, he’ll be in violation of Catch-22, a hilariously sinister bureaucratic rule: a man is considered insane if he willingly continues to fly dangerous combat missions, but if he makes a formal request to be removed from duty, he is proven sane and therefore ineligible to be relieved.',
      image: 'spinning-top.jpg',
      price: 1.99,
      quantity: 1000
    },
    {
      name: 'Catch-22 by Joseph Heller',
      category: categories[11]._id,
      description: 'Set in Italy during World War II, this is the story of the incomparable, malingering bombardier, Yossarian, a hero who is furious because thousands of people he has never met are trying to kill him. But his real problem is not the enemy—it is his own army, which keeps increasing the number of missions the men must fly to complete their service. Yet if Yossarian makes any attempt to excuse himself from the perilous missions he’s assigned, he’ll be in violation of Catch-22, a hilariously sinister bureaucratic rule: a man is considered insane if he willingly continues to fly dangerous combat missions, but if he makes a formal request to be removed from duty, he is proven sane and therefore ineligible to be relieved.',
      image: 'spinning-top.jpg',
      price: 1.99,
      quantity: 1000
    },
    {
      name: 'Catch-22 by Joseph Heller',
      category: categories[11]._id,
      description: 'Set in Italy during World War II, this is the story of the incomparable, malingering bombardier, Yossarian, a hero who is furious because thousands of people he has never met are trying to kill him. But his real problem is not the enemy—it is his own army, which keeps increasing the number of missions the men must fly to complete their service. Yet if Yossarian makes any attempt to excuse himself from the perilous missions he’s assigned, he’ll be in violation of Catch-22, a hilariously sinister bureaucratic rule: a man is considered insane if he willingly continues to fly dangerous combat missions, but if he makes a formal request to be removed from duty, he is proven sane and therefore ineligible to be relieved.',
      image: 'spinning-top.jpg',
      price: 1.99,
      quantity: 1000
    },
    {
      name: 'Catch-22 by Joseph Heller',
      category: categories[11]._id,
      description: 'Set in Italy during World War II, this is the story of the incomparable, malingering bombardier, Yossarian, a hero who is furious because thousands of people he has never met are trying to kill him. But his real problem is not the enemy—it is his own army, which keeps increasing the number of missions the men must fly to complete their service. Yet if Yossarian makes any attempt to excuse himself from the perilous missions he’s assigned, he’ll be in violation of Catch-22, a hilariously sinister bureaucratic rule: a man is considered insane if he willingly continues to fly dangerous combat missions, but if he makes a formal request to be removed from duty, he is proven sane and therefore ineligible to be relieved.',
      image: 'spinning-top.jpg',
      price: 1.99,
      quantity: 1000
    },
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

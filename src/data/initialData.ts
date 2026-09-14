import {
  ArticleItem,
  CommunityProfile,
  ContactMessage,
  ContributorSubmission,
  EventItem,
  FAQItem,
  GalleryItem,
  RitualStep,
  SongItem,
  TimelineMilestone,
} from '../types';

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'When is Karam Puja celebrated?',
    answer:
      'Karam Puja is traditionally celebrated in the autumn month of Bhadra (often on Bhadra Shukla Ekadashi, corresponding to August–September). However, exact dates can vary based on regional lunar calendars, community traditions, or tea garden harvesting schedules. In Assam, community gatherings are held both on the traditional Tithi and on designated regional holidays or community-organized weekends.',
  },
  {
    question: 'Why is the Karam tree important?',
    answer:
      'The Karam tree (scientifically identified in traditional ethnobotanical records as Nauclea parvifolia / Haldina cordifolia, belonging to the Rubiaceae family) is revered as a living embodiment of nature’s bounty, vitality, protection, and fertility. It symbolizes the sacred bond between humanity and the forest ecosystem, embodying ancestral wisdom, life-sustaining shade, and seasonal rejuvenation.',
  },
  {
    question: 'Who celebrates Karam Puja?',
    answer:
      'Karam Puja is celebrated by various indigenous Adivasi and Tea Tribe communities across Assam, including the Santhal, Munda, Oraon, Kharia, Ho, Kurmi, and others, as well as in their ancestral homelands of Jharkhand, West Bengal, Odisha, Chhattisgarh, and Bihar. Celebrations are rooted in community solidarity, where all members gather in the village Akhra (dancing ground).',
  },
  {
    question: 'What are the main cultural activities?',
    answer:
      'Key activities include the ceremonial cutting and planting of the Karam branches in the village square (Akhra), singing traditional Karam geet, performing Jhumur and traditional group dances to the beat of the Madal and Dhol, fasting (often observed by young women for the well-being of their brothers and community), tending to Jawa (germinated seedlings), sharing the Karam Katha (parable of Karma and righteousness), and communal feasting.',
  },
  {
    question: 'How can young people preserve this heritage?',
    answer:
      'Youth play a vital role by learning the traditional songs and dance steps from community elders, documenting oral histories and indigenous botanical knowledge with elder consent, participating actively in Akhra cultural gatherings, supporting community language preservation, and sharing respectful educational media.',
  },
];

export const TIMELINE_MILESTONES: TimelineMilestone[] = [
  {
    era: 'Ancestral Roots & Indigenous Forest Cosmovision',
    title: 'Pre-Colonial Forest Reverence & Agrarian Rhythms',
    description:
      'For centuries, indigenous communities across central and eastern India lived in deep symbiotic harmony with Sal, Mahua, and Karam forests, developing agricultural festivals aligned with monsoon crops and seed germination rites.',
    context: 'Documented in oral epics, folklore, and indigenous environmental histories.',
    verifiedSourceType: 'Oral Traditions & Anthropological Studies',
  },
  {
    era: '19th Century (1840s–1890s)',
    title: 'Migration & Plantation Settlement in Assam',
    description:
      'Under British colonial rule, hundreds of thousands of individuals from indigenous tribes were brought to work in Assam’s expanding tea estates. Amidst harsh plantation conditions, Karam Puja served as an unshakeable cultural anchor of spiritual survival, ancestral memory, and communal solidarity.',
    context: 'Historical documentation of the Assam tea garden labor diaspora.',
    verifiedSourceType: 'Historical Archives & Labor History Records',
  },
  {
    era: 'Mid 20th Century',
    title: 'Assimilation & Cultural Synthesis in the Brahmaputra Valley',
    description:
      'Over generations, Tea Tribe communities became integral to Assam’s composite socio-cultural fabric (often celebrated as the "Moran, Chutia, Ahom, Tea Tribes" mosaic). Jhumur dance and Karam songs became recognized hallmarks of Assam’s folk cultural wealth.',
    context: 'Emergence of Sadri literature and regional cultural federations.',
    verifiedSourceType: 'Assam State Folk Heritage Compilations',
  },
  {
    era: 'Late 20th Century to Present',
    title: 'State Recognition & Central Celebrations',
    description:
      'Karam Puja gained institutional recognition with local holidays in Assam tea districts. Community platforms such as the Assam Tea Tribes Students’ Association (ATTSA) and regional cultural committees established large-scale community Akhras.',
    context: 'Public holiday declarations and district-level cultural programs.',
    verifiedSourceType: 'Official Gazettes & Community Cultural Committees',
  },
  {
    era: 'Digital & Contemporary Era',
    title: 'Youth-Led Cultural Revival & Archival Preservation',
    description:
      'Today, contemporary youth, scholars, and digital archivists document traditional lyrics, musical instruments like the Madal, and indigenous ecological knowledge to preserve them for future generations without dilution.',
    context: 'Community archives, research symposia, and digital preservation initiatives.',
    verifiedSourceType: 'Living Community Knowledge & Contemporary Research',
  },
];

export const RITUAL_STEPS: RitualStep[] = [
  {
    stepNumber: 1,
    title: 'Preparation & Jawa Germination (Jawa Utthan)',
    assameseTitle: 'জাৱা প্ৰস্তুতি',
    phase: 'Pre-Festival',
    summary: 'Seven to nine days before the festival, young women plant seeds in woven bamboo baskets.',
    description:
      'Reverently referred to as Jawa, young unmarried women (Karamaitin) gather fine river sand and fertile soil in clean bamboo baskets (Dala). Seeds of paddy, wheat, gram, barley, and pulses are sown. For seven to nine days, they nurture the seedlings with fresh water and turmeric while singing sacred Jawa songs in circular rhythms.',
    communityVariations:
      'In some communities, seven types of seeds (Sat-Anja) are strictly required; in others, local paddy and legume grains are used based on harvest availability.',
    symbolism: 'Symbolizes agrarian fertility, germination vitality, and prayers for robust forthcoming harvests.',
    icon: 'Sprout',
  },
  {
    stepNumber: 2,
    title: 'Collection & Procession of Sacred Karam Branches',
    assameseTitle: 'কৰম ডালি অনয়ন',
    phase: 'Main Day',
    summary: 'Youth and elders enter the sacred grove to request and carry the Karam branches.',
    description:
      'On the festival evening, a ceremonial delegation accompanied by the thundering resonance of Madal and Dhol approaches a healthy Karam tree. Prayers are offered to the spirit of the tree, asking permission before cutting two or three sacred branches (Karam Dail). The branches must never touch the ground and are carried reverently back to the village.',
    communityVariations:
      'Number of branches varies (two branches represent brothers Karam and Dharam in many traditions, while three branches are customary in others). In certain areas, branches are installed by the Pahan (village priest); in others, by village youths.',
    symbolism: 'Acknowledges nature as a sacred benefactor and demonstrates non-destructive, reverent harvesting.',
    icon: 'Trees',
  },
  {
    stepNumber: 3,
    title: 'Installation at the Akhra & Sacred Worship',
    assameseTitle: 'আখৰাত প্ৰতিষ্ঠা আৰু পূজা',
    phase: 'Main Day',
    summary: 'The branches are erected at the center of the dancing ground (Akhra) and purified.',
    description:
      'The sacred branches are firmly planted at the center of the clean, swept Akhra, which is decorated with alpana (rice flour drawings), marigold flowers, mango leaves, and clay lamps. The priest or community elder offers vermilion, unboiled milk, seasonal fruits, puffed rice, and fresh dub grass to Karam Raja.',
    communityVariations:
      'Specific mantras or incantations depend on the mother tongue of the presiding community (Kurukh, Mundari, Santhali, Sadri, or Kurmali).',
    symbolism: 'The Akhra becomes an egalitarian axis mundi where social divisions dissolve in collective reverence.',
    icon: 'Sparkles',
  },
  {
    stepNumber: 4,
    title: 'The Karam Katha (Moral Parable of Karma & Dharam)',
    assameseTitle: 'কৰম কাহিনী শ্ৰৱণ',
    phase: 'Night Observance',
    summary: 'Community members gather in a quiet circle to hear the story of brothers Karam and Dharam.',
    description:
      'All attendees sit attentively around the installed branches while an elder or priest narrates the Karam Katha. The story tells of two brothers, Karam (hard work/deeds) and Dharam (righteousness/duty). When Karam leaves or is slighted, hardship falls upon the people; upon his respectful restoration, prosperity and health return.',
    communityVariations:
      'Folk narrative details diverge across regions, with some variants highlighting seafaring merchants and others focusing on agrarian drought and filial respect.',
    symbolism: 'Teaches that ethical labor, humility, nature stewardship, and family devotion are the pillars of community well-being.',
    icon: 'BookOpen',
  },
  {
    stepNumber: 5,
    title: 'Distribution of the Jawa Sprouts',
    assameseTitle: 'জাৱা বিতৰণ',
    phase: 'Night Observance',
    summary: 'The golden sprouted Jawa seedlings are blessed and pinned into hair and garments.',
    description:
      'Following the Katha, the fragrant, pale-yellow Jawa sprouts are distributed by the Karamaitin sisters to their brothers, elders, and neighbors as a token of goodwill, mutual protection, and blessings. Young men wear the sprouts proudly tucked behind their ears or on their headgear.',
    communityVariations:
      'Some communities exchange specific reciprocal greetings or gifts (such as hand-woven handkerchiefs or seasonal delicacies).',
    symbolism: 'Celebrates sibling bonds, gender harmony, and community interconnectedness.',
    icon: 'HeartHandshake',
  },
  {
    stepNumber: 6,
    title: 'All-Night Jhumur Dance & Akhra Geets',
    assameseTitle: 'নিশাৰ ঝুমুৰ নৃত্য আৰু গীত',
    phase: 'Night Observance',
    summary: 'Men and women form interlocking chains and dance till daybreak to Madal rhythms.',
    description:
      'As night deepens, the solemnity gives way to joyous celebration. Dancers link arms at the waist, moving in rhythmic, synchronised waves forward and back. Traditional Jhumur songs celebrating rain, love, ancestral resilience, and the sweet aroma of the Karam blossom echo across the tea garden lines.',
    communityVariations:
      'Rhythms (Taal) such as Bhinsariya, Rasarkeli, and Lujhri differ by community, with varying tempos as night turns to dawn.',
    symbolism: 'Fosters collective joy, rhythmic unity, and cultural continuity across generations.',
    icon: 'Music',
  },
  {
    stepNumber: 7,
    title: 'Bisarjan & Farewell Immersion',
    assameseTitle: 'কৰম বিসৰ্জন',
    phase: 'Immersion & Post-Puja',
    summary: 'The Karam branches are reverently carried to a river, stream, or pond for immersion.',
    description:
      'The morning after the vigil, final prayers and offerings are made. With heartfelt farewell songs expressing the hope for Karam Raja to return next year, the community carries the sacred branches in a joyful procession to the nearest natural water body for immersion (Bisarjan).',
    communityVariations:
      'In some locations, leaves or residual water are sprinkled over paddy fields to bless the soil against pests.',
    symbolism: 'Returns the organic offering to the waters of the earth, completing the natural ecological cycle.',
    icon: 'Waves',
  },
];

export const INITIAL_EVENTS: EventItem[] = [
  {
    id: 'evt-1',
    title: 'Central Karam Puja Mahotsav 2026 — Moran Tea Estate Akhra',
    date: 'September 22, 2026',
    time: '4:00 PM – 4:00 AM (Overnight Vigil)',
    venue: 'Moran Tea Estate Community Akhra Field',
    district: 'Dibrugarh',
    community: 'Joint Tea Tribes Cultural Forum',
    category: 'Celebration',
    organizer: 'All Assam Tea Tribes Cultural Coordination Council',
    description:
      'Grand community celebration with sacred Karam branch installation, Jawa distribution ceremony, and overnight inter-garden Jhumur dance competition featuring 24 village troupes.',
    contactInfo: 'convenor.dibrugarh@karampuja-assam.org | +91 94350-XXXXX',
    isUpcoming: true,
    posterUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80',
    isSample: true,
  },
  {
    id: 'evt-2',
    title: 'Numaligarh Adivasi Youth Heritage & Madal Workshop',
    date: 'October 3, 2026',
    time: '10:00 AM – 3:30 PM',
    venue: 'Numaligarh Community Town Hall',
    district: 'Golaghat',
    community: 'Oraon & Munda Youth League',
    category: 'Workshop',
    organizer: 'Golaghat Adivasi Heritage Trust',
    description:
      'Youth-centered practical workshop taught by master elders on traditional Madal drumming techniques, making bamboo flutes, and preserving oral Karam folk ballads.',
    contactInfo: 'workshops.golaghat@karampuja-assam.org | +91 98540-XXXXX',
    isUpcoming: true,
    posterUrl: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=800&q=80',
    isSample: true,
  },
  {
    id: 'evt-3',
    title: 'Symposium: Ethnobotany & Indigenous Rites of Upper Assam',
    date: 'October 18, 2026',
    time: '11:00 AM – 2:00 PM',
    venue: 'Jorhat District Library Auditorium',
    district: 'Jorhat',
    community: 'Academic & Elder Consortium',
    category: 'Cultural Symposium',
    organizer: 'Upper Assam Folkloric Research Society & Local Elders',
    description:
      'Academic and community seminar exploring the sacred flora of Karam Puja, the medicinal significance of forest trees, and ethical archiving of oral traditions.',
    contactInfo: 'symposium.jorhat@karampuja-assam.org | +91 94012-XXXXX',
    isUpcoming: true,
    posterUrl: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=800&q=80',
    isSample: true,
  },
  {
    id: 'evt-4',
    title: 'Biswanath Tea Belt Folk Song & Dance Gathering',
    date: 'November 8, 2026',
    time: '2:00 PM – 8:00 PM',
    venue: 'Sakomato Tea Estate Grounds',
    district: 'Biswanath',
    community: 'Santhal & Kurmi Cultural Committee',
    category: 'Celebration',
    organizer: 'Biswanath District Cultural Department & Village Elders',
    description:
      'A post-harvest cultural meet celebrating traditional musical instruments, traditional woven attire exhibition, and elders storytelling circle.',
    contactInfo: 'biswanath.culture@karampuja-assam.org | +91 97060-XXXXX',
    isUpcoming: true,
    posterUrl: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80',
    isSample: true,
  },
];

export const INITIAL_COMMUNITIES: CommunityProfile[] = [
  {
    id: 'comm-santhal',
    name: 'Santhal Community',
    altNames: ['Santali', 'Saontal'],
    languages: ['Santali (Ol Chiki script)', 'Sadri', 'Assamese'],
    regionInAssam: ['Kokrajhar', 'Chirang', 'Golaghat', 'Sonitpur', 'Tinsukia'],
    culturalTraditions:
      'Deep reverence for Marang Buru and Jaher Era (the sacred grove). Community consensus is reached through the traditional Manjhi-Paragana village council system.',
    festivals: ['Karam Puja', 'Sohrai (Harvest festival)', 'Baha (Flower festival)', 'Sakrat'],
    traditionalDress:
      'Panchhi and Parhan handloom cotton textiles with bold borders, often woven in deep green, maroon, and natural white.',
    musicAndDance:
      'Santhal group dances characterized by elegant stepping, interlocking arms, and accompaniment by the Tumdak (Madal), Tamak (copper kettle drum), and Tirio (bamboo flute).',
    foodTraditions:
      'Seasonal forest herbs, leafy greens (Saag), rice pithas, roasted grain offerings, and traditional fermented rice water.',
    historicalBackground:
      'Arrived in Assam during the late 19th and early 20th century primarily from the Santhal Parganas and surrounding areas, bringing rich egalitarian social traditions and indigenous agricultural tenacity.',
    sources: ['Campbell (1899)', 'Bodding (1925)', 'District Gazettes of Assam', 'Elder Oral Testimonies (2022)'],
    needsVerification: true,
    avatarUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'comm-munda',
    name: 'Munda Community',
    altNames: ['Mundari', 'Horo'],
    languages: ['Mundari', 'Sadri', 'Assamese', 'Hindi'],
    regionInAssam: ['Dibrugarh', 'Tinsukia', 'Sivasagar', 'Darrang', 'Cachar'],
    culturalTraditions:
      'Worship of Singbonga (Supreme Creator associated with the Sun) and ancestral spirits (Ora Bongako). Sacred spaces like the Sarna (sacred grove) and Sasandiri (ancestral stone monuments) are honored.',
    festivals: ['Karam Puja', 'Mage Parab', 'Baha Parab', 'Phagu'],
    traditionalDress:
      'Handwoven white cotton dhotis and sarees with traditional red and green diamond borders (Bala / Parhan).',
    musicAndDance:
      'Mundari Karam dances feature rhythmic forward-backward swaying, led by master drummers playing the Dumang (Madal) and Rutu (flute).',
    foodTraditions:
      'Millets, forest tubers, wild mushrooms, and ritual porridge prepared from freshly harvested paddy.',
    historicalBackground:
      'Originally hailing from the Chota Nagpur Plateau, Munda workers preserved their ancestral totems (Killi) and sacred forest customs while adapting to life across the tea gardens of Assam.',
    sources: ['S.C. Roy (1912 - The Mundas and Their Country)', 'Assam Tea Garden Ethnographic Surveys'],
    needsVerification: true,
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'comm-oraon',
    name: 'Oraon Community',
    altNames: ['Kurukh', 'Uraon'],
    languages: ['Kurukh (Dravidian family)', 'Sadri', 'Assamese'],
    regionInAssam: ['Jorhat', 'Golaghat', 'Sonitpur', 'Biswanath', 'Udalguri'],
    culturalTraditions:
      'Dharmesh (Supreme Being) and ancestral spirits are honored. The traditional Dhumkuria (youth dormitory institution) historically served as a center for folklore, music, and social ethics education.',
    festivals: ['Karam Puja', 'Sarhul (Khaddi)', 'Fagua', 'Sohrai'],
    traditionalDress:
      'Traditional red-bordered white handloom cotton sarees (Khanria / Parhan) worn with natural forest flowers in the hair.',
    musicAndDance:
      'Kurukh Karam songs embody high poetic metaphors of nature and brotherhood, performed to the vigorous beat of the Mandar and Nagara.',
    foodTraditions:
      'Steamed rice cakes, seasonal bamboo shoots (Khorisa/Karil), and green leafy wild vegetables.',
    historicalBackground:
      'Pioneers of settled terrace and valley agriculture in the Chota Nagpur highlands who brought profound agrarian knowledge to Assam tea landscapes.',
    sources: ['S.C. Roy (1915 - The Oraons of Chota Nagpur)', 'All Assam Kurukh Cultural Society'],
    needsVerification: true,
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'comm-kharia',
    name: 'Kharia Community',
    altNames: ['Khadia', 'Pahari Kharia', 'Dudh Kharia'],
    languages: ['Kharia', 'Sadri', 'Assamese'],
    regionInAssam: ['Karbi Anglong', 'Golaghat', 'Dibrugarh', 'Nagaon'],
    culturalTraditions:
      'Deep connection to forest herbs, wild edible roots, and community river rituals. Pahan (Kalo) acts as spiritual mediator ensuring harmony between humankind and forest beings.',
    festivals: ['Karam Puja', 'Jankor / Sarhul', 'Dhanbangi', 'Bandai'],
    traditionalDress:
      'Simple, elegant handspun white cotton garments bordered with earthy saffron and green hand-dyed yarns.',
    musicAndDance:
      'Slow, dignified circle dances with intricate footwork mirroring the movement of forest animals and rustling leaves.',
    foodTraditions:
      'Traditional preparations using wild tubers, sesame cakes, and river fish.',
    historicalBackground:
      'Noted for deep knowledge of indigenous medicine and forestry; migrated to Assam during the plantation boom while maintaining strong clan ties.',
    sources: ['Russell & Hira Lal (1916)', 'Assam Adivasi Literary Forum Papers'],
    needsVerification: true,
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'comm-ho',
    name: 'Ho Community',
    altNames: ['Kol', 'Ho-Munda'],
    languages: ['Ho (Warang Chiti script)', 'Sadri', 'Assamese'],
    regionInAssam: ['Tinsukia', 'Dibrugarh', 'Charaideo'],
    culturalTraditions:
      'Veneration of Malang Bonga and ancestral spirits. Known for sacred stones and democratic community council meetings (Manki-Munda system).',
    festivals: ['Karam Parab', 'Mage Parab', 'Baa Parab', 'Hero Parab'],
    traditionalDress:
      'Cotton cloths adorned with red geometrical weaves and traditional silver ornaments (Hansli, Sikri).',
    musicAndDance:
      'Dances accompanied by the Dama and Dama-chatu drums, highlighting harvest gratitude and monsoon welcomes.',
    foodTraditions:
      'Boiled cereals, wild leafy curries seasoned with mustard oil, and festive rice cakes.',
    historicalBackground:
      'Originally from the Singhbhum region; settled across eastern Assam’s tea belts, contributing immensely to the region’s agricultural vitality.',
    sources: ['Chatterjee & Majumdar (1940)', 'Ho Cultural Preservation Society'],
    needsVerification: true,
    avatarUrl: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'comm-kurmi',
    name: 'Kurmi Community',
    altNames: ['Kudmi-Mahato', 'Kurmi Mahto'],
    languages: ['Kurmali', 'Sadri', 'Assamese', 'Bengali'],
    regionInAssam: ['Darrang', 'Sonitpur', 'Biswanath', 'Golaghat', 'Morigaon'],
    culturalTraditions:
      'Agrarian community with sacred livestock veneration (Bandna / Sohrai) and intimate knowledge of seed genetics and weather omens.',
    festivals: ['Karam Puja', 'Bandna Parab', 'Tusu Puja', 'Jitiya'],
    traditionalDress:
      'Lal-paar sarees (white sarees with red borders) and traditional Dhoti with Kurmali handloom shawls.',
    musicAndDance:
      'Renowned for high-tempo Jhumur songs and Chhau-influenced rhythmic dances using Dhak, Dhol, and Shehnai.',
    foodTraditions:
      'Chura-dahi, pitha, seasonal river catches, and dried leafy savories (Dhuduk saag).',
    historicalBackground:
      'Known for cultivating resilient paddy varieties, their songs preserve deep agrarian knowledge spanning eastern India and Assam.',
    sources: ['Kudmi Folk Culture Compendium', 'Assam Folk Culture Board'],
    needsVerification: true,
    avatarUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80',
  },
];

export const INITIAL_SONGS: SongItem[] = [
  {
    id: 'song-1',
    title: 'Karam Re Karam, Tore Aashray (O Sacred Karam, Under Your Shade)',
    category: 'Traditional Songs',
    communityOrRegion: 'Sadri Folk Tradition, Upper Assam Tea Belt',
    language: 'Sadri',
    performer: 'Moran Tea Estate Elder Troupe (Led by Birsa Nayak)',
    contributor: 'Assam Tea Tribes Oral Archives Project',
    description:
      'A classical invocation sung at twilight as the Karam branch is brought into the village. The lyrics appeal to the Karam tree for protection against pestilence and drought.',
    culturalMeaning:
      'Expresses devotion to nature, acknowledging that human prosperity is impossible without the generosity of the forest and seasonal rains.',
    duration: '4:28',
    audioUrl: 'https://assets.mixkit.co/music/preview/mixkit-serene-view-443.mp3',
    permissionInfo: 'Contributed with full verbal and community elder consent for educational non-commercial archiving.',
  },
  {
    id: 'song-2',
    title: 'Jawa Phutlo Re, Bhaiya Ke Dibo (The Jawa Has Sprouted for My Brother)',
    category: 'Traditional Songs',
    communityOrRegion: 'Kurukh & Sadri Tradition, Golaghat District',
    language: 'Sadri / Kurukh dialect',
    performer: 'Sumi Munda & Akhra Girls Ensemble',
    contributor: 'Golaghat Folk Music Research Initiative',
    description:
      'Sung by sisters as the fragile green shoots of the Jawa emerge from the sand baskets, praising sibling loyalty and community protection.',
    culturalMeaning:
      'Celebrates familial bonds, mutual care, and the nurturing responsibility of women in indigenous agrarian cycles.',
    duration: '3:45',
    audioUrl: 'https://assets.mixkit.co/music/preview/mixkit-spirit-of-the-forest-938.mp3',
    permissionInfo: 'Community archived song; recorded at Numaligarh Cultural Meet (2024).',
  },
  {
    id: 'song-3',
    title: 'Madal Baje Dholok Baje (Resonance of the Madal and Drums)',
    category: 'Instrumental Music',
    communityOrRegion: 'Biswanath Tea Belt Gathering',
    language: 'Instrumental / Rhythm Chants',
    performer: 'Master Drummers of Sakomato (Madal, Tamak & Jhanjh)',
    contributor: 'Tea Belt Drum Preservation Circle',
    description:
      'Hypnotic polyrhythmic performance demonstrating traditional Karam and Jhumur time signatures (Kahorba & Dadra variations).',
    culturalMeaning:
      'The beat of the Madal is considered the heartbeat of the community, calling scattered workers together into a unified living circle.',
    duration: '5:12',
    audioUrl: 'https://assets.mixkit.co/music/preview/mixkit-asian-meditation-433.mp3',
    permissionInfo: 'Educational archival license; public cultural demonstration recording.',
  },
  {
    id: 'song-4',
    title: 'Karam Raja Aaylo Ghore (Karam Raja Enters Our Home)',
    category: 'Festival Dance',
    communityOrRegion: 'Santhal & Munda Belt, Kokrajhar & Sonitpur',
    language: 'Sadri & Santali Refrain',
    performer: 'Tinsukia Jhumur Dal',
    contributor: 'ATTSA Youth Cultural Forum',
    description:
      'Lively circular dance melody sung at midnight during the peak of the festival vigil, welcoming joy and bidding hardship leave the village.',
    culturalMeaning:
      'Affirms that dignity, joy, and cultural expression are inalienable rights of working communities.',
    duration: '4:02',
    audioUrl: 'https://assets.mixkit.co/music/preview/mixkit-sacred-garden-489.mp3',
    permissionInfo: 'Archived under open cultural heritage sharing protocol.',
  },
];

export const INITIAL_GALLERY: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Ceremonial Karam Branch at the Village Akhra',
    caption: 'Sacred branches of the Karam tree installed amidst flowers and burning clay lamps in an Assam tea garden community.',
    category: 'Karam Tree',
    imageUrl: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=1000&q=80',
    photographer: 'Cultural Archive Documentation (Assam Heritage)',
    copyright: 'Creative Commons Educational Use / Cultural Archive',
    district: 'Dibrugarh',
    isPlaceholder: true,
  },
  {
    id: 'gal-2',
    title: 'Circular Jhumur Dance in Traditional Red-Bordered Handlooms',
    caption: 'Women linking arms in unison, executing synchronized steps during an all-night Karam celebration.',
    category: 'Traditional Dance',
    imageUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1000&q=80',
    photographer: 'Assam Tea Tribe Heritage Trust',
    copyright: 'Community Archive Photo / Verified Permission',
    district: 'Golaghat',
    isPlaceholder: true,
  },
  {
    id: 'gal-3',
    title: 'Master Madal Player Setting the Akhra Rhythm',
    caption: 'The terracotta-and-leather Madal drum provides the unmistakable resonant heartbeat for Karam Puja songs.',
    category: 'Traditional Music',
    imageUrl: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=1000&q=80',
    photographer: 'R. Saikia / Folk Arts Project',
    copyright: 'Archival Reference Only',
    district: 'Jorhat',
    isPlaceholder: true,
  },
  {
    id: 'gal-4',
    title: 'Nurturing the Golden Jawa Seedlings',
    caption: 'Baskets of tender sprouted paddy and pulses tended with river sand and clean water prior to the festival night.',
    category: 'Karam Puja',
    imageUrl: 'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=1000&q=80',
    photographer: 'Indigenous Agri-Heritage Foundation',
    copyright: 'Educational License',
    district: 'Sonitpur',
    isPlaceholder: true,
  },
  {
    id: 'gal-5',
    title: 'Lush Tea Garden Landscape in Autumn',
    caption: 'The vibrant emerald estates of Upper Assam where generations of Tea Tribe communities have nurtured land and culture.',
    category: 'Tea Garden Culture',
    imageUrl: 'https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?auto=format&fit=crop&w=1000&q=80',
    photographer: 'Nature & Landscape Archives',
    copyright: 'Royalty-Free / Archive Image',
    district: 'Tinsukia',
    isPlaceholder: true,
  },
  {
    id: 'gal-6',
    title: 'Traditional Handloom Weaving & Panchhi Patterns',
    caption: 'Distinctive geometric and floral border motifs handwoven on traditional loin and frame looms.',
    category: 'Cultural Dress',
    imageUrl: 'https://images.unsplash.com/photo-1606744888344-498238f01037?auto=format&fit=crop&w=1000&q=80',
    photographer: 'Handloom Documentation Guild',
    copyright: 'Educational Documentation',
    district: 'Biswanath',
    isPlaceholder: true,
  },
  {
    id: 'gal-7',
    title: 'Elder Gathering & Karam Katha Recitation',
    caption: 'Younger generations listen attentively as community elders narrate the ancient morals of Karam and Dharam.',
    category: 'Community Events',
    imageUrl: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=1000&q=80',
    photographer: 'Brahmaputra Valley Oral History Archive',
    copyright: 'Verified Elder Consent',
    district: 'Sivasagar',
    isPlaceholder: true,
  },
  {
    id: 'gal-8',
    title: 'Sacred Forest Grove & River Basin Reverence',
    caption: 'Preserved riverbanks where the farewell Bisarjan of the Karam branches takes place at sunrise.',
    category: 'Heritage & Nature',
    imageUrl: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=1000&q=80',
    photographer: 'Eastern Himalayas Conservation Network',
    copyright: 'Royalty-Free Landscape Reference',
    district: 'Golaghat',
    isPlaceholder: true,
  },
];

export const INITIAL_ARTICLES: ArticleItem[] = [
  {
    id: 'art-1',
    title: 'The Sacred Karam Tree: Ethnobotany, Ecology, and Indigenous Reverence',
    category: 'Cultural Articles',
    author: 'Dr. Anamika Kurmi & Elder Mangal Munda',
    publishedDate: 'August 14, 2025',
    readingTime: '6 min read',
    excerpt:
      'Examining the ecological significance of Nauclea parvifolia and Haldina cordifolia, and how indigenous communities in Assam protected forest habitats through living rituals.',
    content: [
      'In traditional indigenous thought, nature is not a resource to be exploited, but an elder kinsman to be respected. The Karam festival stands at the pinnacle of this biocentric worldview.',
      'Known botanically as Nauclea parvifolia (and in some regional varieties Haldina cordifolia), the Karam tree has traditionally grown in deciduous and riverine forests. Its wood is prized for resilience, while its foliage provides dense shade during the humid late-monsoon transition.',
      'During Karam Puja, only two or three branches are pruned with solemn apologies and ceremonial reverence, underscoring sustainable use. The tree is not felled; rather, its reproductive vigor is celebrated.',
      'By anchoring community gatherings around a living branch, Tea Tribe and Adivasi communities passed down a profound ecological philosophy: without forest vitality, human life, agriculture, and rain cannot persist.',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80',
    tags: ['Ethnobotany', 'Ecology', 'Karam Tree', 'Indigenous Knowledge'],
    sources: ['Assam Forest Department Ethnobotanical Survey (2018)', 'Munda Oral Traditions'],
    isSample: false,
  },
  {
    id: 'art-2',
    title: 'Jhumur and Madal: The Rhythmic Pulse of Assam’s Tea Garden Generations',
    category: 'Festival Guides',
    author: 'Tarun Tanti, Folklorist',
    publishedDate: 'September 2, 2025',
    readingTime: '5 min read',
    excerpt:
      'How the thundering cadence of the Madal and the intricate steps of Jhumur dance provided strength, solidarity, and cultural identity across two centuries.',
    content: [
      'When you step into an Assam tea garden during the autumn twilight of Bhadra, the first sound that reaches you is the deep, earthen rumble of the Madal. It is a rhythm that travels through the red soil, calling every family toward the Akhra.',
      'Jhumur is far more than a dance form; it is an oral encyclopaedia. Through verses in Sadri, Kurmali, and tribal mother tongues, songs describe monsoon clouds, the fragrance of newly harvested paddy, the pain of historic forced migration, and the resilience of tea workers.',
      'The choreography of Jhumur embodies equality: dancers lock arms in a continuous, unbroken chain where no single individual stands higher than another. Every foot moves in coordinated unison.',
      'Today, Jhumur has gained statewide appreciation in Assam, recognized as a vital contributor to the rich cultural tapestry of the state alongside Bihu and other indigenous folk traditions.',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80',
    tags: ['Jhumur', 'Madal', 'Folk Music', 'Tea Garden Culture'],
    sources: ['Assam Folk Culture Academy', 'Interviews with Master Drummers of Dibrugarh'],
    isSample: false,
  },
  {
    id: 'art-3',
    title: 'The Jawa Ritual: The Sacred Science of Germination and Sibling Care',
    category: 'Educational Materials',
    author: 'Sanjukta Oraon & Cultural Documentation Cell',
    publishedDate: 'September 18, 2025',
    readingTime: '4 min read',
    excerpt:
      'An educational breakdown of how young women prepare the Jawa baskets seven to nine days before Karam Puja, testing seed viability through sacred practice.',
    content: [
      'Long before modern agricultural labs developed seed germination viability tests, indigenous women practiced the Jawa ceremony as an annual bio-assay of seasonal seeds.',
      'Seven or nine days prior to Karam Puja, river sand is washed carefully to remove impurities. Unmarried women, maintaining personal purity and fasting disciplines, place diverse grains into bamboo baskets.',
      'Over the next week, the seeds are watered thrice daily with fresh water and treated with turmeric, a natural antifungal agent. The young women sing specific Jawa songs that encourage the seeds to grow straight and healthy.',
      'On the festival night, the pale, tender shoots (Jawa) are distributed to brothers and village elders. Receiving a healthy Jawa shoot signifies a prophecy of abundant harvest and family vitality for the coming year.',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=800&q=80',
    tags: ['Jawa', 'Agrarian Science', 'Women in Rituals', 'Seed Testing'],
    sources: ['Tribal Research Institute Bulletin', 'Field Studies in Golaghat'],
    isSample: false,
  },
  {
    id: 'art-4',
    title: 'Diversity, Not Homogeneity: Honoring the Plural Identities of Assam’s Tea Communities',
    category: 'Community History',
    author: 'Prof. Hemant Santhal',
    publishedDate: 'October 10, 2025',
    readingTime: '7 min read',
    excerpt:
      'Understanding why the term "Tea Tribes" encompasses distinct communities—including Santhal, Munda, Oraon, Kharia, and Kurmi—each with independent languages and heritage.',
    content: [
      'A frequent misconception in general media is treating the "Tea Garden Community" or "Tea Tribes" of Assam as a single homogeneous ethnic group with uniform customs.',
      'In reality, the communities that arrived in Assam represent over a hundred distinct ethnic groups from Austroasiatic, Dravidian, and Indo-Aryan linguistic families. Each community maintains its own clan structures, marriage customs, traditional dress, and maternal dialects.',
      'While Karam Puja is celebrated across many of these communities as a unifying festival of nature, the specific rituals, priestly titles (Pahan, Nayke, Deori), and song repertoires reflect rich pluralism.',
      'Preserving this nuanced cultural heritage requires acknowledging that there is no singular universal practice, and respecting local elder leadership in every region of Assam.',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=800&q=80',
    tags: ['Cultural Pluralism', 'Tea Tribes', 'Linguistic Diversity', 'History'],
    sources: ['Census & Anthropological Surveys of Assam', 'Adivasi Mahasabha Archives'],
    isSample: false,
  },
];

export const INITIAL_CONTRIBUTIONS: ContributorSubmission[] = [
  {
    id: 'sub-1',
    contributorName: 'Budhram Munda',
    email: 'budhram.m@example.org',
    phone: '+91 94351-22334',
    contributionType: 'Song / Audio',
    communityOrRegion: 'Munda Community, Doomdooma Tea Estate, Tinsukia',
    title: 'Rare Karam Katha Ballad in Mundari dialect',
    description:
      'A 12-minute audio recording of elder Arjun Munda reciting the traditional moral poem of brothers Karam and Dharam with English translation notes.',
    permissionGranted: true,
    submittedAt: '2026-09-02',
    status: 'Pending Review',
  },
  {
    id: 'sub-2',
    contributorName: 'Dr. Nilima Barua (Field Researcher)',
    email: 'n.barua@assamuniv.edu',
    phone: '+91 98640-55441',
    contributionType: 'Research Paper',
    communityOrRegion: 'Biswanath & Sonitpur Tea Belt',
    title: 'Ethnobotanical Documentation of Sacred Plants in Karam Puja',
    description:
      'Peer-reviewed documentation detailing 14 medicinal and sacred plant species utilized in Jawa baskets and Akhra altars across 8 tea estates.',
    permissionGranted: true,
    submittedAt: '2026-09-08',
    status: 'Verified',
  },
  {
    id: 'sub-3',
    contributorName: 'Rashmi Tirkey',
    email: 'rashmi.tirkey@example.com',
    phone: '+91 97061-88990',
    contributionType: 'Photograph',
    communityOrRegion: 'Oraon Community, Dhekiajuli',
    title: 'High-Resolution Photos of Jawa Utthan Ceremony 2025',
    description:
      'Set of 6 licensed photographs showing elder women teaching young girls the ancient technique of weaving bamboo Dala baskets for germination.',
    permissionGranted: true,
    submittedAt: '2026-09-11',
    status: 'Pending Review',
  },
];

export const INITIAL_MESSAGES: ContactMessage[] = [
  {
    id: 'msg-1',
    name: 'Anjali Kerketta',
    email: 'anjali.k@gauhati.ac.in',
    phone: '+91 94350-11223',
    subject: 'Academic Citation & Research Inquiry',
    message: 'Hello, I am a postgraduate student in Folklore Studies at Gauhati University researching Karam songs in Upper Assam. Would it be possible to obtain permission to cite your oral archive recordings?',
    submittedAt: 'Sep 10, 2026',
  },
  {
    id: 'msg-2',
    name: 'Suresh Tanti',
    email: 'suresh.tanti@morantea.org',
    subject: 'Central Akhra Festival Schedule 2026',
    message: 'Greetings. Our tea estate community committee in Moran would like to list our district Karam celebration on your events directory. What details are required?',
    submittedAt: 'Sep 12, 2026',
  },
];


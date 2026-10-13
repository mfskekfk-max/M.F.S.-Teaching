function makeQuestions(rows, explanation) {
  return rows.map(([prompt, correct, distractorOne, distractorTwo], index) => {
    const choices = [correct, distractorOne, distractorTwo];
    const rotation = index % choices.length;
    return {
      prompt,
      options: choices.slice(rotation).concat(choices.slice(0, rotation)),
      answer: (choices.length - rotation) % choices.length,
      explanation
    };
  });
}

const lessons = [
  {
    id: "to-be", title: "To be: am, is, are", subtitle: "O‘zingiz va boshqalar haqida gapiring", tag: "GRAMMATIKA", symbol: "01", duration: "8 daqiqa",
    intro: "Ingliz tilidagi eng kerakli fe’llardan biri — to be. U odam yoki narsaning kimligini, qandayligini va qayerdaligini aytishda ishlatiladi.",
    rule: "I am · He / She / It is · You / We / They are",
    examples: [["I am a student.", "Men o‘quvchiman."], ["She is happy.", "U xursand."], ["They are at home.", "Ular uyda."], ["Are you ready?", "Tayyormisiz?"]],
    words: [["student", "o‘quvchi"], ["happy", "xursand"], ["ready", "tayyor"]],
    questions: [
      { prompt: "I ___ from Uzbekistan.", options: ["is", "am", "are"], answer: 1, explanation: "I olmoshi bilan am ishlatiladi: I am." },
      { prompt: "My brother ___ a doctor.", options: ["are", "am", "is"], answer: 2, explanation: "He yoki birlikdagi shaxs bilan is ishlatiladi." },
      { prompt: "___ they at school?", options: ["Are", "Is", "Am"], answer: 0, explanation: "They bilan are ishlatiladi. Savolda fe’l boshiga chiqadi." },
      { prompt: "That ___ my new bag.", options: ["are", "is", "am"], answer: 1, explanation: "That birlikdagi narsa, shuning uchun is ishlatiladi." },
      { prompt: "We ___ good friends.", options: ["is", "are", "am"], answer: 1, explanation: "We olmoshi bilan are ishlatiladi." },
      { prompt: "___ you tired?", options: ["Are", "Is", "Am"], answer: 0, explanation: "You bilan are ishlatiladi; savolda are boshiga chiqadi." },
      { prompt: "The weather ___ warm today.", options: ["are", "am", "is"], answer: 2, explanation: "The weather birlikdagi ot, unga is mos keladi." },
      { prompt: "I ___ not at school today.", options: ["am", "is", "are"], answer: 0, explanation: "I am not — I olmoshining inkor shakli." },
      { prompt: "My shoes ___ under the bed.", options: ["is", "are", "am"], answer: 1, explanation: "Shoes ko‘plik, shuning uchun are ishlatiladi." },
      { prompt: "___ he your English teacher?", options: ["Am", "Are", "Is"], answer: 2, explanation: "He bilan is ishlatiladi; savolda is boshiga chiqadi." },
      { prompt: "They ___ from Bukhara.", options: ["are", "is", "am"], answer: 0, explanation: "They olmoshi bilan are ishlatiladi." },
      { prompt: "This ___ my first lesson.", options: ["are", "is", "am"], answer: 1, explanation: "This birlikdagi narsa, shuning uchun is ishlatiladi." },
      { prompt: "You ___ a great student.", options: ["is", "am", "are"], answer: 2, explanation: "You bilan doim are ishlatiladi." },
      { prompt: "Her parents ___ doctors.", options: ["are", "is", "am"], answer: 0, explanation: "Parents ko‘plikdagi ot, unga are mos keladi." },
      { prompt: "___ it your phone?", options: ["Are", "Is", "Am"], answer: 1, explanation: "It bilan is ishlatiladi; savolda is boshiga chiqadi." },
      { prompt: "The classrooms ___ clean.", options: ["is", "are", "am"], answer: 1, explanation: "Classrooms ko‘plik, shuning uchun are ishlatiladi." },
      { prompt: "My name ___ Dilshod.", options: ["is", "are", "am"], answer: 0, explanation: "My name birlikdagi ot, unga is mos keladi." },
      { prompt: "I ___ happy to meet you.", options: ["are", "is", "am"], answer: 2, explanation: "I olmoshi bilan am ishlatiladi." },
      { prompt: "Your book ___ on the table.", options: ["are", "is", "am"], answer: 1, explanation: "Your book birlikdagi ot, shuning uchun is ishlatiladi." },
      { prompt: "___ we early?", options: ["Is", "Am", "Are"], answer: 2, explanation: "We bilan are ishlatiladi; savolda are boshiga chiqadi." }
    ]
  },
  {
    id: "present-simple", title: "Present Simple", subtitle: "Kundalik odatlar va ishlar", tag: "GRAMMATIKA", symbol: "02", duration: "10 daqiqa",
    intro: "Present Simple odatlar, takrorlanadigan ishlar va umumiy haqiqatlarni ifodalaydi. U kundalik suhbatda juda ko‘p uchraydi.",
    rule: "I / You / We / They work · He / She / It works",
    examples: [["I drink tea every morning.", "Men har tong choy ichaman."], ["He works in a bank.", "U bankda ishlaydi."], ["We study English.", "Biz ingliz tilini o‘rganamiz."], ["She does not drive.", "U mashina haydamaydi."]],
    words: [["usually", "odatda"], ["every day", "har kuni"], ["sometimes", "ba’zan"]],
    questions: [
      { prompt: "She ___ English every day.", options: ["study", "studies", "studying"], answer: 1, explanation: "She bilan fe’lga -s yoki -es qo‘shiladi. Study → studies." },
      { prompt: "We ___ coffee in the evening.", options: ["doesn't drink", "don't drink", "not drink"], answer: 1, explanation: "We bilan inkor shaklida don't + fe’l ishlatiladi." },
      { prompt: "___ your father work here?", options: ["Do", "Does", "Is"], answer: 1, explanation: "He / She / It uchun savol Does bilan boshlanadi." },
      { prompt: "My sister ___ breakfast at 7.", options: ["eat", "eats", "eating"], answer: 1, explanation: "She bilan Present Simple fe’liga -s qo‘shiladi: eat → eats." },
      { prompt: "They ___ football after school.", options: ["plays", "play", "playing"], answer: 1, explanation: "They bilan fe’lning boshlang‘ich shakli play ishlatiladi." },
      { prompt: "He ___ work on Sundays.", options: ["don't", "doesn't", "isn't"], answer: 1, explanation: "He bilan inkor shaklida doesn't + fe’l ishlatiladi." },
      { prompt: "___ you like music?", options: ["Does", "Are", "Do"], answer: 2, explanation: "You bilan Present Simple savoli Do bilan boshlanadi." },
      { prompt: "The bus ___ at 8 every morning.", options: ["leave", "leaves", "leaving"], answer: 1, explanation: "The bus birlik, shuning uchun fe’lga -s qo‘shiladi." },
      { prompt: "I ___ my homework after dinner.", options: ["does", "do", "doing"], answer: 1, explanation: "I bilan fe’lning boshlang‘ich shakli do ishlatiladi." },
      { prompt: "We ___ in a small apartment.", options: ["lives", "live", "living"], answer: 1, explanation: "We bilan fe’lning boshlang‘ich shakli live ishlatiladi." },
      { prompt: "Sara ___ two languages.", options: ["speak", "speaks", "speaking"], answer: 1, explanation: "Sara — she, shuning uchun speak → speaks." },
      { prompt: "Cats ___ a lot during the day.", options: ["sleeps", "sleep", "sleeping"], answer: 1, explanation: "Cats ko‘plik, shu sabab fe’lga -s qo‘shilmaydi." },
      { prompt: "My father ___ coffee.", options: ["doesn't drink", "don't drinks", "isn't drink"], answer: 0, explanation: "My father bilan doesn't + fe’lning boshlang‘ich shakli ishlatiladi." },
      { prompt: "What time ___ he start work?", options: ["do", "does", "is"], answer: 1, explanation: "He bilan savolda does ishlatiladi; asosiy fe’l start shaklida qoladi." },
      { prompt: "The children ___ to bed at 9.", options: ["go", "goes", "going"], answer: 0, explanation: "Children ko‘plik, shuning uchun go ishlatiladi." },
      { prompt: "It often ___ here in winter.", options: ["rain", "rains", "raining"], answer: 1, explanation: "It bilan Present Simple fe’liga -s qo‘shiladi." },
      { prompt: "___ your friends study English?", options: ["Does", "Do", "Are"], answer: 1, explanation: "Your friends ko‘plik, savol Do bilan boshlanadi." },
      { prompt: "Our teacher ___ the lesson clearly.", options: ["explain", "explains", "explaining"], answer: 1, explanation: "Our teacher birlikdagi shaxs, fe’lga -s qo‘shiladi." },
      { prompt: "You ___ very quickly.", options: ["learn", "learns", "learning"], answer: 0, explanation: "You bilan fe’lning boshlang‘ich shakli learn ishlatiladi." },
      { prompt: "The library ___ at 6 p.m.", options: ["close", "closes", "closing"], answer: 1, explanation: "The library birlik, shuning uchun close → closes." }
    ]
  },
  {
    id: "articles", title: "A, an va the", subtitle: "Artikllarni to‘g‘ri tanlang", tag: "GRAMMATIKA", symbol: "03", duration: "7 daqiqa",
    intro: "Ingliz tilida ot oldidan keladigan artikl otning ma’lum yoki noma’lum ekanini bildiradi. A va an — umumiy, the — aniq narsalar uchun.",
    rule: "a book · an apple · the book on the table",
    examples: [["I have a cat.", "Menda mushuk bor."], ["She eats an orange.", "U apelsin yeydi."], ["Open the window, please.", "Iltimos, derazani oching."]],
    words: [["apple", "olma"], ["window", "deraza"], ["umbrella", "soyabon"]],
    questions: [
      { prompt: "It is ___ old house.", options: ["a", "an", "the"], answer: 1, explanation: "Old unli tovush bilan boshlanadi, shuning uchun an ishlatiladi." },
      { prompt: "I saw ___ dog in the park. (birinchi marta)", options: ["a", "an", "the"], answer: 0, explanation: "Noma’lum, birlikdagi sanaladigan ot oldidan a keladi." },
      { prompt: "Please close ___ door. (ikkalamiz bilgan eshik)", options: ["a", "an", "the"], answer: 2, explanation: "Aniq, ma’lum eshik haqida gap ketganda the ishlatiladi." },
      { prompt: "I saw ___ elephant at the zoo.", options: ["a", "an", "the"], answer: 1, explanation: "Elephant unli tovush bilan boshlanadi, shuning uchun an ishlatiladi." },
      { prompt: "My mother is ___ nurse.", options: ["a", "an", "the"], answer: 0, explanation: "Kasbni umumiy aytganda undosh tovush oldidan a ishlatiladi." },
      { prompt: "___ moon looks bright tonight.", options: ["A", "An", "The"], answer: 2, explanation: "Oy yagona va hammaga ma’lum, shuning uchun the ishlatiladi." },
      { prompt: "We visited a museum yesterday. ___ museum was interesting.", options: ["A", "An", "The"], answer: 2, explanation: "Muzey ikkinchi marta tilga olinmoqda, endi u aniq: the museum." },
      { prompt: "He wants to buy ___ new phone.", options: ["a", "an", "the"], answer: 0, explanation: "New undosh tovush bilan boshlanadi; noma’lum birlik ot oldidan a keladi." },
      { prompt: "Please turn off ___ light in this room.", options: ["a", "an", "the"], answer: 2, explanation: "Xonadagi aniq chiroq nazarda tutilmoqda, shuning uchun the." },
      { prompt: "She ate ___ egg for breakfast.", options: ["a", "an", "the"], answer: 1, explanation: "Egg unli tovush bilan boshlanadi, shuning uchun an ishlatiladi." },
      { prompt: "They live in ___ small village.", options: ["a", "an", "the"], answer: 0, explanation: "Small undosh tovush bilan boshlanadi; umumiy birlik ot oldidan a keladi." },
      { prompt: "___ Earth moves around the Sun.", options: ["A", "An", "The"], answer: 2, explanation: "Yer yagona sayyora sifatida nazarda tutiladi, shuning uchun the." },
      { prompt: "I need ___ umbrella because it is raining.", options: ["a", "an", "the"], answer: 1, explanation: "Umbrella unli tovush bilan boshlanadi, shuning uchun an." },
      { prompt: "He is ___ honest person.", options: ["a", "an", "the"], answer: 1, explanation: "Honest so‘zida h talaffuz qilinmaydi; so‘z unli tovushdan boshlanadi." },
      { prompt: "We waited for ___ hour.", options: ["a", "an", "the"], answer: 1, explanation: "Hour so‘zida h talaffuz qilinmaydi, shu sabab an ishlatiladi." },
      { prompt: "My uncle is ___ engineer.", options: ["a", "an", "the"], answer: 1, explanation: "Engineer unli tovush bilan boshlanadi, kasb oldidan an ishlatiladi." },
      { prompt: "I read ___ interesting story yesterday.", options: ["a", "an", "the"], answer: 1, explanation: "Interesting unli tovush bilan boshlanadi, shuning uchun an." },
      { prompt: "She works in ___ office downtown.", options: ["a", "an", "the"], answer: 1, explanation: "Office unli tovush bilan boshlanadi; noma’lum joy oldidan an keladi." },
      { prompt: "___ first lesson starts at nine.", options: ["A", "An", "The"], answer: 2, explanation: "Tartib son oldidan odatda the ishlatiladi: the first lesson." },
      { prompt: "Can I have ___ glass of water?", options: ["a", "an", "the"], answer: 0, explanation: "Glass undosh tovush bilan boshlanadi; bitta stakan so‘ralmoqda." }
    ]
  },
  {
    id: "pronouns", title: "Kishilik olmoshlari", subtitle: "I, you, he, she va boshqalar", tag: "LUG‘AT + GRAMMATIKA", symbol: "04", duration: "6 daqiqa",
    intro: "Kishilik olmoshlari gapda kim yoki nima haqida so‘z ketayotganini bildiradi. Ular odatda fe’ldan oldin keladi.",
    rule: "I — men · You — sen / siz · He — u (erkak) · She — u (ayol) · It — u (narsa / hayvon)",
    examples: [["They are my friends.", "Ular mening do‘stlarim."], ["It is a new phone.", "Bu yangi telefon."], ["We live in Tashkent.", "Biz Toshkentda yashaymiz."]],
    words: [["we", "biz"], ["they", "ular"], ["friend", "do‘st"]],
    questions: [
      { prompt: "Aziza is my sister. ___ is kind.", options: ["He", "She", "It"], answer: 1, explanation: "Aziza ayol kishining ismi, uning uchun she olmoshi ishlatiladi." },
      { prompt: "My friends and I = ___", options: ["they", "we", "you"], answer: 1, explanation: "Men va boshqa odamlar birgalikda we — biz bo‘ladi." },
      { prompt: "The book is new. ___ is interesting.", options: ["It", "He", "They"], answer: 0, explanation: "Buyumlar haqida gapirganda it ishlatiladi." },
      { prompt: "My father is a teacher. ___ works at a school.", options: ["He", "She", "It"], answer: 0, explanation: "Erkak kishi haqida gapirganda he ishlatiladi." },
      { prompt: "Malika and I are classmates. ___ study together.", options: ["They", "We", "You"], answer: 1, explanation: "Men va boshqalar birgalikda we — biz bo‘ladi." },
      { prompt: "The cat is hungry. ___ wants some food.", options: ["He", "It", "We"], answer: 1, explanation: "Hayvon haqida umumiy gapirganda it olmoshi ishlatiladi." },
      { prompt: "Ali and Bek are brothers. ___ live in Tashkent.", options: ["We", "They", "He"], answer: 1, explanation: "Ikki kishi haqida gapirganda they — ular ishlatiladi." },
      { prompt: "___ am learning English.", options: ["I", "You", "She"], answer: 0, explanation: "I — men olmoshi bilan am fe’li ishlatiladi." },
      { prompt: "You and your sister are kind. ___ are kind.", options: ["We", "They", "You"], answer: 2, explanation: "Suhbatdoshga murojaat qilganda birlik yoki ko‘plikda you ishlatiladi." },
      { prompt: "My mother is at work. ___ is busy.", options: ["He", "She", "It"], answer: 1, explanation: "Ayol kishi uchun she olmoshi ishlatiladi." },
      { prompt: "The students are ready. ___ can come in.", options: ["It", "They", "He"], answer: 1, explanation: "Students ko‘plik, ularning olmoshi they bo‘ladi." },
      { prompt: "This is my pen. ___ is blue.", options: ["It", "They", "She"], answer: 0, explanation: "Bitta buyum o‘rnida it ishlatiladi." },
      { prompt: "Kamol is my cousin. ___ lives nearby.", options: ["She", "He", "They"], answer: 1, explanation: "Kamol erkak ismi, shu sabab he ishlatiladi." },
      { prompt: "My friends and I love books. ___ read every day.", options: ["We", "They", "You"], answer: 0, explanation: "My friends and I gapiruvchini ham o‘z ichiga oladi: we." },
      { prompt: "Look at the birds! ___ are flying.", options: ["It", "They", "He"], answer: 1, explanation: "Birds ko‘plikdagi hayvonlar, ular uchun they ishlatiladi." },
      { prompt: "Are ___ from Samarkand? (suhbatdoshga murojaat)", options: ["he", "you", "it"], answer: 1, explanation: "Suhbatdoshga murojaat qilganda you ishlatiladi." },
      { prompt: "My sister and brother are students. ___ study English.", options: ["They", "We", "It"], answer: 0, explanation: "Ular haqida gap ketyapti, shuning uchun they ishlatiladi." },
      { prompt: "This apple is fresh. ___ looks delicious.", options: ["He", "They", "It"], answer: 2, explanation: "Bitta buyum yoki narsa o‘rnida it ishlatiladi." },
      { prompt: "My name is Lola. ___ am from Bukhara.", options: ["She", "I", "You"], answer: 1, explanation: "O‘zimiz haqimizda gapirganda I — men ishlatiladi." },
      { prompt: "Mr. Brown is our teacher. ___ teaches English.", options: ["He", "She", "It"], answer: 0, explanation: "Mr. Brown erkak kishi, u uchun he olmoshi ishlatiladi." }
    ]
  },
  {
    id: "there-is-are", title: "There is / There are", subtitle: "Borligini va joylashuvni ayting", tag: "GRAMMATIKA", symbol: "05", duration: "8 daqiqa",
    intro: "Biror joyda narsa yoki odam borligini aytish uchun there is yoki there are ishlatiladi. Tanlov birlik yoki ko‘plikka bog‘liq.",
    rule: "There is + birlik · There are + ko‘plik",
    examples: [["There is a book on the desk.", "Stol ustida kitob bor."], ["There are two parks near here.", "Shu yaqin atrofda ikkita bog‘ bor."], ["Is there a shop nearby?", "Yaqinda do‘kon bormi?"]],
    words: [["nearby", "yaqin atrofda"], ["between", "orasida"], ["behind", "orqasida"]],
    questions: [
      { prompt: "___ a cafe on this street.", options: ["There are", "There is", "They is"], answer: 1, explanation: "A cafe birlikda, shuning uchun there is ishlatamiz." },
      { prompt: "There ___ three chairs in the room.", options: ["is", "are", "am"], answer: 1, explanation: "Three chairs ko‘plik, shuning uchun are ishlatiladi." },
      { prompt: "___ any milk in the fridge?", options: ["Are there", "Is there", "There is"], answer: 1, explanation: "Milk sanalmaydigan birlik ot, savolda is there ishlatiladi." },
      { prompt: "___ two bedrooms in our flat.", options: ["There is", "There are", "It are"], answer: 1, explanation: "Two bedrooms ko‘plik, shuning uchun there are ishlatiladi." },
      { prompt: "There ___ a bus stop near my house.", options: ["are", "is", "am"], answer: 1, explanation: "A bus stop birlik, unga is mos keladi." },
      { prompt: "___ any students in the classroom?", options: ["Is there", "Are there", "There is"], answer: 1, explanation: "Students ko‘plik, savolda are there ishlatiladi." },
      { prompt: "There ___ not a computer on the desk.", options: ["are", "is", "be"], answer: 1, explanation: "A computer birlik, inkor shakli there is not bo‘ladi." },
      { prompt: "There ___ some apples in the basket.", options: ["is", "are", "be"], answer: 1, explanation: "Apples ko‘plik, shuning uchun are ishlatiladi." },
      { prompt: "___ a good restaurant near here?", options: ["Are there", "Is there", "There are"], answer: 1, explanation: "A restaurant birlik; savol Is there bilan tuziladi." },
      { prompt: "There ___ three pictures on the wall.", options: ["is", "are", "was"], answer: 1, explanation: "Three pictures ko‘plik, shu sabab are ishlatiladi." },
      { prompt: "There isn't ___ sugar in my tea.", options: ["some", "any", "many"], answer: 1, explanation: "Inkor gaplarda sanalmaydigan ot bilan any ishlatiladi." },
      { prompt: "___ a little water in the bottle.", options: ["There are", "There is", "They are"], answer: 1, explanation: "Water sanalmaydigan birlik ot, shuning uchun there is." },
      { prompt: "How many chairs ___ in the room?", options: ["there is", "are there", "is there"], answer: 1, explanation: "Chairs ko‘plik, How many savolida are there ishlatiladi." },
      { prompt: "There ___ a pharmacy between the bank and the cafe.", options: ["are", "is", "be"], answer: 1, explanation: "A pharmacy birlik, unga is ishlatiladi." },
      { prompt: "There ___ any clean cups in the kitchen.", options: ["isn't", "aren't", "not is"], answer: 1, explanation: "Cups ko‘plik, inkor shakli there aren't bo‘ladi." },
      { prompt: "___ two windows in your bedroom?", options: ["Is there", "Are there", "There are"], answer: 1, explanation: "Two windows ko‘plik, savolda are there ishlatiladi." },
      { prompt: "There ___ some bread on the table.", options: ["are", "is", "have"], answer: 1, explanation: "Bread sanalmaydigan ot, unga there is mos keladi." },
      { prompt: "There are ___ books on the shelf.", options: ["much", "a", "many"], answer: 2, explanation: "Books sanaladigan ko‘plik ot, shu sabab many ishlatiladi." },
      { prompt: "___ a park behind the school.", options: ["There is", "There are", "It are"], answer: 0, explanation: "A park birlikdagi ot, shuning uchun there is ishlatiladi." },
      { prompt: "There ___ no buses after midnight.", options: ["is", "are", "be"], answer: 1, explanation: "Buses ko‘plik, shuning uchun there are ishlatiladi." }
    ]
  },
  {
    id: "past-simple", title: "Past Simple", subtitle: "O‘tgan voqealar haqida gapiring", tag: "GRAMMATIKA", symbol: "06", duration: "10 daqiqa",
    intro: "Past Simple o‘tmishda boshlangan va tugagan ish-harakatlar haqida gapirganda ishlatiladi. Muntazam fe’llarga -ed qo‘shiladi, ayrim fe’llar esa o‘zgaradi.",
    rule: "I worked yesterday. · She went to school. · Did you see it?",
    examples: [["We watched a film last night.", "Kecha kechqurun film tomosha qildik."], ["He went to the market.", "U bozorga bordi."], ["I did not call her.", "Men unga qo‘ng‘iroq qilmadim."]],
    words: [["yesterday", "kecha"], ["last night", "kecha kechqurun"], ["visited", "tashrif buyurdi"]],
    questions: [
      { prompt: "They ___ their grandparents yesterday.", options: ["visit", "visited", "visits"], answer: 1, explanation: "Yesterday o‘tgan vaqtni bildiradi. Visit muntazam fe’l: visited." },
      { prompt: "She ___ to Samarkand last week.", options: ["go", "goed", "went"], answer: 2, explanation: "Go fe’lining Past Simple shakli irregular: went." },
      { prompt: "___ you watch the match yesterday?", options: ["Did", "Do", "Were"], answer: 0, explanation: "Yesterday o‘tgan vaqtni bildiradi. Past Simple savoli Did + fe’lning boshlang‘ich shakli bilan tuziladi." },
      { prompt: "I ___ my room yesterday.", options: ["clean", "cleaned", "cleans"], answer: 1, explanation: "Yesterday o‘tgan vaqtni bildiradi; clean muntazam fe’l, unga -ed qo‘shiladi." },
      { prompt: "We ___ dinner at home last night.", options: ["have", "had", "has"], answer: 1, explanation: "Have fe’lining Past Simple shakli had bo‘ladi." },
      { prompt: "She ___ a letter to her friend yesterday evening.", options: ["write", "wrote", "written"], answer: 1, explanation: "Yesterday evening o‘tgan vaqtni bildiradi. Write fe’lining Past Simple shakli wrote." },
      { prompt: "They ___ not go to the cinema.", options: ["did", "were", "do"], answer: 0, explanation: "Past Simple inkorida did not + fe’lning boshlang‘ich shakli ishlatiladi." },
      { prompt: "My brother ___ a new bike last month.", options: ["buy", "bought", "buys"], answer: 1, explanation: "Buy fe’lining o‘tgan zamon shakli bought." },
      { prompt: "I ___ my keys on the table yesterday morning.", options: ["leave", "left", "leaves"], answer: 1, explanation: "Yesterday morning o‘tgan vaqtni bildiradi. Leave fe’lining Past Simple shakli left." },
      { prompt: "___ he call you yesterday?", options: ["Does", "Did", "Was"], answer: 1, explanation: "O‘tgan zamondagi savol Did bilan boshlanadi." },
      { prompt: "The film ___ at 8 p.m. yesterday.", options: ["start", "started", "starts"], answer: 1, explanation: "Yesterday o‘tgan vaqtni bildiradi; start muntazam fe’l: started." },
      { prompt: "We ___ to the park last Sunday.", options: ["go", "went", "gone"], answer: 1, explanation: "Last Sunday o‘tgan vaqtni bildiradi. Go fe’lining Past Simple shakli went." },
      { prompt: "He ___ breakfast before school yesterday.", options: ["ate", "eat", "eats"], answer: 0, explanation: "Yesterday o‘tgan vaqtni bildiradi. Eat fe’lining Past Simple shakli ate." },
      { prompt: "They ___ a beautiful house last year.", options: ["see", "saw", "seen"], answer: 1, explanation: "See fe’lining Past Simple shakli saw." },
      { prompt: "I ___ not understand the question in class yesterday.", options: ["do", "did", "was"], answer: 1, explanation: "Yesterday o‘tgan vaqtni bildiradi. Past Simple inkori did not + understand shaklida tuziladi." },
      { prompt: "Where ___ you stay on holiday last summer?", options: ["did", "were", "do"], answer: 0, explanation: "Last summer o‘tgan vaqtni bildiradi. Past Simple so‘rog‘ida Did + ega + fe’l ishlatiladi." },
      { prompt: "My parents ___ home late last night.", options: ["come", "came", "comes"], answer: 1, explanation: "Come fe’lining Past Simple shakli came." },
      { prompt: "She ___ her grandmother last weekend.", options: ["visits", "visited", "visit"], answer: 1, explanation: "Last weekend o‘tgan vaqt; visit muntazam fe’l: visited." },
      { prompt: "The children ___ happy after the game yesterday.", options: ["was", "were", "are"], answer: 1, explanation: "Yesterday o‘tgan vaqtni bildiradi. Past Simple to be fe’lining ko‘plik shakli were." },
      { prompt: "He ___ his homework two hours ago.", options: ["finished", "finish", "finishes"], answer: 0, explanation: "Two hours ago o‘tgan vaqtni bildiradi; finish → finished." }
    ]
  },
  {
    id: "plural-nouns", title: "Ko‘plik otlar", subtitle: "Bir nechta odam va narsalarni ayting", tag: "GRAMMATIKA · A1", level: "A1", symbol: "07", duration: "8 daqiqa",
    intro: "Ko‘plikdagi otlar bir nechta odam, hayvon yoki narsani bildiradi. Ko‘p otlarga -s yoki -es qo‘shiladi, ayrimlari esa o‘zgaradi.",
    rule: "book → books · box → boxes · city → cities · child → children",
    examples: [["I have two books.", "Menda ikkita kitob bor."], ["The boxes are heavy.", "Qutilar og‘ir."], ["Three children are playing.", "Uchta bola o‘ynayapti."]],
    words: [["box", "quti"], ["child", "bola"], ["city", "shahar"]],
    questions: makeQuestions([
      ["I have two ___.", "books", "book", "bookes"], ["Three ___ are playing.", "children", "childs", "child"], ["The ___ are on the table.", "boxes", "boxs", "box"], ["There are five ___ outside.", "buses", "buss", "bus"], ["What is the plural of city?", "cities", "citys", "cityes"], ["Two ___ are sleeping.", "babies", "babys", "babyes"], ["The farmer has four ___.", "sheep", "sheeps", "sheepes"], ["We saw two ___.", "women", "womans", "womanes"], ["My ___ hurt after the walk.", "feet", "foots", "feets"], ["The ___ are flying in the sky.", "mice", "mouses", "mouse"], ["They bought three ___.", "tomatoes", "tomatos", "tomato"], ["The ___ are very sharp.", "knives", "knifes", "knife"], ["There are many ___ in this class.", "people", "peoples", "person"], ["The tree has green ___.", "leaves", "leafs", "leafes"], ["I wash the ___ after dinner.", "dishes", "dishs", "dish"], ["Two ___ work at the hospital.", "men", "mans", "man"], ["The ___ are full of water.", "glasses", "glass", "glassies"], ["We visited several ___.", "countries", "countrys", "countryes"], ["Those ___ are beautiful.", "watches", "watchs", "watch"], ["One tooth, two ___.", "teeth", "tooths", "toothes"]
    ], "Ko‘plik otlarda odatda -s/-es qo‘shiladi; ayrim otlarning ko‘plik shakli butunlay o‘zgaradi.")
  },
  {
    id: "possessive-adjectives", title: "Egalik sifatlari", subtitle: "My, your, his, her va their", tag: "GRAMMATIKA · A1", level: "A1", symbol: "08", duration: "8 daqiqa",
    intro: "Egalik sifatlari biror narsa kimga tegishli ekanini bildiradi va doim otdan oldin keladi.",
    rule: "I → my · you → your · he → his · she → her · it → its · we → our · they → their",
    examples: [["This is my notebook.", "Bu mening daftarim."], ["Their house is large.", "Ularning uyi katta."], ["The cat is washing its face.", "Mushuk yuzini yuvyapti."]],
    words: [["my", "mening"], ["our", "bizning"], ["their", "ularning"]],
    questions: makeQuestions([
      ["I have a book. This is ___ book.", "my", "mine", "me"], ["You have a blue bag. ___ bag is blue.", "Your", "Yours", "You"], ["Ali has a bike. ___ bike is new.", "His", "He", "Him"], ["Sara has a cat. ___ cat is playful.", "Her", "She", "Hers"], ["The dog is eating ___ food.", "its", "it's", "it"], ["We live here. This is ___ home.", "our", "ours", "us"], ["The students have books. ___ books are open.", "Their", "Them", "They"], ["My sister and I love ___ school.", "our", "their", "her"], ["Tom, is this ___ jacket?", "your", "you", "yours"], ["The bird is in ___ nest.", "its", "it's", "it"], ["I know that girl. ___ name is Lola.", "Her", "She", "Hers"], ["Mr. Brown is a teacher. ___ class is fun.", "His", "He", "Him"], ["We have a garden. ___ garden is small.", "Our", "Ours", "Us"], ["The boys are with ___ parents.", "their", "them", "they"], ["You and your brother should bring ___ passports.", "your", "our", "his"], ["I cannot find ___ keys.", "my", "me", "mine"], ["A fish lives in ___ water.", "its", "it's", "it"], ["The women are visiting ___ friend.", "their", "them", "they"], ["Is this ___ phone, Anna?", "your", "yours", "you"], ["Our teacher gave ___ class homework.", "our", "us", "we"]
    ], "Egalik sifatini egaga qarab tanlang va undan keyin ot ishlating: my book, their house.")
  },
  {
    id: "demonstratives", title: "This, that, these, those", subtitle: "Narsalarni yaqin va uzoqdan ko‘rsating", tag: "GRAMMATIKA · A1", level: "A1", symbol: "09", duration: "7 daqiqa",
    intro: "Ko‘rsatish olmoshlari narsaning yaqin yoki uzoqda ekanini, birlik yoki ko‘plikdaligini bildiradi.",
    rule: "this — yaqin birlik · that — uzoq birlik · these — yaqin ko‘plik · those — uzoq ko‘plik",
    examples: [["This is my pen.", "Bu mening ruchkam."], ["That is your bus.", "Ana u sizning avtobusingiz."], ["These shoes are new.", "Bu oyoq kiyimlar yangi."]],
    words: [["this", "bu (yaqin, birlik)"], ["these", "bular (yaqin)"], ["those", "anavilar (uzoq)" ]],
    questions: makeQuestions([
      ["(Yaqindagi bitta kitob) ___ is my book.", "This", "These", "Those"], ["(Uzoqdagi bitta uy) ___ is very old.", "That", "Those", "This"], ["(Qo‘limdagi ikkita olma) ___ are fresh.", "These", "This", "That"], ["(Uzoqdagi qushlar) ___ are beautiful.", "Those", "That", "These"], ["___ chair here is comfortable.", "This", "These", "Those"], ["Look at ___ mountains over there.", "those", "that", "this"], ["Are ___ your keys in my hand?", "these", "this", "that"], ["Who is ___ man across the street?", "that", "these", "those"], ["___ flowers here smell lovely.", "These", "This", "That"], ["___ stars in the sky are bright.", "Those", "That", "This"], ["Is ___ your cup here?", "this", "these", "those"], ["___ buildings far away are new.", "Those", "That", "This"], ["___ is my friend beside me.", "This", "These", "Those"], ["Do you like ___ cookies I am holding?", "these", "this", "that"], ["___ shop across the road is closed.", "That", "Those", "These"], ["___ are my shoes by the door.", "These", "This", "That"], ["Can you see ___ plane in the distance?", "that", "these", "those"], ["___ books on this desk belong to me.", "These", "This", "That"], ["I remember ___ day long ago.", "that", "these", "those"], ["___ is the house next to us.", "That", "Those", "These"]
    ], "Yaqin birlik uchun this, uzoq birlik uchun that; ko‘plikda these va those ishlatiladi.")
  },
  {
    id: "object-pronouns", title: "To‘ldiruvchi olmoshlar", subtitle: "Me, him, her, us va them", tag: "GRAMMATIKA · A1", level: "A1", symbol: "10", duration: "8 daqiqa",
    intro: "To‘ldiruvchi olmoshlar fe’l yoki predlogdan keyin kelib, harakat kimga yoki nimaga qaratilganini bildiradi.",
    rule: "I → me · you → you · he → him · she → her · it → it · we → us · they → them",
    examples: [["Please call me.", "Iltimos, menga qo‘ng‘iroq qiling."], ["I can see them.", "Men ularni ko‘ryapman."], ["This gift is for her.", "Bu sovg‘a u uchun."]],
    words: [["me", "meni / menga"], ["him", "uni / unga (erkak)"], ["them", "ularni / ularga"]],
    questions: makeQuestions([
      ["Please call ___. (I)", "me", "I", "my"], ["I can see ___. (he)", "him", "he", "his"], ["We know ___. (she)", "her", "she", "hers"], ["The teacher helps ___. (we)", "us", "we", "our"], ["I invited ___. (they)", "them", "they", "their"], ["Can you hear ___? (I)", "me", "I", "mine"], ["This present is for ___. (he)", "him", "he", "his"], ["She is talking to ___. (you)", "you", "your", "yours"], ["I like ___. (the film)", "it", "its", "they"], ["Please wait for ___. (we)", "us", "we", "our"], ["I met ___ at the station. (Ali)", "him", "he", "his"], ["Do you remember ___? (those women)", "them", "they", "their"], ["Can I sit beside ___? (you)", "you", "your", "yours"], ["My brother called ___. (my sister and me)", "us", "we", "our"], ["The dog followed ___. (the children)", "them", "they", "their"], ["I am looking at ___. (the picture)", "it", "its", "them"], ["She gave ___ a note. (I)", "me", "I", "my"], ["We are waiting for ___. (our friends)", "them", "they", "their"], ["He sits next to ___. (she)", "her", "she", "hers"], ["The manager spoke to ___. (we)", "us", "we", "our"]
    ], "To‘ldiruvchi olmosh fe’l yoki predlogdan keyin keladi: see him, help us, for them.")
  },
  {
    id: "have-got", title: "Have got / Has got", subtitle: "Egalik va mavjud narsalar", tag: "GRAMMATIKA · A1", level: "A1", symbol: "11", duration: "8 daqiqa",
    intro: "Have got va has got odamda yoki narsada biror narsa borligini aytadi. Savol va inkor shakllari have/has yordamida tuziladi.",
    rule: "I / You / We / They have got · He / She / It has got",
    examples: [["I have got a new bag.", "Menda yangi sumka bor."], ["She has got two sisters.", "Uning ikkita opasi bor."], ["Have they got a car?", "Ularda mashina bormi?"]],
    words: [["have got", "bor bo‘lmoq (I/you/we/they)"], ["has got", "bor bo‘lmoq (he/she/it)"], ["sister", "opa / singil"]],
    questions: makeQuestions([
      ["I ___ a blue bicycle.", "have got", "has got", "is got"], ["She ___ two brothers.", "has got", "have got", "got has"], ["They ___ a large garden.", "have got", "has got", "are got"], ["___ he got a passport?", "Has", "Have", "Does"], ["We ___ any milk.", "haven't got", "hasn't got", "isn't got"], ["My sister ___ long hair.", "has got", "have got", "having"], ["___ you got a pencil?", "Have", "Has", "Are"], ["The house ___ three bedrooms.", "has got", "have got", "got have"], ["Tom and I ___ a football.", "have got", "has got", "is got"], ["He ___ a pet, so he is lonely.", "hasn't got", "haven't got", "don't got"], ["___ your parents got a car?", "Have", "Has", "Is"], ["I ___ a headache today.", "have got", "has got", "am got"], ["The cat ___ green eyes.", "has got", "have got", "is got"], ["You ___ a good idea.", "have got", "has got", "are got"], ["She ___ any free time today.", "hasn't got", "haven't got", "isn't got"], ["___ they got enough chairs?", "Have", "Has", "Do"], ["Our school ___ a library.", "has got", "have got", "got has"], ["My friends ___ new phones.", "have got", "has got", "is got"], ["It ___ a long tail.", "has got", "have got", "is got"], ["We ___ much homework today.", "haven't got", "hasn't got", "aren't got"]
    ], "I/you/we/they bilan have got, he/she/it bilan has got ishlatiladi; savolda have/has gap boshiga chiqadi.")
  },
  {
    id: "prepositions-place", title: "Joy predloglari", subtitle: "In, on, under va next to", tag: "GRAMMATIKA · A1", level: "A1", symbol: "12", duration: "8 daqiqa",
    intro: "Joy predloglari odam yoki narsaning qayerda ekanini ko‘rsatadi. Ular joylashuvni aniq tasvirlashga yordam beradi.",
    rule: "in — ichida · on — ustida · under — ostida · next to — yonida · between — orasida · behind — orqasida",
    examples: [["The keys are on the table.", "Kalitlar stol ustida."], ["The cat is under the chair.", "Mushuk stul ostida."], ["The bank is next to the cafe.", "Bank kafe yonida."]],
    words: [["under", "ostida"], ["between", "orasida"], ["behind", "orqasida"]],
    questions: makeQuestions([
      ["The book is ___ the bag. (ichida)", "in", "on", "under"], ["The cup is ___ the table. (ustida)", "on", "in", "behind"], ["The shoes are ___ the bed. (ostida)", "under", "over", "between"], ["The bank is ___ the post office and the cafe.", "between", "behind", "inside"], ["Our house is ___ to the school.", "next", "between", "under"], ["The garden is ___ the house. (orqasida)", "behind", "in front", "on"], ["The clock is ___ the wall.", "on", "under", "between"], ["The supermarket is ___ the street. (narigi tomonida)", "across", "inside", "under"], ["The lamp is ___ the sofa and the chair.", "between", "behind", "in"], ["The children are ___ the classroom.", "in", "on", "under"], ["The bus stop is ___ the library. (ro‘parasida)", "opposite", "inside", "below"], ["The picture hangs ___ the fireplace.", "above", "between", "inside"], ["The dog is sitting ___ its owner. (yonida)", "next to", "between", "under"], ["The ball rolled ___ the sofa. (ostiga)", "under", "above", "opposite"], ["There is a mirror ___ the bathroom door.", "behind", "between", "under"], ["The cafe is ___ the corner of this street.", "on", "in", "under"], ["The plane is flying ___ the clouds.", "above", "inside", "between"], ["The children are standing ___ a line.", "in", "on", "at"], ["The hotel is ___ the museum and the park.", "between", "behind", "below"], ["The cat jumped ___ the box. (ichiga)", "into", "on", "behind"]
    ], "Joy predlogini joylashuvga qarab tanlang: in (ichida), on (ustida), under (ostida), next to (yonida).")
  },
  {
    id: "present-continuous", title: "Present Continuous", subtitle: "Hozir sodir bo‘layotgan ishlar", tag: "GRAMMATIKA · A1", level: "A1", symbol: "13", duration: "9 daqiqa",
    intro: "Present Continuous ayni paytda davom etayotgan ish-harakatlarni ifodalaydi. To be fe’lidan keyin asosiy fe’lga -ing qo‘shiladi.",
    rule: "I am working · He / She is working · You / We / They are working",
    examples: [["I am reading a book now.", "Men hozir kitob o‘qiyapman."], ["She is cooking dinner.", "U kechki ovqat tayyorlayapti."], ["They are playing outside.", "Ular tashqarida o‘ynashyapti."]],
    words: [["now", "hozir"], ["reading", "o‘qiyotgan"], ["cooking", "ovqat tayyorlayotgan"]],
    questions: makeQuestions([
      ["I ___ a letter now.", "am writing", "is writing", "are writing"], ["She ___ TV at the moment.", "is watching", "are watching", "watching"], ["They ___ football now.", "are playing", "is playing", "plays"], ["We ___ dinner right now.", "are having", "is having", "have"], ["He ___ to music.", "is listening", "are listening", "listen"], ["___ you studying now?", "Are", "Is", "Am"], ["The baby ___ sleeping.", "is", "are", "am"], ["I am not ___ today.", "working", "work", "works"], ["Look! The dog ___ in the garden.", "is running", "runs", "are running"], ["What ___ they doing?", "are", "is", "am"], ["The students ___ for the bus now.", "are waiting", "is waiting", "wait"], ["He is ___ a shower at the moment.", "taking", "take", "takes"], ["My parents ___ lunch right now.", "are making", "is making", "make"], ["What ___ your brother doing?", "is", "are", "am"], ["We are not ___ today.", "working", "work", "works"]
    ], "Present Continuous: am/is/are + fe’l-ing; ayni paytda bo‘layotgan ishlar uchun ishlatiladi.")
  },
  {
    id: "can-cant", title: "Can va can’t", subtitle: "Qobiliyat va imkoniyatlar", tag: "GRAMMATIKA · A1", level: "A1", symbol: "14", duration: "7 daqiqa",
    intro: "Can qobiliyat yoki imkoniyatni, can’t esa qila olmaslikni bildiradi. Can dan keyin fe’l boshlang‘ich shaklda keladi.",
    rule: "I can swim. · She can’t drive. · Can they help?",
    examples: [["He can speak English.", "U ingliz tilida gapira oladi."], ["I can’t ride a horse.", "Men ot mina olmayman."], ["Can you open the window?", "Derazani ocha olasizmi?"]],
    words: [["swim", "suzmoq"], ["drive", "mashina haydamoq"], ["speak", "gapirmoq"]],
    questions: makeQuestions([
      ["A bird ___ fly.", "can", "is", "does"], ["I ___ play the piano. I have never learned.", "can’t", "can", "am"], ["___ you help me, please?", "Can", "Are", "Do"], ["She can ___ very fast.", "run", "runs", "running"], ["My grandfather ___ use a computer.", "can", "cans", "is can"], ["Fish ___ live without water.", "can’t", "can", "are"], ["Can he cook? Yes, he ___.", "can", "does", "is"], ["They ___ speak French, but they can speak English.", "can’t", "aren’t", "doesn’t"], ["We can ___ the bus from here.", "take", "takes", "taking"], ["___ your sister dance?", "Can", "Does can", "Is can"], ["He ___ ride a bike very well.", "can", "does", "is"], ["I can ___ three languages.", "speak", "speaks", "speaking"], ["___ elephants swim?", "Can", "Are", "Do"], ["She can’t ___ the heavy bag.", "lift", "lifts", "lifting"], ["They can play basketball, but they ___ play tennis.", "can’t", "don’t", "aren’t"]
    ], "Can/can’t dan keyin fe’lga -s yoki -ing qo‘shilmaydi: can swim, can’t drive.")
  },
  {
    id: "question-words", title: "So‘roq so‘zlari", subtitle: "What, where, when va who", tag: "GRAMMATIKA · A1", level: "A1", symbol: "15", duration: "8 daqiqa",
    intro: "So‘roq so‘zlari savolning qaysi ma’lumotni so‘rayotganini bildiradi: narsa, joy, vaqt, shaxs yoki sabab.",
    rule: "what — nima · where — qayerda · when — qachon · who — kim · why — nima uchun",
    examples: [["What is your name?", "Ismingiz nima?"], ["Where do you live?", "Qayerda yashaysiz?"], ["When is your birthday?", "Tug‘ilgan kuningiz qachon?"]],
    words: [["what", "nima"], ["where", "qayerda"], ["when", "qachon"]],
    questions: makeQuestions([
      ["___ is your phone? It is on the desk.", "Where", "When", "Who"], ["___ is your favorite color?", "What", "Where", "Why"], ["___ is your English teacher?", "Who", "When", "What"], ["___ do you get up? At seven.", "When", "Where", "Who"], ["___ are you happy? Because it is my birthday.", "Why", "Where", "When"], ["___ many brothers have you got?", "How", "What", "Who"], ["___ old is your sister?", "How", "When", "Where"], ["___ do you spell your surname?", "How", "Who", "Why"], ["___ does the film start? At six o’clock.", "When", "Where", "What"], ["___ is that woman? She is our neighbor.", "Who", "Why", "When"], ["___ do you live? In Tashkent.", "Where", "When", "Who"], ["___ is your birthday? In June.", "When", "What", "Where"], ["___ is in the classroom? Aziza is.", "Who", "Why", "How"], ["___ are you late? The bus was slow.", "Why", "Where", "When"], ["___ books are on the desk?", "How many", "How much", "How old"]
    ], "So‘roq so‘zini kerakli ma’lumotga qarab tanlang: joy — where, vaqt — when, shaxs — who.")
  },
  {
    id: "some-any", title: "Some va any", subtitle: "Miqdor haqida gapiring", tag: "GRAMMATIKA · A1", level: "A1", symbol: "16", duration: "8 daqiqa",
    intro: "Some va any aniq bo‘lmagan miqdorni bildiradi. Some odatda darak gaplarda, any esa savol va inkor gaplarda ishlatiladi.",
    rule: "There are some apples. · Are there any apples? · There isn’t any milk.",
    examples: [["I have some friends in London.", "Londonda bir nechta do‘stlarim bor."], ["Do you have any questions?", "Savollaringiz bormi?"], ["There isn’t any juice left.", "Sharbat qolmadi."]],
    words: [["some", "bir oz / bir nechta"], ["any", "biror / hech qanday"], ["juice", "sharbat"]],
    questions: makeQuestions([
      ["There are ___ oranges in the bowl.", "some", "any", "much"], ["Do you have ___ brothers?", "any", "some", "a"], ["We haven’t got ___ bread.", "any", "some", "many"], ["Would you like ___ tea?", "some", "any", "many"], ["There is ___ cheese in the fridge.", "some", "any", "a"], ["Are there ___ letters for me?", "any", "some", "much"], ["She bought ___ new books yesterday.", "some", "any", "much"], ["I can’t see ___ stars tonight.", "any", "some", "a"], ["Can I have ___ water, please?", "some", "any", "many"], ["There aren’t ___ eggs in the kitchen.", "any", "some", "much"], ["There are ___ apples in the basket.", "some", "any", "much"], ["There isn't ___ coffee left.", "any", "some", "many"], ["Would you like ___ biscuits?", "some", "any", "much"], ["Do we have ___ clean cups?", "any", "some", "much"], ["I bought ___ bananas at the market.", "some", "any", "much"]
    ], "Some ko‘pincha darak gaplarda va takliflarda; any esa savol hamda inkor gaplarda keladi.")
  },
  {
    id: "countable-uncountable", title: "Sanaldigan va sanalmaydigan otlar", subtitle: "How much yoki how many?", tag: "GRAMMATIKA · A1", level: "A1", symbol: "17", duration: "9 daqiqa",
    intro: "Sanaladigan otlarni dona bilan sanash mumkin; sanalmaydigan otlar esa odatda miqdor bilan o‘lchanadi. Savol so‘zi ot turiga bog‘liq.",
    rule: "How many apples? · How much water? · a bottle of water",
    examples: [["How many students are there?", "U yerda nechta o‘quvchi bor?"], ["How much sugar do you need?", "Qancha shakar kerak?"], ["I’d like a cup of coffee.", "Bir finjon qahva xohlayman."]],
    words: [["many", "ko‘p (sanaldigan)"], ["much", "ko‘p (sanalmaydigan)"], ["bottle", "shisha idish"]],
    questions: makeQuestions([
      ["How ___ bananas do we need?", "many", "much", "any"], ["How ___ milk is in the glass?", "much", "many", "some"], ["Rice is usually ___.", "uncountable", "countable", "plural"], ["I need two ___ of water.", "bottles", "bottle", "waters"], ["How ___ people came to the party?", "many", "much", "little"], ["There isn’t ___ butter left.", "much", "many", "a"], ["We bought three ___ of bread.", "loaves", "bread", "loafes"], ["How ___ money have you got?", "much", "many", "few"], ["An apple is a ___ noun.", "countable", "uncountable", "water"], ["There are too ___ chairs in this room.", "many", "much", "any"], ["How many ___ are on the plate?", "apples", "milk", "rice"], ["How much ___ do you want in your tea?", "sugar", "eggs", "bananas"], ["We need two ___ of orange juice.", "bottles", "bottle", "juices"], ["Bread is an ___ noun.", "uncountable", "countable", "plural"], ["Can I have a ___ of bread?", "loaf", "slicees", "breads"]
    ], "How many sanaladigan ko‘plik otlar, how much esa sanalmaydigan otlar bilan ishlatiladi.")
  },
  {
    id: "comparatives", title: "Sifatlarning qiyosiy darajasi", subtitle: "Ikki narsa yoki odamni taqqoslang", tag: "GRAMMATIKA · A1", level: "A1", symbol: "18", duration: "9 daqiqa",
    intro: "Qiyosiy daraja ikki odam yoki narsaning farqini ko‘rsatadi. Qisqa sifatlarga odatda -er qo‘shiladi, uzun sifatlar oldidan more keladi.",
    rule: "small → smaller · big → bigger · beautiful → more beautiful",
    examples: [["My bag is smaller than yours.", "Mening sumkam siznikidan kichikroq."], ["This book is more interesting.", "Bu kitob qiziqarliroq."], ["Today is better than yesterday.", "Bugun kechagidan yaxshiroq."]],
    words: [["smaller", "kichikroq"], ["faster", "tezroq"], ["better", "yaxshiroq"]],
    questions: makeQuestions([
      ["An elephant is ___ than a cat.", "bigger", "big", "bigest"], ["My new phone is ___ than my old one.", "more expensive", "expensiver", "most expensive"], ["A car is usually ___ than a bicycle.", "faster", "fast", "more fast"], ["This exercise is ___ than the last one.", "easier", "easyer", "more easy"], ["Winter is ___ than summer.", "colder", "cold", "more cold"], ["Her English is ___ than mine.", "better", "gooder", "best"], ["This road is ___ than that road.", "longer", "long", "longest"], ["A train is ___ than a bus for this journey.", "more comfortable", "comfortabler", "most comfortable"], ["Today is ___ than yesterday.", "hotter", "hot", "hottest"], ["My brother is ___ than me.", "younger", "young", "youngest"], ["A plane is ___ than a car.", "faster", "fast", "fastest"], ["My room is ___ than my brother's.", "cleaner", "clean", "cleanest"], ["This test is ___ than yesterday's.", "easier", "easy", "easiest"], ["The blue bag is ___ than the red one.", "cheaper", "cheap", "cheapest"], ["This chair is ___ than that one.", "more comfortable", "comfortabler", "most comfortable"]
    ], "Qisqa sifatga -er, uzun sifat oldidan more qo‘shiladi; qiyosda than ishlatiladi.")
  },
  {
    id: "prepositions-time", title: "Vaqt predloglari", subtitle: "At, on va in bilan vaqt ayting", tag: "GRAMMATIKA · A1", level: "A1", symbol: "19", duration: "8 daqiqa",
    intro: "At, on va in vaqtni ko‘rsatishda ishlatiladi. Tanlov soat, kun yoki uzunroq vaqt oralig‘iga bog‘liq.",
    rule: "at 7 o’clock · on Monday · in July · in the morning",
    examples: [["The lesson starts at nine.", "Dars soat to‘qqizda boshlanadi."], ["I play tennis on Saturday.", "Men shanba kuni tennis o‘ynayman."], ["We travel in August.", "Biz avgustda sayohat qilamiz."]],
    words: [["at", "soatda"], ["on", "kuni"], ["in", "oy / fasl / yil ichida"]],
    questions: makeQuestions([
      ["The train leaves ___ 8:30.", "at", "on", "in"], ["My birthday is ___ May.", "in", "on", "at"], ["We have English ___ Tuesday.", "on", "in", "at"], ["It is cold ___ winter.", "in", "on", "at"], ["I go to bed ___ midnight.", "at", "in", "on"], ["The shop is closed ___ Sundays.", "on", "at", "in"], ["Flowers bloom ___ spring.", "in", "on", "at"], ["She was born ___ 2015.", "in", "at", "on"], ["We eat lunch ___ noon.", "at", "on", "in"], ["I usually read ___ the evening.", "in", "on", "at"], ["Our class is ___ Monday morning.", "on", "at", "in"], ["The shop opens ___ 9 a.m.", "at", "on", "in"], ["We go skiing ___ January.", "in", "on", "at"], ["She does homework ___ the afternoon.", "in", "on", "at"], ["I don't work ___ night.", "at", "in", "on"]
    ], "At aniq soatlarda, on hafta kunlarida, in esa oy, yil va kun qismlarida ishlatiladi.")
  },
  {
    id: "possessive-pronouns", title: "Egalik olmoshlari", subtitle: "Mine, yours, his va hers", tag: "GRAMMATIKA · A1", level: "A1", symbol: "20", duration: "8 daqiqa",
    intro: "Egalik olmoshlari narsa kimga tegishli ekanini bildiradi va otning o‘rnida ishlatiladi. Ulardan keyin ot kelmaydi.",
    rule: "my → mine · your → yours · her → hers · our → ours · their → theirs",
    examples: [["This book is mine.", "Bu kitob meniki."], ["Is that red bag yours?", "Anavi qizil sumka siznikimi?"], ["Their house is large; ours is small.", "Ularning uyi katta, bizniki kichik."]],
    words: [["mine", "meniki"], ["yours", "sizniki"], ["theirs", "ularniki"]],
    questions: makeQuestions([
      ["This is my pen. It is ___.", "mine", "my", "me"], ["That is your seat. It is ___.", "yours", "your", "you"], ["This is his coat. It is ___.", "his", "him", "he"], ["The blue bike belongs to Sara. It is ___.", "hers", "her", "she"], ["We have our tickets. The tickets are ___.", "ours", "our", "us"], ["They have their own room. The room is ___.", "theirs", "their", "them"], ["This phone belongs to me. It is ___.", "mine", "my", "I"], ["Is this bag ___, Anna?", "yours", "your", "you"], ["Our garden is small, but ___ is large.", "theirs", "their", "them"], ["That notebook belongs to him. It is ___.", "his", "he", "him"], ["This umbrella belongs to me. It is ___.", "mine", "my", "me"], ["Those books belong to them. They are ___.", "theirs", "their", "them"], ["The blue car belongs to my parents. It is ___.", "theirs", "their", "them"], ["This seat belongs to us. It is ___.", "ours", "our", "us"], ["These glasses belong to you. They are ___.", "yours", "your", "you"]
    ], "Egalik olmoshi ot o‘rnida keladi: my book, lekin the book is mine.")
  }
];

const additionalLessonExamples = {
  "to-be": [["We are in the classroom.", "Biz sinfxonadamiz."], ["He is my best friend.", "U mening eng yaqin do‘stim."]],
  "present-simple": [["My sister reads before bed.", "Singlim yotishdan oldin kitob o‘qiydi."], ["They go to work by bus.", "Ular ishga avtobusda boradi."]],
  articles: [["She has an umbrella.", "Unda soyabon bor."], ["The sun is shining.", "Quyosh charaqlayapti."]],
  pronouns: [["We are ready for class.", "Biz darsga tayyormiz."], ["They are my cousins.", "Ular mening qarindoshlarim."]],
  "there-is-are": [["There is a clock above the door.", "Eshik tepasida soat bor."], ["There are two parks near my house.", "Uyim yaqinida ikkita bog‘ bor."]],
  "past-simple": [["He watched a film last night.", "U kecha kechqurun film ko‘rdi."], ["We went to the market yesterday.", "Biz kecha bozorga bordik."]],
  "plural-nouns": [["The babies are asleep.", "Chaqaloqlar uxlayapti."], ["I bought three tomatoes.", "Men uchta pomidor sotib oldim."]],
  "possessive-adjectives": [["Their garden is beautiful.", "Ularning bog‘i chiroyli."], ["Our classroom is on the second floor.", "Sinf xonamiz ikkinchi qavatda."]],
  demonstratives: [["These shoes are comfortable.", "Bu oyoq kiyimlar qulay."], ["That building is very old.", "Anavi bino juda eski."]],
  "object-pronouns": [["Can you help us?", "Bizga yordam bera olasizmi?"], ["I saw him at the station.", "Men uni bekatda ko‘rdim."]],
  "have-got": [["My uncle has got a small farm.", "Amakimning kichik fermasi bor."], ["Have you got a map?", "Sizda xarita bormi?"]],
  "prepositions-place": [["The keys are inside the drawer.", "Kalitlar tortma ichida."], ["The cafe is opposite the library.", "Kafe kutubxona qarshisida."]],
  "present-continuous": [["The children are drawing a picture.", "Bolalar rasm chizyapti."], ["I am waiting for my friend.", "Men do‘stimni kutyapman."]],
  "can-cant": [["She can play the guitar.", "U gitara chala oladi."], ["Can you open the window?", "Derazani ochib bera olasizmi?"]],
  "question-words": [["Where does your brother work?", "Akangiz qayerda ishlaydi?"], ["How often do you visit your grandparents?", "Buvijoningiz va bobojoningizni qanchalik tez-tez ko‘rasiz?"]],
  "some-any": [["I need some paper for the project.", "Loyiha uchun menga bir oz qog‘oz kerak."], ["Are there any clean plates?", "Toza likopchalar bormi?"]],
  "countable-uncountable": [["How many students are in your group?", "Guruhingizda nechta o‘quvchi bor?"], ["We need a little more water.", "Yana ozgina suv kerak."]],
  comparatives: [["This path is safer than the main road.", "Bu yo‘l asosiy yo‘ldan xavfsizroq."], ["My new desk is wider than the old one.", "Yangi yozuv stolim eskisidan kengroq."]],
  "prepositions-time": [["Our flight leaves at 6 a.m.", "Reysimiz ertalab soat 6 da jo‘naydi."], ["The festival takes place in October.", "Festival oktabrda bo‘lib o‘tadi."]],
  "possessive-pronouns": [["That seat is ours.", "Anavi o‘rindiq bizniki."], ["Is this notebook yours?", "Bu daftar siznikimi?"]]
};

lessons.forEach((lesson) => lesson.examples.push(...additionalLessonExamples[lesson.id]));

const extraQuizQuestions = {
  "present-continuous": makeQuestions([
    ["I ___ breakfast now.", "am eating", "is eating", "are eating"], ["They are ___ a film.", "watching", "watch", "watches"], ["Why ___ she crying?", "is", "are", "am"], ["The boys ___ soccer now.", "are playing", "is playing", "plays"], ["Look! It ___ snowing.", "is", "are", "am"]
  ], "Present Continuous: am/is/are + fe’l-ing shaklidan tuziladi."),
  "can-cant": makeQuestions([
    ["He can ___ a horse.", "ride", "rides", "riding"], ["We ___ see the mountains from here.", "can", "are", "does"], ["Can your parents speak English? Yes, ___.", "they can", "they do", "they are"], ["My sister can't ___ yet.", "drive", "drives", "driving"], ["___ you use my phone?", "Can", "Are", "Do"]
  ], "Can/can’t dan keyin fe’lning boshlang‘ich shakli ishlatiladi."),
  "question-words": makeQuestions([
    ["What ___ do you wake up?", "time", "many", "often"], ["___ is your new teacher? Mr Green.", "Who", "Where", "When"], ["___ does this word mean?", "What", "Who", "When"], ["___ do you travel to work? By bus.", "How", "Why", "When"], ["___ do you visit your grandparents? Once a month.", "How often", "How old", "How many"]
  ], "So‘roq so‘zini savolda so‘ralayotgan ma’lumotga mos tanlang."),
  "some-any": makeQuestions([
    ["Can you buy ___ oranges?", "some", "any", "much"], ["There isn't ___ tea in the cup.", "any", "some", "many"], ["Would you like ___ help?", "some", "any", "many"], ["Do you need ___ money?", "any", "some", "many"], ["We have ___ cheese in the fridge.", "some", "any", "many"]
  ], "Some odatda darak va taklif gaplarda, any savol va inkor gaplarda ishlatiladi."),
  "countable-uncountable": makeQuestions([
    ["How many ___ are in the box?", "books", "water", "rice"], ["How much ___ should I add?", "salt", "eggs", "bananas"], ["I'd like a ___ of cake.", "piece", "bottle", "loaf"], ["There are four ___ in the room.", "chairs", "milk", "sugar"], ["How much ___ do you drink?", "water", "apples", "sandwiches"]
  ], "Sanaladigan otlar uchun how many, sanalmaydigan otlar uchun how much ishlatiladi."),
  "comparatives": makeQuestions([
    ["Your house is ___ than mine.", "bigger", "big", "biggest"], ["Maths is ___ for me than English.", "more difficult", "difficulter", "most difficult"], ["This bag is ___ than that one.", "heavier", "heavy", "heaviest"], ["February is ___ than January.", "shorter", "short", "shortest"], ["These shoes are ___ than my old ones.", "more comfortable", "comfortabler", "most comfortable"]
  ], "Ikki narsani qiyoslaganda sifatga -er yoki more qo‘shib, than ishlatiladi."),
  "prepositions-time": makeQuestions([
    ["The school year starts ___ September.", "in", "on", "at"], ["I was born ___ 3 May.", "on", "in", "at"], ["The meeting is ___ 10 o'clock.", "at", "on", "in"], ["We visit our grandparents ___ Sundays.", "on", "in", "at"], ["My family eats together ___ the evening.", "in", "on", "at"]
  ], "At soatlarda, on hafta kunlari va sanalarda, in oy va kun qismlarida ishlatiladi."),
  "possessive-pronouns": makeQuestions([
    ["That coat belongs to James. It is ___.", "his", "him", "he"], ["The yellow house belongs to us. It is ___.", "our", "ours", "us"], ["These seats belong to the children. They are ___.", "theirs", "their", "them"], ["This phone belongs to Anna. It is ___.", "her", "hers", "she"], ["The bikes belong to you and your sister. They are ___.", "yours", "your", "you"]
  ], "Egalik olmoshi ot o‘rnida keladi: mine, yours, his, hers, ours, theirs." )
};

lessons.forEach((lesson) => {
  if (extraQuizQuestions[lesson.id]) lesson.questions.push(...extraQuizQuestions[lesson.id]);
});

const additionalVocabulary = {
  "to-be": [
    ["teacher", "o‘qituvchi"], ["doctor", "shifokor"], ["nurse", "hamshira"], ["engineer", "muhandis"], ["driver", "haydovchi"], ["artist", "rassom"], ["neighbor", "qo‘shni"], ["parent", "ota yoki ona"], ["child", "bola"],
    ["man", "erkak"], ["woman", "ayol"], ["boy", "o‘g‘il bola"], ["girl", "qiz bola"], ["person", "shaxs"], ["people", "odamlar"], ["name", "ism"], ["age", "yosh"], ["country", "mamlakat"],
    ["city", "shahar"], ["village", "qishloq"], ["Uzbek", "o‘zbek"], ["American", "amerikalik"], ["tall", "novcha"], ["short", "past bo‘yli"], ["kind", "mehribon"], ["busy", "band"], ["at home", "uyda"]
  ],
  "present-simple": [
    ["wake up", "uyg‘onmoq"], ["get up", "o‘rindan turmoq"], ["brush", "cho‘tka bilan tozalamoq"], ["wash", "yuvmoq"], ["eat", "yemoq"], ["drink", "ichmoq"], ["go", "bormoq"], ["come", "kelmoq"], ["work", "ishlamoq"],
    ["study", "o‘qimoq"], ["read", "o‘qimoq"], ["write", "yozmoq"], ["cook", "ovqat pishirmoq"], ["clean", "tozalamoq"], ["watch", "tomosha qilmoq"], ["listen", "tinglamoq"], ["play", "o‘ynamoq"], ["sleep", "uxlamoq"],
    ["morning", "ertalab"], ["afternoon", "tushdan keyin"], ["evening", "kechqurun"], ["night", "tun"], ["always", "har doim"], ["often", "tez-tez"], ["never", "hech qachon"], ["weekend", "dam olish kunlari"], ["routine", "kun tartibi"]
  ],
  "articles": [
    ["book", "kitob"], ["car", "mashina"], ["house", "uy"], ["egg", "tuxum"], ["orange", "apelsin"], ["elephant", "fil"], ["honest", "halol"], ["hour", "soat"], ["university", "universitet"],
    ["doctor", "shifokor"], ["actor", "aktyor"], ["table", "stol"], ["chair", "stul"], ["computer", "kompyuter"], ["phone", "telefon"], ["island", "orol"], ["office", "idora"], ["museum", "muzey"],
    ["ocean", "okean"], ["sun", "quyosh"], ["moon", "oy"], ["bus", "avtobus"], ["school", "maktab"], ["animal", "hayvon"], ["idea", "fikr"], ["European", "yevropalik"], ["uniform", "forma"]
  ],
  "pronouns": [
    ["I", "men"], ["you", "sen / siz"], ["he", "u (erkak)"], ["she", "u (ayol)"], ["it", "u (narsa / hayvon)"], ["we both", "biz ikkalamiz"], ["they both", "ular ikkovi"], ["myself", "o‘zim"], ["yourself", "o‘zingiz"],
    ["himself", "o‘zi (erkak)"], ["herself", "o‘zi (ayol)"], ["itself", "o‘zi (narsa)"], ["ourselves", "o‘zimiz"], ["themselves", "o‘zlari"], ["oneself", "o‘zini"], ["each other", "bir-birini"], ["one another", "bir-birini"], ["who", "kim"],
    ["everyone", "hamma"], ["somebody", "kimdir"], ["nobody", "hech kim"], ["anybody", "biror kishi"], ["everything", "hamma narsa"], ["something", "nimadir"], ["nothing", "hech narsa"], ["both", "ikkalasi"], ["another", "boshqasi"]
  ],
  "there-is-are": [
    ["kitchen", "oshxona"], ["bedroom", "yotoqxona"], ["bathroom", "hammom"], ["living room", "mehmonxona"], ["garden", "bog‘"], ["garage", "garaj"], ["shelf", "tokcha"], ["cupboard", "javon"], ["sofa", "divan"],
    ["desk", "yozuv stoli"], ["lamp", "chiroq"], ["picture", "rasm"], ["window", "deraza"], ["door", "eshik"], ["floor", "pol"], ["ceiling", "shift"], ["street", "ko‘cha"], ["station", "bekat"],
    ["shop", "do‘kon"], ["hospital", "shifoxona"], ["market", "bozor"], ["park", "bog‘"], ["a lot of", "juda ko‘p"], ["a few", "bir nechta"], ["empty", "bo‘sh"], ["full", "to‘la"], ["available", "mavjud"]
  ],
  "past-simple": [
    ["go", "bormoq"], ["come", "kelmoq"], ["see", "ko‘rmoq"], ["eat", "yemoq"], ["drink", "ichmoq"], ["write", "yozmoq"], ["read", "o‘qimoq"], ["buy", "sotib olmoq"], ["make", "yasamoq"],
    ["take", "olmoq"], ["give", "bermoq"], ["find", "topmoq"], ["meet", "uchrashmoq"], ["speak", "gapirmoq"], ["sleep", "uxlamoq"], ["run", "yugurmoq"], ["walk", "sayr qilmoq"], ["work", "ishlamoq"],
    ["ago", "oldin"], ["last week", "o‘tgan hafta"], ["last month", "o‘tgan oy"], ["last year", "o‘tgan yil"], ["yesterday morning", "kecha ertalab"], ["two days ago", "ikki kun oldin"], ["holiday", "ta’til"], ["trip", "sayohat"], ["memory", "xotira"]
  ],
  "plural-nouns": [
    ["book / books", "kitob / kitoblar"], ["box / boxes", "quti / qutilar"], ["bus / buses", "avtobus / avtobuslar"], ["baby / babies", "chaqaloq / chaqaloqlar"], ["dish / dishes", "idish / idishlar"], ["watch / watches", "soat / soatlar"], ["leaf / leaves", "barg / barglar"], ["knife / knives", "pichoq / pichoqlar"], ["life / lives", "hayot / hayotlar"],
    ["man / men", "erkak / erkaklar"], ["woman / women", "ayol / ayollar"], ["person / people", "odam / odamlar"], ["child / children", "bola / bolalar"], ["foot / feet", "oyoq / oyoqlar"], ["tooth / teeth", "tish / tishlar"], ["mouse / mice", "sichqon / sichqonlar"], ["goose / geese", "g‘oz / g‘ozlar"], ["deer", "bug‘u / bug‘ular"],
    ["tomato / tomatoes", "pomidor / pomidorlar"], ["potato / potatoes", "kartoshka / kartoshkalar"], ["hero / heroes", "qahramon / qahramonlar"], ["country / countries", "mamlakat / mamlakatlar"], ["story / stories", "hikoya / hikoyalar"], ["key / keys", "kalit / kalitlar"], ["toy / toys", "o‘yinchoq / o‘yinchoqlar"], ["day / days", "kun / kunlar"], ["class / classes", "sinf / sinflar"]
  ],
  "possessive-adjectives": [
    ["my own", "o‘zimga tegishli"], ["your", "sening / sizning"], ["his", "uning (erkak)"], ["her", "uning (ayol)"], ["its", "uning (narsa / hayvon)"], ["our own", "o‘zimizga tegishli"], ["their own", "o‘zlariga tegishli"], ["whose", "kimning"], ["belong to", "tegishli bo‘lmoq"],
    ["pencil", "qalam"], ["notebook", "daftar"], ["backpack", "ryukzak"], ["jacket", "kurtka"], ["shoes", "oyoq kiyim"], ["keys", "kalitlar"], ["wallet", "hamyon"], ["family", "oila"], ["parents", "ota-ona"],
    ["address", "manzil"], ["favorite", "sevimli"], ["own", "o‘ziga tegishli"], ["owner", "egasi"], ["team", "jamoa"], ["classroom", "sinf xonasi"], ["birthday", "tug‘ilgan kun"], ["surname", "familiya"], ["lunch", "tushlik"]
  ],
  "demonstratives": [
    ["this object", "bu buyum"], ["that object", "anavi buyum"], ["these objects", "bu buyumlar"], ["those objects", "anavi buyumlar"], ["here", "bu yerda"], ["there", "u yerda"], ["near", "yaqin"], ["far", "uzoq"], ["over there", "anavi yerda"],
    ["one", "bitta"], ["ones", "bittalari"], ["this one", "mana bunisi"], ["that one", "anavi"], ["these ones", "mana bular"], ["those ones", "anavilar"], ["object", "buyum"], ["thing", "narsa"], ["distance", "masofa"],
    ["this morning", "bugun ertalab"], ["that day", "o‘sha kun"], ["these days", "shu kunlarda"], ["those days", "o‘sha kunlarda"], ["point", "ko‘rsatmoq"], ["show", "ko‘rsatmoq"], ["choose", "tanlamoq"], ["which", "qaysi"], ["same", "bir xil"]
  ],
  "object-pronouns": [
    ["I", "men"], ["you", "seni / sizni"], ["he", "u (erkak)"], ["her", "uni / unga (ayol)"], ["it", "uni / unga (narsa)"], ["us", "bizni / bizga"], ["they", "ular"], ["for me", "men uchun"], ["with us", "biz bilan"],
    ["call", "qo‘ng‘iroq qilmoq"], ["help", "yordam bermoq"], ["invite", "taklif qilmoq"], ["visit", "tashrif buyurmoq"], ["ask", "so‘ramoq"], ["tell", "aytib bermoq"], ["give", "bermoq"], ["show", "ko‘rsatmoq"], ["send", "yubormoq"],
    ["to him", "unga (erkakka)"], ["to her", "unga (ayolga)"], ["to them", "ularga"], ["about us", "biz haqimizda"], ["beside me", "yonimda"], ["behind you", "ortingizda"], ["know", "tanimoq / bilmoq"], ["remember", "eslamoq"], ["follow", "ergashmoq"]
  ],
  "have-got": [
    ["a car", "mashina"], ["a bicycle", "velosiped"], ["a house", "uy"], ["a flat", "xonadon"], ["a garden", "bog‘"], ["a pet", "uy hayvoni"], ["a dog", "it"], ["a cat", "mushuk"], ["a passport", "pasport"],
    ["a phone", "telefon"], ["a computer", "kompyuter"], ["a camera", "kamera"], ["a watch", "qo‘l soati"], ["a ticket", "chipta"], ["a map", "xarita"], ["a key", "kalit"], ["a brother", "aka / uka"], ["a cousin", "amakivachcha / xolavachcha"],
    ["blue eyes", "ko‘k ko‘zlar"], ["long hair", "uzun soch"], ["free time", "bo‘sh vaqt"], ["a headache", "bosh og‘rig‘i"], ["an idea", "fikr"], ["enough", "yetarli"], ["need", "kerak bo‘lmoq"], ["own", "ega bo‘lmoq"], ["possessions", "shaxsiy buyumlar"]
  ],
  "prepositions-place": [
    ["in", "ichida"], ["on", "ustida"], ["at", "yonida / da"], ["above", "yuqorisida"], ["below", "pastida"], ["opposite", "ro‘parasida"], ["across from", "qarama-qarshisida"], ["in front of", "oldida"], ["next to", "yonida"],
    ["near", "yaqinida"], ["inside", "ichkarida"], ["outside", "tashqarida"], ["around", "atrofida"], ["through", "orqali"], ["along", "bo‘ylab"], ["onto", "ustiga"], ["into", "ichiga"], ["out of", "ichidan tashqariga"],
    ["corner", "burchak"], ["entrance", "kirish joyi"], ["exit", "chiqish joyi"], ["crossroads", "chorraha"], ["square", "maydon"], ["bridge", "ko‘prik"], ["path", "so‘qmoq"], ["map", "xarita"], ["location", "joylashuv"]
  ],
  "present-continuous": [
    ["walking", "yurayotgan"], ["talking", "gaplashayotgan"], ["working", "ishlayotgan"], ["studying", "o‘qiyotgan"], ["writing", "yozayotgan"], ["listening", "tinglayotgan"], ["watching", "tomosha qilayotgan"], ["playing", "o‘ynayotgan"], ["sleeping", "uxlayotgan"],
    ["eating", "yeyayotgan"], ["drinking", "ichayotgan"], ["running", "yugurayotgan"], ["sitting", "o‘tirgan"], ["standing", "turgan"], ["waiting", "kutayotgan"], ["looking", "qarayotgan"], ["making", "yasayotgan"], ["doing", "qilayotgan"],
    ["today", "bugun"], ["right now", "ayni hozir"], ["at the moment", "hozirda"], ["currently", "ayni paytda"], ["still", "hali ham"], ["busy", "band"], ["quietly", "jim holda"], ["outside", "tashqarida"], ["together", "birgalikda"]
  ],
  "can-cant": [
    ["sing", "kuylamoq"], ["dance", "raqsga tushmoq"], ["cook", "ovqat pishirmoq"], ["swimming", "suzish"], ["driving", "mashina haydash"], ["ride", "minmoq"], ["draw", "rasm chizmoq"], ["paint", "bo‘yamoq"], ["ski", "chang‘ida uchmoq"],
    ["speaking English", "ingliz tilida gapirish"], ["read", "o‘qimoq"], ["write", "yozmoq"], ["count", "sanamoq"], ["climb", "tirmashmoq"], ["jump", "sakramoq"], ["run", "yugurmoq"], ["skate", "konkida uchmoq"], ["use", "foydalanmoq"],
    ["ability", "qobiliyat"], ["skill", "mahorat"], ["talented", "iste’dodli"], ["well", "yaxshi"], ["badly", "yomon"], ["together", "birgalikda"], ["help", "yordam bermoq"], ["try", "urinib ko‘rmoq"], ["possible", "mumkin"]
  ],
  "question-words": [
    ["what for", "nima uchun"], ["where exactly", "aynan qayerda"], ["when exactly", "aynan qachon"], ["who", "kim"], ["why", "nima uchun"], ["which", "qaysi"], ["whose", "kimning"], ["how", "qanday"], ["how old", "necha yoshda"],
    ["how many", "nechta"], ["how much", "qancha"], ["how often", "qanchalik tez-tez"], ["how long", "qancha vaqt"], ["what time", "soat nechada"], ["what color", "qanday rang"], ["what kind", "qanday tur"], ["where from", "qayerdan"], ["how far", "qanchalik uzoq"],
    ["question", "savol"], ["answer", "javob"], ["address", "manzil"], ["reason", "sabab"], ["place", "joy"], ["date", "sana"], ["time", "vaqt"], ["person", "shaxs"], ["choice", "tanlov"]
  ],
  "some-any": [
    ["somebody", "kimdir"], ["anybody", "biror kishi"], ["something", "nimadir"], ["anything", "biror narsa"], ["someone", "kimdir"], ["anyone", "biror kishi"], ["somewhere", "qayerdadir"], ["anywhere", "biror joyda"], ["no one", "hech kim"],
    ["bread", "non"], ["cheese", "pishloq"], ["milk", "sut"], ["water", "suv"], ["lemonade", "limonad"], ["tea", "choy"], ["coffee", "qahva"], ["rice", "guruch"], ["sugar", "shakar"],
    ["apple", "olma"], ["orange", "apelsin"], ["egg", "tuxum"], ["tomato", "pomidor"], ["potato", "kartoshka"], ["sandwich", "sendvich"], ["a little", "ozgina"], ["a few", "bir nechta"], ["enough", "yetarli"]
  ],
  "countable-uncountable": [
    ["apple", "olma"], ["banana", "banan"], ["egg", "tuxum"], ["tomato", "pomidor"], ["potato", "kartoshka"], ["carrot", "sabzi"], ["onion", "piyoz"], ["biscuit", "pechenye"], ["sandwich", "sendvich"],
    ["water", "suv"], ["milk", "sut"], ["rice", "guruch"], ["bread", "non"], ["sugar", "shakar"], ["salt", "tuz"], ["flour", "un"], ["cheese", "pishloq"], ["butter", "sariyog‘"],
    ["a piece of", "bir bo‘lak"], ["a glass of", "bir stakan"], ["a cup of", "bir finjon"], ["a bowl of", "bir kosa"], ["a slice of", "bir tilim"], ["a kilo of", "bir kilo"], ["a carton of", "bir quti"], ["a packet of", "bir pachka"], ["quantity", "miqdor"]
  ],
  "comparatives": [
    ["small", "kichik"], ["large", "katta"], ["tall", "novcha"], ["short", "past / qisqa"], ["fast", "tez"], ["slow", "sekin"], ["old", "qari / eski"], ["young", "yosh"], ["long", "uzun"],
    ["new", "yangi"], ["cheap", "arzon"], ["expensive", "qimmat"], ["easy", "oson"], ["difficult", "qiyin"], ["hot", "issiq"], ["cold", "sovuq"], ["happy", "xursand"], ["beautiful", "chiroyli"],
    ["bigger", "kattaroq"], ["wider", "kengroq"], ["quicker", "tezroq"], ["slower", "sekinroq"], ["older", "kattaroq / eskiroq"], ["cheaper", "arzonroq"], ["more useful", "foydaliroq"], ["than", "-dan ko‘ra"], ["similar", "o‘xshash"]
  ],
  "prepositions-time": [
    ["before", "oldin"], ["after", "keyin"], ["during", "davomida"], ["Monday", "dushanba"], ["Tuesday", "seshanba"], ["Wednesday", "chorshanba"], ["Thursday", "payshanba"], ["Friday", "juma"], ["Saturday", "shanba"],
    ["Sunday", "yakshanba"], ["January", "yanvar"], ["February", "fevral"], ["March", "mart"], ["April", "aprel"], ["May", "may"], ["June", "iyun"], ["July", "iyul"], ["August", "avgust"],
    ["September", "sentabr"], ["October", "oktabr"], ["November", "noyabr"], ["December", "dekabr"], ["week", "hafta"], ["month", "oy"], ["year", "yil"], ["at noon", "tush paytida"], ["at night", "tunda"]
  ],
  "possessive-pronouns": [
    ["my own", "o‘zimga tegishli"], ["your own", "o‘zingizga tegishli"], ["his", "uniki (erkak)"], ["hers", "uniki (ayol)"], ["ours", "bizniki"], ["their own", "o‘zlariga tegishli"], ["my", "mening"], ["your", "sening / sizning"], ["her", "uning (ayol)"],
    ["our", "bizning"], ["their", "ularning"], ["owner", "egasi"], ["belong", "tegishli bo‘lmoq"], ["belong to me", "meniki bo‘lmoq"], ["whose", "kimniki / kimning"], ["ownership", "egalik"], ["property", "mulk"], ["share", "bo‘lishmoq"],
    ["bag", "sumka"], ["book", "kitob"], ["coat", "palto"], ["seat", "o‘rindiq"], ["ticket", "chipta"], ["room", "xona"], ["garden", "bog‘"], ["house", "uy"], ["personal", "shaxsiy"]
  ]
};

lessons.forEach((lesson) => lesson.words.push(...additionalVocabulary[lesson.id]));

function makeVocabularyQuestions(words, start, count, direction = "en-to-uz") {
  const getChoice = ([word, meaning]) => direction === "uz-to-en" ? word : meaning;
  const choices = [...new Set(words.map(getChoice))];
  const rows = words.slice(start, start + count).map(([word, meaning], index) => {
    const correct = getChoice([word, meaning]);
    const distractors = choices.filter((choice) => choice !== correct);
    const prompt = direction === "uz-to-en"
      ? `“${meaning}” ma’nosiga mos inglizcha so‘zni toping.`
      : `“${word}” so‘zining to‘g‘ri tarjimasini toping.`;
    return [prompt, correct, distractors[(index * 2) % distractors.length], distractors[(index * 2 + 5) % distractors.length]];
  });
  return makeQuestions(rows, "Darsdagi yangi so‘zlarni yodda saqlang.");
}

lessons.forEach((lesson) => {
  lesson.stage = 1;
  lesson.level = "A1";
  lesson.questions.push(...makeVocabularyQuestions(lesson.words, 20, 10));
});

const laterStagePrograms = [
  {
    stage: 3, level: "B1", title: "STAGE 3 · B1 INDEPENDENT COMMUNICATION", topics: [
      ["Second Conditional", "Imagine possibilities and outcomes.", "Use if + Past Simple to describe an unreal or unlikely condition, followed by would + base verb."],
      ["Past Perfect", "Describe an event before another past event.", "Use had + past participle for an action completed before another past action."],
      ["Present Perfect Continuous", "Talk about actions that continue over time.", "Use have/has been + verb-ing to emphasize duration or a continuing action."],
      ["Narrative Tenses", "Organize events in a story.", "Use Past Simple and Past Perfect to show the order of past events."],
      ["Passive Voice", "Focus on processes and results.", "Use be + past participle when the action or result matters more than the doer."],
      ["Modals of Deduction", "Draw conclusions from evidence.", "Use must for strong certainty, might for possibility, and can't for impossibility."],
      ["Comparative Emphasis", "Strengthen comparisons.", "Use much or far before a comparative adjective to emphasize a difference."],
      ["Adverbs and Linking Words", "Show relationships between ideas.", "Use linking words to express cause, result, and contrast."],
      ["Gerunds and Infinitives", "Verb forms can change meaning.", "Distinguish between remember doing something and remember to do something."],
      ["Degree and Limitation", "Make your meaning precise.", "Use words such as rather, quite, and enough to express degree."],
      ["Quantifiers in Context", "Choose the right amount for the context.", "Match quantifiers to countable and uncountable nouns."],
      ["Mixed Conditionals", "Connect past conditions to present results.", "Use a mixed conditional when a past condition affects a present result."],
      ["Relative Clauses", "Add information about people and things.", "Distinguish defining and non-defining relative clauses."],
      ["Indefinite Pronouns", "Refer to people and things in general.", "Indefinite pronouns usually take a singular verb."],
      ["Business Negotiations", "Make offers and agree on terms.", "Use language for offers, compromise, and agreement."],
      ["Travel Problems", "Ask for help in unexpected situations.", "Explain a problem, its impact, and a possible solution."],
      ["Health and Well-being", "Discuss symptoms and care.", "Use terms for medical care and healthy living."],
      ["Workplace Collocations", "Use natural phrases at work.", "Learn common combinations of verbs and nouns."],
      ["Climate and Nature", "Discuss environmental solutions.", "Evaluate climate risks and ways to protect nature."],
      ["Food and Traditions", "Describe recipes and food culture.", "Talk about food preparation and taste."]
    ]
  },
  {
    stage: 4, level: "B2", title: "STAGE 4 · B2 ADVANCED FLUENCY", topics: [
      ["Advanced Conditionals", "Use complex conditions and outcomes.", "Use provided that, unless, and inversion to form advanced conditional sentences."],
      ["Inversion and Emphasis", "Add emphasis in formal English.", "Place the auxiliary verb before the subject when a negative adverbial begins a sentence."],
      ["Advanced Perfect Aspects", "Express complex duration and results.", "Use perfect aspects to distinguish completion, duration, and earlier events."],
      ["Reporting Passive", "Report claims and scientific views.", "Use structures such as It is said that... and be believed to..."],
      ["Causative Have and Get", "Arrange for someone else to do a task.", "Use have/get + object + past participle."],
      ["Modal Perfect", "Make deductions and criticism about the past.", "Use modal + have + past participle to evaluate past events."],
      ["Formal Subjunctive", "Express formal requirements and recommendations.", "Use suggest/require + that + subject + base verb."],
      ["Cleft Sentences", "Focus attention on important information.", "Use It is/was... that/who and What... is... structures."],
      ["Complex Linking Words", "Connect contrasting ideas.", "Use despite + noun/gerund and although + subject + verb."],
      ["Concession and Counterargument", "Acknowledge an opposing view.", "Use expressions such as Admittedly... however..."],
      ["Hedging", "Present claims carefully.", "Use may, might, seem, and suggest to make claims less certain."],
      ["Academic Research", "Describe research and methodology.", "Explain research questions, methods, findings, and limitations."],
      ["Formal Relative Clauses", "Use advanced relative clauses.", "Use whom, whose, and preposition + which in formal contexts."],
      ["Nuance and Precision", "Express meaning with precision.", "Choose determiners and pronouns carefully in formal contexts."],
      ["Business Negotiations", "Discuss offers and contract terms.", "Use diplomatic language and contract vocabulary."],
      ["Diplomatic Travel", "Handle official or unexpected travel situations.", "Explain border procedures, assistance, and travel problems."],
      ["Medicine and Public Policy", "Discuss medical evidence and systems.", "Evaluate clinical outcomes, equity, and policy."],
      ["Leadership and Management", "Lead teams and make complex decisions.", "Manage goals, authority, and organizational change."],
      ["Environmental Policy", "Analyze environmental decisions.", "Evaluate policy tools and their effects."],
      ["Strategy and Evidence", "Build a clear argument about a complex issue.", "Connect evidence, assumptions, and conclusions logically."]
    ]
  }
];

const advancedVocabulary = {
  3: [
    [["counterfactual", "haqiqatga zid"], ["hypothetical", "faraziy"], ["unlikely", "ehtimoli kam"], ["scenario", "ssenariy"], ["outcome", "natija"], ["regret", "afsus"], ["alternative", "muqobil"], ["opportunity cost", "muqobil tanlov qiymati"], ["suppose", "faraz qilmoq"], ["if I were", "agar men bo‘lganimda"]],
    [["previously", "avval"], ["beforehand", "oldindan"], ["by then", "o‘sha vaqtga kelib"], ["earlier", "ertaroq"], ["sequence", "ketma-ketlik"], ["unexpected", "kutilmagan"], ["evidence", "dalil"], ["realise", "anglab yetmoq"], ["recognise", "tanimoq"], ["in retrospect", "orqaga qarab"]],
    [["ongoing", "davom etayotgan"], ["duration", "davomiylik"], ["lately", "so‘nggi paytlarda"], ["recently", "yaqinda"], ["exhausted", "holdan toygan"], ["unfinished", "tugallanmagan"], ["continuous", "uzluksiz"], ["progress", "rivojlanish"], ["so far", "hozirgacha"], ["since then", "o‘shandan beri"]],
    [["meanwhile", "shu orada"], ["suddenly", "to‘satdan"], ["eventually", "nihoyat"], ["at first", "avvaliga"], ["shortly afterwards", "ko‘p o‘tmay"], ["flashback", "o‘tmishga qaytish"], ["climax", "avj nuqtasi"], ["turning point", "burilish nuqtasi"], ["narrator", "hikoyachi"], ["in the end", "oxir-oqibat"]],
    [["be manufactured", "ishlab chiqarilmoq"], ["be assembled", "yig‘ilmoq"], ["be processed", "qayta ishlanmoq"], ["be delivered", "yetkazilmoq"], ["be repaired", "ta’mirlanmoq"], ["manufacturer", "ishlab chiqaruvchi"], ["production line", "ishlab chiqarish liniyasi"], ["raw material", "xomashyo"], ["quality control", "sifat nazorati"], ["annually", "har yili"]],
    [["must have", "...gan bo‘lsa kerak"], ["might have", "...gan bo‘lishi mumkin"], ["can't have", "...gan bo‘lishi mumkin emas"], ["deduce", "xulosa qilmoq"], ["clue", "ishora"], ["footprints", "oyoq izlari"], ["apparently", "aftidan"], ["presumably", "taxminan"], ["probability", "ehtimollik"], ["suspicious", "shubhali"]],
    [["considerably", "sezilarli darajada"], ["slightly", "biroz"], ["marginally", "ozgina"], ["by far", "shubhasiz eng"], ["twice as", "ikki baravar"], ["equivalent", "teng qiymatli"], ["disparity", "tafovut"], ["compared with", "... bilan taqqoslaganda"], ["in contrast", "aksincha"], ["rather than", "...dan ko‘ra"]],
    [["consequently", "natijada"], ["nevertheless", "shunga qaramay"], ["moreover", "bundan tashqari"], ["otherwise", "aks holda"], ["increasingly", "tobora"], ["ultimately", "oxir-oqibat"], ["specifically", "aniqrog‘i"], ["regardless", "...dan qat’i nazar"], ["therefore", "shuning uchun"], ["apparently", "aftidan"]],
    [["regret doing", "qilganidan afsuslanmoq"], ["regret to say", "afsus bilan aytmoq"], ["go on doing", "davom ettirmoq"], ["go on to do", "keyingi ishga o‘tmoq"], ["mean doing", "anglatmoq"], ["mean to do", "niyat qilmoq"], ["can't help", "o‘zini tiya olmaslik"], ["be worth", "arziydigan bo‘lmoq"], ["object to", "qarshi bo‘lmoq"], ["get used to", "ko‘nikmoq"]],
    [["rather", "birmuncha"], ["quite", "ancha"], ["extremely", "nihoyatda"], ["fairly", "yetarlicha"], ["relatively", "nisbatan"], ["somewhat", "biroz"], ["exceptionally", "favqulodda"], ["barely", "arang"], ["almost", "deyarli"], ["particularly", "ayniqsa"]],
    [["virtually none", "deyarli yo‘q"], ["substantial amount", "salmoqli miqdor"], ["a handful of", "bir hovuch"], ["a wide range", "keng tur"], ["the majority", "ko‘pchilik"], ["a minority", "ozchilik"], ["countless", "son-sanoqsiz"], ["scarce", "tanqis"], ["abundant", "mo‘l"], ["sufficient", "yetarli"]],
    [["counterfactual", "haqiqatga zid"], ["in hindsight", "keyin o‘ylab qaraganda"], ["missed opportunity", "qo‘ldan ketgan imkoniyat"], ["regret", "afsus"], ["circumstance", "sharoit"], ["unfulfilled", "amalga oshmagan"], ["permanent", "doimiy"], ["influence", "ta’sir"], ["assumption", "taxmin"], ["consequence", "oqibat"]],
    [["defining clause", "aniqlovchi ergash gap"], ["non-defining clause", "izohlovchi ergash gap"], ["comma", "vergul"], ["omit", "tushirib qoldirmoq"], ["essential", "zarur"], ["extra information", "qo‘shimcha ma’lumot"], ["refer to", "...ga ishora qilmoq"], ["whereby", "shu orqali"], ["in which", "...da"], ["to whom", "...ga"]],
    [["a particular person", "muayyan shaxs"], ["whoever", "kim bo‘lsa ham"], ["whichever", "qaysi bo‘lsa ham"], ["whatever", "nima bo‘lsa ham"], ["neither of them", "ikkisidan hech biri"], ["each other", "bir-birini"], ["another", "yana biri"], ["everyone involved", "ishtirok etganlarning barchasi"], ["nowhere near", "sira ...chalik emas"], ["anything whatsoever", "umuman biror narsa"]],
    [["counteroffer", "qarshi taklif"], ["stakeholder", "manfaatdor tomon"], ["leverage", "ta’sir kuchi"], ["concession", "yon berish"], ["consensus", "yakdil fikr"], ["non-negotiable", "kelishib bo‘lmaydigan"], ["bottom line", "eng quyi chegara"], ["binding agreement", "majburiy kelishuv"], ["liability", "javobgarlik"], ["commercial terms", "tijorat shartlari"]],
    [["overbooked", "ortiqcha band qilingan"], ["miss a connection", "ulanish reysidan qolmoq"], ["compensation", "tovon puli"], ["claim form", "talabnoma"], ["lost property", "yo‘qolgan buyumlar bo‘limi"], ["consular assistance", "konsullik yordami"], ["overcharge", "ortiqcha haq olmoq"], ["stranded", "yo‘lda qolgan"], ["inconvenience", "noqulaylik"], ["resolve", "hal qilmoq"]],
    [["well-being", "farovonlik"], ["chronic", "surunkali"], ["acute", "o‘tkir"], ["screening", "dastlabki tekshiruv"], ["prevention", "oldini olish"], ["side effect", "nojo‘ya ta’sir"], ["recovery rate", "sog‘ayish ko‘rsatkichi"], ["healthcare access", "tibbiy xizmatga kirish"], ["evidence-based", "dalillarga asoslangan"], ["patient safety", "bemor xavfsizligi"]],
    [["meet a deadline", "muddatga ulgurmoq"], ["take responsibility", "mas’uliyatni olmoq"], ["gain experience", "tajriba orttirmoq"], ["apply for a job", "ishga ariza bermoq"], ["attend an interview", "suhbatda qatnashmoq"], ["earn a salary", "maosh olmoq"], ["receive a promotion", "lavozimi oshmoq"], ["work remotely", "masofadan ishlamoq"], ["manage a team", "jamoani boshqarmoq"], ["career prospects", "kasbiy istiqbol"]],
    [["greenhouse gas", "issiqxona gazi"], ["emission", "chiqindi gaz"], ["sea level", "dengiz sathi"], ["ice cap", "muz qoplami"], ["extreme weather", "keskin ob-havo"], ["adaptation", "moslashuv"], ["mitigation", "ta’sirni kamaytirish"], ["ecosystem", "ekotizim"], ["biodiversity", "biologik xilma-xillik"], ["climate resilience", "iqlimga chidamlilik"]],
    [["ferment", "achitmoq"], ["season", "ziravor solmoq"], ["marinate", "ziravorlab qo‘ymoq"], ["simmer", "past olovda qaynatmoq"], ["garnish", "bezatmoq"], ["crust", "qobiq"], ["texture", "tuzilish"], ["flavour", "ta’m"], ["aftertaste", "keyingi ta’m"], ["locally sourced", "mahalliy yetishtirilgan"]]
  ],
  4: [
    [["provided that", "sharti bilan"], ["even if", "hatto ...sa ham"], ["otherwise", "aks holda"], ["contingency", "kutilmagan holat"], ["prerequisite", "old shart"], ["outcome", "yakuniy natija"], ["inevitable", "muqarrar"], ["plausible", "ishonarli"], ["risk assessment", "xavfni baholash"], ["worst-case scenario", "eng yomon holat"]],
    [["rarely", "kamdan-kam"], ["seldom", "juda kam"], ["hardly", "zo‘rg‘a"], ["scarcely", "deyarli ...mas"], ["never before", "ilgari hech qachon"], ["under no circumstances", "hech qanday sharoitda"], ["only then", "faqat shundagina"], ["at no time", "hech qachon"], ["in no way", "hech qanday tarzda"], ["word order", "so‘z tartibi"]],
    [["completion", "tugallanish"], ["duration", "davomiylik"], ["prior event", "oldingi voqea"], ["subsequent result", "keyingi natija"], ["by the time", "... vaqtga kelib"], ["up to that point", "o‘sha vaqtgacha"], ["ever since", "o‘shandan beri"], ["ongoing", "davom etayotgan"], ["recently", "yaqinda"], ["in the meantime", "shu orada"]],
    [["it is believed", "ishonilishicha"], ["it is claimed", "ta’kidlanishicha"], ["it is reported", "xabar qilinishicha"], ["it is alleged", "da’vo qilinishicha"], ["it is expected", "kutilishicha"], ["anonymous source", "noma’lum manba"], ["preliminary findings", "dastlabki natijalar"], ["official statement", "rasmiy bayonot"], ["unconfirmed", "tasdiqlanmagan"], ["according to reports", "xabarlarga ko‘ra"]],
    [["have a suit tailored", "kostyumni tiktirmoq"], ["get a document translated", "hujjatni tarjima qildirmoq"], ["have the house painted", "uyni bo‘yattirmoq"], ["get the roof fixed", "tomni tuzattirmoq"], ["have a photo taken", "suratga tushmoq"], ["get a haircut", "soch oldirmoq"], ["optician", "optik"], ["contractor", "pudratchi"], ["workmanship", "ish sifati"], ["maintenance", "texnik xizmat"]],
    [["should have", "...ishi kerak edi"], ["ought to have", "...ishi lozim edi"], ["needn't have", "qilmasa ham bo‘lardi"], ["deduction", "xulosa"], ["necessity", "zarurat"], ["avoidable", "oldini olish mumkin"], ["unacceptable", "qabul qilib bo‘lmaydigan"], ["in hindsight", "keyin o‘ylab qaraganda"], ["by mistake", "adashib"], ["on purpose", "ataylab"]],
    [["recommend that", "...ni tavsiya qilmoq"], ["insist that", "...ni qat’iy talab qilmoq"], ["demand that", "...ni talab qilmoq"], ["propose that", "...ni taklif qilmoq"], ["essential that", "...ishi zarur"], ["imperative that", "...ishi shart"], ["compliance", "talablarga rioya"], ["resolution", "qaror"], ["amendment", "tuzatish"], ["authorize", "vakolat bermoq"]],
    [["cleft sentence", "ajratilgan gap"], ["emphasis", "urg‘u"], ["foreground", "oldinga chiqarish"], ["background", "ikkinchi daraja"], ["pseudo-cleft", "soxta ajratma gap"], ["focus marker", "urg‘u belgisi"], ["specific", "aniq"], ["particular", "muayyan"], ["precisely", "aynan"], ["rather than", "...dan ko‘ra"]],
    [["notwithstanding", "...ga qaramasdan"], ["conversely", "teskari holatda"], ["on the contrary", "aksincha (qarshi fikrda)"], ["by contrast", "taqqoslaganda"], ["alternatively", "muqobil ravishda"], ["admittedly", "tan olish kerakki"], ["counterpoint", "qarshi fikr"], ["concession", "yon berish"], ["discrepancy", "tafovut"], ["inconsistent", "izchil bo‘lmagan"]],
    [["acknowledge", "e’tirof etmoq"], ["counterargument", "qarshi dalil"], ["rebuttal", "rad javobi"], ["qualification", "izoh bilan cheklash"], ["reservation", "e’tiroz"], ["partial agreement", "qisman rozilik"], ["common ground", "umumiy nuqta"], ["weigh the evidence", "dalillarni solishtirmoq"], ["to some extent", "ma’lum darajada"], ["by no means", "aslo"]],
    [["may indicate", "ko‘rsatishi mumkin"], ["might suggest", "taxmin qilishi mumkin"], ["appears to", "...ga o‘xshaydi"], ["tends to", "moyil bo‘ladi"], ["arguably", "bahsga ko‘ra"], ["preliminary evidence", "dastlabki dalil"], ["tentative conclusion", "vaqtinchalik xulosa"], ["correlation", "o‘zaro bog‘liqlik"], ["causation", "sababiy bog‘lanish"], ["further research", "qo‘shimcha tadqiqot"]],
    [["literature review", "adabiyotlar sharhi"], ["research question", "tadqiqot savoli"], ["methodology", "metodologiya"], ["sample size", "tanlanma hajmi"], ["peer review", "taqriz"], ["citation style", "iqtibos uslubi"], ["statistical significance", "statistik ahamiyatlilik"], ["confidence interval", "ishonch oralig‘i"], ["null hypothesis", "nol gipoteza"], ["ethical approval", "etik ruxsat"]],
    [["whereby", "shu orqali"], ["insofar as", "... darajada"], ["notwithstanding", "...ga qaramasdan"], ["the extent to which", "qay darajada"], ["pertaining to", "...ga oid"], ["with respect to", "...ga nisbatan"], ["in accordance with", "...ga muvofiq"], ["in light of", "...ni hisobga olib"], ["with regard to", "...borasida"], ["henceforth", "bundan buyon"]],
    [["nevertheless", "shunga qaramay"], ["on balance", "barcha jihatlarni hisobga olganda"], ["in principle", "nazariy jihatdan"], ["in practice", "amalda"], ["by and large", "umuman olganda"], ["notably", "ayniqsa"], ["specifically", "aniqrog‘i"], ["to a degree", "ma’lum darajada"], ["in effect", "amalda, natijada"], ["strictly speaking", "aniq aytganda"]],
    [["counteroffer", "qarshi taklif"], ["bargaining power", "savdolashish kuchi"], ["non-negotiable", "kelishib bo‘lmaydigan"], ["binding agreement", "majburiy kelishuv"], ["confidentiality clause", "maxfiylik bandi"], ["liability", "javobgarlik"], ["settlement", "kelishuv"], ["broker a deal", "bitimga vositachilik qilmoq"], ["withdraw an offer", "taklifni qaytarib olmoq"], ["commercial terms", "tijorat shartlari"]],
    [["immigration", "immigratsiya"], ["consular assistance", "konsullik yordami"], ["travel advisory", "sayohat tavsiyasi"], ["repatriation", "vatanga qaytarish"], ["jet lag", "vaqt mintaqasi charchog‘i"], ["cultural etiquette", "madaniy odob"], ["language barrier", "til to‘sig‘i"], ["reimbursement", "xarajatni qoplash"], ["cultural sensitivity", "madaniy sezgirlik"], ["over-tourism", "haddan tashqari turizm"]],
    [["clinical trial", "klinik sinov"], ["placebo", "platsebo"], ["double-blind", "ikki tomonlama ko‘r"], ["diagnosis", "tashxis"], ["prognosis", "kasallik kechishi taxmini"], ["contraindication", "qarshi ko‘rsatma"], ["immune system", "immun tizimi"], ["informed consent", "xabardor rozilik"], ["evidence-based", "dalillarga asoslangan"], ["healthcare workforce", "tibbiyot xodimlari"]],
    [["governance", "boshqaruv tizimi"], ["succession planning", "voris tayyorlash"], ["psychological safety", "ruhiy xavfsizlik"], ["decision rights", "qaror vakolati"], ["strategic risk", "strategik xavf"], ["reputational risk", "obro‘ xavfi"], ["foster accountability", "hisobdorlikni kuchaytirmoq"], ["ethical leadership", "axloqiy yetakchilik"], ["long-term value", "uzoq muddatli qiymat"], ["organisational resilience", "tashkiliy bardoshlilik"]],
    [["carbon pricing", "uglerod narxlash"], ["environmental justice", "ekologik adolat"], ["climate finance", "iqlim moliyasi"], ["loss and damage", "yo‘qotish va zarar"], ["greenwashing", "soxta ekologik reklama"], ["just transition", "adolatli o‘tish"], ["implementation gap", "amalga oshirish tafovuti"], ["climate litigation", "iqlim bo‘yicha sud ishi"], ["policy coherence", "siyosat uyg‘unligi"], ["net-zero target", "sof nol maqsadi"]],
    [["strategic objective", "strategik maqsad"], ["milestone", "oraliq bosqich"], ["risk register", "xavflar reyestri"], ["contingency plan", "favqulodda reja"], ["benchmark", "taqqoslash mezoni"], ["trade-off", "murosa tanlovi"], ["bottleneck", "to‘siq nuqtasi"], ["mitigate", "xavfni kamaytirmoq"], ["evidence-based decision", "dalilga asoslangan qaror"], ["strategic direction", "strategik yo‘nalish"]]
  ]
};

const sourceStage = window.courseStages?.find((stage) => stage.stage === 2);
const stageTwoEnglish = {
  "future-plans": { title: "Future Plans", subtitle: "Talk about plans with going to.", rule: "Use going to + base verb for plans made before speaking." },
  "past-continuous": { title: "Past Continuous", subtitle: "Talk about actions in progress in the past.", rule: "Use was/were + verb-ing for an action in progress at a past time." },
  "present-perfect-life": { title: "Present Perfect: Life Experiences", subtitle: "Talk about experiences in your life.", rule: "Use have/has + past participle for experiences without a finished time." },
  "present-perfect-past": { title: "Present Perfect and Past Simple", subtitle: "Distinguish finished time from present relevance.", rule: "Use Past Simple for finished times and Present Perfect for experiences or results connected to now." },
  "future-will": { title: "Will: Predictions and Promises", subtitle: "Talk about predictions and promises.", rule: "Use will + base verb for predictions, promises, and decisions made while speaking." },
  "obligation-advice": { title: "Obligation and Advice", subtitle: "Use must, have to, and should.", rule: "Use must or have to for obligations and should for advice." },
  superlatives: { title: "Superlatives", subtitle: "Describe the highest degree.", rule: "Use the + -est or the most to compare one person or thing with a whole group." },
  "adverbs-manner": { title: "Adverbs of Manner", subtitle: "Describe how an action is done.", rule: "Many adverbs are formed by adding -ly to an adjective." },
  "gerund-infinitive": { title: "Gerunds and Infinitives", subtitle: "Choose the form that follows a verb.", rule: "Use a gerund after verbs such as enjoy, and to + base verb after verbs such as want and decide." },
  "too-enough": { title: "Too and Enough", subtitle: "Talk about excess and sufficiency.", rule: "Use too + adjective, adjective + enough, or enough + noun." },
  quantifiers: { title: "Quantifiers", subtitle: "Use a few, a little, many, and much.", rule: "Use many/few with countable nouns and much/little with uncountable nouns." },
  "first-conditional": { title: "First Conditional", subtitle: "Talk about real future possibilities.", rule: "Use if + Present Simple, followed by will + base verb." },
  "relative-clauses-a2": { title: "Who, Which, and That", subtitle: "Add information about people and things.", rule: "Use who for people, which for things, and that for either." },
  "indefinite-pronouns": { title: "Indefinite Pronouns", subtitle: "Talk about people and things in general.", rule: "Indefinite pronouns usually take a singular verb." },
  "shopping-services": { title: "Shopping and Services", subtitle: "Communicate in shops.", rule: "Ask about prices, payment, sizes, and returns." },
  "travel-airport": { title: "Travel and the Airport", subtitle: "Useful language for travelling.", rule: "Learn the stages of air travel and the documents you may need." },
  "health-care": { title: "Health and Medical Care", subtitle: "Describe symptoms and treatment.", rule: "Describe symptoms and ask for medical advice." },
  "jobs-careers": { title: "Jobs and Careers", subtitle: "Talk about jobs and responsibilities at work.", rule: "Learn vocabulary for jobs, workplaces, and responsibilities." },
  "environment-a2": { title: "The Environment", subtitle: "Talk about protecting nature.", rule: "Learn vocabulary for environmental problems and everyday solutions." },
  "cooking-food": { title: "Food and Cooking", subtitle: "Talk about recipes and food preparation.", rule: "Learn verbs for cooking and common kitchen tools." }
};
const englishExamples = {
  2: {
    "future-plans": ["I'm going to visit my cousins this weekend.", "We're going to book a hotel before we travel.", "Is she going to start a new course?"],
    "past-continuous": ["I was reading when the phone rang.", "They were waiting for the bus at eight.", "Were you sleeping when it started raining?"],
    "present-perfect-life": ["I have visited London twice.", "She has never tried sushi.", "Have you ever ridden a horse?"],
    "present-perfect-past": ["I visited Samarkand last year.", "I have visited Samarkand twice.", "She finished her homework an hour ago."],
    "future-will": ["I think it will rain tomorrow.", "I'll call you when I arrive.", "Will you help me with this bag?"],
    "obligation-advice": ["You must wear a seat belt.", "I have to finish this report today.", "You should get some rest."],
    superlatives: ["Mount Everest is the highest mountain in the world.", "This is the most interesting book in the library.", "Who is the youngest person in your family?"],
    "adverbs-manner": ["She speaks English confidently.", "Please drive carefully in the rain.", "They worked quietly during the meeting."],
    "gerund-infinitive": ["I enjoy learning new languages.", "He decided to take a short course.", "Remember to lock the door."],
    "too-enough": ["The coffee is too hot to drink.", "She's old enough to travel alone.", "We don't have enough chairs for everyone."],
    quantifiers: ["There are a few apples in the bowl.", "I have a little time before the train.", "How many tickets do we need?"],
    "first-conditional": ["If it rains, we'll stay at home.", "If you study, you will pass the exam.", "What will you do if the bus is late?"],
    "relative-clauses-a2": ["A chef is someone who prepares food.", "This is the phone which I bought yesterday.", "I like films that make me laugh."],
    "indefinite-pronouns": ["Someone is waiting outside.", "I didn't see anything unusual.", "Everybody knows the answer."],
    "shopping-services": ["Could I try on this jacket?", "How much does this backpack cost?", "You can return it within seven days."],
    "travel-airport": ["Where can I check in for my flight?", "My luggage was delayed.", "Please show your passport at the gate."],
    "health-care": ["I've had a headache since this morning.", "You should make an appointment with a doctor.", "Does this medicine have any side effects?"],
    "jobs-careers": ["She applied for a job at the bank.", "My colleague works remotely on Fridays.", "He has a lot of experience in customer service."],
    "environment-a2": ["We reuse glass bottles to reduce waste.", "Solar power can lower carbon emissions.", "The local group planted trees to protect wildlife."],
    "cooking-food": ["Chop the onions before you heat the pan.", "Simmer the soup for twenty minutes.", "Season the vegetables and serve them hot."]
  },
  3: {
    "future-plans": ["If I had more time, I would learn Japanese.", "She would travel more if she had a longer holiday.", "What would you do if you won the prize?"],
    "past-continuous": ["The train had left before we reached the station.", "He had finished dinner when I called.", "Had they booked a room before they arrived?"],
    "present-perfect-life": ["I've been studying for three hours.", "She has been working here since 2022.", "Have you been waiting long?"],
    "present-perfect-past": ["We had packed our bags before the taxi arrived.", "The film had started by the time we found our seats.", "Had you met her before the conference?"],
    "future-will": ["We were walking home when it began to snow.", "She had locked the door before she left.", "I opened the letter and found an old photograph."],
    "future-will": ["The bridge was built in 1890.", "New phones are tested before they are sold.", "The results will be announced tomorrow."],
    "obligation-advice": ["The lights are on, so they must be at home.", "He might have missed the bus.", "That can't be the right address."],
    superlatives: ["This route is much shorter than the old one.", "The blue car is far more expensive than the red one.", "This test is a little easier than the last one."],
    "adverbs-manner": ["The road was icy; therefore, we drove slowly.", "She studied hard; however, she still felt nervous.", "We left early because the weather was changing."],
    "gerund-infinitive": ["I remember meeting her at the conference.", "Remember to send the final report.", "He stopped to answer the phone."],
    "too-enough": ["The room was quite spacious.", "The instructions are fairly clear.", "We have enough evidence to continue."],
    quantifiers: ["Only a few applicants had the required experience.", "We received a substantial amount of feedback.", "There is very little evidence to support the claim."],
    "first-conditional": ["If I'd taken that job, I would live abroad now.", "She would be more confident if she had practised earlier.", "If we had booked ahead, we wouldn't be waiting now."],
    "relative-clauses-a2": ["The report, which was published last week, changed the discussion.", "The researcher who led the study presented the results.", "My colleague, whose office is nearby, can help us."],
    "indefinite-pronouns": ["Everyone has a different opinion.", "Neither of the answers is correct.", "If anybody calls, please take a message."],
    "shopping-services": ["We could offer a lower price if you increase the order.", "Let's find a compromise that works for both teams.", "They reached an agreement after several rounds of talks."],
    "travel-airport": ["Our flight was cancelled, so we contacted the airline.", "I missed my connection because the first flight was delayed.", "Could you help me report a lost suitcase?"],
    "health-care": ["Regular exercise can improve your overall well-being.", "The doctor recommended that he reduce his stress.", "Early screening may help identify the condition."],
    "jobs-careers": ["We need to meet the deadline.", "She gained valuable experience during the placement.", "The manager took responsibility for the decision."],
    "environment-a2": ["Wetlands help protect communities from floods.", "The city invested in renewable energy.", "Reducing emissions can slow global warming."],
    "cooking-food": ["The chef marinated the vegetables overnight.", "This regional dish is traditionally served at festivals.", "The sauce has a rich, smoky flavour."]
  },
  4: {
    "future-plans": ["Provided that the data is accurate, we can publish the report.", "Unless the supplier agrees, we will delay the launch.", "Were the costs to rise, we would revise the proposal."],
    "past-continuous": ["Rarely have we seen such rapid progress.", "Not only did she lead the project, but she also trained the team.", "Under no circumstances should the device be opened."],
    "present-perfect-life": ["By next June, she will have completed the programme.", "They have been negotiating for several weeks.", "He had been working there long before the company moved."],
    "present-perfect-past": ["It is believed that the policy will reduce costs.", "The new treatment is expected to improve recovery rates.", "The witness is said to have left the country."],
    "future-will": ["We had the roof repaired last spring.", "She got her documents translated before the trip.", "I'm having my suit tailored for the event."],
    "obligation-advice": ["You should have checked the figures before sending the report.", "They might have taken the earlier train.", "You needn't have brought extra copies."],
    superlatives: ["The committee recommends that every applicant submit a portfolio.", "It is essential that the data be verified independently.", "The director insisted that the team meet the deadline."],
    "adverbs-manner": ["It was Maya who identified the error.", "What we need is a clearer timetable.", "It is the final paragraph that needs revision."],
    "gerund-infinitive": ["Despite the heavy rain, the event continued.", "Although the evidence was limited, the team reached a conclusion.", "Despite working late, she finished the report."],
    "too-enough": ["Admittedly, the proposal is expensive; however, it offers long-term benefits.", "Although the plan has risks, it could improve access.", "Granted, the deadline is tight, but the team can meet it."],
    quantifiers: ["The findings may indicate a connection between the two factors.", "This approach appears to reduce costs.", "Further research might clarify the cause."],
    "first-conditional": ["The study included 240 participants.", "Our results suggest a modest improvement.", "The sample size limits how widely we can apply these findings."],
    "relative-clauses-a2": ["The candidate to whom I spoke had strong references.", "The policy, under which funding was allocated, begins next year.", "The author whose work we reviewed will join the panel."],
    "indefinite-pronouns": ["Each applicant must submit one form.", "Neither option meets all the requirements.", "We need another solution before the deadline."],
    "shopping-services": ["The parties agreed to a binding confidentiality clause.", "We can withdraw the offer if the terms change.", "The settlement includes compensation for both sides."],
    "travel-airport": ["The embassy can provide consular assistance.", "Please check the latest travel advisory before departure.", "They arranged repatriation after the airport closed."],
    "health-care": ["The clinical trial enrolled 800 participants.", "The policy aims to improve access to primary care.", "Researchers monitored side effects throughout treatment."],
    "jobs-careers": ["The board approved a succession plan.", "Clear decision rights help teams move faster.", "The manager fostered accountability across departments."],
    "environment-a2": ["The city introduced carbon pricing to reduce emissions.", "The policy aims to ensure a just transition.", "The court reviewed a climate litigation case."],
    "cooking-food": ["The team identified a bottleneck in the approval process.", "We used a benchmark to compare the outcomes.", "The final decision was based on evidence."]
  }
};

const stageLabels = {
  2: "STAGE 2 · A2 PRACTICE",
  3: "STAGE 3 · B1 INDEPENDENT COMMUNICATION",
  4: "STAGE 4 · B2 ADVANCED FLUENCY"
};
const stageRuleBank = [
  ...(sourceStage?.lessons || []).map((lesson) => stageTwoEnglish[lesson.id]?.rule || lesson.rule),
  ...laterStagePrograms.flatMap((program) => program.topics.map(([, , rule]) => rule))
];

function makeTopicRuleQuestions(title, rule, ruleBank) {
  const distractors = [...new Set(ruleBank.filter((candidate) => candidate !== rule))];
  const prompts = [
    `Which rule correctly describes “${title}”?`,
    `Choose the correct structure for “${title}”.`,
    `What is the main pattern used in “${title}”?`,
    `Which statement about “${title}” is correct?`,
    `Select the correct formula for “${title}”.`,
    "How is this structure formed?",
    "Which option follows the rule for this topic?",
    "Choose the grammatical pattern used here.",
    `Which explanation best describes “${title}”?`,
    `What is the correct form for “${title}”?`,
    "Select the rule that applies to this topic.",
    "Which sentence pattern is correct?",
    "Choose the accurate description of this structure.",
    `Which form should you use for “${title}”?`,
    "What rule does this topic follow?",
    "Select the correct grammatical explanation.",
    "Which option shows the correct structure?",
    "Choose the statement that best describes this rule.",
    "How should this topic be formed?",
    "Which pattern is used in this grammar topic?",
    "Choose the correct rule for this lesson.",
    "Which option gives the correct word order?",
    "Select the sentence structure that matches the rule.",
    "What form completes this grammar pattern?",
    "Which statement would you use as a grammar guide?",
    "Choose the structure that is grammatically accurate.",
    "Which rule should learners remember?",
    "Select the correct way to form this expression.",
    "Which description matches the grammar point?",
    "Choose the best summary of this rule."
  ];
  const rows = Array.from({ length: 30 }, (_, index) => {
    const firstDistractor = distractors[(index * 3) % distractors.length];
    let secondDistractor = distractors[(index * 3 + 7) % distractors.length];
    if (secondDistractor === firstDistractor) {
      secondDistractor = distractors[(index * 3 + 8) % distractors.length];
    }
    return [prompts[index % prompts.length], rule, firstDistractor, secondDistractor];
  });
  return makeQuestions(rows, `The rule for “${title}” is: ${rule}`);
}

if (sourceStage) {
  for (const program of laterStagePrograms) {
    const stageLessons = program.topics.map(([title, subtitle, rule], index) => {
      const source = sourceStage.lessons[index];
      const words = [...source.words.slice(0, 20), ...advancedVocabulary[program.stage][index]].map(([word]) => [word, ""]);
      return {
        id: `stage-${program.stage}-${source.id}`,
        stage: program.stage,
        level: program.level,
        title,
        subtitle,
        tag: program.title,
        symbol: String(index + 1).padStart(2, "0"),
        duration: "12 minutes",
        intro: `${subtitle} Study the rule and practise with 30 key terms.`,
        rule,
        examples: englishExamples[program.stage][source.id].map((sentence) => [sentence, ""]),
        words,
        questions: makeTopicRuleQuestions(title, rule, stageRuleBank)
      };
    });
    window.courseStages.push({ ...program, lessons: stageLessons });
  }
}

const courseStages = [
  { stage: 1, level: "A1", title: "1-ETAP · BOSHLANG‘ICH" },
  ...(window.courseStages || []).map(({ stage, level, title }) => ({ stage, level, title: stageLabels[stage] || title }))
];

const generatedLessons = (window.courseStages || []).flatMap((stage) => stage.lessons.map((lesson, index) => {
  const englishContent = stage.stage === 2 ? stageTwoEnglish[lesson.id] : null;
  const title = englishContent?.title || lesson.title;
  const subtitle = englishContent?.subtitle || lesson.subtitle;
  const rule = englishContent?.rule || lesson.rule;
  return {
  ...lesson,
  stage: stage.stage,
  level: stage.level,
  title,
  subtitle,
  rule,
  tag: stage.stage >= 2 ? stageLabels[stage.stage] : `${stage.title} · ${stage.level}`,
  symbol: String(index + 1).padStart(2, "0"),
  duration: stage.stage >= 2
    ? lesson.duration?.replace(" daqiqa", " minutes") || (stage.stage === 2 ? "10 minutes" : "12 minutes")
    : lesson.duration || "10 daqiqa",
  intro: englishContent ? `${subtitle} Study the rule and practise with 30 key terms.` : lesson.intro || `${subtitle} Study the rule and practise with 30 key terms.`,
  examples: stage.stage >= 2
    ? stage.stage === 2 ? englishExamples[2][lesson.id].map((sentence) => [sentence, ""]) : lesson.examples
    : lesson.examples || lesson.words.slice(0, 3),
  words: stage.stage >= 2 ? lesson.words.map(([word]) => [word, ""]) : lesson.words,
  questions: lesson.questions || makeTopicRuleQuestions(title, rule, stageRuleBank)
  };
}));
lessons.push(...generatedLessons);

const content = document.querySelector("#app-content");
const topbarLabel = document.querySelector("#topbar-label");
const topbarLevel = document.querySelector("#topbar-level");
const authGate = document.querySelector("#auth-gate");
const appShell = document.querySelector("#app-shell");
const emailForm = document.querySelector("#auth-email-form");
const otpForm = document.querySelector("#auth-otp-form");
const emailInput = document.querySelector("#auth-email");
const codeInput = document.querySelector("#auth-code");
const authMessage = document.querySelector("#auth-message");
const authRecipient = document.querySelector("#auth-recipient");
let activeView = "home";
let selectedLesson = null;
let selectedStage = null;
let activeCourseStage = 1;
let quizIndex = 0;
let chosenAnswer = null;
let quizScore = 0;
let quizFinished = false;
let supabaseClient = null;
let pendingEmail = "";
let activeUserId = null;
let progress = {};
const PASS_SCORE = 25;

function setAuthMessage(message) {
  authMessage.textContent = message;
}

function isDemoMode() {
  return !window.supabase || !window.supabaseConfig?.url || !window.supabaseConfig?.anonKey;
}

function createDemoSession(email) {
  const normalizedEmail = (email || "demo@local.dev").trim().toLowerCase();
  const userId = `demo-${normalizedEmail.replace(/[^a-z0-9]+/g, "-") || "guest"}`;
  const session = { user: { id: userId, email: normalizedEmail } };
  localStorage.setItem("tilchi-demo-session", JSON.stringify(session));
  return session;
}

function showAuthenticatedApp(session) {
  if (!session?.user?.id) return;
  if (activeUserId !== session.user.id) {
    activeUserId = session.user.id;
    progress = readProgress(activeUserId);
  }
  authGate.hidden = true;
  appShell.hidden = false;
  render();
}

function showAuthGate() {
  activeUserId = null;
  progress = {};
  appShell.hidden = true;
  authGate.hidden = false;
  emailForm.hidden = false;
  otpForm.hidden = true;
  codeInput.value = "";
  setAuthMessage("");
}

async function initializeAuth() {
  const config = window.supabaseConfig;
  if (isDemoMode()) {
    const savedSession = localStorage.getItem("tilchi-demo-session");
    if (savedSession) {
      try {
        const parsed = JSON.parse(savedSession);
        if (parsed?.user?.id) {
          showAuthenticatedApp(parsed);
          return;
        }
      } catch {
        localStorage.removeItem("tilchi-demo-session");
      }
    }
    document.querySelector("#send-code-button").disabled = false;
    setAuthMessage("Demo rejim ishlayapti. Emailni kiriting va tasdiqlash kodini yuboring.");
    return;
  }

  supabaseClient = window.supabase.createClient(config.url, config.anonKey);
  supabaseClient.auth.onAuthStateChange((event, session) => {
    if (session) showAuthenticatedApp(session);
    else if (event === "SIGNED_OUT") showAuthGate();
  });

  const { data, error } = await supabaseClient.auth.getSession();
  if (error) {
    setAuthMessage("Kirish holatini tekshirib bo‘lmadi. Qayta urinib ko‘ring.");
    return;
  }
  if (data.session) showAuthenticatedApp(data.session);
}

emailForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const email = emailInput.value.trim();
  const sendButton = document.querySelector("#send-code-button");

  if (isDemoMode()) {
    if (!email) {
      setAuthMessage("Email manzilini kiriting.");
      return;
    }
    pendingEmail = email;
    authRecipient.textContent = `Demo rejim: ${email} manziliga tasdiqlash kodi yuborildi.`;
    emailForm.hidden = true;
    otpForm.hidden = false;
    codeInput.value = "";
    codeInput.focus();
    setAuthMessage("Demo uchun tasdiqlash kodi: 000000");
    return;
  }

  if (!supabaseClient) return;
  sendButton.disabled = true;
  setAuthMessage("Tasdiqlash kodi yuborilmoqda...");
  try {
    const { error } = await supabaseClient.auth.signInWithOtp({
      email,
      options: { shouldCreateUser: true }
    });
    if (error) throw error;
    pendingEmail = email;
    authRecipient.textContent = `Kod ${email} manziliga yuborildi.`;
    emailForm.hidden = true;
    otpForm.hidden = false;
    codeInput.focus();
    setAuthMessage("");
  } catch {
    setAuthMessage("Kod yuborilmadi. Email manzilingizni tekshirib, qayta urinib ko‘ring.");
  } finally {
    sendButton.disabled = false;
  }
});

otpForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const token = codeInput.value.trim();

  if (isDemoMode()) {
    if (!/^\d{6}$/.test(token)) {
      setAuthMessage("6 xonali raqamli kodni kiriting.");
      codeInput.select();
      return;
    }
    const session = createDemoSession(pendingEmail || emailInput.value.trim() || "demo@local.dev");
    showAuthenticatedApp(session);
    setAuthMessage("");
    return;
  }

  if (!supabaseClient || !pendingEmail) return;

  const verifyButton = document.querySelector("#verify-code-button");
  verifyButton.disabled = true;
  setAuthMessage("Kod tekshirilmoqda...");
  try {
    const { error } = await supabaseClient.auth.verifyOtp({
      email: pendingEmail,
      token,
      type: "email"
    });
    if (error) throw error;
    setAuthMessage("");
  } catch {
    setAuthMessage("Kod noto‘g‘ri yoki muddati tugagan. Yangi kod olib, qayta urinib ko‘ring.");
    codeInput.select();
  } finally {
    verifyButton.disabled = false;
  }
});

document.querySelector("#change-email-button").addEventListener("click", () => {
  pendingEmail = "";
  otpForm.hidden = true;
  emailForm.hidden = false;
  setAuthMessage("");
  emailInput.focus();
});

function readProgress(userId) {
  try { return JSON.parse(localStorage.getItem(`tilchi-progress-${userId}`) || "{}"); }
  catch { return {}; }
}

const isLessonComplete = (lesson) => progress[lesson.id]?.total === lesson.questions.length;
const hasPassedLesson = (lesson) => progress[lesson.id]?.total === lesson.questions.length && progress[lesson.id].score >= PASS_SCORE;
const canOpenLesson = (lesson) => {
  const lessonIndex = lessons.indexOf(lesson);
  return lessonIndex === 0 || (lessonIndex > 0 && hasPassedLesson(lessons[lessonIndex - 1]));
};
const completedCount = () => lessons.filter(hasPassedLesson).length;
const percentComplete = () => Math.round(completedCount() / lessons.length * 100);

function setView(view) {
  activeView = view;
  selectedLesson = null;
  selectedStage = null;
  if (view === "home") activeCourseStage = 1;
  document.querySelectorAll(".nav-item").forEach((item) => item.classList.toggle("active", item.dataset.view === view));
  render();
}

function setInterfaceLanguage(englishMode) {
  const labels = englishMode ? ["Lessons", "Vocabulary", "Results"] : ["Darslar", "Lug‘at", "Natijalar"];
  document.querySelectorAll(".nav-item").forEach((item, index) => {
    item.lastChild.textContent = labels[index];
  });
  document.querySelector(".nav-label").textContent = englishMode ? "LEARNING ROOM" : "O‘QUV XONASI";
  document.querySelector(".breadcrumb span:first-child").textContent = englishMode ? "ENGLISH" : "INGLIZ TILI";
  document.querySelector(".streak-title").textContent = englishMode ? "A little progress every day" : "Har kuni oz-ozdan";
  document.querySelector(".streak-copy").textContent = englishMode
    ? "Finish a lesson today and keep your learning habit going."
    : "Bugungi darsingizni bajaring va odatni davom ettiring.";
  const weekdays = englishMode ? ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"] : ["Du", "Se", "Ch", "Pa", "Ju", "Sh", "Ya"];
  document.querySelectorAll(".streak-days span").forEach((day, index) => { day.textContent = weekdays[index]; });
  document.querySelector(".sidebar-footer").lastChild.textContent = englishMode
    ? " A great day to learn"
    : " O‘rganish uchun ajoyib kun";
}

function render() {
  const englishMode = selectedLesson
    ? selectedLesson.stage >= 2
    : selectedStage
      ? selectedStage.stage >= 2
      : activeCourseStage >= 2;
  setInterfaceLanguage(englishMode);
  if (selectedLesson) {
    topbarLabel.textContent = selectedLesson.title;
    topbarLevel.textContent = selectedLesson.stage >= 2
      ? `${selectedLesson.level} · Stage ${selectedLesson.stage}`
      : `${selectedLesson.level} · ${selectedLesson.stage}-etap`;
    renderLesson();
    return;
  }
  if (selectedStage) {
    topbarLabel.textContent = selectedStage.title;
    topbarLevel.textContent = selectedStage.stage >= 2
      ? `${selectedStage.level} · Stage ${selectedStage.stage}`
      : `${selectedStage.level} · ${selectedStage.stage}-etap`;
    renderStage(selectedStage.stage);
    return;
  }
  if (activeView === "vocabulary") {
    topbarLabel.textContent = englishMode ? "Vocabulary" : "Lug‘at";
    renderVocabulary();
    return;
  }
  if (activeView === "results") {
    topbarLabel.textContent = englishMode ? "Results" : "Natijalar";
    renderResults();
    return;
  }
  topbarLabel.textContent = "Mening darslarim";
  const nextAvailableLesson = lessons.find((lesson) => canOpenLesson(lesson) && !hasPassedLesson(lesson)) || lessons[0];
  topbarLevel.textContent = `${nextAvailableLesson.level} · ${nextAvailableLesson.stage}-etap`;
  renderHome();
}

function renderHome() {
  const nextLesson = lessons.find((lesson) => canOpenLesson(lesson) && !hasPassedLesson(lesson)) || lessons[0];
  const retryRequired = isLessonComplete(nextLesson) && !hasPassedLesson(nextLesson);
  content.innerHTML = `
    <div class="welcome-row">
      <div><div class="eyebrow">O‘RGANISH REJASI · 01-KURS</div><h1>Salom, o‘quvchi!</h1><p class="page-lede">Bugun ingliz tilida yana bir qadam oldinga yuring.</p></div>
      <div class="date-label">BOSHLANG‘ICH DARAJA · A1</div>
    </div>
    <section class="hero-panel">
      <div class="hero-copy">
        <div class="hero-kicker">BUGUNGI TAVSIYA · ${nextLesson.duration.toUpperCase()}</div>
        <h2 class="hero-title">${nextLesson.title} mavzusini o‘rganing</h2>
        <p class="hero-description">${nextLesson.subtitle}. Darsni o‘qing, misollarni tinglang va ${nextLesson.questions.length} savolli testda bilimingizni sinang.</p>
        <button class="button-primary" data-action="open-lesson" data-id="${nextLesson.id}">${retryRequired ? "Testni qayta topshirish" : "Darsni boshlash"} <span aria-hidden="true">→</span></button>
        <div class="hero-progress"><span>Kurs jarayoni</span><div class="progress-track"><div class="progress-fill" style="width:${percentComplete()}%"></div></div><strong>${percentComplete()}%</strong></div>
      </div>
      <div class="hero-image"><img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1000&q=85" alt="Daftariga yozib ingliz tili o‘rganayotgan o‘quvchi" /></div>
    </section>
    <div class="section-heading"><div><h2>Etaplar</h2><p>Etapni tanlab, uning darslariga o‘ting.</p></div><button class="text-action" data-view="results">Natijalarim →</button></div>
    <div class="stage-grid" aria-label="Ingliz tili kursining etaplari">${courseStages.map((stage) => {
      const stageLessons = lessons.filter((lesson) => lesson.stage === stage.stage);
      const passedLessons = stageLessons.filter(hasPassedLesson).length;
      const stageProgress = Math.round(passedLessons / stageLessons.length * 100);
      const englishMode = stage.stage >= 2;
      return `<button class="stage-card" data-action="open-stage" data-stage="${stage.stage}">
        <span class="stage-card-top"><span class="stage-number">${englishMode ? "STAGE" : "ETAP"} ${String(stage.stage).padStart(2, "0")}</span><span class="stage-level">${stage.level}</span></span>
        <h3>${stage.title.split(" · ")[1] || stage.title}</h3>
        <p>${englishMode ? `${passedLessons} of ${stageLessons.length} lessons passed` : `${passedLessons} / ${stageLessons.length} dars muvaffaqiyatli tugatildi`}</p>
        <span class="stage-progress"><span style="width:${stageProgress}%"></span></span>
        <span class="stage-card-link">${stageLessons.length} ${englishMode ? "lessons" : "ta dars"} <span aria-hidden="true">→</span></span>
      </button>`;
    }).join("")}</div>
    <div class="stats-row">
      <div class="stat-block"><div><div class="stat-label">Tugatilgan darslar</div><div class="stat-value">${completedCount()} <span style="color:#a0a79d;font-size:12px">/ ${lessons.length}</span></div></div><span class="stat-icon">✓</span></div>
      <div class="stat-block"><div><div class="stat-label">Yangi so‘zlar</div><div class="stat-value">${lessons.reduce((sum, lesson) => sum + lesson.words.length, 0)}</div></div><span class="stat-icon">Aa</span></div>
      <div class="stat-block"><div><div class="stat-label">Kurs darajasi</div><div class="stat-value">A1</div></div><span class="stat-icon">✳</span></div>
    </div>`;
}

function renderStage(stageNumber) {
  const stage = selectedStage;
  const stageLessons = lessons.filter((lesson) => lesson.stage === stageNumber);
  const passedLessons = stageLessons.filter(hasPassedLesson).length;
  const stageProgress = Math.round(passedLessons / stageLessons.length * 100);
  const englishMode = stageNumber >= 2;
  content.innerHTML = `
    <div class="stage-page-heading" data-stage="${stage.stage}">
      <button class="button-light" data-action="home">← ${englishMode ? "All stages" : "Barcha etaplar"}</button>
      <div class="stage-page-title"><div class="eyebrow">${englishMode ? "STAGE" : "ETAP"} ${String(stage.stage).padStart(2, "0")} · ${stage.level}</div><h1>${stage.title.split(" · ")[1] || stage.title}</h1><p class="page-lede">${englishMode ? `${passedLessons} of ${stageLessons.length} lessons passed` : `${passedLessons} / ${stageLessons.length} dars muvaffaqiyatli tugatildi`}</p></div>
      <div class="stage-page-progress"><span class="stage-progress"><span style="width:${stageProgress}%"></span></span><strong>${stageProgress}%</strong></div>
    </div>
    <div class="section-heading"><div><h2>${englishMode ? "Lessons" : "Darslar"}</h2><p>${englishMode ? "Open a lesson to study the topic and take its quiz." : "Har darsni alohida ochib, mavzu va testni ko‘ring."}</p></div></div>
    <div class="lesson-grid">${stageLessons.map((lesson, index) => {
      const locked = !canOpenLesson(lesson);
      const retryRequired = isLessonComplete(lesson) && !hasPassedLesson(lesson);
      return `<button class="lesson-card" data-action="open-lesson" data-id="${lesson.id}" ${locked ? "disabled" : ""}>
        <div class="lesson-card-top"><span class="lesson-number">${englishMode ? "LESSON" : "DARS"} ${String(index + 1).padStart(2, "0")}</span><span class="lesson-status ${locked ? "locked" : retryRequired ? "retry" : isLessonComplete(lesson) ? "done" : ""}">${locked ? englishMode ? "LOCKED" : "QULFLANGAN" : isLessonComplete(lesson) ? `${progress[lesson.id].score}/${lesson.questions.length} ${retryRequired ? "↻" : "✓"}` : lesson.duration}</span></div>
        <div class="lesson-icon">${lesson.symbol}</div><h3>${lesson.title}</h3><p>${lesson.subtitle}</p>${locked ? `<p class="lesson-lock-message">${englishMode ? `Pass the previous lesson with at least ${PASS_SCORE}/${lesson.questions.length}.` : `Oldingi darsdan kamida ${PASS_SCORE}/${lesson.questions.length} oling`}</p>` : retryRequired ? `<p class="lesson-lock-message">${englishMode ? `Score at least ${PASS_SCORE}/${lesson.questions.length} to unlock the next lesson.` : `Keyingi dars uchun kamida ${PASS_SCORE}/${lesson.questions.length} oling`}</p>` : ""}
      </button>`;
    }).join("")}</div>`;
}

function renderLesson() {
  const lesson = selectedLesson;
  const saved = isLessonComplete(lesson);
  const englishMode = lesson.stage >= 2;
  const quiz = lesson.questions[quizIndex];
  const isLastQuestion = quizIndex === lesson.questions.length - 1;
  content.innerHTML = `
    <div class="lesson-header"><div><div class="eyebrow">${englishMode ? "LESSON" : "DARS"} ${String(lessons.filter((item) => item.stage === lesson.stage).indexOf(lesson) + 1).padStart(2, "0")} · ${lesson.tag}</div><h1>${lesson.title}</h1><p class="page-lede">${lesson.subtitle}</p><div class="lesson-meta"><span class="meta-tag">${lesson.duration}</span><span class="meta-tag">${englishMode ? `${lesson.questions.length} quiz questions` : `${lesson.questions.length} ta test savoli`}</span><span class="meta-tag">${lesson.level} ${englishMode ? "level" : "daraja"}</span></div></div><button class="button-light" data-action="back-to-stage">← ${englishMode ? "Back to stage" : "Etapga qaytish"}</button></div>
    <div class="lesson-layout">
      <article class="lesson-main"><div class="eyebrow">${englishMode ? "LESSON OVERVIEW" : "MAVZUNI O‘RGANAMIZ"}</div><h2>${englishMode ? `About ${lesson.title}` : `${lesson.title} nima?`}</h2><p>${lesson.intro}</p><div class="rule-box"><div class="rule-title">${englishMode ? "KEY RULE" : "ASOSIY QOIDA"}</div><p>${lesson.rule}</p></div>${lesson.examples.length ? `<div class="examples">${lesson.examples.map(([english, uzbek]) => `<div class="example-line"><div><div class="example-english">${english}</div>${uzbek ? `<div class="example-uzbek">${uzbek}</div>` : ""}</div><button class="sound-button" data-action="speak" data-text="${english.replaceAll('"', '&quot;')}" aria-label="${englishMode ? `Listen to ${english}` : `${english} jumlasini tinglash`}" title="${englishMode ? "Listen" : "Tinglash"}">▶</button></div>`).join("")}</div>` : ""}<button class="button-primary" data-action="start-quiz">${englishMode ? saved ? "Retake quiz" : "Start quiz" : saved ? "Testni qayta ishlash" : "Testni boshlash"} <span aria-hidden="true">→</span></button></article>
      <aside class="lesson-aside"><h3 class="aside-heading">${englishMode ? "Lesson vocabulary" : "Ushbu darsdagi so‘zlar"} · ${lesson.words.length} ${englishMode ? "terms" : "ta"}</h3>${lesson.words.map(([word, meaning]) => `<div class="vocab-item"><div><strong>${word}</strong>${meaning ? `<span>${meaning}</span>` : ""}</div><button class="sound-button" data-action="speak" data-text="${word}" aria-label="${englishMode ? `Listen to ${word}` : `${word} so‘zini tinglash`}" title="${englishMode ? "Listen" : "Tinglash"}">▶</button></div>`).join("")}${lesson.examples.length ? `<div class="vocab-note">${englishMode ? "Listen to the examples using the play buttons." : "Misollarni eshitish uchun yonidagi ▶ tugmasini bosing."}</div>` : ""}</aside>
    </div>
    ${quizFinished ? renderQuizResult() : ""}
    ${quizIndex >= 0 && content.dataset.quizStarted === "true" && !quizFinished ? renderQuestion(quiz, isLastQuestion) : ""}`;
}

function renderQuestion(question, isLastQuestion) {
  const englishMode = selectedLesson.stage >= 2;
  return `<section class="quiz-panel" id="quiz"><div class="quiz-top"><span>${englishMode ? "CHECK YOUR UNDERSTANDING" : "BILIMINGIZNI SINANG"}</span><span>${quizIndex + 1} / ${selectedLesson.questions.length}</span></div><div class="quiz-progress"><div class="progress-fill" style="width:${(quizIndex + 1) / selectedLesson.questions.length * 100}%"></div></div><h2>${question.prompt}</h2><p class="quiz-prompt">${englishMode ? "Choose the correct answer." : "To‘g‘ri javobni tanlang."}</p><div class="answer-list">${question.options.map((option, index) => {
    let stateClass = "";
    if (chosenAnswer !== null && index === question.answer) stateClass = "correct";
    else if (chosenAnswer === index) stateClass = "incorrect";
    return `<button class="answer-option ${stateClass}" data-action="answer" data-index="${index}" ${chosenAnswer !== null ? "disabled" : ""}><span class="answer-letter">${String.fromCharCode(65 + index)}</span>${option}</button>`;
  }).join("")}</div>${chosenAnswer !== null ? `<div class="answer-feedback">${englishMode ? chosenAnswer === question.answer ? "Correct! " : "Try again. " : chosenAnswer === question.answer ? "To‘g‘ri! " : "Keyingi safar albatta. "}${question.explanation}</div>` : ""}<div class="quiz-footer"><span class="quiz-prompt">${quizScore} ${englishMode ? "correct answers" : "ta to‘g‘ri javob"}</span><button class="button-primary" data-action="next-question" ${chosenAnswer === null ? "disabled" : ""}>${isLastQuestion ? englishMode ? "View results" : "Natijani ko‘rish" : englishMode ? "Next question →" : "Keyingi savol →"}</button></div></section>`;
}

function renderQuizResult() {
  const passed = quizScore >= PASS_SCORE;
  const englishMode = selectedLesson.stage >= 2;
  const hasNextLesson = lessons.indexOf(selectedLesson) < lessons.length - 1;
  const message = passed
    ? hasNextLesson ? englishMode ? `You scored at least ${PASS_SCORE} correct answers. The next lesson is unlocked.` : `Kamida ${PASS_SCORE} ta to‘g‘ri javob oldingiz. Keyingi dars ochildi.` : englishMode ? "You have completed the course successfully." : "Kursni muvaffaqiyatli yakunladingiz."
    : englishMode ? `Score at least ${PASS_SCORE} correct answers to unlock the next lesson. Retake the quiz.` : `Keyingi darsni ochish uchun kamida ${PASS_SCORE} ta to‘g‘ri javob kerak. Testni qayta topshiring.`;
  return `<section class="quiz-panel result-panel"><div class="result-mark">${passed ? "✓" : "↻"}</div><h2>${passed ? englishMode ? "Excellent work!" : "Ajoyib natija!" : englishMode ? "Good effort!" : "Yaxshi urinish!"}</h2><div class="result-score">${quizScore} / ${selectedLesson.questions.length}</div><p>${message}</p><div class="result-actions"><button class="button-primary" data-action="retake-quiz">${englishMode ? "Retake quiz" : "Testni qayta ishlash"}</button><button class="button-light" data-action="back-to-stage">${englishMode ? "Back to stage" : "Etapga qaytish"}</button><button class="button-light" data-action="home">${englishMode ? "All stages" : "Barcha etaplar"}</button></div></section>`;
}

function renderVocabulary() {
  const englishMode = activeCourseStage >= 2;
  const words = lessons.flatMap((lesson) => lesson.words.map(([word, meaning]) => ({ word, meaning, lesson: lesson.title, stage: lesson.stage })));
  content.innerHTML = `<div class="page-title-row"><div class="eyebrow">${englishMode ? "VOCABULARY" : "SO‘Z BOYLIGI"}</div><h1>${englishMode ? "Vocabulary Notebook" : "Lug‘at daftari"}</h1><p class="page-lede">${englishMode ? "Words from lessons across the course." : "Darslarda uchraydigan yangi so‘zlar va ularning tarjimasi."}</p></div><div class="vocabulary-grid">${words.map((item) => `<div class="word-card"><div><strong>${item.word}</strong>${item.stage === 1 && item.meaning ? `<span>${item.meaning}</span>` : ""}<small>${item.lesson}</small></div><button class="sound-button" data-action="speak" data-text="${item.word}" aria-label="${englishMode ? `Listen to ${item.word}` : `${item.word} so‘zini tinglash`}" title="${englishMode ? "Listen" : "Tinglash"}">▶</button></div>`).join("")}</div>`;
}

function renderResults() {
  const completed = lessons.filter(isLessonComplete);
  const englishMode = activeCourseStage >= 2;
  const resultRows = completed.map((lesson) => `<div class="result-row"><div><strong>${lesson.title}</strong><span>${lesson.subtitle}</span></div><span class="score-chip">${progress[lesson.id].score} / ${lesson.questions.length} ${englishMode ? "correct" : "to‘g‘ri"}</span><span class="result-date">${lesson.duration}</span></div>`).join("");
  const emptyState = englishMode
    ? `<div class="empty-state"><div class="result-mark">✳</div><h2>No results yet</h2><p>Choose a lesson and complete its quiz. Your result will appear here.</p><button class="button-primary" data-action="home">Browse lessons</button></div>`
    : `<div class="empty-state"><div class="result-mark">✳</div><h2>Hali natijalar yo‘q</h2><p>Birinchi darsni tanlang va testni tugating. Natijangiz shu yerda saqlanadi.</p><button class="button-primary" data-action="home">Darslarni ko‘rish</button></div>`;
  content.innerHTML = `<div class="page-title-row"><div class="eyebrow">${englishMode ? "YOUR PROGRESS" : "SIZNING RIVOJLANISHINGIZ"}</div><h1>${englishMode ? "Quiz Results" : "Test natijalari"}</h1><p class="page-lede">${englishMode ? "Your latest score for each topic appears here." : "Har bir mavzudagi so‘nggi natijangiz shu yerda saqlanadi."}</p></div>${completed.length ? `<div class="result-list">${resultRows}</div>` : emptyState}<div class="stats-row"><div class="stat-block"><div><div class="stat-label">${englishMode ? "Completed quizzes" : "Tugatilgan testlar"}</div><div class="stat-value">${completed.length}</div></div><span class="stat-icon">✓</span></div><div class="stat-block"><div><div class="stat-label">${englishMode ? "Questions answered" : "Jami savollar"}</div><div class="stat-value">${completed.reduce((sum, lesson) => sum + lesson.questions.length, 0)}</div></div><span class="stat-icon">?</span></div><div class="stat-block"><div><div class="stat-label">${englishMode ? "Course complete" : "Kurs yakunlandi"}</div><div class="stat-value">${percentComplete()}%</div></div><span class="stat-icon">↗</span></div></div>`;
}

function openLesson(id) {
  const lesson = lessons.find((item) => item.id === id);
  if (!lesson || !canOpenLesson(lesson)) return;
  selectedLesson = lesson;
  selectedStage = null;
  activeCourseStage = lesson.stage;
  quizIndex = 0;
  chosenAnswer = null;
  quizScore = 0;
  quizFinished = false;
  content.dataset.quizStarted = "false";
  document.querySelectorAll(".nav-item").forEach((item) => item.classList.toggle("active", item.dataset.view === "home"));
  render();
}

function openStage(stageNumber) {
  const stage = courseStages.find((item) => item.stage === stageNumber);
  if (!stage) return;
  activeView = "home";
  selectedLesson = null;
  selectedStage = stage;
  activeCourseStage = stageNumber;
  document.querySelectorAll(".nav-item").forEach((item) => item.classList.toggle("active", item.dataset.view === "home"));
  render();
}

document.addEventListener("click", async (event) => {
  const viewButton = event.target.closest("[data-view]");
  if (viewButton) {
    setView(viewButton.dataset.view);
    return;
  }

  const button = event.target.closest("[data-action]");
  if (!button) return;
  const action = button.dataset.action;

  if (action === "home") { setView("home"); return; }
    if (action === "open-stage") { openStage(Number(button.dataset.stage)); return; }
    if (action === "back-to-stage") { openStage(selectedLesson?.stage || selectedStage?.stage || 1); return; }
  if (action === "sign-out") {
    if (supabaseClient) {
      await supabaseClient.auth.signOut();
      return;
    }
    localStorage.removeItem("tilchi-demo-session");
    showAuthGate();
    return;
  }
  if (action === "open-lesson") { openLesson(button.dataset.id); return; }
  if (action === "start-quiz") {
    quizIndex = 0;
    quizScore = 0;
    chosenAnswer = null;
    quizFinished = false;
    content.dataset.quizStarted = "true";
    renderLesson();
    document.querySelector("#quiz")?.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }
  if (action === "answer" && chosenAnswer === null) {
    chosenAnswer = Number(button.dataset.index);
    if (chosenAnswer === selectedLesson.questions[quizIndex].answer) quizScore += 1;
    renderLesson();
    document.querySelector("#quiz")?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    return;
  }
  if (action === "next-question" && chosenAnswer !== null) {
    if (quizIndex === selectedLesson.questions.length - 1) {
      quizFinished = true;
      progress[selectedLesson.id] = { score: quizScore, total: selectedLesson.questions.length };
      try { localStorage.setItem(`tilchi-progress-${activeUserId}`, JSON.stringify(progress)); } catch { /* Progress remains available until this tab closes. */ }
    } else {
      quizIndex += 1;
      chosenAnswer = null;
    }
    renderLesson();
    if (!quizFinished) document.querySelector("#quiz")?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    return;
  }
  if (action === "retake-quiz") {
    quizIndex = 0;
    quizScore = 0;
    chosenAnswer = null;
    quizFinished = false;
    content.dataset.quizStarted = "true";
    renderLesson();
    document.querySelector("#quiz")?.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }
  if (action === "speak") {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(button.dataset.text);
      utterance.lang = "en-US";
      window.speechSynthesis.speak(utterance);
    }
  }
});

initializeAuth();
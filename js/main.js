const form = document.querySelector('.form');


const answersDB = () => [
  {quostion: "Materiallıq noqat dep", a: "málim massaǵa iye bolǵan,  úyreniletuǵın aralıqlarǵa salıstırǵanda  ólshemi júdá kishi bolǵan denege aytıladı", b: "bul hárekette deneniń barlıq noqatlarınıń háreket traektoriyaları  sheńberlerden ibarat bolıp,  olardıń orayı bolsa aylanıw kósheri dep atalatuǵın tuwrı sızıqta turadı", c: "Hár qanday sharayatta deformaciyalanbaytuǵın dene", d: "Denelerdiń keńisliktegi jaǵdayın anıqlawǵa múmkinshilik beretuǵın,  qózǵalmas dene menen baylanısqan koordinatalar sisteması"},
  {quostion: "keńisliktegi sanaq sisteması dep", a: "Denelerdiń keńisliktegi jaǵdayın anıqlawǵa múmkinshilik beretuǵın,  qózǵalmas dene menen baylanısqan koordinatalar sisteması", b: "Hár qanday sharayatta deformaciyalanbaytuǵın dene", c: "olardıń jaǵdayın basqa,  shártli túrde qozǵalmas dep qabıl etilgen denege  salıstırǵanda anıqlaw kerek.", d: "ol jaǵdayda háreket qılıp atırǵan dene menen bekkem baylanısqan qálegen tuwrı sızıq baslanǵısh jaǵdayına salıstırǵanda parallelligin saqlap qaladı"},
  {quostion: "absolyut qattı dene  dep", a: "Hár qanday sharayatta deformaciyalanbaytuǵın dene", b: "málim massaǵa iye bolǵan,  úyreniletuǵın aralıqlarǵa salıstırǵanda  ólshemi júdá kishi bolǵan denege aytıladı", c: "a ham b", d: "barlıq noqatlarınıń háreket traektoriyaları  sheńberlerden ibarat bolıp,  olardıń orayı bolsa aylanıw kósheri dep atalatuǵın tuwrı sızıqta turadı"},
  {quostion: "Ilgerilemeli háreket-bul", a: "bul sonday háreket,  ol jaǵdayda háreket qılıp atırǵan dene menen bekkem baylanısqan qálegen tuwrı sızıq baslanǵısh jaǵdayına salıstırǵanda parallelligin saqlap qaladı", b: "deneler sisteması,  kompleksınıń teń salmaqlılıq awhalı nızamların úyrenedi", c: "deneler háreketin,  onıń kelip shıǵıw sebeplerin itibarǵa almay, úyrenedi", d: "bul hárekette deneniń barlıq noqatlarınıń háreket traektoriyaları  sheńberlerden ibarat bolıp,  olardıń orayı bolsa aylanıw kósheri dep atalatuǵın tuwrı sızıqta turadı"},
  {quostion: "Kinematika", a: "deneler háreketin,  onıń kelip shıǵıw sebeplerin itibarǵa almay, úyrenedi", b: "Waqıt ótiwi menen deneniń keńisliktegi jaǵdayın basqa denelerge salıstırǵanda ózgeriwi", c: "deneler sisteması,  kompleksınıń teń salmaqlılıq awhalı nızamların úyrenedi", d: "deneler háreketin,  onıń kelip shıǵıw sebeplerin bilgen halda,úyrenedi"},
  {quostion: "tezlik traektoriyası", a: "Tezleniwshi noqatlardan ibarat geometrik jaǵdaylardı", b: "tezlikti muǵdar jaǵınan ózgeriwi esabına payda boladı", c: "sheńberge urınba bolǵan vektor", d: "tezliktiń baǵıtı ózgeriwi esabına payda boladı"},
  {quostion: "tezliktiń baǵıtı ózgeriwi esabına payda bolıwı", a: "Normal tezleniw", b: "aylanıw jiyiligi", c: "múyeshlik tezleniw", d: "tezlik traektoriyası"},
  {quostion: "Birlik waqıt ishinde sheńber boylap tolıq aylanıwlar sanı", a: "aylanıw jiyiligi", b: "múyeshlik tezleniw", c: "aylanıw dáwiri", d: "tangencial tezleniw"},
  {quostion: "Ózgermeytuǵın 0X kósheri menen 0M radius vektor arasındaǵı múyeshten waqıt boyınsha  alınǵan birinshi tártipli tuwındı", a: "múyeshlik tezlik", b: "aylanıw jiyiligi", c: "múyeshlik tezleniw", d: "aylanıw dáwiri"},
  {quostion: "(ПWФV)eger múyesh  tezlik ω ózgermeytuǵın bolsa,  sheńber boylap háreket", a: "teń ólshewli aylanbalı háreket dep ataladı", b: "aylanıw dáwiri dep ataladı", c: "tezlik traektoriyası dep ataymız", d: "múyeshlik tezlik dep ataladı"},
  {quostion: "Dene ózınıń tınısh jaǵdayın yamasa tuwrı sızıqlı teń ólshewli háreketin sırttan basqa deneler tásir etpegenshe saqlap qaladı", a: "Nyutonnıń birinshi nızamı", b: "inercial sanaq sistemaları", c: "Gravitacion tartısıw kúshi", d: "Nyutonnıń ekinshi nızamı"},
  {quostion: "bul eki materiallıq noqatlar arasındaǵı óz-ara tásir etiwshi kúsh bolıp tabıladı", a: "Gravitacion tartısıw kúshi", b: "Kulon kúshi", c: "awırlıq kúshi", d: "Qarsılıq kúshi"},
  {quostion: "Jerdiń tartıw kúshi tásirinde payda bolatuǵın kúsh", a: "awırlıq kúshi", b: "Elastiklik kúshi", c: "Súykelisiw kúshi", d: "Kulon kúshi"},
  {quostion: "Sistemadaǵı materiallıq noqatlar arasındaǵı óz-ara tásir hám teris tásir kúshlerin", a: "ishki kúshler", b: "awırlıq kúshi", c: "Qarsılıq kúshi", d: "Elastiklik kúshi"},
  {quostion: "Denelerdiń ózınıń tınısh jaǵdayın yamasa tuwrı sızıqlı teń ólshewli háreketin saqlap qalıw qásiyeti", a: "inerciya qásiyeti", b: "Nyutonnıń ekinshi nızamı", c: "Deneniń massası", d: "awırlıq kúshi"},
  {quostion: "Massası 10 kg bolǵan dene 20 N kúsh tásirinde qanday qozǵalısta boladı?", a: "2 m/s2 tezleniw menen tezleniwshi;", b: "2 m/s tezlik penen tegis;", c: "2 m/s2 tezleniw menen ástelesiwshi;", d: "200 m/s tezlik penen tegis"},
  {quostion: "-barlıq túrdegi zatlardıń háreketi hám óz-ara tásirınıń universel muǵdarı ólshewi bolıp tabıladı.", a: "Energiya", b: "jumıs", c: "quwatlılıq", d: "zattıń háreket forması"},
  {quostion: "Egerde kúsh islegen jumıs háreket traektoriyasına baylanıslı bolsa, bunday kúshler", a: "dissipative kúshler dep ataladı.", b: "elastik kúsh", c: "potencial maydanlar dep ataladı", d: "elektr tásir kúshi"},
  {quostion: "Tınısh halatta turǵan yamasa salıstırmalı tuwrı sızıqlı tegis qozǵalıp atırǵan esaplaw sistemaları", a: "inercial esaplaw sistemaları delinedi.", b: "Galileydiń tezliklerdi qosıw qaǵıydası delinedi.", c: "inercial emes esaplaw sistemaları delinedi", d: "inerciya kúshi"},
  {quostion: "v = 7,91 km/s", a: "Bul tezlik birinshi kosmoslıq tezlik delinedi", b: "ortasha tezlik delinedi.", c: "Bul tezlik ekinshi kosmoslıq tezlik delinedi", d: "kosmoslıq tezlik delinedi"},
  {quostion: "birinshi kosmoslıq tezlik", a: "v = 7,91 km/s", b: "v = 7,71 km/s", c: "v = 7,93 km/s", d: "v = 7,98 km/s"},
  {quostion: "Tınısh halatta turǵan yamasa salıstırmalı tuwrı sızıqlı tegis qozǵalıp atırǵan esaplaw sistemaları", a: "inercial esaplaw sistemaları delinedi", b: "Invariant", c: "Galileydiń tezliklerdi qosıw qaǵıydası delinedi.", d: "inercial emes esaplaw sistemaları delinedi"},
  {quostion: "Egerde kúsh islegen jumıs háreket traektoriyasına baylanıslı bolsa, bunday kúshler", a: "dissipative kúshler dep ataladı.", b: "potencial maydanlar dep ataladı", c: "sırtqı hám  ishki kúshler", d: "elastik kúsh"},
  {quostion: "barlıq túrdegi zatlardıń háreketi hám óz-ara tásirınıń universel muǵdarı ólshewi bolıp tabıladı", a: "Energiya", b: "sırtqı hám  ishki kúshler", c: "quwatlılıq", d: "jumıs"},
  {quostion: "ekinshi kosmoslıq tezlik", a: "11,2 km/s", b: "21,2 km/s", c: "12,2 km/s", d: "11,5 km/s"},
  {quostion: "barlıq ınercial sanaq sistemaları teń kúshli bolıp tabıladı, bul sistemalarda tábiyat hádiyseleri birdey ótedi hám nızamlar birdey ańlatıladı", a: "Salıstırmalılıq principi", b: "tezliklerdi qosıw", c: "Galiley túrlendiriwler", d: "Jaqtılıq tezliginiń invariantlıq principi"},
  {quostion: "jaqtılıqtıń boslıqtaǵı tezligi barlıq ınercial sanaq sistemalarında birdey bolıp, derek hám baqlawshınıń salıstırmalı háreket tezligıne baylanıslı emes", a: "Jaqtılıq tezliginiń invariantlıq principi", b: "Salıstırmalılıq principi", c: "relyativistik impul'si bolıp tabıladı", d: "Galiley túrlendiriwleri"},
  {quostion: "– deneniń inertlik qásiyetin belgileydi, yaǵnıy onıń kúsh tásirinde qanshelli tezleniw alıw qábiletin sıpatlaydı", a: "Massa", b: "erkin dene", c: "kúsh", d: "ko'lem"},
  {quostion: "F kúsh tásirinde m1 massalı dene 2 m/s2 tezleniw aladı. Al, m2 massalı dene, usı kúsh tásirinde 5 m/s2 tezleniw aladı. Bul deneler óz ara jalǵansa, olar usı kúsh tásirinde qanday tezleniw menen qozǵaladı?", a: "1,43", b: "1,40", c: "1,23", d: "1,45"},
  {quostion: "Tınısh halatta turǵan yamasa salıstırmalı tuwrı sızıqlı tegis qozǵalıp atırǵan esaplaw sistemaları", a: "inercial esaplaw sistemaları delinedi", b: "Galileydiń tezliklerdi qosıw qaǵıydası delinedi", c: "inerciya kúshi", d: "Galileydiń salıstırmalılıq principi"},
  {quostion: "Temperatura ózgermeytuǵın bolǵanda dene qásiyetin kórsetiwshi P hám V shamalar arasındaǵı baylanıstı korsetiwshi iymek sızıq", a: "izoterma dep ataladı", b: "izoxora dep ataladı", c: "termapara dep ataladı", d: "izobara dep ataladı"},
  {quostion: "Gazdıń kólemi turaqlı bolǵandaǵı payda bolatuǵın process", a: "izoxoralıq process dep ataladı", b: "politropikalıq processler.", c: "adiabatalıq process dep ataladı", d: "izobaralıq process dep ataladı"},
  {quostion: "Gazdıń basımı turaqlı bolǵanda payda bolatuǵın process", a: "izobaralıq process dep ataladı", b: "adiabatalıq process dep ataladı", c: "izoxoralıq process dep ataladı", d: "politropikalıq process dep ataladı"},
  {quostion: "Sistema sırttan jıllılıq almasa yamasa oǵan jıllılıq uzatılmasa yaǵnıy Q = const  bolsa bunday process", a: "adiabatalıq potsess dep ataladı", b: "izotermalıq potsess dep ataladı", c: "politropikalıq potsess dep ataladı", d: "izoxoralıq potsess dep ataladı"},
  {quostion: "K=R?Na=1,38*10-ДЖ/k", a: "Bolsman turaqlısı", b: "barometrik formula", c: "Loshmidt sanı", d: "Bolsman bólistiriliwi"},
  {quostion: "Qálegen gazdıń 1 moli, temperatura hám basım birdey bolǵanda, birdey kólemge iye boladı. Normal atmosfera sharayatında bunday kólem", a: "22,41*10-3 м3/mol", b: "23,41*10-3 м3/mol", c: "25,41*10-3 м3/mol", d: "21,41*10-3 м3/mol"},
  {quostion: "Termodinamikalıq teń salmaqlılıq halların hám bul hallarǵa óz ara ótiw processinde bolǵan makroskopiyalıq sistemanıń ulıwma qásiyetlerin úyrenedi", a: "Termodinamika", b: "Temperatura", c: "Termodinamikalıq temperatura", d: "Termodinamikalıq metod"},
  {quostion: "makroskopiyalıq deneler jıynaǵı", a: "Termodinamikalıq sistema", b: "Termodinamikalıq metod", c: "Termodinamika", d: "Temperatura"},
  {quostion: "Termodinamikalıq metod tiykarı", a: "bul termodinamikalıq sistemanıń halatın anıqlaw", b: "makroskopiyalıq deneler jıynaǵı", c: "Xalıq aralıq ámeliy temperatura shkalası (Celsiy graduslarında 0C)", d: "denelerdiń jıllılıq dárejesin kórsetiwshi fizikalıq shamalar hám makroskopiyalıq sistemalar termodinamikalıq tensalmaqlıq halın xarakterleydi"},
  {quostion: "R molyar gaz turaqlısı", a: "R = 8,31 Dj/mol K", b: "R = 8,51 Dj/mol K", c: "R = 8,31 Dj/mol K", d: "R = 8,21 Dj/mol K"},
  {quostion: "Sheńber boylap qozǵalıp atırǵan deneniń múyeshlik tezligi waqıt dawamında ózgerip turatuǵın qozǵalıs", a: "ózgermeli aylanbalı qozǵalıs delinedi", b: "Tuwrı sızıqlı tegis emes qozǵalıs delinedi", c: "tangensial tezleniw dep ataymız", d: "múyeshlik tezleniw delinedi"},
  {quostion: "Múyeshlik tezlik ózgeriwiniń usı ózgeris ushın ketken waqıtqa qatnası menen ólshenetuǵın shamaǵa", a: "múyeshlik tezleniw delinedi", b: "Tuwrı sızıqlı tegis emes qozǵalıs delinedi", c: "ózgermeli aylanbalı qozǵalıs delinedi", d: "tangensial tezleniw dep ataymız"},
  {quostion: "Joqarıǵa vertikal ılaqtırılǵan deneniń qozǵalısı", a: "tegis ásteleniwshi qozǵalıs", b: "Tuwrı sızıqlı tegis qozǵalıs", c: "Tuwrı sızıqlı tegis emes qozǵalıs", d: "ózgermeli aylanbalı qozǵalıs"},
  {quostion: "Iymek sızıqlı yamasa tezleniw menen qozǵalıp atırǵan esaplaw sistemaları", a: "Inercial emes esaplaw sistemaları", b: "Inerciya kúshi", c: "Dinamikanıń birinshi nızamı", d: "Inercial esaplaw sistemaları"},
  {quostion: "Salıstırmalı tınısh jaǵdayda turǵan yamasa tuwrı sızıqlı tegis qozǵalıstaǵı esaplaw sistemaları.", a: "Inercial esaplaw sistemaları", b: "Inerciya kúshi", c: "Inertli massa", d: "Kúsh"},
  {quostion: "Eki deformaciyalanbaytuǵın sharlardıń soqlıǵısıwı", a: "Absolyut serpimli soqlıǵısıw", b: "Absolyut serpimli emes soqlıǵısıw", c: "Soqlıǵısıw", d: "Sistemanıń tolıq mexanikalıq energiyası"},
  {quostion: "Suyıqlıqtıń iyrimli kórinistegi qozǵalısı", a: "Turbulent aǵım", b: "Laminar aǵım", c: "Magnus effekti", d: "Dinamikalıq basım"},
  {quostion: "Oz ara hám sırtqı deneler menen tásirlenetuǵın hámde energiya almasatuǵın zatlar hám deneler jıyındısı.", a: "Termodinamikalıq sistema", b: "Termodinamikalıq teńsalmaqlıq", c: "Termodinamikalıq process", d: "Makroskopiyalıq sistema"},
  {quostion: "Sistemanıń aqırǵı halattan baslanǵısh halatqa sol aralıq halatlar arqalı, keri baǵıtta qorshaǵan ortalıqta hesh qanday ózgeris júz bermesten ótiwi", a: "Qaytımlı process", b: "Ishki energiya", c: "Qaytımsız process", d: "Termodinamikalıq teńsalmaqlıq"},
  {quostion: "Zattıń barlıq molekulalarınıń tártipsiz qozǵalısı kinetikalıq energiyaları hám olardıń óz ara tásir potensial energiyalarınıń jıındısı", a: "Ishki energiya", b: "Qaytımlı process", c: "Termodinamikalıq teńsalmaqlıq", d: "Termodinamikalıq process"},
  {quostion: "Teploxodtıń tınısh suwdaǵı tezligi 70 km/saat. Ol aǵis boylap birbirinen 36 km uzaqlıqta jaylasqan pristanlar aralıǵın qansha waqıtta basıp ótedi? Dárya aǵısınıń tezligi 2 km/saat", a: "0,5 saat", b: "1 saat", c: "0,8 saat", d: "0,7 saat"},
  {quostion: "Biyikligi 20 m bolǵan imarattan túsip atırǵan deneniń baslanǵısh tezligi 15 m/s. Onıń jerge soqlıǵısıw waqtındaǵı tezligi neshege teń?", a: "25 m/s", b: "45 m/s", c: "15 m/s", d: "23 m/s"},
  {quostion: "y=h-g/2vo x2*", a: "Gorizontal ılaqtırılǵan deneniń qozǵalıs traektoriyası teńlemesi", b: "Gorizontqa múyesh astında ılaqtırılǵan deneniń ushıw waqtı", c: "Gorizontqa múyesh astında ılaqtırılǵan deneniń ushıw uzaqlıǵı", d: "Gorizontqa múyesh astında ılaqtırılǵan deneniń kóteriliw biyikligi"},
  {quostion: "Jerdiń jasalma joldası bolıp qalıwı ushın dene iye bolıwı kerek bolǵan tezlik – 7,91 km/s.", a: "Birinshi kosmoslıq tezlik", b: "Júkleniw", c: "Úshinshi kosmoslıq tezlik", d: "Ekinshi kosmoslıq tezlik"},
  {quostion: "Quyash sistemasınıń tartıw kúshin jeńip shıǵıp ketiw ushın kerek bolatuǵın tezlik – 16,7 km/s.", a: "Úshinshi kosmoslıq tezlik", b: "Birinshi kosmoslıq tezlik", c: "Salmaqsızlıq", d: "Júkleniw"},
  {quostion: "Adam massası 2 kg bolǵan deneni 1 m biyiklikke 3 m/s2 tezleniw menen kótergende qansha jumıs atqaradı?", a: "A = 26 Dj", b: "A = 16 Dj", c: "A = 22 Dj", d: "A = 36 Dj"},
  {quostion: "Júdá kop sandaǵı atom hám molekulalardan quralǵan sistema", a: "Makroskopiyalıq sistema", b: "Termodinamikalıq process", c: "Termodinamikalıq sistema", d: "Termodinamikalıq teńsalmaqlıq"},
  {quostion: "Zattıń barlıq molekulalarınıń tártipsiz qozǵalısı kinetikalıq energiyaları hám olardıń óz ara tásir potensial energiyalarınıń jıındısı", a: "Ishki energiya", b: "Termodinamikalıq process", c: "Termodinamikanıń birinshi nızamı", d: "Qaytımlı process"},
  {quostion: "Lift tómenge qarap 4,5 m/s2 tezleniw menen túspekte. Ondaǵı deneniń awırlıǵı neshe ese kemeyedi?", a: "1,82 ese", b: "1,52 ese", c: "1,62 ese", d: "1,72 ese"},
  {quostion: "Top 10 m/s tezlik penen gorizontqa 30° qıyalatıp ılaqtırıldı. Ol qansha biyiklikke kóteriledi?", a: "1,27 m", b: "1,17 m", c: "1,37 m", d: "1,23 m"},
  {quostion: "Múyeshlik tezligi waqıt dawamında ózgerip turatuǵın aylanbalı qozǵalıs", a: "Ózgermeli aylanbalı qozǵalıs", b: "Tangensial tezleniw", c: "Tómenge qarap vertikal qozǵalıs", d: "Múyeshlik tezleniw"},
  {quostion: "Tezliktiń san mánisi ózgeriwi sebepli payda boladı (ar=v/t)", a: "Tangensial tezleniw", b: "Múyeshlik tezleniw", c: "Ózgermeli aylanbalı qozǵalıs", d: "Tómenge qarap vertikal qozǵalıs"},
  {quostion: "Massaları 1 kg hám 2 kg bolǵan serpimli emes sharlar birbirine qaray, sáykes ráwishte, 1 hám 2 m/s tezlik penen qozǵalmaqta. Soqlıǵısqannan keyin sistema kinetikalıq energiyasınıń ózgeriwin tabıń", a: "3 Dj", b: "5 Dj", c: "4 Dj", d: "6 Dj"},
  {quostion: "Qorshaǵan ortalıq penen jıllılıq muǵdarı almaspastan júz beretuǵın process.", a: "Adiabatalıq process", b: "izaxoralıq process", c: "izotermalıq process", d: "qaytımlı processler"},
  {quostion: "Sistemanıń bir qansha halatlardan ótip, óziniń dáslepki halatına qaytatuǵın process.", a: "Aylanba process yaki cikl", b: "Jıllılıq mashinası", c: "Ishki energiya", d: "Karno cikli"},
  {quostion: "ár qanday tuyıq sistema ishindegi barlıq deneler zaryadlarınıń algebralıq qosındısı ózgermeydi yaǵnıy: q1 + q2 + ... +qn = const.", a: "Zaryadlardıń saqlanıw nızamı", b: "Dielektriktiń polyarizaciyası", c: "Elektr maydannıń superpoziciya principi", d: "Elektr maydanınıń kúsh sızıqları"},
  {quostion: "Elektr maydanına kirgizilgen oń zaryadqa maydan tárepinen tásir etiwshi kúsh baǵıtın kórsetiwshi sızıqlar. Oń zaryad payda etken elektr maydan kúsh sızıqları zaryadtan shıǵıwshı, al teris zaryadtiki zaryadqa kiriwshi boladı.", a: "Elektr maydanınıń kúsh sızıqları", b: "Elektr maydannıń superpoziciya principi", c: "Noqatlı q zaryadtıń r aralıqta payda etken maydan kernewliligi", d: "Elektr maydan kernewliligi"},
  {quostion: "Metallardıń qızıwı sebepli olardan elektron ushıp shıǵıw qubılısı", a: "Termoelektron emissiya", b: "ótkizgishtiń induktivligi", c: "indukciya  EQK", d: "sinusoidal ózgeriwshi tok"},
  {quostion: "Ótkizgishte magnit maydanınıń ózgeriwi", a: "indukciya  EQK dep ataladı", b: "sinusoidal ózgeriwshi tok  dep ataladı", c: "Óz ara indukciya dep ataladı", d: "solenoid induktivligi dep ataladı"},
  {quostion: "Temperatura ózgermeytuǵın bolǵanda dene qásiyetin kórsetiwshi P hám V shamalar arasındaǵı baylanıstı korsetiwshi iymek sızıq", a: "izoterma dep ataladı", b: "izoxoralıq process dep ataladı", c: "politropikalıq processler", d: "adiabatalıq potsess dep ataladı."},
  {quostion: "Gazdıń basımı turaqlı bolǵanda payda bolatuǵın process", a: "izobaralıq process dep ataladı", b: "izoterma dep ataladı", c: "politropikalıq processler", d: "adiabatalıq potsess dep ataladı"},
  {quostion: "Gazdıń kólemi turaqlı bolǵandaǵı payda bolatuǵın process", a: "izoxoralıq process dep ataladı", b: "adiabatalıq potsess dep ataladı.", c: "izoterma dep ataladı", d: "izobaralıq process dep ataladı"},
  {quostion: "Temperaturası 20 °C ǵa kóterilse 200 g geliydiń ishki energiyası qanshaǵa ózgeredi", a: "ΔU = 12,5 kDj", b: "ΔU = 22,5 kDj", c: "ΔU = 12,7 kDj", d: "ΔU = 13,5 kDj"},
  {quostion: "320 g kislorodtı 10 K ge izobaralıq qızdırılǵanda qansha jumıs atqarıladı?", a: "A = 830 Dj", b: "A = 835 Dj", c: "A = 845 Dj", d: "A = 820 Dj"},
  {quostion: "Tárepleri 10 sm bolǵan durıs úshmúyeshliktiń eki ushında – 4 nC hám + 4 nC bolǵan eki zaryad jaylasqan. Úshmúyeshliktiń úshinshi ushındaǵı maydan kernewligi nege teń?", a: "3,6 kV/m", b: "3,3 kV/m", c: "3,4 kV/m", d: "4,6 kV/m"},
  {quostion: "Eki +0,4 μC hám −0,6 μC noqatlı zaryadlar bir-birinen 12 sm aralıqta jaylasqan. Zaryadlardı tutastırıwshı kesindi ortasında elektr maydan potencialı qanday boladı?", a: "–30 kV", b: "+32 kV", c: "+30 kV", d: "–32 kV"},
  {quostion: "Qarsılıǵı 0,04 Ω bolǵan shunt jalǵanǵan ampermetr tarmaqqa jalǵanǵanda 5 A di kórsetdi. Ampermetrdiń ishki qarsılıǵı 0,12 Ω. Shınjırdıń tarmaqlanbaǵan bólimindegi tok kúshin tabıń", a: "20 A.", b: "juwap", c: "21 A.", d: "26 A."},
  {quostion: "Bir deneli elektr maydanındaǵı ıqtıyarlı S maydan arqalı tik túrde ótip atırǵan indukciya", a: "sızıqları indukciya aǵımları dep ataladı", b: "elektrostatikalıq maydan kúshi konservativ kúsh", c: "elektr indukciya aǵımı", d: "dipol noqatlıq dep ataladı"},
  {quostion: "Elektr maydan kernewliligi  hám magnit maydan indukciyası  bolǵan noqatta u - tezlik penen háreketlenetuǵın q zaryadqa tásir etiwshi kúsh", a: "Lorens kúshi dep ataladı", b: "Tok kúshi dep ataladı", c: "Elektr qozgawshi kúshi dep ataladı", d: "Amper kúshi dep ataladı"},
  {quostion: "Elektr toǵı deregin 5 Ω lı qarsılıqqa jalǵaǵanda shınjırdaǵı tok kúshi 5 A ge, 2 Ω lı qarsılıqqa jalǵanǵanda shınjırdaǵı tok kúshi 8 A ge teń boldı. Derektiń ishki qarsılıǵın hám EQK in tabıń", a: "3Ω; 40 V", b: "3Ω; 60 V", c: "3Ω; 20 V", d: "4Ω; 50 V"},
  {quostion: "Elektr maydanına jaylastırılǵan zat (ortalıq) atomları (molekulaları) elektron qabıǵınıń elektr maydanı tásirinde deformaciyalanadı. Nátiyjede atomlar (molekulalar) da oń hám teris zaryad orayları ústi-ústine túspeydi.", a: "Dielektriktiń polyarizaciyası", b: "Zaryadlardıń saqlanıw nızamı", c: "Elektr maydan kernewliligi", d: "Elektr maydanınıń kúsh sızıqları"},
  {quostion: "Eger zaryadlanǵan eki parallel plastinka arasındaǵı aralıq 12 sm, potenciallar ayırması 180 V bolsa, plastinkalar arasındaǵı maydan kernewliligin anıqlań.", a: "1500 V/m", b: "1505V/m", c: "1700 V/m", d: "1300 V/m"},
];

answersDB().forEach((item, index) => {
  console.log(item.a)


  const container = document.createElement('div')
  container.innerHTML = `

      <ul class="test-list">
      <span class="quostion-text">${index + 1}. ${item.quostion}</span>
            <li class="test-item">
              <label>
                <input type="radio" name="${index}" checked> ${item.a}
              </label>
            </li>
            <li class="test-item">
              <label>
                <input type="radio" name="${index}"> ${item.b}
              </label>
            </li>
            <li class="test-item">
              <label>
                <input type="radio" name="${index}"> ${item.c}
              </label>
            </li>
            <li class="test-item">
              <label>
                <input type="radio" name="${index}"> ${item.d}
              </label>
            </li>
        </ul>
  `
  form.append(container)
})
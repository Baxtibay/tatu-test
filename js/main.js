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
  {quostion: "Eki mashina tuwrı jolda bir baǵıtta qozǵalmaqta. Eger siz OX kósherin mashinalardıń qozǵalıs baǵıtı boyınsha júrgizgen bolsańız, onda OX kósheri boyınsha avtomobiller tezliginiń proyekciyaları qanday boladı?", a: "durisjuwap", b: "juwap", c: "juwap", d: "juwap"},
  {quostion: "soraw", a: "ekewi de oń", b: "ekewi de keri", c: "birinshisi - keri, ekinshisi - oń", d: "birinshisi - oń, ekinshisi – ker"},
  {quostion: "Vertolyot 30 km tuwrı sızıq boylap ushtı, keyininen 90 gradus múyesh astında burılıp, taǵı 40 km aralıqtı basıp ótti. vertolyot basıp ótken jol:", a: "70 km", b: "50 km", c: "10km", d: "0"},
  {quostion: "Avtomobil tormozlaw baslanǵanınan 10 sekundtan keyin 0,5 m/s2 tezleniw menen tormozlanıwda qanday tezlikke erisedi, eger onıń dáslepki tezligi 20m/s bolsa?", a: "25 m/s", b: "20 m/s", c: "15 m/s", d: "10 m/s"},
  {quostion: "4.Radiusı 9 sm bolǵan dóngelektiń shetindegi noqattıń sızıqlı tezligi dóngelek orayınan 3 sm aralıqta jaylasqan noqattıń sızıqlı tezliginen neshe ret úlken ekenligin anıqlań.", a: "3 ret", b: "2 ret", c: "1.5 ret", d: "1 ret"},
  {quostion: "Eki kishi dene radiusı 0,5 m hám bir noqat bolǵan sheńber boylap bir tegis háreketlene baslaydı. Bir deneniń háreket dáwiri 1 s, ekinshisi bolsa 2 s. Háreket baslanǵanınan keyin 1 sekunddan keyin olar arasındaǵı aralıqtı anıqlań.", a: "1 m", b: "0,5π m", c: "0,5 m", d: "0,25π m"},
  {quostion: "Deneniń sheńber boylap aylanıw dáwiri 3 ret artadı. Orayǵa baǵdarlanǵan tezleniw qanday hám neshe ret ózgergenlıgin anıqlań.", a: "9 ret kemeydi", b: "3 retke asqan", c: "3 ret kemeydi", d: "9 retke asqan"},
  {quostion: "Jasalma joldastıń jer átirapında aylanıw tezligi 7,8 km/s. Jasalma joldastıń jerden biyikligi 320 km. Eger jerdiń radiusı 6370 km dep esaplansa, jasalma joldastıń aylanıw dáwirin anıqlań.", a: "1,5", b: "1,25", c: "1,2", d: "1,15"},
  {quostion: "Háreketleniwshi noqattı háreketke keltiriw...dep ataladı.", a: "...noqattıń dáslepki jaǵdayın aqırǵı pozitsiyasi menen baylanıstıratuǵın baǵıtlanǵan tuwrı sızıq segmenti;", b: "...traektoriya uzınlıǵı", c: "...traektoriyanıń baslanǵısh noqatınan aqırına shekemgi aralıq;", d: "...berilgen saykes jazıwlar sistemasında noqat suwretleytuǵın sızıq."},
  {quostion: "Awırlıǵı 50 g bolǵan shar 3 m biyiklikten tusip, 2 m biyiklikke sekirip shıqsa, onıń mexanik energiyası qansha J ga kemeygen?", a: "0,49 J", b: "0,049 J", c: "0,149 J", d: "0,249 J"},
  {quostion: "Erkin túsip atırǵan deneniń kinetikalıq energiyası qaysı biyiklikte onıń potencial energiyasına teń, eger dene 10 m biyiklikten taslansa.", a: "5 m", b: "3,75 m", c: "2,5 m", d: "1,25 m"},
  {quostion: "Massası 0,2 kg bolǵan tas 10 m/s tezlikte vertikal joqarıǵa atılgan hám tap sol jerge 8 m/s tezlik penen túsedi. Tasdıń háreketi waqtında hawa qarsılıq kúshleriniń jumısın anıqlań.", a: "(-3,6 J)", b: "1,8 J", c: "(-1,8 J)", d: "1,2 J"},
  {quostion: "Top 2 m uzınlıqtaǵı salmaqsiz hám sozılmaytuǵın jipke asılǵan. Top vertikal tegislikte tolıq aylanıw ushın oǵan qanday minimal tezlik beriliwi kerekligin anıqlań.", a: "10 m/s", b: "8 m/s", c: "6 m/s", d: "4 m/s"},
  {quostion: "Brusok stol beti boylap tartıladı, 3 N gorizontal kúsh qoyıladı. Bunday halda, brusok 0,5 m/s turaqlı tezlikte háreket etedi. 3 sekundta brusokqa tásir etken kúsh atqarǵan jumıstı anıqlań.", a: "4,5 J", b: "2,5 J", c: "1,8 J", d: "1,6 J"},
  {quostion: "Betler arasındaǵı súykelisiw kúshi:", a: "Ápiwayı reaksiyaǵa hám súykelisiw koefficiyentine baylanıslı", b: "Ápiwayı reaksiyaǵa qaraǵanda kemrek", c: "Baylanıs noqatındaǵı normal reaksiyaǵa teń", d: "Ápiwayı reaksiyadan úlkenlew."},
  {quostion: "Massası 1600 kg bolǵan avtomobildi tezleniw menen háreketlengende tartıw kabeli 2 sm ge sozılǵan. Kabeldiń qattılıǵı 80 kN/m bolsa, avtomobil háreketlenip atırǵan tezleniwdi anıqlań. Jolda avtomobil dóńgelekleriniń súykelisiw kúshine itibar bermeń.", a: "1 m/s2", b: "0,5 m/s2", c: "0,1 m/s2", d: "0,05 m/s2"},
  {quostion: "Dene yamasa bólekshe jaqtılıq tezligine jaqın tezlikte háreket etedi. Usınıń menen birge, onıń statsionar baqlawshıǵa salıstırǵanda massası...", a: "artadı", b: "kemeyedi", c: "ózgermeydi", d: "nol"},
  {quostion: "Tayaqtıń uzınlıǵı 10 m. Ol 0,6 c tezlikte qozǵalsa onıń uzınlıǵı qansha boladı?", a: "8", b: "6", c: "4", d: "2"},
  {quostion: "Tayaqtıń uzınlıǵı 20 m. Ol 0,6 c tezlikte qozǵalsa onıń uzınlıǵı qansha boladı?", a: "16", b: "12", c: "10", d: "0"},
  {quostion: "36 km/saat tezlikte háreketleniwshi massası 1 t deneniń kinetikalıq energiyası qanday?", a: "50 kJ", b: "36 kJ", c: "72 kJ", d: "25 kJ"},
  {quostion: "72 km/saat tezlikte háreketleniwshi massası 1 t deneniń kinetikalıq energiyası qanday?", a: "200 kJ", b: "175 kJ", c: "150 kJ", d: "125 kJ"},
  {quostion: ".Eger ideal gazdıń turaqlı konsentraciyadaǵı basımı 2 ret artsa, onıń absalyut temperaturası...", a: "2 ese artadı", b: "2 ese kemeydi", c: "4 ese artadı", d: "4 ese kemeyedi"},
  {quostion: "Elektr zaryadining birligi ...", a: "kulon", b: "amper", c: "volt", d: "om"},
  {quostion: "Elektr maydan kernewliliginiń birligi ...", a: "Volt/metr", b: "Amper/metr", c: "Om/metr", d: "Kulon/metr"},
  {quostion: "Eki noqatlıq elektr zaryadları arasındaǵı aralıq 2 ret, hár eki zaryadtıń muǵdaarı bolsa 2 ret artadı. Zaryadlar arasındaǵı tásirlesiw kúshi...", a: "ózgermeydi", b: "4 ret kemeydi", c: "8 ret kemeydi", d: "16 ret kemeydi"},
  {quostion: "egis hawa kondansatori C sıyımlılıqqa iye. Eger plastinkaları arasındaǵı aralıq 3 ret kemeytirilse, onıń sıyımlılıqı qanday ózgeredi?", a: "3 ret artadı", b: "3 ret azayadı", c: "9 ret artadı", d: " 9 ret azayadı"},
  {quostion: "Tegis hawa kondansatori C=?", a: "q/U", b: "I/t", c: "Bqvsina", d: "F/q"},
  {quostion: "Elektr qarsılıǵı birligi ...", a: "om", b: "amper", c: "volt", d: "kulon"},
  {quostion: "1Om=…", a: "V/A", b: "Tl/C", c: "J/s", d: "C/V"},
  {quostion: "Kirxgovtıń birinshi qaǵıydası:...", a: "túyinge kiretuǵın toklardıń algebralıq jıyındısı nolǵa teń", b: "túyinge kiretuǵın toklardıń algebralıq jıyındısı birge teń", c: "túyinge kiretuǵın zaryadlardıń algebralıq jıyındısı nolǵa teń", d: "túyinge kiretuǵın zaryadlardıń algebralıq jıyındısı birge teń"},
  {quostion: "Qanday dielektrikler polyarlanǵan dep ataladı?", a: "Sırtqı elektr maydan bolmaǵanda da, oń hám teris zaryadlardıń «awırlıq orayları» sáykes túspeydi.", b: "Sırtqı elektr maydan bolmaǵanda dielektriktegi molekulalarda oń hám teris zaryadlardıń «awırlıq orayları» sáykes túsedi hám molekulalar dipol momentleri teń.", c: "Sırtqı elektr maydan bolmaǵanda dielektriktegi molekulalarda oń hám teris zaryadlardıń «awırlıq orayları» sáykes túspeydi hám dipol momentleri nolden ayrıqsha", d: "Olardıń kristall torı teris zaryadlanǵan ionlardan quralǵan."},
  {quostion: "Polyarlanıw vektorı neni ańlatadı?", a: "Dielektriktiń birlik kólemdegi dipol momenti.", b: "Dielektrik molekulalarınıń dipol momenti.", c: "Dielektrik ishindegi elektr maydan kernewliligi hám elektr maydan kóshiw vektorı arasındaǵı baylanıs.", d: "Dielektriktiń polyarlanıw dárejesi."},
  {quostion: "Polyarlanbaǵan molekulalar ushın polyarlanıwdıń qaysı túri xarakterli:", a: "Elektron yamasa deformaciyalı polyarlanıw", b: "Orientacion yamasa dipollı polyarlanıw", c: "Ionlı polyarlanıw", d: "Hámmesi"},
  {quostion: "Polyarlanǵan molekulalar ushın polyarlanıwdıń qaysı túri xarakterli.", a: "Orientacion yamasa dipollı polyarlanıw", b: "Elektron yamasa deformaciyalı polyarlanıw", c: "Ionlı polyarlanıw", d: "Hámmesi "},
  {
    quostion: "Metallı ótkizgishlerde zaryad tasıwshılar neler esaplanadı?",
    a: "Erkin elektronlar",
    b: "Oń hám keri ionlar",
    c: "juwap",
    d: "juwap"
  },
  {
    quostion: "Tok tıǵızlıǵı ushın tariyp beriń",
    a: "Ótkizgishtiń kese kesimi birlik maydanı arqalı ótetuǵın tok kúshine san jaǵınan teń bolǵan shama.",
    b: "Ótkizgishtiń kese kesiminen waqıt birligi ishinde ótetuǵın zaryadqa san jaǵınan teń bolǵan shama.",
    c: "Maydan kernewliliginiń sińiriwshilikke kóbeymesine teń bolǵan skalyar shama",
    d: "Ótkizgish birlik maydanı arqalı ótetuǵın zaryadqa teń bolǵan shama."
  },
  {
    quostion: "4 s ishinde kontur arqalı magnit aǵımı 10 Vb den 2 Vb ge shekem bir tegis azayadı. Kontur daǵı induksiya EQK iniń mánisi nege teń bolǵan?",
    a: "2 V",
    b: "1 V",
    c: "0,5 V",
    d: "0,25 V"
  },
  {
    quostion: "Eger maydan induksiyasın 2 ret kemeytirilse, bir tekli magnit maydanında elektron sızǵan sheńber radiusı qanday ózgeredi?",
    a: "2 ret artadı",
    b: "2 ret azayadı",
    c: "4 ret azayad",
    d: "4 ret artadı"
  },
  {
    quostion: "Zaryadlanǵan bólekshe bir tekli magnit maydan kúsh sızıqlarına perpendikulyar túrde v tezlik penen háreketlenip atır. Eger tezlikti 2 ret asırılsa, bólekshediń aylanıw dáwiri qanday ózgeredi?",
    a: "2 ret azayadı",
    b: "4 ret azayadı",
    c: "2 ret artadı",
    d: "Ózgermeydi"
  },
  {
    quostion: "Tok kúshi 10 A bolǵanda, induktivligi 0,2 mH li konturda qanday magnit aǵımı payda boladı?",
    a: "2 mVb",
    b: "1 mVb",
    c: "0,5 mVb",
    d: "0,25 mVb"
  },
  {
    quostion: "Induktivligi 2 H bolǵan konturda, tok kúshiniń qanday mánisinde kontur arqalı magnit aǵımı 4 Wb ga teń boladı?",
    a: "2 A",
    b: "1 A ",
    c: "0,5 A",
    d: "0,25A"
  },
  {
    quostion: "Bir tekli magnit maydanına α múyesh astında, turaqlı tezlik penen ushıp kirgen proton kúsh sızıqları baǵıtına salıstırǵanda qanday traektoriya boyınsha háreketlenedi?",
    a: "Vinttárizli sızıq boylap",
    b: "Tuwrı sızıq boylap",
    c: "Ellips boylap",
    d: "Sheńber boylap"
  },
  {
    quostion: "Magnit maydan indukсiyasi’ni’n’ B moduli ha’m magnit maydang’a kirip barg’an maydan S ha’m indukciya vektori’ B arasi’ndag’i’ mu’yesh kosinusi’na ten’ fizikali’q shama ne dep ataladi?",
    a: "Magnit ag’imi",
    b: "Induktivlik",
    c: "Magnit induksiya",
    d: "Magnit maydan energiyasi."
  },
  {
    quostion: "Qaysi’ fizikali’q shamani’n’ o’lshem birligi 1 Genri?",
    a: "Induktivlik",
    b: "Elektr quwatli’li’g’i’",
    c: "O‘z-ara indukciya",
    d: "Magnit maydan indukciyasi’"
  },
  {
    quostion: "O’tkizgishlerdegi indukciya togi’ ...",
    a: "elektronlardi’n’ ta’rtipli ha’reketi.",
    b: "pozitronlardi’n’ ta’rtipli ha’reketi.",
    c: "teris ionlardi’n’ ta’rtipli ha’reketi.on’ ionlardi’n’ ta’rtipli ha’reketi.",
    d: "on’ ionlardi’n’ ta’rtipli ha’reketi."
  },
  {
    quostion: "Ha’lsiz tokti’ o’lsheytug’i’n quri’lma ne dep ataladi’?",
    a: "galvanometr.",
    b: "barometr.",
    c: "termometr.",
    d: "tranzistor."
  },
  {
    quostion: "Uzi’nli’g’i’ 10 sm bolg’an o’tkizgishke 0,05 N ku’sh ta’sir etetug’i’n magnit maydan indukciyasi’n ani’qlan’. O’tkizgishtegi tok ku’shi 25",
    a: "O’tkizgish magnit maydan indukciyasi’na perpendikulyar jaylasqan. || 0,02 Tl",
    b: "0,02 Tl",
    c: "0,01 Tl",
    d: "0,002 Tl"
  },
  {
    quostion: "O’tkizgishtegi tok ku’shi 50 A, magnit indukciya vektori’ 0,01 Tl, uzi’nli’g’i’ 20 sm bolg’an o’tkizgishke magnit maydan qanday ku’sh penen ta’sir etedi? Maydan indukciya si’zi’qlari’ ha’m ag’i’m o’z-ara perpendikulyar.",
    a: "0,1 N",
    b: "0,01 N",
    c: "0,02 N",
    d: "0,03 N"
  },
  {
    quostion: "Elektron magnit maydang’a 10 Mm/s tezlikte ushi’p kiredi, maydan indukciyasi’ 0,6 Tl, maydanni’n’ elektrong’a ta’sir etetug’i’n ku’shi 0,4 pN. Elektron magnit indukciya si’zi’qlari’na qanday mu’yesh asti’nda ushi’b kirgen.",
    a: "24,6",
    b: "2,46",
    c: "49,2",
    d: "4,92"
  },
  {
    quostion: "Ha’reketleniwshi zaryadlang’an bo’lekshege magnit maydan ta’repinen ta’sir etetug’i’n ku’sh formulasi’n ko’rsetin’.",
    a: "F=qvB sina",
    b: "F=Iql sina",
    c: " F=ma",
    d: "F=vBl sina"
  },
];

answersDB().forEach((item, index) => {
  console.log(item.a)


  const container = document.createElement('div')
  container.innerHTML = `

      <ul class="test-list">
      <span class="quostion-text">${index + 1}. ${item.quostion}</span>
            <li class="test-item">
              <label>
                <input type="radio" name="${index}"> ${item.a}
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
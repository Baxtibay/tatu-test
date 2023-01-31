const form = document.querySelector('.form');


const answersDB = () => [
  {quostion: "Qaraqalpaq ádebiy tiliniń rawajlanıw tariyxı qaysı dáwirden baslanadı?", answer: "XX ásirden"},
  {quostion: "Qaraqalpaq tiliniń  milliy jazıwı 1928-jılǵa deyin qaysı álipbe tiykarında júrgizildi?", answer: "arab"},
  {quostion: "Házirgi hárekettegi álipbedegi ózgerisler qashan qabıl etildi?", answer: "2016-jıl 10-iyunda"},
  {quostion: "Qaraqalpaq tili qanday jollar menen rawajlanadı?", answer: "ishki múmkinshilikler hám sırtqı tásir arqalı"},
  {quostion: "Ádebiy tildiǹ normaları tiykarında sheber, tásirli sóylep hám jaza biliw ádisiniǹ jıyındıǵı de dep ataladı?", answer: "Ólshem"},
  {quostion: "Publitsistik stilge tán  ózgeshelik?", answer: "saltanatlılıq, kóterińkilik"},
  {quostion: "Kórkem stilge tán ózgeshelik qaysı juwapta berilgen?", answer: "Obrazlılıq, estetik  tásir etiw wazıypası"},
  {quostion: "Rasmiy is qaǵazları stiliniǹ ózine tán ózgesheligin kórsetiǹ? ", answer: "turaqlı"},
  {quostion: "Nızamlar, jobalar, deklaraciya, shaqırıqlar, kelisimler, ustavlar, kodeksler, húkimetlik xabarlar qaysı stilge tán?", answer: "rásmiy stil"},
  {quostion: "M.Qashqariydiǹ «Devonu luǵatit at-turk» kitabı hár tárepleme izertlewdi talap etedi. Berilgen gáp qaysı stilge tán?", answer: "ilimiy stil"},
  {quostion: "Ilimiy stilge tán ózgeshelik?", answer: "Sóz va atamalardı qollanıw"},
  {quostion: "Monografiyalıq izertlewlerdiń, kitapshalardıń, joqarı hám orta arnawlı oqıw orınlarına arnalǵan sabaqlıqlar tili qaysı stilge túrine kiredi?", answer: "ilimiy stil"},
  {quostion: "Ilim hám texnikanıń, óndiris hám awıl xojalıǵınıń hár túrli tarawına qatnaslı qollanılatuǵın sózler….dep ataladı.", answer: "atamalar"},
  {quostion: "Metallardıń oksidleri onda eriydi, al metall erimeydi. Bul gáp stildiń qaysı túrine kiredi?", answer: "ilimiy stil"},
  {quostion: "Qaraqalpaqstan Respublikasında latın jazıwına tiykarlanǵan jańa álipbe qashan qabıl etildi?", answer: "1994-jıl 26-fevral"},
  {quostion: "Rásmiy is qaǵazları leksikası?", answer: "Rásmiy qatnasta arnawlı túrde  qollanılatuǵın  sózler rásmiy is qaǵazları leksikası boladı (arza, guwalıq, bayanat, buyrıq)"},
  {quostion: "Nızamlar, jobalar, deklaraciya, shaqırıqlar, kelisimler, ustavlar, kodeksler, húkimetlik xabarlar qaysı stilge tán?", answer: "rásmiy stil"},
  {quostion: "Kún tártibi, qarar, tıńlandı, maqullaw, soranıw, málim etiw sıyaqlı sózler qaysı  stilge tán birlikler?", answer: "rásmiy sti"},
  {quostion: "Qaysı qatarda hújjetlerge tán sózler tolıq berilgen?", answer: "eskertiw, jaza, sógis, guwalıq"},
  {quostion: "Tek bir ǵana máseleni óz ishine alatugın hújjet qanday hújjet?", answer: "ápiwayı"},
  {quostion: "Qanday da bir mákeme yaki lawazımlı shaxs tárepinen tayarlanatuǵın hújjetler....", answer: "rásmiy"},
  {quostion: "Hújjetler tayarlawına qaray.....", answer: "shızbaylama, túp nusqa, nusqa, ekinshi nusqa (dublikat), kóshirme"},
  {quostion: "Konstituciyalıq huqıqta mámleket basshısı hám orınlawshı hákimiyat organları tárepinen wákillikleri sheńberinde shıǵarılatuǵın hújjet?", answer: "biylik"},
  {quostion: "“JÚKLEYMEN”, “USÍNÍS ETEMEN” sózleri qaysi hújjette qollaniladi?", answer: "Juwap"},
  {quostion: "Buyrıqlar mazmunı boyınsha neshege bólinedi?", answer: "2"},
  {quostion: "Xızmetkerdi jumısqa qabıl etip alǵanda yamasa jumıstan bosatılǵanda, basqa jumısqa ótkerilgende, xızmet babında sıylıqlanǵanda, miynet dem alısın bergende, sonday-aq jeke adamǵa tán basqa da máselelerge baylanıslı buyriq turi?", answer: "kadrlardıǹ jeke quramına tiyisli"},
  {quostion: "Qaysı hújjet túri basshı talap etiwi menen jazıladı?", answer: "Túsinik xat"},
  {quostion: "Qaysı hújjet túri bir ǵana nusqada tayarlanadı hám aqsha yamasa qımbat bahalı hújjet sıyaqlı saqlanadı?", answer: "Til xat"},
  {quostion: "Juwap xattı talap etiwshi xatlar qaysilar?", answer: "dawa xat, soraw xat, iltimas xat"},
  {quostion: "Sózlerdi durıs aytıw qaǵıydalarınıń jıynaǵı ne dep ataladı?", answer: "orfoepiya"},
  {quostion: "Ilimiy stilde terminlerdiń qollanılıwı qaysı ózgesheliginde úyreniledi?", answer: "Leksikalıq ózgeshelikleri"},
  {quostion: "astıyıqlawshı xat, qosımsha xat, kepillik xatları xızmet xatlarınıń qaysı túrine kiredi?", answer: "Juwap talap etpeytuǵın xatlar"},
  {quostion: "Mórlеrgе jаzılǵаn jаzıwlаr qaysı tekst túrine kiredi?", answer: "Sfrаgistliк tекst"},
  {quostion: "Mákemelerde, keńselerde xabar túrindegi metodikalıq máseleler, buyrıqlar, jorıqnamalar hám taǵı basqa hújjetlerdiń orınlanıwı menen baylanıslı bolǵan shólkemlestiriw máseleleri boyınsha shıǵarılatuǵın huqıqıy hújjetne dep ataladı?", answer: "kórsetpe"},
  {quostion: "Intervyu sózi qaysı tilden alınǵan hám qanday máni aǹlatadı?", answer: "ingliz, diydarlasıw"},
  {quostion: "Qıstırmаlı - кórgizbе jаzbа tекstlеr qaysı tekst túrine kiredi?", answer: "Juwap"},
  {quostion: "Mákeme xızmetine tiyisli waqıya hám hádiyselerdi rásmiy ráwishte sáwlelendiredi hám tastıyıqlaydı, xabar beriwshi qásiyetke iye bolǵan hár qıylı maǵlıwmatlardı óz ishine alatuǵın hújjet túri ne dep ataladı?", answer: "Xızmet maǵlıwmatnaması"},
  {quostion: "Grammatıkalıq norma neni úyretedi?", answer: "gáp dúziw, sóz hám qosımtalar arasındaǵı qatnas, baslawısh penen bayanlawıshtıń kelisiwi, ekinshi dárejeli aǵzalardıń bas aǵzalarǵa  baylanısıw jolların, sózlerdiń  orın tártibin úyretedi."},
  {quostion: "Ámir Temur húkimdarlıǵı dáwirinde mámleketlik hújjetler qaysı tilde júrgizilgen?", answer: "turkiy"},
  {quostion: "Qaysı stilde jazılǵan maqalada socialliq ómir hádiyseleri analiz etilip, teoriyalıq hám globallıq tárepten úyrenip shıǵıladı?", answer: "publicistikalıq stil"},
  {quostion: "Hújjetler tiyisliligine qaray qanday hújjetlerge ajıratıladı?", answer: "rásmiy hám jeke"},
  {quostion: "Bir mákemeniń basqa bir ayıpker mákeme yaki juwapker lawazımdaǵı adamlardan dawagerlik jolı menen aqsha yaki qanday da bir mal-múlkti májbúriy túrde óndirip beriwdi sorap, sud mákemelerine yáki mámleketlik hákimiyatqa jazba túrdegi bildiriwi jazılǵan rásmiy hújjetne dep ataladı?", answer: "dawagerlik arza"},
  {quostion: "Qaysı ózgesheligine kóre hújjetler shólkemlestiriw hújjetleri, biylik hújjetleri, maǵlıwmat xabar hújjetleri hám xızmet   xatları dep júrgiziledi?", answer: "Hákimlik basqarıw islerine kóre"},
  {quostion: "Ádebiy til degen ne?", answer: "xalıq tiliniń jetilisken kórinisi"},
  {quostion: "Sóylesiw stilinde frazeologizmlerdiń qollanılıwı qaysı ózgesheliginde úyreniledi?", answer: "Leksikalıq ózgeshelikleri"},
  {quostion: "Búgingi kúnniǹ talabınan kelip shıǵıp, redakciya tárepinen jazılatuǵın maqala túri qalay ataladı?", answer: "bas maqala"},
  {quostion: "Tеlеgrаmmа, mаǵlıwmаtnаmа, аrzа, isеnim хаt, dаǵаzаlаr qaysı tekst túrine кirеdi?", answer: "miкrоtекst"},
  {quostion: "Reportaj sózi qaysı tilden alınǵan hám qanday máni aǹlatadı?", answer: "ingliz, jetkeriw"},
];

answersDB().forEach((item, index) => {
  console.log(item.a)


  const container = document.createElement('div')
  container.innerHTML = `
  <ul class="test-list">${index + 1}. <strong>${item.quostion}</strong></legend>
    <li class="test-item">
      <label>
        <input type="radio" name="${index}"> ${item.answer}
      </label>

  </ul>
  `
  form.append(container)
})
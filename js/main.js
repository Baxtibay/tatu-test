const form = document.querySelector('.form');


const answersDB = () => [
  {quostion: "Materiallıq noqat dep", a: "málim massaǵa iye bolǵan,  úyreniletuǵın aralıqlarǵa salıstırǵanda  ólshemi júdá kishi bolǵan denege aytıladı", b: "bul hárekette deneniń barlıq noqatlarınıń háreket traektoriyaları  sheńberlerden ibarat bolıp,  olardıń orayı bolsa aylanıw kósheri dep atalatuǵın tuwrı sızıqta turadı", c: "Hár qanday sharayatta deformaciyalanbaytuǵın dene", d: "Denelerdiń keńisliktegi jaǵdayın anıqlawǵa múmkinshilik beretuǵın,  qózǵalmas dene menen baylanısqan koordinatalar sisteması"},
  {quostion: "keńisliktegi sanaq sisteması dep", a: "Denelerdiń keńisliktegi jaǵdayın anıqlawǵa múmkinshilik beretuǵın,  qózǵalmas dene menen baylanısqan koordinatalar sisteması", b: "Hár qanday sharayatta deformaciyalanbaytuǵın dene", c: "olardıń jaǵdayın basqa,  shártli túrde qozǵalmas dep qabıl etilgen denege  salıstırǵanda anıqlaw kerek.", d: "ol jaǵdayda háreket qılıp atırǵan dene menen bekkem baylanısqan qálegen tuwrı sızıq baslanǵısh jaǵdayına salıstırǵanda parallelligin saqlap qaladı"},
];

answersDB().forEach((item, index) => {
  console.log(item.a)


  const container = document.createElement('div')
  container.innerHTML = `

      <ul class="test-list">${index + 1}. ${item.quostion}</legend>
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
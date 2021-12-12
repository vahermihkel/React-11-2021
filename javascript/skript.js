console.log("javascript ühendatud");
// 1. string - sõnaline ehk jutumärkidega "sõna"
// 2. number - numbriline ehk lihtsalt number 3
// 3. boolean - kahendväärtus ehk true või false

// 4. object  - objekt ehk võti-väärtus paaridest koosnev {}
// alati vasakul pool võti
// paremal pool on väärtus - string, number, boolean
// neid eristab koolon
let objekt = {nimetus: "Ese1", hind: 6, aktiivne: true, päritolu: {riik: "India", tehas: "SSS"}, koostisosad: ["Pähkel", "Mandel"]};

// kui on ilma jutumärkideta sõna, siis see on viide kuhugi väärtusele
// objekt.nimetus  -- "Ese1"
// toode.hind
// toode.aktiivne

// objekt.päritolu.riik

// ALATI PEAN JÕUDMA: string, number, boolean

let massiiv = [32,12,53,12,54,21];

function saaVanused() {
  if (localStorage.getItem("vanused")) {
    // "[1989,2009,1968,2009,1967,2000,2000,1989]"
    // JSON.parse
    return localStorage.getItem("vanused").split(",");
  } else {
    return [32,12,53,12,54,21];
  }
}

// massiiv = ["ASDA","ADSASD"];

// [32,12,53,12,54,21].map(siiaTulebElemendiVäärtus => 
//        minnakse edasi funktsiooni tegema kui väärtus muutub)
//                .map(32 => 1989)    [1989,12,53,12,54,21]
//                .map(12 => 2009)    [1989,2009,53,12,54,21]
//                .map(53 => 1968)    [1989,2009,1968,12,54,21]
massiiv = saaVanused().map(vanus => 2021-vanus);

document.getElementById("massiiv").textContent = massiiv;

// let eesnimed = ["Tauri", "Pille", "Mati", "Gustav"];
// let telefoniNUmber = [5512312,5512312,5314121,5124112,5135123]
// let vanused = [32,12,53,12,54,21];

// let objektid = [
//   {eesnimi: "Tauri", telefoniNumber: 5512312, vanus: 32},
//   {eesnimi: "Pille", telefoniNumber: 5314121, vanus: 12},
//   {eesnimi: "Mati", telefoniNumber: 5124112, vanus: 53},
//   {eesnimi: "Gustav", telefoniNumber: 5135123, vanus: 54},
// ]

// objektid = objektid.map(isik => 
//   <div>
//     <div>isik.eesnimi</div>
//     <div>isik.telefoniNumber</div>
//     <div>isik.vanus</div>
//   </div>)

// objektid = objektid.map(isik => 
//   <Isik ees={isik.eesnimi} tel={isik.telefoniNumber} va={isik.vanus} />
// )

// document.getElementById("objektid").textContent = objektid;


document.getElementById("lisa").addEventListener("click",()=>{
  console.log("nupuvajutus töötab");
  let vanusInput = document.getElementById("vanus").value;
  massiiv.push(2021-vanusInput);
  document.getElementById("massiiv").textContent = massiiv;
  localStorage.setItem("vanused",massiiv);
})

// [1989,2009,1968,12,54,21]
// "[1989,2009,1968,12,54,21]"

// JSON.stringify - pane jutumärgid ümber
// "[
//   object Object,
//   object Object,
//   object Object,
//   object Object,
// ]"

let objektid = [
  {eesnimi: "Tauri", telefoniNumber: 5512312, vanus: 32},
  {eesnimi: "Pille", telefoniNumber: 5314121, vanus: 12},
  {eesnimi: "Mati", telefoniNumber: 5124112, vanus: 53},
  {eesnimi: "Gustav", telefoniNumber: 5135123, vanus: 54},
]

document.getElementById("lisa-objekt").addEventListener("click",()=>{
  console.log("nupuvajutus töötab");
  let eesnimiInput = document.getElementById("eesnimi").value;
  let telefoniInput = document.getElementById("telefon").value;
  let vanusInput = document.getElementById("van").value;
  objektid.push(
    {
      eesnimi: eesnimiInput,
      telefoniNumber: telefoniInput,
      vanus: vanusInput
    }
  )
  console.log(objektid);
                // localStorage-st võtmine, otsides seda võtit
  // selle väärtuse muutujasse panemine
  let muutuja = localStorage.getItem("kasutajaVajutanud");
                // localStorage-st saadud muutuja JSON kujule tegemine (by default on String)
  // selle väärtuse muutujasse panemine
  let muutujaMitteStringina = JSON.parse(muutuja);
  // muutujasse kus on JSON kujul väärtused olemas, lisan 1 juurde
  muutujaMitteStringina.push(eesnimiInput);
  // salvestan localstorage-sse selle võtme alusel
                  // teen selle muutuja tagasi Stringi kujule, kuna brauser nõuab sellist kuju
  localStorage.setItem("kasutajaVajutanud", JSON.stringify(muutujaMitteStringina));
})

// let panen ühe korra kõige alguses kui selle muutuja välja kuulutan
let products = []; // tooted on tühjad
let productsFromLS = localStorage.getItem("products"); // võtan localStorage-st
if (productsFromLS) { // kui on olemas
  products = JSON.parse(productsFromLS); // tee JSON kujule
}
// kui ei ole ole olemas: products = []

document.getElementById("tooted").textContent = products;

document.getElementById("lisa-toode").addEventListener("click",()=>{
  products.push("Ese" + (products.length + 1));  // !
  localStorage.setItem("products", JSON.stringify(products));
  document.getElementById("tooted").textContent = products;
});

document.getElementById("kustuta-toode").addEventListener("click",()=>{
  products.splice(0,1);  // !
  localStorage.setItem("products", JSON.stringify(products));
  document.getElementById("tooted").textContent = products;
});

document.getElementById("k-toode").addEventListener("click",()=>{
  let toodeIndex = products.length - 1;
  products.splice(toodeIndex,1);  // !
  localStorage.setItem("products", JSON.stringify(products));
  document.getElementById("tooted").textContent = products;
});


document.getElementById("muuda-toode").addEventListener("click",()=>{
  products[0] = "Muudetud"; // !
  localStorage.setItem("products", JSON.stringify(products));
  document.getElementById("tooted").textContent = products;
});

document.getElementById("m-toode").addEventListener("click",()=>{
  let toodeIndex = products.length - 1;
  products[toodeIndex] = "Ese999"; // !
  localStorage.setItem("products", JSON.stringify(products));
  document.getElementById("tooted").textContent = products;
});


document.getElementById("tyhjenda").addEventListener("click",()=>{
  products = [];  // !
  localStorage.setItem("products", JSON.stringify(products));
  document.getElementById("tooted").textContent = products;
});

document.getElementById("kustuta").addEventListener("click",()=>{
  let j2rjekorranumber = document.getElementById("kustutamis-index").value;
  products.splice(j2rjekorranumber,1);  // !
  localStorage.setItem("products", JSON.stringify(products));
  document.getElementById("tooted").textContent = products;
});

document.getElementById("muuda").addEventListener("click",()=>{
  let j2rjekorranumber = document.getElementById("muutmis-index").value;
  let muutmisTekst = document.getElementById("muutmis-tekst").value;
  products[j2rjekorranumber] = muutmisTekst;  // !
  localStorage.setItem("products", JSON.stringify(products));
  document.getElementById("tooted").textContent = products;
});

document.getElementById("eesti").addEventListener("click",()=>{
  localStorage.setItem("veebilehe_keel", "eesti");
  document.getElementById("keel").textContent = "eesti_keelne_sõna";
})

document.getElementById("inglise").addEventListener("click",()=>{
  localStorage.setItem("veebilehe_keel", "inglise");
  document.getElementById("keel").textContent = "inglise_keelne_sõna";
})

if (localStorage.getItem("veebilehe_keel")==="eesti") {
  document.getElementById("keel").textContent = "eesti_keelne_sõna";
} else if (localStorage.getItem("veebilehe_keel")==="inglise") {
  document.getElementById("keel").textContent = "inglise_keelne_sõna";
}

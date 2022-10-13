const runko = document.getElementsByTagName("body")[0]  /*tällä etsitään html tagia nimeltä body ja monesko body se on (vaikka on vain yksi)*/ 
const otsikko = document.createElement("header")
otsikko.setAttribute("class", "ylatunniste") 
runko.appendChild(otsikko)  /*runko jonka sisällä on div*/ 

const hooykkonen = document.createElement("h1") /*luodaan elementti nimeltä hooykkonen*/
const otsikonteksti1 = document.createTextNode("Tämä on artikkelin otsikko")
otsikko.appendChild(hooykkonen) /*sijoitetaan hooykkonen otsikkoon*/
hooykkonen.appendChild(otsikonteksti1) /*sijoitetaan otsikonteksti1 kappaleen hooykkonen sisään*/

const headerp = document.createElement("p")
const otsikonteksti2 = document.createTextNode("Ensimmäinen kappale. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, provident! Similique, dolorem. Velit laudantium, maiores cumque cupiditate porro, rerum soluta voluptatem incidunt sunt ut est asperiores ex facere adipisci.")
otsikko.appendChild(headerp)
headerp.appendChild(otsikonteksti2)

const section2 = document.createElement("section")
section2.setAttribute("id", "rinnakkain") /*kappaleelle annetiin oma id*/
runko.appendChild(section2)
const kappaleenteksti = document.createElement("p")
const leipateksti = document.createTextNode("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta, quos, magni dignissimos in omnis eos quia enim cum distinctio obcaecati mollitia, atque voluptatum consequatur rem? Inventore, atque tempora? Odio eum impedit mollitia corporis. Esse ipsa quod, nemo velit perspiciatis ipsum?")
kappaleenteksti.appendChild(leipateksti)
section2.appendChild(kappaleenteksti)

const figure = document.createElement("fig")
section2.setAttribute("id", "kuvanpaikka")
var img = document.createElement("img");
img.src = "./images/proxy-image.gif";
figure.appendChild(img);
section2.appendChild(figure)

const footer = document.createElement("footer")
const footerteksti = document.createElement("p")
const section3 = document.createTextNode("@ 2022 Katariina Rikkonen")
footerteksti.appendChild(section3)
footer.appendChild(footerteksti)
runko.appendChild(footer)

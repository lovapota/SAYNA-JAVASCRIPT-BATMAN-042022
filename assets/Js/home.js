//Slide automatique pour les image
let slide = document.getElementById('auto');
let i = 0;
let image = ["assets/Illustrations/Home/Batslider2.png",
    "assets/Illustrations/Home/Batslider3.png",
    "assets/Illustrations/Home/Batslider4.png",
    "assets/Illustrations/Home/Batslider5.png",
    "assets/Illustrations/Home/Batslider6.png",
    "assets/Illustrations/Home/Batslider7.png",
    "assets/Illustrations/Home/Batslider8.png",
    "assets/Illustrations/Home/Batslider9.png",
    "assets/Illustrations/Home/Batslider10.png",
    "assets/Illustrations/Home/Batslider1.png",]
    function changeImg() {
        slide.src = image[i]
            if (i < image.length - 1) {
                i += 1
            } else {
                i = 0
            }
        }
    setInterval('changeImg()', 3000);

//Slide avec des bouttons next et previous
let data = [{//Donne a entre dans HTML
    titre : 'The Dark Knigth',
    num : '9',
    text : `Batman aborde une phase décisive dans sa guerre contre le crime. Avec l'aide du lieutenant de police Gordon et du nouveau procureur Harvey Dent, il entreprend de démanteler les dernière organisations criminelles qui infectent les rues de la ville. L'association s'avère efficace, mais le trio se heurte bientôt à un nouveau génie du crime qui répand la terreur et le chaos dans Gotham : le Joker`,
    lien : 'https://www.youtube.com/embed/UMgb3hQCb08',
    image :`assets/Illustrations/Home/Bathome10_slide_ba.png`,
},
{
    titre : 'The Dark Knight Rises',
    num : '8.4',
    text : `Huit ans ont passé depuis que Batman a disparu, passent du statut de héros à celui de fugitif.Le "Chevalier Noir" a tout sacrifié pour le mieux. Pendant un certain temps, le mensonge a l'effet escompté : la criminalité de Gotham City est presque éliminée par le commissaire James Gordon avec l"unité anticrime d'Harvey Dent. Mais l'arrivée à Gotham de Bane, un terroriste masqué, chamboule l'ordre établi et pousse Bruces à sortir de l'exil qu'il s'est imposé`,
    lien : 'https://www.youtube.com/embed/4g3gR7ICBkw',
    image :`assets/Illustrations/Home/Bathome11_slide_ba.png`,
},
{
    titre : 'Batman Begins',
    num : '8.2',
    text : `Le jeune Bruce Wayne assiste impuissant au meurtre de ses parents. Profondément traumatisé, il grandit obnubilé par un désir de vengeance. La Ligue des ombres, une secte de guerriers ninja dirigée par Ra's al Ghul, se chargera de son entraînement. De retour chez lui à Gotham, avec l'aide de son majordome Alfred Pennyworth, Bruce Wayne se lance alors dans la lutte contre le crime sous le nom de Batman.`,
    lien :`https://www.youtube.com/embed/jXrFsn9pcZY`,
    image :`assets/Illustrations/Home/Bathome8.png`,
},]
//Variable a utilise
const titreS = document.getElementById('titre');
const numS = document.getElementById('num');
const texS = document.getElementById('textSlide');
const srcS = document.getElementById('iframe');
const sary = document.getElementById('saryS');
//Variable boutton
const btnNext = document.getElementById('next');
const btnPrevious = document.getElementById('previous');
let j = 0
btnNext.addEventListener('click', () =>{
    j++
    if(j <= data.length-1){
        titreS.textContent = `${data[j].titre}`;
        texS.textContent = `${data[j].text}`;
        srcS.src = `${data[j].lien}`;
        numS.textContent = `${data[j].num}`;
        sary.src = `${data[j].image}`;
    } else{
        j = 0
    }
});
let a = data.length - 1
btnPrevious.addEventListener('click', () =>{
    a--
    if(a >= 0){
        titreS.textContent = `${data[a].titre}`;
        texS.textContent = `${data[a].text}`;
        srcS.src = `${data[a].lien}`;
        numS.textContent = `${data[a].num}`;
        sary.src = `${data[a].image}`;
    } else{
        a = data.length -1
    }
});

//Zoomer
const figure = document.getElementsByTagName('figure');
const fig = Array.from(figure);
const figcaption = document.getElementsByTagName('figcaption');
for(let b = 0; b < fig.length; b++){
    figure[b].addEventListener('mouseenter', () => {
        figcaption[b].style.display = 'flex';
    })
    figure[b].addEventListener('mouseleave', () => {
        figcaption[b].style.display = 'none';
    })
};

//Action du boutton confirm
const confirmation = document.getElementsByClassName('confirm');
const contact = document.getElementsByClassName('contact');
const promptM = document.getElementById('prompt');
const one = document.getElementById('one');
const two = document.getElementById('two');

confirmation[0].addEventListener('click', () => {
    contact[0].style.display = 'none';
    one.style.display = 'none';
    two.style.display = 'none';
    promptM.style.display = 'block';
});

//Animation Citation
const dataCitation = [{
citation : `Soit on meurt en héros, soit on vit assez longtemps pour se voir endosser le rôle du méchant.`,
auteur : `The Dark Knight : Le Chevalier Noir `,
date : `Harvey Dent (2008)`,
},
{
citation : `Le héros peut être en chacun, même en celui qui fait une chose aussi simple et rassurante que mettre un manteau sur les épaules d'un garçon et ainsi lui faire comprendre que le monde ne s'est pas écroulé.`,
auteur : `The Dark Knight Rises`,
date : `Batman à James Gordon (2012)`,
},
{
citation : `Ah ! Tu crois que l'obscurité est ton allié. Tu n'a fait qu'adopter la pénombre. Moi je suis né dedans, j'ai été façonné par elle. Je n'ai découvert la lumière qu'a l'âge d'homme, et alors, elle m'a juste paru AVEUGLANTE !`,
auteur : `The Dark Knight Rises `,
date : `Bane à Batman (2012)`,
},
{
citation : `- Je vous prépare la batmoto monsieur ?
- En pleine journée Alfred ? Pas très subtile.
- La Lamborghini alors... beaucoup plus subtile.
`,
auteur : `The Dark Knight: Le Chevalier Noir `,
date : `Alfred et Batman (2008)`,
},
{
citation : `Freeze, t'es givré !`,
auteur : `Batman & Robin `,
date : `Batman à Mr Freeze (1997)`,
},
{
citation : `La peur est un outil. Cette lumière qui déchire le ciel, ce n’est pas qu’un appel à l’aide. C’est un avertissement.`,
auteur : `Batman`,
date : `Batman (2022)`,
},
{
citation : `- Pourquoi tombons nous Bruce ?
- …
- Pour mieux apprendre à nous relever.
`,
auteur : `Batman Begins `,
date : `Thomas Wayne à Bruce Wayne 8 ans (2005)`,
},
{
citation : `Des hommes tombent du ciel, les dieux crachent la foudre, des innoncents meurent. C’est comme cela que ça commence, monsieur. De la fureur, de la fièvre, un sentiment d’impuissance, qui rend les hommes bien… cruels.`,
auteur : `Batman v Superman : l’aube de la justice `,
date : `Alfred à Batman (2016)`,
},
{
citation : `La seule façon raisonnable de vivre en ce bas monde, c'est en dehors des règles.`,
auteur : `The Dark Knight : Le Chevalier Noir`,
date : `Le Joker à Batman (2008)`,
},]
//Variable des citation
const cit = document.getElementById('citation');
const aut = document.getElementById('auteur');
const dat = document.getElementById('date');
let r = 0;
function slideCitation() {
    cit.textContent = `${dataCitation[r].citation}`;
    aut.textContent = `${dataCitation[r].auteur}`;
    dat.textContent = `${dataCitation[r].date}`;
        if (r < dataCitation.length) {
            r += 1
        } else {
            r = 0
        }
    }
setInterval('slideCitation()', 2000);
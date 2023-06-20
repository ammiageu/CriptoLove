
// --------------dark-mode----------//
const btnSwitch = document.querySelector("#switch");
btnSwitch.addEventListener("click", () => {
document.body.classList.toggle("dark");
btnSwitch.classList.toggle("active");

// ---Save dark-mode localStorage---//
if (document.body.classList.contains("dark"))
{
    localStorage.setItem("dark-mode", "true");
}
else{
    localStorage.setItem("dark-mode", "false");
}
});
// -----------current mode----------//
if(localStorage.getItem("dark-mode") === "true"){
    document.body.classList.add("dark");
    btnSwitch.classList.add("active");
}
else {
    document.body.classList.remove("dark");
    btnSwitch.classList.remove("active");
}
// ------------------------------------------------

const imputMessage = document.querySelector("#message");
const imputResult = document.querySelector("#result");
const btnEncrypt = document.querySelector("#encrypt");
const btnDecrypt = document.querySelector("#decrypt");
const btnCopy = document.querySelector("#copy");

function encrypt (){
    var message = imputMessage.value;
    var encryptedMessage = message
    .replaceAll("e", "°")
    .replaceAll("i", "!")
    .replaceAll("o", "#")
    .replaceAll("a", "$")
    .replaceAll("u", "%")
    
   
//    ----------------------------- 
    .replaceAll("b", "&")
    .replaceAll("c", "/")
    .replaceAll("d", "(")
    .replaceAll("f", ")")
    .replaceAll("g", "=")
    .replaceAll("h", "?")
    .replaceAll("j", "¡")
    .replaceAll("k", "@")
    .replaceAll("l", "|")
    .replaceAll("m", "^")
    .replaceAll("n", "¨")
    .replaceAll("ñ", "*")
    .replaceAll("p", "+")
    .replaceAll("q", "~")
    .replaceAll("r", "{")
    .replaceAll("s", "[")
    .replaceAll("t", "<")
    .replaceAll("v", ":")
    .replaceAll("x", "-")
    .replaceAll("z", ">")
    .replaceAll("w", ",")
    .replaceAll("y", ";");

    imputResult.value = encryptedMessage;
}

function decrypt (){
    var message = imputMessage.value;
    var decryptedMessage = message
    .replaceAll("°", "e")
    .replaceAll("!", "i")
    .replaceAll("#", "o")
    .replaceAll("$", "a")
    .replaceAll("%", "u")

  
    //    ----------------------------- 
    
    .replaceAll("&", "b")
    .replaceAll("/", "c")
    .replaceAll("(", "d")
    .replaceAll(")", "f")
    .replaceAll("=", "g")
    .replaceAll("?", "h")
    .replaceAll("¡", "j")
    .replaceAll("@", "k")
    .replaceAll("|", "l")
    .replaceAll("^", "m")
    .replaceAll("¨", "n")
    .replaceAll("*", "ñ")
    .replaceAll("+", "p")
    .replaceAll("~", "q")
    .replaceAll("{", "r")
    .replaceAll("[", "s")
    .replaceAll("<", "t")
    .replaceAll(":", "v")
    .replaceAll("-", "x")
    .replaceAll(">", "z")
    .replaceAll(",", "w")
    .replaceAll(";", "y");

  

    imputResult.value = decryptedMessage;
}

function copy (){
    encryptedMessage = imputResult.value;
    navigator.clipboard.writeText(encryptedMessage);


}

btnCopy.onclick = copy;
btnEncrypt.onclick = encrypt;
btnDecrypt.onclick = decrypt;

function replace(element){
    let texto = element.value
    texto = texto.split(/[A-Z]+/g)
    texto = texto.join("")
    element.value = texto
  }


  const shareBtn = document.querySelector('.share-btn');
const shareOptions = document.querySelector('.share-options');

shareBtn.addEventListener('click', () => {
    shareOptions.classList.toggle('active');
})

const link = encodeURI(window.location.href);
const msg = encodeURIComponent('Hey, I found this article');
const title = encodeURIComponent('Article or Post Title Here');



const twitter = document.querySelector('.twitter');
twitter.href = `http://twitter.com/share?&url=${link}&text=${msg}&hashtags=javascript,programming`;

const fb = document.querySelector('.facebook');
fb.href = `https://www.facebook.com/share.php?u=${link}`;


const whatsapp = document.querySelector('.whatsapp');
whatsapp.href = `https://api.whatsapp.com/send?text=${msg}: ${link}`;


const linkedin = document.querySelector('.linkedin');
linkedin.href = `https://www.linkedin.com/sharing/share-offsite/?url=${link}`;


const telegram = document.querySelector('.telegram');
telegram.href = `https://telegram.me/share/url?url=${link}&text=${msg}`;

const reddit = document.querySelector('.reddit');
reddit.href = `http://www.reddit.com/submit?url=${link}&title=${title}`;

// -------------
const colors = ["#e03776","#8f3e98","#4687bf","#3bab6f","#f9c25e","#f47274"];
const SVG_NS = 'http://www.w3.org/2000/svg';
const SVG_XLINK = "http://www.w3.org/1999/xlink";

let heartsRy = []

function useTheHeart(n){
  let use = document.createElementNS(SVG_NS, 'use');
  use.n = n;
  use.setAttributeNS(SVG_XLINK, 'xlink:href', '#heart');
  use.setAttributeNS(null, 'transform', `scale(${use.n})`);
  use.setAttributeNS(null, 'fill', colors[n%colors.length]);
  use.setAttributeNS(null, 'x', -69);
  use.setAttributeNS(null, 'y', -69);
  use.setAttributeNS(null, 'width', 138);
  use.setAttributeNS(null, 'height', 138);
  
  heartsRy.push(use)
  hearts.appendChild(use);
}

for(let n = 18; n >= 0; n--){useTheHeart(n)}

function Frame(){
  window.requestAnimationFrame(Frame);
  for(let i = 0; i < heartsRy.length; i++){
    if(heartsRy[i].n < 18){heartsRy[i].n +=.01
     }else{
     heartsRy[i].n = 0;
     hearts.appendChild(heartsRy[i])
    }
    heartsRy[i].setAttributeNS(null, 'transform', `scale(${heartsRy[i].n})`);
  }
}

Frame()

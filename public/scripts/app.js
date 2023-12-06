"use strict";

// var template = '<h1>My first react app!</h1>'; //normal javascript-de '' icerisinde yazmaliyam amma react mene dirnaqsiz yazmaga icaze verir: 

//const { nameC } = require("commander");

//var template = <h1>My first react app!</h1>;  //Javascript kodlari arasinda bu formada obyekt kimi html teq-lerini yazmaga imkan verir bu JSX-dir 
// JSX - Jacascript XML demekdir. Biz teq-i bu formada tanitsaq, bunu DOM icerisinde root etiketine atmaq istesem, bu error verecek.
//Bu xetani almamaq ucun biz react vasitesile bu kodlari javascript-in basa duseceyi BABEL komeyile->
//JSX compiler ile browser-in basa duseceyi bir qurulusa cevireceyik. Bu qurulus da bize react obyekti vasitesile bize gelecek. Biz burda xeta aliriq: 
var root = document.getElementById('root'); //

var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
  id: "header"
}, "My first react app!"), /*#__PURE__*/React.createElement("div", null, "Lorem, ipsum dolor."), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Loreasdsdaasdasdm, ipsum."), /*#__PURE__*/React.createElement("li", null, "Lorasdasdasdem, ipsum."), /*#__PURE__*/React.createElement("li", null, "Lorem, ipsum."), /*#__PURE__*/React.createElement("li", null, "Lorem, ipsum.")));
var name = "Samsung s10";
var price = 5000;
var description = "It is very good telephone.";
var product = {
  nameProd: "Samsung s10",
  priceProd: 5000,
  descriptionProd: "It is very good telephone."
};
var template2 = /*#__PURE__*/React.createElement("div", {
  id: "product-details"
}, /*#__PURE__*/React.createElement("h2", {
  id: "product-name"
}, "name: ", product.nameProd), /*#__PURE__*/React.createElement("p", {
  id: "product-price"
}, "price: ", product.priceProd, " AZN"), /*#__PURE__*/React.createElement("p", {
  id: "product-desc"
}, " description: ", product.descriptionProd), /*#__PURE__*/React.createElement("a", {
  href: "https://www.youtube.com/watch?v=CsaEYLLL1CQ&list=PLXuv2PShkuHzbwIbcT29XZJBLyx3nWDzb&index=6"
}, "6-React Dersleri-Jsx Expressions - Sad\u0131k Turan"));

// var template = React.createElement(
//     'h1' //teq
//     ,null //atribut
//     ,'Hello World! I am created by React.createElement()'//teqin text-i
// ); //Amma biz bunu her defe bu cur yazmayacagiq. Biz BABEL adli Javascript yorumlayıcı işlədəcəyik. 
//Biz ES6 kodlari yazarken butun brauzerler bunu anlayacaq deye bir fikir yoxdur. ES2015 = ES6
//Bunun ES5 versiyasi butun brauzerler terefinden desteklenir. 
//Ona gore de Babel islederek, bu ES6, ES7 kodlu javascriptleri brauzer-e tanida bilerik. Babel yeni versiyalari da es5-e cevirir ki, brauzer tanisin.
//babeljs.io saytindan try it out ede bilerik. Yeni nesil JS compiler-dir. 
//https://babeljs.io/docs/plugins - ES6, ES7 ve s ucun pluginlerini mutleq istifade etmek lazimdir. 
//https://babeljs.io/docs/babel-plugin-transform-react-jsx-development - react ile bagli xususiyyetlerine de baxis kecirtmek olar. 
//npm install --save-dev @babel/core @babel/cli         
//--save-dev sadece development-de istifade edende isledilir. --save-g global olaraq, hem dev-de hem de prod-da islede bilerem. 
//Js yazacam, Babel kodlari compile edib cevirecek.
//package.json lazimdir ki, terminal->"npm init -y" ile qura  bilerik. 
//yeniden :->  npm install --save-dev @babel/core @babel/cli 
//package.json-da 
// "devDependencies": {
//     "@babel/cli": "^7.23.4",
//     "@babel/core": "^7.23.5"
//   }, gore bilecem. 

//npm install --save-dev @babel/preset-env
//npm install --save-dev @babel/preset-react

//.babelrc faylina lazim olan preset-leri elave edirem. 
//public/scripts/app.js
//src/app.js 
// npx babel --help    emri ile emrlere baxmaq olar.

// npm install -g @babel/core @babel/cli
//npm babel src/app.js --out-file=public/scripts/app.js   
//source-da olan js kodlarini compile edib, public app.js faylina brauzerin tanidigi ES5 formasinda elave edecek. 
//Artiq fayllar yaranib ve hazirdir. 
//Ona gore de bu faylda neyise deyissem, babel compile etmesi ucun sadece terminalda "--watch" yazmaq kifayetdir.

/*PS D:\DIM\Moodle\WebApi\react-sturan-app> npx babel src/app.js --out-file=public/scripts/app.js --watch
The watcher is ready.*/ //artiq yeniden yazmali deyilem. deyisib SAVE edende ozu compile edir. 

//React obyekti - uygun kitabxanadan gelir. 
//ReactDOM obyekti - uygun kitabxanadan gelir. 

ReactDOM.render(template2, root); //render metodu komeyile elaqeli template(yaratdigimiz goruntu deye bilerik.)-i root icerisine gondere bilerik.
// terminal-da >> live-server public kodu ile run etsek. browser-de xeta verir.
//Uncaught SyntaxError: Unexpected token '<' (at (index):22:16)// Cunki <h1 ve s, sintaksisinde yoxdur, xeta verir.
//Render-den evvel teqlerimi React obyekti ile evvelce element kimi elave etmeli ve sonra render edib sehifemize gonderirik.

// function App() {
//     return (
//         <div>
//             <h1>Hello React!</h1> //Birbasa hmtl kodu yazdim. React library-nin komeyidir
//         </div>
//     );
// }

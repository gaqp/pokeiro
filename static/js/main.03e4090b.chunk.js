(this.webpackJsonppokeeuro=this.webpackJsonppokeeuro||[]).push([[0],{18:function(e,t,a){e.exports=a.p+"static/media/pokedolar.12e55ad5.png"},21:function(e,t,a){e.exports=a(46)},26:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(15),c=a.n(r),i=(a(26),a(2)),s=a.n(i),u=a(4),l=a(16),p=a(17),m=a(3),d=a(19),h=a(20),f=a(18),k=a.n(f),v=a(5),b=a.n(v),g=(a(45),function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).getPokemon=n.getPokemon.bind(Object(m.a)(n)),n.getEuro=n.getEuro.bind(Object(m.a)(n)),n.state={pokemon:{nome:"Missigno",foto:"https://vignette.wikia.nocookie.net/anicrossbr/images/d/d3/Missingno.jpg/revision/latest/scale-to-width-down/180?cb=20180902002439&path-prefix=pt-br",id:0},euro:{compra:0,venda:0}},n}return Object(p.a)(a,[{key:"getEuro",value:function(){var e=Object(u.a)(s.a.mark((function e(){var t=this;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.create({baseURL:"https://economia.awesomeapi.com.br/all/EUR-BRL"}).get("/").then((function(e){console.log(e),t.setState({euro:{compra:e.data.EUR.ask,venda:e.data.EUR.bid}}),t.getPokemon(Math.trunc(100*t.state.euro.compra))}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"getPokemon",value:function(){var e=Object(u.a)(s.a.mark((function e(t){var a=this;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.create({baseURL:"https://pokeapi.co/api/v2/pokemon/".concat(t)}).get("/").then((function(e){console.log(e),a.setState({pokemon:{nome:e.data.name,foto:e.data.sprites.front_default}})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"componentWillMount",value:function(){var e=Object(u.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getEuro();case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"pokeEuro-header"},o.a.createElement("img",{src:k.a,className:"App-logo",alt:"logo"})),o.a.createElement("div",{className:"pokeEuro-body"},o.a.createElement("div",{className:"pokeEuro-card"},o.a.createElement("img",{src:this.state.pokemon.foto,alt:"Fotinha do pokem\xe3o"}),o.a.createElement("br",null),this.state.pokemon.nome,o.a.createElement("br",null),"Cota\xe7\xe3o de venda: ",o.a.createElement("b",null,"R$ ",this.state.euro.compra),o.a.createElement("br",null),"Cota\xe7\xe3o de compra: ",o.a.createElement("b",null,"R$ ",this.state.euro.venda),o.a.createElement("br",null))),o.a.createElement("footer",null,"Esta merda foi copiada de DFCS"))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.03e4090b.chunk.js.map
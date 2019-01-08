(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){},18:function(e,t,a){e.exports=a(40)},24:function(e,t,a){},28:function(e,t,a){},30:function(e,t,a){},32:function(e,t,a){},34:function(e,t,a){},36:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(9),o=a.n(c),l=a(4),s=a(5),i=a(7),u=a(6),m=a(8),p=(a(16),a(24),a(3)),b=function(){return r.a.createElement("div",null,r.a.createElement(p.c,{fluid:!0,id:"titlebar-container"},r.a.createElement(p.g,{id:"titlebar-jumbotron"},r.a.createElement("div",{className:"titlebar font-effect-shadow-multiple"},r.a.createElement("h1",null,"Egg Hunt")))))},h=a(10),E=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).toggle=a.toggle.bind(Object(h.a)(Object(h.a)(a))),a.state={isOpen:!1},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(p.k,{color:"light",light:!0,expand:"md"},r.a.createElement(p.l,{href:"/"},"Egg Hunt"),r.a.createElement(p.m,{onClick:this.toggle}),r.a.createElement(p.b,{isOpen:this.state.isOpen,navbar:!0},r.a.createElement(p.h,{className:"ml-auto",navbar:!0},r.a.createElement(p.i,null,r.a.createElement(p.j,{href:"/components/"},"Components")),r.a.createElement(p.i,null,r.a.createElement(p.j,{href:"https://github.com/reactstrap/reactstrap"},"GitHub")),r.a.createElement(p.o,{nav:!0,inNavbar:!0},r.a.createElement(p.f,{nav:!0,caret:!0},"Options"),r.a.createElement(p.e,{right:!0},r.a.createElement(p.d,null,"Option 1"),r.a.createElement(p.d,null,"Option 2"),r.a.createElement(p.d,{divider:!0}),r.a.createElement(p.d,null,"Reset")))))))}}]),t}(r.a.Component),g=(a(28),function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"scoreBox"},r.a.createElement("h1",null,"Bunny's Egg:",r.a.createElement("span",null,this.props.losses)),r.a.createElement("h1",null,"Your Eggs:",r.a.createElement("span",null,this.props.wins)))}}]),t}(r.a.Component)),d=(a(30),function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(e){return r.a.createElement("div",{className:"goalArea"},r.a.createElement("h1",null,"Goal to meet:",r.a.createElement("span",null,this.props.userGoal)),r.a.createElement("h1",null,"Current Score:",r.a.createElement("span",null,this.props.gameScore)))}}]),t}(r.a.Component)),f=(a(32),function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"playbox"},r.a.createElement("a",{href:"#",onClick:function(){return e.props.clickSum(e.props.boxAmount)}},r.a.createElement("img",{id:"playboxImg",src:this.props.paddle,alt:"Paddle"})))}}]),t}(r.a.Component)),O=(a(34),function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(p.c,{fluid:!0,id:"scoreboard-container"},r.a.createElement(p.g,{id:"scoreboard-jumbotron"},r.a.createElement("div",{className:"playArea"},r.a.createElement(f,{boxAmount:this.props.gameState.box1amount,clickSum:this.props.clickSum,paddle:"./images/purpleEgg.png"}),r.a.createElement(f,{boxAmount:this.props.gameState.box2amount,clickSum:this.props.clickSum,paddle:"./images/yelloEgg.png"}),r.a.createElement(f,{boxAmount:this.props.gameState.box3amount,clickSum:this.props.clickSum,paddle:"./images/pinkEgg.png"}),r.a.createElement(f,{boxAmount:this.props.gameState.box4amount,clickSum:this.props.clickSum,paddle:"./images/mintEgg.png"}))))}}]),t}(r.a.Component));a(36);function j(){return Math.floor(15*Math.random())+1}var x=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={userScore:1,wins:1,games:5,goal:45,box1amount:0,box2amount:0,box3amount:0,box4amount:0},a.resetGame=function(){a.setState({box1amount:j(),box2amount:j(),box3amount:j(),box4amount:j(),userScore:0,goal:Math.floor(45*Math.random())+1})},a.startGame=function(){a.setState({box1amount:j(),box2amount:j(),box3amount:j(),box4amount:j(),userScore:0,wins:0,games:0,goal:Math.floor(45*Math.random())+1})},a.sumBoxes=function(e){var t=a.state.wins+1,n=a.state.games+1,r=a.state.goal,c=a.state.userScore+parseFloat(e);c>r?(alert("Your score is too high "),a.setState({games:n}),a.resetGame()):c<r?a.setState({userScore:c}):c===r?(alert("You won "),a.setState({wins:t}),a.resetGame()):alert("Ooops something went wrong.  Try again.")},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(p.c,{fluid:!0,id:"scoreboard-container"},r.a.createElement(p.g,{id:"scoreboard-jumbotron"},r.a.createElement(p.c,null,r.a.createElement(p.n,null,r.a.createElement(p.a,{xs:"1"}),r.a.createElement(p.a,{xs:"3"},r.a.createElement(g,{wins:this.state.wins,gameScore:this.state.userScore,losses:this.state.games})),r.a.createElement(p.a,{id:"col",xs:"3"},r.a.createElement("a",{href:"#",onClick:this.startGame},r.a.createElement("img",{id:"bunnyPic",src:"./images/bunny.png"}))),r.a.createElement(p.a,{id:"col",xs:"4"},r.a.createElement(d,{userGoal:this.state.goal,gameScore:this.state.userScore}))),r.a.createElement(p.n,null,r.a.createElement(p.a,{id:"col",xs:"12"},r.a.createElement(O,{gameState:this.state,clickSum:this.sumBoxes}))))))}}]),t}(r.a.Component),S=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(b,null),r.a.createElement(x,null),r.a.createElement(E,null))}}]),t}(n.Component);a(38);o.a.render(r.a.createElement(S,null),document.getElementById("root"))}},[[18,2,1]]]);
//# sourceMappingURL=main.fe7f6a2c.chunk.js.map
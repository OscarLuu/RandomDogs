(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){},22:function(e,t,a){e.exports=a(41)},41:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(16),s=a.n(l),c=(a(11),a(6)),r=a(7),i=a(9),d=a(8),m=a(10),u=a(3),h=a(12),p=a.n(h),b=a(42),g=function(){return o.a.createElement("div",{className:"footer-div"},o.a.createElement("p",{class:"text"},"Made by Oscar Luu |"," ",o.a.createElement("a",{href:"https://oscarluu.me",className:"text-footer"},"Personal Portfolio")," ","|"," ",o.a.createElement("a",{href:"https://github.com/OscarLuu",className:"text-footer"},"GitHub")," ","|"," ",o.a.createElement("a",{href:"https://linkedin.com/in/OscarLuu",className:"text-footer"},"LinkedIn")))};function f(){return o.a.createElement("div",null,o.a.createElement("p",{className:"title"},"Dog Breed Showcase"))}var v=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(d.a)(t).call(this,e))).state={showModal:!1},a.handleOpenModal=a.handleOpenModal.bind(Object(u.a)(Object(u.a)(a))),a.handleCloseModal=a.handleCloseModal.bind(Object(u.a)(Object(u.a)(a))),a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"handleOpenModal",value:function(){this.setState({showModal:!0})}},{key:"handleCloseModal",value:function(){this.setState({showModal:!1})}},{key:"render",value:function(){return o.a.createElement("div",{className:"image-div"},o.a.createElement("img",{src:this.props.url,className:"image",onClick:this.handleOpenModal}),o.a.createElement(p.a,{isOpen:this.state.showModal,className:"modal"},o.a.createElement("div",{className:"modal-div"},o.a.createElement("img",{src:this.props.url,onClick:this.handleCloseModal,onAfterOpen:this.handleCloseModal,className:"modal-image"}))))}}]),t}(n.Component),O=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(d.a)(t).call(this,e))).state={dogs:[],dogSelected:"",dogImg:""},a.handleChange=a.handleChange.bind(Object(u.a)(Object(u.a)(a))),a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"handleChange",value:function(e){var t=this;this.setState({dogSelected:e.target.value}),fetch("https://dog.ceo/api/breed/"+e.target.value+"/images/random").then(function(e){return e.json()}).then(function(e){var a=Object.values(e);t.setState({dogImg:a[1]})})}},{key:"componentDidMount",value:function(){var e=this;fetch("https://dog.ceo/api/breeds/list/all").then(function(e){return e.json()}).then(function(t){var a=Object.keys(t.message);e.setState({dogs:a})})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"container"},o.a.createElement(f,null),o.a.createElement("form",null,o.a.createElement("label",{className:"text"},"Get awesome pictures of different breeds of dogs:"," ",o.a.createElement("select",{value:this.state.dogSelected,onChange:this.handleChange,className:"select"},o.a.createElement("option",{selected:!0,disabled:!0,className:"options"}),this.state.dogs.map(function(e){return o.a.createElement("option",{key:e,value:e,className:"options"},e.slice(0,1).toUpperCase()+e.slice(1,e.length))})))),o.a.createElement(v,{url:this.state.dogImg}),o.a.createElement("div",{className:"button-div"},this.state.dogSelected?o.a.createElement(b.a,{to:{pathname:"/moredogs",search:"?dog="+this.state.dogSelected,state:{dogBreed:this.state.dogSelected}},className:"more-button"}," ","More Pictures"," "):null)),o.a.createElement(g,null))}}]),t}(o.a.Component),E=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(d.a)(t).call(this,e))).handleOpenModal=function(e){a.setState({showModal:!0,currentImg:e})},a.state={showModal:!1,currentImg:""},a.handleCloseModal=a.handleCloseModal.bind(Object(u.a)(Object(u.a)(a))),a.handleOpenModal=a.handleOpenModal.bind(Object(u.a)(Object(u.a)(a))),a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"handleCloseModal",value:function(){this.setState({showModal:!1})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("p",{className:"title-more"},"Pictures of"," ",this.props.breed.slice(0,1).toUpperCase()+this.props.breed.slice(1,this.props.breed.length),"s"),o.a.createElement("div",{className:"image-gallery"},this.props.data.slice(0,this.props.limit).map(function(t){return o.a.createElement("div",{className:"image-gallery"},o.a.createElement("img",{key:t,src:t,className:"more-image",onClick:function(){return e.handleOpenModal(t)}}))})),o.a.createElement(p.a,{isOpen:this.state.showModal,className:"modal-more"},o.a.createElement("img",{src:this.state.currentImg,onClick:this.handleCloseModal,className:"modal-image-more"})),o.a.createElement("div",{className:"button-center"},o.a.createElement("button",{onClick:this.props.onClick,className:"button"},"Load More")))}}]),t}(n.Component),j=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(d.a)(t).call(this,e))).state={dogImages:null,limit:6},a.onLoadMore=a.onLoadMore.bind(Object(u.a)(Object(u.a)(a))),a}return Object(m.a)(t,e),Object(r.a)(t,[{key:"onLoadMore",value:function(){this.setState({limit:this.state.limit+6})}},{key:"componentDidMount",value:function(){var e=this,t=this.props.location.state.dogBreed;fetch("https://dog.ceo/api/breed/"+t+"/images").then(function(e){return e.json()}).then(function(t){return e.setState({dogImages:t.message})})}},{key:"render",value:function(){return o.a.createElement("div",{className:"container-more"},o.a.createElement("div",{className:"more-button-div"},o.a.createElement(b.a,{to:"/",style:{textDecoration:"none"},className:"back-button"},"Go Back")),o.a.createElement("div",null,this.state.dogImages?o.a.createElement(E,{data:this.state.dogImages,onClick:this.onLoadMore,limit:this.state.limit,breed:this.props.location.state.dogBreed}):o.a.createElement("p",{className:"title"},"Loading...")))}}]),t}(n.Component),M=a(43),N=a(44),k=a(45),C=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement(M.a,null,o.a.createElement("div",null,o.a.createElement(N.a,null,o.a.createElement(k.a,{exact:!0,path:"/",component:O}),o.a.createElement(k.a,{path:"/moredogs",component:j}),o.a.createElement(k.a,{render:function(){return o.a.createElement("div",{className:"container"},o.a.createElement("p",{className:"title"}," 404! Sorry page not found."),o.a.createElement("div",{className:"button-div"},o.a.createElement(b.a,{to:"/",className:"button"}," ","Go Home"," ")))}}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[22,2,1]]]);
//# sourceMappingURL=main.5383bdc6.chunk.js.map
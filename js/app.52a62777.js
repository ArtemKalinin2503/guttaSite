(function(e){function t(t){for(var i,n,o=t[0],l=t[1],c=t[2],m=0,u=[];m<o.length;m++)n=o[m],Object.prototype.hasOwnProperty.call(a,n)&&a[n]&&u.push(a[n][0]),a[n]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);_&&_(t);while(u.length)u.shift()();return r.push.apply(r,c||[]),s()}function s(){for(var e,t=0;t<r.length;t++){for(var s=r[t],i=!0,o=1;o<s.length;o++){var l=s[o];0!==a[l]&&(i=!1)}i&&(r.splice(t--,1),e=n(n.s=s[0]))}return e}var i={},a={app:0},r=[];function n(t){if(i[t])return i[t].exports;var s=i[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=i,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(s,i,function(t){return e[t]}.bind(null,i));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var _=l;r.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"3fea":function(e,t,s){e.exports=s.p+"img/slide_3.4d603f03.jpg"},"45a7":function(e,t,s){e.exports=s.p+"img/img_1.20347676.jpg"},"569e":function(e,t,s){},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"app__wrapper",attrs:{id:"app"}},[s("Header"),s("Slider"),s("About"),s("News"),s("FormSubscription"),s("Footer")],1)},a=[],r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[e._m(0),s("div",{ref:"headerMain",staticClass:"header__wrapper"},[e.showMobileNav?s("div",{staticClass:"header__mobile"},[s("div",{staticClass:"header__mobile-section"},[s("nav",[s("ul",{staticClass:"header__mobile-list"},e._l(this.navigation,(function(t,i){return s("li",{staticClass:"header__mobile-item"},[s("a",{ref:"mobileItem",refInFor:!0,staticClass:"header__mobile-link",attrs:{href:t.href},on:{click:function(t){return e.mobileItemClick(i)}}},[e._v(e._s(t.name))]),s("ul",{ref:"mobileSubmenu",refInFor:!0,staticClass:"header__mobile-submenu"},e._l(t.submenu,(function(t){return s("li",{staticClass:"header__mobile-submenu-item"},[s("a",{staticClass:"header__mobile-submenu-link",attrs:{href:t.link}},[e._v(e._s(t.name))])])})),0)])})),0)])]),e._m(1)]):e._e(),s("div",{staticClass:"header__section header__section_main"},[e._m(2),s("nav",{staticClass:"header__nav"},[s("ul",{staticClass:"header__nav-list"},e._l(this.navigation,(function(t,i){return s("li",{staticClass:"header__nav-item"},[s("a",{ref:"navLink",refInFor:!0,staticClass:"header__nav-link",attrs:{href:t.href},on:{mouseover:function(t){return e.activeLink(i)}}},[e._v(e._s(t.name))]),s("div",{staticClass:"header__dropdown",on:{mouseover:function(t){return e.activeLink(i)},mouseout:e.visibleSubmenu}}),s("ul",{ref:"navSubmenu",refInFor:!0,staticClass:"header__nav-submenu",on:{mouseover:function(t){return e.activeLink(i)}}},e._l(t.submenu,(function(t){return s("li",{staticClass:"header__nav-submen-item"},[s("a",{attrs:{href:t.link}},[e._v(e._s(t.name))])])})),0)])})),0)]),s("div",{staticClass:"header__btn-wrapper"},[s("button",{staticClass:"header__btn-showNaw",class:e.showMobileNav?"menuMobileActive":"menuMobileNoActive",on:{click:e.visibleNavMobile}})]),e._m(3)])])])},n=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"header__block header__block__color"},[s("div",{staticClass:"header__section"},[s("div",{staticClass:"header__info"},[s("a",{staticClass:"header__info-link",attrs:{href:"#"}},[e._v("Режим работы")]),s("a",{staticClass:"header__info-link",attrs:{href:"#"}},[e._v("Правила посещения")])])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"header__mobile-section"},[s("div",{staticClass:"header__mobile-enter"},[s("a",{staticClass:"header__mobile-enter-link",attrs:{href:"#"}},[e._v("Вход")]),s("a",{staticClass:"header__mobile-enter-link",attrs:{href:"#"}},[e._v("Регистрация")])]),s("div",{staticClass:"header__mobile-info"},[s("a",{staticClass:"header__mobile-info-link",attrs:{href:"#"}},[e._v("Режим работы")]),s("a",{staticClass:"header__mobile-info-link",attrs:{href:"#"}},[e._v("Правила посещения")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"header__logo"},[s("a",{staticClass:"header__logo-link",attrs:{href:"#"}},[e._v("Logotype")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"header__enter"},[s("a",{staticClass:"header__enter-link",attrs:{href:"#"}},[e._v("Регистрация")]),s("a",{staticClass:"header__enter-link",attrs:{href:"#"}},[e._v("Вход")])])}],o=s("5530"),l=s("2f62"),c={name:"Header",props:{msg:String},data:function(){return{showDropdown:!1,showMobileNav:!1,navigation:[{name:"Меню",href:"#",submenu:[{name:"Меню 1",link:"#"},{name:"Меню 1",link:"#"},{name:"Меню 1",link:"#"}]},{name:"Меню",href:"#",submenu:[{name:"Меню 2",link:"#"},{name:"Меню 2",link:"#"},{name:"Меню 2",link:"#"}]},{name:"Меню",href:"#",submenu:[{name:"Меню 3",link:"#"},{name:"Меню 3",link:"#"},{name:"Меню 3",link:"#"}]},{name:"Меню",href:"#",submenu:[{name:"Меню 4",link:"#"},{name:"Меню 4",link:"#"},{name:"Меню 4",link:"#"}]},{name:"Меню",href:"#",submenu:[{name:"Меню 5",link:"#"},{name:"Меню 5",link:"#"},{name:"Меню 5",link:"#"}]},{name:"Меню",href:"#",submenu:[{name:"Меню 6",link:"#"},{name:"Меню 6",link:"#"},{name:"Меню 6",link:"#"}]}]}},computed:Object(o["a"])({},Object(l["c"])(["getCount"]),{},Object(l["d"])(["count"])),mounted:function(){console.log(this.count)},created:function(){window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},methods:Object(o["a"])({},Object(l["b"])(["actIncrement"]),{activeLink:function(e){for(var t=this.$refs.navLink[e],s=document.getElementsByClassName("header__nav-link"),i=0;i<s.length;i++)s[i].classList.remove("header__nav-link_active");t.classList.add("header__nav-link_active")},visibleSubmenu:function(){for(var e=document.getElementsByClassName("header__nav-link"),t=0;t<e.length;t++)e[t].classList.remove("header__nav-link_active")},mobileItemClick:function(e){var t=this.$refs.mobileSubmenu[e];t.classList.toggle("active")},visibleNavMobile:function(){this.showMobileNav=!this.showMobileNav,this.showMobileNav?document.querySelector("body").style.overflow="hidden":document.querySelector("body").style.overflow="auto"},handleScroll:function(e){var t=window.pageYOffset,s=this.$refs.headerMain.getBoundingClientRect().top,i=this.$refs.headerMain;t>s?i.classList.add("stiky"):i.classList.remove("stiky")}})},_=c,m=s("2877"),u=Object(m["a"])(_,r,n,!1,null,null,null),f=u.exports,p=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"slider__wrapper"},[s("carousel",{attrs:{loop:!0,items:1,navText:["",""],autoplay:!0}},[e._l(this.slides,(function(t){return s("div",[t.textTitle?s("ul",{staticClass:"slider__list-info"},[s("li",{staticClass:"slider__list-info-item slider__list-info-item_plashka"},[e._v(e._s(t.textTitle))]),s("li",{staticClass:"slider__list-info-item slider__list-info-item_textDescription"},[e._v(e._s(t.textDescription))]),s("li",{staticClass:"slider__list-info-item slider__list-info-item_textMini"},[e._v(e._s(t.textMini))])]):e._e(),s("a",{staticClass:"slider__link",attrs:{href:t.link}},[s("img",{staticClass:"slider__images",attrs:{src:t.src}})])])})),s("template",{slot:"prev"},[s("span",{staticClass:"prev"},[e._v("prev")])]),s("template",{slot:"next"},[s("span",{staticClass:"next"},[e._v("next")])])],2)],1)},d=[],v=s("7ec7"),h=s.n(v),b={name:"Slider",components:{carousel:h.a},data:function(){return{slides:[{textTitle:"Анимация",textDescription:"Подготовка спрайтов для анимации в unity",textMini:"Спрайты должны немного отличаться друг от друга, чтобы было заметно движение.",src:s("a196"),link:"#"},{text:"",src:s("9f37"),link:"#"},{text:"",src:s("3fea"),link:"#"}]}}},C=b,w=Object(m["a"])(C,p,d,!1,null,null,null),g=w.exports,k=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"about__wrapper"},e._l(this.getCompany,(function(t){return s("div",{staticClass:"about__company-wrapper"},[s("div",{staticClass:"about__title-wrapper"},[s("a",{staticClass:"about__title",attrs:{href:t.linkAbout}},[e._v(e._s(t.title))])]),s("div",{staticClass:"about__description-wrapper"},[s("p",{staticClass:"about__description"},[e._v(e._s(t.description))]),s("div",{staticClass:"about__btn-more-wrapper"},[e.moreAbout?e._e():s("p",{staticClass:"about__btn-more",on:{click:function(t){e.moreAbout=!0}}},[e._v("Подробнее")])]),e._l(t.fullDescription,(function(t){return s("div",{staticClass:"about__full",class:e.moreAbout?"about__full_activeAbout":""},[s("p",[e._v(e._s(t.news))])])}))],2)])})),0)},N=[],S={name:"About",data:function(){return{moreAbout:!1}},computed:Object(o["a"])({},Object(l["c"])(["getCompany"])),mounted:function(){console.log(this.getCompany)}},y=S,x=Object(m["a"])(y,k,N,!1,null,null,null),j=x.exports,F=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"news__wrapper"},[s("div",{staticClass:"news__header"},[s("h3",{staticClass:"news__title"},[e._v("Новости")]),e.visibleAllNews?e._e():s("span",{staticClass:"news__link-all",on:{click:e.allNews}},[e._v("Все новости")])]),s("div",{staticClass:"news__item"},e._l(this.getStatePublicNews,(function(t,i){return s("div",{staticClass:"news",class:t.typeNews},[s("a",{staticClass:"news__link",attrs:{href:t.linkNews}},[s("span",{staticClass:"news__number"},[e._v(e._s(i+1))]),s("img",{staticClass:"news__images",attrs:{src:t.newsSrc}})])])})),0),e.visibleAllNews?e._e():s("button",{staticClass:"news__btn-more",on:{click:e.moreNews}},[e._v("Показать еще")])])},O=[],E={name:"News",data:function(){return{quantityNews:2,visibleAllNews:!1}},computed:Object(o["a"])({},Object(l["c"])(["getStatePublicNews","getStateAllNews"])),mounted:function(){this.$store.dispatch("actNews",this.quantityNews)},methods:Object(o["a"])({},Object(l["b"])(["actNews"]),{moreNews:function(){var e=this.quantityNews+=3;this.$store.dispatch("actNews",e),this.getStatePublicNews.length===this.getStateAllNews.length&&(this.visibleAllNews=!0)},allNews:function(){for(var e=0,t=0;t<this.getStateAllNews.length;t++)e++;this.$store.dispatch("actNews",e),this.visibleAllNews=!0}})},$=E,A=Object(m["a"])($,F,O,!1,null,null,null),L=A.exports,M=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"formSubscription__wrapper",class:e.validateForm?"formSubscription__wrapper_form-done":""},[e.validateForm?e._e():s("h3",{staticClass:"formSubscription__title"},[e._v("Подпишитесь на рассылку")]),e.validateForm?e._e():s("form",{staticClass:"formSubscription__form",on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[s("div",{staticClass:"formSubscription__form-item"},[s("div",{staticClass:"formSubscription__wrapper-input"},[s("label",{staticClass:"formSubscription__label",attrs:{id:"name"}},[e.errorName.length?e._e():s("p",{staticClass:"formSubscription__label-text"},[e._v("Имя")]),s("p",{staticClass:"formSubscription__error"},[e._v(" "+e._s(e.errorName)+" ")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"formSubscription__input",class:e.errorName.length?"formSubscription__input_error":"",attrs:{type:"text",placeholder:"Имя"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})])]),s("div",{staticClass:"formSubscription__wrapper-input"},[s("p",{staticClass:"formSubscription__error"},[e._v(" "+e._s(e.errorEmail)+" ")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"formSubscription__input",class:e.errorEmail.length?"formSubscription__input_error":"",attrs:{type:"text",placeholder:"example@mail.com"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})])]),s("div",{staticClass:"formSubscription__form-item"},[s("div",{staticClass:"formSubscription__wrapper-textarea"},[s("p",{staticClass:"formSubscription__error"},[e._v(" "+e._s(e.errorComments)+" ")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.comments,expression:"comments"}],staticClass:"formSubscription__textarea",class:e.errorComments.length?"formSubscription__input_error":"",attrs:{placeholder:"Комментарии"},domProps:{value:e.comments},on:{input:function(t){t.target.composing||(e.comments=t.target.value)}}})])]),e._m(0)]),e.validateForm?s("div",{staticClass:"formSubscription__posted"},[s("h3",{staticClass:"formSubscription__posted-title"},[e._v("Благодарим за подписку!")])]):e._e()])},P=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"formSubscription__wrapper-submit"},[s("input",{staticClass:"formSubscription__submit",attrs:{type:"submit",value:"Подписаться"}})])}],I=(s("b0c0"),s("ac1f"),s("841c"),{name:"FormSubscription",data:function(){return{name:"",email:"",comments:"",validateForm:!1,errorName:"",errorEmail:"",errorComments:""}},methods:{onSubmit:function(){var e=/^[0-9]+$/;e.test(this.name)?this.errorName="Цифры в имени не допустимы":this.errorName="",this.name.length||(this.errorName="Заполните поле");var t=/^[a-z0-9_-]+@[a-z0-9-]+\.[a-z]{2,6}$/i;0===this.email.search(t)?this.errorEmail="":this.errorEmail="Email заполнен не верно",this.email.length||(this.errorEmail="Заполните поле"),this.comments.length?this.errorComments="":this.errorComments="Заполните поле",this.errorName.length||this.errorEmail.length||this.errorComments.length?this.validateForm=!1:this.validateForm=!0}}}),D=I,T=Object(m["a"])(D,M,P,!1,null,null,null),q=T.exports,z=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"footer__wrapper"},[s("div",{staticClass:"footer"},[e._m(0),s("div",{staticClass:"footer__item"},[s("div",{staticClass:"footer__section"},[s("nav",{staticClass:"footer__nav"},[s("ul",{staticClass:"footer__nav-list"},e._l(e.footerNav,(function(t){return s("li",{staticClass:"footer__nav-item"},[s("a",{staticClass:"footer__nav-link",attrs:{href:t.link}},[e._v(e._s(t.name))])])})),0)])]),s("div",{staticClass:"footer__section footer__section_middle"},[s("div",{staticClass:"footer__section"},[s("div",{staticClass:"footer__social-wrapper"},[s("p",{staticClass:"footer__social-text"},[e._v("Мы в соц. сетях")]),s("ul",{staticClass:"footer__social-list"},e._l(e.social,(function(e){return s("li",{staticClass:"footer__social-item"},[s("a",{staticClass:"footer__social-link",attrs:{href:e.link}},[s("img",{staticClass:"footer__social-icon",attrs:{src:e.src}})])])})),0)])]),s("div",{staticClass:"footer__section"},[s("p",{staticClass:"footer__form-title"},[e._v("Подписка на новости")]),s("div",{staticClass:"footer__form-wrapper"},[s("form",{staticClass:"footer__form",on:{submit:function(t){return t.preventDefault(),e.onSubmitFooter(t)}}},[s("p",{staticClass:"footer__form-error"},[e._v(e._s(e.errorFooter))]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.emailFooter,expression:"emailFooter"}],staticClass:"footer__form-input",class:e.errorFooter.length?"footer__form-input_error":"",attrs:{type:"text",placeholder:"example@mail.com"},domProps:{value:e.emailFooter},on:{input:function(t){t.target.composing||(e.emailFooter=t.target.value)}}}),s("input",{staticClass:"footer__form-submit",attrs:{type:"submit",value:"Ок"}})])])])])])])]),e._m(1)])},B=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"footer__item"},[s("div",{staticClass:"footer__section"},[s("div",{staticClass:"header__logo"},[s("a",{staticClass:"header__logo-link",attrs:{href:"#"}},[e._v("Logotype")])]),s("div",{staticClass:"footer__address"},[s("p",{staticClass:"footer__address-text"},[e._v("г. Москва, метро Бауманская, "),s("br"),e._v(" ул. Бауманская, дом 44")])])]),s("div",{staticClass:"footer__section"},[s("p",{staticClass:"footer__phone"},[e._v("+7 000 000 00 00")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"cooperaite__wrapper"},[s("div",{staticClass:"cooperaite"},[s("div",{staticClass:"cooperaite__section"},[s("p",{staticClass:"cooperaite__text"},[e._v("© ООО «Глобус», 2016 — 2019")])]),s("div",{staticClass:"cooperaite__section cooperaite__section_middle"},[s("a",{staticClass:"cooperaite__link",attrs:{href:"#"}},[e._v("Политика конфиденциальности")]),s("a",{staticClass:"cooperaite__link",attrs:{href:"#"}},[e._v("Cookies")])])])])}],H={name:"Footer",data:function(){return{emailFooter:"",errorFooter:"",footerNav:[{name:"О компании",link:"#"},{name:"Партнёрская программа",link:"#"},{name:"Реклама",link:"#"},{name:"Пресс-центр",link:"#"},{name:"Вакансии",link:"#"},{name:"Помощь",link:"#"},{name:"Правила",link:"#"}],social:[{link:"#",src:s("65b6")},{link:"#",src:s("cbba")},{link:"#",src:s("cb68")}]}},methods:{onSubmitFooter:function(){this.emailFooter.length?this.errorFooter="":this.errorFooter="Заполните поле"}}},J=H,R=Object(m["a"])(J,z,B,!1,null,null,null),Y=R.exports,G={name:"App",components:{News:L,Header:f,Slider:g,About:j,FormSubscription:q,Footer:Y}},K=G,Q=Object(m["a"])(K,i,a,!1,null,null,null),U=Q.exports,V=s("2b0e"),W=(s("54ba"),{state:{arrNews:[{id:1,newsSrc:s("45a7"),linkNews:"#",typeNews:"small"},{id:2,newsSrc:s("63b6"),linkNews:"#",typeNews:"small"},{id:3,newsSrc:s("b36f"),linkNews:"#",typeNews:"big"},{id:4,newsSrc:s("45a7"),linkNews:"#",typeNews:"small"},{id:5,newsSrc:s("63b6"),linkNews:"#",typeNews:"small"},{id:6,newsSrc:s("b36f"),linkNews:"#",typeNews:"big"},{id:7,newsSrc:s("45a7"),linkNews:"#",typeNews:"small"},{id:8,newsSrc:s("63b6"),linkNews:"#",typeNews:"small"}],arrNewsPublic:[]},getters:{getStatePublicNews:function(e){return e.arrNewsPublic},getStateAllNews:function(e){return e.arrNews}},mutations:{mutNews:function(e,t){e.arrNewsPublic=t}},actions:{actNews:function(e,t){for(var s=e.commit,i=e.state,a=[],r=0;r<i.arrNews.length;r++)r<=t&&(a.push(i.arrNews[r]),s("mutNews",a))}}});V["a"].use(l["a"]);var X=new l["a"].Store({modules:{news:W},state:{count:1,company:[{title:"О Компании",linkAbout:"#",description:"Что-то более продвинутое делается с помощью покадровой анимации — когда для разных состояний объекта (стоит, идет, в прыжке, атакует) создается несколько спрайтов (двумерное изображение), которые сменяют друг друга с определенным интервалом.",fullDescription:[{news:"Lorem Ipsum - это текст-часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной для текстов на латиer, в шаблонах которых используется Lorem Ipsum."},{news:"Lorem Ipsum - это текст-часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной для текстов на латиer, в шаблонах которых используется Lorem Ipsum."}]}]},actions:{},mutations:{},getters:{getCompany:function(e){return e.company}}});s("569e");V["a"].config.productionTip=!1,new V["a"]({el:"#app",store:X,render:function(e){return e(U)}})},"63b6":function(e,t,s){e.exports=s.p+"img/img_2.c44ffbfc.jpg"},"65b6":function(e,t,s){e.exports=s.p+"img/facebook-letter-logo.ac90ef55.svg"},"9f37":function(e,t,s){e.exports=s.p+"img/slide_2.a2d12a39.jpg"},a196:function(e,t,s){e.exports=s.p+"img/slide_1.9810fd8e.jpg"},b36f:function(e,t,s){e.exports=s.p+"img/img_3.5e19af77.jpg"},cb68:function(e,t,s){e.exports=s.p+"img/instagram-logo.234a6ea6.svg"},cbba:function(e,t,s){e.exports=s.p+"img/odnoklassniki.8a578127.svg"}});
//# sourceMappingURL=app.52a62777.js.map
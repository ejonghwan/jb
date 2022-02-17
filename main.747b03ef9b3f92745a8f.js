/*!
 * 
 *         Build Data: 2022. 2. 17.
 *         GIT Commit Ver: 44d3e09
 *
 *         User Name : ejonghwan
 *
 *
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

// UNUSED EXPORTS: default

;// CONCATENATED MODULE: ./src/components/Sidebar.js
const SideBar = {
  ele: document.querySelectorAll('h2'),

  render() {
    // scroll
    const asideCreate = document.createElement('aside');
    const mainTag = document.querySelector('main section.conts');

    if (mainTag) {
      mainTag.appendChild(asideCreate);
    }

    const asideTag = document.querySelector('aside');

    if (asideTag) {
      window.addEventListener('scroll', function () {
        // let asideTop = asideTag.getBoundingClientRect().top
        asideTag.style.transform = `translateY(${window.pageYOffset}px)`;
      });
      window.addEventListener('load', function () {
        // let asideTop = asideTag.getBoundingClientRect().top
        asideTag.style.transform = `translateY(${window.pageYOffset}px)`;
      }); // console.log(asideTag)
      // render

      asideTag.innerHTML = `
                <ul>    
                    ${[...this.ele].map(item => {
        return `
                            <li>
                                <button class="aside_btn">${item.textContent}</button>
                            </li>
                        `;
      }).join(' ')}   
                </ul>
            `;
    } // click


    const btns = document.querySelectorAll('.aside_btn'); // const headerHeight = document.querySelector('header').clientHeight //아니 이거 왜 하이트 144가 찍혀 ㅡㅡ
    // console.log(headerHeight)

    for (let i = 0; i < btns.length; i++) {
      btns[i].addEventListener('click', function (e) {
        console.log(this.ele[1]);
        console.log(btns[i].textContent, this.ele[i].outerText, i, this.ele[0].getBoundingClientRect().top);

        if (btns[i].textContent === this.ele[i].outerText) {
          // window.scrollTo( // 이거 왜 두번 작동되지 ㅡㅡ?
          //     {
          //         top: this.ele[i].getBoundingClientRect().top, 
          //         behavior:'smooth',
          //     }
          // );
          window.scrollBy(0, this.ele[i].getBoundingClientRect().top - 74);
        } // console.log(this.textContent)

      }.bind(this));
    }
  }

};
/* harmony default export */ const Sidebar = (SideBar);
;// CONCATENATED MODULE: ./src/components/Nav.js
class Nav {
  constructor(className, root) {
    this.className = document.querySelector(className);
    this.root = root;
    this.menu = [{
      id: 0,
      href: `https://ejonghwan.github.io/jb.html`,
      menuName: 'Jongdbook',
      state: false
    }, {
      id: 1,
      href: `${this.root}/html/index.html`,
      menuName: 'HTML',
      state: false
    }, {
      id: 2,
      href: `${this.root}/css/index.html`,
      menuName: 'CSS',
      state: false
    }, {
      id: 3,
      href: `${this.root}/js/index.html`,
      menuName: 'JS',
      state: false
    }, {
      id: 4,
      href: `${this.root}/node/index.html`,
      menuName: 'Node.js',
      state: false
    }, {
      id: 5,
      href: `${this.root}/mongodb/index.html`,
      menuName: 'MongoDB',
      state: false
    }, {
      id: 6,
      href: `${this.root}/html/accessibility.html`,
      menuName: 'Accessibility',
      state: false
    }, {
      id: 7,
      href: `${this.root}/tool/index.html`,
      menuName: 'Tool',
      state: false
    }, {
      id: 8,
      href: `${this.root}/spa/index.html`,
      menuName: 'SPA',
      state: false
    }];
  }

  render() {
    if (this.className) {
      this.menu.map((item, i) => {
        this.className.innerHTML += `
                    <li>
                        <a href="${item.href}?nav=${item.id}" class="${item.state === true ? 'on' : ' '}">${item.menuName}</a>
                    </li>
                `;
      });
      const lis = this.className.querySelectorAll(`li`);
      window.addEventListener('load', e => {
        // e.preventDefault();
        let shc = location.search;
        let params = new URLSearchParams(shc);
        let paramIdx = params.get('nav');
        lis[paramIdx].children[0].classList.add('on');
      });
    }
  }

}

;
/* harmony default export */ const components_Nav = (Nav);
;// CONCATENATED MODULE: ./src/components/Footer.js
class Footer {
  constructor(className) {
    this.ele = document.querySelector(className);
    this.data = [{
      info: 'jjongrrr@naver.com'
    }, {
      info: 'mdn docs '
    }, {
      info: 'font Aritaum'
    }];
  }

  render() {
    if (this.ele) {
      this.ele.innerHTML = `
            <ul class="line">
                ${this.data.map(item => {
        return `
                        ${this.ele.innerHTML = `
                            <li>
                                ${item.info}
                            </li>
                        `} 
                    `;
      }).join('')}
            </ul>
            `;
    }
  }

}

/* harmony default export */ const components_Footer = (Footer);
;// CONCATENATED MODULE: ./src/assets/js/index.js



const js_ui = function () {
  const mainNav = new components_Nav('.global_wrap.main > .line', './src/pages');
  const subNav = new components_Nav('.global_wrap.sub > .line', '..');
  const footer = new components_Footer('footer .global_wrap'); // console.log(subNav)

  mainNav.render();
  subNav.render();
  Sidebar.render();
  footer.render();

  function tab() {
    const eles = document.querySelectorAll('.item');

    for (let i = 0; i < eles.length; i++) {
      eles[i].querySelector('dt > button').addEventListener('click', function (e) {
        if (!this.classList.contains('active')) {
          this.classList.add('active');
          eles[i].parentElement.querySelector('.code_wrap').classList.add('active');
          eles[i].parentElement.classList.add('on');
        } else {
          this.classList.remove('active');
          eles[i].parentElement.querySelector('.code_wrap').classList.remove('active');
          eles[i].parentElement.classList.remove('on');
        } // console.log(eles[i].parentElement)
        // console.log(this)

      });
    }
  }

  tab();
  const links = document.querySelectorAll('link');
  const scripts = document.querySelectorAll('script');
  const getDate = new Date();
  const minute = getDate.getMinutes(); // console.log(minute)

  function cache() {
    for (let i = 0; i < links.length; i++) {
      links[i].setAttribute('href', links[i].getAttribute('href') + `?ver${minute}`);
    } // for(let i = 0; i < scripts.length; i++) {
    //     scripts[i].setAttribute('src', scripts[i].getAttribute('src') + `?ver${minute}`) 
    // }
    // console.log(links)

  } // cache();
  // console.log('asdasd', SideBar.render())


  return {
    tab,
    cache
  };
}();
;// CONCATENATED MODULE: ./src/assets/images/aa.jpg
/* harmony default export */ const aa = (__webpack_require__.p + "src/assets/images/aa.jpg?ce7776742b6b866d468bb7710d0b9cf8");
;// CONCATENATED MODULE: ./src/assets/font/consola.ttf
/* harmony default export */ const consola = (__webpack_require__.p + "src/assets/font/230da2be4964a2fbb45f176915f7a083.ttf");
;// CONCATENATED MODULE: ./src/assets/font/AritaSans-Bold.otf
/* harmony default export */ const AritaSans_Bold = (__webpack_require__.p + "src/assets/font/cc355d99da75457f37349126dc5fff8f.otf");
;// CONCATENATED MODULE: ./src/assets/font/AritaSans-Light.otf
/* harmony default export */ const AritaSans_Light = (__webpack_require__.p + "src/assets/font/e8c5101cc9f750ef63620690d40fa73b.otf");
;// CONCATENATED MODULE: ./src/assets/font/AritaSans-Medium.otf
/* harmony default export */ const AritaSans_Medium = (__webpack_require__.p + "src/assets/font/78d9230e6c5a3d76ffda726956f04833.otf");
;// CONCATENATED MODULE: ./src/assets/font/AritaSans-SemiBold.otf
/* harmony default export */ const AritaSans_SemiBold = (__webpack_require__.p + "src/assets/font/ebd07d577d931368172d6dc07c88842e.otf");
;// CONCATENATED MODULE: ./src/assets/font/AritaSans-Thin.otf
/* harmony default export */ const AritaSans_Thin = (__webpack_require__.p + "src/assets/font/6395ffa7862b5691b71d36dfd1dc41c4.otf");
;// CONCATENATED MODULE: ./src/index.js











const Index = () => {
  console.log(ui);
  return ui;
};

/* harmony default export */ const src = ((/* unused pure expression or super */ null && (Index)));
/******/ })()
;
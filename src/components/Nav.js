// import { LibManifestPlugin } from "webpack";

// class Nav {
//     constructor(className, root) {
//         this.className = document.querySelector(className) 
//         this.root = root;
//         this.menu = [
//             {
//                 href: `/`, 
//                 menuName: 'Jongdbook' 
//             },
//             {
//                 href: `${this.root}/html/index.html`, 
//                 menuName: 'HTML' 
//             },
//             {
//                 href: `${this.root}/css/index.html`, 
//                 menuName: 'CSS' 
//             },
//             {
//                 href: `${this.root}/js/index.html`, 
//                 menuName: 'JS' 
//             },
//             {
//                 href: `${this.root}/node/index.html`, 
//                 menuName: 'Node.js' 
//             },
//             {
//                 href: `${this.root}/mongodb/index.html`, 
//                 menuName: 'MongoDB' 
//             },
//             {
//                 href: `${this.root}/html/accessibility.html`, 
//                 menuName: 'Accessibility' 
//             },
//             {
//                 href: `${this.root}/tool/index.html`, 
//                 menuName: 'Tool' 
//             },
//         ]
//     }

//      render() {
//         if(this.className) {
//             // let idx = null;
//              this.menu.map((item, i) => {
//                 // console.log('nav', item)
//                 // idx = i
//                 this.className.innerHTML += `
//                     <li>
//                         <a href="${item.href}">${item.menuName}</a>
//                     </li>
//                 `
//             })

//             // const lis = this.className.querySelectorAll(`li`)
//             // lis[idx].classList.add('on')
//             // console.log(lis[idx]) 
//         }
        

//         // ./index.html
//         // ../../../index.html
//     }

// };


// export default Nav;
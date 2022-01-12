

class Nav {
    constructor(className, root) {
        this.className = document.querySelector(className) 
        this.root = root;
        this.menu = [
            {
                id: 0,
                href: `/`, 
                menuName: 'Jongdbook' ,
                state: false,
            },
            {
                id: 1,
                href: `${this.root}/html/index.html`, 
                menuName: 'HTML' ,
                state: false,
            },
            {
                id: 2,
                href: `${this.root}/css/index.html`, 
                menuName: 'CSS' ,
                state: false,
            },
            {
                id: 3,
                href: `${this.root}/js/index.html`, 
                menuName: 'JS' ,
                state: false,
            },
            {
                id: 4,
                href: `${this.root}/node/index.html`, 
                menuName: 'Node.js' ,
                state: false,
            },
            {
                id: 5,
                href: `${this.root}/mongodb/index.html`, 
                menuName: 'MongoDB' ,
                state: false,
            },
            {
                id: 6,
                href: `${this.root}/html/accessibility.html`, 
                menuName: 'Accessibility' ,
                state: false,
            },
            {
                id: 7,
                href: `${this.root}/tool/index.html`, 
                menuName: 'Tool' ,
                state: false,
            },
            {
                id: 8,
                href: `${this.root}/spa/index.html`, 
                menuName: 'SPA' ,
                state: false,
            },
        ]
    }

     render() {
        if(this.className) {
             this.menu.map((item, i) => {
                this.className.innerHTML += `
                    <li>
                        <a href="${item.href}" class="${item.state === true ? 'on': ' '}">${item.menuName}</a>
                    </li>
                `
            })

            // ㅇ어케해야될까 
            // const lis = this.className.querySelectorAll(`li`)            
            // for(let i = 0; i < lis.length; i++) {
            //     lis[i].addEventListener('click', e => {
            //         this.menu[i].state = true;
            //         console.log('li select: ', this.menu[i])
            //         alert(this)
            //     })
            // }
        
        }
        

    }

};


export default Nav;
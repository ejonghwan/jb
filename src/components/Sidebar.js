
const SideBar = {
    
    ele: document.querySelectorAll('h2'),
    

    
    render() {

        // scroll
        const asideCreate = document.createElement('aside');
        const mainTag = document.querySelector('main section.conts')
        mainTag.appendChild(asideCreate)
        const asideTag = document.querySelector('aside')
        
        window.addEventListener('scroll', function() {
            // let asideTop = asideTag.getBoundingClientRect().top
            asideTag.style.transform = `translateY(${window.pageYOffset}px)`
        })

       
        console.log(asideTag)
        // render
        asideTag.innerHTML = `
            <ul>    
                ${[...this.ele].map(item => {
                    return `
                        <li>
                            <button class="aside_btn">${item.textContent}</button>
                        </li>
                    `
                }).join(' ')}   
            </ul>
        `


        // click
        const btns = document.querySelectorAll('.aside_btn');
        // const headerHeight = document.querySelector('header').clientHeight //아니 이거 왜 하이트 144가 찍혀 ㅡㅡ
        // console.log(headerHeight)
            
        
        for(let i = 0; i < btns.length; i++) {
            btns[i].addEventListener('click', function(e) {
                
                console.log(this.ele[1])
                console.log(btns[i].textContent,this.ele[i].outerText, i, this.ele[0].getBoundingClientRect().top)
                if(btns[i].textContent === this.ele[i].outerText) {
                    // window.scrollTo( // 이거 왜 두번 작동되지 ㅡㅡ?
                    //     {
                    //         top: this.ele[i].getBoundingClientRect().top, 
                    //         behavior:'smooth',
                    //     }
                    // );
                    window.scrollBy(0, this.ele[i].getBoundingClientRect().top - 94)
                }
                // console.log(this.textContent)
            }.bind(this))
          
        }
        
    },

    
  
}

export default SideBar;
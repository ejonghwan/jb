import SideBar from '../../components/Sidebar.js'


export const ui = (function(){


    const eles = document.querySelectorAll('.item')

    function tab() {
        for(let i = 0; i < eles.length; i++) {
            eles[i].querySelector('dt > button').addEventListener('click', function(e) {
                if(!this.classList.contains('active')) {
                    this.classList.add('active')
                    eles[i].parentElement.querySelector('.code_wrap').classList.add('active')
                    eles[i].parentElement.classList.add('on')
                } else {
                    this.classList.remove('active')
                    eles[i].parentElement.querySelector('.code_wrap').classList.remove('active')
                    eles[i].parentElement.classList.remove('on')
                }
                
                // console.log(eles[i].parentElement)
                // console.log(this)
            })
        }
    }
    tab();


    const links = document.querySelectorAll('link')
    const scripts = document.querySelectorAll('script')
    const getDate = new Date()
    const minute = getDate.getMinutes()
    // console.log(minute)
    function cash() {
        for(let i = 0; i < links.length; i++) {
            links[i].setAttribute('href', links[i].getAttribute('href') + `?ver${minute}`) 
        }
        for(let i = 0; i < scripts.length; i++) {
            scripts[i].setAttribute('src', scripts[i].getAttribute('src') + `?ver${minute}`) 
        }
        // console.log(links)
    }
    cash();

    
    SideBar.render()
    // console.log('asdasd', SideBar.render())

   


    return {
        tab,
        cash,
    }



})()




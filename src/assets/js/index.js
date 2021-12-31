


const ui = (function(){


    const eles = document.querySelectorAll('.item')

    function tab() {
        for(let i = 0; i < eles.length; i++) {
            eles[i].querySelector('dt > button').addEventListener('click', function(e) {
                if(!this.classList.contains('active')) {
                    this.classList.add('active')
                    eles[i].parentElement.querySelector('.code_wrap').classList.add('active')
                } else {
                    this.classList.remove('active')
                    eles[i].parentElement.querySelector('.code_wrap').classList.remove('active')
                }
                
                console.log(eles[i].parentElement)
                // console.log(this)
            })
        }
    }


    


   


    return {
        tab,
    }



})()




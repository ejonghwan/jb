class Footer {
    constructor(className) {
        this.ele = document.querySelector(className)
        this.data = [
            { info: 'jonghwan Handbook' },
            { info: 'mdn docs https://developer.mozilla.org/' },
            { info: 'font Aritaum' },
        ]
    }

    render() {
        if(this.ele) {
            this.ele.innerHTML = `
            <ul class="line">
                ${this.data.map(item => {
                    return `
                        ${this.ele.innerHTML = `
                            <li>
                                ${item.info}
                            </li>
                        `} 
                    `
                }).join('')}
            </ul>
            `
            
        }
    }
}


export default Footer;
class Footer {
    constructor(className) {
        this.ele = document.querySelector(className)
        this.data = [
            { info: 'jonghwan handbook' },
            { info: 'hohohoho' },
            { info: 'hahahah' },
            { info: 'asdadasd' },
            { info: '13213123' },
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
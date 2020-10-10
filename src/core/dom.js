class Dom {
    constructor(selector) {
        this.nativeElement = typeof selector === 'string'
            ? document.querySelector(selector)
            : selector
    }

    // метод помещает html внутрь this.nativeElement либо возвращает содержимое nativeElement
    html(html) {
        if (typeof html === 'string') {
            this.nativeElement.innerHTML = html
            return this
        }
        return this.nativeElement.outerHTML.trim()
    }
    clear() {
        this.html('')
        return this
    }
    // помещает node в конец nativeElement
    append(node) {
        if (node instanceof Dom) {
            node = node.nativeElement
        }
        if (Element.prototype.append) {
            this.nativeElement.append(node)
        } else {
            this.nativeElement.appendChild(node)
        }
        return this
    }
    on(eventType, callback) {
        this.nativeElement.addEventListener(eventType, callback)
    }
    off(eventType, callback) {
        this.nativeElement.removeEventListener(eventType, callback)
    }
}

export function $(selector) {
    return new Dom(selector)
}

$.create = (tagName, classes = '') => {
    const el = document.createElement(tagName)
    if (classes) {
        el.classList.add(classes)
    }
    return $(el)
}
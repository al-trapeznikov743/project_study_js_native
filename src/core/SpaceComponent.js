import {DomListener} from './DomListener'

export class SpaceComponent extends DomListener {
    constructor($root, options = {}) {
        super($root, options.listeners)
        this.name = options.name || ''
    }

    // возвращает шаблон компонента
    toHTML() {
        return ''
    }
    init() {
        this.initDomListeners()
    }
    destroy() {
        this.removeDomListeners()
    }
}
import {DomListener} from './DomListener'

export class SpaceComponent extends DomListener {
    constructor($root, options = {}) {
        super($root, options.listeners)
        this.name = options.name || ''
        this.emitter = options.emitter
        this.store = options.store
        this.unsubscribers = []

        this.prepare()
    }

    // настраивает компонент до init()
    prepare() {}
    // возвращает шаблон компонента
    toHTML() {
        return ''
    }

    // уведомляем подписчиков о событии eventName
    $emit(eventName, ...args) {
        this.emitter.emit(eventName, ...args)
    }
    // подписываемся на событие eventName
    $on(eventName, callback) {
        const unsub = this.emitter.subscribe(eventName, callback)
        this.unsubscribers.push(unsub)
    }
    $dispatch(action) {
        this.store.dispatch(action)
    }
    // приходят изменения по тем полям, на которые мы подписаны
    storeChanged() {}
    // инициализация компонента, добавление DOM-listeners
    init() {
        this.initDomListeners()
    }
    // удаление компонента, чистка DOM-listeners
    destroy() {
        this.removeDomListeners()
        this.unsubscribers.forEach(unsub => unsub())
    }
}
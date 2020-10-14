import {$} from '@core/dom'
import {Emitter} from '@core/Emitter'
import {StoreSubscriber} from '@core/StoreSubscriber'

export class Space {
    constructor(options) {
        // записываем массив классов компонентов приложения
        this.components = options.components || []
        // создаём единый emitter(observer) для всего приложения
        this.emitter = new Emitter()
        this.store = options.store
        this.subscriber = new StoreSubscriber(this.store)
    }
    getRoot() {
        // создаём $root - корневой элемент для компонентов приложения
        const $root = $.create('div', 'space')
        const componentOptions = {
            emitter: this.emitter,
            store: this.store
        }
        // переопределяем массив this.components (создаём экземпляры классов (компоненты) и заносим их в наш массив)
        this.components = this.components.map(Component => {
            // создаём корневой элемент для текущего компонента
            const $el = $.create('div', Component.className)
            // создаём экземпляр текущего компонента (экземпляр класса)
            const component = new Component($el, componentOptions)
            // помещаем содержимое каждого отдельного компонента в его корневой элемент
            $el.html(component.toHTML())
            // помещаем все компоненты в $root
            $root.append($el)
            return component
        })
        return $root
    }

    init() {
        // инициализируем компоненты уже после их рендера (отрисовки страницы), навешиваем обработчики и т.д.
        this.subscriber.subscribeComponents(this.components)
        this.components.forEach(component => component.init())
    }
    destroy() {
        this.subscriber.unsubscribeFromStore()
        this.components.forEach(component => component.destroy())
    }
}
import {$} from '@core/dom'
import {Emitter} from '@core/Emitter'

export class Space {
    constructor(selector, options) {
        // принимаем корневой элемент приложения и записываем его в this.$el
        this.$el = $(selector)
        // записываем массив классов компонентов приложения
        this.components = options.components || []
        // создаём единый emitter(observer) для всего приложения
        this.emitter = new Emitter()
    }
    getRoot() {
        // создаём $root - корневой элемент для компонентов приложения
        const $root = $.create('div', 'space')
        const componentOptions = {
            emitter: this.emitter
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

    render() {
        // помещаем наш $root в корень приложения this.$el
        this.$el.append(this.getRoot())
        // инициализируем компоненты уже после их рендера (отрисовки страницы), навешиваем обработчики и т.д.
        this.components.forEach(component => component.init())
    }
    destroy() {
        this.components.forEach(component => component.destroy())
    }
}
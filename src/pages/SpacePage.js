import {Header} from '@/components/header/Header'
import {Act} from '@/components/act/Act'
import {Counter} from '@/components/counter/Counter'
import {Footer} from '@/components/footer/Footer'
import {Space} from '@/components/space/Space'
import {createStore} from '@/redux/createStore'
import {rootReducer} from '@/redux/rootReducer'
import {initialState} from '@/redux/initialState'
import {debounce} from '@/redux/debounce'
import {storage} from '@core/utils'
import {Page} from '@core/routes/Page'

export class SpacePage extends Page {
    constructor(params) {
        super(params)
        this.unsubs = null
        this.store
    }
    getRoot() {
        console.log(this.params)
        const store = createStore(rootReducer, initialState)
        this.store = store

        const stateListener = debounce(state => {
            storage(storagePageName(this.params), state)
        }, 500)

        this.unsubs = store.subscribe(stateListener)

        // передаём selector корневого элемента приложения и массив с классами (не экземплярами) компонентов
        this.space = new Space({
            components: [Header, Act, Counter, Footer],
            store
        })
        return this.space.getRoot()
    }
    afterRender() {
        this.space.init()
    }
    destroy() {
        this.unsubs.unsubscribe()
        this.space.destroy()
    }
}

function storagePageName(param) {
    return 'space:' + param
}
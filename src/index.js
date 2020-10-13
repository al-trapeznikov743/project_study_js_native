import {Header} from '@/components/header/Header'
import {Act} from '@/components/act/Act'
import {Counter} from '@/components/counter/Counter'
import {Footer} from '@/components/footer/Footer'
import {Space} from '@/components/space/Space'
import {createStore} from '@/redux/createStore'
import {rootReducer} from '@/redux/rootReducer'
import {initialState} from './redux/initialState'
import {debounce} from './redux/debounce'
import {storage} from '@core/utils'
import './sass/index.sass'

const store = createStore(rootReducer, initialState)

const stateListener = debounce(state => {
    storage('space-state', state)
}, 500)

store.subscribe(stateListener)

// передаём selector корневого элемента приложения и массив с классами (не экземплярами) компонентов
const space = new Space('#app', {
    components: [Header, Act, Counter, Footer],
    store
})

space.render()
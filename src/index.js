import {Header} from '@/components/header/Header'
import {Act} from '@/components/act/Act'
import {Counter} from '@/components/counter/Counter'
import {Footer} from '@/components/footer/Footer'
import {Space} from './components/space/Space'
import './sass/index.sass'

// передаём selector корневого элемента приложения и массив с классами (не экземплярами) компонентов
const space = new Space('#app', {
    components: [Header, Act, Counter, Footer]
})

space.render()
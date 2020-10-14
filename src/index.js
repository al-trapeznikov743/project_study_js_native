import {Router} from '@core/routes/Router'
import {DashboardPage} from './pages/DashboardPage'
import {SpacePage} from './pages/SpacePage'
import './sass/index.sass'

new Router('#app', {
    dashboard: DashboardPage,
    space: SpacePage
})
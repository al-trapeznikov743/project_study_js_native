import {Page} from '@core/routes/Page'
import {$} from '@core/dom'
import {getAllRecords} from './dashboard.functions'

export class DashboardPage extends Page {
    getRoot() {
        const now = Date.now().toString()
        return $.create('div', 'db').html(`
            <div class="db__header">
                <h1>Counter Dashboard</h1>
            </div>
            <div class="db__new">
                <div class="db__view">
                    <a href="#space/${now}" class="db__create">New Counter</a>
                </div>
            </div>
            <div class="db__table db__view">
                ${getAllRecords()}
            </div>
        `)
    }
}
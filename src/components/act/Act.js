import {SpaceComponent} from '@core/SpaceComponent'

export class Act extends SpaceComponent {
    static className = 'act'

    constructor($root) {
        super($root, {
            name: 'Act',
            listeners: []
        })
    }

    toHTML() {
        return `
            <button class="button act__button">more</button>
            <div class="act__status">
                <div class="act__title">Status:</div>
                <div>0</div>
            </div>
        `
    }
}
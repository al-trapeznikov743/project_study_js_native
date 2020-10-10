import {SpaceComponent} from '@core/SpaceComponent'

export class Counter extends SpaceComponent {
    static className = 'counter'

    constructor($root) {
        super($root, {
            name: 'Counter',
            listeners: []
        })
    }

    toHTML() {
        return `
            <div class="counter__black_square">
                <div class="counter__lives">
                    All Lives Matter
                    <div class="counter__zero">0</div>
                </div>
            </div>
            <div class="counter__count">
                <button class="button">ADD TO STATUS</button>
            </div>
        `
    }
}
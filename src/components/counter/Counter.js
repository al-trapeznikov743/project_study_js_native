import {SpaceComponent} from '@core/SpaceComponent'
import {liveChange} from '../../redux/actions'
import {initialState} from '../../redux/initialState'

export class Counter extends SpaceComponent {
    static className = 'counter'

    constructor($root, options) {
        super($root, {
            name: 'Counter',
            listeners: ['click'],
            ...options
        })
    }

    init() {
        super.init()
        this.$on('act:more', () => {
            const $target = document.getElementById('counter_zero')
            $target.textContent = +$target.textContent+1
            this.$dispatch(liveChange(+$target.textContent))
        })
    }
    toHTML() {
        return `
            <div class="counter__black_square">
                <div class="counter__lives">
                    All Lives Matter
                    <div class="counter__zero" id="counter_zero">${initialState.liveState}</div>
                </div>
            </div>
            <div class="counter__count">
                <button class="button" data-type="counter_btn">ADD TO STATUS</button>
            </div>
        `
    }
    onClick(event) {
        if (event.target.dataset.type === 'counter_btn') {
            const $target = document.getElementById('counter_zero')
            const number = +$target.textContent
            this.$emit('counter:addStatus', number)
        }
    }
}
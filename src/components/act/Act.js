import {SpaceComponent} from '@core/SpaceComponent'
import {statusChange} from '../../redux/actions'
import {initialState} from '../../redux/initialState'

export class Act extends SpaceComponent {
    static className = 'act'

    constructor($root, options) {
        super($root, {
            name: 'Act',
            listeners: ['click'],
            ...options
        })
    }

    init() {
        super.init()
        this.$on('counter:addStatus', number => {
            const $target = document.getElementById('act_zero')
            $target.textContent = number
            this.$dispatch(statusChange(number))
        })
    }
    toHTML() {
        return `
            <button class="button act__button" data-type="act_btn">more</button>
            <div class="act__status">
                <div class="act__title">Status:</div>
                <div id="act_zero">${initialState.statusState}</div>
            </div>
        `
    }
    onClick(event) {
        if (event.target.dataset.type === 'act_btn') {
            this.$emit('act:more')
        }
    }
}
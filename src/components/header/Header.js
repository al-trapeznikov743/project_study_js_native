import {SpaceComponent} from '@core/SpaceComponent'

export class Header extends SpaceComponent {
    static className = 'header'

    constructor($root, options) {
        super($root, {
            name: 'Header',
            listeners: ['click'],
            ...options
        })
    }


    toHTML() {
        return `
            <div class="header__logo">
                <a href="https://github.com/al-trapeznikov743" class="header__icon">
                    <img src="logo.png" alt="logo" class="header__img">
                </a>
            </div>
            <div class="header__description">This is a test implementation of modern JavaScript functions</div>
            <div class="header__buttons">
                <span class="material-icons header__button">delete_outline</span>
                <span class="material-icons header__button">exit_to_app</span>
            </div>
        `
    }
    onClick(event) {
        console.log('Header: onClick', event)
    }
}
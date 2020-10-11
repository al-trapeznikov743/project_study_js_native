import {SpaceComponent} from '@core/SpaceComponent'

export class Footer extends SpaceComponent {
    static className = 'footer'

    constructor($root, options) {
        super($root, {
            name: 'Footer',
            listeners: [],
            ...options
        })
    }

    toHTML() {
        return `
            <div class="footer__descr">
                <h1 class="footer__title">Technologies used</h1>
                <ul class="footer__technologies">
                    <li>
                        <a href="https://nodejs.org/en/" class="footer__link">Node.js</a>
                    </li>
                    <li>
                        <a href="https://webpack.js.org/" class="footer__link">Webpack</a>
                    </li>
                    <li>
                        <a href="https://habr.com/ru/post/439104/" class="footer__link">Redux</a>
                    </li>
                    <li>
                        <a href="https://refactoring.guru/ru/design-patterns/observer" class="footer__link">Observer Pattern</a>
                    </li>
                    <li>
                        <a href="https://learn.javascript.ru/" class="footer__link">etc...</a>
                    </li>
                </ul>
            </div>
        `
    }
}
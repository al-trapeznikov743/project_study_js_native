import {capitalize} from './utils'

export class DomListener {
    constructor($root, listeners = []) {
        if (!$root) {
            throw new Error(`No root provided for DomListener`)
        }
        this.$root = $root
        this.listeners = listeners
    }

    initDomListeners() {
        this.listeners.forEach(listener => {
            const callback = getCallbackName(listener)
            if (!this[callback]) {
                throw new Error(`Method ${callback} is not implemented in ${this.name || ''} Component`)
            }
            this[callback] = this[callback].bind(this)
            this.$root.on(listener, this[callback])
        })
    }
    removeDomListeners() {
        this.listeners.forEach(listener => {
            const callback = getCallbackName(listener)
            this.$root.off(listener, this[callback])
        })
    }
}

function getCallbackName(eventName) {
    return 'on' + capitalize(eventName)
}
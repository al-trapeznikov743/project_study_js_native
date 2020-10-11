export class Emitter {
    constructor() {
        this.listeners = {}
    }

    // dispatch, fire, trigger
    // уведомляем слушателей(подписчиков), если они есть
    emit(eventName, ...args) {
        if (Array.isArray(this.listeners[eventName])) {
            return false
        }
        this.listeners[eventName].forEach(listener => {
            listener(...args)
        })
        return true
    }

    // listen, on
    // подписываемся на уведомления (добавляем нового слушателя(подписчика))
    subscribe(eventName, callback) {
        this.listeners[eventName] = this.listeners[eventName] || []
        this.listeners[eventName].push(callback)
        return () => {
            this.listeners[eventName] =
                this.listeners[eventName].filter(listener => listener !== callback)
        }
    }
}
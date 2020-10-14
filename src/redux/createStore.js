export function createStore(rootReducer, initialState = {}) {
    let state = rootReducer({...initialState}, {type: '__INIT__'})
    let subscribers = []

    return {
        subscribe(callback) {
            subscribers.push(callback)
            return {
                unsubscribe() {
                    subscribers = subscribers.filter(fn => fn !== callback)
                }
            }
        },
        dispatch(action) {
            state = rootReducer(state, action)
            subscribers.forEach(sub => sub(state))
        },
        getState() {
            return JSON.parse(JSON.stringify(state))
        }
    }
}
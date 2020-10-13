import {LIVE_CHANGE, STATUS_CHANGE} from './types'

export function rootReducer(state, action) {
    switch (action.type) {
        case STATUS_CHANGE:
            return {...state, statusState: action.data}
        case LIVE_CHANGE:
            return {...state, liveState: action.data}
        default: return state
    }
}
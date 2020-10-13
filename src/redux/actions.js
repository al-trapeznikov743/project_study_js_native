import {LIVE_CHANGE, STATUS_CHANGE} from './types'

export function statusChange(data) {
    return {
        type: STATUS_CHANGE,
        data
    }
}
export function liveChange(data) {
    return {
        type: LIVE_CHANGE,
        data
    }
}
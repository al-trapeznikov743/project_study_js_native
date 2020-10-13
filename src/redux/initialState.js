import {storage} from '@core/utils'

const defaultState = {
    statusState: 0,
    liveState: 0
}
export const initialState = storage('space-state')
    ? storage('space-state')
    : defaultState
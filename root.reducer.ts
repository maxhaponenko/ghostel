import { combineReducers } from 'redux';
import { Reducer as BookingReducer } from 'store/booking.controller';

import { State as BookingState } from 'store/booking.controller'

export class AppState {
    booking: BookingState
}

export default combineReducers({
    booking: BookingReducer
})
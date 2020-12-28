import { combineReducers } from 'redux';
import { Reducer as BookingReducer } from 'controllers/booking.controller';

import { State as BookingState } from 'controllers/booking.controller'

export class AppState {
    booking: BookingState
}

export default combineReducers({
    booking: BookingReducer
})
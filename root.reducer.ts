import { combineReducers } from 'redux';
import { Reducer as BookingReducer } from 'controllers/booking.controller';
import { Reducer as CashbackReducer } from 'controllers/cashback.controller';

import { State as BookingState } from 'controllers/booking.controller'
import { State as CashbackState } from 'controllers/cashback.controller'

export class AppState {
    booking: BookingState;
    cashback: CashbackState
}

export default combineReducers({
    booking: BookingReducer,
    cashback: CashbackReducer
})
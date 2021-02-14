import { StateController } from 'state.controller';
import { kievUTCOffset } from 'utils/timezone'

class BookingState {
    hotelUTCOffset: number;
}

const defaultState: BookingState = {
    hotelUTCOffset: kievUTCOffset(),
}


const stateController = new StateController<BookingState>(
    'BOOKING', 
    defaultState
)

class Actions {
    
}

class Selectors {

}

const reducer = stateController.getReducer();

export {
    reducer as Reducer,
    BookingState as State,
    Actions as Actions,
    Selectors as Selectors,
    stateController as Controller
};
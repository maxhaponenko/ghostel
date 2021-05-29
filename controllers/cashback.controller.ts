import { AppState } from 'root.reducer';
import { StateController } from 'state.controller';
import { CashbackService } from 'api/cashback.service'

export enum CurrentStep {
    Initial = 1,
    Form = 2,
    Thanks = 3,
}

class CashbackState {
    currentStep: CurrentStep;
    email: string
}

const defaultState: CashbackState = {
    currentStep: CurrentStep.Initial,
    email: '',
}

const stateController = new StateController<CashbackState>(
    'CASHBACK',
    defaultState
)

class Actions {
    public static sendCashbackRequest() {
        return async (dispatch, getState: () => AppState) => {
            const email = getState().cashback.email
            const result = await CashbackService.sendCashbackRequest(email)
        }
    }
}

class Selectors {
    
}

const reducer = stateController.getReducer();

export {
    reducer as Reducer,
    CashbackState as State,
    Actions as Actions,
    Selectors as Selectors,
    stateController as Controller
};
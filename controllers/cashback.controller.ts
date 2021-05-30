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
    email: string;

    isProcessing: boolean;
    isValid: boolean;
    didTryProcess: boolean;
}

const defaultState: CashbackState = {
    currentStep: CurrentStep.Form,
    email: '',

    isProcessing: false,
    isValid: null,
    didTryProcess: false
}

const stateController = new StateController<CashbackState>(
    'CASHBACK',
    defaultState
)

class Actions {

    public static seeMore() {
        return dispatch => {
            dispatch(stateController.setState({ currentStep: CurrentStep.Form }))
        }
    }

    public static onEmailChange(value: string) {
        return dispatch => {
            dispatch(stateController.setState({ email: value }))
        }
    }

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
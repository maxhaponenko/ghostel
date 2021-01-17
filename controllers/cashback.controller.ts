import { StateController } from 'state.controller';

export enum CurrentStep {
    Initial = 1,
    Form = 2,
    Thanks = 3,
}

class CashbackState {
    currentStep: CurrentStep;
}

const defaultState: CashbackState = {
    currentStep: CurrentStep.Initial
}

const stateController = new StateController<CashbackState>(
    'CASHBACK',
    defaultState
)

class Actions {
    
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
export class StateController<State> {

    private name: string;
    private extenssion = '__pick';
    private defaultState: State;

    constructor(name: string, defaultState: State) {
        this.name = name;
        this.defaultState = defaultState;
    }

    public setState<K extends keyof State>(state: ((state: State) => State) | (Pick<State, K> | State), trace: string = '') {

        let pickExtenssion = typeof (state) === 'function' ? '' : this.extenssion;

        return {
            type: this.name + pickExtenssion,
            trace: trace,
            payload: state
        };
    }

    public getReducer() {
        return (state = this.defaultState, action) => {
            let stateForMutation: State = { ...state };
            if (action.type == this.name) {
                let mutateState = action.payload as (state: State) => State;
                stateForMutation = mutateState(state);
            }

            if (action.type == this.name + this.extenssion) {
                stateForMutation = { ...state, ...action.payload };
            }

            return stateForMutation;
        }
    }
}
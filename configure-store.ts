import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from 'root.reducer';


// In development, use the browser's Redux dev tools extension if installed
const enhancers = [];

const isDevelopment = process.env.NODE_ENV === 'development';
if (isDevelopment && typeof window !== 'undefined' && (window as any).devToolsExtension) {
    enhancers.push((window as any).__REDUX_DEVTOOLS_EXTENSION__());
}

const store = createStore(reducers, compose(applyMiddleware(thunk), ...enhancers));

export default store
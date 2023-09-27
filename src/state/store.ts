import {createStore, applyMiddleware, combineReducers, Store} from 'redux';
import createSagaMiddleware from 'redux-saga';
import authReducer from './reducers/auth';
import weightTrackingReducer from './reducers/weightTracking';
import rootSaga from './sagas';

export interface AppState {
  auth: typeof authReducer;
  weightTracking: typeof weightTrackingReducer;
}

const rootReducer = combineReducers<AppState>({
  auth: authReducer,
  weightTracking: weightTrackingReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store: Store<AppState> = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

export default store;

import { configureStore, combineReducers, AnyAction } from '@reduxjs/toolkit';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import { wrapMakeStore, nextReduxCookieMiddleware } from 'next-redux-cookie-wrapper';

// Reducer from slice
import counterReducer from '../counter/slice';
import productReducer from '../product/slice';

const combineReducer = combineReducers({
    counter: counterReducer,
    product: productReducer,
});

const reducer = (state: ReturnType<typeof combineReducer>, action: AnyAction) => {
    if (action.type === HYDRATE) {
        const nextState = {
            ...state, // use previous state
            ...action.payload, // apply delta from hydration
        };
        return nextState;
    }
    return combineReducer(state, action);
};

export const makeStore = wrapMakeStore(() =>
    configureStore({
        reducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().prepend(
                nextReduxCookieMiddleware({
                    // Part of state to store in cookies
                    subtrees: ['counter.value'],
                }),
            ),
    }),
);

type Store = ReturnType<typeof makeStore>;
export const wrapper = createWrapper<Store>(makeStore);

export type RootState = ReturnType<typeof combineReducer>;
export type AppDispatch = Store['dispatch'];

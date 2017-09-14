import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';

import { environment } from '../../environments';

// Define new stores here...
// tslint:disable-next-line:no-empty-interface
export interface IAppState {}

// ...as well as its reducers here.
export const reducers: ActionReducerMap<IAppState> = {};

// Log all actions
export function logger(reducer: ActionReducer<IAppState>): ActionReducer<any, any> {
  return function(state: IAppState, action: any): IAppState {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}

/**
 * By default, @ngrx/store uses combineReducers with the reducer map to compose
 * the root meta-reducer. To add more meta-reducers, provide an array of meta-reducers
 * that will be composed to form the root meta-reducer.
 */
export const metaReducers: MetaReducer<IAppState>[] = !environment.production
  ? [logger, storeFreeze]
  : [];

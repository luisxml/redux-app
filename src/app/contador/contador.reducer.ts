import { Action } from '@ngrx/store';

export function contadorReducer(state: number, action: Action) {
    switch (action.type) {
        case 'INCREMENTAR':
            return state + 1;
        
        case 'DECREMENTAR':
            return state - 1;

        default:
            return state;
    }
}

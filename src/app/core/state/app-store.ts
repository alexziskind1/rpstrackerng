import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';

import { State, INITIAL_STATE, StateKey, StateValue } from './app-state';
import { Injectable } from "@angular/core";

@Injectable()
export class Store {

    private subj = new BehaviorSubject<State>(INITIAL_STATE);

    public get value() {
        return this.subj.value;
    }

    public select<T extends StateValue>(name: StateKey): Observable<T> {
        return this.subj.pipe(
            map((state: State) => <T> state[name]),
            distinctUntilChanged<T>()
        );
    }

    public set<T>(name: StateKey, state: T) {
        this.subj.next({
            ...this.value, [name]: state
        });
    }
}

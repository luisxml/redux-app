import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IncrementarAction, DecrementarAction } from './contador/contador.actions';
import { AppState } from './app.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'redux-app';
  contador: number;

  constructor( private _store: Store<AppState>) {
    this._store.select('contador'). subscribe(contador =>  this.contador = contador);
  }

  incrementar() {
    const accion = new IncrementarAction();
    this._store.dispatch(accion);
  }

  decrementar() {
    const accion = new DecrementarAction();
    this._store.dispatch(accion);
  }
}

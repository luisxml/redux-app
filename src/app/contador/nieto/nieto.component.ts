import { Component, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { ResetAction } from '../contador.actions';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styles: [
  ]
})
export class NietoComponent implements OnInit {
  contador: number;
 
  constructor(
    private _store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this._store.select('contador').subscribe(
      contador => this.contador = contador);
  }

  reset() {
    const accion = new ResetAction();
    this._store.dispatch(accion);
  }


}

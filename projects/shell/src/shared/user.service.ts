import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _saldo = new BehaviorSubject<number>(2500);
  saldo$ = this._saldo.asObservable();

  descontar(cantidad: number) {
    const actual = this._saldo.value;
    this._saldo.next(actual - cantidad);
  }
}

import { Component, OnInit } from '@angular/core';
import { Transaction } from 'shared-auth-lib';

@Component({
  selector: 'app-transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.scss'],
})
export class TransactionsListComponent implements OnInit {
  columns: string[] = ['fecha', 'concepto', 'importe'];
  transactions: Transaction[] = [];

  constructor() {}

  ngOnInit(): void {
    this.transactions = [
      {
        id: '1',
        fecha: '2026-01-15',
        concepto: 'Transferencia nómina',
        importe: 2500,
        estado: 'confirmada',
      },
      {
        id: '2',
        fecha: '2026-01-10',
        concepto: 'Pago supermercado',
        importe: -65.34,
        estado: 'confirmada',
      },
      {
        id: '3',
        fecha: '2026-01-08',
        concepto: 'Pago luz',
        importe: -83.9,
        estado: 'pendiente',
      },
    ];
  }
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionDetailComponent } from './components/transaction-detail/transaction-detail.component';
import { TransactionsListComponent } from './components/transactions-list/transactions-list.component';
import { TransactionsComponent } from './transactions.component';
import { TransactionsErrorComponent } from './components/transactions-error/transactions-error.component';

export const TRANSACTIONS_ROUTES: Routes = [
  {
    path: '',
    component: TransactionsComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: TransactionsListComponent },
      { path: 'detail', component: TransactionDetailComponent },
      { path: '**', component: TransactionsErrorComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(TRANSACTIONS_ROUTES)],
  exports: [RouterModule],
})
export class TransactionsRoutingModule {}

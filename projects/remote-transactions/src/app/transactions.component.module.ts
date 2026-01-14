import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TransactionsRoutingModule } from './transactions.component.routing.module';
import { TransactionsComponent } from './transactions.component';
import { TransactionsListComponent } from './components/transactions-list/transactions-list.component';
import { TransactionDetailComponent } from './components/transaction-detail/transaction-detail.component';

@NgModule({
  declarations: [
    TransactionsComponent,
    TransactionsListComponent,
    TransactionDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TransactionsRoutingModule
  ],
  providers: []
})
export class TransactionsComponentModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TransactionsRoutingModule } from './transactions.component.routing.module';
import { TransactionsComponent } from './transactions.component';
import { TransactionsListComponent } from './components/transactions-list/transactions-list.component';
import { TransactionDetailComponent } from './components/transaction-detail/transaction-detail.component';
import { TransactionsErrorComponent } from './components/transactions-error/transactions-error.component';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    TransactionsComponent,
    TransactionsListComponent,
    TransactionDetailComponent,
    TransactionsErrorComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    TransactionsRoutingModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
  ],
  providers: [],
})
export class TransactionsComponentModule {}

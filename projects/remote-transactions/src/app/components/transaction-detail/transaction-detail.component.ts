import { Component } from '@angular/core';
import { UserService } from 'shared-auth-lib';

@Component({
  selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrls: ['./transaction-detail.component.scss'],
})
export class TransactionDetailComponent {
  constructor(private userService: UserService) {}

  confirmarTransferencia() {
    this.userService.descontar(100);

    window.dispatchEvent(
      new CustomEvent('transfer-confirmed', { detail: { amount: 100 } })
    );
  }
}

import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
})
export class TransactionsComponent {
  title = 'TransactionsComponent';
  isListPage = false;
  isDetailPage = false;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe((e: any) => {
        const url = e.urlAfterRedirects;

        this.isListPage = url.endsWith('/list') || url.endsWith('/list/');
        this.isDetailPage = url.endsWith('/detail') || url.endsWith('/detail/');
      });
  }
}

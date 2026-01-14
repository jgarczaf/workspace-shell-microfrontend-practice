import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const SHELL_ROUTES: Routes = [
  {
    path: 'transactions',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        exposedModule: './RemoteTransactionsModule',
      }).then((m) => m.TransactionsComponentModule),
  },
  {
    path: '',
    redirectTo: '/transactions',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/transactions',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(SHELL_ROUTES)],
  exports: [RouterModule],
})
export class ShellRoutingModule {}

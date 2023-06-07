import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'modules', loadChildren: () => import('./modules/modules.module').then(m => m.ModulesModule)},

  { path: 'test', loadChildren: () => import('./test/test.module').then(m => m.TestModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

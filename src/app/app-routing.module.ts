import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DominicodeComponent } from './Pages/domicode/dominicode/dominicode.component';
const routes: Routes = [
  //declaramos el pat de nuestra ruta asignandola a nuestro componente
  {path: 'dominicode', component: DominicodeComponent},
  { path: 'products', loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsModule) },
  {path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

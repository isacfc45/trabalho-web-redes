import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AplicacaoComponent } from './views/aplicacao/aplicacao.component';
import { ConceitoComponent } from './views/conceito/conceito.component';
import { ExemplosComponent } from './views/exemplos/exemplos.component';
import { FuncionamentoComponent } from './views/funcionamento/funcionamento.component';
import { HomePageComponent } from './views/home-page/home-page.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'home', component: HomePageComponent},
  {path: 'aplicacao', component: AplicacaoComponent},
  {path: 'conceito', component: ConceitoComponent},
  {path: 'funcionamento', component: FuncionamentoComponent},
  {path: 'exemplo', component: ExemplosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

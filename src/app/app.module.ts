import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {CardModule} from 'primeng/card';
import {SidebarModule} from 'primeng/sidebar';
import {ButtonModule} from 'primeng/button';
import {MenubarModule} from 'primeng/menubar';
import {CarouselModule} from 'primeng/carousel';
import { NgImageSliderModule } from 'ng-image-slider';

import { HomePageComponent } from './views/home-page/home-page.component';
import { AplicacaoComponent } from './views/aplicacao/aplicacao.component';
import { MenuComponent } from './components/menu/menu.component';
import { ConceitoComponent } from './views/conceito/conceito.component';
import { FuncionamentoComponent } from './views/funcionamento/funcionamento.component';
import { ExemplosComponent } from './views/exemplos/exemplos.component';
import { CarrosselComponent } from './components/carrossel/carrossel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AplicacaoComponent,
    MenuComponent,
    ConceitoComponent,
    FuncionamentoComponent,
    ExemplosComponent,
    MenuComponent,
    CarrosselComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CardModule,
    SidebarModule,
    ButtonModule,
    MenubarModule,
    CarouselModule,
    NgImageSliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

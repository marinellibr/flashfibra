import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { ServicosComponent } from './servicos/servicos.component';
import { BannerAppComponent } from './banner-app/banner-app.component';
import { TesteVelocidadeComponent } from './teste-velocidade/teste-velocidade.component';
import { FooterComponent } from './footer/footer.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { ContatoComponent } from './contato/contato.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    ServicosComponent,
    BannerAppComponent,
    TesteVelocidadeComponent,
    FooterComponent,
    EmpresaComponent,
    ContatoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

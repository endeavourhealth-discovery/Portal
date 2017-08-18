import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {Http, HttpModule, RequestOptions, XHRBackend} from "@angular/http";
import {AppMenuService} from "./app-menu.service";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {KeycloakService} from "eds-angular4/dist/keycloak/keycloak.service";
import {keycloakHttpFactory} from "eds-angular4/dist/keycloak/keycloak.http";
import {LayoutModule, MenuService} from "eds-angular4";
import {MainComponent} from "./portal/main/main.component";
import {PortalModule} from "./portal/portal.module";
import {MenuComponent} from "./portal/menu/menu.component";

export class DummyComponent {}

const appRoutes: Routes = [
  { path: '', component: MenuComponent },
  { path: 'eds-user-manager', component: DummyComponent }
];

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    HttpModule,
    LayoutModule,
    PortalModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot()
  ],
  providers: [
    KeycloakService,
    { provide: Http, useFactory: keycloakHttpFactory, deps: [XHRBackend, RequestOptions, KeycloakService] },
    { provide: MenuService, useClass : AppMenuService }
  ],
  bootstrap: [MainComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import {RouterModule} from "@angular/router";
import {SecurityModule} from "eds-angular4";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { MenuComponent } from './menu/menu.component';
import {PortalService} from "./portal.service";

@NgModule({
  imports : [
    BrowserModule,
    FormsModule,
    CommonModule,
    SecurityModule,
    RouterModule,
    NgbModule
  ],
  declarations : [
    MainComponent,
    MenuComponent
  ],
  providers : [
    PortalService,
  ]
})
export class PortalModule { }

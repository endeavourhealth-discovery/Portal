import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MockSecurityService} from "./mock.security.service";
import {MockPortalService} from "./mock.portal.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers : [
    MockSecurityService,
    MockPortalService
  ]
})
export class MocksModule { }

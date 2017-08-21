import { Component, OnInit } from '@angular/core';
import {Domain} from "./models/domain";
import {PortalService} from "../portal.service";
import {KeycloakService, SecurityService} from "eds-angular4";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  protected applications : Domain[] = [];

  constructor(protected security : SecurityService, protected service : PortalService) {
    let vm = this;
    this.service.getConfig()
      .subscribe(
        (result) => vm.applications = result,
        (error) => console.error(error)
      );
  }

  ngOnInit() {
  }

  hasPermission(role : string) {
    if (role == null || role == '')
      return true;

    return this.security.currentUser.permissions.includes(role);
  }

  openWindow(url : string) {
    window.open(url);
  }
}

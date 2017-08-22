import { Component, OnInit } from '@angular/core';
import {Domain} from "./models/domain";
import {PortalService} from "../portal.service";
import {SecurityService} from "eds-angular4";
import {Access} from "eds-angular4/dist/security/models/Access";

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

  hasPermission(client, role : string) {
    if (role == null || role == '')
      return true;

    let clientAccess : Access = this.security.currentUser.clientAccess[client];

    if (clientAccess && clientAccess.roles)
      return clientAccess.roles.includes(role);

    return false;
  }

  openWindow(url : string) {
    window.open(url);
  }
}

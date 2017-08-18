import { Component, OnInit } from '@angular/core';
import {SecurityService} from "eds-angular4";
import {User} from "eds-angular4/dist/security/models/User";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  currentUser:User;

  constructor(private securityService:SecurityService) {
    let vm = this;

    vm.currentUser = this.securityService.getCurrentUser();
  }

  ngOnInit() {
  }

  navigateUserAccount() {
    var url = window.location.protocol + "//" + window.location.host;
    url = url + "/eds-user-manager/#/app/users/userManagerUserView";
    window.location.href = url;
  }

  logout() {
    this.securityService.logout();
  };
}

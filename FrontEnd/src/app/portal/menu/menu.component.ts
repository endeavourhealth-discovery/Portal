import { Component, OnInit } from '@angular/core';
import {Domain} from "./models/domain";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  protected applications : Domain[] = [
    {
      name : 'Utilities',
      icon : 'fa fa-wrench',
      description : 'Summary description of what "Utilities" are...',
      items : [
        {
          name : 'Prevalence and Incidence',
          icon : 'fa fa-bar-chart',
          url : '/compass/app/utilities?utilId=1'
        }
      ]
    },

    {
      name : 'Compass',
      icon : 'fa fa-compass',
      description : 'Summary description of what "Compass" is...',
      items : [
        {
          name : 'Dashboard',
          icon : 'fa fa-dashboard',
          url : '/compass/app/dashboard'
        },
        {
          name : 'Library',
          icon : 'fa fa-book',
          url : '/compass/app/library'
        },
        {
          name : 'Utilities',
          icon : 'fa fa-wrench',
          url : '/compass/app/utilities'
        },
      ]
    },

    {
      name : 'Data Checker',
      icon : 'fa fa-search',
      description : 'Data integrity checker application',
      items : [
        {
          name : 'Patient Explorer',
          icon : 'fa fa-user',
          url : '/dataChecker/app/patientExplorer'
        },
        {
          name : 'Validation Reports',
          icon : 'fa fa-file',
          url : '/dataChecker/app/validationReports'
        }
      ]
    },

  ];

  constructor() { }

  ngOnInit() {
  }

  openWindow(url : string) {
    window.open(url);
  }
}

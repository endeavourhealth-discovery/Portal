import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuComponent } from './menu.component';
import {MockSecurityService} from "../../mocks/mock.security.service";
import {SecurityService} from "eds-angular4";
import {PortalService} from "../portal.service";
import {MockPortalService} from "../../mocks/mock.portal.service";

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuComponent ],
      providers: [
        {provide : SecurityService, useClass: MockSecurityService },
        {provide : PortalService, useClass: MockPortalService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should have 3 clients', () => {
    let jumbos : any = document.getElementsByClassName('jumbotron');
    expect(jumbos.length).toBe(3);
  });

  it('should disable Utilities -> Prev and Inc', () => {
    let prevIncBtn : any = document.getElementsByClassName('btn')[0];
    expect(prevIncBtn.disabled).toBeTruthy();
  });

  it('should enable Compass -> Dashboard', () => {
    let dashboardBtn : any = document.getElementsByClassName('btn')[1];
    expect(dashboardBtn.disabled).toBeFalsy();
  });
});

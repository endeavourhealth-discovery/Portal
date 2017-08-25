import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComponent } from './main.component';
import {SecurityService} from "eds-angular4";
import {MockSecurityService} from "../../mocks/mock.security.service";
import {MocksModule} from "../../mocks/mocks.module";
import {RouterTestingModule} from "@angular/router/testing";

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports : [RouterTestingModule , MocksModule],
      declarations: [ MainComponent ],
      providers: [ {provide : SecurityService, useClass: MockSecurityService } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

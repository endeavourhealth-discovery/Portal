import {Injectable} from "@angular/core";
import {MenuOption} from "eds-angular4/dist/layout/models/MenuOption";
import {AbstractMenuProvider} from "eds-angular4";
import {MenuComponent} from './portal/menu/menu.component';
import {Routes} from '@angular/router';

export class DummyComponent {}

@Injectable()
export class AppMenuService implements  AbstractMenuProvider {
  getClientId(): string {
    return 'eds-portal';
  }
  getApplicationTitle(): string {
    return 'Discovery Launch Vehicle';
  }
  getMenuOptions():MenuOption[] {
    return [];
  }

  static getRoutes(): Routes {
    return [
      { path: '', component: MenuComponent },
      { path: 'eds-user-manager', component: DummyComponent }
    ];
  }
}

import {Injectable} from "@angular/core";
import {MenuOption} from "eds-angular4/dist/layout/models/MenuOption";
import {AbstractMenuProvider} from "eds-angular4";

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
}

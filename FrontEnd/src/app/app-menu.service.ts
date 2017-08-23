import {Injectable} from "@angular/core";
import {MenuService} from "eds-angular4";
import {MenuOption} from "eds-angular4/dist/layout/models/MenuOption";

@Injectable()
export class AppMenuService implements  MenuService {
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

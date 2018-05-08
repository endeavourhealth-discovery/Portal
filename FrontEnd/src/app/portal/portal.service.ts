import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Domain} from "./menu/models/domain";

@Injectable()
export class PortalService {

  constructor(private http : Http) { }

  public getConfig() : Observable<Domain[]> {
    return this.http.get('/portal-api/config', {withCredentials : true})
      .map((response) => response.json());
  }

}

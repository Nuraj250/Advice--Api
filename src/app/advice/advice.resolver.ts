import { ActivatedRouteSnapshot, Resolve, ResolveStart, RouterStateSnapshot } from "@angular/router";
import { AdviceService } from "./advice.service";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root' // Or provide in a specific module
  })
  

export class AdviceResolver implements Resolve<any>{

    constructor(private adviceService:AdviceService){};


    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.adviceService.getAddvice();
    }
}
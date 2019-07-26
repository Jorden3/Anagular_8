import { Observable } from "rxjs";
import { CanDeactivate, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot } from "@angular/router";

export interface CanComponentDeactivte {
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

export class CanDeactiveGuard implements CanDeactivate<CanComponentDeactivte> {
    canDeactivate(component: CanComponentDeactivte,
        currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot,
        nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
            return component.canDeactivate();
        }
}

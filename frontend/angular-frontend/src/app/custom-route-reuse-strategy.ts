import { RouteReuseStrategy, ActivatedRouteSnapshot, DetachedRouteHandle } from "@angular/router";

export class CustomRouteReuseStrategy implements RouteReuseStrategy {

    private storedRoutes = new Map<string, DetachedRouteHandle>();

    shouldDetach(route: ActivatedRouteSnapshot): boolean {
        // throw new Error('Method not implemented.');
        return route.routeConfig!.path === 'monsters'; // maybe add exclamation mark... return route.routeConfig!.path === 'monsters';
        // return true 
    }
    store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
        // throw new Error('Method not implemented.');
        this.storedRoutes.set(route.routeConfig!.path!, handle);
    }
    shouldAttach(route: ActivatedRouteSnapshot): boolean {
        // throw new Error('Method not implemented.');
        return !!route.routeConfig && !!this.storedRoutes.get(route.routeConfig!.path!);
    }
    retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
        return this.storedRoutes.get(route.routeConfig!.path!) as DetachedRouteHandle
    }
    shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
        return future.routeConfig === curr.routeConfig;
    }
}
import {RouteInfo} from '../types';
import View from './view';

export default class Router{
    routeTable: RouteInfo[];
    defaultRoute: RouteInfo | null;
    
    constructor(){
      this.routeTable = [];
      
  
      window.addEventListener('hashchange', this.route.bind(this));
  
      this.defaultRoute = null;
    }
  
    setDefaultPage(page: View): void{
      this.defaultRoute = {
        path: '',
        page: page
      }
    }
  
    addRoutePath(path: string, page: View): void{
      this.routeTable.push({
        path: path,
        page: page,
      })
    }
  
    route(){
      const routePath = location.hash;
  
      if(routePath === '' && this.defaultRoute){
        this.defaultRoute.page.render();
      }
  
      for(const routeInfo of this.routeTable){
        if(routePath.indexOf(routeInfo.path) >= 0){
          routeInfo.page.render();
          break;
        }
      }
    }
  }
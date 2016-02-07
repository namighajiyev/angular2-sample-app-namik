import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {FirstComponent} from './components/first.component'
import {SecondComponent} from './components/second.component'
@Component({
    selector: "my-app",
    templateUrl:"app/views/app-view.html",
    directives: [ROUTER_DIRECTIVES]
    
})
@RouteConfig([
  
  {path: '/first',   name: 'First',     component: FirstComponent , useAsDefault:true},
  {path: '/second', name: 'Second', component: SecondComponent},

])

export class AppComponent { }
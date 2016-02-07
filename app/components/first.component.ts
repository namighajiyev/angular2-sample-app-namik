import {Component} from 'angular2/core';
import {Router} from 'angular2/router';
@Component({
   templateUrl:"app/views/first-view.html"
})
export class FirstComponent {
constructor(private _router:Router){}


goToSecond(){
    this._router.navigate(['Second']);
}

}
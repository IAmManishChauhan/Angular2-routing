import { Component } from '@angular/core';

@Component({
 selector : 'my-app',
 template : `<nav class="mdl-navigation">
            <a class="mdl-navigation__link"  [routerLink]="['/home']">Home</a>
            <a class="mdl-navigation__link"  [routerLink]="['/about']">About</a>
            <a class="mdl-navigation__link"  [routerLink]="['/account']">Account</a>
          </nav><router-outlet></router-outlet>`

})

export class AppComponent {}
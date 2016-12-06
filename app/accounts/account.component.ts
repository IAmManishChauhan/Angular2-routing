import {Component} from '@angular/core';

class account {
    name : string;
    status : boolean
}

@Component({
selector : 'account-app',
//template : '<p>This is account</p>'
template : '<div *ngFor="let details of accounts">{{details.name}}</div> '
})

export class AccountApp{
accounts : account[] = [{
     name : 'Saving',
     status : true
}, { 
    name : 'current',
    status : true
}]
}

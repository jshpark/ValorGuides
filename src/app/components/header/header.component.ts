import { Component } from '@angular/core';
import {Router} from '@angular/router';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    constructor(private router: Router){}


    goToAgents(){
        this.router.navigateByUrl('/agents');
    }

    goToHome(){
        this.router.navigateByUrl('/');
    }
}
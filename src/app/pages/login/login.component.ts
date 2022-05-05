import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent{
    constructor(private router:Router, private activedRoute:ActivatedRoute){}

    login(){
        this.router.navigate(['./home'],{relativeTo: this.activedRoute});
    }
}
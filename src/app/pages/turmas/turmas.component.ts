import { ActivatedRoute } from '@angular/router';
import { Component } from "@angular/core";

@Component({
    templateUrl: './turmas.component.html',
    styleUrls: ['./turmas.component.scss']
})
export class TurmasComponent{
    constructor(private activatedRoute:ActivatedRoute){}

    turmas = this.activatedRoute.snapshot.data.turmas;
}
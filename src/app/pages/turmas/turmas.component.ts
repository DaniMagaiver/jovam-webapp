import { Component } from "@angular/core";

@Component({
    templateUrl: './turmas.component.html',
    styleUrls: ['./turmas.component.scss']
})
export class TurmasComponent{
    classes = [{ name: 'Turmas 1' }, { name: 'Turmas 2' }, { name: 'Turmas 3' }];
}
import { Component, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
    selector: 'error-401',
    templateUrl: './error-401.component.html',
    styleUrls: ['./error-401.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class Error401Component implements OnInit {

    constructor() {
    }

    ngOnInit(): void { }

    tryAgain() {}

}

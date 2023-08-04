import { Component, ViewEncapsulation, OnInit, ViewChild, ElementRef } from '@angular/core';

interface TranslatableMessages {
    comingSoon: string;
}
@Component({
    selector     : 'coming-soon',
    templateUrl  : './coming-soon.component.html',
    styleUrls    : ['./coming-soon.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ComingSoonComponent implements OnInit
{
    /**
     * Constructor
     */
        constructor( )
    {

    }
    ngOnInit() {
        
    }
}

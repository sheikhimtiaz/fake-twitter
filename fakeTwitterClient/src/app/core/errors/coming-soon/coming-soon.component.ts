import { Component, ViewEncapsulation, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DynamicTitleService } from '@igb2b-core/services';
import { getTranslationTexts } from '@igb2b-shared/translation-helper';

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
    @ViewChild('translatableTexts', { static: true, read: ElementRef }) translatableTexts: ElementRef<HTMLElement>;
    translatedTexts: TranslatableMessages;
    /**
     * Constructor
     */
        constructor(
            private _dynamicTitleService: DynamicTitleService,
        )
    {

    }
    ngOnInit() {
        this.translatedTexts = getTranslationTexts<TranslatableMessages>(this.translatableTexts);
        this._dynamicTitleService.setTabTitle(`${this.translatedTexts.comingSoon}`);
        
    }
}

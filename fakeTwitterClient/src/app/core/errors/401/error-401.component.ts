import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { FuseConfigService } from '@fuse/services/config.service';
import { AuthService } from '@igb2b-core/auth';

@Component({
    selector: 'error-401',
    templateUrl: './error-401.component.html',
    styleUrls: ['./error-401.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class Error401Component implements OnInit {

    constructor(
        private _fuseConfigService: FuseConfigService,
        private _authService: AuthService
    ) {
        this._hideNavigation();
    }

    ngOnInit(): void { }

    private _hideNavigation(): void {
        this._fuseConfigService.config = {
            layout: {
                navbar: {
                    hidden: true
                },
                toolbar: {
                    hidden: false
                },
                footer: {
                    hidden: true
                },
                sidepanel: {
                    hidden: true
                }
            }
        };
    }

    tryAgain() {
        this._authService.logout();
    }
}

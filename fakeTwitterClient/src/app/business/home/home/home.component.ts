import { Component, OnInit } from "@angular/core";
import { TweetLiveService } from "src/app/@api/fakeTwitter";
import { TokenStorageService } from "src/app/core/auth/services/token-storage.service";
import { config } from "src/app/core/configs/config";
import { UserProfile } from "src/app/core/models/user-profile.model";

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    userInfo$ = this._tweetLiveService.searchbyUsername(this._tokenService.getToken() || "", {token: this._tokenService.getToken() || ""});
    userProfile$ = this._tweetLiveService.getUsers(config.CONTENT_TYPE, this._tokenService.getToken() || "");
    tweetPost$ = this._tweetLiveService.getTweetsbyUserID(config.CONTENT_TYPE, this._tokenService.getToken() || "");

    User: UserProfile = {
        uid: "",
        displayName: "Imtiaz Ahmed",
        email: "imticorei54@gmail.com",
        userId: "sheikhimtiaz",
        photoUrl: "",
        bio: "Software Engineer",
        followers: 72,
        following: 114,
        createdAt: new Date(),
        updatedAt: new Date(),
        dataStatus: 'success',
    };

    constructor(private _tweetLiveService: TweetLiveService,
                private _tokenService: TokenStorageService,) {
    }


    ngOnInit(): void {
        
    }

}
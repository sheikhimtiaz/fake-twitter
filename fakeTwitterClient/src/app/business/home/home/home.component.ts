import { Component, OnInit } from "@angular/core";
import { TweetLiveService } from "src/app/@api/fakeTwitter";
import { TokenStorageService } from "src/app/core/auth/services/token-storage.service";
import { config } from "src/app/core/configs/config";
import { Tweet, TweetContent } from "src/app/core/models/tweet.model";
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
    Tweet: Tweet[] = [];
    Tweet2: Tweet = {
        tweet: "agagag agagag agag",
        createdAt: undefined,
        createdBy: "",
        createdByName: "agagag",
        createdByPhoto: "",
        createdByUsername: "",
        likes: 572,
        comments: 4,
        shares: 174,
        retweets: 5,
        isLiked: true,
        isRetweeted: true,
        isShared: true,
        isCommented: true,
        isEdited: false
    };
    constructor(private _tweetLiveService: TweetLiveService,
                private _tokenService: TokenStorageService,) {
    }


    ngOnInit(): void {
        const token: string = this._tokenService.getToken() || "";
        this._tweetLiveService.myTimeline(config.CONTENT_TYPE, token, "1").subscribe(res => {
            console.log(res);
            const response = JSON.parse(res);
            console.log(response);
            if(response.timeline) {
                const tweets: TweetContent[] = response.timeline;
                tweets.forEach(item => {
                    this.Tweet.push({
                        tweet: item.content,
                        createdAt: item.published,
                        createdBy: item.user.email,
                        createdByName: item.user.username,
                        createdByPhoto: "",
                        createdByUsername: item.user.username,
                        likes: 572,
                        comments: 4,
                        shares: 174,
                        retweets: 5,
                        isLiked: true,
                        isRetweeted: true,
                        isShared: true,
                        isCommented: true,
                        isEdited: false
                    })
                });
            }
        });
        
    }

}


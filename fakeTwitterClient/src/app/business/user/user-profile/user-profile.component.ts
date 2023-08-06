import { Component, OnInit } from "@angular/core";
import { TweetLiveService } from "src/app/@api/fakeTwitter";
import { TokenStorageService } from "src/app/core/auth/services/token-storage.service";
import { config } from "src/app/core/configs/config";
import { Tweet, TweetContent } from "src/app/core/models/tweet.model";
import { UserProfile } from "src/app/core/models/user-profile.model";

@Component({
    selector: 'user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
    userInfo$ = this._tweetLiveService.searchbyUsername(this._tokenService.getToken() || "", {token: this._tokenService.getToken() || ""});
    userProfile$ = this._tweetLiveService.getUsers(config.CONTENT_TYPE, this._tokenService.getToken() || "");
    tweetPost$ = this._tweetLiveService.getTweetsbyUserID(config.CONTENT_TYPE, this._tokenService.getToken() || "");

    userProfile: UserProfile = {
        uid: "",
        displayName: "Imtiaz Ahmed",
        email: "imticorei54@gmail.com",
        userId: "sheikhimtiaz",
        photoUrl: "",
        bio: "n/a",
        followers: 0,
        following: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        dataStatus: 'success',
    };
    Tweet: Tweet[] = [];
    
    constructor(private _tweetLiveService: TweetLiveService,
        private _tokenService: TokenStorageService,) {
}
    ngOnInit(): void {
        const token: string = this._tokenService.getToken() || "";
        this.getMyTweets(token);
    }
    getMyTweets(token: string) {
        this._tweetLiveService.getTweetsbyUserID(config.CONTENT_TYPE, token).subscribe(response=>{
            const res = JSON.parse(response);

            console.log(res);
            if(res.tweets) {
                const tweets: TweetContent[] = res.tweets;
                tweets.forEach(item => {
                    this.Tweet.push({
                        tweet: item.content,
                        createdAt: item.published,
                        createdBy: item.user.email,
                        createdByName: item.user.username,
                        createdByPhoto: "",
                        createdByUsername: item.user.username,
                        likes: 0,
                        comments: 0,
                        shares: 0,
                        retweets: 0,
                        isLiked: true,
                        isRetweeted: true,
                        isShared: true,
                        isCommented: true,
                        isEdited: false
                    })
                });
            }
        })
    }

}
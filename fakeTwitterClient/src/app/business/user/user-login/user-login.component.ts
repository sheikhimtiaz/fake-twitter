import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { TweetLiveService } from "src/app/@api/fakeTwitter";

@Component({
    selector: 'user-login',
    templateUrl: './user-login.component.html',
    styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

    loginForm!: FormGroup;

    constructor(private _formBuilder: FormBuilder,
        private _tweetLiveService: TweetLiveService,) { }
    
    ngOnInit(): void {
      this.loginForm = this._formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]]
      });
    }
  
    handleLoginForm() {
        this._tweetLiveService.login(this.loginForm.value).subscribe(res => {
            console.log(res);
        })
    }

    loginWithGoogle() {}

}
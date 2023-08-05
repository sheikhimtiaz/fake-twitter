import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { faGoogle, faTwitter, IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { TweetLiveService } from "src/app/@api/fakeTwitter";
import { AuthService } from "src/app/core/auth";

@Component({
    selector: 'user-login',
    templateUrl: './user-login.component.html',
    styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

    faTwitter: IconDefinition = faTwitter;
    faGoogle: IconDefinition = faGoogle;
    loginForm!: FormGroup;

    constructor(private _formBuilder: FormBuilder,
        private _tweetLiveService: TweetLiveService,
        private _authService: AuthService,
        private _router: Router,) { }
    
    ngOnInit(): void {
      this.loginForm = this._formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]]
      });
    }
  
    handleLoginForm() {
        this._authService.login(this.loginForm.value);
    }

    loginWithGoogle() {}

}
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { IconDefinition, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { TweetLiveService } from "src/app/@api/fakeTwitter";

@Component({
    selector: 'user-registration',
    templateUrl: './user-registration.component.html',
    styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {

    faTwitter: IconDefinition = faTwitter;

    regForm!: FormGroup;

    constructor(private _formBuilder: FormBuilder,
                private _tweetLiveService: TweetLiveService,
                private _router: Router,) { }
    
    ngOnInit(): void {
      this.regForm = this._formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        username: ['', [Validators.required, Validators.minLength(6)]]
      });
    }

    handleCreateProfile() {
        this._tweetLiveService.signup(this.regForm.value).subscribe(responnse => {
          const res = JSON.parse(responnse);
          console.log(res);
          if(res.message && res.message == 'successful'){
            console.log("Registration success!");
            this._router.navigateByUrl('/user/login');
          }
        })
    }

}
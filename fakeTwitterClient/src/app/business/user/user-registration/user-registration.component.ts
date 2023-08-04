import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { TweetLiveService } from "src/app/@api/fakeTwitter";

@Component({
    selector: 'user-registration',
    templateUrl: './user-registration.component.html',
    styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {


    regForm!: FormGroup;

    constructor(private _formBuilder: FormBuilder,
                private _tweetLiveService: TweetLiveService,) { }
    
    ngOnInit(): void {
      this.regForm = this._formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        username: ['', [Validators.required, Validators.minLength(6)]]
      });
    }

    handleCreateProfile() {
        this._tweetLiveService.signup(this.regForm.value).subscribe(responnse => {
          console.log(responnse);
        })
    }

}
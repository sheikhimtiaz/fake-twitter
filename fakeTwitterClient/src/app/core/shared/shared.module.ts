import { ProfileCardComponent } from './profile-card/profile-card.component';
import { FollowSuggestionComponent } from './follow-suggestion/follow-suggestion.component';
import { TrendingCardComponent } from './trending-card/trending-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FeedPostCardComponent } from './feed-post-card/feed-post-card.component';
import { FormsModule } from '@angular/forms';
import { FeedComponent } from './feed/feed.component';
import { LoaderScreenComponent } from './loader-screen/loader-screen.component';
import { CustomDatePipe } from './pipes/custom-date.pipe';


const widgetComponents = [
  ProfileCardComponent,
  FollowSuggestionComponent,
  TrendingCardComponent,
  FeedPostCardComponent,
  FeedComponent,
  LoaderScreenComponent,
  CustomDatePipe,
]

@NgModule({
  declarations: [...widgetComponents,],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule,
  ],
  exports: [...widgetComponents]
})
export class SharedModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { HeaderComponent } from './navigation/header/header.component';
import { QuestionsComponent } from './game/the-office/questions/questions.component';
import { QuestionComponent } from './game/the-office/questions/question/question.component';
import { QuestionListComponent } from './game/the-office/questions/question-list/question-list.component';
import { TriviaQuestionComponent } from './game/the-office/trivia/trivia-question/trivia-question.component';
import { TriviaAnswerComponent } from './game/the-office/trivia/trivia-answer/trivia-answer.component';
import { TriviaComponent } from './game/the-office/trivia/trivia.component';
import { PlayComponent } from './game/the-office/play/play.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    QuestionComponent,
    QuestionListComponent,
    TriviaComponent,
    TriviaQuestionComponent,
    TriviaAnswerComponent,
    HeaderComponent,
    PlayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

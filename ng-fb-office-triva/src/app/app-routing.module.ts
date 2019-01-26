import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TriviaComponent } from './trivia/trivia.component';
import { QuestionsComponent } from './questions/questions.component';
import { PlayComponent } from './play/play.component';

const routes: Routes = [
  { path: '', component: TriviaComponent },
  { path: 'trivia', component: TriviaComponent },
  { path: 'questions', component: QuestionsComponent },
  { path: 'play', component: PlayComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

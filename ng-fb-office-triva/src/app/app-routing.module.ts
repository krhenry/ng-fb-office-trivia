import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TriviaComponent } from './trivia/trivia.component';
import { QuestionsComponent } from './questions/questions.component';
import { GameComponent } from './game/game.component';

const routes: Routes = [
  { path: '', component: TriviaComponent },
  { path: 'trivia', component: TriviaComponent },
  { path: 'questions', component: QuestionsComponent },
  { path: 'game', component: GameComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

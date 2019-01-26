import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TriviaComponent } from './game/the-office/trivia/trivia.component';
import { QuestionsComponent } from './game/the-office/questions/questions.component';
import { PlayComponent } from './game/the-office/play/play.component';
import { VillainousBoardComponent } from './game/villainous/villainous-board/villainous-board.component';

const routes: Routes = [
  { path: '', component: TriviaComponent },
  { path: 'trivia', component: TriviaComponent },
  { path: 'questions', component: QuestionsComponent },
  { path: 'play', component: PlayComponent },
  { path: 'villainous', component: VillainousBoardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

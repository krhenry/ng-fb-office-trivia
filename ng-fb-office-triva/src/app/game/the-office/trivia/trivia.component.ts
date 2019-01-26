import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../questions/shared/question.service';

@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.component.html',
  styleUrls: ['./trivia.component.css'],
  providers: [QuestionService]
})
export class TriviaComponent implements OnInit {

  constructor(private questionService: QuestionService) { }

  ngOnInit() {
  }

}

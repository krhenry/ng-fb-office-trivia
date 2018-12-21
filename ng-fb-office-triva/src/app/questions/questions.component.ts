import { Component, OnInit } from '@angular/core';
import { QuestionService } from './shared/question.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
  providers: [QuestionService]
})
export class QuestionsComponent implements OnInit {

  constructor(private questionService: QuestionService) { }

  ngOnInit() {
  }

}

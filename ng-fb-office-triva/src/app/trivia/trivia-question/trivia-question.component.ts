import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/questions/shared/question.service';
import { Question } from 'src/app/questions/shared/question.model';

@Component({
  selector: 'app-trivia-question',
  templateUrl: './trivia-question.component.html',
  styleUrls: ['./trivia-question.component.css']
})
export class TriviaQuestionComponent implements OnInit {
  questionList: Question[];
  rndQuestionList: Question[];
  currentQuestion: string;
  count = 0;
  random: number;

  constructor(private questionService: QuestionService) { }

  ngOnInit() {
    const x = this.questionService.getData();
    x.snapshotChanges().subscribe(item => {
      this.questionList = [];
      this.count = 0;
      item.forEach(element => {
        const y = element.payload.toJSON();
        y['$key'] = element.key;
        this.questionList.push(y as Question);
        this.count += 1;
      });
      this.rndQuestionList = this.shuffle(this.questionList);
      this.currentQuestion = this.rndQuestionList[0].question;
    });
  }

  shuffle(array) {
    let m = array.length;

    while (m) {
      const i = Math.floor(Math.random() * m--);
      const t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
    return array;
  }
}

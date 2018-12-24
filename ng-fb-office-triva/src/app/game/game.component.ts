import { Component, OnInit, Injectable } from '@angular/core';
import { Question } from '../questions/shared/question.model';
import { QuestionService } from '../questions/shared/question.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
  providers: [QuestionService]
})
export class GameComponent implements OnInit {
  qNbr: number;
  qCount: number;

  questionList: Question[];
  rndQuestionList: Question[];
  currentQuestion: string;
  count = 0;
  random: number;

  answers: string[] = [];
  addAnswer: '';

  finalList: any = [];

  constructor(private questionService: QuestionService) { }

  ngOnInit() {
    this.qNbr = 0;
    this.qCount = 3;

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
      this.rndQuestionList = this.rndQuestionList.slice(this.qNbr, this.qCount);

      console.log(this.rndQuestionList);

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

  onSubmit(answerForm: NgForm): void {
    this.qNbr += 1;
    this.qCount -= 1;

    const x = answerForm.value.answer;
    this.answers.push(x);
    answerForm.reset();

    this.finalList.push({
      question: this.currentQuestion,
      answer: x
    });

    if (this.qCount !== 0) {
      this.currentQuestion = this.rndQuestionList[this.qNbr].question;
    } else if (this.qCount === 0) {
      console.log('questions done');
    }


  }

}

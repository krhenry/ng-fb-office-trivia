import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Question } from './question.model';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class QuestionService {
  questionList: AngularFireList<any>;
  selectedQuestion: Question = new Question();

  constructor(private firebase: AngularFireDatabase) { }

  getData() {
    this.questionList = this.firebase.list('questions');
    return this.questionList;
  }

  insertQuestion(question: Question) {
    this.questionList.push({
      season: question.season,
      question: question.question,
      answer: question.answer
    });
  }

  updateQuestion(question: Question) {
    this.questionList.update(question.$key, {
      season: question.season,
      question: question.question,
      answer: question.answer
    });
  }

  deleteQuestion($key: string) {
    this.questionList.remove($key);
  }
}

import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../shared/question.service';
import { ToastrService } from 'ngx-toastr';
import { Question } from '../shared/question.model';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
  questionList: Question[];
  constructor(private questionService: QuestionService, private tostr: ToastrService) { }

  ngOnInit() {
    const x = this.questionService.getData();
    x.snapshotChanges().subscribe(item => {
      this.questionList = [];
      item.forEach(element => {
        const y = element.payload.toJSON();
        y['$key'] = element.key;
        this.questionList.push(y as Question);
      });
    });
  }

  onEdit(quest: Question) {
    this.questionService.selectedQuestion = Object.assign({}, quest);
  }

  onDelete(key: string) {
    if (confirm('Are you sure to delete this question ?') === true) {
      this.questionService.deleteQuestion(key);
      this.tostr.warning('Deleted Successfully', 'Question submit');
    }
  }

}

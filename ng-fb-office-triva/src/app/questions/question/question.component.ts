import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../shared/question.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  constructor(private questionService: QuestionService, private tostr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(questionForm: NgForm) {
    if (questionForm.value.$key == null) {
      this.questionService.insertQuestion(questionForm.value);
    } else {
      this.questionService.updateQuestion(questionForm.value);
      this.resetForm(questionForm);
      this.tostr.success('Submitted Successfully', 'Question Submitted');
    }
  }

  resetForm(questionForm?: NgForm) {
    if (questionForm != null) {
      questionForm.reset();
    } else {
      this.questionService.selectedQuestion = {
        $key: null,
        season: 0,
        question: '',
        answer: ''
      };
    }
  }
}

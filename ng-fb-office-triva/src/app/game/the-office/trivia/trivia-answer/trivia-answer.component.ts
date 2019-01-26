import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators, FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-trivia-answer',
  templateUrl: './trivia-answer.component.html',
  styleUrls: ['./trivia-answer.component.css']
})
export class TriviaAnswerComponent implements OnInit {
  answers: string[] = [];
  addAnswer: '';

  constructor(private tostr: ToastrService) { }

  ngOnInit() {
  }

  onSubmit(answerForm: NgForm): void {
    const x = answerForm.value.answer;
    this.answers.push(x);
    answerForm.reset();
  }

}

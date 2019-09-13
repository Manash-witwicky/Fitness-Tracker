import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Excercise } from '../excercise.model';
import { ExcerciseService } from '../excercise.service';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css'],
})
export class NewTrainingComponent implements OnInit {
  public excercises: Excercise[] = [];

  constructor(private excerciseService: ExcerciseService) {}

  onNewTraining(form: NgForm) {
    this.excerciseService.startExcercise(form.value.excercise);
  }

  ngOnInit() {
    this.excercises = this.excerciseService.getExcercise();
  }
}

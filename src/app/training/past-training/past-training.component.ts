import { Component, OnInit } from '@angular/core';
import { Excercise } from '../excercise.model';
import { ExcerciseService } from '../excercise.service';

@Component({
  selector: 'app-past-training',
  templateUrl: './past-training.component.html',
  styleUrls: ['./past-training.component.css'],
})
export class PastTrainingComponent implements OnInit {
  private excercises: Excercise[] = [];
  constructor(private excerciseService: ExcerciseService) {}

  ngOnInit() {
    this.excercises = this.excerciseService.getCompletedCancelledExcercise();
  }
}

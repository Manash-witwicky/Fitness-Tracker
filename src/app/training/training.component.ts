import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ExcerciseService } from './excercise.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css'],
})
export class TrainingComponent implements OnInit {
  onNewTraining = false;

  excerciseSubscription: Subscription;
  constructor(private excerciseService: ExcerciseService) {}

  ngOnInit() {
    this.excerciseSubscription = this.excerciseService.excerciseChanged.subscribe(
      (excercise) => {
        if (excercise) {
          this.onNewTraining = true;
        } else {
          this.onNewTraining = false;
        }
      },
    );
  }
}

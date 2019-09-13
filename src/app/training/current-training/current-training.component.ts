import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ExcerciseService } from '../excercise.service';
import { StopTimerDialogComponent } from '../stop-timer-dialog.component';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css'],
})
export class CurrentTrainingComponent implements OnInit {
  @Output() trainingExit = new EventEmitter<void>();

  progress = 0;

  timer: any;

  constructor(
    private dialog: MatDialog,
    private excerciseService: ExcerciseService,
  ) {}

  ngOnInit() {
    this.setOrResetTime();
  }

  public setOrResetTime() {
    const steps =
      (this.excerciseService.getCurrentExcercise().duration / 100) * 1000;
    this.timer = setInterval(() => {
      this.progress += 1;
      if (this.progress >= 100) {
        this.excerciseService.completeExcercise();
        clearInterval(this.timer);
      }
    }, steps);
  }

  public onStop() {
    clearInterval(this.timer);
    const dialogRef = this.dialog.open(StopTimerDialogComponent, {
      data: {
        progress: this.progress,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.excerciseService.cancelExcercise(this.progress);
        // this.trainingExit.emit();
      } else {
        this.setOrResetTime();
      }
    });
  }
}

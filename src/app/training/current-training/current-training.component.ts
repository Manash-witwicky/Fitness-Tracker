import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material';
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

  constructor(private dialog: MatDialog) {}

  ngOnInit() {
    this.setOrResetTime();
  }

  public setOrResetTime() {
    this.timer = setInterval(() => {
      this.progress += 5;
      if (this.progress >= 100) {
        clearInterval(this.timer);
      }
    }, 1000);
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
        this.trainingExit.emit();
      } else {
        this.setOrResetTime();
      }
    });
  }
}

import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-stop-timer',
  template: `
    <h2 mat-dialog-title>Stop Training</h2>
    <mat-dialog-content
      ><p>You have already completed {{ data.progress }}%</p>
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button [mat-dialog-close]="false">No</button>
      <button mat-button [mat-dialog-close]="true">Yes</button>
    </mat-dialog-actions>
  `,
})
export class StopTimerDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}

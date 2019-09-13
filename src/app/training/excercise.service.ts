import { Subject } from 'rxjs';
import { Excercise } from './excercise.model';

export class ExcerciseService {
  public currentExcercise: Excercise;

  public excerciseChanged = new Subject<Excercise>();

  // holds the completed , cancelled excercise to show in past excercise
  private excercise: Excercise[] = [];

  private AvailableExcercise: Excercise[] = [
    { id: 'crunches', name: 'Crunches', duration: 30, calories: 80 },
    { id: 'side-lunges', name: 'Side Lunges', duration: 180, calories: 60 },
    { id: 'touch-toes', name: 'Touch-toes', duration: 60, calories: 50 },
    { id: 'burpess', name: 'Burpess', duration: 50, calories: 20 },
  ];

  getExcercise() {
    return [...this.AvailableExcercise];
  }

  startExcercise(currentExcerciseId: String) {
    this.currentExcercise = this.AvailableExcercise.find(
      (excercise) => excercise.id === currentExcerciseId,
    );
    this.excerciseChanged.next({ ...this.currentExcercise });
  }

  completeExcercise() {
    // before setting current excercise to NULL, store it in an array with date and status property
    this.excercise = [
      ...this.excercise,
      { ...this.currentExcercise, date: new Date(), status: 'completed' },
    ];
    this.currentExcercise = null;
    this.excerciseChanged.next(null);
  }

  cancelExcercise(progress: any) {
    this.excercise = [
      ...this.excercise,
      {
        ...this.currentExcercise,
        duration: this.currentExcercise.duration * (progress / 100),
        calories: this.currentExcercise.duration * (progress / 100),
        date: new Date(),
        status: 'cancelled',
      },
    ];
    this.currentExcercise = null;
    this.excerciseChanged.next(null);
  }

  getCurrentExcercise() {
    return { ...this.currentExcercise };
  }

  getCompletedCancelledExcercise() {
    return [...this.excercise];
  }
}

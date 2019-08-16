import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css'],
})
export class SidenavListComponent implements OnInit, OnDestroy {
  @Output()
  CloseSidenav = new EventEmitter<void>();
  private authSubscription: Subscription;
  private isAuth = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authSubscription = this.authService.authStatus.subscribe((status) => {
      this.isAuth = status;
    });
  }

  onClose() {
    this.CloseSidenav.emit();
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }
}

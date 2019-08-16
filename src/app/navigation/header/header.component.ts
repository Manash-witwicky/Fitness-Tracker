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
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Output()
  sidenavToggle = new EventEmitter<void>();
  private isAuth = false;
  private authSubscription: Subscription;
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authSubscription = this.authService.authStatus.subscribe((status) => {
      this.isAuth = status;
    });
  }

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }
}

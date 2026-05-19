import { Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  Router,
  RouterOutlet,
  RouterModule,
  NavigationEnd,
} from "@angular/router";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenav, MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";
import { MatDividerModule } from "@angular/material/divider";
import { MatListModule } from "@angular/material/list";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { LoadingSpinnerComponent } from "./shared/components/loading-spinner.component";
import { AuthService } from "./core/services/auth.service";
import { Subject } from "rxjs";
import { filter, takeUntil } from "rxjs/operators";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatDividerModule,
    MatListModule,
    MatSnackBarModule,
    LoadingSpinnerComponent,
  ],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit, OnDestroy {
  @ViewChild("sidenav") sidenav!: MatSidenav;

  showLayout = true;
  private destroy$ = new Subject<void>();

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {
    this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd,
        ),
        takeUntil(this.destroy$),
      )
      .subscribe((event) => {
        this.showLayout = !event.urlAfterRedirects.includes("/login");
      });
  }

  ngOnInit(): void {
    // If user is not authenticated, ensure we start on the login page
    const current = this.router.url || "/";
    if (!this.authService.isAuthenticated()) {
      if (!current.includes("/login")) {
        // navigate after a short delay so router is initialized
        setTimeout(() => this.router.navigate(["/login"]), 0);
      }
    } else {
      if (current === "/" || current === "") {
        setTimeout(() => this.router.navigate(["/dashboard"]), 0);
      }
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  getCurrentUserEmail(): string {
    return this.authService.getUser()?.email || "Usuário";
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(["/login"]);
  }
}

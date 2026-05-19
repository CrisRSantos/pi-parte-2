import { Injectable } from "@angular/core";
import { MatSnackBar, MatSnackBarConfig } from "@angular/material/snack-bar";

export type NotificationType = "success" | "error" | "warning" | "info";

@Injectable({
  providedIn: "root",
})
export class NotificationService {
  constructor(private snackBar: MatSnackBar) {}

  showSuccess(message: string, duration: number = 3000): void {
    this.show(message, "success", duration);
  }

  showError(message: string, duration: number = 3000): void {
    this.show(message, "error", duration);
  }

  showWarning(message: string, duration: number = 3000): void {
    this.show(message, "warning", duration);
  }

  showInfo(message: string, duration: number = 3000): void {
    this.show(message, "info", duration);
  }

  private show(
    message: string,
    type: NotificationType,
    duration: number,
  ): void {
    const config: MatSnackBarConfig = {
      duration,
      panelClass: [`snackbar-${type}`],
      horizontalPosition: "end",
      verticalPosition: "bottom",
    };

    this.snackBar.open(message, "Fechar", config);
  }
}

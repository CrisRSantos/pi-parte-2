import { Component, Input, Output, EventEmitter } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatPaginatorModule, PageEvent } from "@angular/material/paginator";

@Component({
  selector: "app-data-table",
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatPaginatorModule],
  templateUrl: "./data-table.component.html",
  styleUrls: ["./data-table.component.scss"],
})
export class DataTableComponent {
  @Input() items: any[] = [];
  @Input() columns: Array<{ key: string; label: string }> = [];
  @Input() paginator = true;
  @Input() total = 0;
  @Input() pageSize = 10;
  @Input() pageSizeOptions = [5, 10, 25, 50];
  @Input() actions = true;

  @Output() onEdit = new EventEmitter<any>();
  @Output() onDelete = new EventEmitter<any>();
  @Output() onPageChange = new EventEmitter<PageEvent>();
}

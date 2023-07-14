import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paginator',
  template: `
    <div class="paginator">
      <button class="button" (click)="changePage(currentPage - 1)" [disabled]="currentPage === 1">Previous</button>
      <span class="span">{{ currentPage }} / {{ totalPages }}</span>
      <button class="button" (click)="changePage(currentPage + 1)" [disabled]="currentPage === totalPages">Next</button>
    </div>
  `,
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent {
  @Input() currentPage!: number;
  @Input() itemsPerPage!: number;
  @Input() totalItems!: number;
  @Output() pageChanged = new EventEmitter<number>();

  get totalPages(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  changePage(page: number) {
    this.pageChanged.emit(page);
  }
}
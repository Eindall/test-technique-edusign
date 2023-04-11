import {
  Component,
  EventEmitter,
  OnChanges,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
})
export class StudentComponent implements OnChanges {
  @Input() student: any;

  @Output() setAbsent = new EventEmitter<any>();
  public presence = 'Absent';

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['student']) {
      this.presence = changes['student'].currentValue.presenceState
        ? 'Présent'
        : 'Absent';
    }
  }

  public onSetAbsent(): void {
    this.setAbsent.emit(this.student.id);
  }
}

import { Component, OnInit } from '@angular/core';
import { DbService } from './db.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private readonly db: DbService) {}

  public title = 'Test Technique Edusign';
  public students = [];

  public ngOnInit(): void {
    this.db.getStudentList().subscribe((res: any) => {
      this.students = res;
    });
  }

  public onSetStudentAbsent($event: any): void {
    this.db.setAbsent({ idStudent: $event }).subscribe((res: any) => {
      this.students = res;
    });
  }
}

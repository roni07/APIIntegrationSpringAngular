import { Component, OnInit } from '@angular/core';
import {StudentService} from './student.service';
import {Student} from './student';
import {FormControl, FormGroup, FormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  students: Student[];
  res: string;
  student = new Student();
  private form: FormGroup;
  constructor(private studentService: StudentService) {
    this.form = new FormGroup({
      studentId: new FormControl('', Validators.required),
      studentName: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required),
      cgpa: new FormControl('', Validators.required)
    });
  }
  ngOnInit() {
    this.getStudents();
  }
  getStudents(): void {
    this.studentService.getAllStudent()
      .subscribe((data) => this.students = data);
  }
  addStudent() {
    return this.studentService.insertStudent(this.form.value)
      .subscribe(data => this.students.push(data), this.form.reset);
  }
  get studentId() {
    return this.form.get('studentId');
  }
  get studentName() {
    return this.form.get('studentName');
  }
  get age() {
    return this.form.get('age');
  }
  get cgpa() {
    return this.form.get('cgpa');
  }
}

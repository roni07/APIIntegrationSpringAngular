import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from './student';

@Injectable()
export class StudentService {

  httpOptions = {headers : new HttpHeaders({'Content-Type' : 'application/json'})};
  baseUrl = 'http://localhost:8081/student';
  constructor(private httpService: HttpClient) { }

  getAllStudent(): Observable<Student[]> {
    return this.httpService.get<Student[]>(this.baseUrl + '/all');
  }

  insertStudent(student: Student) {
    return this.httpService.post<Student>(this.baseUrl + '/save', student, this.httpOptions);
  }

}

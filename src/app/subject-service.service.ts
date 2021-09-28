import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectServiceService {

  constructor() { }
  //userName = new Subject<any>()
  userName = new BehaviorSubject('Abc')
}

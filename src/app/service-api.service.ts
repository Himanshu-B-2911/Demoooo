import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceApiService {
  
username:any;

userName = new BehaviorSubject('Himanshu')

  constructor() { }
}

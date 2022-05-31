import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  language = localStorage.getItem('language') || 'en';
  constructor() { }
}

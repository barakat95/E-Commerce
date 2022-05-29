import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  language = localStorage.getItem('language') || 'en';
  constructor() { }
}

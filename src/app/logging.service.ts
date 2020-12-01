import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LoggingService {
  lastlog: string;

  printLog(message: string) {
    console.info('message', message);
    console.info('this.lastlog', this.lastlog);
    this.lastlog = message;
  }
}

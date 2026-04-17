import { Injectable } from '@angular/core';
import { BehaviorSubject, interval, switchMap, of, throwError } from 'rxjs';
import { catchError, startWith } from 'rxjs/operators';
import { Service } from '../models/service.model';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ServiceService {

  private servicesSubject = new BehaviorSubject<any[]>([]);
  services$ = this.servicesSubject.asObservable();

  
  // 🔁 polling tiap 15 detik
  // startPolling() {
  //   interval(15000)
  //   .pipe(
  //     startWith(0),
  //     switchMap(() =>
  //       this.fetchData().pipe(
  //         // catchError(() => {
  //         catchError((err) => {
  //           console.log('ERROR:', err);
  //           return of(this.generateMock());
  //         })
  //       )
  //     )
  //   )
    
  //   .subscribe((data) => {
  //     console.log('UPDATE BARU:', new Date().toLocaleTimeString());
  //     this.services$.next([...data]);
  //   });
  // }

  startPolling() {
  interval(15000)
    .pipe(
      startWith(0),
      switchMap(() =>
        this.fetchData().pipe(
          catchError((err) => {
            console.error('API Error:', err);

            // fallback data
            return of([
              {
                id: 0,
                name: 'Service unavailable',
                version: '-',
                status: 'DOWN',
                lastHeartbeat: new Date().toISOString(),
                error: true
              }
            ]);
          })
        )
      )
    )
    .subscribe(data => {
      this.servicesSubject.next([...data]);
    });
}
  
  constructor() {
    this.startPolling();
  }

  // 📡 ambil data ke UI
  getServices() {
    return this.servicesSubject.asObservable();
  }

  // 🧪 simulasi API
  fetchData() {
    if (Math.random() < 0.2) {
      return throwError(() => new Error('500 error'));
    }
    return of(this.generateMock());
  }

  private randomStatus(): 'UP' | 'DOWN' | 'WARNING' {
    const statuses = ['UP', 'DOWN', 'WARNING'];
    return statuses[Math.floor(Math.random() * statuses.length)] as any;
  }

  generateMock() {
  return Array.from({ length: 6 }).map((_, i) => ({
    id: i,
    name: `Service-${i}`,
    version: `1.0.${i}`,
    status: this.randomStatus(),
    lastHeartbeat: new Date().toLocaleTimeString()
  }));
}

  // 📜 log detail
  getLogs(serviceId: number) {
    return Array.from({ length: 5 }).map((_, i) => ({
      time: new Date().toLocaleTimeString(),
      message: `Log ${i + 1} for service ${serviceId}`
    }));
  }

  // getLogsStream(serviceId: number) {
  // return interval(15000).pipe(
  //   startWith(0),
  //   map(() => this.generateLogs(serviceId))
  //   );
  // }
  getLogsStream(serviceId: number) {
  return interval(3000).pipe(
    startWith(0),
    map(() => {
      // simulasi error random
      if (Math.random() < 0.2) {
        throw new Error('Log error');
      }
      return this.generateLogs(serviceId);
    }),
    catchError(() =>
      of([
        {
          time: new Date().toLocaleTimeString(),
          message: 'Failed to load data'
          }
        ])
      )
    );
  }

  generateLogs(serviceId: number) {  // 👈 tambahkan ini
    return Array.from({ length: 5 }).map((_, i) => {
      const serviceStatus = this.randomStatus();

      return {
        time: new Date().toLocaleTimeString(),
        serviceStatus: serviceStatus,
        message: `Log ${i + 1} for service ${serviceId} - ${this.randomStatus()}`
      }
    });
  }

}
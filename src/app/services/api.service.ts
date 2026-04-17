import { Injectable } from '@angular/core';
import { Observable, interval, map } from 'rxjs';
import { Service } from '../models/service.model';
// import { throwError, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {

  private services: Service[] = [
    { id: 1, name: 'Auth Service', version: '1.0', status: 'UP', lastHeartbeat: new Date().toISOString() },
    { id: 2, name: 'Payment Service', version: '1.2', status: 'UP', lastHeartbeat: new Date().toISOString() },
    { id: 3, name: 'Order Service', version: '2.0', status: 'WARNING', lastHeartbeat: new Date().toISOString() }
  ];

  getServices(): Observable<Service[]> {
    return interval(15000).pipe(
      map(() => this.randomizeStatus())
    );
  }

  private randomizeStatus(): Service[] {
    return this.services.map(s => ({
      ...s,
      status: this.randomStatus(),
      lastHeartbeat: new Date().toISOString()
    }));
  }

  private randomStatus(): 'UP' | 'DOWN' | 'WARNING' {
    const statuses = ['UP', 'DOWN', 'WARNING'];
    return statuses[Math.floor(Math.random() * statuses.length)] as any;
  }

  getLogs(serviceId: number) {
    return Array.from({ length: 5 }).map((_, i) => ({
      time: new Date().toISOString(),
      message: `Log ${i + 1} for service ${serviceId}`
    }));
  }

//   private fetchServices(){
//     if (Math.random() < 0.2){
//         return throwError(() => new Error('500 error'));
//     }
//     return of(this.generateMock());
//   }
}
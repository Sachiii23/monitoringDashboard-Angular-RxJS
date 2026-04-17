// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { ActivatedRoute } from '@angular/router';
// import { ServiceService } from '../../services/service.service';

// @Component({
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './service-detail.component.html'
// })
// export class ServiceDetailComponent {

//   logs: any[] = [];

//   constructor(
//     private route: ActivatedRoute,
//     private service: ServiceService
//   ) {}

//   ngOnInit() {
//     const id = Number(this.route.snapshot.paramMap.get('id'));
//     this.logs = this.service.getLogs(id);
//   }
// }

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../../services/service.service';

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service-detail.component.html'
})
export class ServiceDetailComponent {

  logs$!: any;
  serviceId!: number;


  constructor(
    private route: ActivatedRoute,
    private service: ServiceService
  ) {}

  ngOnInit() {
    this.serviceId = Number(this.route.snapshot.paramMap.get('id'));
    this.logs$ = this.service.getLogsStream(this.serviceId);
  }
}
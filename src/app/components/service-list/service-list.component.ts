import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-service-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './service-list.component.html'
})
export class ServiceListComponent {

  services$!: any;
  error = '';

  constructor(private service: ServiceService) {}

  ngOnInit() {
    this.services$ = this.service.services$;
  }

  getColor(status: string) {
    return {
      UP: 'green',
      DOWN: 'red',
      WARNING: 'orange'
    }[status];
  }
}
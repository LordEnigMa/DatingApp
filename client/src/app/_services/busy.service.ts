import { inject, Injectable } from '@angular/core';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class BusyService {
  private spinnerService = inject(NgxSpinnerService);
  busyRequestCount = 0;

  busy() {
    this.busyRequestCount++;
    this.spinnerService.show(undefined, {
      type: 'pacman',
      bdColor: 'rgba(255,255,255,0)',
      color: 'rgb(233, 84, 32)'
    })
  }

  idle() {
    this.busyRequestCount--;
    if (this.busyRequestCount <= 0) {
      this.busyRequestCount = 0;
      this.spinnerService.hide();
    }
  }
}

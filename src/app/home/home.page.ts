import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private route: Router) { }

  beliPulsa()
  {
    this.route.navigate(['/login']);
  }

  beliPaketData()
  {
    this.route.navigate(['/login']);
  }

  goDeposit()
  {
    this.route.navigate(['/login']);
  }
}

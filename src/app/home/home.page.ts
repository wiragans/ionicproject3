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
    this.route.navigate(['/listproduk']);
  }

  beliPaketData()
  {
    this.route.navigate(['/listproduk']);
  }

  goDeposit()
  {
    this.route.navigate(['/login']);
  }
}

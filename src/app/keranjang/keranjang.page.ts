import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-keranjang',
  templateUrl: './keranjang.page.html',
  styleUrls: ['./keranjang.page.scss'],
})
export class KeranjangPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  backToListProduk()
  {
    this.route.navigate(['/listproduk']);
  }
}
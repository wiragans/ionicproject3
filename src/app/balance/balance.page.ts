import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
//import { checkAvailability } from '@ionic-native/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { parse } from 'url';
import { Router } from '@angular/router';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.page.html',
  styleUrls: ['./balance.page.scss'],
})
export class BalancePage implements OnInit {

  //constructor() { }

  products: any={};
  items: any=[];
  imageSrc = '';

  constructor(private route: Router, private http: HttpClient, public alertController: AlertController) {}

  ngOnInit() {
  }

  valueProduct: string = "";
  valueOpsel: string = "";
  showItem: boolean = false;
  showItem2: boolean = false;

  toggleRadioButtonPulsa(value)
  {
    this.showItem = true;
    this.showItem2 = false;
    this.valueProduct = value;
    document.getElementById("listopsel").style["display"] = "block";
    console.log(value);
    console.log("RadioButton Pulsa: " + this.showItem);
    console.log("RadioButton Paket Data: " + this.showItem2);
  }

  toggleRadioButtonPaketData(value)
  {
    this.showItem2 = true;
    this.showItem = false;
    this.valueProduct = value;
    document.getElementById("listopsel").style["display"] = "block";
    console.log(value);
    console.log("RadioButton Pulsa: " + this.showItem);
    console.log("RadioButton Paket Data: " + this.showItem2);
  }

  lihatHasil()
  {
    if(this.showItem == true)
    {
      if(this.valueOpsel == "tsel" || this.valueOpsel == "isat" || this.valueOpsel == "three" || this.valueOpsel == "xl" || this.valueOpsel == "axis" || this.valueOpsel == "smartfren")
      {
        this.http.post('http://162.244.93.240/~kharisma/api/ionicapps/v1/get_product', {productName: this.valueProduct, opselName: this.valueOpsel}, {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer 7v6oFBH4cmuhqG339tBQdeUPp7jLqXJKpp1KVKUZ5YfshJQQtvTLvb9EyN6cq1Y7'
      })
    })
      .subscribe(
        res => {
          document.getElementById("listresult").style["display"] = "block";
          document.getElementById("productLabelName").innerHTML = "Pilih Produk " + res['productType'];
          this.imageSrc = res['iconUrl'];

          document.getElementById("title1").innerHTML = res['productPriceList5K']['amountTrans'];
          document.getElementById("title2").innerHTML = res['productPriceList10K']['amountTrans'];

          document.getElementById("desc1").innerHTML = "Harga: Rp. " + res['productPriceList5K']['price'];
          document.getElementById("desc2").innerHTML = "Harga: Rp. " + res['productPriceList10K']['price'];
          console.log(res);
        },
        err => {
          document.getElementById("listresult").style["display"] = "none";
          console.log("Error occured");
        }
      );
      }

      if(this.valueOpsel != "tsel" && this.valueOpsel != "isat" && this.valueOpsel != "three" && this.valueOpsel != "xl" && this.valueOpsel != "axis" && this.valueOpsel != "smartfren")
      {
        console.log("List Daftar Harga Pulsa Ditampilkan!");
        console.log("List Daftar Harga Paket Data Tidak Ditampilkan!");
      }
    }

    if(this.showItem2 == true)
    {
      if(this.valueOpsel == "tsel" || this.valueOpsel == "isat" || this.valueOpsel == "three" || this.valueOpsel == "xl" || this.valueOpsel == "axis" || this.valueOpsel == "smartfren")
      {
        this.http.post('http://162.244.93.240/~kharisma/api/ionicapps/v1/get_product', {productName: this.valueProduct, opselName: this.valueOpsel}, {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer 7v6oFBH4cmuhqG339tBQdeUPp7jLqXJKpp1KVKUZ5YfshJQQtvTLvb9EyN6cq1Y7'
      })
    })
      .subscribe(
        res => {
          document.getElementById("listresult").style["display"] = "block";
          document.getElementById("productLabelName").innerHTML = "Pilih Produk " + res['productType'];
          this.imageSrc = res['iconUrl'];

          document.getElementById("title1").innerHTML = res['productPriceList1']['amountTrans'];
          document.getElementById("title2").innerHTML = res['productPriceList2']['amountTrans'];

          document.getElementById("desc1").innerHTML = "Harga: Rp. " + res['productPriceList1']['price'];
          document.getElementById("desc2").innerHTML = "Harga: Rp. " + res['productPriceList2']['price'];
          console.log(res);
        },
        err => {
          document.getElementById("listresult").style["display"] = "none";
          console.log("Error occured");
        }
      );
      }

      if(this.valueOpsel != "tsel" && this.valueOpsel != "isat" && this.valueOpsel != "three" && this.valueOpsel != "xl" && this.valueOpsel != "axis" && this.valueOpsel != "smartfren")
      {
        console.log("List Daftar Harga Pulsa Ditampilkan!");
        console.log("List Daftar Harga Paket Data Tidak Ditampilkan!");
      }

      //console.log("List Daftar Harga Pulsa Tidak Ditampilkan!");
      //console.log("List Daftar Harga Paket Data Ditampilkan!");
    }

    if(this.showItem == false && this.showItem2 == false)
    {
      document.getElementById("listopsel").style["display"] = "none";
      console.log("Harap Pilih Produk Yang Ingin Dibeli!");
      this.showTandaAlert();
    }
  }

  loginFirst()
  {
    this.route.navigate(['/login']);
  }

    async showTandaAlert()
    {
      const alert = await this.alertController.create({
        header: 'Notifikasi',
        subHeader: 'Harap Pilih Produk!',
        message: 'Mohon pilih produk yang akan Anda beli!',
        buttons: ['GOT IT']
      });
  
      await alert.present();
    }

    onChange(value) // DAPATKAN VALUE OPSEL
    {
      this.valueOpsel = value;
      console.log(value);
    }

  datachanged(e:any)
  {
    console.log(e);
    console.log(e.checked);
  }
}

import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Login',
      url: '/login',
      icon: 'exit'
    },
    {
      title: 'List Produk',
      url: '/listproduk',
      icon: 'list'
    },
    {
      title: 'Keranjang',
      url: '/keranjang',
      icon: 'cart'
    },
    {
      title: 'Tambah Produk',
      url: '/tambahproduk',
      icon: 'add-circle'
    },
    {
      title: 'About',
      url: '/about',
      icon: 'help-circle-outline'
    }
  ];

  constructor(
    private http: HttpClient,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  ngOnInit(): void {
    this.http.post('http://162.244.93.240/~kharisma/api/ionicapps/v1/get_token', {test: 'mantap'}, {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic GZTkWPVA0z56b41HMeaMUgMGAV0' // BASIC AUTHORIZATION TOKEN NYA
      })
    })
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log("Error occured");
        }
      );
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}

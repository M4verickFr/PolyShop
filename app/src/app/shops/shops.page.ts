import { Component } from '@angular/core';

import { LoadingController } from '@ionic/angular';
import { RestService } from '../rest.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.page.html',
  styleUrls: ['./shops.page.scss'],
})
export class ShopsPage {

  shops : any;
  api : RestService;

  constructor(public restapi: RestService,
    public loadingController: LoadingController, 
    public router : Router) { 

    this.api = restapi;
  }

  async getShops() {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });

    await loading.present();
    await this.api.getShops()
      .subscribe(res => {
        console.log(res);
        this.shops = res;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });

  }

  ngOnInit() {
    this.getShops();
  }

}

import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { RestService } from '../../rest.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit {
  api : RestService;
  shop : any;
  category : any;
  product: any;
  id : string;
  title : string;
  description : string;
  price: string;

  constructor(public restapi: RestService, 
    public loadingController: LoadingController, 
    private route: ActivatedRoute, 
    public router : Router) {

    this.api = restapi;

  }

  async getShop(id:any) {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });

    await loading.present();
    await this.api.get("shop", id)
      .subscribe(res => {
        console.log(res);
        this.shop = res;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });

  }

  async getCategory(id:any) {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });

    await loading.present();
    await this.api.get("category", id)
      .subscribe(res => {
        console.log(res);
        this.category = res;

        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
    
  }

  async getProduct(id:any) {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });

    await loading.present();
    await this.api.get("product", id)
      .subscribe(res => {
        console.log(res);
        this.product = res;
        this.title = this.product.title;
        this.description = this.product.description;
        this.price = this.product.price;
        this.getCategory(this.product.category);
        this.getShop(this.product.shop);
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });

  }

  ngOnInit() {
    this.route.paramMap.subscribe((params : ParamMap)=> {
      this.id=params.get('id');
    });
    console.log("Current id: " + this.id);
    this.getProduct(this.id);
  }
}
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
  products: any;
  id : string;
  title : string;
  description : string;

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
        this.title = this.shop.title;
        this.description = this.shop.description;
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
        this.title = this.category.title;
        this.description = this.category.description;
        this.getShop(this.category.shop);
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
    
  }

  async getProducts(id:any) {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });

    await loading.present();
    await this.api.getProductsByCategory(id)
      .subscribe(res => {
        console.log(res);
        this.products = res;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });

  }

  getRandomImage(product) {
    return "https://source.unsplash.com/random/250x250?"+product.title
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params : ParamMap)=> {
      this.id=params.get('id');
    });
    console.log("Current id: " + this.id);
    this.getCategory(this.id);
    this.getProducts(this.id);
  }
}
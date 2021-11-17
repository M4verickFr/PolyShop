import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { RestService } from '../../rest.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {
  shop : any;
  category: any;
  api : RestService;
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

  async saveCategory(){
    await this.api.update("category", this.category._id, this.category)
    .subscribe(res => {
        console.log(res);
        this.router.navigate(['/category/' + this.category._id]).then(() => {
          window.location.reload();
        });
      }, (err) => {
        console.log(err);
      });
  }

  async deleteCategory(){
    await this.api.delete("category", this.category._id)
    .subscribe(res => {
        console.log(res);
        this.router.navigate(['/shop/' + this.shop._id]).then(() => {
          window.location.reload();
        });
      }, (err) => {
        console.log(err);
      });
  }

  save() {
    this.category.title = this.title;
    this.category.description = this.description;

    this.saveCategory();

  }

  delete() {

    this.deleteCategory();
    
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params : ParamMap)=> {
      this.id=params.get('id');
    });
    console.log("Current id: " + this.id);
    this.getCategory(this.id);
  }
}
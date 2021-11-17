import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { RestService } from '../../rest.service';
import { ActivatedRoute, ParamMap, Router  } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
  shop : any;
  category : any;
  id : any;
  product : FormGroup;
  api : RestService;

  constructor(public restapi: RestService,
    public loadingController: LoadingController,
    private route: ActivatedRoute,
    public router: Router,
    private formBuilder: FormBuilder) {
      this.product = this.formBuilder.group({
            title: [''],
            description: [''],
            price: [''],
          });
      this.api = restapi;
  }

  async saveProduct(){
    await this.api.create("product", this.product.value)
    .subscribe(res => {
        this.router.navigate(['/category/' + this.category._id]).then(() => {
          window.location.reload();
        });
      }, (err) => {
        console.log(err);
      });
  }

  save() {
    this.product.value.shop = this.shop._id;
    this.product.value.category = this.category._id;
    console.log(this.product.value);
    this.saveProduct();
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
        this.getShop(this.category.shop);
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
    this.getCategory(this.id);
  }

}

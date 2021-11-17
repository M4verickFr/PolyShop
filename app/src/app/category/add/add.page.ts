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
  id : any;
  category : FormGroup;
  api : RestService;

  constructor(public restapi: RestService,
    public loadingController: LoadingController,
    private route: ActivatedRoute,
    public router: Router,
    private formBuilder: FormBuilder) {
      this.category = this.formBuilder.group({
            title: [''],
            description: [''],
          });
      this.api = restapi;
  }

  async saveCategory(){
    await this.api.createCategory(this.category.value)
    .subscribe(res => {
        this.router.navigate(['/']);
      }, (err) => {
        console.log(err);
      });
  }

  save() {
    this.category.value.shop = this.id;
    console.log(this.category.value);
    this.saveCategory();
  }

  async getShop(id:any) {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });

    await loading.present();
    await this.api.getShop(this.id)
      .subscribe(res => {
        console.log(res);
        this.shop = res;
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
    this.getShop(this.id);
  }

}

import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { RestService } from '../../rest.service';
import { ActivatedRoute, Router  } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  private shop : FormGroup;
  public api : RestService;

  constructor(public restapi: RestService,
    public loadingController: LoadingController,
    private route: ActivatedRoute,
    public router: Router,
    private formBuilder: FormBuilder) {
      this.shop = this.formBuilder.group({
            title: [''],
            description: [''],
          });
      this.api = restapi;
  }

  async saveShop(){
    await this.api.create("shop", this.shop.value)
    .subscribe(res => {
        this.router.navigate(['/']).then(() => {
          window.location.reload();
        });;
      }, (err) => {
        console.log(err);
      });
  }

  save() {
    console.log(this.shop.value);
    this.saveShop();

  }

  ngOnInit() {
  }

}

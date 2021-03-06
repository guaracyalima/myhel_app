import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the WorkshopsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-workshops',
  templateUrl: 'workshops.html',
})
export class WorkshopsPage {

  searchterm: string = '';
  instems: any;
  constructor(
              public navCtrl: NavController,
              public navParams: NavParams,
              public dataService: DataProvider) {}

  ionViewDidLoad() {
    this.setFilteredItems()
  }

  setFilteredItems(){
    this.instems = this.dataService.filterItems(this.searchterm);
  }


}

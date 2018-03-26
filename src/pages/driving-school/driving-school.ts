import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the DrivingSchoolPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-driving-school',
  templateUrl: 'driving-school.html',
})
export class DrivingSchoolPage {

  searchterm: string = '';
  instems: any;
  constructor(
              public navCtrl: NavController,
              public navParams: NavParams,
              private dataService: DataProvider) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConcertsPage');
    this.setFilteredItems()
  }

  setFilteredItems(){
    this.instems = this.dataService.filterItems(this.searchterm);
  }
}

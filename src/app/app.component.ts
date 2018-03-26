import { Component, ViewChild } from "@angular/core";
import { Platform, Nav } from "ionic-angular";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Keyboard } from '@ionic-native/keyboard';

import { HomePage } from "../pages/home/home";
import { LoginPage } from "../pages/login/login";
import { LocalWeatherPage } from "../pages/local-weather/local-weather";
import { ConcertsPage } from "../pages/concerts/concerts";
import { DrivingSchoolPage } from "../pages/driving-school/driving-school";
import { DrugstorePage } from "../pages/drugstore/drugstore";
import { SupermarketPage } from "../pages/supermarket/supermarket";
import { WorkshopsPage } from "../pages/workshops/workshops";
import { AboutPage } from "../pages/about/about";

export interface MenuItem {
    title: string;
    component: any;
    icon: string;
}

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  appMenuItems: Array<MenuItem>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public keyboard: Keyboard
  ) {
    this.initializeApp();

    this.appMenuItems = [
      {title: 'Home', component: HomePage, icon: 'home'},
      {title: 'Local Weather', component: LocalWeatherPage, icon: 'partly-sunny'},
      {title: 'Oficinas', component: ConcertsPage, icon: 'car'},
      {title: 'Autoescolas', component: DrivingSchoolPage, icon: 'school'},
      {title: 'Farmacias', component: DrugstorePage, icon: 'medkit'},
      {title: 'Supermercados', component: SupermarketPage, icon: 'cart'},
      {title: 'Mercadinhos', component: WorkshopsPage, icon: 'basket'},
      {title: 'Sobre', component: AboutPage, icon: 'help'},
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.

      //*** Control Splash Screen
      // this.splashScreen.show();
      // this.splashScreen.hide();

      //*** Control Status Bar
      this.statusBar.styleDefault();
      this.statusBar.overlaysWebView(false);

      //*** Control Keyboard
      this.keyboard.disableScroll(true);
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  logout() {
    this.nav.setRoot(LoginPage);
  }

}

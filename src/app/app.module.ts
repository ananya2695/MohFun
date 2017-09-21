import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NamePage } from "../pages/name/name";
import { TimePage } from "../pages/time/time";
import { SoundPage } from "../pages/sound/sound";
import { NotiPage } from "../pages/noti/noti";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NamePage,
    TimePage,
    SoundPage,
    NotiPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NamePage,
    TimePage,
    SoundPage,
    NotiPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

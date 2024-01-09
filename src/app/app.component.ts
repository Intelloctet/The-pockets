import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { LoadingService } from './loading/services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  enable: boolean = true;

  constructor
    (
      private titleService: Title,
      translate: TranslateService,
      private loading: LoadingService
    ) {
   
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('en').subscribe(
      //(data) => { console.log(data) }
    )

  }
  ngOnInit(): void {
    this.loading.loadingState$().subscribe(
      state => { this.enable = state }
    )
  }

}

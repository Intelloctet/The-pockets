import { Component, OnInit } from '@angular/core';
import { TranslateLoader, TranslateService } from '@ngx-translate/core';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Component({
  selector: 'app-navbar-h1',
  templateUrl: './navbar-h1.component.html',
  styleUrls: ['./navbar-h1.component.scss']
})
export class NavbarH1Component implements OnInit {
  faLanguage = faLanguage
  lang: BehaviorSubject<string> = new BehaviorSubject('en');
  currentLang:string = 'en'
  data: any;
  menu_list: any;
  constructor(
    private translate: TranslateService,
    private translateLoader: TranslateLoader
  ) {
    this.lang.next(this.translate.currentLang);
    this.lang.subscribe(
      (lang)=> {
        this.currentLang = lang;
        this.translateLoader.getTranslation(lang).subscribe(
          (data) => {
            this.menu_list = [
              {
                title: data.manager,
                link: '/user/manager',
              },
              {
                title: data.organization,
                link: '/user/organization',
                child: [
                  {
                    title: data.signin,
                    link: '/user/organization/signin',
                  },
                  {
                    title: data.signup,
                    link: '/user/organization/signup',
                  }
                ]
              },
              {
                title: data.contactus,
                link: '/pockets/contacts'
              },
            ]
          }
        )
      }
    )
    
  }

  ngOnInit(): void {

  }

  changeLang(){
    this.currentLang = this.currentLang == 'en'?'fr':'en'
    this.lang.next(this.currentLang);
  }


}

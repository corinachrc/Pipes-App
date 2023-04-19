import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent {

  languages=['en','ro','nl','jp']

  constructor(public translate: TranslateService) {

    translate.addLangs(this.languages);
    translate.setDefaultLang('en');

  }

  lang=''
  useLanguage(language: string): void {
    this.translate.use(language);
}
}

import {Component} from '@angular/core';

@Component({
  selector: 'app-locale',
  templateUrl: './locale.component.html',
  styleUrls: ['./locale.component.scss'],
})
export class LocaleComponent {

  defaultCode = 'en-US';
  defaultLabel = 'English';

  localesList = [
    { code: "en-US", label: 'English' },
    { code: "ru", label: 'Русский' },
  ];


}

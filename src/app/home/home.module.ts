import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {MostModule} from '@themost/angular';
import {environment} from '../../environments/environment';
import {TranslateModule, TranslateService} from '@ngx-translate/core';
import {HomeRoutingModule} from './home-routing.module';
import {MatCardModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    MostModule,
    TranslateModule,
    MatCardModule
  ],
    declarations: [
        HomeComponent
    ],
    providers: [
        TranslateService
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule {
    constructor(private translateService: TranslateService) {
        environment.languages.forEach((culture) => {
            import(`./i18n/home.${culture}.json`).then((translations) => {
                this.translateService.setTranslation(culture, translations, true);
            });
        });
    }

}

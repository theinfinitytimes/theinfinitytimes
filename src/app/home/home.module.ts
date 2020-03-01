import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './components/home.component';
import {environment} from '../../environments/environment';
import {TranslateModule, TranslateService} from '@ngx-translate/core';
import {HomeRoutingModule} from './home-routing.module';
import { MatCardModule } from '@angular/material/card';
import {PostsService} from '../shared/services/posts.service';
import {SharedModule} from '../shared/shared.module';
import {InfinityComponent} from '../shared/services/loading.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    TranslateModule,
    MatCardModule,
    SharedModule
  ],
    declarations: [
        HomeComponent
    ],
    providers: [
        TranslateService,
        PostsService
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    entryComponents: [InfinityComponent]
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

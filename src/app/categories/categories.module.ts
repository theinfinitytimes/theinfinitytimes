import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FoititikaComponent} from './components/foititika/foititika.component';
import {TranslateModule, TranslateService} from '@ngx-translate/core';
import {PostsService} from '../shared/services/posts.service';
import {LoadingService} from '../shared/services/loading.service';
import {CategoriesRoutingModule} from './categories-routing.module';
import {MatCardModule} from '@angular/material/card';
import {environment} from '../../environments/environment';
import { ZodiacComponent } from './components/zodiac/zodiac.component';
import { ScitechComponent } from './components/scitech/scitech.component';
import { RelationshipsComponent } from './components/relationships/relationships.component';
import { SocialLifeComponent } from './components/social-life/social-life.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
    declarations: [
        FoititikaComponent,
        ZodiacComponent,
        ScitechComponent,
        RelationshipsComponent,
        SocialLifeComponent],
    imports: [
        CategoriesRoutingModule,
        CommonModule,
        MatCardModule,
        TranslateModule,
        SharedModule
    ],
    providers: [
        PostsService,
        LoadingService
    ]
})
export class CategoriesModule {
    constructor(private translateService: TranslateService) {
        environment.languages.forEach((culture) => {
            import(`./i18n/categories.${culture}.json`).then((translations) => {
                this.translateService.setTranslation(culture, translations, true);
            });
        });
    }
}

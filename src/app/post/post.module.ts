import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PostComponent} from './components/post/post.component';
import {PostRoutingModule} from './post-routing.module';
import {PostsService} from '../shared/services/posts.service';
import {LoadingService} from '../shared/services/loading.service';
import {MatCardModule} from '@angular/material/card';
import {TranslateModule, TranslateService} from '@ngx-translate/core';
import {environment} from '../../environments/environment';


@NgModule({
    declarations: [
        PostComponent
    ],
    imports: [
        CommonModule,
        PostRoutingModule,
        MatCardModule,
        TranslateModule
    ],
    providers: [
        PostsService,
        LoadingService
    ]
})
export class PostModule {
    constructor(private translateService: TranslateService) {
        environment.languages.forEach((culture) => {
            import(`./i18n/post.${culture}.json`).then((translations) => {
                this.translateService.setTranslation(culture, translations, true);
            });
        });
        console.log(this.translateService.currentLang);
    }
}

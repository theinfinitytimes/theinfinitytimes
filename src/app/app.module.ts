import {Apollo, APOLLO_OPTIONS} from 'apollo-angular';
import {HttpLink} from 'apollo-angular/http';
import {InMemoryCache} from '@apollo/client/core';
import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LayoutComponent} from './layout/layout.component';
import {FlexLayoutModule} from '@angular/flex-layout';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule} from '@angular/material/menu';
import { MatSidenavContainer, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import {HomeModule} from './home/home.module';
import {TranslateModule, TranslateService} from '@ngx-translate/core';
import {environment} from '../environments/environment';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {PostsService} from './shared/services/posts.service';
import {SharedModule} from './shared/shared.module';

@NgModule({
    declarations: [
        AppComponent,
        LayoutComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        HomeModule,
        HttpClientModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatMenuModule,
        MatSidenavModule,
        MatToolbarModule,
        FlexLayoutModule,
        SharedModule,
        TranslateModule.forRoot()
    ],
    entryComponents: [
    ],
    exports: [
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatMenuModule,
        MatSidenavModule,
        MatToolbarModule,
        FlexLayoutModule
    ],
    providers: [
        TranslateService,
        {
            provide: APOLLO_OPTIONS,
            useFactory: (httpLink: HttpLink) => {
                return {
                    cache: new InMemoryCache(),
                    link: httpLink.create({
                        uri: environment.api_uri
                    })
                };
            }, deps: [HttpLink]
        },
        PostsService
    ],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
    constructor(private translateService: TranslateService, private apollo: Apollo, private httpLink: HttpLink) {
        this.translateService.currentLang = environment.languages[0];
        environment.languages.forEach((culture) => {
            import(`./i18n/${culture}.json`).then((translations) => {
                this.translateService.setTranslation(culture, translations, true);
            });
        });
    }
}

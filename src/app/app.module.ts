import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LayoutComponent} from './layout/layout.component';
import {FlexLayoutModule} from '@angular/flex-layout';

import {
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatSidenavContainer,
    MatSidenavModule,
    MatToolbarModule
} from '@angular/material';
import {HomeModule} from './home/home.module';
import {TranslateModule, TranslateService} from '@ngx-translate/core';
import {environment} from '../environments/environment';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {ApolloModule, Apollo, APOLLO_OPTIONS} from 'apollo-angular';
import {HttpLink, HttpLinkModule} from 'apollo-angular-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {PostsService} from './services/posts.service';
import {SharedModule} from './services/shared.module';

@NgModule({
    declarations: [
        AppComponent,
        LayoutComponent
    ],
    imports: [
        ApolloModule,
        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        HomeModule,
        HttpClientModule,
        HttpLinkModule,
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
        environment.languages.forEach((culture) => {
            import(`./i18n/${culture}.json`).then((translations) => {
                this.translateService.setTranslation(culture, translations, true);
            });
        });
    }
}

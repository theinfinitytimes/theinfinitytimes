import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LayoutComponent} from './layout/layout.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HomeComponent} from './home/home.component';
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
import {MostModule} from '@themost/angular';
import {TranslateModule, TranslateService} from '@ngx-translate/core';
import {environment} from '../environments/environment';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

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
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatMenuModule,
        MatSidenavModule,
        MatToolbarModule,
        FlexLayoutModule,
        MostModule.forRoot({
            base: '/',
            options: {
                useMediaTypeExtensions: false,
                useResponseConversion: true
            }
        }),
        TranslateModule.forRoot()
    ],
    exports: [
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatMenuModule,
        MatSidenavModule,
        MatToolbarModule,
        FlexLayoutModule,
    ],
    providers: [TranslateService],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
    constructor(private translateService: TranslateService) {
        environment.languages.forEach((culture) => {
            import(`./i18n/${culture}.json`).then((translations) => {
                this.translateService.setTranslation(culture, translations, true);
            });
        });
    }
}

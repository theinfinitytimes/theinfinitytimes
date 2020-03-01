import {CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders, NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {InfinityComponent} from './services/loading.component';
import {LoadingService} from './services/loading.service';
import { FeedComponent } from './components/feed/feed.component';
import {RouterModule} from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
    declarations: [
        InfinityComponent,
        FeedComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        RouterModule,
        MatCardModule,
        TranslateModule
    ],
    entryComponents: [
        InfinityComponent
    ],
    exports: [
        InfinityComponent,
        FeedComponent
    ],
    providers: [
        LoadingService
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule {
    constructor() {
    }
    static forRoot(): ModuleWithProviders<SharedModule> {
        return {
            ngModule: SharedModule,
            providers: [
                LoadingService
            ]
        };
    }
}

import {CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders, NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {InfinityComponent} from './loading.component';
import {LoadingService} from './loading.service';


@NgModule({
    declarations: [
        InfinityComponent
    ],
    imports: [
        HttpClientModule,
        ],
    entryComponents: [
        InfinityComponent
    ],
    exports: [
        InfinityComponent
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

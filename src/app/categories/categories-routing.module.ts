import { NgModule } from '@angular/core';
import {
    Routes,
    RouterModule
} from '@angular/router';

import { FoititikaComponent } from './components/foititika/foititika.component';
import {ZodiacComponent} from './components/zodiac/zodiac.component';
import {RelationshipsComponent} from './components/relationships/relationships.component';
import {ScitechComponent} from './components/scitech/scitech.component';
import {SocialLifeComponent} from './components/social-life/social-life.component';

const routes: Routes = [
    {
        path: 'foititika',
        component: FoititikaComponent,
        pathMatch: 'full'
    },
    {
        path: 'relationships',
        component: RelationshipsComponent,
        pathMatch: 'full'
    },
    {
        path: 'scitech',
        component: ScitechComponent,
        pathMatch: 'full'
    },
    {
        path: 'social-life',
        component: SocialLifeComponent,
        pathMatch: 'full'
    },
    {
        path: 'zodiac',
        component: ZodiacComponent,
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CategoriesRoutingModule { }

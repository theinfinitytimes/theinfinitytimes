import { NgModule } from '@angular/core';
import {
    Routes,
    RouterModule
} from '@angular/router';

import { PostComponent } from './components/post/post.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: ':id',
                component: PostComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PostRoutingModule { }

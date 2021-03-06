import {Component, OnInit} from '@angular/core';
import {PostsService} from '../../shared/services/posts.service';
import {LoadingService} from '../../shared/services/loading.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    public posts;
    public truncatedBody: any;
    public loading: boolean;

    constructor(private postsService: PostsService, private loadingSvc: LoadingService) {
    }

    async ngOnInit() {
        this.loading = true;
        this.loadingSvc.showLoading();
        try {
            const object = await this.postsService.getAllPosts().toPromise();
            this.posts = object.data['posts'];
        } catch (err) {
            console.log(err);
            this.loadingSvc.hideLoading();
            this.loading = false;
        }
        this.loadingSvc.hideLoading();
        this.loading = false;
    }

}

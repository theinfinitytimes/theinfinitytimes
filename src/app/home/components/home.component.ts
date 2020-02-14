import {Component, OnInit} from '@angular/core';
import {PostsService} from '../../services/posts.service';
import {LoadingService} from '../../services/loading.service';

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
        const object = await this.postsService.getAllPosts().toPromise();
        this.posts = object.data['posts'];
        for (const post of this.posts) {
            let obj = await this.postsService.getAuthor(post.author).toPromise();
            post.author = obj.data['author'];
            obj = await this.postsService.getAccount(post.author.account).toPromise();
            post.author = obj.data['findAccountById'];
            obj = await this.postsService.getUser(post.author.user).toPromise();
            post.author = obj.data['findUserById'];
        }
        this.loadingSvc.hideLoading();
        this.loading = false;
    }

}

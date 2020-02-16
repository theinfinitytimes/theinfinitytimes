import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PostsService} from '../../../services/posts.service';
import {LoadingService} from '../../../services/loading.service';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit, OnDestroy {

    public post: any;
    public isLoading = false;
    public subscription: Subscription;

    constructor(private activatedRouter: ActivatedRoute,
                private postsService: PostsService,
                private loadingService: LoadingService) {
    }

    ngOnInit() {
        this.isLoading = true;
        this.loadingService.showLoading();
        this.subscription = this.activatedRouter.params.subscribe(async (params) => {
            try {
                // tslint:disable-next-line:radix
                const reqPost = await this.postsService.getPost(Number(params.id)).toPromise();
                this.post = reqPost.data['post'];
                if (typeof this.post.author === 'string') {
                    let obj = await this.postsService.getAuthor(this.post.author).toPromise();
                    this.post.author = {...this.post.author, ...obj.data['author']};
                    obj = await this.postsService.getAccount(this.post.author.account).toPromise();
                    this.post.author = {...this.post.author, ...obj.data['findAccountById']};
                    obj = await this.postsService.getUser(this.post.author.user).toPromise();
                    this.post.author = {...this.post.author, ...obj.data['findUserById']};
                }
            } catch (err) {
                console.log(err);
                this.loadingService.hideLoading();
                this.isLoading = false;
            }
            this.loadingService.hideLoading();
            this.isLoading = false;
        });
    }
    ngOnDestroy(): void {
        this.subscription.unsubscribe();
        this.subscription.closed = true;
    }

}
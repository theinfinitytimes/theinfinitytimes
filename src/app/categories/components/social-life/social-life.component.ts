import { Component, OnInit } from '@angular/core';
import {PostsService} from '../../../shared/services/posts.service';
import {LoadingService} from '../../../shared/services/loading.service';

@Component({
  selector: 'app-social-life',
  templateUrl: './social-life.component.html',
  styleUrls: ['./social-life.component.scss']
})
export class SocialLifeComponent implements OnInit {
  public isLoading: boolean;
  public posts;

  constructor(private postsService: PostsService, private loadingService: LoadingService) {
  }

  async ngOnInit() {
    this.isLoading = true;
    this.loadingService.showLoading();
    try {
      const object = await this.postsService.getPostsByTag(4).toPromise();
      this.posts = object.data['posts'] || [] ;
      if (this.posts && this.posts.length) {
        for (const post of this.posts) {
          let obj = await this.postsService.getAuthor(post.author).toPromise();
          post.author = obj.data['author'];
          obj = await this.postsService.getAccount(post.author.account).toPromise();
          post.author = obj.data['findAccountById'];
          obj = await this.postsService.getUser(post.author.user).toPromise();
          post.author = obj.data['findUserById'];
        }
      }
    } catch (err) {
      console.log(err);
      this.loadingService.hideLoading();
      this.isLoading = false;
    }
    this.loadingService.hideLoading();
    this.isLoading = false;
  }

}

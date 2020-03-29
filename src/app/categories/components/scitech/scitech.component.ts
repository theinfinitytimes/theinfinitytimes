import { Component, OnInit } from '@angular/core';
import {PostsService} from '../../../shared/services/posts.service';
import {LoadingService} from '../../../shared/services/loading.service';

@Component({
  selector: 'app-scitech',
  templateUrl: './scitech.component.html',
  styleUrls: ['./scitech.component.scss']
})
export class ScitechComponent implements OnInit {
  public isLoading: boolean;
  public posts;

  constructor(private postsService: PostsService, private loadingService: LoadingService) {
  }

  async ngOnInit() {
    this.isLoading = true;
    this.loadingService.showLoading();
    try {
      const object = await this.postsService.getPostsByTag(1).toPromise();
      this.posts = object.data['postsByTag'] || [] ;
    } catch (err) {
      console.log(err);
      this.loadingService.hideLoading();
      this.isLoading = false;
    }
    this.loadingService.hideLoading();
    this.isLoading = false;
  }

}

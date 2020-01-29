import {Injectable} from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable()
export class PostsService {
    constructor(private apollo: Apollo) {
    }

    getAllPosts() {
        return this.apollo.query({
            query: gql`
                {
                    posts {
                        id
                        title
                        body
                        author
                        dateCreated
                    }
                }
            `
        });
    }
    getPost(idOfPost: number) {
        return this.apollo.query({
            query: gql`
                query($id: Int){
                    post(id: $id) {
                        id
                        title
                        body
                        author
                        dateCreated
                    }
                }
            `,
            variables: {
                id: idOfPost
            }
        });
    }

    getAuthor(idOfAuthor: string) {
        return this.apollo.query({
            query: gql`
                query($id: String!) {
                    author(_id: $id){
                        account
                        description
                    }
                }
            `,
            variables: {
                id: idOfAuthor
            }
        });
    }

    getAccount(idOfAccount: string) {
        return this.apollo.query({
            query: gql`
                query ($id: String){
                    findAccountById(_id: $id){
                        user
                    }
                }
            `, variables: {
                id: idOfAccount
            }
        });
    }

    getUser(idOfUser: string) {
        return this.apollo.query({
            query: gql`
                query ($id: String) {
                    findUserById(_id: $id){
                        familyName
                        givenName
                        nickname
                    }
                }
            `,
            variables: {
                id: idOfUser
            }
        });
    }
}

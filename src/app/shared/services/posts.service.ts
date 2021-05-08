import {Apollo, gql} from 'apollo-angular';
import {Injectable} from '@angular/core';

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
                        author {
                            description
                            account {
                                user {
                                    familyName
                                    givenName
                                    nickname
                                    profilePicture
                                }
                            }
                        }
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
                        author{
                            description
                            account {
                                user {
                                    familyName
                                    givenName
                                    nickname
                                    profilePicture
                                }
                            }
                        }
                        dateCreated
                        picture
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
                        account {
                            description
                            account {
                                user {
                                    familyName
                                    givenName
                                    nickname
                                    profilePicture
                                }
                            }
                        }
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
                        description
                        account {
                            user {
                                familyName
                                givenName
                                nickname
                                profilePicture
                            }
                        }
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
                query ($id: String!) {
                    findUserById(_id: $id){
                        familyName
                        givenName
                        nickname
                        profilePicture
                    }
                }
            `,
            variables: {
                id: idOfUser
            }
        });
    }

    getPostsByTag(idOfTag: number) {
        return this.apollo.query({
            query: gql`
                query($tag: Int!) {
                    postsByTag(tag: $tag){
                        id
                        title
                        body
                        author {
                            description
                            account {
                                user {
                                    familyName
                                    givenName
                                    nickname
                                    profilePicture
                                }
                            }
                        }
                        dateCreated
                    }
                }
            `,
            variables: {
                tag: idOfTag
            }
        });
    }
}

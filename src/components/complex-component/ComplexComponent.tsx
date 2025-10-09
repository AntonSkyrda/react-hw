import {useAppDispatch, useAppSelector} from "../../redux/store.ts";
import {userActions} from "../../redux/slices/UserSlice.ts";
import {useEffect} from "react";
import {postActions} from "../../redux/slices/PostSlice.ts";
import {commentActions} from "../../redux/slices/CommentSlice.ts";
import type {IUser} from "../../models/IUser.ts";
import {UserComponent} from "../user-component/UserComponent.tsx";
import {CommentComponent} from "../comment-component/CommentComponent.tsx";
import type {IComment} from "../../models/IComment.ts";
import {PostComponent} from "../post-component/PostComponent.tsx";
import type {IPost} from "../../models/IPost.ts";

export const ComplexComponent = () => {
    const dispatch = useAppDispatch();
    const {
        commentStoreSlice:{comments},
        userStoreSlice:{users},
        postStoreSlice:{posts},
    } = useAppSelector(state => state)

    useEffect(() => {
        if(!users.length) {
            dispatch(userActions.loadUsers())
        }
        if(!posts.length) {
            dispatch(postActions.loadPosts())
        }
        if(!comments.length) {
            dispatch(commentActions.loadComments())
        }
    }, [])
    return (
        <div>
            {
                users.map((user: IUser) => <UserComponent key={user.id} user={user}/>)
            }
            {
                posts.map((post: IPost) => <PostComponent key={post.id} post={post}/>)
            }
            {
                comments.map((comment: IComment) => <CommentComponent key={comment.id} comment={comment}/>)
            }
        </div>
    );
};
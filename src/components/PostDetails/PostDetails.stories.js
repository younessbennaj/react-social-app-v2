import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import PostDetails from './';


export const post = {
    body: "This is my first time here",
    commentCount: 0,
    createdAt: "2020-01-13T16:24:26.110Z",
    likeCount: 0,
    postId: "ioewoXIrXuBUr0n1r5rX",
    userFirstName: "jack",
    userImage: "https://firebasestorage.googleapis.com/v0/b/my-tcc-project-66a43.appspot.com/o/no-img.png?alt=media",
    userLastName: "black"
}

export const longPost = {
    body: "Ut eget lectus id lorem commodo malesuada et quis quam. In maximus sodales tempor. Donec nec sapien lectus. Aenean at finibus arcu.",
    commentCount: 0,
    createdAt: "2020-01-13T16:24:26.110Z",
    likeCount: 0,
    postId: "ioewoXIrXuBUr0n1r5rX",
    userFirstName: "jack",
    userImage: "https://firebasestorage.googleapis.com/v0/b/my-tcc-project-66a43.appspot.com/o/no-img.png?alt=media",
    userLastName: "black"
}

// Technically, a story is a function that returns something that can be rendered to screen.

// We first call the storiesOf() function to register the component.

//To define our stories, we call add() once for each of our test states to generate a story.

storiesOf('Post Details', module)
    .add('One post', () => <PostDetails post={post}></PostDetails>)
    .add('Long post', () => <PostDetails post={longPost}></PostDetails>)
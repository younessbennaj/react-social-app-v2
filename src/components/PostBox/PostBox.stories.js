import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Provider from '../Provider'
import PostBox from './';
import store from '../../helpers/store'

const withProvider = (story) => (
    <Provider store={store}>
        {story()}
    </Provider>
)

storiesOf('Post Details', module)
    .addDecorator(withProvider)
    .add('post box', () => <PostBox />)
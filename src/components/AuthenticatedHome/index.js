import React, { useState, useEffect, useRef, Fragment } from 'react';
import ReactDOM from "react-dom";
import axios from "axios";
//Components
import PostDetails from '../PostDetails';
import CommentBox from '../CommentBox';
// import Modal from '../UI/Modal';
import PostBox from '../PostBox';
import PostSkeleton from '../PostSkeleton';

//Layout
import { ContentContainer } from '../../hoc/layout/element';

//Style
import {
    Box,
    Text,
} from 'rebass/styled-components'


//We create a ModalPortal to display modal component outsite of the DOM hierarchy 
const ModalPortal = ({ children }) => {

    //We need to create a portal to add our modal comment box into another DOM node 
    //Portal => allow us to add a child component into a DOM node that isn't in the DOM hierarchy 
    //of the parent component

    //e.g: ReactDOM.createPortal((child, container))

    //child => react element (component, DOM element, string, Fragment)
    //container => DOM element

    //In our case ModalPortal => take a modal component (e.g: CommentBox) and add it to the
    //modal-root DOM element that is not inside the DOM hierarchy of AuthenticatedHome parent component. 

    const modalRoot = document.getElementById("modal-root");

    return (
        ReactDOM.createPortal(children, modalRoot)
    )
}


//Modal UI component => just UI purpose 
const Modal = ({ modalState }) => {

    //UI state to handle modal diplay state
    const [isOpen, setIsOpen] = useState(modalState);

    function closeModal(e) {
        e.preventDefault();
        setIsOpen(false);
    }
    return (
        <div className={`modal-container modal-container-${isOpen ? 'open' : 'closed'}`}>
            <div className="modal">
                <button onClick={closeModal}><a href="/">close</a></button>
                <div className="modal__content">
                    <h2>Modal test</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id consequatur deserunt earum quia unde pariatur obcaecati corporis quae perspiciatis, quod fugit ab, exercitationem debitis necessitatibus vitae dicta accusantium quos beatae.</p>
                </div>
            </div>
        </div>
    )
}

const AuthenticatedHome = () => {

    //UI State
    const [show, setShow] = useState(false);
    const [currentPostId, setCurrentPostId] = useState('');
    //UI state that represents the comment count 
    const [commentCount, setCommentCount] = useState(0);

    //Server State 
    const [posts, setPosts] = useState([]);

    const closeModal = () => {
        setShow(false);
    }

    const setPostId = (postId) => {
        setCurrentPostId(postId);
    }

    useEffect(() => {
    }, [posts]);

    useEffect(() => {
        axios.get('/posts')
            .then(response => {
                setPosts(response.data);
            })
    }, []);

    const childRef = useRef();


    return (
        <Fragment>
            <ModalPortal>
                <Modal modalState='true' />
            </ModalPortal>
            <ContentContainer>
                <Box pb={3}>
                    <PostBox posts={posts} setPosts={setPosts} />
                </Box>
                <Box>
                    <ul>
                        {posts.map(post => {
                            return (
                                <li key={post.postId}>
                                    <Box mb={2}>
                                        <PostDetails show={show} openModal={childRef} setPostId={setPostId} post={post} commentCount={commentCount} setCommentCount={setCommentCount} />
                                    </Box>
                                </li>
                            )
                        })}
                    </ul>
                </Box>
            </ContentContainer>

        </Fragment>
    );
}

export default AuthenticatedHome;
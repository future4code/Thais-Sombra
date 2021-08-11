import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/urls'
import { PostCardContainer, VoteCommentContainer } from './styled'
import { FaArrowUp, FaArrowDown } from 'react-icons/fa'
import FeedForm from './FeedForm'


const FeedPage = () => {
    useProtectedPage()
    const posts = useRequestData([],`${BASE_URL}/posts`)
    console.log(posts)

    const postsCards = posts.map((post)=> {
        return (
        <PostCardContainer key={post.id}>
            <h3>{post.username}</h3>
            <p>{post.body}</p>
            <VoteCommentContainer>
                <FaArrowUp />
                <p>{post.voteSum}</p>
                <FaArrowDown />
                <p>{post.commentCount} comentários</p>
            </VoteCommentContainer>
        </PostCardContainer>
        )
            
    })

    return (
        <div>
            <h1>FeedPage</h1>
            <FeedForm />
            {postsCards}
        </div>
    )
}

export default FeedPage
import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/urls'

const FeedPage = () => {
    useProtectedPage()
    const posts = useRequestData([],`${BASE_URL}/posts`)
    console.log('posts:',posts)

    return (
        <div>
            <h1>FeedPage</h1>
        </div>
    )
}

export default FeedPage
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchposts } from '../redux'

const PostsContainer = ({ fetchposts, postData }) => {

    useEffect(() => {
        fetchposts()
    }, [])

    return postData.loading ? <h2>Loading..</h2> : postData.error ? <h2>{postData.error}</h2> : (
        <div>
            <h2>Final-space</h2>
            <div>{postData && postData.posts && postData.posts.map(post => <><div id={post.id}>{post.name}</div>
                <div id={post.id}>{post.gender}</div>
                <img src={post.img_url} alt={post.name}></img>
                </>)}</div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        postData: state.post
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchposts: () => dispatch(fetchposts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer)
import React, { useEffect, useState } from 'react';
import { Tooltip} from 'antd';
import Axios from 'axios';
import {  HeartTwoTone, FrownOutlined }  from '@ant-design/icons'


function LikeDislikes(props) {
    const [Likes, setLikes] = useState(0)
    const [Dislikes, setDislikes] = useState(0)
    const [LikeAction, setLikeAction] = useState(null)
    const [DislikeAction, setDislikeAction] = useState(null)
    const variable = { bookId: props.bookId, userId: props.userId }
    
    useEffect(() => {

        Axios.post('/api/like/getLikes', variable)
            .then(response => {
                console.log('getLikes',response.data)
        
               
                if (response.data.success) {
                    //How many likes does this book have ????
                    setLikes(response.data.likes.length)
                   

                    //Has the user already clicked this like button or not 
                    response.data.likes.map(like => {
                        if (like.userId === props.userId) {
                            //if the person who liked it is the user currently logged in it will show as liked 
                            setLikeAction('liked')
                        }
                    })
                } else {
                    alert('Failed to get likes')
                }
            })

        Axios.post('/api/like/getDislikes', variable)
            .then(response => {
                console.log('getDislike',response.data)
                if (response.data.success) {
                    //How many likes does this  have 
                    setDislikes(response.data.dislikes.length)

                    //if I already click this like button or not 
                    response.data.dislikes.map(dislike => {
                        if (dislike.userId === props.userId) {
                            setDislikeAction('disliked')
                        }
                    })
                } else {
                    alert('Failed to get dislikes')
                }
            })

    }, [])


    const onLike = () => {

        if (LikeAction === null) {

            Axios.post('/api/like/upLike', variable)
                .then(response => {
                    if (response.data.success) {

                        setLikes(Likes + 1)
                        setLikeAction('liked')

                        //If dislike button is already clicked

                        if (DislikeAction !== null) {
                            setDislikeAction(null)
                            setDislikes(Dislikes - 1)
                        }


                    } else {
                        alert('Failed to increase the like')
                    }
                })


        } else {

            Axios.post('/api/like/unLike', variable)
                .then(response => {
                    if (response.data.success) {

                        setLikes(Likes - 1)
                        setLikeAction(null)

                    } else {
                        alert('Failed to decrease the like')
                    }
                })

        }

    }


    const onDisLike = () => {

        if (DislikeAction !== null) {

            Axios.post('/api/like/unDisLike', variable)
                .then(response => {
                    if (response.data.success) {

                        setDislikes(Dislikes - 1)
                        setDislikeAction(null)

                    } else {
                        alert('Failed  dislike')
                    }
                })

        } else {

            Axios.post('/api/like/upDisLike', variable)
                .then(response => {
                    if (response.data.success) {

                        setDislikes(Dislikes + 1)
                        setDislikeAction('disliked')

                        //If dislike button is already clicked
                        if(LikeAction !== null ) {
                            setLikeAction(null)
                            setLikes(Likes - 1)
                        }

                    } else {
                        alert('Failed to increase dislike')
                    }
                })


        }


    }

    return (
        <React.Fragment>
            <span key="comment-basic-like">
                <Tooltip title="Love">
                <HeartTwoTone twoToneColor="#eb2f96" 
                        theme={LikeAction === 'liked' ? 'filled' : 'outlined'}
                        onClick={onLike} />
                </Tooltip>
                <span style={{ paddingLeft: '8px', cursor: 'auto' }}>{Likes}</span>
            </span>&nbsp;&nbsp;
            <span key="comment-basic-dislike">
                <Tooltip title="Not Impressed">
                <FrownOutlined twoToneColor="#52c41a"
                        theme={DislikeAction === 'disliked' ? 'filled' : 'outlined'}
                        onClick={onDisLike}
                    />
                </Tooltip>
                <span style={{ paddingLeft: '8px', cursor: 'auto' }}>{Dislikes}</span>
            </span>
        </React.Fragment>
    )
}

export default LikeDislikes
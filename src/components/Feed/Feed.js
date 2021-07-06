import React from 'react';
import MessageSender from '../MessageSender/MessageSender';
import Post from '../Post/Post';
import StoryReel from '../StoryReel/StoryReel';
import "./Feed.css";

const Feed = () => {
    return (
        <div className="feed">
            <StoryReel/>
            <MessageSender/>
            <Post
            profilePic="https://scontent.fdac99-1.fna.fbcdn.net/v/t1.0-9/121630630_1276658492681612_8961900382755672641_n.jpg?_nc_cat=104&ccb=2&_nc_sid=09cbfe&_nc_ohc=L5ilCg5PgM8AX9MLYQN&_nc_ht=scontent.fdac99-1.fna&oh=2b338fa11654117bc290ae2da8984ea2&oe=601FB24D"
            message="Wow cool it's working on"
            timestamp="this is timestamp"
            image="https://learntocodewith.me/wp-content/uploads/2018/07/Learn-to-Code-for-Free-1680x880.png"
            username="Tanvir Anjum Labir"
            />
            <Post
            profilePic="https://scontent.fdac99-1.fna.fbcdn.net/v/t1.0-9/121630630_1276658492681612_8961900382755672641_n.jpg?_nc_cat=104&ccb=2&_nc_sid=09cbfe&_nc_ohc=L5ilCg5PgM8AX9MLYQN&_nc_ht=scontent.fdac99-1.fna&oh=2b338fa11654117bc290ae2da8984ea2&oe=601FB24D"
            message="Wow cool it's working on"
            timestamp="this is timestamp"
            image="https://learntocodewith.me/wp-content/uploads/2018/07/Learn-to-Code-for-Free-1680x880.png"
            username="Tanvir Anjum Labir"
            />
            <Post
            profilePic="https://scontent.fdac99-1.fna.fbcdn.net/v/t1.0-9/121630630_1276658492681612_8961900382755672641_n.jpg?_nc_cat=104&ccb=2&_nc_sid=09cbfe&_nc_ohc=L5ilCg5PgM8AX9MLYQN&_nc_ht=scontent.fdac99-1.fna&oh=2b338fa11654117bc290ae2da8984ea2&oe=601FB24D"
            message="Wow cool it's working on"
            timestamp="this is timestamp"
            image="https://learntocodewith.me/wp-content/uploads/2018/07/Learn-to-Code-for-Free-1680x880.png"
            username="Tanvir Anjum Labir"
            />
        </div>
    );
};

export default Feed;
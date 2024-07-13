import React from 'react';
import PropTypes from 'prop-types';
import './friends.json';
import css from './FriendList.module.css'

const friendsData = {
    avatar: "",
    name: "",
    isOnline: true
} 

const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <>
            <ul className={css.friendList}>
                friendsData.map((friend, index) => {
                    <li className={css.item} key={index}>
                        <span className={css.isOnline}>{friendsData.isOnline}</span>
                        <img className={css.avatar} src={friendsData.avatar} alt={`Avatar of ${friend.name}`} width="50" />
                        <p className={css.name}>{friend.name}</p>
                    </li>
                })
            </ul>
        </>
    )
}

FriendListItem.propTypes = {
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string,
        isOnline: PropTypes.bool,
}

export const FriendList = ({ friends }) => {
    return (
        <>
           <FriendListItem /> 
        </>
    )
}
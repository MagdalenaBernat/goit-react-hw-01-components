import React from 'react'
import PropTypes from 'prop-types'
import css from './FriendList.module.css'

const friendsData = [
    {
        avatar: "",
        name: "Mango",
        isOnline: true
    },
    {
        avatar: "",
        name: "Kiwi",
        isOnline: false
    },
    {
        avatar: "",
        name: "Ajax",
        isOnline: true
    },
    {
        avatar: "",
        name: "Jay",
        isOnline: true
    },
    {
        avatar: "",
        name: "Poly",
        isOnline: false
    } 
]
const FriendListItem = () => {
    return (
        <ul>
            {friendsData.map((friend, index) => (
                <li className={css.item} key={index}>
                    <span className={`status ${friend.isOnline ? 'online' : 'offline'}`}></span>
                    <img className={css.avatar} src={friend.avatar} alt={`Avatar of ${friend.name}`} width="50" />
                    <p className={css.name}>{friend.name}</p>
                </li>
            ))}
        </ul>
    );
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
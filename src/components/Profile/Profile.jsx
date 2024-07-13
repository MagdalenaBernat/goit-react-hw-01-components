import React from 'react';
import PropTypes from 'prop-types';
import "./user.json";
import css from "./Profile.module.css";

export const Profile = ({ username, tag, location, avatar, stats }) => {
    return (
        <>
            <div className={css.profile}>
                <div className={css.description}>
                    <img src={avatar.value} alt="User avatar" className={css.avatar} />
                    <p className={css.name}>{username.value}</p>
                    <p className={css.tag}>{tag.value}</p>
                    <p className={css.location}>{location.value}</p>
                </div>
                <ul className={css.stats}>
                    <li>
                        <span className={css.label}>Followers</span>
                        <span className={css.quantity}>{stats.followers.value}</span>
                    </li>
                    <li>
                        <span className={css.label}>Views</span>
                        <span className={css.quantity}>{stats.views.value}</span>
                    </li>
                    <li>
                        <span className={css.label}>Likes</span>
                        <span className={css.quantity}>{stats.likes.value}</span>
                    </li>
                </ul>
            </div>
        </>
    );   
}

Profile.propTypes = {
        username: PropTypes.string,
        name: PropTypes.string,
        tag: PropTypes.string,
        location: PropTypes.string,
        avatar: PropTypes.string.isRequired,
        stats: PropTypes.number
}
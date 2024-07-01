import React from 'react';
import PropTypes from 'prop-types';
import "../../assets/user.json"
import css from "./Profile.module.css"


// const user = {
//   username: "Petra Marica",
//   tag: "@pmarica",
//   location: "Salvador, Brasil",
//   avatar: "https://cdn-icons-png.flaticon.com/512/1077/1077012.png",
//   stats: {
//     followers: 1000,
//     views: 2000,
//     likes: 3000
//   }
// }

export const Profile = ({ username, tag, location, avatar, stats }) => {
    return (
        <>
            <div className="css.profile">
                <div className="css.description">
                    <img src={avatar.value} alt="User avatar" className="css.avatar" />
                    <p className="css.name">{username.value}</p>
                    <p className="css.tag">{tag.value}</p>
                    <p className="css.location">{location.value}</p>
                </div>
                <ul className="css.stats">
                    <li>
                        <span className="css.label">Followers</span>
                        <span className="css.quantity">{stats.followers.value}</span>
                    </li>
                    <li>
                        <span className="css.label">Views</span>
                        <span className="css.quantity">{stats.views.value}</span>
                    </li>
                    <li>
                        <span className="css.label">Likes</span>
                        <span className="css.quantity">{stats.likes.value}</span>
                    </li>
                </ul>
            </div>
        </>
    );

    Profile.propTypes = {
        username: PropTypes.string,
        name: PropTypes.string,
        tag: PropTypes.string,
        location: PropTypes.string,
        avatar: PropTypes.string.isRequired,
        stats: PropTypes.number
    }
    
}
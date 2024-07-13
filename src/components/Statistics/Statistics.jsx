import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css'
import './data.json';

export const Statistics = (title, stats) => {
    <>
        <section className={css.statistics}>
            <h2 className={css.title}>{title}</h2>

            <ul className={css.statList}>
                
                {stats.data.map((item, index) => {
                    <li className={css.item} key={index}>
                        <span className={css.label}>{item.label}</span>
                        <span className={css.percentage}>{item.percentage}%</span>
                    </li>
                })
                }
                              
                {/* <li className={css.item}>
                    <span className={css.label}>{stats.label.value}</span>
                    <span className={css.percentage}>{stats.percentage.value}%</span>
                </li> */}
            </ul>
        </section>
    </>
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.number
}
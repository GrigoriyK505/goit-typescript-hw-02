import s from './LoadMoreBtn.module.css'
import React, { MouseEvent } from 'react';

type LoadMoreBtnProps = {
    handleClick: (e: MouseEvent<HTMLButtonElement>) => void;
};

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ handleClick }) => {
    return (
        <div>
            <button className={s.button} onClick={handleClick}>Load more</button>
        </div>
    )
}
export default LoadMoreBtn
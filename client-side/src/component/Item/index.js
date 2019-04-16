import React from 'react';
import './app.scss';
import Profile from 'image/img_profile40_gray.png';

const ImageOnError = e => {
    e.target.src = Profile;
};

export default ({ image = [], children }) => {
    return (
        <li className={'Item length' + image.length}>
            <div className="DivRound">
                {image.map((val, i) => (
                    <div className="ImagePosition" key={i}>
                        <img
                            className="Image"
                            src={val}
                            alt="item"
                            onError={ImageOnError}
                        />
                    </div>
                ))}
            </div>
            <div className="Content">{children}</div>
        </li>
    );
};

import * as React from 'react';
import { NavLink } from 'react-router-dom';
import './app.css';

interface IProps {
  url: string;
  image: string;
}

const linkImage: React.SFC<IProps> = ({ url, image }) => {
  return (
    <NavLink exact={true} to={url} activeClassName="active">
      <div className="IconBox">
        <img className="Icon" src={image} alt="image" />
      </div>
    </NavLink>
  );
};

export { linkImage as LinkImage };

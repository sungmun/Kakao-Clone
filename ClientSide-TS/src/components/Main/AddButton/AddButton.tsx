import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import { Link } from 'react-router-dom';
import './app.css';

interface IProps {
  url: string;
}

const addButton: React.SFC<IProps> = ({ url }) => {
  return (
    <Link to={url}>
      <div className="AddButton">
        <FontAwesomeIcon icon={faPlus} size="2x" className="PlusIcon" />
      </div>
    </Link>
  );
};

export { addButton as AddButton };

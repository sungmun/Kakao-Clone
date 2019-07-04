import * as React from 'react';
import './app.css';

interface IProps {
  ischange: boolean;
  sendEvent: () => void;
}

const sendButton: React.SFC<IProps> = ({ ischange, sendEvent }) => {
  const [sendClass, setSendClass] = React.useState('send');

  React.useEffect(() => {
    if (ischange) {
      setSendClass(`${sendClass} active`);
    } else {
      setSendClass('send');
    }
  }, [ischange]);

  return (
    <button className={sendClass} type="button" onClick={sendEvent}>
      <span className="Text">전송</span>
    </button>
  );
};
export { sendButton as SendButton };

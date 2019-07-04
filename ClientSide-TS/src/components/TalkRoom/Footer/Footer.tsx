import * as React from 'react';
import './app.css';
import { SendButton } from './SendButton';

interface IProps {
  sendEvent: (text: string) => void;
}

const footer: React.SFC<IProps> = ({ sendEvent }) => {
  const [isChange, setIsChange] = React.useState(false);
  const [text, setText] = React.useState('');

  const onTextCheck = ({ target }: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(target.value);
    if (target.value.length > 0) {
      setIsChange(true);
    } else {
      setIsChange(false);
    }
  };

  const sendText = () => {
    sendEvent(text);
  };

  return (
    <footer className="Footer">
      <textarea name="talkArea" className="Textarea" onChange={onTextCheck} />
      <SendButton ischange={isChange} sendEvent={sendText} />
    </footer>
  );
};
export { footer as Footer };

import * as React from 'react';
import { useSelector } from 'react-redux';
import { Talk } from 'src/components/TalkRoom/Talk';
import { ITalk, ITalkAddProfile } from 'src/interface/talk.interface';
import { IUser } from 'src/interface/user.interface';
import { IState } from 'src/reducer';


interface IProps {
    talkData: ITalk;
}
const talkContainer: React.SFC<IProps> = ({ talkData }) => {
    const { data } = useSelector(({ profile }: IState) => profile)

    const talkIsProfile: ITalkAddProfile = { ...talkData, isUser: ((data as IUser).id === talkData.userId) }
    return <Talk talkData={talkIsProfile} />
};

export { talkContainer as TalkContainer };


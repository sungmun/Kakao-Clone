import * as React from 'react';
import { useSelector } from 'react-redux';
import { TalkListComponent } from 'src/components/TalkRoom/TalkList';
import { ITalk } from 'src/interface/talk.interface';
import { IState } from 'src/reducer';

interface IProps {
    id: number;
}

const talkListContainer: React.SFC<IProps> = ({ id }) => {
    const talkList = useSelector(({ talk }: IState) => talk.data)

    if (!talkList.get(id)) return <div>Loading...</div>

    return (
        <TalkListComponent talkList={talkList.get(id) as ITalk[]} />
    );
};

export { talkListContainer as TalkListContainer };


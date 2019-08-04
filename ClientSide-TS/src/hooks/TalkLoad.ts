import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from 'src/reducer';
import { listAsync } from 'src/reducer/talk';

export const talkLoad = (id: number) => {
  const { talk } = useSelector((state: IState) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!talk.data.has(id)) {
      (async () => dispatch(listAsync(id)))();
    }
  }, [id]);
};

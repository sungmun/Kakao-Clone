import { Item } from 'components/Base/Item';
import * as React from 'react';
import { IUser } from 'src/interface/user.interface';
import { IItemLinkOp } from '../Item/ItemLinkOp.interface';
import { nameJoin } from './NameJoin';

interface IProps {
  userList: IUser[];
  Index: number;
  LinkOp: IItemLinkOp;
}

const userListItem: React.SFC<IProps> = ({ Index, userList, LinkOp }) => {
  const userListFilter = (attr: string): string[] =>
    userList.map(val => val[attr]);

  const image = userListFilter('photos');
  const nameArray = userListFilter('nickName');
  const names = nameJoin(nameArray);
  const length = nameArray.length >= 2 ? nameArray.length + 1 : undefined;
  return (
    <Item
      image={image}
      LinkOp={LinkOp}
      ContentOp={{ TabIndex: Index, Name: names, Length: length }}
    />
  );
};
export { userListItem as UserListItem };

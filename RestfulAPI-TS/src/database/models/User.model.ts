import {
  AutoIncrement,
  BelongsToMany,
  Column,
  CreatedAt,
  DataType,
  Model,
  PrimaryKey,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';
import { Friend } from './Friend.model';
import { TalkRoom } from './TalkRoom.model';
import { UserTalkRoom } from './UserTalkRoom.model';

@Table
export class User extends Model<User> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id!: number;

  @Column(DataType.STRING)
  platformName!: string;

  @Column(DataType.STRING)
  socialId!: string;

  @Column(DataType.STRING)
  nickName!: string;

  @Column(DataType.STRING)
  photos!: string;

  @CreatedAt
  createdAt!: Date;

  @UpdatedAt
  updatedAt!: Date;

  @BelongsToMany(() => User, () => Friend, 'userId', 'friendId')
  friendList!: User[] | [];

  @BelongsToMany(() => TalkRoom, () => UserTalkRoom, 'userId', 'talkRoomId')
  talkRoomList!: TalkRoom[] | [];
}

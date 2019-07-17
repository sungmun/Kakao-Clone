import {
  AutoIncrement,
  BelongsToMany,
  Column,
  CreatedAt,
  DataType,
  HasMany,
  Model,
  PrimaryKey,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';
import { User } from './User.model';
import { Talk } from './Talk.model';
import { UserTalkRoom } from './UserTalkRoom.model';

@Table
export class TalkRoom extends Model<TalkRoom> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id!: number;

  @BelongsToMany(() => User, () => UserTalkRoom, 'talkRoomId', 'userId')
  userList!: TalkRoom[] | [];

  @HasMany(() => Talk)
  talkList!: Talk[] | [];

  @CreatedAt
  createdAt!: Date;

  @UpdatedAt
  updatedAt!: Date;
}

import { TalkRoom } from './TalkRoom.model';
import { User } from './User.model';
import {
  Model,
  Table,
  Column,
  CreatedAt,
  AutoIncrement,
  PrimaryKey,
  ForeignKey,
  DataType,
} from 'sequelize-typescript';

@Table
export class UserTalkRoom extends Model<UserTalkRoom> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id!: number;

  @ForeignKey(() => User)
  @Column(DataType.INTEGER)
  userId!: number;

  @ForeignKey(() => TalkRoom)
  @Column(DataType.INTEGER)
  talkRoomId!: number;

  @CreatedAt
  createdAt!: Date;
}

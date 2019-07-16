import {
  AutoIncrement,
  BelongsTo,
  Column,
  CreatedAt,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { TalkRoom } from './TalkRoom.model';
import { User } from './User.model';

@Table
export class Talk extends Model<Talk> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id!: number;

  @Column(DataType.STRING)
  message!: string;

  @BelongsTo(() => User)
  user?: User;

  @BelongsTo(() => TalkRoom)
  talkRoom?: TalkRoom;

  @CreatedAt
  createdAt!: Date;

  @ForeignKey(() => User)
  userId!: number;

  @ForeignKey(() => TalkRoom)
  talkRoomId!: number;
}

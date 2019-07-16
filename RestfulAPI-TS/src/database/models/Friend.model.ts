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
export class Friend extends Model<Friend> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id!: number;

  @ForeignKey(() => User)
  @Column(DataType.INTEGER)
  userId!: number;

  @ForeignKey(() => User)
  @Column(DataType.INTEGER)
  friendId!: number;

  @CreatedAt
  createdAt!: Date;
}

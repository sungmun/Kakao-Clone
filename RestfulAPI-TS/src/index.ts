import { createServer } from 'http';
import { Sequelize } from 'sequelize-typescript';
import * as socketIO from 'socket.io';
import { development } from './../config/config.json';
import { Friend } from './database/models/Friend.model';
import { Talk } from './database/models/Talk.model';
import { TalkRoom } from './database/models/TalkRoom.model';
import { User } from './database/models/User.model';
import { UserTalkRoom } from './database/models/UserTalkRoom.model';
import express from './express';
import { SocketServer } from './socket/index';

const sequelize = new Sequelize({
  dialect: 'mariadb',
  database: development.database,
  host: development.host,
  password: development.password,
  logging: development.logging,
  username: development.username,
});

sequelize.addModels([Friend, TalkRoom, UserTalkRoom, Talk, User]);

const port = 5000;

const http = createServer(express);
sequelize
  .sync()
  .then(() => {
    console.log('✓ DB connection success.');
    console.log('  Press CTRL-C to stop\n');
  })
  .catch((err: Error) => {
    console.error(err);
    console.log('✗ DB connection error. Please make sure DB is running.');
    process.exit();
  });

http.listen(port, () => {
  console.log('User', User.isInitialized);
  console.log('Friend', Friend.isInitialized);
  console.log('Talk', Talk.isInitialized);
  console.log('TalkRoom', TalkRoom.isInitialized);
  console.log('UserTalkRoom', UserTalkRoom.isInitialized);
  console.log('Express listening on port ', port);
});

export const socket = new SocketServer(socketIO.listen(http));

export class CoustomError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }
}

export default http;
// supervisor server.js

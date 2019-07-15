import { User } from './database/models/User.model';
import { createServer } from 'http';
import { Sequelize } from 'sequelize-typescript';
import socket from 'socket.io';
import { development } from './../config/config.json';
import express from './express';
import { Friend } from './database/models/Friend.model';
import { Talk } from './database/models/Talk.model';
import { TalkRoom } from './database/models/TalkRoom.model';
import { UserTalkRoom } from './database/models/UserTalkRoom.model';

const sequelize = new Sequelize({
  dialect: 'mariadb',
  database: development.database,
  host: development.host,
  password: '',
  logging: development.logging,
  username: development.username,
  modelPaths: [__dirname + '/database/models/*.model.*'],
  modelMatch: (filename, member) => {
    return (
      filename.substring(0, filename.indexOf('.model')).toLowerCase() ===
      member.toLowerCase()
    );
  },
});

sequelize.addModels([Friend]);

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

export const socketIO = socket(http);

export class CoustomError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }
}

export default http;
// supervisor server.js

/* global describe:true */
import {
  saveTest,
  addUserTest,
  listReadTest,
  readTest,
  removeTest,
} from './testCase';

describe('talkRoom.Controller', () => {
  describe('save', () => saveTest());

  describe('addUser', () => addUserTest());

  describe('listRead', () => listReadTest());

  describe('read', () => readTest());

  describe('remove', () => removeTest());
});

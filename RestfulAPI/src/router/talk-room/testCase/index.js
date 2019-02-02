import { addUserTestCase } from "./addUser.spec";
import { listReadTestCase } from "./listRead.spec";
import { readTestCase } from "./read.spec";
import { removeTestCase } from "./remove.spec";
import { saveTestCase } from "./save.spec";

export const TestCase = {
    addUser: addUserTestCase,
    listRead: listReadTestCase,
    read: readTestCase,
    remove: removeTestCase,
    save: saveTestCase,
    update: updateTestCase
};

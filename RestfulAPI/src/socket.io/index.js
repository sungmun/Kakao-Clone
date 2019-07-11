import { socketIO } from "../index";
import login from "./login";

socketIO.on("connection", socket => {
  login(socket);
});

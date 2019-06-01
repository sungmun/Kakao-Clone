import "@babel/polyfill";
import Model from "../../database/models";

export const read = async (req, res) => {
  try {
    const user = await Model.User.build(req.body.profile);
    const friendList = await user.getFriendList();

    const resData = await friendList.map(friend => {
      const data = friend.get({ plain: true });
      delete data.Friends;
      return data;
    });

    res.status(201).json({ friend: resData });
  } catch (error) {
    res.status(403).json(error.message);
  }
};

export const save = async (req, res) => {
  try {
    const { profile: user, friend } = req.body;

    await Model.Friend.findOrCreate({
      where: {
        userId: user.id,
        friendId: friend
      }
    });

    res.status(204).json();
  } catch (error) {
    res.status(403).json(error.message);
  }
};

export const remove = async (req, res) => {
  try {
    const { profile: user, friend } = req.body;
    await Model.Friend.destroy({
      where: {
        userId: user.id,
        friendId: friend
      }
    });

    res.status(204).json();
  } catch (error) {
    res.status(403).json(error.message);
  }
};

import * as services from "../services";

export const getUsers = (req, res) => {
  const users = services.getAllUsers();

  return res.status(200).json(users);
};

export const getUserById = (req, res) => {
  const userId = req.params.userId;

  if (userId === undefined || isNaN(parseInt(userId))) {
    return res.status(400).json({
      errors: ["userId Invalid"],
    });
  }

  const user = services.getUserById(parseInt(userId));

  if (user !== undefined) return res.status(200).json(user);
  else return res.status(400).json({ errors: ["Couldn't find the user"] });
};

export const createUser = async (req, res) => {
  const newUser = req.body;
  let errors = [];

  if (newUser.id === undefined || isNaN(newUser.id)) {
    errors.push("Invalid user ID");
  }

  if (newUser.firstName === undefined || newUser.firstName.length === 0) {
    errors.push("Invalid FirstName");
  }

  if (newUser.lastName === undefined || newUser.lastName.length === 0) {
    errors.push("Invalid LastName");
  }

  if (errors.length > 0) {
    return res.status(400).json({
      errors,
    });
  }

  const isSuccess = await services.createUser(newUser);

  if (isSuccess) return res.status(200).json(newUser);
  else return res.status(400).json({ errors: ["Couldn't create the user"] });
};

export const updateUser = async (req, res) => {
  const updatedUser = req.body;
  let errors = [];

  if (updatedUser.id === undefined || isNaN(updatedUser.id)) {
    errors.push("Invalid user ID");
  }

  if (
    updatedUser.firstName === undefined ||
    updatedUser.firstName.length === 0
  ) {
    errors.push("Invalid FirstName");
  }

  if (updatedUser.lastName === undefined || updatedUser.lastName.length === 0) {
    errors.push("Invalid LastName");
  }

  if (errors.length > 0) {
    return res.status(400).json({
      errors,
    });
  }
  const isSuccess = await services.updateUser(updatedUser);

  if (isSuccess) return res.status(200).json(updatedUser);
  else return res.status(400).json({ errors: ["Couldn't update the user"] });
};

export const deleteUser = (req, res) => {
  const userId = req.params.userId;
  if (userId === undefined || isNaN(parseInt(userId))) {
    return res.status(400).json({
      errors: ["userId Invalid"],
    });
  }
  const isSuccess = services.deleteUser(parseInt(userId));

  if (isSuccess) return res.status(200).json(isSuccess);
  else return res.status(400).json({ errors: ["Couldn't delete the user"] });
};

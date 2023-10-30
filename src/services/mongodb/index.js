export const getAllUsers = () => {};

export const getUserById = (userId) => {};

export const createUser = async (user) => {
  try {
    return true;
  } catch (err) {
    console.error(err.message);
    return false;
  }
};

export const updateUser = async (updateUserData) => {
  try {
    return true;
  } catch (err) {
    console.error(err.message);
    return false;
  }
};

export const deleteUser = async (userId) => {
  try {
    return true;
  } catch (err) {
    console.error(err.message);
    return false;
  }
};

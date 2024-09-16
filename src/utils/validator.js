import { isValidUsername } from "6pp";

export const userNamevalidator = (username) => {
  if (!isValidUsername(username)) {
    return { isValid: false, errorMessage: "UserName is invalid" };
  }
};

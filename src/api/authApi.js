import axios from "axios";
import { URL } from "../config/url";

export const signUp = (user) => {
  return axios
    .post(`${URL}/signup`, {
      username: user.username,
      email: user.email,
      password: user.password,
    })
    .then((response) => {
      return response.data;
    });
};

import { createContext, useContext } from "react";

export const AuthContext = createContext({
  users: [
    {
      id: 1,
      fullname: "shadullah",
      email: "example@gmail.com",
      password: "000",
    },
  ],
  register: () => {},
  login: () => {},
});

export const AuthProvider = AuthContext.Provider;

export const useAuth = () => {
  return useContext(AuthContext);
};

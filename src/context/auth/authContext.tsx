import { createContext } from 'react';

type authProps = {
  auth: string, isAuth: boolean, getToken: any, deleteToken: any, setToken: any
}
const postContext = createContext<Partial<authProps>>({});

export default postContext;
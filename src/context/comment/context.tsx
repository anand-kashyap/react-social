import { createContext } from 'react';

type commentProps = {
  comments: any,
  getCommentsByPostId: any,
};

const commentContext = createContext<Partial<commentProps>>({});

export default commentContext;

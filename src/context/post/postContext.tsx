import { createContext } from "react";

type postProps = {
  posts: any[], fetchNewPosts: any, deletePost: any, addNew: any
}
const postContext = createContext<Partial<postProps>>({});

export default postContext;
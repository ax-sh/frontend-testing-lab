import { useQuery } from "react-query";
import axios from "axios";

import type { Post } from "./types";

export function Comp() {
  const { isLoading, isSuccess, isError, data } = useQuery<Post[]>(
    "posts",
    () =>
      axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
        return res.data;
      }),
  );

  return (
    <main>
      <h1>Storybook Testing Example</h1>
      {isLoading && <span aria-label="loading">Loading...</span>}
      {isSuccess &&
        data!.map((post) => (
          <article key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </article>
        ))}
      {isError && <span>Error loading posts</span>}
    </main>
  );
}

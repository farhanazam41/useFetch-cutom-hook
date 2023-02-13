import { useState, useEffect } from "react";
import "./styles.css";
import useFetch from "./useFetch";

export default function App() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
  console.log(data, "data");
  const tenPosts = data && data.slice(0, 10);
  console.log(error, "er");
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {loading && "loading"}
      {!error && !loading && data && (
        <ul>
          {tenPosts.map((post, index) => {
            return <li key={index}>{post.title}</li>;
          })}
        </ul>
      )}
      {error && !data && "error"}
    </div>
  );
}

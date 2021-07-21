import React from "react";
import FeedPage from "./pages/FeedPage/FeedPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import PostPage from "./pages/PostPage/PostPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";

const App = () => {
  return (
    <div>
      <FeedPage/>
      <LoginPage/>
      <PostPage/>
      <SignUpPage/>
    </div>
  )
}

export default App;

import React from "react";
// import "./Blog.css";
import styleSheet from "./Blog.css";
import style from "./blog.module.css";
function Blog() {
  return (
    <div className={styleSheet.div}>
      <h1 className={style.h1}>This is a Blog Component</h1>
    </div>
  );
}

export default Blog;

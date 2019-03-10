import React from "react";
import { Link } from "gatsby";

const BlogList = ({ list }) => {
  return (
    <ul>
      {list.map(blog => {
        return (
          <li key={blog.node.id}>
            <Link to={blog.node.frontmatter.path}>
              {blog.node.frontmatter.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default BlogList;

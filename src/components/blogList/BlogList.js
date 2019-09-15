import React from "react";
import moment from "moment";
import { Link } from "gatsby";

const BlogList = ({ list }) => {
  const computeDate = date => moment(date).format("Do MMM, YYYY");

  return (
    <div className="blog-list">
      {list.map(blog => {
        return (
          <article key={blog.node.id} className="list-item">
            <div className="post-title">
              <Link to={blog.node.frontmatter.path}>
                {blog.node.frontmatter.title}
              </Link>
            </div>
            <span className="date-label">
              {computeDate(blog.node.frontmatter.date)}
            </span>
          </article>
        );
      })}
    </div>
  );
};

export default BlogList;

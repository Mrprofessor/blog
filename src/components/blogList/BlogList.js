import React from "react";
import moment from "moment";
import { Link } from "gatsby";

const BlogList = ({ list }) => {
  const computeDate = date => moment(date).format("Do MMM, YYYY");

  return (
    <div className="blog-list">
      {list.map(post => {
        return (
          <article key={post.node.id} className="list-item">
            <div className="post-title">
              <Link to={post.node.frontmatter.path}>
                {post.node.frontmatter.title}
              </Link>
            </div>
            <span className="date-label">
              {computeDate(post.node.frontmatter.date)}
            </span>
          </article>
        );
      })}
    </div>
  );
};

export default BlogList;

import React from "react";
import moment from "moment";
import { Link } from "gatsby";

const BlogList = ({ list }) => {
  const computeDate = date => moment(date).format("Do MMM, YYYY");

  return (
    <div className="blog-list">
      {list.map(post => {
        return (
          <article key={post.node.id}>
            <div className="post-title">
              <Link to={post.node.frontmatter.path}>
                <strong>{post.node.frontmatter.title}</strong>
              </Link>
            </div>

            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: post.node.html }}
            />
          </article>
        );
      })}
    </div>
  );
};

export default BlogList;

import React from "react";
import moment from "moment";
import { Link } from "gatsby";

const BlogList = ({ list }) => {
  const computeDate = date => moment(date).format("Do MMMM, YYYY");

  return (
    <div className="blog-list">
      {list.map(blog => {
        return (
          <article key={blog.node.id} className="list-item">
            <Link to={blog.node.frontmatter.path}>
              {blog.node.frontmatter.title}
            </Link>
            <span>{computeDate(blog.node.frontmatter.date)}</span>
          </article>
        );
      })}
    </div>
  );
};

export default BlogList;

//<ul>
//{list.map(blog => {
//return (
//<li key={blog.node.id}>
//<Link to={blog.node.frontmatter.path}>
//{blog.node.frontmatter.title}
//</Link>
//</li>
//);
//})}
//</ul>

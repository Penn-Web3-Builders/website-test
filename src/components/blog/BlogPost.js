import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { API_KEY } from "./constants_test";

import classes from "./BlogPost.module.css";
import { dateConverter } from "./dateConverter";

import parse from "html-react-parser";

const BlogPost = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [postData, setPostData] = useState(null);
  const parse = require("html-react-parser");

  const location = useLocation();
  const id = location.pathname.slice(6);

  useEffect(() => {
    const fetchFunction = async function () {
      try {
        console.log("hello, api!");
        const response = await fetch(
          `https://web3-builders.ghost.io/ghost/api/content/posts/${id}/?key=${API_KEY}`
        );
        const data = await response.json();
        console.log(data.posts[0]);
        setPostData(data.posts[0]);
        setIsLoading(false);
        console.log(postData);
        // console.log(data.posts[0].html);

        if (!response.ok) {
          throw new Error("something went wrong with fetching post data!");
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchFunction();
  }, []);

  // const html = parse(postData?.html.toString());
  // const string = "";
  // const htmlstring = html + string;
  // const htmltest = postData?.html;
  // console.log(htmlstring);
  // console.log("hello world");

  return (
    <div className={classes.container}>
      <div>
        {!isLoading ? (
          <div>
            <div className={classes["post-info"]}>
              <p>{dateConverter(postData.published_at)}</p>
              <p>|</p>
              <p>{postData.reading_time} min read</p>
            </div>
            <div className={classes["post-title"]}>
              <h1>{postData.title}</h1>
            </div>
            <div className={classes['feature-img']}>
              <img src={postData.feature_image}></img>
            </div>
          </div>
        ) : (
          ""
        )}
        <div
          className={classes["post-content"]}
          dangerouslySetInnerHTML={{ __html: postData?.html }}
        ></div>
      </div>
    </div>
  );
};

export default BlogPost;

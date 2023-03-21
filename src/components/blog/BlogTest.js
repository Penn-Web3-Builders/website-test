import { useState, useEffect } from "react";
import { API_KEY, API_KEY_ADMIN, API_URL } from "./constants_test";
import { Link } from "react-router-dom";
import classes from "./BlogTest.module.css";

import { dateConverter } from "./dateConverter";

const BlogTest = () => {
  const [ghostData, setGhostData] = useState(null);

  useEffect(() => {
    const fetchFunction = async function () {
      try {
        const response = await fetch(
          `https://web3-builders.ghost.io/ghost/api/content/posts/?key=${API_KEY}`
        );
        const data = await response.json();
        console.log(data);
        setGhostData(data);
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

  const blogSneakPeaks = ghostData?.posts.map((post) => {
    const dateWord = dateConverter(post.published_at)
    // const postDateNumber = post.published_at.slice(0, 10);
    // const yearNumber = +postDateNumber.slice(0, 4);
    // const monthNumber = +postDateNumber.slice(5, 7);
    // const dateNumber = +postDateNumber.slice(8, 10);
    // const months = [
    //   "January",
    //   "February",
    //   "March",
    //   "April",
    //   "May",
    //   "June",
    //   "July",
    //   "August",
    //   "September",
    //   "October",
    //   "November",
    //   "December",
    // ];
    // const dateWord = `${months[monthNumber]} ${dateNumber}, ${yearNumber}`;
    return (
      <Link to={`/blog/${post.id}`} key={post.id}>
        <div id={post.id} key={post.id} className={classes["post-preview"]}>
          <div className={classes["feature-image-container"]}>
            <img src={post.feature_image} alt="" />
          </div>
          <div className={classes["post-info"]}>
            <h4>{post.title}</h4>
            <p className={classes["post-excerpt"]}>{`${post.excerpt.slice(
              0,
              150
            )}...`}</p>
            <div className={classes["post-additional-info"]}>
              <p>{dateWord}</p>
              <p>{post.reading_time} min read</p>
            </div>
          </div>
        </div>
      </Link>
    );
  });

  return (
    <div className={classes["sneak-peak-container"]}>
      <h2>W3B Blog</h2>
      {blogSneakPeaks}
    </div>
  );
};

export default BlogTest;

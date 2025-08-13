import PostCard from "@/components/postcard/postCard";
import styles from "./blog.module.css";
import { headers } from "next/headers";
import { postCardType } from "@/types/postcard.types";
import * as motion from "motion/react-client";
import { fadeInProps } from "@/utility/fadeIn";

export const metadata = {
  title: "Blogs list",
  description: "All the blogs of BoomBlog are listed here.",
};

import { cookies } from "next/headers";

const getData = async () => {
  const headerList = await headers();
  const cookieStore = cookies();
  const host = headerList.get("host");
  const protocol = process.env.NODE_ENV == "development" ? "http" : "https";
  const res = await fetch(`${protocol}://${host}/api/blog`, {
    headers: {
      Cookie: cookieStore.toString(),
    },
  });
  const data = await res.json();
  return data;
};

const BlogPage = async () => {
  const posts = await getData();

  return (
    <motion.div {...fadeInProps} className={styles.container}>
      {posts.map((post: postCardType) => (
        <div className={styles.post} key={post._id}>
          <PostCard post={post} />
        </div>
      ))}
    </motion.div>
  );
};

export default BlogPage;

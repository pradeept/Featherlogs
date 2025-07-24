import { getPosts } from "@/lib/data";
import styles from "./adminPosts.module.css";
import Image from "next/image";
import * as motion from "motion/react-client";
import { fadeInProps } from "@/utility/fadeIn";
import DeletePost from "./deletePost";
import { postCardType } from "@/types/postcard.types";

const AdminPosts = async () => {
  const posts = await getPosts();

  return (
    <motion.div {...fadeInProps} className={styles.container}>
      <h1>Posts</h1>
      {posts.map((post:postCardType) => (
        <div className={styles.post} key={post._id}>
          <div className={styles.detail}>
            <Image
              src={post.img || "/noAvatar.png"}
              alt=''
              width={50}
              height={50}
            />
            <span className={styles.postTitle}>{post.title}</span>
          </div>
          <DeletePost id={post._id.toString()} key={post._id}/>
        </div>
      ))}
    </motion.div>
  );
};

export default AdminPosts;

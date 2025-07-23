import { getPosts } from "@/lib/data";
import styles from "./adminPosts.module.css";
import Image from "next/image";
import { deletePost } from "@/lib/actions";
import * as motion from "motion/react-client"
import { fadeInProps } from "@/utility/fadeIn";

const AdminPosts = async () => {
  const posts = await getPosts();
  
  return (
    <motion.div {...fadeInProps} className={styles.container}>
      <h1>Posts</h1>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <div className={styles.detail}>
            <Image
              src={post.img || "/noAvatar.png"}
              alt=""
              width={50}
              height={50}
            />
            <span className={styles.postTitle}>{post.title}</span>
          </div>
          <form action={deletePost}>
            <input type="hidden" name="id" value={post.id} />
            <button className={styles.postButton}>Delete</button>
          </form>
        </div>
      ))}
    </motion.div>
  );
};

export default AdminPosts;

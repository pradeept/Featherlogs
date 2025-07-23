import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";
import { postCardType } from "@/types/postcard.types";

const PostCard = ({ post }: { post: postCardType }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        {post.img && (
          <div className={styles.imgContainer}>
            <Image src={post.img} alt='' fill className={styles.img} />
          </div>
        )}
        <span className={styles.date}>
          {new Date(post.createdAt).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>{post.body}</p>
        <Link className={styles.link} href={`/blog/${post.slug}`}>
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;

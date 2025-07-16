import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";
import { postCardType } from "@/types/postcard.types";

const PostCard = () => {
  return (
    // <div className={styles.container}>
    //   <div className={styles.top}>
    //     {post.img && <div className={styles.imgContainer}>
    //       <Image src={post.img} alt="" fill className={styles.img}/>
    //     </div>}
    //     <span className={styles.date}>{post.createdAt?.toString().slice(4, 16)}</span>
    //   </div>
    //   <div className={styles.bottom}>
    //     <h1 className={styles.title}>{post.title}</h1>
    //     <p className={styles.desc}>{post.body}</p>
    //     <Link className={styles.link} href={`/blog/${post.slug}`}>READ MORE</Link>
    //   </div>
    // </div>
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src='/public/noavatar.png'
            alt=''
            fill
            className={styles.img}
          />
        </div>
        <span className={styles.date}>some date</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>some title</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla neque
          sapiente repellat exercitationem alias commodi dignissimos expedita{" "}
        </p>
        <Link className={styles.link} href={`/blog/1`}>
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;

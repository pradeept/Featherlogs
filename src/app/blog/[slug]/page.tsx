import Image from "next/image";
import styles from "./singlePost.module.css";
import PostUser from "@/components/postUser/postUser";
import { Suspense } from "react";
// import { getPost } from "@/lib/data";

// FETCH DATA WITH AN API
// const getData = async (slug) => {
//   const res = await fetch(`http://localhost:3000/api/blog/${slug}`);

//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }

//   return res.json();
// };

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  console.log(slug);
  // const post = await getPost(slug);

  return {
    title: "Some title",
    description: "This is the description of the post",
  };
};

const SinglePostPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  console.log(slug);

  // FETCH DATA WITH AN API
  // const post = await getData(slug);

  // FETCH DATA WITHOUT AN API
  // const post = await getPost(slug);

  return (
    <div className={styles.container}>
      {/* {post.img && (
        <div className={styles.imgContainer}>
          <Image src={post.img} alt='' fill className={styles.img} />
        </div>
      )} */}

      <div className={styles.imgContainer}>
        <Image src='/about.png' alt='' fill className={styles.img} />
      </div>

      <div className={styles.textContainer}>
        <h1 className={styles.title}>some title</h1>
        <div className={styles.detail}>
          {/* {post && (
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={post.userId} />
            </Suspense>
          )} */}
          <Suspense fallback={<div>Loading...</div>}>
            <PostUser userId={1} />
          </Suspense>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>
              {/* {post.createdAt.toString().slice(4, 16)} */}
              10.2.2026
            </span>
          </div>
        </div>
        <div className={styles.content}>
          This is post description. This is post description. This is post
          description. This is post description
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;

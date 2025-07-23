import Image from "next/image";
import styles from "./singlePost.module.css";
import PostUser from "@/components/postUser/postUser";
import { Suspense } from "react";
import { getPost } from "@/lib/data";
import { headers } from "next/headers";
import * as motion from "motion/react-client";
import { fadeInProps } from "@/utility/fadeIn";

// NOTE: the getPost() duplicated instead next.js
// uses cached one (first call)
export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const post = await getPost(slug);

  return {
    title: post.title,
    description: post.desc,
  };
};

//Get posts using API(route.ts)
const getData = async (slug: string) => {
  const headerList = await headers();

  const host = headerList.get("host");
  const protocol = process.env.NODE_ENV == "development" ? "http" : "https";

  const res = await fetch(`${protocol}://${host}/api/blog/${slug}`);

  const data = await res.json();
  return data;
};

const SinglePostPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  // WITH API
  const post = await getData(slug);
  // WITHOUT API
  // const post = await getPost(slug);
  return (
    <motion.div {...fadeInProps}>
      <div className={styles.container}>
        {post.img && (
          <div className={styles.imgContainer}>
            <Image src={post.img} alt='' fill className={styles.img} />
          </div>
        )}

        <div className={styles.textContainer}>
          <h1 className={styles.title}>{post.title}</h1>
          <div className={styles.detail}>
            {post && (
              <Suspense fallback={<div>Loading...</div>}>
                <PostUser userId={post.userId} />
              </Suspense>
            )}
            <div className={styles.detailText}>
              <span className={styles.detailTitle}>Published</span>
              <span className={styles.detailValue}>
                {new Date(post.createdAt).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </div>
          </div>
          <div className={styles.content}>{post.desc}</div>
        </div>
      </div>
    </motion.div>
  );
};

export default SinglePostPage;

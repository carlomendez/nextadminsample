// import Menu from "@/components/menu/Menu";
import styles from "./singlePage.module.css";
import Image from "next/image";
// import Comments from "@/components/comments/Comments";
import { fetchArticle } from "@/app/lib/data";
import HomeNavbar from "@/app/ui/home/navbar/homenavbar";

const SinglePage = async ({ params }) => {
  const { id } = params;
  const article = await fetchArticle(id);

  return (
    <>
      <HomeNavbar/>
      <div className={styles.container}>
        <div className={styles.infoContainer}>
          <div className={styles.textContainer}>
            <h1 className={styles.title}>{article?.title}</h1>
            {/* <div className={styles.user}> */}
                {/* <div className={styles.userImageContainer}>
                  <Image src="/noavatar.png" alt="" fill className={styles.avatar} />
                </div> */}
              <div className={styles.userTextContainer}>
                <span className={styles.username}>{article.author}</span>
                <span className={styles.date}>
                  {article.createdAt.toString().substring(0, 10)}
                </span>
              </div>
            {/* </div> */}
          </div>
          {article?.img && (
            <div className={styles.imageContainer}>
              <Image src={article.img} alt="" fill className={styles.image} />
            </div>
          )}
            {/* <div className={styles.imageContainer}>
              <Image src="/noproduct.jpg" alt="" fill className={styles.image} />
            </div> */}
        </div>
        <div className={styles.content}>
          <div className={styles.post}>
            <div className={styles.description} dangerouslySetInnerHTML={{ __html: article?.desc }}/>
            {/* <div className={styles.description}>
              <Comments postSlug={slug}/>
            </div> */}
          </div>
          {/* <Menu /> */}
        </div>
      </div>
    </>
  );
};

export default SinglePage;
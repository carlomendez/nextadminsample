import styles from "./news.module.css"
import HomeNavbar from "../ui/home/navbar/homenavbar";
import { fetchArticles } from "@/app/lib/data";
import Link from "next/link";
import Image from "next/image";
import Search from "@/app/ui/dashboard/search/search";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
// import NewsFeed from "../ui/home/news/NewsFeed";

const News = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, articles } = await fetchArticles(q, page);
    return (
      <>
         <HomeNavbar/>
        <section className="w-full">
            <h1 className="text-2xl text-left mt-6" style={{margin: "50px 0px"}}>
                News Releases
                <br className="max-md:hidden"/>
            </h1>     
         <Search/>

            {/* <NewsFeed /> */}
        </section>
        <section>
        <div  style={{margin: "50px 0px"}}>
           <div className={styles.posts}>
             {articles.map((article) => (
              <div className={styles.container} key={article.id}>
              {article.img && (
                <div className={styles.imageContainer}>
                  <Image src={article.img} alt="" fill className={styles.image} />
                </div>
              )}
              <div className={styles.textContainer}>
                <div className={styles.detail}>
                  <span className={styles.date}>
                    {article.createdAt.toString().substring(0, 10)}
                  </span>
                </div>
                <Link href={`/news/${article.id}`}>
                  <h1>{article.title}</h1>
                </Link>
                <div className={styles.desc} dangerouslySetInnerHTML={{ __html: article?.desc.substring(0,60) }}/>
                <Link href={`/news/${article.id}`} className={styles.link}>
                  Read More
                </Link>
              </div>
            </div>
            ))}
          </div>
        </div>
        </section>
        <section>
        <Pagination count={count} />
        </section>
      </>
      // <div className={styles.container}>
      //   <HomeNavbar/>
      //   <Search/>
      //   <div className={styles.container}>
      //     <h1 className={styles.title}>Recent Posts</h1>
      //     <div className={styles.posts}>
      //       {articles.map((article) => (
      //         <div className={styles.container} key={article.id}>
      //         {article.img && (
      //           <div className={styles.imageContainer}>
      //             <Image src={article.img} alt="" fill className={styles.image} />
      //           </div>
      //         )}
      //         <div className={styles.textContainer}>
      //           <div className={styles.detail}>
      //             <span className={styles.date}>
      //               {article.createdAt.toString().substring(0, 10)}
      //             </span>
      //           </div>
      //           <Link href={`/news/${article.id}`}>
      //             <h1>{article.title}</h1>
      //           </Link>
      //           <div className={styles.desc} dangerouslySetInnerHTML={{ __html: article?.desc.substring(0,60) }}/>
      //           <Link href={`/news/${article.id}`} className={styles.link}>
      //             Read More
      //           </Link>
      //         </div>
      //       </div>
      //       ))}
      //     </div>
      //     <Pagination count={count} />
      //   </div>
      // </div>
    );
  }

  export default News;
import { updateArticle } from "@/app/lib/actions";
import { fetchArticle } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";

const SingleArticlePage = async ({ params }) => {
  const { id } = params;
  const article = await fetchArticle(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={article.img || "/astronaut.png"} alt="" fill />
        </div>
        {article.title}
      </div>
      <div className={styles.formContainer}>
        <form action={updateArticle} className={styles.form}>
          <input type="hidden" name="id" value={article.id} />
          <label>Title</label>
          <input type="text" name="title" placeholder={article.title} />
          <label>Author</label>
          <input type="text" name="author" placeholder={article.author} />
          <label>Description</label>
          <textarea
            name="desc"
            id="desc"
            rows="50"
            placeholder={article.desc}
          ></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleArticlePage;

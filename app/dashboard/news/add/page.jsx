"use client";

// import dynamic from 'next/dynamic'
// const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import Image from "next/image";
// import styles from "./writePage.module.css";
import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import { useEffect, useState } from "react";
import "react-quill/dist/quill.snow.css";
import { addArticle } from "@/app/lib/actions";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "@/app/utils/firebase";
import ReactQuill from "react-quill";

const WritePage = () => {
  
  const [file, setFile] = useState(null);
  const [media, setMedia] = useState("");
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    const storage = getStorage(app);
    const upload = () => {
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMedia(downloadURL);
          });
        }
      );
    };

    file && upload();
  }, [file]);

  return (
    // <div className={styles.container}>
    //               <button className={styles.addButton}>
    //           <label htmlFor="image">
    //             <Image src="/image.png" alt="" width={16} height={16} />
    //           </label>
    //         </button>
    //   <form action={addArticle}>
    //   <input
    //     type="text"
    //     placeholder="Title"
    //     name="title"
    //     id="title"
    //     className={styles.input}
    //     onChange={(e) => setTitle(e.target.value)}
    //   />
    //     <input
    //     type="text"
    //     name="author"
    //     id="author"
    //     placeholder="Author's name"
    //     className={styles.authorInput}
    //     onChange={(e) => setAuthor(e.target.value)}
    //   />
    //   <div className={styles.editor}>
    //     <div className={styles.add}>
    //         <input
    //           type="file"
    //           id="image"
    //           onChange={(e) => setFile(e.target.files[0])}
    //           style={{ display: "none" }}
    //         />
    //         <input
    //           type="text"
    //           name="img"
    //           id="img"
    //           value={media.toString()}
    //           style={{ display: "none" }}
    //         />
    //         {media.length() > 0 && <p>Image has been selected!</p>}
    //       </div>
    //     <ReactQuill
    //       className={styles.textArea}
    //       theme="bubble"
    //       value={value}
    //       onChange={setValue}
    //       placeholder="Tell your story..."
    //     />
    //     <input
    //           type="text"
    //           name="desc"
    //           id="desc"
    //           value={value}
    //           style={{ display: "none" }}
    //         />
    //   </div>
    //   <button className={styles.publish} type="submit">
    //     Publish
    //   </button>
    //   </form>
    // </div>
    <div className={styles.container}>
      <div className={styles.infoContainer}>
          <button><label htmlFor="image">Select Image</label></button>
          <input
              type="text"
              name="img"
              id="img"
              value={media.toString()}
              readonly
          />
      </div>
      <div className={styles.formContainer}>
        <form action={addArticle} className={styles.form}>
          <label>Title</label>
          <input type="text" name="title" placeholder="Title" id="title" onChange={(e) => setTitle(e.target.value)}/>
          <label>Author</label>
          <input type="text" name="author" id="author" placeholder="Author's name" onChange={(e) => setAuthor(e.target.value)}/>
          <input
              type="file"
              id="image"
              onChange={(e) => setFile(e.target.files[0])}
              style={{ display: "none" }}
            />
          <input
              type="text"
              name="img"
              id="img"
              value={media.toString()}
              style={{ display: "none" }}
          />
          <label>Description</label>
          <ReactQuill
            className={styles.textArea}
            theme="snow"
            value={value}
            onChange={setValue}
            placeholder="Tell your story..."
          />
          <textarea
            name="desc"
            id="desc"
            value={value}
            style={{ display: "none" }}
          ></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default WritePage;
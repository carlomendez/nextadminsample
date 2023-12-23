import Image from "next/image";
import Link from "next/link";
import styles from "@/app/ui/dashboard/products/products.module.css";
import Search from "@/app/ui/dashboard/search/search";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import { fetchRecords } from "@/app/lib/data";
import { deleteRecord } from "@/app/lib/actions";

const RecordsPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, records } = await fetchRecords(q, page);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a record..." />
        <Link href="/dashboard/records/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Input Id</td>
            <td>Template</td>
            <td>Location</td>
            <td>Sampled Date</td>
            <td>Recd Date</td>
            <td>Comple Date</td>
            <td>Date Auth</td>
          </tr>
        </thead>
        <tbody>
          {records.map((record) => (
            <tr key={record.id}>
              <td>
                {record.inputId}
              </td>
              <td>
                {record.template}
              </td>
              <td>{record.location}</td>
              <td>${record.sampledDate?.toString().slice(4, 16)}</td>
              <td>{record.recdDate?.toString().slice(4, 16)}</td>
              <td>{record.completedDate?.toString().slice(4, 16)}</td>
              <td>{record.authorizedDate?.toString().slice(4, 16)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
};

export default RecordsPage;

import { cards } from "../lib/data";
import Card from "../ui/dashboard/card/card";
import Chart from "../ui/dashboard/chart/chart";
import styles from "../ui/dashboard/dashboard.module.css";
import Button from '@mui/material/Button';
import Rightbar from "../ui/dashboard/rightbar/rightbar";
import Transactions from "../ui/dashboard/transactions/transactions";
import GraphCard1 from '@/app/ui/dashboard/lastthirty/GraphCards1';
import GraphCard2 from '@/app/ui/dashboard/lastthirty/GraphCards2';
import GraphCard3 from '@/app/ui/dashboard/lastthirty/GraphCards3';
import GraphCard4 from '@/app/ui/dashboard/lastthirty/GraphCards4';
import GraphCard5 from '@/app/ui/dashboard/samplestatus/GraphCards5';
import GraphCard6 from '@/app/ui/dashboard/samplestatus/GraphCards6';
import GraphCard7 from '@/app/ui/dashboard/samplestatus/GraphCards7';
import Table1 from '@/app/ui/dashboard/samplestatus/Table1';
import SubNavbar from "../ui/dashboard/subnavbar/subnavbar";

const PostCardList1 = () => {
  return (
    <div className={styles.cards}>
        <GraphCard1/>
        <GraphCard2/>
        <GraphCard3/>
    </div>
  )
}

const PostCardList2 = () => {
    return (
          <GraphCard4 />
    )
  }

const PostCardList3 = () => {
  return (
    <div className={styles.cards}>
      <GraphCard5/>
      <GraphCard6/>
      <GraphCard7/>
    </div>
  )
}

const PostCardList4 = () => {
    return (
          <Table1 />
    )
  }



const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
      <SubNavbar/>
        <div className={styles.cards}>
          {cards.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
        <PostCardList1/>
        <PostCardList2/>
        <PostCardList3/>
        <div ><span>Data Table</span> <Button>Export</Button></div>
        <PostCardList4/>
      </div>
      {/* <div className={styles.side}>
        <Rightbar />
      </div> */}
    </div>
  );
};

export default Dashboard;

"use client";
import { usePathname } from "next/navigation";
import styles from "./subnavbar.module.css";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";

const filters = [
  {
    value: 'AAA',
    label: 'AAA',
  },
  {
    value: 'BBB',
    label: 'BBB',
  },
  {
    value: 'CCC',
    label: 'CCC',
  },
];

const SubNavbar = () => {
  const pathname = usePathname();

  return (
    <div className={styles.container}>
      <div className={styles.title}>Sample Status</div>
      <div className={styles.menu}>
      <div>
            <div className={styles.menu}>
            <div>Filter 1</div>
            <div>
                <TextField className={styles.input}
                    fullWidth
                    id="outlined-select-currency"
                    select
                    defaultValue="AAA"
                    size='small'
                    >
                    {filters.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </div>
            <div><Button>Settings</Button></div>
            </div>
            <div className={styles.menu}>
            <div>Filter 2</div>
            <div>
                <TextField className={styles.input}
                    fullWidth
                    id="outlined-select-currency"
                    select
                    defaultValue="AAA"
                    size='small'
                    >
                    {filters.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </div>
            <div><Button>Help</Button></div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default SubNavbar;

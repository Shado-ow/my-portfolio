"use client";
import Image from 'next/image';
import styles from './Taskbar.module.css';
import { useEffect, useState } from 'react';

export default function Taskbar() {
  const [time, setTime] = useState('');

  useEffect(() => {
    function updateTime() {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const formatted = `${hours % 12 || 12}:${minutes.toString().padStart(2, '0')} ${hours >= 12 ? 'PM' : 'AM'}`;
      setTime(formatted);
    }
    updateTime();
    const interval = setInterval(updateTime, 1000 * 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.taskbar}>
      <div className={styles.startButton}>
        <Image src="/homepage/startButton.png" alt="Start" width={48} height={48} />
      </div>
      <div className={styles.searchBar}></div>
      <div className={styles.spacer}></div>
      <div className={styles.clock}>{time}</div>
    </div>
  );
}

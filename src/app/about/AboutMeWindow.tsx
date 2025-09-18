import Image from 'next/image';
import styles from './AboutMeWindow.module.css';

export default function AboutMeWindow() {
  return (
    <div style={{ position: 'relative', width: 200, height: 200  }}>
      <div className={styles.window}>
        <Image src="/aboutpage/about_me.png" alt="About Me" width={450} height={200} style={{  position: 'absolute',marginTop: '403px', marginLeft: '450px', zIndex: 2}} />
      </div>
      <div className={styles.closeButton}>
        <Image src="/aboutpage/closeButton.png" alt="Close" width={25} height={20} style={{  position: 'absolute',marginTop: '233px', marginLeft: '919px', zIndex: 1}} />
      </div>
      <div className={styles.linkbutton}>
        <Image src="/aboutpage/linkedin.png" alt="LinkedIn" width={101} height={200} style={{  position: 'absolute',marginTop: '618px', marginLeft: '609px', zIndex: 0}} />
      </div>
      <div className={styles.linkbutton}>
        <Image src="/aboutpage/github.png" alt="GitHub" width={169} height={200} style={{  position: 'absolute',marginTop: '618px', marginLeft: '508px', zIndex: 0}} />
      </div>
      <div className={styles.linkbutton}>
        <Image src="/aboutpage/email.png" alt="Email" width={180} height={200} style={{  position: 'absolute',marginTop: '618px', marginLeft: '710px', zIndex: 0}} />
      </div>
    </div>
  );
}
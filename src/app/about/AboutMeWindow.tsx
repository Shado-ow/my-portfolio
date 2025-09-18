import Image from "next/image";
import styles from "./AboutMeWindow.module.css";

export default function AboutMeWindow() {
  return (
    <div className={styles.window}>
      {/* Main About Me image */}
      <Image
        src="/aboutpage/about_me.png"
        alt="About Me"
        width={450}
        height={200}
        style={{ margin: "50px auto", display: "block" }}
      />

      {/* Close Button */}
      <div className={styles.closeButton}>
        <a href="/">
          <Image src="/aboutpage/closeButton.png" alt="Close" width={25} height={20} style={{ cursor: 'pointer' }} />
        </a>
      </div>

    {/* About Me Text */}
      <div className={styles.aboutText}>
        <p style={{ cursor: 'url(/cursors/text.png), auto' }}>
          I'm a 4th-year B.Tech student in Computer Science at PES University. I
          love exploring new technologies and problem-solving and find it both
          challenging and fun. Alongside coding, I'm passionate about travelling
          to new places and enjoy making small crafty things. When I'm not
          coding, I'm probably rewatching <em>The Office</em> for the third
          time.
        </p>
      </div>


      {/* Link Buttons */}
      <div className={styles.gitlinks}>
        <a href="https://github.com/Shado-ow" target="_blank" rel="noopener noreferrer">
          <Image src="/aboutpage/github.png" alt="GitHub" width={168} height={40} style={{ cursor: 'url(/cursors/hand.png), auto' }} />
        </a>
      </div>

      <div className={styles.linklinks}>
        <a href="https://www.linkedin.com/in/sanya-vashist-a7a592276/" target="_blank" rel="noopener noreferrer">
          <Image src="/aboutpage/linkedin.png" alt="LinkedIn" width={102} height={40} style={{ cursor: 'url(/cursors/hand.png), auto' }} />
        </a>
      </div>

      <div className={styles.maillinks}>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sanyavashist794@gmail.com" target="_blank" rel="noopener noreferrer">
          <Image src="/aboutpage/email.png" alt="Email" width={180} height={40} style={{ cursor: 'url(/cursors/hand.png), auto' }} />
        </a>
      </div>
    </div>
  );
}

import Image from 'next/image';
import styles from './DesktopIcons.module.css';

const leftIcons = [
  {
    src: '/homepage/myComputer.png',
    label: 'My Computer',
    style: { top: '32px', left: '32px'},
  width: 100,
  height: 100,
  },
  {
    src: '/homepage/internetExplorer.png',
    label: 'Internet Explorer',
    style: { top: '164px', left: '19px'},
  width: 137,
  height: 128,
  },
  {
    src: '/homepage/recycleBin.png',
    label: 'Recycle Bin',
    style: { top: '282px', left: '22px'},
  width: 120,
  height: 120,
  },
];

const rightIcons = [
  {
    src: '/homepage/aboutMe.png',
    label: 'About Me',
    style: { top: '36px', right: '36px'},
  width: 92,
  height: 96,
  },
  {
    src: '/homepage/myProjects.png',
    label: 'My Projects',
    style: { top: '160px', right: '18px'},
  width: 128,
  height: 120,
  },
  {
    src: '/homepage/myExperience.png',
    label: 'My Experience',
    style: { top: '288px', right: '20px'},
  width: 130,
  height: 120,
  },
  {
    src: '/homepage/notepad.png',
    label: 'Notepad',
    style: { top: '518px', right: '15px'},
  width: 120,
  height: 110,
  },
  {
    src: '/homepage/resume.png',
    label: 'Resume.pdf',
    style: { top: '403px', right: '28px'},
  width: 105,
  height: 100,
  },
];

export default function DesktopIcons() {
  return (
    <>
      {leftIcons.map((icon, i) => (
        <div key={icon.label} className={styles.icon} style={icon.style}>
          <Image src={icon.src} alt={icon.label} width={icon.width} height={icon.height} />
        </div>
      ))}
      {rightIcons.map((icon, i) => (
        <div key={icon.label} className={styles.icon} style={icon.style}>
          <Image src={icon.src} alt={icon.label} width={icon.width} height={icon.height} />
        </div>
      ))}
    </>
  );
}

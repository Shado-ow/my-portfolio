import Image from 'next/image';
import styles from './DesktopIcons.module.css';

const leftIcons = [
  {
    src: '/homepage/myComputer.png',
    label: 'My Computer',
    style: { top: '32px', left: '32px' },
  },
  {
    src: '/homepage/internetExplorer.png',
    label: 'Internet Explorer',
    style: { top: '120px', left: '32px' },
  },
  {
    src: '/homepage/recycleBin.png',
    label: 'Recycle Bin',
    style: { top: '208px', left: '32px' },
  },
];

const rightIcons = [
  {
    src: '/homepage/aboutMe.png',
    label: 'About Me',
    style: { top: '32px', right: '32px' },
  },
  {
    src: '/homepage/myProjects.png',
    label: 'My Projects',
    style: { top: '120px', right: '32px' },
  },
  {
    src: '/homepage/myExperience.png',
    label: 'My Experience',
    style: { top: '208px', right: '32px' },
  },
  {
    src: '/homepage/notepad.png',
    label: 'Notepad',
    style: { top: '296px', right: '32px' },
  },
  {
    src: '/homepage/resume.png',
    label: 'Resume.pdf',
    style: { top: '384px', right: '32px' },
  },
];

export default function DesktopIcons() {
  return (
    <>
      {leftIcons.map((icon, i) => (
        <div key={icon.label} className={styles.icon} style={icon.style}>
          <Image src={icon.src} alt={icon.label} width={48} height={48} />
        </div>
      ))}
      {rightIcons.map((icon, i) => (
        <div key={icon.label} className={styles.icon} style={icon.style}>
          <Image src={icon.src} alt={icon.label} width={48} height={48} />
        </div>
      ))}
    </>
  );
}

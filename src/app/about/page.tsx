import DesktopIcons from '../DesktopIcons';
import Taskbar from '../Taskbar';
import AboutMeWindow from './AboutMeWindow';

export default function About() {
  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <DesktopIcons />
      <Taskbar />
      <AboutMeWindow/>
    </div>
  );
}

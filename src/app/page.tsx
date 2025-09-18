import DesktopIcons from './DesktopIcons';
import Taskbar from './Taskbar';

export default function Home() {
  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <DesktopIcons />
      <Taskbar />
    </div>
  );
}
// ...existing code removed, see above for new implementation...

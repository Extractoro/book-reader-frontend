import Navigation from './Navigation';
import './AppBar.scss';

export default function AppBar() {
  return (
    <header className="header">
      <h1 className="label">BR</h1>
      <Navigation />
    </header>
  );
}

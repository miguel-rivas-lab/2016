import Row from './components/row';
import Column from './components/column';
import PanelNavigation from './components/panel-navigation';
import { useSelector } from 'react-redux';
import classNames from "classnames";
// ---------- Views
import HomeWorkarea from './views/home-workarea.jsx';
import HomePanel from './views/home-panel.jsx';

function App() {
  const { panelVisibility } = useSelector((state: any) => state.panelVisibility);
  const { theme } = useSelector((state: any) => state.theme);
  const appClasses = classNames("react-theme", "section-home", {
    "earthquake": theme,
  });

  return (
    <main className={appClasses}>
      <aside className="texture" />
      <Row addClass="nano-app">
        <PanelNavigation />
        <Column size={panelVisibility ? "300" : "0"} addClass={classNames("panel", "router-area", { 'hide-panel': !panelVisibility })}>
          <HomePanel />
        </Column>
        <Column size={panelVisibility ? '100%-350' : '100%-50'} addClass="workarea">            
          <HomeWorkarea />
        </Column>
      </Row>
    </main>
  );
}

export default App;
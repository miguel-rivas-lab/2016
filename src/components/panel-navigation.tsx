import { ReactElement } from "react";
import Row from './row';
import Column from './column';
import Btn from './btn';
import { useDispatch, useSelector } from 'react-redux';
import classNames from "classnames";
import { toggleTheme } from '../redux/theme';
import ScrollArea from '../components/scroll-area';

function playSound() {
  let context = new AudioContext();
  let newSound = context.createOscillator();
  let newGain = context.createGain();
  newSound.connect(newGain);
  newSound.frequency.value = 300;
  newGain.connect(context.destination);
  newSound.start(0);
  newGain.gain.exponentialRampToValueAtTime(
    0.00000001,
    context.currentTime + 0.5
  );
};

function Navigation(): ReactElement {
  const navigationRoutes = [
    { icon: "person", href: "#aboutme" },
    { icon: "duck", href: "#projects" },
    { icon: "person", href: "#references" },
  ];
  const result = [];
  navigationRoutes.forEach((item, index) => {
    result.push(
      <Btn
        tag="a"
        href={item.href}
        key={`nav-${index}`}
        icon={item.icon}
      />
    );
  });
  return <>{result}</>;
}

function PanelNavigation(): ReactElement {
  const dispatch = useDispatch();
  const { theme } = useSelector((state: any) => state.theme);
  const themeBtnClasses = classNames(
    { "active": !theme }
  );

  return (
    <Column size="50" addClass="main-panel">
      <ScrollArea horizontal={false}>
        <div className="container">
          <Row vertical={true}>
            <Column size="100%">
              <Navigation />
              <hr />
              <Btn
                onClick={() => {
                  dispatch(toggleTheme());
                  playSound();
                }}
                icon="monster"
                color="mariner"
                addClass={themeBtnClasses}
              />
            </Column>
          </Row>
        </div>
      </ScrollArea>
    </Column>
  );
}

export default PanelNavigation;
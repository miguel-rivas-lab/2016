// import Btn from "../components/btn";
import Column from "../components/column";
// import Row from "../components/row";
import ScrollArea from '../components/scroll-area';

function HomePanel() {
  return (
    <ScrollArea color="royal-purple">
      <fieldset className="nano-row row-block horizontal">
        <Column size="100%">
          <legend>Animation Controllers</legend>
        </Column>
      </fieldset>
    </ScrollArea>
  );
}

export default HomePanel;
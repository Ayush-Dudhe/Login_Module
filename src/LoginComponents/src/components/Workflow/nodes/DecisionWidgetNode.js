import { Handle } from "react-flow-renderer";

import DecisionWidget from "../../Widgets/DecisionWidget";

const DecisionWidgetNode = ({ data }) => {
  return (
    <>
      <Handle
        type="target"
        position="top"
        className="decision-widget-top-handel"
      />
      <div style={{ position: "relative", zIndex: "-1" }}>
        <DecisionWidget text={data.text} />
      </div>
      <Handle
        id="yes"
        type="source"
        position="left"
        className="decision-widget-left-handel"
      />
      <Handle
        id="no"
        type="source"
        position="right"
        className="decision-widget-right-handel"
      />
    </>
  );
};

export default DecisionWidgetNode;

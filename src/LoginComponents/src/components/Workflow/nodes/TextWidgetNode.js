import { Handle } from "react-flow-renderer";

import TextWidget from "../../Widgets/TextWidget";

const TextWidgetNode = ({ data }) => {
  return (
    <>
      <Handle
        type="target"
        position="top"
        className="text-widget-top-handel"
      />
      <TextWidget text={data.text} />
      <Handle
        type="source"
        position="bottom"
        className="text-widget-bottom-handel"
      />
    </>
  );
};

export default TextWidgetNode;

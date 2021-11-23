import React, { useState } from "react";
import ReactFlow, { Controls } from "react-flow-renderer";

import TextWidgetNode from "./nodes/TextWidgetNode";
import DecisionWidgetNode from "./nodes/DecisionWidgetNode";

import "./WorkflowProvider.css";

const nodeTypes = {
  TextWidgetNode,
  DecisionWidgetNode,
};

const onLoad = (reactFlowInstance) => {
  console.log("flow loaded:", reactFlowInstance);
  reactFlowInstance.fitView();
};

const OverviewFlow = ({ initialWorkflow }) => {
  const [elements, setElements] = useState(initialWorkflow);

  return (
    <ReactFlow nodeTypes={nodeTypes} elements={elements} onLoad={onLoad} snapToGrid={true} snapGrid={[15, 15]}>
      <Controls />
    </ReactFlow>
  );
};

export default OverviewFlow;

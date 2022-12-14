import React, { useState, useContext } from 'react';
import FlowBuilder, {
  NodeContext,
  IRegisterNode,
  INode,
} from 'react-flow-builder';

import './index.css';

const StartNodeDisplay: React.FC = () => {
  const node = useContext(NodeContext);
  return <div className="start-node">{node.name}</div>;
};

const EndNodeDisplay: React.FC = () => {
  const node = useContext(NodeContext);
  return <div className="end-node">{node.name}</div>;
};

const NodeDisplay: React.FC = () => {
  const node = useContext(NodeContext);
  return <div className="other-node">{node.name}</div>;
};

const ConditionNodeDisplay: React.FC = () => {
  const node = useContext(NodeContext);
  return <div className="condition-node">{node.name}</div>;
};

const registerNodes: IRegisterNode[] = [
  {
    type: 'start',
    name: '开始节点',
    displayComponent: StartNodeDisplay,
    isStart: true,
    addableNodeTypes: ['node'],
  },
  {
    type: 'end',
    name: '结束节点',
    displayComponent: EndNodeDisplay,
    isEnd: true,
  },
  {
    type: 'node',
    name: 'Normal node',
    displayComponent: NodeDisplay,
  },
  {
    type: 'condition',
    name: 'Condition node',
    displayComponent: ConditionNodeDisplay,
  },
  {
    type: 'branch',
    name: 'Branch node',
    conditionNodeType: 'condition',
    addableNodeTypes: [],
  },
];

const AddableNodeTypes = () => {
  const [nodes, setNodes] = useState<INode[]>([]);

  const handleChange = (nodes: INode[]) => {
    console.log('nodes change', nodes);
    setNodes(nodes);
  };

  return (
    <FlowBuilder
      registerNodes={registerNodes}
      nodes={nodes}
      onChange={handleChange}
    />
  );
};

export default AddableNodeTypes;

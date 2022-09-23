import React, { useState, useContext } from 'react';
import FlowBuilder, {
  NodeContext,
  IRegisterNode,
  INode,
  IAddableComponent,
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

const CustomAddableComponent: React.FC<IAddableComponent> = ({ add }) => {
  return (
    <div>
      <div
        className="flow-builder-custom-addable-node-item"
        onClick={() => add('node')}
      >
        Normal node
      </div>
    </div>
  );
};

const registerNodes: IRegisterNode[] = [
  {
    type: 'start',
    name: '开始节点',
    displayComponent: StartNodeDisplay,
    isStart: true,
    addableComponent: CustomAddableComponent,
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
  },
];

const AddableComponent = () => {
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

export default AddableComponent;

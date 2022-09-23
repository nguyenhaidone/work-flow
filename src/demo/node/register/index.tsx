import React, { useState } from 'react';
import FlowBuilder, { INode, IRegisterNode } from 'react-flow-builder';

const registerNodes: IRegisterNode[] = [
  {
    type: 'start',
    name: '开始节点',
    isStart: true,
  },
  {
    type: 'end',
    name: '结束节点',
    isEnd: true,
  },
  {
    type: 'node1',
    name: 'Normal node 1',
  },
  {
    type: 'node2',
    name: 'Normal node 2',
  },
  {
    type: 'condition',
    name: 'Condition node',
  },
  {
    type: 'branch',
    name: 'Branch node',
    conditionNodeType: 'condition',
  },
];

const Index = () => {
  const [nodes, setNodes] = useState<INode[]>([]);

  const handleChange = (nodes: INode[]) => {
    console.log('nodes change', nodes);
    setNodes(nodes);
  };

  return (
    <FlowBuilder
      nodes={nodes}
      onChange={handleChange}
      registerNodes={registerNodes}
    />
  );
};

export default Index;

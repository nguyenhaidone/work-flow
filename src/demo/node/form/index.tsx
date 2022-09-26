import React, { useState, useContext } from "react";
import { BuilderContext, useAction } from "react-flow-builder";
import FlowBuilder, {
  NodeContext,
  INode,
  IRegisterNode,
} from "react-flow-builder";

import "./index.css";

const StartNodeDisplay: React.FC = () => {
  // const node = useContext(NodeContext);
  // const {
  //   nodes,
  //   readonly,
  //   registerNodes,
  //   beforeNodeClick,
  //   beforeAddConditionNode,
  //   dragType,
  //   // DropComponent = DropButton,
  //   showPracticalBranchNode,
  //   showPracticalBranchRemove,
  //   sortable,
  // } = useContext(BuilderContext);
  // console.log('Node context:');
  // console.log(node);
  // console.log('--------------------------------------------------------');
  return (
    <div className="cus-start-node">
      <div className="cus-header-start-node">
        <div className="cus-icon-header-start-node">F</div>
        <div className="cus-title-header-start-node">
          Step 1: Open new world
        </div>
      </div>
      {/* <AddButton
        registerNodes={[
          { type: 'condition', name: 'Condition node' },
          { type: 'node', name: 'Normal node' },
        ]}
        nodes={[
          {
            id: 'node-0d9d4733-e48c-41fd-a41f-d93cc4718d97',
            type: 'start',
            name: 'start',
            path: ['0'],
          },
          {
            id: 'node-0d9d4733-e48c-41fd-a41f-d93cc4718d97',
            type: 'start',
            name: 'start',
            path: ['0'],
          },
        ]}
        onChange={function (nodes: INode[], changeEvent?: string): void {
          throw new Error('Function not implemented.');
        }}
      /> */}
    </div>
  );
};

const EndNodeDisplay: React.FC = () => {
  const node = useContext(NodeContext);
  return <div className="end-node">{node.name}</div>;
};

const NodeDisplay: React.FC = () => {
  const node = useContext(NodeContext);
  const {
    nodes,
    // readonly,
    // registerNodes,
    // beforeNodeClick,
    // beforeAddConditionNode,
    // dragType,
    // DropComponent = DropButton,
    // showPracticalBranchNode,
    // showPracticalBranchRemove,
    // sortable,
  } = useContext(BuilderContext);
  const { removeNode: remove, addNode: add } = useAction();
  const handleAddCondition = async () => {
    const indexOfCurrentNode = nodes.indexOf(node);
    console.log("add conditions:");
    const branchNode = nodes.find((node) => node.type === "branch");
    console.log(branchNode);
    // const getRegisterNode = (registerNodes: IRegisterNode[], type?: string) =>
    //   registerNodes.find((node) => type && node.type === type);
    // const registerNode = getRegisterNode(registerNodes, node.type);
    console.log("condition");
    console.log("----------");
    try {
      // await beforeAddConditionNode?.(node);
      // const bacn = await beforeAddConditionNode?.(node);
      // console.log(bacn);
      // registerNode?.conditionNodeType &&
      add(nodes[indexOfCurrentNode + 1], "condition");
    } catch (error) {}
  };
  // console.log(node);
  return (
    <div className="cus-start-node">
      <div className="cus-header-start-node">
        <div className="cus-icon-header-start-node">A</div>
        <div className="cus-title-header-start-node">{node.name}</div>
        <button onClick={() => remove()}>delete</button>
      </div>
      <div className="other-node">
        <div>
          <button onClick={() => add("node")}>Add normal branch</button>
        </div>
        <div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleAddCondition();
            }}
          >
            Add new condition branch
          </button>
        </div>
      </div>
    </div>
  );
};

const ConditionNodeDisplay: React.FC = () => {
  const node = useContext(NodeContext);
  const {
    nodes,
    // readonly,
    // registerNodes,
    // beforeNodeClick,
    // beforeAddConditionNode,
    // dragType,
    // DropComponent = DropButton,
    // showPracticalBranchNode,
    // showPracticalBranchRemove,
    // sortable,
  } = useContext(BuilderContext);
  const { removeNode: remove, addNode: add } = useAction();
  const handleAddCondition = async () => {
    const indexOfCurrentNode = nodes.indexOf(node);
    console.log("add conditions:");
    const branchNode = nodes.find((node) => node.type === "branch");
    console.log(branchNode);
    // const getRegisterNode = (registerNodes: IRegisterNode[], type?: string) =>
    //   registerNodes.find((node) => type && node.type === type);
    // const registerNode = getRegisterNode(registerNodes, node.type);
    console.log("condition");
    console.log("----------");
    try {
      // await beforeAddConditionNode?.(node);
      // const bacn = await beforeAddConditionNode?.(node);
      // console.log(bacn);
      // registerNode?.conditionNodeType &&
      add(nodes[indexOfCurrentNode + 1], "condition");
    } catch (error) {}
  };
  // console.log(node);
  return (
    <div className="cus-start-node">
      <div className="cus-header-start-node">
        <div className="cus-icon-header-start-node">A</div>
        <div className="cus-title-header-start-node">{node.name}</div>
        <button onClick={() => remove()}>delete</button>
      </div>
      <div className="other-node">
        <div>
          <button onClick={() => add("node")}>Add normal branch</button>
        </div>
        <div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleAddCondition();
            }}
          >
            Add new condition branch
          </button>
        </div>
      </div>
    </div>
  );
};

const registerNodes: IRegisterNode[] = [
  {
    type: "start",
    name: "开始节点",
    displayComponent: StartNodeDisplay,
    isStart: true,
  },
  {
    type: "end",
    name: "结束节点",
    displayComponent: EndNodeDisplay,
    isEnd: true,
  },
  {
    type: "node",
    name: "Normal node",
    displayComponent: NodeDisplay,
    // configComponent: ConfigForm,
    customRemove: true,
  },
  {
    type: "condition",
    name: "Condition node",
    displayComponent: ConditionNodeDisplay,
    // configComponent: ConfigForm,
    customRemove: true,
  },
  {
    type: "branch",
    name: "Branch node",
    conditionNodeType: "condition",
  },
];

// const defaultNodes = [
//   {
//     id: "node-0d9d4733-e48c-41fd-a41f-d93cc4718d97",
//     type: "start",
//     name: "start",
//     path: ["0"],
//   },
//   {
//     id: "node-b2ffe834-c7c2-4f29-a370-305adc03c010",
//     type: "branch",
//     name: "Branch node",
//     children: [
//       {
//         id: "node-cf9c8f7e-26dd-446c-b3fa-b2406fc7821a",
//         type: "condition",
//         name: "Condition node",
//         children: [
//           {
//             id: "node-f227cd08-a503-48b7-babf-b4047fc9dfa5",
//             type: "node",
//             name: "Normal node",
//             path: ["1", "children", "0", "children", "0"],
//           },
//         ],
//         path: ["1", "children", "0"],
//       },
//       {
//         id: "node-9d393627-24c0-469f-818a-319d9a678707",
//         type: "condition",
//         name: "Condition node",
//         children: [],
//         path: ["1", "children", "1"],
//       },
//     ],
//     path: ["1"],
//   },
//   {
//     id: "node-972401ca-c4db-4268-8780-5607876d8372",
//     type: "node",
//     name: "Normal node",
//     path: ["2"],
//   },
//   {
//     id: "node-b106675a-5148-4a2e-aa86-8e06abd692d1",
//     type: "end",
//     name: "end",
//     path: ["3"],
//   },
// ];

const inputNodes = [
  {
    id: "node-0d9d4733-e48c-41fd-a41f-d93cc4718d97",
    type: "start",
    name: "start 1",
    path: ["0"],
  },
  {
    id: "node-b2ffe834-c7c2-4f29-a370-305adc03c010",
    type: "branch",
    name: "Branch node 2",
    children: [
      {
        id: "node-cf9c8f7e-26dd-446c-b3fa-b2406fc7821a",
        type: "condition",
        name: "Condition node 3",
        children: [
          {
            id: "node-f227cd08-a503-48b7-babf-b4047fc9dfa5",
            type: "node",
            name: "Normal node 4",
            path: ["1", "children", "0", "children", "0"],
          },
        ],
        path: ["1", "children", "0"],
      },
      {
        id: "node-9d393627-24c0-469f-818a-319d9a678707",
        type: "condition",
        name: "Condition node 5",
        children: [],
        path: ["1", "children", "1"],
      },
    ],
    path: ["1"],
  },
  {
    id: "node-972401ca-c4db-4268-8780-5607876d8372",
    type: "node",
    name: "Normal node 6",
    path: ["2"],
  },
  {
    id: "branch-bdd9c00b-0229-42c3-9722-e5db1d756625",
    type: "branch",
    name: "Branch node 7",
    children: [
      {
        id: "condition-df0f5b86-9e59-4c22-98f5-ca12eb2030ca",
        type: "condition",
        name: "Condition node 8",
        children: [],
        path: ["3", "children", "0"],
      },
      {
        id: "condition-34c8352f-aa05-4744-9483-d4c3864ebd7b",
        type: "condition",
        name: "Condition node 9",
        children: [],
        path: ["3", "children", "1"],
      },
      {
        id: "condition-b2aead36-579a-4d86-9df8-16c99d0a4974",
        type: "condition",
        name: "Condition node 10",
        children: [
          {
            id: "branch-690a8277-2149-4b04-a378-9fdd08ae19be",
            type: "branch",
            name: "Branch node 11",
            children: [
              {
                id: "condition-3e431d35-d23b-4b7c-aadc-5a1756a3bc6e",
                type: "condition",
                name: "Condition node 12",
                children: [],
                path: ["3", "children", "2", "children", "0", "children", "0"],
              },
              {
                id: "condition-5aa61edb-e3e8-4272-a133-85e20bb354cb",
                type: "condition",
                name: "Condition node 13",
                children: [
                  {
                    id: "branch-957220ac-9893-4da1-9042-e5e8e04a73f8",
                    type: "branch",
                    name: "Branch node 14",
                    children: [
                      {
                        id: "condition-05cf3460-77b4-44a5-aa7a-9faed024eaa3",
                        type: "condition",
                        name: "Condition node 15",
                        children: [],
                        path: [
                          "3",
                          "children",
                          "2",
                          "children",
                          "0",
                          "children",
                          "1",
                          "children",
                          "0",
                          "children",
                          "0",
                        ],
                      },
                      {
                        id: "condition-2a043099-4d50-4505-bf3b-d602524a7335",
                        type: "condition",
                        name: "Condition node 16",
                        children: [],
                        path: [
                          "3",
                          "children",
                          "2",
                          "children",
                          "0",
                          "children",
                          "1",
                          "children",
                          "0",
                          "children",
                          "1",
                        ],
                      },
                      {
                        id: "condition-a7da2fec-bbf7-47d8-8c07-fa95b752e765",
                        type: "condition",
                        name: "Condition node 17",
                        children: [
                          {
                            id: "branch-01eab6e0-bbb2-4deb-a609-3f1c2de87806",
                            type: "branch",
                            name: "Branch node 18",
                            children: [
                              {
                                id: "condition-e1490142-829c-460a-8889-73318464788f",
                                type: "condition",
                                name: "Condition node 19",
                                children: [],
                                path: [
                                  "3",
                                  "children",
                                  "2",
                                  "children",
                                  "0",
                                  "children",
                                  "1",
                                  "children",
                                  "0",
                                  "children",
                                  "2",
                                  "children",
                                  "0",
                                  "children",
                                  "0",
                                ],
                              },
                              {
                                id: "condition-b08a8744-979f-4229-80d9-b898f8cf7023",
                                type: "condition",
                                name: "Condition node 20",
                                children: [],
                                path: [
                                  "3",
                                  "children",
                                  "2",
                                  "children",
                                  "0",
                                  "children",
                                  "1",
                                  "children",
                                  "0",
                                  "children",
                                  "2",
                                  "children",
                                  "0",
                                  "children",
                                  "1",
                                ],
                              },
                            ],
                            path: [
                              "3",
                              "children",
                              "2",
                              "children",
                              "0",
                              "children",
                              "1",
                              "children",
                              "0",
                              "children",
                              "2",
                              "children",
                              "0",
                            ],
                          },
                        ],
                        path: [
                          "3",
                          "children",
                          "2",
                          "children",
                          "0",
                          "children",
                          "1",
                          "children",
                          "0",
                          "children",
                          "2",
                        ],
                      },
                      {
                        id: "condition-7e7cfa5d-3207-4166-853e-91102c45f3a6",
                        type: "condition",
                        name: "Condition node 21",
                        children: [],
                        path: [
                          "3",
                          "children",
                          "2",
                          "children",
                          "0",
                          "children",
                          "1",
                          "children",
                          "0",
                          "children",
                          "3",
                        ],
                      },
                    ],
                    path: [
                      "3",
                      "children",
                      "2",
                      "children",
                      "0",
                      "children",
                      "1",
                      "children",
                      "0",
                    ],
                  },
                ],
                path: ["3", "children", "2", "children", "0", "children", "1"],
              },
              {
                id: "condition-f50c8c43-616c-43bd-a724-7bdb415b07be",
                type: "condition",
                name: "Condition node 22",
                children: [],
                path: ["3", "children", "2", "children", "0", "children", "2"],
              },
            ],
            path: ["3", "children", "2", "children", "0"],
          },
        ],
        path: ["3", "children", "2"],
      },
      {
        id: "condition-574eb304-f7a3-4bc6-a37e-05415abcf0c2",
        type: "condition",
        name: "Condition node 23",
        children: [],
        path: ["3", "children", "3"],
      },
    ],
    path: ["3"],
  },
  {
    id: "node-b106675a-5148-4a2e-aa86-8e06abd692d1",
    type: "end",
    name: "end 24",
    path: ["4"],
  },
];

interface INodeCustom {
  obj: INode;
  order: number;
}

const NodeForm = () => {
  const [nodes, setNodes] = useState<INode[]>(inputNodes);

  const handleChange = (nodes: INode[]) => {
    // console.log('nodes change', nodes);
    setNodes(nodes);
  };

  const listItem: INodeCustom[] = [];

  let num = 0;

  function recursion(defaultData: any) {
    if (Array.isArray(defaultData)) {
      for (let i in defaultData) {
        const obj = defaultData[i];
        obj.type !== "branch" &&
          obj.name &&
          listItem.push({ obj, order: num++ });
        if (obj.children) {
          for (let i in obj.children) {
            recursion(obj.children[i]);
          }
        }
      }
    } else {
      const obj = defaultData;
      obj.type !== "branch" && obj.name && listItem.push({ obj, order: num++ });
      if (obj.children) {
        recursion(obj.children);
      }
    }
  }
  recursion(nodes);

  const findAllNodesNext = (listItem: INodeCustom[], currentNode: INode) => {
    if (currentNode.type === "end") return [];
    const nextNodes: INodeCustom[] = [];
    if (currentNode.path && currentNode.path.length > 1) {
      listItem.forEach((element) => {
        if (
          currentNode.path &&
          element.obj.path &&
          element.obj.path.length > currentNode.path.length &&
          element.obj.path.toString().includes(currentNode.path.toString())
        ) {
          nextNodes.push(element);
        }
      });
      if (nextNodes.length === 0) {
        listItem.forEach((element) => {
          currentNode.path &&
            element.obj.path &&
            element.obj.path.length === 1 &&
            element.obj.path[0] === `${+currentNode.path[0] + 1}` &&
            nextNodes.push(element);
        });
      }
    }
    if (nextNodes.length > 1) {
      nextNodes.sort((a, b) => a.obj.path!.length - b.obj.path!.length);
      const nodeFilter = nextNodes.filter(
        (item) => item.obj.path!.length === nextNodes[0].obj.path!.length
      );
      return nodeFilter;
    }
    if (currentNode.path && currentNode.path.length === 1) {
      const orderNode = currentNode.path[0];
      listItem.forEach((element) => {
        if (
          element.obj.path &&
          element.obj.path.length === 3 &&
          element.obj.path[0] === `${+orderNode + 1}` &&
          element.obj.path[1] === "children"
        ) {
          nextNodes.push(element);
        }
      });
      if (nextNodes.length === 0) {
        listItem.forEach((element) => {
          element.obj.path &&
            element.obj.path.length === 1 &&
            element.obj.path[0] === `${+orderNode + 1}` &&
            nextNodes.push(element);
        });
      }
    }

    return nextNodes;
  };

  const findNextAndCurrent = listItem.map((item) => {
    const listNextNodes = findAllNodesNext(listItem, item.obj);
    return {
      current: item,
      next: listNextNodes,
    };
  });

  const findAllNodePrev = (
    listNextNodeAndCur: { current: INodeCustom; next: INodeCustom[] }[],
    currentNode: INodeCustom
  ) => {
    if (currentNode.obj.type === "start") return [];
    const prevNode: INodeCustom[] = [];
    listNextNodeAndCur.forEach((item) => {
      item.next.filter(
        (elem) =>
          elem.order === currentNode.order && prevNode.push(item.current)
      );
    });
    return prevNode;
  };

  const dataMapping = listItem.map((item) => {
    const listNextNodes = findAllNodesNext(listItem, item.obj);
    const listPrevNodes = findAllNodePrev(findNextAndCurrent, item);
    return {
      prev: listPrevNodes,
      current: item,
      next: listNextNodes,
    };
  });

  console.log("---------------------");

  console.log("Default tree:");
  console.table(nodes);

  console.log("Recursion:");
  console.table(dataMapping);

  console.log("---------------------");

  return (
    <>
      <FlowBuilder
        nodes={nodes}
        onChange={handleChange}
        registerNodes={registerNodes}
        historyTool
        zoomTool
      />
    </>
  );
};

export default NodeForm;

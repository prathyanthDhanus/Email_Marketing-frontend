import React, { useCallback } from 'react';
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  ReactFlowProvider,
} from '@xyflow/react';
 
import '@xyflow/react/dist/style.css';
 import LandingData from './LandingData';
import { FaPlus } from "react-icons/fa6";
import PlusIconNode from './PlusIconNode';
 
 
 const initialNodes = [
    {
      id: 'node-1',
      type: 'customNode',
      position: { x: 0, y: 0 },
      
      data: { value: 123 },
    },
    {
      id: 'node-2',
      type: 'Sequence Start point',
      targetPosition: 'top',
      position: { x: 400, y: 100 },
      data: { label: 'Sequence Start point' },
    },
    {
        id: 'node-3',
        type: 'PlusIconNode', 
        targetPosition: 'top',
        position: { x: 450, y: 200 },
        data: { value:PlusIconNode},
      },
  ];
   
  const initialEdges = [
    { id: 'edge-1', source: 'node-1', target: 'node-2', sourceHandle: 'a' },
    { id: 'edge-2', source: 'node-1', target: 'node-3', sourceHandle: 'b' },
  ];

const nodeTypes = {
    customNode : LandingData,
    PlusIconNode,
}
 
export default function Flowchat() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
 
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );
 
  return (
    <div className='h-screen'>
        <ReactFlowProvider>

       
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        onConnect={onConnect}
      >
        <Background  />
        <Controls />
        <MiniMap />
      </ReactFlow>
        {/* <LandingData/> */}
      </ReactFlowProvider>
    </div>
  );
}
import React, { useCallback } from 'react';
import ReactFlow, {
  Controls,
  Background,
  MiniMap,
  useNodesState,
  useEdgesState,
  addEdge,
} from 'reactflow';
 
import 'reactflow/dist/style.css';

import hijoLengNodoModel from '../components/models/hijoLengNodo/hijoLengNodoModel';
import padreLengNodoModel from '../components/models/padreLengNodo/padreLengNodoModel';

import LengNodoData from '../components/data/LengNodoData';

const nodeTypes = {
  hijoLengNodoModel: hijoLengNodoModel,
  padreLengNodoModel : padreLengNodoModel,
};
 
const initialNodes = LengNodoData();

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2', sourceHandle: 'leftHandle'},
  { id: 'e1-3', source: '1', target: '3', sourceHandle: 'leftHandle'},
  { id: 'e1-4', source: '1', target: '4', sourceHandle: 'rightHandle'},
  { id: 'e1-5', source: '1', target: '5', sourceHandle: 'rightHandle'},
  { id: 'e1-6', source: '1', target: '6', sourceHandle: 'topHandle'},
  { id: 'e1-7', source: '1', target: '7', sourceHandle: 'rightHandle'},
  { id: 'e1-8', source: '1', target: '8', sourceHandle: 'leftHandle'},
  { id: 'e1-9', source: '1', target: '9', sourceHandle: 'bottomHandle'},
];

 
export default function LenguajesBoard() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
 
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );
 
  return (
    <div className='bg-gradient-to-br from-slate-950 to-rose-950' style={{ width: '100%', height: '100% ' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <Controls />
        <MiniMap className='bg-rose-950 opacity-50' />
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}
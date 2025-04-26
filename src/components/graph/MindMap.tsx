import ReactFlow, { Background, Controls, MiniMap } from "reactflow";
import "reactflow/dist/style.css";

interface NodeType {
  id: string;
  data: { label: string };
  position: { x: number, y: number };
}

interface MindMapProps {
  nodes: NodeType[];
}

export default function MindMap({ nodes }: MindMapProps) {
  const edges = nodes.map((node, idx) => ({
    id: `e${idx}`,
    source: nodes[0].id,
    target: node.id,
  })).slice(1);

  return (
    <div className="h-[80vh] w-full">
      <ReactFlow nodes={nodes} edges={edges} fitView>
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
}

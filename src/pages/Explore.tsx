import MindMap from "../components/graph/MindMap";

export default function Explore() {
  const data = localStorage.getItem("mindGraph");
  const nodes = data ? JSON.parse(data) : [];

  if (!nodes.length) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-2xl font-semibold text-red-500">No MindGraph Uploaded</h2>
        <p className="mt-2 text-gray-500">Please upload a JSON file first.</p>
      </div>
    );
  }

  return (
    <div className="p-4">
      <MindMap nodes={nodes} />
    </div>
  );
}
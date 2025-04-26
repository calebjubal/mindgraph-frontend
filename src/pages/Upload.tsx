import FileUpload from "../components/upload/FileUpload";

export default function Upload() {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-semibold mb-6 text-center">Upload Your Mind Map</h2>
      <FileUpload />
    </div>
  );
}

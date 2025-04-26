import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export default function FileUpload() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [fileContent, setFileContent] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const json = JSON.parse(event.target?.result as string);
        setFileContent(json);
        localStorage.setItem("mindGraph", JSON.stringify(json));
        toast.success("File uploaded successfully!");
        navigate("/explore");
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        toast.error("Invalid JSON format.");
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="flex flex-col items-center gap-4 p-8">
      <input
        type="file"
        accept="application/json"
        onChange={handleFileChange}
        className="border p-2 rounded-md"
      />
      <p className="text-gray-500">Upload a JSON mind map file</p>
    </div>
  );
}

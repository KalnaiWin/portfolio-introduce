import { File, Folder, FolderOpen } from "lucide-react";
import { useState } from "react";

const TreeNode = ({ node }) => {
  const [open, setOpen] = useState(false);

  if (node.type === "file") {
    return (
      <div className="pl-6 flex items-center gap-2">
        <File className="w-4 h-4 text-blue-300" />
        <span className="text-white text-sm">{node.name}</span>
      </div>
    );
  }

  return (
    <div className="pl-2 text-white">
      <div
        onClick={() => setOpen(!open)}
        className="cursor-pointer flex items-center gap-2"
      >
        {open ? (
          <FolderOpen className="w-4 h-4 text-blue-500" />
        ) : (
          <Folder className="w-4 h-4 text-blue-500" />
        )}
        <span className="font-semibold text-sm">{node.name}</span>
      </div>

      {open && node.children && (
        <div className="ml-4">
          {node.children.map((child, index) => (
            <TreeNode node={child} key={index} />
          ))}
        </div>
      )}
    </div>
  );
};

const NextjsPage = ({ data = [] }) => {
  return (
    <div className="h-8/9 overflow-y-auto">
      {data.map((node, index) => (
        <TreeNode node={node} key={index} />
      ))}
    </div>
  );
};

export default NextjsPage;

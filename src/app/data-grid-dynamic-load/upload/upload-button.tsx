import React, { useRef } from "react";  
import { Button } from "@/components/ui/button";  
import * as XLSX from "xlsx";  
  
type Props = {  
  onUpload: (results: any) => void;  
};  
  
export function FileUploadButton({ onUpload }: Props) {  
  const fileInputRef = useRef<HTMLInputElement | null>(null);  
  
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {  
    const file = event.target.files?.[0];  
    if (!file) return;  
  
    const reader = new FileReader();  
    reader.onload = (e) => {  
      const data = new Uint8Array(e.target?.result as ArrayBuffer);  
      const workbook = XLSX.read(data, { type: "array" });  
      const sheetName = workbook.SheetNames[0];  
      const worksheet = workbook.Sheets[sheetName];  
      const jsonData = XLSX.utils.sheet_to_json(worksheet);  
      onUpload(jsonData);  
    };  
    reader.readAsArrayBuffer(file);  

        // Reset input value so the same file can be re-uploaded.  
        event.target.value = '';  
  };  
  
  const handleButtonClick = () => {  
    fileInputRef.current?.click();  
  };  
  
  return (  
    <div className="flex w-full max-w-sm items-center space-x-2">  
      <input  
        type="file"  
        accept=".xlsx, .xls"  
        ref={fileInputRef}  
        onChange={handleFileChange}  
        style={{ display: "none" }} // Hide the input  
      />  
      <Button onClick={handleButtonClick}>Select File</Button>  
    </div>  
  );  
}  
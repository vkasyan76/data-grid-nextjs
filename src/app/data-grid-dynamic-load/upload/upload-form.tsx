import React, { useState } from "react";  
import { Button } from "@/components/ui/button";  
import { Input } from "@/components/ui/input";  
import * as XLSX from "xlsx";  
  
type Props = {  
  onUpload: (results: any) => void;  
};  
  
export function FileUploadForm({ onUpload }: Props) {  
  const [selectedFile, setSelectedFile] = useState<File | null>(null);  
  
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {  
    const file = event.target.files?.[0];  
    setSelectedFile(file || null);  
  };  
  
  const handleSubmit = (event: React.FormEvent) => {  
    event.preventDefault();  
    if (!selectedFile) return;  
  
    const reader = new FileReader();  
    reader.onload = (e) => {  
      const data = new Uint8Array(e.target?.result as ArrayBuffer);  
      const workbook = XLSX.read(data, { type: "array" });  
      const sheetName = workbook.SheetNames[0];  
      const worksheet = workbook.Sheets[sheetName];  
      const jsonData = XLSX.utils.sheet_to_json(worksheet);  
      onUpload(jsonData);  
    };  
    reader.readAsArrayBuffer(selectedFile);  
  };  
  
  return (  
    <form onSubmit={handleSubmit} className="flex w-full max-w-sm items-center space-x-2">  
      <Input type="file" accept=".xlsx, .xls" onChange={handleFileChange} 
       style={{ display: "none" }}
      />  
      <Button type="submit" disabled={!selectedFile}>  
        Upload  
      </Button>  
    </form>  
  );  
}  
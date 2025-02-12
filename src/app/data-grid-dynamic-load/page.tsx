"use client";  
  
import React, { useState } from 'react';   
import * as XLSX from 'xlsx';  
import DataGridDynamicUpload from '@/components/data-grid-ag-dynamic-upload';
import { FileUploadButton } from './upload/upload-button';
  
function DataGridDynamicLoadPage() {  
  const [rowData, setRowData] = useState<any[]>([]);  
  

  const handleUpload = (data: any[]) => {  
    console.log("Upload Results:", data);  
    setRowData(data);  
  };  
  
  return (  
    <div>  
      <FileUploadButton onUpload={handleUpload} />
      <h1>Data Grid React</h1>  
      <DataGridDynamicUpload rowData={rowData} />  
    </div>  
  );  
}  
  
export default DataGridDynamicLoadPage;  
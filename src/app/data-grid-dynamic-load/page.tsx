"use client";  
  
import React, { useState } from 'react';   
import * as XLSX from 'xlsx';  
import DataGridDynamicUpload from '@/components/data-grid-ag-dynamic-upload';
import { FileUploadButton } from './upload/upload-button';
import { Button } from '@/components/ui/button';
import { uploadDataToServer } from '../../../api/data-load';
  
function DataGridDynamicLoadPage() {  
  const [rowData, setRowData] = useState<any[]>([]);  
  

  const handleUpload = (data: any[]) => {  
    console.log("Upload Results:", data);  
    setRowData(data);  
  };  

  const handleClear = () => {  
    setRowData([]);  
  }; 

  const handleSubmitToServer = async () => {  
    try {  
      const response = await uploadDataToServer(rowData);  
      console.log(response.message); // Log the response message  
    } catch (error) {  
      // Handle the error accordingly  
      console.error('Failed to upload data to server', error);  
    }  
  };  
  
  return ( 
    <>    
    <div className="max-w-screen-2xl mx-auto w-full pb-10 mt-8">    
    <div className="flex flex-col lg:flex-row gap-y-2 items-center gap-x-2">  
      <FileUploadButton onUpload={handleUpload} disabled={rowData.length > 0}/>
      <Button onClick={handleClear} className="ml-2" disabled={rowData.length === 0}>Clear Data</Button>  </div>
      <h1>Data Grid React</h1>  
      <DataGridDynamicUpload rowData={rowData} />  
    </div>
    <Button onClick={handleSubmitToServer} className="ml-2" disabled={rowData.length === 0}>  
      Upload to Server  
     </Button>  

    </>

    
 
  );  
}  
  
export default DataGridDynamicLoadPage;  
"use client";  
import React from 'react';  
import DataGrid from 'react-data-grid';  
import 'react-data-grid/lib/styles.css';  // Import necessary CSS  
  
type Row = {  
  id: number;  
  make: string;  
  model: string;  
  price: number;  
  electric: boolean;  
};  
  
function DataGridReact() {  
  // Row Data: The data to be displayed.  
  const rows: Row[] = [  
    { id: 1, make: "Ford", model: "Model Y", price: 46950, electric: true },  
    { id: 2, make: "Mazda", model: "Mazda 3", price: 26500, electric: true },  
    { id: 3, make: "Toyota", model: "Corolla", price: 23960, electric: false }  
  ];  
  
  // Column definitions  
  const columns = [  
    { key: 'make', name: 'Make' },  
    { key: 'model', name: 'Model' },  
    { key: 'price', name: 'Price' },  
    {   
      key: 'electric',   
      name: 'Electric',   
      formatter: ({ row }: { row: Row }) => <span>{row.electric ? 'Yes' : 'No'}</span>  
    }  
  ];  
  
  return (  
    <div style={{ width: '100%', height: '400px' }}>  
      <DataGrid columns={columns} rows={rows} />  
    </div>  
  );  
}  
  
export default DataGridReact;  
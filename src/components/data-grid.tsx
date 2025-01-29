"use client";  

import { AgGridReact } from 'ag-grid-react';  
import { ClientSideRowModelModule, ValidationModule, ColDef, GridReadyEvent, ColumnAutoSizeModule } from 'ag-grid-community'; 
import 'ag-grid-community/styles/ag-grid.css';  
import 'ag-grid-community/styles/ag-theme-quartz.css';  
import { useState } from 'react'; 


function DataGrid() {  
  // Row Data: The data to be displayed.  
  const [rowData, setRowData] = useState([  
    { make: "Ford", model: "Model Y", price: 46950, electric: true },  
    { make: "Mazda", model: "Mazda 3", price: 26500, electric: true },  
    { make: "Toyota", model: "Corolla", price: 23960, electric: false }  
  ]);  


  const [colDefs, setColDefs] = useState<ColDef[]>([  
    { field: "make" },  
    { field: "model" },  
    { field: "price" },  
    { field: "electric" }  
  ]);  

  function onGridReady(params: GridReadyEvent) {  
    params.api.sizeColumnsToFit();  
  }   

  return (  
    <div className="ag-theme-quartz" style={{ width: '100%' }}>  
      {/* <AgGridReact rowData={rowData} columnDefs={colDefs} />   */}
      <AgGridReact  
        rowData={rowData}  
        columnDefs={colDefs}  
        modules={[ClientSideRowModelModule, ValidationModule, ColumnAutoSizeModule]} 
        gridOptions={{ theme: "legacy" }} 
        domLayout="autoHeight" 
        onGridReady={onGridReady}    
      />  
    </div>  
  );  
}  

export default DataGrid;  
"use client";  

import React, { useEffect, useState } from 'react';  
import { AgGridReact } from '@ag-grid-community/react';  
import { ColDef, ICellRendererParams } from '@ag-grid-community/core';  
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';  
import { ModuleRegistry } from '@ag-grid-community/core'; // @ag-grid-community/core is used for the module registry  
import 'ag-grid-community/styles/ag-grid.css';  
import 'ag-grid-community/styles/ag-theme-alpine.css';  

// Register the required modules with the grid  
ModuleRegistry.registerModules([ClientSideRowModelModule]);  

type DataGridDynamicProps = {  
  rowData: any[];  
};  

function DataGridDynamicUpload({ rowData }: DataGridDynamicProps) {   


  const [columnDefs, setColumnDefs] = useState<ColDef[]>([]);  
  
  useEffect(() => {  
    if (rowData.length > 0) {  
      const columns: ColDef[] = Object.keys(rowData[0]).map(key => ({  
        headerName: key.charAt(0).toUpperCase() + key.slice(1),  
        field: key,  
        cellRenderer: (params: ICellRendererParams) => {  
          if (typeof params.value === 'boolean') {  
            return params.value ? 'Yes' : 'No';  
          }  
          return params.value;  
        }  
      }));  
      setColumnDefs(columns);  
    }  
  }, [rowData]);  

  return (  
    <div className="ag-theme-alpine" style={{ height: 400, width: '100%' }}>  
      <AgGridReact  
        rowData={rowData}  
        columnDefs={columnDefs}  
        defaultColDef={{ flex: 1, minWidth: 100 }}  
        modules={[ClientSideRowModelModule]}  
      />  
    </div>  
  );  
}  

export default DataGridDynamicUpload;  










































// import React, { useEffect, useState } from 'react';  
// import { AgGridReact } from 'ag-grid-react';  
// import { ColDef, ICellRendererParams } from 'ag-grid-community';  
// import 'ag-grid-community/styles/ag-grid.css';  
// import 'ag-grid-community/styles/ag-theme-alpine.css';  

// function DataGridDynamic() {  
//   const [rowData, setRowData] = useState<any[]>([]);  
//   const [columnDefs, setColumnDefs] = useState<ColDef[]>([]);  

//   useEffect(() => {  
//     fetch('https://jsonplaceholder.typicode.com/posts')  
//       .then(response => response.json())  
//       .then(data => {  
//         setRowData(data.rows);  

//         if (data.rows.length > 0) {  
//           const columns: ColDef[] = Object.keys(data.rows[0]).map(key => ({  
//             headerName: key.charAt(0).toUpperCase() + key.slice(1),  
//             field: key,  
//             cellRenderer: (params: ICellRendererParams) => {  
//               if (typeof params.value === 'boolean') {  
//                 return params.value ? 'Yes' : 'No';  
//               }  
//               return params.value;  
//             }   
//           }));  
//           setColumnDefs(columns);  
//         }  
//       });  
//   }, []);  

//   return (  
//     <div className="ag-theme-alpine" style={{ height: 400, width: '100%' }}>  
//       <AgGridReact  
//         rowData={rowData}  
//         columnDefs={columnDefs}  
//         defaultColDef={{ flex: 1, minWidth: 100 }}  
//       />  
//     </div>  
//   );  
// }  

// export default DataGridDynamic;  
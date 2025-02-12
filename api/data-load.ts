import axios from 'axios';  
  
const API_URL = 'http://127.0.0.1:8000/upload-data/';  
  
export const uploadDataToServer = async (data: any) => {  
  try {  
    const response = await axios.post(API_URL, { data });  
    return response.data;  
  } catch (error) {  
    // Handle the error accordingly  
    console.error('Error uploading data', error);  
    throw error;  
  }  
};  
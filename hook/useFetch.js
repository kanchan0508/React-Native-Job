import { useState, useEffect } from "react";
import axios from "axios";
// import {RAPID_API_KEY} from "@env"

// const rapidApiKey= RAPID_API_KEY

const useFetch = (enndpoint, query) =>{
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${enndpoint}`,
       
        headers: {
          'x-rapidapi-key':'038b121d8bmsh5e02076f5d1e0e3p127cfajsn2a779b7f90fc',
          'x-rapidapi-host': 'jsearch.p.rapidapi.com'
        },
        params: {
            ...query
          },
      };

      const fetchData = async()=>{
        setLoading(true);
        try {
            const response = await axios.request(options);
         
            setData(response.data.data);
           
            setLoading(false)

        } catch (error) {
            console.error(error);
            setError(error);
            alert("there is an error")
        }finally{
           setLoading(false); 
        }
      }

      useEffect(()=>{
         fetchData()
      },[])
      

      const refetch =()=>{
        setLoading(true);
        fetchData()
      }

      return {data, loading,error, refetch}
     
}

export default useFetch;
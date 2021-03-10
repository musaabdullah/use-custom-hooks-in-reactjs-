import axios from 'axios';
import { useEffect, useState }  from 'react';


const useFetch =  (url) => {
    const [Data, setData] = useState();

    useEffect(()  => {

        const fetchData = async () => {
            const { data } = await axios.get(url);
            console.log(data);
            setData(data);
        }
    fetchData();
  }, []) 

    return { Data }
}

export default useFetch; 
import axios from 'axios';
import { useEffect, useState }  from 'react';


const useFetch =  (url) => {
    const [loading, setLoading] = useState(false);
    const [Data, setData] = useState();

    useEffect(()  => {

        const fetchData = async () => {
            setLoading(true);
            const { data } = await axios.get(url);
            console.log(data);
            setData(data);
            setLoading(false);
        }
    fetchData();
  }, []) 

    return { Data, loading }
}

export default useFetch; 
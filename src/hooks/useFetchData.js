import axios from "axios";
import { useEffect, useState } from "react";


const useFetchData = () => {

  const [data, setData] = useState([]);
  const [loadingState, setLoadingState] = useState(true);

  useEffect(() => {
    setLoadingState(true)

    axios('/appData.json')
      .then(res => setData(res.data))
      .catch(err => console.log(err))
      .finally(setTimeout(() => setLoadingState(false), 500));
  },[])

  return [data, loadingState]
  
};

export default useFetchData;
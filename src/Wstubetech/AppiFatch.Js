import  React, { useState ,useEffect} from "react";


const AppiFatch = () => {
  //Here we are fatching api s
  const [data, setData] = useState([]);

  const upi = "https://jsonplaceholder.typicode.com/users";
 const FetchApi= (()=>{
    fetch(upi).then((res)=>res.json().then((result)=>{
        setData(result)
    }))
 }) 
  useEffect(() => {
    FetchApi();
  }, []);

  return (
    <>
  {
    data.map((item)=>{
 return <h1>{item.name}</h1>

    })
  }
e
     
    </>
  );
};

export default AppiFatch;
import  React, { useState ,useEffect} from "react";


const Api = () => {
  //Here we are fatching api s
  const [data, setData] = useState([]);

  const upi = "https://jsonplaceholder.typicode.com/users";
  const FatchingApi = () => {
    return fetch(upi)
      .then((res) => {
        res.json();
        
      })
      .then((result) => {
        setData(result);
      });
  };
  useEffect(() => {
    FatchingApi();
  }, []);

  return (
    <>
  
    <div className="text-center text-4xl text-uppercase text-red-700">
      <div className="w-full h-auto">
      <h1>hey i am a api method </h1>
        {
          data.map((item,key)=>{
            return 
            <>
            <h1 key={key}>{item.name}</h1>
            <h1 key={key}>{item.email}</h1>
            </>
          })
        }
      </div>
    </div>
    </>
  );
};

export default Api;

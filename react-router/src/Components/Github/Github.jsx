import { useLoaderData } from "react-router-dom";
export default function Github() {
    const data =useLoaderData()// its loads the api within hover of component
  return (
    <div className="flex items-center justify-around w-full p-8 text-white bg-gray-700">
        <img className="w-96" src={data.avatar_url}/>
        <h1 className="text-7xl">Followers : {data.followers}</h1>
    </div>
  );
}

export const githubInfoLoader=async ()=>{
    const res=await fetch('https://api.github.com/users/shivam-thedev')
    return await res.json()
}
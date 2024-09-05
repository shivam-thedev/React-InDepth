import { useParams } from "react-router-dom";
export default function User() {
    const {userid}=useParams();//extracts values from url
  return (
    <div className="flex justify-center py-4 text-3xl text-white bg-slate-700">User : {userid}</div>
  );
}
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Spinner from "../components/Spinner";
import { NextPage } from "next";

export interface GetLinkProps {}

const GetLink: NextPage<GetLinkProps> = () => {
  const [message, setMessage] = useState("So small, you almost can't see it");
  async function getLink() {
    const router = useRouter();
    const params = router.query;
    console.log("Params");
    console.log(params);
    const id = params.id;
    if(id !== undefined) {
      console.log(id);
      if(id.length !== 5){
        setMessage('Seems like the link is not valid. Please check again!');
        return;
      }
      const response = await fetch("/api/getUrl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: params.id,
        }),
      });
      const data = await response.json();
      console.log('Data');
      console.log(data);
      if(response.status === 404){
        setMessage("Seems your link does not exist");
      }
      if(response.status === 200){
          console.log('Trying to navigate')
        window.location.assign(`${data.url}`);
      }
    }
  }
  getLink();
  return (
    <div className="justify-items-center py-44 px-8">
      <h1 className="text-3xl text-center font-extrabold">{message}</h1>
      <Spinner />
    </div>
  );
};

export default GetLink;

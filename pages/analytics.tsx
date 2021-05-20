import React from "react";
import { useState } from "react";
import Snackbar from "../components/Snackbar/Snackbar";
import Spinner from "../components/Spinner";

export interface AnalyticsProps {}

const Analytics: React.FC<AnalyticsProps> = () => {
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState("");
  const [visits, setVisits] = useState("");
  const snackBarRef = React.createRef<Snackbar>();

  async function getAnalytics(e): Promise<void> {
    e.preventDefault();
    if (id.length !== 5) {
      snackBarRef?.current?.openSnackBar("Invalid ID Provided");
      return;
    } else {
      setLoading(true);
      const response = await fetch("/api/visits", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: id,
        }),
      });
      const data = await response.json();
      console.log(data);
      if (response.status === 200) {
        setVisits(`Visits : ${data.visits}`);
      } else if (response.status === 404) {
        setVisits("Seems you strayed off a little!");
      } else {
        setVisits("An unexpected error occurred");
      }
      setLoading(false);
    }
  }

  return (
    <div>
      {loading === false ? (
        visits === "" ? (
          <form
            onSubmit={getAnalytics}
            className="lg:grid grid-cols-6 gap-4 sm:grid-rows-3 mt-44 mb-44"
          >
            <p
              id="url"
              placeholder="Enter Link"
              className="bg-white hover:shadow-xl duration-500 focus:outline-none ring border-blue-700 rounded-md lg:col-start-2 lg:col-span-3 sm:row-start-1 sm:row-span-1 m-4 p-4"
            >
              https://smallen.xyz/
              <input
                type="text"
                className="outline-none w-auto min-h-full bg-transparent"
                onChange={(e) => setId(e.target.value)}
                required={true}
              />
            </p>
            <button
              type="submit"
              className="focus:outline-none duration-500 hover:outline-black hover:border-dashed border-blue-700 border-2 bg-blue-700 hover:bg-transparent rounded-md lg:col-start-5 lg:col-span-1 m-4 p-4 group"
              onSubmit={getAnalytics}
            >
              <p className="group-hover:text-gray-900 text-white font-extrabold">
                Check Visits
              </p>
            </button>
          </form>
        ) : (
          <div>
            <div className="lg:grid grid-cols-6 gap-4 sm:grid-rows-3 mt-44 mb-44">
              <h1 className="text-black text-xl hover:shadow-xl focus:outline-none ring border-blue-700 rounded-md lg:col-start-2 lg:col-span-3 sm:row-start-1 sm:row-span-1 m-4 p-4">
                https://smallen.xyz/{id}
              </h1>
              <button
                className="focus:outline-none hover:outline-black hover:border-dashed border-blue-700 border-2 bg-blue-700 hover:bg-transparent rounded-md lg:col-start-5 lg:col-span-1 m-4 p-4 group"
                placeholder="Copy URL"
                onClick={getAnalytics}
              >
                <p className="group-hover:text-gray-900 text-white">Refetch Data</p>
              </button>
            </div>
            <div className="lg:mx-72 hover:shadow-xl duration-500 focus:outline-none ring border-blue-700 rounded-md lg:col-start-2 lg:col-span-3 sm:row-start-1 sm:row-span-1 m-4 p-4">
              <h1 className="text-xl text-center font-extrabold">{visits}</h1>
            </div>
          </div>
        )
      ) : (
        <div>
          <h1 className="text-2xl font-extrabold text-center py-8">
            In Action
          </h1>
          <Spinner />
        </div>
      )}
    </div>
  );
};

export default Analytics;

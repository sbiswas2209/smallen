import React from "react";
import { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import Snackbar from "./Snackbar/Snackbar";
import Spinner from "./Spinner";

export interface FormProps {}

const snackBarRef = React.createRef<Snackbar>();

const Form: React.FC<FormProps> = () => {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState("");

  async function shortenUrl(e): Promise<void> {
    e.preventDefault();
    console.log(url);
    setLoading(true);
    const response = await fetch("/api/shorten", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        originalUrl: url,
      }),
    });
    const data = await response.json();
    console.log(data);
    setId(data.id);
    setLoading(false);
  }

  return (
    <div>
      {loading === false ? (
        id === "" ? (
          <form
            onSubmit={shortenUrl}
            className="lg:grid grid-cols-6 gap-4 sm:grid-rows-3 mt-44 mb-44"
          >
            <input
              required
              type="url"
              id="url"
              placeholder="Enter Link"
              className="hover:shadow-xl duration-500 focus:outline-none ring border-blue-700 rounded-md lg:col-start-2 lg:col-span-3 sm:row-start-1 sm:row-span-1 m-4 p-4"
              onChange={(e) => setUrl(e.target.value)}
            />
            <button
              type="submit"
              className="focus:outline-none duration-500 hover:outline-black hover:border-dashed border-blue-700 border-2 bg-blue-700 hover:bg-transparent rounded-md lg:col-start-5 lg:col-span-1 m-4 p-4 group"
              onSubmit={shortenUrl}
            >
              <p className="group-hover:text-gray-900 text-white font-extrabold">Smallen</p>
            </button>
          </form>
        ) : (
          <div className="lg:grid grid-cols-6 gap-4 sm:grid-rows-3 mt-44 mb-44">
            <h1 className="text-black text-xl hover:shadow-xl focus:outline-none ring border-blue-700 rounded-md lg:col-start-2 lg:col-span-3 sm:row-start-1 sm:row-span-1 m-4 p-4">
              https://smallen.xyz/{id}
            </h1>
            <CopyToClipboard text={`https://smallen.xyz/${id}`} onCopy={(val) => {
              snackBarRef?.current?.openSnackBar('Copied to clipboard');
              console.log('Copied to clipboard')
            }}>
            <button
              className="focus:outline-none hover:outline-black hover:border-dashed border-blue-700 border-2 bg-blue-700 hover:bg-transparent rounded-md lg:col-start-5 lg:col-span-1 m-4 p-4 group"
              placeholder="Copy URL"
            >
              <p className="group-hover:text-gray-900 text-white">Copy URL</p>
            </button>
            </CopyToClipboard>
          </div>
        )
      ) : (
        <div>
          <h1 className='text-2xl font-extrabold text-center py-8'>In Action</h1>
          <Spinner />
        </div>
      )}
    </div>
  );
};

export default Form;

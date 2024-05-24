import React, { useEffect, useState } from "react";
import ReactStars from "react-stars";
import { useParams } from "react-router";
import { moviesRef } from "../firebase/firebase";
import { getDoc } from "firebase/firestore";

const Detail = () => {
  const { id } = useParams();
  const [data, setData] = useState({
    title: "",
    year: "",
    image: "",
    description: "",
  });
  useEffect(() => {
    async function getData() {
      const _data = await getDoc(moviesRef, id);
      setData(_data.data());
    }
    getData();
  }, []);

  return (
    <div className="p-4 flex flex-col md:flex-row items-center md:items-start justify-center mt-4 w-full">
      <img className="h-96 block md:sticky top-24" src={data.image} />
      <div className="md:ml-4 ml-0  w-full md:w-1/2">
        <h1 className="text-3xl font-bold text-gray-400 ">
          {data.title}
          <span className="text-xl">({data.year})</span>
        </h1>

        <ReactStars
          className=""
          size={20}
          half={true}
          value={4.5}
          edit={false}
        />
        <p className="mt-2">{data.description}</p>
      </div>
    </div>
  );
};

export default Detail;

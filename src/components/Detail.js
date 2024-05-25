import React, { useEffect, useState } from "react";
import ReactStars from "react-stars";
import { useParams } from "react-router";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { ThreeCircles } from "react-loader-spinner";
import Reviews from './Reviews'

const Detail = () => {
  const { id } = useParams();
  const [data, setData] = useState({
    title: "",
    year: "",
    image: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    async function getData() {
      setLoading(true);
      const _doc = doc(db, "movies", id);
      const _data = await getDoc(_doc);
      setData(_data.data());
      setLoading(false);
    }
    getData();
  }, []);

  return (
    <div classNameName="p-4 flex flex-col md:flex-row items-center md:items-start justify-center mt-4 w-full">
      {loading ? (
        <div classNameName="h-96 flex w-full justify-center items-center">
          <ThreeCircles height={30} color="white" />
        </div>
      ) : (
        <>
          <img classNameName="h-96 block md:sticky top-24" src={data.image} />
          <div classNameName="md:ml-4 ml-0  w-full md:w-1/2">
            <h1 classNameName="text-3xl font-bold text-gray-400 ">
              {data.title}
              <span classNameName="text-xl">({data.year})</span>
            </h1>

            <ReactStars
              classNameName=""
              size={20}
              half={true}
              value={4.5}
              edit={false}
            />
            <p classNameName="mt-2">{data.description}</p>
            <Reviews />
          </div>
        </>
      )}
    </div>
  );
};

export default Detail;

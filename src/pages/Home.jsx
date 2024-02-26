import React, { useEffect, useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
import axios from "axios";
import { numberic } from "../assets";

const Home = () => {
  const [surah, setSurah] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://equran.id/api/v2/surat",
    })
      .then((response) => {
        setSurah(response.data);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  }, []);

  const handleSurah = (id) => {
    navigate(`/${id}`);
  };

  return (
    <div className="p-2 w-full flex flex-col bg-slate-50 sm:p-4 sm:justify-center">
      {/* Surah */}
      <div className="flex flex-wrap w-full sm:justify-center">
        {surah.data?.map((el) => (
          <button
            key={el.nomor}
            onClick={() => handleSurah(el.nomor)}
            className="w-full h-[60px] max-w-[450px]  items-center   border-b-[1.5px] flex bg-slate-50 sm:w-[300px] sm:m-2 sm:h-[100px] sm:border-slate-300 sm:border-[0.5px] sm:p-4 sm:bg-slate-100 sm:rounded-xl cursor-pointer  active:opacity-90"
          >
            <div className="flex items-center justify-center w-[20%] ">
              {/* Nomor */}
              <div
                className="rounded-full w-12 h-12 flex justify-center items-center text-primary"
                style={{
                  backgroundImage: `url(${numberic})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  position: "relative",
                }}
              >
                <p className="text-primary absolute text-[12px] ">{el.nomor}</p>
              </div>
            </div>
            {/* Nama Latin */}
            <div className="flex flex-col  w-[55%]">
              <p className="font-semibold text-[22px] text-primary text-start">
                {el.namaLatin}
              </p>
              <p className="text-slate-400 text-sm text-start">
                {el.arti} | {el.jumlahAyat}
              </p>
            </div>
            {/* Nama Arab */}
            <div className="mr-5 w-[25%] ">
              <p className="text-[24px] text-primary text-end">{el.nama}</p>
            </div>
          </button>
        ))}
      </div>

      <div className="flex justify-center items-center py-10">
        <button
          className=" w-20 h-10 bg-sky-600 rounded-lg"
          onClick={() => navigate("/scan")}
        >
          scan
        </button>
      </div>
    </div>
  );
};

export default Home;

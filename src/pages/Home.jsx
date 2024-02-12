import { data } from "autoprefixer";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let [surah, setSurah] = useState([]);
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

  console.log(surah);

  return (
    <div className="p-2 w-full flex bg-slate-50 sm:p-4 sm:justify-center ">
      {/* Surah */}
      <div className="flex flex-wrap w-full sm:justify-center">
        {surah.data?.map((el) => (
          <button
            key={el.nomor}
            onClick={() => handleSurah(el.nomor)}
            className="w-full h-[60px] max-w-[450px] justify-between items-center  border-b-[1.5px] flex bg-slate-50 sm:w-[300px] sm:m-2 sm:h-[100px] sm:border-slate-300 sm:border-[0.5px] sm:p-4 sm:bg-slate-100 sm:rounded-xl cursor-pointer  active:opacity-90"
          >
            <div className="flex">
              {/* Nomor */}
              <div className="flex items-center ">
                <div className="rounded-full w-9 h-9 border-[1px] border-primary bg-primary flex justify-center items-center">
                  <p className="text-white">{el.nomor}</p>
                </div>
              </div>
              {/* Nama Latin */}
              <div className="ml-3 flex flex-col justify-center">
                <p className="font-semibold text-[22px] text-primary">
                  {el.namaLatin}
                </p>
                <p className="text-slate-400 text-sm text-start">
                  {el.jumlahAyat} Ayat
                </p>
              </div>
            </div>

            {/* Nama Arab */}
            <div className="mr-5">
              <p className="text-[24px] text-primary">{el.nama}</p>
            </div>
          </button>
        ))}
      </div>

      {/* Ayat */}
    </div>
  );
};

export default Home;

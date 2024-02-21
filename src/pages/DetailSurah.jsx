import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const DetailSurah = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [quran, setQuran] = useState([]);
  const [surah, setSurah] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: `https://equran.id/api/v2/surat/${id}`,
    })
      .then((response) => {
        setSurah(response.data);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  }, [id]);

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://equran.id/api/v2/surat",
    })
      .then((response) => {
        setQuran(response.data.data);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  }, []);

  const handleSurah = (id) => {
    navigate(`/${id}`);
  };

  return (
    <div className="w-full min-h-screen">
      <div className="w-full">
        {/* Quick Access */}
        <div className="w-full h-14 bg-white flex items-center p-2 overflow-scroll gap-3 sticky top-0 z-10">
          {quran?.map((el) => (
            <p
              key={el.nomor}
              className="w-[90px] whitespace-nowrap cursor-pointer"
              onClick={() => handleSurah(el.nomor)}
            >
              {el.namaLatin}
            </p>
          ))}
        </div>

        {/* Detail */}
        <div className="bg-slate-200  p-4">
          {" "}
          {/* Tambahkan margin-top */}
          <p>{surah?.data?.nama}</p>
          <p>{surah?.data?.namaLatin}</p>
          <p>{surah?.data?.jumlahAyat}</p>
          <p>{surah?.data?.tempatTurun}</p>
          <p>{surah?.data?.arti}</p>
        </div>

        {/* Ayat */}
        <div className="mt-4 p-4">
          {" "}
          {/* Tambahkan margin-top */}
          {surah?.data?.ayat.map((el) => (
            <div key={el.nomorAyat}>
              <p>{el.nomorAyat}</p>
              <p>{el.teksArab}</p>
              <p>{el.teksLatin}</p>
              <p>{el.teksIndonesia}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailSurah;

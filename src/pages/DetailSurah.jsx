import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MdBrightnessLow } from "react-icons/md";

const DetailSurah = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  let [quran, setQuran] = useState([]);

  let [surah, setSurah] = useState([]);

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
      <div>
        <div className="flex overflow-scroll gap-3">
          {quran?.map((el) => {
            return (
              <p
                key={el.nomor}
                className="w-[90px]  whitespace-nowrap"
                onClick={() => handleSurah(el.nomor)}
              >
                {el.namaLatin}
              </p>
            );
          })}
        </div>

        <div>
          <p>{surah?.data?.nama}</p>
          <p>{surah?.data?.namaLatin}</p>
          <p>{surah?.data?.jumlahAyat}</p>
          <p>{surah?.data?.tempatTurun}</p>
          <p>{surah?.data?.arti}</p>
        </div>
        <div>
          {surah?.data?.ayat.map((el) => (
            <div key={el.id}>
              <p className="">{el.nomorAyat}</p>
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

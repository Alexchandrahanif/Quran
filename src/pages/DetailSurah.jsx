import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const DetailSurah = () => {
  const { id } = useParams();
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

  console.log(surah);

  return (
    <div className="w-full min-h-screen">
      <div>
        <div>
          <p>{surah?.data?.nama}</p>
          <p>{surah?.data?.namaLatin}</p>
          <p>{surah?.data?.jumlahAyat}</p>
          <p>{surah?.data?.tempatTurun}</p>
          <p>{surah?.data?.arti}</p>
        </div>
        <div>
          {surah?.data?.ayat.map((el) => (
            <div>
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

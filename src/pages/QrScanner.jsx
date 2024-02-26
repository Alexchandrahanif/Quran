import React, { useState, useEffect, useRef } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";

const QrScanner = () => {
  const [scanResult, setScanResult] = useState(null);

  useEffect(() => {
    const scanner = new Html5QrcodeScanner("reader", {
      qrbox: { width: 250, height: 250 },
      fps: 5,
    });

    scanner.render(success, error);

    function success(result) {
      scanner.clear();
      setScanResult(result);
    }

    function error(error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      <h1>QR Code Scanner</h1>

      {scanResult ? (
        <div>
          <p>success</p>
          <p>{scanResult}</p>
        </div>
      ) : (
        <div></div>
      )}
      <div id="reader"></div>
    </div>
  );
};

export default QrScanner;

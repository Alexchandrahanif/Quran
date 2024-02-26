import React, { useState, useEffect, useRef } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";

const QrScanner = ({ onScan }) => {
  // const videoRef = useRef(null);
  // const [cameraAllowed, setCameraAllowed] = useState(false);

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
      console.warn(error);
    }
  }, []);

  return (
    <div>
      <h1>QR Code Scanner</h1>
      {/* <div>
        {cameraAllowed ? (
          <>
            <video
              id="qr-video"
              ref={videoRef}
              width="100%"
              playsInline
              autoPlay
            ></video>
            <button onClick={() => setCameraAllowed(false)}>
              Stop Scanner
            </button>
          </>
        ) : (
          <button onClick={() => setCameraAllowed(true)}>Start Scanner</button>
        )}
      </div> */}
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

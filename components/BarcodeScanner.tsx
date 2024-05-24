//@ts-nocheck
'use client';
import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect, useRef } from "react";

const BarcodeScanner = ({ onDetected }) => {
  const scannerRef = useRef(null);

  useEffect(() => {
    const html5QrCode = new Html5QrcodeScanner(
      "reader", { fps: 10, qrbox: 250 }, false);

    html5QrCode.render(
      (text, result) => {
        onDetected(text);
      },
      (error) => {
        console.warn(`QR Code no match: ${error}`);
      }
    );

    return () => {
      html5QrCode.clear().catch(error => {
        console.error("Failed to clear html5QrcodeScanner. ", error);
      });
    };
  }, [onDetected]);

  return <div id="reader" style={{ width: "100%", height: "100%" }} ref={scannerRef}></div>;
};

export default BarcodeScanner;
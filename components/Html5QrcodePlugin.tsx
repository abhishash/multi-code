//@ts-nocheck
import React, { useState, useEffect, useRef } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';
import Modal from './modal/modal';

const QrScanner = () => {
  const [scanResult, setScanResult] = useState(null);
  const [scanning, setScanning] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const html5QrcodeScannerRef = useRef(null);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    handleResume();
  };

  useEffect(() => {
    if (scanning) {
      html5QrcodeScannerRef.current = new Html5QrcodeScanner(
        "reader",
        { fps: 10, qrbox: 250, rememberLastUsedCamera: true, showTorchButtonIfSupported: true, showZoomSliderIfSupported: true, defaultZoomValueIfSupported: 2 } ,
        false
      );

      html5QrcodeScannerRef.current.render(onScanSuccess, onScanError);

      function onScanSuccess(decodedText, decodedResult) {
        setScanResult(decodedText);
        setScanning(false);
        console.log(html5QrcodeScannerRef.current.currentScanType,"scan-type");

        if (html5QrcodeScannerRef.current.currentScanType != 1) {
          html5QrcodeScannerRef.current.pause(true); // Clear the scanner and stop the camera
        }
        // handleOpenModal();
      }

      function onScanError(errorMessage) {
        console.error(errorMessage);
      }

      return () => {
        if (html5QrcodeScannerRef.current) {
          html5QrcodeScannerRef.current.clear().catch((error) => {
            console.error("Failed to clear html5QrcodeScanner. ", error);
          });
        }
      };
    }
  }, []);

  const handleResume = () => {
    setScanning(true);
    if (html5QrcodeScannerRef.current) {
      html5QrcodeScannerRef.current.resume();
    }
  };

  return (
    <div>
        
      {scanning ? (
        <div id="reader" style={{ width: '100%' }}></div>
      ) : (
        <>
          <div>Scan complete! Result: {scanResult}</div>
          <div className="flex items-center justify-center h-screen">
            <button onClick={handleResume} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Continue
            </button>
            <Modal show={showModal} onClose={handleCloseModal} />
          </div>
        </>
      )}
    </div>
  );
};

export default QrScanner;

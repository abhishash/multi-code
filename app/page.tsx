//@ts-nocheck
'use client'
import BarcodeScanner from '@/components/BarcodeScanner';
import { useState } from 'react';


const Home = () => {
  const [barcodes, setBarcodes] = useState([]);

  const handleDetected = (barcode) => {
    setBarcodes((prevBarcodes) => [...new Set([...prevBarcodes, barcode])]);
  };

  return (
    <div>
      <h1>Multi-Barcode Scanner</h1>
      <div style={{ width: "600px", height: "400px", border: "1px solid black" }}>
        <BarcodeScanner onDetected={handleDetected} />
      </div>
      <h2>Detected Barcodes:</h2>
      <ul>
        {barcodes.map((barcode, index) => (
          <li key={index}>{barcode}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
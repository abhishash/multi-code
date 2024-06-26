//@ts-nocheck

"use client";
import BarcodeScanner from "@/components/code-scanner";
import QrScanner from "@/components/Html5QrcodePlugin";
import Html5QrcodePlugin from "@/components/Html5QrcodePlugin";
import { BarCodeIcon } from "@/components/icons/barcode-icon";
import { CameraIcon } from "@/components/icons/camera-icon";
import { FileIcon } from "@/components/icons/file-icon";
import { ScanBoxModal } from "@/components/modal/scanbox-modal";
import ResultContainerPlugin from "@/components/ResultContainerPlugin";
import Image from "next/image";
import { useState } from "react";

const Home = () => {
  
  return (
    <>
      <section className="bg-white dark:bg-gray-900 min-h-screen">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <a
            href="#"
            className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
            role="alert"
          >
            <span className="text-xs bg-primary-600 rounded-full text-white px-4 py-1.5 mr-3">
              New
            </span>{" "}
            <span className="text-sm font-medium">Webkul, Barcode scan app.</span>
            <svg
              className="ml-2 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Barcode Scanner
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            Barcode is first impression to initiative scan app.
          </p>
          <div className="flex flex-col items-center mb-8 lg:mb-16 space-y-4  sm:space-y-0 sm:space-x-4">
          <div className="App">
            <section className="App-section">
                <div className="App-section-title"> Html5-qrcode React demo</div>
                <br />
                <br />
                <br />
                <QrScanner />
            </section>
        </div>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

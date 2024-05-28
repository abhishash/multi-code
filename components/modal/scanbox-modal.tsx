import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import BarcodeScanner from "../code-scanner";
import { BarCodeIcon } from "../icons/barcode-icon";
import { CameraIcon } from "../icons/camera-icon";
import QrCodeScanner from "../code-scanner";

export function ScanBoxModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = React.useState("2xl");

  const [barcodes, setBarcodes] = useState([]);

  const handleDetected = (barcode) => {
    setBarcodes((prevBarcodes) => [...new Set([...prevBarcodes, barcode])]);
  };
  const handleOpen = () => {
    onOpen();
  };
  const [scanResult, setScanResult] = useState(null);

  const handleScanSuccess = (decodedText: any) => {
    setScanResult(decodedText);
  };

  const handleScanFailure = (errorMessage: any) => {
    console.error(`QR Code Scan Error: ${errorMessage}`);
  };

  return (
    <>
      <Button
        type="button"
        onPress={handleOpen}
        color="primary"
        className="inline-flex gap-2 justify-center items-center py-3 px-6 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
      >
        <CameraIcon />
        Scan Barcode
      </Button>

      <Modal size="2xl" isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Modal Title
              </ModalHeader>
              <ModalBody>
                <div
                // style={{
                //   width: "600px",
                //   height: "400px",
                //   border: "1px solid black",
                // }}
                >
                  <div className="dark:text-black text-white">
                      <QrCodeScanner
                        onScanSuccess={handleScanSuccess}
                        onScanFailure={handleScanFailure}
                      />
                      {scanResult && <p>Scan Result: {scanResult}</p>}
                   
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

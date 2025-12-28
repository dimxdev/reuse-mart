import { useEffect } from "react";

function QRCodePopup({ qrCodeUrl, onConfirm }) {

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);
  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 animate-fadeIn">
      <div className="bg-tema-50 rounded-lg p-8 w-[500px] mx-4 animate-scaleIn shadow-xl">
        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
          Scan QR Code untuk Pembayaran
        </h2>

        {/* QR Code Image */}
        <div className="bg-gray-50 rounded-lg p-6 mb-6 flex justify-center">
          <img
            src={
              qrCodeUrl ||
              "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=DEMO-QRIS-CODE"
            }
            alt="QR Code QRIS"
            className="w-64 h-64 object-contain"
          />
        </div>

        {/* Instructions */}
        <p className="text-gray-600 text-center mb-6">
          Silakan scan QR code menggunakan aplikasi mobile banking atau e-wallet
          Anda
        </p>

        {/* OK Button */}
        <button
          type="button"
          onClick={onConfirm}
          className="cursor-pointer w-full px-6 py-3 bg-tema-500 text-white rounded-lg font-semibold hover:bg-tema-600 transition-colors"
        >
          OK
        </button>
      </div>
    </div>
  );
}

export default QRCodePopup;

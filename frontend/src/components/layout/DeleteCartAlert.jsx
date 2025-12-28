import { useEffect } from "react";
import { useWindow } from "../../context/WindowContext";
import axiosInstance from "../../lib/axios";

function DeleteCartAlert() {
  const { handleCloseHiddenComponent, handleRefreshWindow } = useWindow();

  const handleDeleteAllCart = async () => {
    try {
        await axiosInstance.delete("/cart")
        handleCloseHiddenComponent()
        handleRefreshWindow()
    } catch (error) {
        console.log(error)
    }
  }

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 animate-fadeIn">
      <div className="bg-tema-50 rounded-lg p-8 max-w-md w-full mx-4 animate-scaleIn shadow-xl">
        {/* Icon Warning */}
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-red-600"
          >
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
            <line x1="12" y1="9" x2="12" y2="13" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-3">
          Hapus Semua Cart?
        </h2>

        {/* Message */}
        <p className="text-gray-600 text-center mb-6">
          Apakah anda yakin ingin menghapus semua item di keranjang belanja?
          Tindakan ini tidak dapat dibatalkan.
        </p>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            type="button"
            onClick={handleCloseHiddenComponent}
            className="cursor-pointer flex-1 px-4 py-3 bg-gray-200 text-gray-800 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
          >
            Batal
          </button>
          <button
            type="button"
            onClick={handleDeleteAllCart}
            className="flex-1 cursor-pointer px-4 py-3 bg-red-600 text-white  rounded-lg font-semibold hover:bg-red-700 transition-colors"
          >
            Ya, Hapus Semua
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteCartAlert;

import { useNavigate } from "react-router";

function ForbiddenPage() {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-tema-100 absolute z-10">
      <div className="max-w-md w-full mx-4">
        <div className="bg-white px-8 py-12 flex flex-col gap-6 items-center justify-center rounded-2xl shadow-xl">
          <div className="relative">
            <h1 className="font-dimas text-9xl text-tema-600 opacity-20">403</h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-6xl">🧟‍♂️</span>
            </div>
          </div>

          <div className="text-center space-y-1 font-mono">
            <h2 className="font-bold text-2xl text-tema-400">
              Kamu Gak Punya Izin
            </h2>
            <p className="text-tema-700">
              Maaf, halaman yang Anda minta tidak boleh anda akses silakan kembali ke halaman beranda.
            </p>
          </div>

          <div className="flex gap-3 w-full mt-4">
            <button
              className="flex-1 bg-gray-200 text-gray-700 px-4 py-3 rounded-lg font-medium hover:bg-gray-300 transition-all duration-200"
              onClick={() => navigate(-1)}
            >
              Kembali
            </button>
            
            <button
              className="flex-1 bg-tema-600 text-white px-4 py-3 rounded-lg font-medium hover:bg-tema-300 transition-all duration-200"
              onClick={() => navigate('/')}
            >
              Beranda
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForbiddenPage;

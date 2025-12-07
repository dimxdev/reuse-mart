import { ArrowLeft, HandHeart } from "lucide-react";
import { useForm } from "react-hook-form";
import UseBack from "../hooks/UseBack";
import useLogin from "../api/useLogin";

function Login() {
  const form = useForm();
  const { handleBack } = UseBack();
  const { handleSubmitLogin, emailError, loginLoading, passwordError } = useLogin();

  return (
    <div>
      <div className="mt-3 ml-3 absolute">
        <button
          onClick={handleBack}
          className="hover:bg-tema-500 bg-tema-100 shadow-lg hover:shadow-xl hover:text-white px-3 py-2 rounded-lg cursor-pointer flex gap-2 text-sm items-center transition-all group"
        >
          <ArrowLeft className="group-hover:text-white w-5 h-5" /> Kembali
        </button>
      </div>

      <div className="w-full min-h-screen flex items-center justify-center">
        <form
          onSubmit={form.handleSubmit(handleSubmitLogin)}
          className="bg-tema-200 px-7 py-7 pb-10 rounded-md shadow-lg"
        >
          <div className="flex flex-col gap-1 justify-center items-center">
            <div className="bg-tema-400 px-4 py-4 rounded-full mr-1">
              <HandHeart className="w-10 h-10 text-white" />
            </div>
            <div className="text-center">
              <h1 className="text-2xl font-playfair-display font-bold text-tema-900">
                Login
              </h1>
              <h1 className="text-tema-600">Selamat datang kembali!</h1>
            </div>
          </div>

          <label className="pembungkus-label-input mt-7 text-tema-900">
            Email
            <input
              type="text"
              className="input"
              placeholder="customer@gmail.com"
              {...form.register("email")}
            />
            <h1 className="pl-1 text-sm text-red-500">{emailError}</h1>
          </label>
          <label className="pembungkus-label-input mt-4 text-tema-900">
            Password
            <input
              type="password"
              className="input placeholder:text-5xl placeholder:pb-2 "
              placeholder="......."
              {...form.register("password")}
            />
            <h1 className="pl-1 text-sm text-red-500">{passwordError}</h1>
          </label>
          <button className="w-full bg-tema-400 rounded-xl mt-4 px-3 py-2 hover:bg-tema-600 transition-all cursor-pointer text-tema-950">
            Masuk
          </button>
          {loginLoading && (
            <div className="animate-pulse font-bold mt-3 text-tema-900 transition-all duration-100">
              Loading...
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default Login;

import { ArrowLeft, ClipboardPenLine } from "lucide-react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import useRegister from "../api/useRegister";
import registerFormSchema from "../validation/registerFormValidation";
import Loading from "../components/atom/Loading";

function Register() {
  const form = useForm({
    resolver: zodResolver(registerFormSchema),
  });
  const navigate = useNavigate();
  const { handleSubmitRegister, isRegisterLoading, emailError, setEmailError } =
    useRegister();

  const emailValue = form.watch("email");

  useEffect(() => {
    setEmailError("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [emailValue]);

  return (
    <div>
      <div className="mt-3 ml-3 absolute">
        <button
          onClick={() => navigate("/login")}
          className="hover:bg-tema-500 bg-tema-100 shadow-lg hover:shadow-xl hover:text-white px-3 py-2 rounded-lg cursor-pointer flex gap-2 text-sm items-center transition-all group"
        >
          <ArrowLeft className="group-hover:text-white w-5 h-5" /> Kembali
        </button>
      </div>

      <div className="w-full min-h-screen flex items-center justify-center">
        <form
          onSubmit={form.handleSubmit(handleSubmitRegister)}
          className="bg-tema-200 px-7 py-7 pb-10 rounded-md shadow-lg"
        >
          <div className="flex flex-col gap-1 justify-center items-center">
            <div className="bg-tema-400 px-4 py-4 rounded-full mr-1">
              <ClipboardPenLine className="w-10 h-10 text-white" />
            </div>
            <div className="text-center">
              <h1 className="text-2xl font-playfair-display font-bold text-tema-900">
                Register
              </h1>
              <h1 className="text-tema-600">Buat akun baru</h1>
            </div>
          </div>

          <label className="pembungkus-label-input mt-5 text-tema-900">
            Username
            <input
              type="text"
              className="input"
              placeholder="customer1"
              {...form.register("username")}
            />
            <h1 className="pl-1 text-sm text-red-500">
              {form.formState.errors.username?.message}
            </h1>
          </label>
          <label className="pembungkus-label-input mt-4 text-tema-900">
            Email
            <input
              type="text"
              className="input"
              placeholder="customer@gmail.com"
              {...form.register("email")}
            />
            <h1 className="pl-1 text-sm text-red-500">
              {form.formState.errors.email?.message}
            </h1>
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
            <h1 className="pl-1 text-sm text-red-500">
              {form.formState.errors.password?.message}
            </h1>
          </label>
          <button className="w-full bg-tema-400 rounded-xl mt-4 px-3 py-2 hover:bg-tema-600 transition-all cursor-pointer text-tema-950">
            Register
          </button>
          <div className="mt-2 text-center pr-3">
            <h1 className="text-tema-600">
              Sudah punya akun?{" "}
              <Link to="/login">
                <span className="text-tema-950 hover:font-bold transition-all">
                  Login di sini
                </span>
              </Link>{" "}
            </h1>
          </div>

          {isRegisterLoading && <Loading />}
        </form>
      </div>
    </div>
  );
}

export default Register;

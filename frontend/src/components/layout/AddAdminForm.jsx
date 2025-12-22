import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import Loading from "../atom/Loading";
import axiosInstance from "../../lib/axios";

function AddAdminForm({ onClose }) {
  const form = useForm();
  const [addAdminLoading, setAddAdminLoading] = useState(false);
  const [addAdminError, setAddAdminError] = useState("");

  const handleAddAdmin = async (values) => {
    try {
      setAddAdminLoading(true);
      setAddAdminError("");

      await axiosInstance.post("/auth/register/admin", {
        name: values.username,
        email: values.email,
        password: values.password,
      });

      setAddAdminLoading(false);
    } catch (error) {
      setAddAdminError(error.response.data.error);
    } finally {
      setAddAdminLoading(false);
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="w-full h-full min-h-screen bg-black/50 flex justify-center items-center fixed inset-0 z-10">
      <div className="bg-tema-100 rounded-md w-[500px] px-8 py-8 overflow-y-auto max-h-[90vh] animate-scale-in">
        <h1 className="text-2xl font-bold font-playfair-display">
          Form Tambah Admin
        </h1>
        <form onSubmit={form.handleSubmit(handleAddAdmin)}>
          <label className="pembungkus-label-input mt-5 text-tema-900">
            Username
            <input
              type="text"
              className="input w-full"
              placeholder="Contoh: Admin 1"
              {...form.register("username")}
            />
          </label>
          <label className="pembungkus-label-input mt-5 text-tema-900">
            Email
            <input
              type="text"
              className="input w-full"
              placeholder="admin1@gmail.com"
              {...form.register("email")}
            />
          </label>
          <label className="pembungkus-label-input mt-5 text-tema-900">
            Password
            <input
              type="password"
              className="input w-full placeholder:text-5xl placeholder:pb-2 "
              placeholder="......."
              {...form.register("password")}
            />
            {addAdminLoading && <Loading />}
            <h1 className="pl-1 mt-2 text-sm text-red-500">{addAdminError}</h1>
          </label>

          <div className="flex gap-2 justify-end mt-4">
            <button onClick={onClose} className=" bg-white rounded-xl mt-4 px-4 py-2 hover:bg-tema-400 transition-all cursor-pointer text-tema-950">
              Batal
            </button>
            <button className=" bg-tema-400 rounded-xl mt-4 px-3 py-2 hover:bg-tema-600 transition-all cursor-pointer text-tema-950">
              Add Admin
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddAdminForm;

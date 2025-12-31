import z from "zod";

const registerFormSchema = z.object({
  username: z
    .string({ message: "format harus string" })
    .min(3, { message: "username minimal 3 karakter" })
    .max(15, { message: "username maximal 10 karakter" }),
  email: z
    .string()
    .min(1, { message: "email tidak boleh kosong" })
    .email({ message: "format email tidak valid" }),
  password: z.string().min(8, { message: "password minimal 8 karakter" }),
});

export default registerFormSchema
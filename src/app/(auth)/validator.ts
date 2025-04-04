import { z } from "zod";

export const schema = z.object({
  email: z.string().min(1, "Email обязателен").email("Некорректный email"),
  password: z
    .string()
    .min(8, "Не менее 8 символов")
    .max(18, "Не более 18 символов")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&()-_])[A-Za-z\d@$!%*?&()-_]{8,}$/,
      "Пароль должен содержать хотя бы одну заглавную, одну строчную букву, одну цифру и один из специальных символов @$!%*?&()-_"
    ),
});

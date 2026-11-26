import z from "zod";

export const registerschema = z.object({
    name: z.string().min(3, "Name must contain atleast 3 letters"),
    email: z.string().email("Enter valid email"),
    password: z.string().min(8, "Password length should be atleast 8"),
    age: z.coerce.number().min(18, "Age must be atleast 18")
})
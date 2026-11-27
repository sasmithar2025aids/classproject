import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { registerschema } from "../components/FormSchema/registerschema";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Register() {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: zodResolver(registerschema)
    });

    function onSubmit1(data) {
        console.log(data);
        alert("Registration successful");

        navigate("/login", {
            state: data
        });
    }

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit(onSubmit1)}>
                <h2>Register</h2>
                <p>Create Your Account</p>

                <input
                    type="text"
                    placeholder="Enter your name"
                    {...register("name")}
                />
                <p>{errors.name?.message}</p>

                <input
                    type="email"
                    placeholder="Enter your email"
                    {...register("email")}
                />
                <p>{errors.email?.message}</p>

                <input
                    type="password"
                    placeholder="Enter your password"
                    {...register("password")}
                />
                <p>{errors.password?.message}</p>

                <input
                    type="number"
                    placeholder="Enter your age"
                    {...register("age")}
                />
                <p>{errors.age?.message}</p>

                <button type="submit">Register.</button>
            </form>
        </div>
    );
}

export default Register;
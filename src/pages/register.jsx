import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { registerschema } from "../components/FormSchema/registerschema";
import { useNavigate } from "react-router-dom";

function Register() {
    const navigate = useNavigate();
    const{register, handleSubmit, formState:{errors}} = useForm({
        resolver: zodResolver(registerschema)
    })
    function onSubmit1(data){
        console.log(data)
        alert("Registration successful")
        navigate("/")
    }
    return(
        <>
            <form onSubmit={handleSubmit(onSubmit1)}>
            <input type="text" placeholder="Enter your name:" {...register("name")}/>
            <p>{errors.name?.message}</p>
            <input type="email" placeholder="Enter your email:" {...register("email")}/>
            <p>{errors.email?.message}</p>
            <input type="password" placeholder="Enter your password:" {...register("password")}/>
            <p>{errors.password?.message}</p>
            <input type="number" placeholder="Enter your age:" {...register("age")}/>
            <p>{errors.age?.message}</p>
            <button type="submit">Button</button>
        </form>
        </>
    );
}

export default Register;
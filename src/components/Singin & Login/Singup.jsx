import { useState } from "react";
import { Typography, Input } from "@material-tailwind/react";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import { useDispatch } from "react-redux";
import { authActions } from "../../store";

function Basic() {
    const dispatch = useDispatch(); // Fixed typo
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisibility = () => setPasswordShown((cur) => !cur);
    const [isSignUp, setIsSignUp] = useState(false);
    const [input, setInputs] = useState({
        name: "",
        email: "",
        password: ""
    });

    const sendRequest = async (type = "login") => {
        try {
            const res = await axios.post(`http://localhost:5000/api/user/${type}`, {
                name: input.name,
                email: input.email,
                password: input.password
            });
            return res.data; // Return the response data
        } catch (err) {
            console.error("Error during request:", err);
            return null; // Return null if the request fails
        }
    };

    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form submitted:", input);

        if (isSignUp) {
            const data = await sendRequest("signup"); // Fixed typo
            if (data) {
                dispatch(authActions.login());
                console.log("Signup Successful:", data);
            }
        } else {
            const data = await sendRequest("login");
            if (data) {
                dispatch(authActions.login());
                console.log("Login Successful:", data);
            }
        }
    };

    return (
        <div>
            <section className="flex justify-center text-center h-screen items-center">
                <div className="p-8 shadow-2xl rounded-2xl w-[350px]">
                    <Typography variant="h3" color="blue-gray" className="mb-2 text-xl">
                        {isSignUp ? "Sign Up" : "Login"}
                    </Typography>

                    <form onSubmit={handleSubmit} className="mx-auto max-w-[24rem] text-left">
                        {isSignUp && (
                            <div className="mb-6">
                                <label htmlFor="name">
                                    <Typography
                                        variant="small"
                                        className="mb-2 block font-medium text-gray-900"
                                    >
                                        Your Name
                                    </Typography>
                                </label>
                                <Input
                                    id="name"
                                    color="gray"
                                    size="lg"
                                    type="text"
                                    name="name"
                                    onChange={handleChange}
                                    value={input.name}
                                    placeholder="John Doe"
                                    className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                                    labelProps={{
                                        className: "hidden",
                                    }}
                                />
                            </div>
                        )}
                        <div className="mb-6">
                            <label htmlFor="email">
                                <Typography
                                    variant="small"
                                    className="mb-2 block font-medium text-gray-900"
                                >
                                    Your Email
                                </Typography>
                            </label>
                            <Input
                                id="email"
                                color="gray"
                                size="lg"
                                type="email"
                                name="email"
                                onChange={handleChange}
                                value={input.email}
                                placeholder="name@mail.com"
                                className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                                labelProps={{
                                    className: "hidden",
                                }}
                            />
                        </div>
                        <div className="mb-6 relative">
                            <label htmlFor="password">
                                <Typography
                                    variant="small"
                                    className="mb-2 block font-medium text-gray-900"
                                >
                                    Password
                                </Typography>
                            </label>
                            <Input
                                id="password"
                                name="password"
                                size="lg"
                                placeholder="********"
                                onChange={handleChange}
                                value={input.password}
                                labelProps={{
                                    className: "hidden",
                                }}
                                className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                                type={passwordShown ? "text" : "password"}
                            />
                            <i
                                onClick={togglePasswordVisibility}
                                className="absolute right-4 top-4 cursor-pointer"
                            >
                                {passwordShown ? (
                                    <EyeIcon className="h-5 w-5 mt-6" />
                                ) : (
                                    <EyeSlashIcon className="h-5 w-5 mt-6" />
                                )}
                            </i>
                        </div>
                        <button type="submit" className="w-full text-lg bg-slate-800 text-white py-2 rounded-lg">
                            {isSignUp ? "Sign Up" : "Login"}
                        </button>

                        <Typography
                            variant="small"
                            color="gray"
                            className="!mt-4 text-center font-normal"
                        >
                            Not registered?{" "}
                            <button
                                type="button"
                                onClick={() => setIsSignUp((prev) => !prev)}
                            >
                                Change To {isSignUp ? "Login" : "Sign Up"}
                            </button>
                        </Typography>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default Basic;

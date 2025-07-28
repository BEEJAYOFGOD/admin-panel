import { useState } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Login attempt:", { email, password });
        // Handle login logic here
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-400 via-blue-500 to-teal-400 animate-gradient-x">
            <section className="bg-white/95 backdrop-blur-sm rounded-md shadow-2xl p-8 w-full max-w-xl mx-4">
                <div className="text-center mb-24">
                    <h1 className="text-2xl font-bold text-gray-800 mb-2">
                        Login
                    </h1>
                    <p className="text-gray-600 text-sm">
                        Provide email and password to access admin panel
                    </p>
                </div>

                <div className="space-y-6">
                    <div>
                        <div className="block text-sm font-medium text-gray-700 mb-2">
                            Email address
                        </div>
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email Address"
                                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 bg-gray-50/50"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="block text-sm font-medium text-gray-700 mb-2">
                            Password
                        </div>
                        <div className="relative">
                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                                className="w-full pl-12 pr-12 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 bg-gray-50/50"
                            />
                            <button
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                {showPassword ? (
                                    <EyeOff className="w-5 h-5" />
                                ) : (
                                    <Eye className="w-5 h-5" />
                                )}
                            </button>
                        </div>
                    </div>

                    <div className="text-right">
                        <button
                            onClick={() =>
                                console.log("Forgot password clicked")
                            }
                            className="text-sm text-gray-500 hover:text-blue-600 transition-colors"
                        >
                            Forgot password?
                        </button>
                    </div>

                    <button
                        onClick={handleSubmit}
                        className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transform hover:scale-[1.02] transition-all duration-200 shadow-lg"
                    >
                        Login
                    </button>
                </div>
            </section>
        </div>
    );
}

import { useState } from "react";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const sendAuthData = async () => {
        if (!email || !password) {
            console.error("Email and password are required.");
            return;
        }

        const authData = {
            email: email,
            password: password
        };
        console.log(authData)
        try {
            const response = await fetch("http://localhost:8080/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(authData)
            });

            if (response.ok) {
                const responseData = await response.json();
                console.log("Data sent successfully:", responseData);
            } else {
                const errorData = await response.json();
                console.error("Error response:", errorData);
            }
        } catch (error) {
            console.error("Error sending data:", error);
        }
    };

    return (
        <div>
            <input
                type="text"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
            />
            <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            <button onClick={sendAuthData}>Login</button>
        </div>
    );
}

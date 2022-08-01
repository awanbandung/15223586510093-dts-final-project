import { useEffect } from "react";

// CHECK IF USER HAS LOGGED IN
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

// Untuk bisa menggunakan useAuthState, kita membutuhkan auth
import { auth } from "../../apis/firebase";

export const LoggedInComponent = ({ children }) => {
    // Kita gunakan hooksnya di sini
    const navigate = useNavigate();

    // Karena di sini kita hanya mengecek dari user, kita hanya gunakan [user] saja
    const [user, isLoading] = useAuthState(auth);

    useEffect(() => {
        // Di sini kita akan membuat logic, apabila user tidak ada (null), maka akan kita
        // "paksa" ke halaman login
        if (!user) {
            navigate("/register");
            return;
        }
    }, [user, navigate]);

    // Apabila kondisinya masih dalam tahap loading, kita berikan halaman kosong
    if (isLoading) {
        return;
    } else {
        // Bila tidak isLoading (berarti sudah selesai)
        // Kita kembalikan children yang ingin dirender
        return children;
    }
}

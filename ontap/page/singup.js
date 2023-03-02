import axios from "axios";
import { router, useEffect } from "../lib";

const formDk = () => {
    useEffect(() => {
        const singup = document.querySelector("#singup");
        const name = document.querySelector("#user-name");
        const password = document.querySelector("#password");
        singup.addEventListener("submit", function (e) {
            e.preventDefault();
            const newData = {
                name: name.value,
                password: password.value
            }
            if (!name.value || !password.value) {
                alert("ko ddeert tông");
                return false;
            } else {
                alert("Đawenhg kí thành công")
            }
            axios.post("http://localhost:3000/users", newData)
                .then(() => router.navigate("/login"))


        })
    })
    return `
    
    <form action="" class="container" id="singup">
    <h1>Đăng kí tài khoản</h1>
    <label for="">Name</label>
    <input type="text" id="user-name" class="form-control">
    <label for="">mật khẩu</label>
    <input type="text" id="password" class="form-control">
    <button class="btn btn-login btn-primary">Đăng kí</button>
    <a class="nav navbar-nav" href="/login">Đăng nhập</a>
    </form>
    `;
}
export default formDk;
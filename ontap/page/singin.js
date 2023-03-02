
import axios from "axios";
import { router, useEffect } from "../lib";
const formLogin = () => {
    useEffect(() => {
        axios.get('http://localhost:3000/users')
            .then((response) => {
                const users = response.data;
                const form = document.querySelector("#form");
                const name = document.querySelector("#user-name");
                const password = document.querySelector("#password");
                form.addEventListener("submit", function (e) {
                    e.preventDefault();
                    const user = users.find((u) => u.name === name.value && u.password === password.value);
                    if (!user) {
                        alert("Thông tin tìa khoản mật khẩu không chính xác !");
                    } else {
                        alert("đăng nhập thành công")
                        router.navigate("/")
                    }
                })
            })
    }, [])

    return `
    <form action="" class="container" id="form">
    <h1>Chào mừng đêwsn đăneg nhập</h1>
    <label for="">Name</label>
    <input type="text" id="user-name" class="form-control">
    <label for="">mật khẩu</label>
    <input type="text" id="password" class="form-control">
    <button class="btn btn-login btn-primary">Đăng nhập</button>
    <a href="/singup">Đăng kí</a>
    </form>
    
    `;
}
export default formLogin;
import { useEffect, useState } from "../lib";
import axios from "axios";

const listProduct = () => {
  const [products, setproduct] = useState([])
  useEffect(() => {
    axios.get("http://localhost:3000/products")
      .then(({ data }) => setproduct(data))
  }, [])
  useEffect(() => {
    const btnRemove = document.querySelectorAll(".btn-remove");
    for (let btn of btnRemove) {
      btn.addEventListener("click", function () {
        const id = btn.dataset.id;
        const confim = window.confirm("Bạn có chắc chắn muốn xóa k?");
        if (confim) {
          axios.delete(`http://localhost:3000/products/${id}`)
            .then(() => {
              const newProduct = products.filter((products) => products.id != id)
              setproduct(newProduct);
              alert("Xoa Thanh cong")
            })

        }

      })

    }

  })

  return `
  <div class="container">
  <h2>Thông tin sản phẩm</h2>
  <table class="table table-bordered">
    <thead>
      <tr>
        <th>STT</th>
        <th>Tên Sản phẩm</th>
        <th>Mô tả</th>
        <th>Giá</th>
        <th>Hình ảnh</th>
        <th></th>
      </tr>
      </tr>
    </thead>
    <tbody>
    ${products.map((products, index) => {
    return `<tr>
      <td>${index + 1}</td>
      <td>${products.name}</td>
      <td>${products.des}</td>
      <td>${products.price}</td>
      <td><img src="${products.img}" width='200px'></td>
      <td></td>
      <td>
        <button  data-id = "${products.id}" class="btn btn-remove btn-danger">Remove</button>
        <a href="/${products.id}/edit" class="btn btn-update btn-danger">Sửa</a>
      </td>
    </tr>`

  }).join("")}
    </tbody>
  </table>
</div>`
}
export default listProduct
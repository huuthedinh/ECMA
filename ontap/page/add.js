import axios from "axios";
import { useEffect, router } from "../lib";
import * as yup from "yup";


const AddProduct = () => {
    const schema = yup.object().shape({
        name: yup.string().required("Vui lòng nhập tên"),
        des: yup.string().required("Vui lòng nhập mô tả"),
        price: yup.string().required("Vui lòng nhập giá"),

    });

    useEffect(() => {
        const form = document.querySelector("#form-add");
        const Name = document.querySelector("#form-name");
        const Des = document.querySelector("#form-des");
        const Price = document.querySelector("#form-price");
        const Img = document.querySelector("#form-img");

        form.addEventListener("submit", async function (e) {
            e.preventDefault();
            const urls = await uploadFiles(Img.files);

            schema.validate({
                name: Name.value,
                des: Des.value,
                price: Price.value,

            })
                .then(() => {
                    const newData = {
                        name: Name.value,
                        des: Des.value,
                        price: Price.value,
                        img: urls,
                    };
                    axios.post("http://localhost:3000/products", newData)
                        .then(() => {
                            router.navigate("/")
                            alert("Thêm thành công")
                        })
                    //.catch((error) => alert(error.message));
                })
                .catch((error) => alert(error.message));
        });
    });
    const uploadFiles = async (files) => {
        if (files) {
            const CLOUD_NAME = "dvg4a5rbv";
            const PRESET_NAME = "demo_upload";
            const FOLDER_NAME = "ECMA";
            const urls = [];
            const api = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;
            const formData = new FormData();
            formData.append("upload_preset", PRESET_NAME);
            formData.append("folder", FOLDER_NAME);
            for (const file of files) {
                formData.append("file", file);
                const response = await axios.post(api, formData, {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    },
                });
                urls.push(response.data.secure_url);
            }
            return urls;
        }
    };
    return ` <div class="container">
    <h1>Thêm thông tin</h1>
    <form action="" id="form-add" class="">
      <label for="" class="form-lable">Name</label>
      <input type="text" id="form-name" class="form-control">
      <label for="">Mô tả</label>
      <input type="text" id="form-des" class="form-control">
      <label for="">price</label>
      <input type="text" id="form-price" class="form-control"> 
      <label for="">img</label>
      <input type="file" id="form-img" class="form-control"> 
      <button class="btn btn-primary">Thêm</button>
    </form>
  </div>
        `
}
export default AddProduct
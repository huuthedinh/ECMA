
import { useEffect, useState } from "../lib";

const ContactFage = () => {
    const [profiles, setProfiles] = useState([])
    useEffect(() => {
        fetch("http://localhost:3000/profiles")
            .then((response) => response.json())
            .then((data) => setProfiles(data))
    }, [])
    return `
    <div class="contact-product text-primary m-3 ">
        <h2 class="fs-3">Liên hệ</h2>
        <div class="contacts-item d-flex p-2">
        ${profiles.map((profile) => `
                <div class="ps-3 flex-fill">
                    <p>Họ tên : ${profile.name}</p>
                    <p>Email : ${profile.email}</p>
                    <p>Địa chỉ : ${profile.address}</p>
                    <p>Số điện thoại : ${profile.phone}</p>
                </div>
               <div class="flex-fill">        
                    <p>Giới tính : ${profile.sex}</p>
                    <p>Facebook :</p>
                    <p>Ngày sinh : ${profile.date}</p>
                    <p>Nghề nghiệp : ${profile.job}</p>      
               </div>
            `).join("")
        }
        </div>
    </div>
    `;
}
export default ContactFage;
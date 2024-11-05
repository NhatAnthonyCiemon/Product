const btn_submit = document.querySelector(".btn");

function checkValidInput(name, email, password, repassword) {
    if (name == "") {
        alert("Vui lòng nhập tên");
        return false;
    } else if (email == "") {
        alert("Vui lòng nhập email");
        return false;
    } else if (password == "") {
        alert("Vui lòng nhập mật khẩu");
        return false;
    } else if (repassword == "") {
        alert("Vui lòng nhập lại mật khẩu");
        return false;
    } else if (password != repassword) {
        alert("Mật khẩu không khớp");
        return false;
    } else {
        return true;
    }
}

btn_submit.addEventListener("click", async () => {
    this.disabled = true;
    const name = document.querySelector(".name").value;
    const email = document.querySelector(".email").value;
    const password = document.querySelector(".password").value;
    const repassword = document.querySelector(".repassword").value;
    if (checkValidInput(name, email, password, repassword)) {
        alert("Đăng kí thành công");
        try {
            let res = await fetch("/signup/create", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    password: password,
                }),
            });
            res = await res.json();
            console.log(res.error);
            if (res.error) {
                alert("Lỗi đăng kí");
                this.disabled = false;
                return;
            }

            window.location.href = "/";
        } catch (error) {
            console.log(error);
        }
    }
});

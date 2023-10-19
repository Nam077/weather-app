$(document).ready(function () {
    const loginForm = $("#loginForm");

    loginForm.on("submit", function (e) {
        e.preventDefault(); // Ngăn chặn việc gửi biểu mẫu mặc định

        // Lấy giá trị từ các trường input
        const email = $("#email").val();
        const password = $("#password").val();

        // Khởi tạo một biến lưu thông báo lỗi (ban đầu là rỗng)
        let errorMessage = "";

        // Kiểm tra xem email và mật khẩu có hợp lệ hay không và ghi nhận lỗi (nếu có)
        if (!validateEmail(email)) {
            errorMessage += "Email không hợp lệ.<br>";
        }

        if (!validatePassword(password)) {
            errorMessage += "Mật khẩu phải có ít nhất 6 ký tự.<br>";
        }

        // Kiểm tra xem có lỗi không
        if (errorMessage !== "") {
            // Hiển thị thông báo lỗi tùy chỉnh bằng SweetAlert2
            Swal.fire({
                icon: 'error',
                title: 'Lỗi!',
                html: errorMessage, // Hiển thị lỗi dưới dạng HTML
            });
        } else {
            // Dữ liệu hợp lệ, bạn có thể gửi biểu mẫu hoặc thực hiện các xử lý khác ở đây
            // Ví dụ: gửi biểu mẫu bằng AJAX
            Swal.fire({
                icon: 'success',
                title: 'Thành công!',
                text: 'Đăng nhập thành công!',
            });
            const timeOut = setTimeout(function () {
                window.location.href = 'index.html';
            }, 2000);
        }
    });

    // Hàm kiểm tra định dạng email
    function validateEmail(email) {
        // Đây chỉ là một ví dụ đơn giản, bạn có thể sử dụng kiểm tra email phức tạp hơn
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Hàm kiểm tra định dạng mật khẩu (ví dụ: ít nhất 6 ký tự)
    function validatePassword(password) {
        return password.length >= 6;
    }
});

$(document).ready(function () {
    const registerForm = $("#register-form");

    registerForm.on("submit", function (e) {
        e.preventDefault(); // Ngăn chặn việc gửi biểu mẫu mặc định

        // Lấy giá trị từ các trường input
        const fullname = $("#fullname").val();
        const email = $("#email").val();
        const password = $("#password").val();
        const confirmPassword = $("#confirm_password").val();
        const agreeTerms = $("#agree_terms").is(":checked");

        // Khởi tạo một biến lưu thông báo lỗi (ban đầu là rỗng)
        let errorMessage = "";

        // Kiểm tra xem các trường đã được điền đầy đủ hay không và ghi nhận lỗi (nếu có)
        if (fullname.trim() === "") {
            errorMessage += "Họ và tên không được để trống.<br>";
        }

        if (!validateEmail(email)) {
            errorMessage += "Email không hợp lệ.<br>";
        }

        if (!validatePassword(password)) {
            errorMessage += "Mật khẩu phải có ít nhất 6 ký tự.<br>";
        }

        if (password !== confirmPassword) {
            errorMessage += "Mật khẩu xác nhận không khớp.<br>";
        }

        if (!agreeTerms) {
            errorMessage += "Bạn phải đồng ý với các điều khoản để đăng ký.<br>";
        }

        // Kiểm tra xem có lỗi không
        if (errorMessage !== "") {
            // Hiển thị thông báo lỗi tùy chỉnh bằng SweetAlert2
            Swal.fire({
                icon: 'error',
                title: 'Lỗi!',
                html: errorMessage, // Hiển thị lỗi dưới dạng HTML
            });
        } else {
            Swal.fire({
                icon: 'success',
                title: 'Thành công!',
                text: 'Đăng ký thành công!',
            });
            const timeOut = setTimeout(function () {
                window.location.href = 'index.html';
            }
                , 2000);
        }
    });

    // Hàm kiểm tra định dạng email
    function validateEmail(email) {
        // Đây chỉ là một ví dụ đơn giản, bạn có thể sử dụng kiểm tra email phức tạp hơn
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Hàm kiểm tra định dạng mật khẩu (ví dụ: ít nhất 6 ký tự)
    function validatePassword(password) {
        return password.length >= 6;
    }
});
// login.js
// Logic kiểm tra đăng nhập đơn giản

function checkLogin(user, pass) {
  if (user === 'admin' && pass === '1234') {
    return true;
  }
  return false;
}

// Hỗ trợ cả 2 môi trường: trình duyệt (dùng trực tiếp trong index.html)
// và Node.js / Jest (dùng require để test)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { checkLogin };
}

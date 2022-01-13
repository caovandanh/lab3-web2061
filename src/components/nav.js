const Nav = {
    render() {
        return /* html */`
        <nav>
            <ul class="flex">
                <li><a href="/" class="block py-3 px-4 text-white hover:bg-blue-500">Trang chủ</a></li>
                <li><a href="/about" class="block py-3 px-4 text-white hover:bg-blue-500">Liên hệ</a></li>
                <li><a href="/signup" class="block py-3 px-4 text-white hover:bg-blue-500">Đăng ký</a></li>
                <li><a href="/signin" class="block py-3 px-4 text-white hover:bg-blue-500">Đăng nhập</a></li>
            </ul>
        </nav>`;
    },
};
export default Nav;
import { ShoppingCart } from "lucide-react";
interface Headerprop { pageName: string; showCart: boolean;  
          setShowCart: (value: boolean) => void;}

//TODO: 1) เพิ่ม showCart และ setShowCart ในพารามิเตอร์ของ Header
function Header({ pageName, showCart, setShowCart }: Headerprop) {
  return (
    <>
      <header className="bg-black text-white py-4 sticky top-0">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="flex-shrink-0  cursor-pointer flex items-center">
            <span className="material-icons text-cyan-200 text-5xl md:text-6xl">
              auto_stories
            </span>
            {/* ถ้าหน้าจอเล็กกว่า (md) ไม่แสดงชื่อร้าน */}
            <span className="text-xl md:text-2xl font-semibold text-cyan-300 ml-2 hidden md:block">
              ComSci Book Shop
            </span>
          </div>
          {/* หน้าจอขนาดใหญ่ (sm) ขึ้นไป ให้แสดงเมนูเป็นข้อความ */}
          <nav className="font-semibold hidden sm:flex text-lg">
            <ul className="flex space-x-4  items-center">
              <li
                className={`mr-6 p-1 ${
                  pageName === "Home"
                    ? "border-b-2 border-cyan-400"
                    : ""
                }`}
              >
                <a
                  className={`hover:text-cyan-400 ${
                    pageName === "Home"
                      ? "cursor-default  text-cyan-400"
                      : "text-white"
                  }`}
                  href="#"
                >
                  Home
                </a>
              </li>
              <li
                className={`mr-6 p-1 ${
                  pageName === "Books"
                    ? "border-b-2 border-cyan-400"
                    : ""
                }`}
              >
                <a
                  className={`hover:text-cyan-400 ${
                    pageName === "Books"
                      ? "cursor-default  text-cyan-400"
                      : "text-white"
                  }`}
                  href="#"
                >
                  Books
                </a>
              </li>
              <li className="mr-6 p-1">
                <a className="text-white hover:text-cyan-400" href="#">
                  New Arrivals
                </a>
              </li>
              <li className="mr-6 p-1">
                <a className="text-white hover:text-cyan-400" href="#">
                  About Us
                </a>
              </li>
              <li className="mr-6 p-1">
                <button
                  // TODO: 2) เพิ่ม event ให้กับปุ่ม โดยเมื่อคลิกปุ่มจะเปลี่ยนค่าของ showCart โดยใช้ฟังก์ชัน setShowCart
                  onClick={() => setShowCart(!showCart)}
                  className="px-4 py-2 border-2 border-blue-500 hover:text-black text-white bg-blue-500  hover:bg-cyan-400  rounded-md transition-colors duration-200"
                >
                  <ShoppingCart size={25} />
                </button>
              </li>
            </ul>
          </nav>
          {/* ถ้าหน้าจอเล็กมาก (sm) ให้แสดงเมนูเป็น icon เมนู (hamburger menu) */}
          <div className="mr-6 sm:hidden">
            <span className="text-cyan-300 focus:outline-none material-icons text-3xl">
              menu
            </span>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;

import { Plus, Minus, Trash2 } from "lucide-react";
import CartItem from "../types/CartItem";

// ! เพิ่มหรือแก้ไข code ในส่วนที่มี TODO ตามที่โจทย์กำหนดจำนวน 10 จุด (TODO: 1 - 10)

// TODO: 1) สร้าง type หรือ interface ชื่อ CartDetailProps สำหรับรับ props ที่จำเป็นสำหรับการแสดงข้อมูลหนังสือในตะกร้า
type CartDetailProps = {
  cartItem: CartItem;
  updateQuantity: (bookId: number, change: number) => void;
  removeFromCart: (bookId: number) => void;
};

// TODO: 2) รับ props มาจาก Cart.tsx ดังนี้
//  cartItem ข้อมูลของหนังสือในตะกร้า (1 เล่มที่กำลังนำมาแสดง)
//  updateQuantity เป็นฟังก์ชันที่ใช้ในการเปลี่ยนจำนวนหนังสือในตะกร้า (เล่มนั้นๆ)
//  removeFromCart เป็นฟังก์ชันที่ใช้ในการลบหนังสือออกจากตะกร้า (เล่มนั้นๆ)
function CartDetail({ cartItem, updateQuantity, removeFromCart}: CartDetailProps) {
  return (
    <div className="flex  justify-between items-start py-2 border-b">
      <div className="flex-col items-end gap-2 hidden md:flex">
        {/* TODO: 3) นำข้อมูลปกหนังสือ (coverUrl) มาแสดงใน tag img  ใน attribute src */}
        {/* TODO: 4) นำข้อมูลชื่อหนังสือ (title) มาแสดงใน tag img  ใน attribute atl */}
        <img
        src={cartItem.coverUrl}
        alt={cartItem.title}
        className="w-full h-40 object-cover rounded-t-lg mb-4"
        />
      </div>
      <div className="flex-1">
        {/* TODO: 5) แสดงชื่อหนังสือ (title) */}
        <p className="text-lg font-bold">{cartItem.title}</p>
        <p className="text-md text-gray-600">
          {/* TODO: 5) แสดงราคา (price) */}
          ราคาต่อเล่ม: {cartItem.price} บาท
        </p>
      </div>
      <div className="flex flex-col items-end gap-2">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            {/* TODO: 6) สร้างปุ่มลดจำนวนหนังสือลง ที่เมื่อคลิกจะเรียกใช้ฟังก์ชัน updateQuantity  */}
            {/* โดยส่งค่า id และ change ไปด้วย ในกรณีนี้เป็นการลดดังนั้น change คือ -1 */}
            <button
              className="w-8 h-8 ms-6 border-orange-600 bg-white border-2 text-orange-600 rounded-lg  flex items-center justify-center "
              onClick={() => updateQuantity(cartItem.id, -1)}
            >
              <Minus size={20} />
            </button>

            {/* TODO: 7) แสดงจำนวนหนังสือ (quantity) ที่มีในตะกร้า */}
            <span className="w-8 text-center">{cartItem.quantity}</span>

            {/* TODO: 8) สร้างปุ่มเพิ่มจำนวนหนังสือ เมื่อคลิกจะเรียกใช้ฟังก์ชัน updateQuantity  */}
            {/* โดยส่งค่า id และ change ไปด้วย ในกรณีนี้เป็นการเพิ่มดังนั้น change คือ 1 */}
            <button
              className="w-8 h-8  border-green-600 bg-white border-2 text-green-600 rounded-lg  flex items-center justify-center "
              onClick={() => updateQuantity(cartItem.id, 1)}
            >
              <Plus size={20} />
            </button>
          </div>

          {/* TODO: 9) สร้างปุ่มลบสินค้า ที่เมื่อคลิกจะเรียกใช้ฟังก์ชัน removeFromCart */}
          {/* โดยส่งค่า id ไปด้วย */}
            <button
              className="w-8 h-8 ms-6 border-orange-600 bg-white border-2 text-orange-600 rounded-lg  flex items-center justify-center "
              onClick={() => removeFromCart(cartItem.id)}
            >
              <Trash2 size={20} />
              </button>  
        </div>
        <p className="text-sm font-bold">
          {/* TODO: 10) แสดงมูลค่ารวมของหนังสือเล่มนี้ โดยคูณราคาต่อเล่ม (price) ด้วยจำนวนหนังสือ (quantity) */}
          {cartItem.price * cartItem.quantity} บาท
        </p>
      </div>
    </div>
  );
}

export default CartDetail;


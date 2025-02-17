import Book from "./Book";

// TODO: 1) สร้าง interface ชื่อ CartItem สำหรับรับข้อมูลของหนังสือที่อยู่ในตะกร้าสินค้า 
// โดยสืบทอดมาจาก interface Book และเพิ่ม property quantity ที่เป็น number

interface CartItem extends Book {
  quantity: number;
}

export default CartItem;

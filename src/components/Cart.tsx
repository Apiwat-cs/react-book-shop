import CartDetail from "./CartDetail";
import CartItem from "../types/CartItem";

// ! เพิ่มหรือแก้ไข code ในส่วนที่มี TODO ตามที่โจทย์กำหนดจำนวน 7 จุด (TODO: 1 - 7)

// TODO: 1) สร้าง type หรือ interface ชื่อ CartProps สำหรับรับ props ที่จำเป็นสำหรับการแสดงข้อมูลหนังสือในตะกร้าทั้งหมด
interface CartProps {
  cartItems: CartItem[];
  updateQuantity: (bookId: number, change: number) => void;
  removeFromCart: (bookId: number) => void;
  totalPrice: number;
}

// TODO: 2) รับ props มาจาก App.tsx เพื่อส่งต่อไปยัง CartDetail.tsx (CartDetail รับมาแสดงทีละเล่ม) ดังนี้
//  cartItem ข้อมูลของหนังสือในตะกร้าทั้งหมด
//  updateQuantity เป็นฟังก์ชันที่ใช้ในการเปลี่ยนจำนวนหนังสือในตะกร้าทั้งหมด
//  removeFromCart เป็นฟังก์ชันที่ใช้ในการลบหนังสือออกจากตะกร้าทั้งหมด
//  totalPrice แสดงมูลค่ารวมของหนังสือในตระกร้า (ข้อมูลนี้ไม่ได้ส่งไปที่ CartDetail)
function Cart({ cartItems, updateQuantity, removeFromCart, totalPrice, }: CartProps) {
  return (
    <div className="container mx-auto px-4 py-8 border rounded-lg bg-white shadow-md hover:shadow-xl transition-shadow w-5/6">
      <h1 className="text-3xl font-bold text-center mb-8 ">
        รายการหนังสือในตระกร้า
      </h1>
      <div className="flex flex-wrap justify-center items-start">
        <div className="mt-4">
          {/* TODO: 7) เรียก function component เพื่อแสดงผลตามเงื่อนไขดังนี้
            แสดงจากฟังก์ชัน EmptyCart เมื่อไม่มีหนังสือในตระกร้าสินค้า (cartItems มีขนาดเป็น 0) 
            แสดงจากฟังก์ชัน BooksInCart เมื่อมีหนังสืออย่างน้อย 1 เล่มในตระกร้า (cartItems มีขนาดมากกว่า 0) */}
          {cartItems.length === 0
            ? EmptyCart()
            : BooksInCart(cartItems, updateQuantity, removeFromCart, totalPrice)}
          <div className="mt-4 text-right">
            <p className="text-lg font-bold text-center">
              {/* TODO: 6) แสดงมูลค่ารวมของหนังสือในตระกร้า */}
              รวมทั้งหมด: {totalPrice} บาท
            </p>
          </div>
          {/* TODO: 7) End */}
        </div>
      </div>
    </div>
  );
}

// TODO: 3) สร้าง component function เพื่อ return การแสดงผลเมื่อตระกร้าสินค้าว่าง ( EmptyCart() )
function EmptyCart() {
  return (
    <div className="flex flex-col items-center text-center justify-center">
      <img
        src="/images/emptycart.png"
        width={200}
        alt="Empty Cart"
        className="mx-auto mb-4"
      />
      <p className="text-red-500 text-2xl font-semibold">ไม่มีสินค้าในตะกร้า</p>
    </div>
  );
}

// TODO: 4) สร้าง component function (BooksInCart) เพื่อ return การแสดงผลเมื่อมีหนังสือในตระกร้าสินค้าและรับข้อมูลเพื่อส่งไปยัง CartDetail.tsx ดังนี้
//  cartItem ข้อมูลของหนังสือในตะกร้าทั้งหมด
//  updateQuantity เป็นฟังก์ชันที่ใช้ในการเปลี่ยนจำนวนหนังสือในตะกร้า
//  removeFromCart เป็นฟังก์ชันที่ใช้ในการลบหนังสือออกจากตะกร้า
function BooksInCart(
  cartItems: CartItem[],
  updateQuantity: (bookId: number, change: number) => void,
  removeFromCart: (bookId: number) => void,
  totalPrice: number
) {
  return (
    <>
      {/* TODO: 5) อ่านข้อมูลใน cartItems เพื่อนำข้อมูลหนังสือแต่ละเล่มในตระกร้ามาแสดงใน CartDetail ผ่านคำสั่ง map */}
      {cartItems.map((item) => (
        <CartDetail
          key={item.id}
          cartItem={item}
          updateQuantity={updateQuantity}
          removeFromCart={removeFromCart}
        />
      ))}
      <div className="mt-4 text-right">
        <p className="text-lg font-bold">
          {/* TODO: 6) แสดงมูลค่ารวมของหนังสือในตระกร้า */}
          รวมทั้งหมด: {new Intl.NumberFormat("en-US").format(totalPrice)} บาท
        </p>
      </div>
    </>
  );
}

export default Cart;


import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BookList from "./components/BookList";
import { books } from "./data/BookMockUp";
import Book from "./types/Book";
import CartItem  from "./types/CartItem";
import Cart from "./components/Cart";


// ! เพิ่มหรือแก้ไข code ในส่วนที่มี TODO ตามที่โจทย์กำหนดจำนวน 9 จุด (TODO: 1 - 9)

function App() {

  // TODO: 1) สร้าง state สำหรับเก็บค่ากำหนดการแสดงส่วนของตระกร้าสินค้าหรือซ่อนการแสดง
  // (showCart และ setShowCart) โดยเริ่มต้นให้มีค่าเป็น false
  const [showCart, setShowCart] = useState<boolean>(false);

  // TODO: 2) สร้าง state สำหรับเก็บข้อมูลหนังสือในตระกร้าสินค้า
  // (cartItems และ setCartItems) โดยเริ่มต้นให้มีค่าเป็น array ของ CartItem เป็นค่าว่าง
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // TODO: 3) สร้างฟังก์ชัน addToCart ที่ใช้ในการเพิ่มหนังสือลงในตะกร้า โดยส่งข้อมูลของหนังสือ (book) ไปด้วย
  const addToCart = (book:Book) => {
    const existingItem = cartItems.find(item => item.id === book.id);
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === book.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCartItems([...cartItems, { ...book, quantity: 1 }]);
    }
  };

  // TODO: 4) สร้างฟังก์ชัน updateQuantity ที่ใช้ในการเปลี่ยนจำนวนหนังสือในตะกร้า
  // โดยรับ id ของหนังสือ (id) และจำนวนการเปลี่ยนแปลง (change) ซึ่งมีค่าเป็น 1 เมื่อเพิ่มจำนวนหนังสือ
  // และมีค่าเป็น -1 เมื่อลดจำนวนหนังสือ 
  const updateQuantity = (id:number, change:number) => {
    setCartItems(cartItems.map(item => {
      if (item.id === id) {
        const newQuantity = item.quantity + change;
        return newQuantity >= 1
          ? { ...item, quantity: newQuantity }
          : item;
      }
      return item;
    }));
  };

  // TODO: 5) สร้างฟังก์ชัน removeFromCart ที่ใช้ในการลบหนังสือออกจากตะกร้า โดยรับ id ของหนังสือ (id)
  const removeFromCart = (id: number) => {setCartItems(cartItems.filter(item => item.id !== id));};

  // TODO: 6) สร้างตัวแปร totalPrice เก็บผลการคำนวณราคารวมของหนังสือทั้งหมดในตะกร้า
  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="flex flex-col min-h-screen">

      {/* TODO: 7) ส่ง props ไปยัง Header โดยส่งค่าของ setShowCart และ showCart ไปด้วย */}
      <Header pageName="Books" setShowCart={setShowCart} showCart={showCart} />

      <main className="flex-grow container mx-auto px-4 py-6">

        {/* TODO: 8) แสดงตะกร้าสินค้า หรือซ่อนตามค่าของ showCart 
        ในกรณีแสดงตะกร้าสินค้า ให้แสดงข้อมูลจาก Cart โดยส่ง props ดังนี้
        cartItems ข้อมูลของหนังสือในตะกร้า
        updateQuantity เป็นฟังก์ชันที่ใช้ในการเปลี่ยนจำนวนหนังสือในตะกร้า
        removeFromCart เป็นฟังก์ชันที่ใช้ในการลบหนังสือออกจากตะกร้า
        totalPrice แสดงมูลค่ารวมของหนังสือในตระกร้า */}
        {/* <Cart cartItems={cartItems} updateQuantity={updateQuantity} removeFromCart={removeFromCart} totalPrice={totalPrice} /> */}
        {showCart && (Cart({cartItems, updateQuantity, removeFromCart, totalPrice}))}
        {/* // TODO: 9) แสดงรายการหนังสือ โดยส่ง props ดังนี้books ข้อมูลของหนังสือทั้งหมดaddToCart เป็นฟังก์ชันที่ใช้ในการเพิ่มหนังสือลงในตะกร้า  */}
        <BookList books={books} addToCart={addToCart} />

      </main>

      <Footer />

    </div>
  );
}

export default App;

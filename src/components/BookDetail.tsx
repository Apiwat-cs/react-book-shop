import { ShoppingBasket, Star } from "lucide-react";
import Book from "../types/Book";

// ! เพิ่มหรือแก้ไข code ในส่วนที่มี TODO ตามที่โจทย์กำหนดจำนวน 10 จุด (TODO: 1 - 10)

// TODO: 1) สร้าง type หรือ interface ชื่อ BookDetailProps สำหรับรับ props ที่จำเป็นสำหรับการแสดงข้อมูลของหนังสือในตะกร้า
interface BookDetailProps {
  book: Book;
  addToCart: (book: Book) => void;
}

// TODO: 2) รับ props มาจาก BookList.tsx ดังนี้
// book ข้อมูลของหนังสือ (1 เล่มที่กำลังนำมาแสดง)
// addToCart เป็นฟังก์ชันที่ใช้ในการเพิ่มหนังสือลงในตะกร้า
function BookDetail({ book, addToCart }: BookDetailProps) {
  return (
    <div className="border rounded-lg p-4 m-2 shadow-md hover:shadow-xl transition-shadow w-64 flex flex-col">
      {/* TODO: 3) นำข้อมูลปกหนังสือ (coverUrl) มาแสดงใน tag img  ใน attribute src */}
      {/* TODO: 4) นำข้อมูลชื่อหนังสือ (title) มาแสดงใน tag img  ใน attribute atl */}
      <img
        src={book.coverUrl}
        alt={book.title}
        className="w-full h-80 object-cover rounded-t-lg mb-4"
      />
      <h2 className="font-semibold mb-2 max-w-[25ch] truncate">{book.title}</h2>
      <p className="text-gray-700 mb-1">{book.author}</p>
      <div className="mb-2">
        {Rating(book.rating)}
      </div>
      <div className="flex justify-between items-center mt-auto">
        <span className="text-blue-600 font-medium">{book.price}</span>
        <span className="text-gray-500 text-sm">{book.pages} หน้า</span>
      </div>
      {/* TODO: 10) สร้างปุ่มเพิ่มลงตะกร้า ที่เมื่อคลิกจะเรียกใช้ฟังก์ชัน addToCart และส่งข้อมูลของหนังสือไปด้วย (book) */}
      <button
        onClick={() => addToCart(book)}
        className="w-full font-semibold flex items-center justify-center gap-2 bg-blue-500 hover:text-red-600 hover:bg-sky-300 text-white rounded-md py-3 mt-4"
      >
        <ShoppingBasket size={20} />
        เพิ่มลงตะกร้า
      </button>
    </div>
  );
}

function Rating(rating: number) {
  return Array.from({ length: 5 }, (_, index) => (
    <Star
      key={index}
      size={20}
      fill={index < rating ? "#FFD700" : "#E0E0E0"}
      className="inline-block mx-0.5"
    />
  ));
}

export default BookDetail;

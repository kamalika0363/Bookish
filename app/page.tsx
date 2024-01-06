import Navbar from "@/components/Navbar/page";
import Header from "@/components/Header/page";
import BookList from "@/components/BookList/page";

export default function Page(){
  return(
      <div className="flex flex-col px-4">
          <Navbar />
          <Header />
          <BookList />
      </div>
  );
}
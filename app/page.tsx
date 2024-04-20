import Navbar from "@/components/Navbar/page";
import Header from "@/components/Header/page";
import BookList from "@/components/BookList/page";

export default function Page(){
  return(
    <div className="flex items-end justify-center">
      <div className="flex flex-col px-4 bg-[#faefd6] dark:bg-zinc-900 xl:w-[1080px]">
          <Navbar />
          <Header />
          <BookList />
      </div>
    </div>
  );
}
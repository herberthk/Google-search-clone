import HomeHeader from "./HomeHeader";
import SearchInput from "./SearchInput";
import Footer from "./Footer";
import Image from "next/image";

const Home = () => {
  return (
    <div className="flex h-[100vh] flex-col">
      <HomeHeader />
      <main className="flex grow justify-center">
        <div className="mt-44 flex w-full flex-col items-center px-5">
          <div className="relative mb-8 h-[92px] w-[172px] md:w-[272px]">
            <Image src="/assets/google-logo.png" alt="Logo" fill />
          </div>
          <SearchInput />
          <div className="mt-8 flex gap-2 text-[#3c4043]">
            <button className="hover:shadow-c2 h-9 rounded-md border border-[#f8f9fa] bg-[#f8f9fa] px-4 text-sm hover:border-[#dadce0]">
              Google Search
            </button>
            <button className="hover:shadow-c2 h-9 rounded-md border border-[#f8f9fa] bg-[#f8f9fa] px-4 text-sm hover:border-[#dadce0]">
              I&apos;m Feeling Lucky
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;

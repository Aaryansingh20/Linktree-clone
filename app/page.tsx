import Image from "next/image";
import Main from "./(main)/home/page";
import GetStarted from "./(main)/getstarted/page";
import GetstartedTwo from "./(main)/getstarted-two/page";
import GetStartedThree from "./(main)/getstarted-three/page";
import Footer from "./(main)/footer/page";
import FAQSection from "./(main)/questions/page";
import Sections from "./(main)/section/page";
import Navbar from "./(main)/navbar/page";
import Carousel from "./(main)/carosel/page";
import Panel from "./(main)/panel/page";
export default function Home() {
  return (
    <main>
      <>
        <Navbar />
        <Main />
        <GetStarted />
        <GetstartedTwo />
        <GetStartedThree />
        <Panel />
        <Sections />
        <div className="flex justify-center items-center h-[1000px] bg-gray-100 py-8">
          <div className="w-full max-w-4xl px-4 sm:px-6 lg:px-8">
            <Carousel />
          </div>
        </div>
        <div>
          <FAQSection />
        </div>
        <Footer />
      </>
    </main>
  );
}

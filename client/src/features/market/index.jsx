import Carousel from "./components/Carousel";
import Hero from "./components/Hero";
import TopLists from "./components/TopList";
import { useRef } from "react";
import useScrollToTop from "@/hooks/useScrollToTop";
import { useGetTrending } from "./hooks/useGetTrending";
export default function DashBoard() {
  const topListRef = useRef();
  useScrollToTop();
  const { data } = useGetTrending();
  console.log("market", data);
  const scrollToTopLists = () => {
    topListRef.current.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  };
  return (
    <div className="flex-1">
      <Carousel />
      <Hero scrollToTopLists={scrollToTopLists} />
      <TopLists ref={topListRef} />
    </div>
  );
}

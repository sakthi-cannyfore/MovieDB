import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "./Cartcss.css";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import loadingimage from "../../assets/not-ready.svg";
import { image_base_url } from "../Utils";
import StarRating from "../Star Rating/StartRating";
import FormatDate from "../DateFormat/DateFormate";
interface CartItem {
  id: number | undefined;
  title: string;
  poster_path: string;
  release_date: string;
  popularity: number;
}
interface CartSliderProps {
  items: CartItem[];
  slidesPerView?: number;
}

const CartSlider = ({ items, slidesPerView = 5 }: CartSliderProps) => {
  return (
    <div className="w-full overflow-hidden sm:px-4 bg-black">
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={0}
        slidesPerView={slidesPerView}
        slidesPerGroup={5}
        loop={true}
        className="!overflow-visible"
        speed={700}
      >
        {items.map((item, index) => (
          <SwiperSlide>
            <Link to={`/movie/${item.id}`} key={`${item.id}-${index}`}>
              <div className="h-[200px] sm:w-[220px] sm:h-full bg-black rounded-b-xl  text-center cursor-pointer">
                {!item.poster_path ? (
                  <img
                    src={loadingimage}
                    alt={item.title}
                    className="w-full h-[330x] object-cover rounded-t-xl "
                  />
                ) : (
                  <img
                    src={`${image_base_url}${item.poster_path}`}
                    alt={item.title}
                    className="w-full h-[330x] object-cover rounded-t-xl "
                  />
                )}

                <div className="bg-gray-800 h-full rounded-b-xl">
                  <div className="flex justify-center items-center gap-1 mb-2 mx-2">
                    <div className="text-white text-xs sm:text-sm mt-1 text-center">
                      <StarRating popularity={item.popularity} />
                      <p className="text-xs sm:text-md">
                        {item.popularity.toFixed(2)}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm md:text-lg text-white">
                    {item.title}
                  </p>

                  <p className="text-xs sm:text-sm text-white">
                    <FormatDate dateString={item?.release_date} />
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CartSlider;

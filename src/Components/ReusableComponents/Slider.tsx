import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { image_base_url } from '../Utils';

interface Movies {
    id: number | undefined
    title: string;
    poster_path: string;
    release_date:string;
    popularity :number

  }
  
  interface CartSliderProps {
    items: Movies[];
    slidesPerView?: number;
  }

const Slider = ({ items, slidesPerView = 5 }: CartSliderProps) => {
  return (
    <div className="w-screen overflow-hidden sm:px-4 py-8 bg-gray-100">
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={10}
        slidesPerView={slidesPerView}
        loop={true}
        className="!overflow-visible"
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="w-full h-[200px] sm:w-[220px] md:h-full bg-white sm:p-2 text-center">
              <img 
                src={`${image_base_url}${item.poster_path}`} 
                alt={item.title} 
                className="w-full h-[330px] object-cover mb-4" 
              />
              <div>

              <h4 className="text-lg font-semibold text-gray-800">{item.title}</h4>
              <p className="text-gray-500 text-sm mt-1">{item.popularity}</p>
              <p className="text-gray-500 text-sm mt-1">{item.release_date}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;


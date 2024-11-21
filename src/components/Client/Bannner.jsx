import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import axios from 'axios';

const Banner = () => {
  const [data, setData] = useState('');

  async function getProfile() {
    try {
      let result = await axios.get('https://actl.co.in/shop/getbanner') || '';
      if (result) {
        setData(result.data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <>
      {data ? (
        <div className="w-full mx-auto mt-32 px-6 md:px-12 lg:px-16"> {/* Slightly decreased width with padding */}
          <div className="max-w-4xl mx-auto"> {/* Decreased maximum width */}
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 2000 }}
              loop={true}
            >
              {data.map((slide) => (
                <SwiperSlide key={slide.id}>
                  <img
                    src={`https://actl.co.in/uploads/${slide.banner}`}
                    alt={`Slide ${slide.id}`}
                    className="w-full h-40 md:h-96 lg:h-96 object-cover rounded-lg shadow-md"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default Banner;

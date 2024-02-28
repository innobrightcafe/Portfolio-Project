"use client";
import { Categories } from "@/components/ui/slider/data";
import styles from "./slider.module.css";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { useEffect, useState } from "react";
import Link from "next/link";

export const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(Categories.length / itemsPerPage);
  const autoScroll = true;
  let slideInterval;
  let intervalTime = 5000;

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + totalPages) % totalPages);
  };

  const auto = () => {
    slideInterval = setInterval(nextSlide, intervalTime);
  };

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
    <div className="slider">
      <div className={styles.container}>
        <MdArrowBackIos size={25} className={styles.prev} onClick={prevSlide} />
        <div className={styles.sliderContainer}>
          <div className={styles.categories}>
            <div className={styles.slides}>
              {Categories.slice(
                currentSlide * itemsPerPage,
                (currentSlide + 1) * itemsPerPage
              ).map((slide, index) => (
                <div className={styles.cartegory__card} key={index}>
                  <div className={styles.category}>
                    <Link href={slide.link}>
                      <h3>{slide.name.slice(0, 9)}</h3>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
        <MdArrowForwardIos
            size={25}
            className={styles.next}
            onClick={nextSlide}
          />
      </div>
    </div>
  );
};

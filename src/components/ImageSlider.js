import React from 'react';
import { SliderData } from './ImageSliderData';

export const Imageslider = () => {
  return (
    <>
      {SliderData.map((slide, index) => {
        return <img src={slide.image} />;
      })}
    </>
  );
};

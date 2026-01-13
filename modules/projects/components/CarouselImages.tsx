'use client';

import * as React from 'react';
import Autoplay from 'embla-carousel-autoplay';

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';
import { IImage } from '../constants/images.constant';

export interface CarouselImagesProps {
  images: IImage[]
}

export function CarouselImages({ images }: CarouselImagesProps) {
  const plugin = React.useRef(Autoplay({ delay: 4000, active: true }));

  return (
    <Carousel plugins={[plugin.current]} className="w-full">
      <CarouselContent>
        {images.map((slideImage, index) => (
          <CarouselItem key={index}>
            <Card className="border-0 p-0">
              <CardContent className="p-0">
                <Image
                  src={slideImage.url}
                  alt={slideImage.caption}
                  width={800}
                  height={600}
                  className="object-cover w-full h-[300px] sm:h-[400px] md:h-[400px] rounded-4xl"
                />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-10" />
      <CarouselNext className="right-10" />
    </Carousel>
  );
}

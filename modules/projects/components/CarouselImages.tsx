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

const slideImages = [
  {
    url: 'https://res.cloudinary.com/di65tbibv/image/upload/v1765151701/bien-bonita/projects/04a427f2-dfd5-4beb-8f44-074aafbcbe93.png',
    caption: 'Imagen 1',
  },
  {
    url: 'https://res.cloudinary.com/di65tbibv/image/upload/v1765151687/bien-bonita/projects/54071261-0f5e-4c31-a383-eaa1f502cfa1.png',
    caption: 'Imagen 2',
  },
  {
    url: 'https://res.cloudinary.com/di65tbibv/image/upload/v1765151661/bien-bonita/projects/5d39b696-bd90-4992-a24c-12b835361543.png',
    caption: 'Imagen 3',
  },
];

export function CarouselImages() {
  const plugin = React.useRef(Autoplay({ delay: 4000, active: true }));

  return (
    <Carousel plugins={[plugin.current]} className="w-full">
      <CarouselContent>
        {slideImages.map((slideImage, index) => (
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

"use client";

import { cn } from "../../lib/utils";
import React, { useEffect, useState } from "react";

interface IInfiniteMovingCards {
  items: {
    name: string;
    title: string;
    quote: string;
    rating: number;
    image: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}

export const InfiniteMovingCards: React.FC<IInfiniteMovingCards> = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
    if (containerRef.current) {
      containerRef.current.style.setProperty("mask-image", "none");
    }
  }, []);

  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  const addAnimation = () => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  };
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-full  overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items &&
          items.length &&
          items.map((item) => (
            <li
              className="w-[350px] ms-10 rounded-2xl border border-white border-opacity-50 p-5 md:w-[450px]"
              key={item.name}
            >
              <blockquote>
                <div className="rounded-lg">
                  <div className="flex items-center gap-5 justify-center">
                    <img src={item.image} className="w-16 rounded-full" />
                    <div className="flex flex-col">
                      <span className="text-lg text-gray-100 font-semibold">
                        {item.name}
                      </span>
                      <span className="text-sm text-gray-400">
                        {item.title}
                      </span>
                      <div className="flex items-center">
                        {[...Array(Math.floor(item.rating))].map((_, index) => (
                          <svg
                            key={index}
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-yellow-500"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                          </svg>
                        ))}
                        <span className="ml-2 text-sm text-gray-100">
                          {item.rating.toFixed(1)}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="mt-4 text-sm text-gray-100  text-justify">
                    {item.quote}
                  </p>
                </div>
              </blockquote>
            </li>
          ))}
      </ul>
    </div>
  );
};

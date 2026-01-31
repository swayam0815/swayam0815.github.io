"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
  children,
}: {
  words?: string;
  className?: string;
  filter?: boolean;
  duration?: number;
  children?: React.ReactNode;
}) => {
  const [scope, animate] = useAnimate();
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.1),
      }
    );
  }, [animate, duration, filter]);

  const renderWords = () => {
    return (
      <div className="">
        {words && (
          <motion.div ref={scope}>
            {words.split(' ').map((word, idx) => {
              return (
                <motion.span
                  key={word + idx}
                  className={`  opacity-0`}
                  style={{
                    filter: filter ? "blur(10px)" : "none",
                  }}
                >
                  {word}{" "}
                </motion.span>
              );
            })}
          </motion.div>
        )}

        {children && (
          <motion.div ref={scope}>
           
                <motion.span
                  key={9999}
                  className={`  opacity-0`}
                  style={{
                    filter: filter ? "blur(10px)" : "none",
                  }}
                >
                  {children}
                </motion.span>
          </motion.div>
        )}
      </div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="my-4">
        <div
          className={`${className} dark:text-white text-black  leading-snug tracking-wide`}
        >
          {renderWords()}
        </div>
      </div>
    </div>
  );
};

'use client'
import { ComponentPropsWithRef, useEffect, useId, useRef } from "react";

type CounterProps = {
    delay?: number;
    duration?: number;
    endValue: number;
} & ComponentPropsWithRef<"span">;

export const Counter = ({
    endValue,
    duration = 4000,
    delay = 0,
    ...props
}: CounterProps) => {
    const counterRef = useRef<HTMLSpanElement>(null);
    const id = useId();

    const hasAnimated = useRef(false);

    useEffect(() => {
        const animateNumbers = (
            element: HTMLSpanElement,
            start: number,
            end: number,
            duration: number
        ) => {
            let startTime: number | null = null;

            const step = (timestamp: number) => {
                if (!startTime) startTime = timestamp;
                const progress = Math.min(
                    (timestamp - startTime) / duration,
                    1
                );
                const current = Math.floor(progress * (end - start) + start);

                element.textContent = current.toLocaleString();

                if (progress < 1) {
                    requestAnimationFrame(step);
                }
            };

            requestAnimationFrame(step);
        };

        const handleIntersection = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    setTimeout(() => {
                        if (counterRef.current) {
                            animateNumbers(
                                counterRef.current,
                                0,
                                endValue,
                                duration
                            );
                        }
                    }, delay);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, {
            threshold: 0.5,
        });

        if (counterRef.current) {
            observer.observe(counterRef.current);
        }
        return () => {
            observer.disconnect();
        };
    }, [endValue, duration, delay]);
    return (
        <span id={id} ref={counterRef} data-count={endValue} {...props}>
            0
        </span>
    );
};

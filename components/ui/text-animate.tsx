"use client";

import { cn } from "@/lib/utils";
import { motion, MotionProps, Variants } from "framer-motion";
import React from "react";

type AnimationType = "text" | "word" | "character" | "line";
type AnimationVariant = "fadeIn" | "blurIn" | "slideUp" | "scaleUp";

interface TextAnimateProps extends MotionProps {
    /**
     * The text content to animate
     */
    children: string;
    /**
     * The class name to apply to the container
     */
    className?: string;
    /**
     * The segment to animate (word, character, line, or text)
     * @default "word"
     */
    by?: AnimationType;
    /**
     * The starting variant of the animation
     * @default "slideUp"
     */
    animation?: AnimationVariant;
    /**
     * The delay to start the animation
     * @default 0
     */
    startDelay?: number;
}

const defaultItemVariants: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
};

const defaultContainerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

export function TextAnimate({
    children,
    className,
    by = "word",
    animation = "slideUp",
    startDelay = 0,
    ...props
}: TextAnimateProps) {
    const containerVariants = {
        ...defaultContainerVariants,
        show: {
            ...defaultContainerVariants.show,
            transition: {
                ...defaultContainerVariants.show.transition,
                delayChildren: startDelay,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: {
            y: animation === "slideUp" ? 20 : 0,
            opacity: animation === "fadeIn" ? 0 : 0,
            filter: animation === "blurIn" ? "blur(10px)" : undefined,
            scale: animation === "scaleUp" ? 0.5 : 1,
        },
        show: {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            scale: 1,
            transition: {
                duration: 0.4,
                ease: "easeOut"
            }
        },
    };

    const words = children.split(" ");

    if (by === "word") {
        return (
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className={cn("flex flex-wrap gap-x-[0.25em]", className)}
                {...props}
            >
                {words.map((word, i) => (
                    <motion.span variants={itemVariants} key={i} className="inline-block">
                        {word}
                    </motion.span>
                ))}
            </motion.div>
        );
    }

    // Fallback for simple text/other types if needed, focusing on 'word' per request
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className={className}
            {...props}
        >
            <motion.span variants={itemVariants}>{children}</motion.span>
        </motion.div>
    );
}

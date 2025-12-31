"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const audiences = [
  {
    title: "For System Integrators",
    description:
      "Access premium AV products, reliable supply, and technical support that help you deliver high-performance systems without compromise.",
  },
  {
    title: "For Electrical Contractors",
    description:
      "Simplified access to certified AV products and guidance that integrates seamlessly with electrical and building infrastructure.",
  },
  {
    title: "For Developers",
    description:
      "Future-ready AV solutions that increase property value, reduce rework, and align with modern luxury living standards.",
  },
  {
    title: "For Main Contractors",
    description:
      "Structured AV supply and coordination that fits into your project timelines, budgets, and construction workflows.",
  },
];

export default function DistributionAudience() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
      {audiences.map((item, index) => {
        const isOpen = activeIndex === index;

        return (
          <button
            key={index}
            onClick={() => toggle(index)}
            className="text-left p-8 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-md
                       hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
          >
            {/* Header */}
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold transition-transform duration-300 group-hover:translate-x-1">
                {item.title}
              </h3>

              <span className="flex items-center justify-center w-8 h-8 rounded-full border border-white/20 text-white/80">
                {isOpen ? <Minus size={16} /> : <Plus size={16} />}
              </span>
            </div>

            {/* Description */}
            <div
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen
                  ? "grid-rows-[1fr] opacity-100 mt-4"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <p className="overflow-hidden text-sm text-white/70 leading-relaxed">
                {item.description}
              </p>
            </div>
          </button>
        );
      })}
    </div>
  );
}

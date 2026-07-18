import React from 'react';
import { motion } from 'motion/react';

interface SkeletonProps {
  type?: 'card' | 'list' | 'text' | 'dashboard' | 'form';
  count?: number;
}

export default function SkeletonLoader({ type = 'card', count = 1 }: SkeletonProps) {
  const shimmerVariants = {
    initial: { backgroundPosition: '-200% 0' },
    animate: {
      backgroundPosition: '200% 0',
      transition: {
        repeat: Infinity,
        duration: 1.5,
        ease: 'linear',
      },
    },
  };

  const shimmerStyle = "bg-gradient-to-r from-white/5 via-white/10 to-white/5 bg-[length:200%_100%]";

  const renderSkeleton = (index: number) => {
    switch (type) {
      case 'dashboard':
        return (
          <div key={index} className="space-y-6 w-full max-w-7xl mx-auto p-6 bg-[#090d22]/40 border border-white/5 rounded-3xl backdrop-blur-xl">
            {/* Header shimmer */}
            <div className="flex items-center justify-between gap-4 border-b border-white/5 pb-6">
              <div className="space-y-2">
                <div className={`h-8 w-48 rounded-lg ${shimmerStyle} animate-pulse`} />
                <div className={`h-4 w-72 rounded-md ${shimmerStyle} animate-pulse`} />
              </div>
              <div className={`h-10 w-28 rounded-xl ${shimmerStyle} animate-pulse`} />
            </div>
            
            {/* KPI grid shimmer */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-28 rounded-2xl bg-[#090d22]/60 border border-white/5 p-4 flex flex-col justify-between">
                  <div className={`h-3 w-16 rounded ${shimmerStyle}`} />
                  <div className={`h-8 w-24 rounded ${shimmerStyle}`} />
                  <div className={`h-3 w-28 rounded ${shimmerStyle}`} />
                </div>
              ))}
            </div>

            {/* Layout split */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-3 space-y-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className={`h-11 rounded-xl bg-white/5 ${shimmerStyle}`} />
                ))}
              </div>
              <div className="lg:col-span-9 h-64 rounded-2xl bg-[#090d22]/50 border border-white/5" />
            </div>
          </div>
        );

      case 'form':
        return (
          <div key={index} className="space-y-4 w-full p-6 bg-[#090d22]/30 border border-white/5 rounded-2xl">
            <div className={`h-5 w-32 rounded ${shimmerStyle}`} />
            <div className="space-y-2">
              <div className={`h-10 w-full rounded-xl bg-white/5 ${shimmerStyle}`} />
              <div className={`h-10 w-full rounded-xl bg-white/5 ${shimmerStyle}`} />
            </div>
            <div className={`h-12 w-full rounded-xl bg-cyan-500/10 ${shimmerStyle}`} />
          </div>
        );

      case 'text':
        return (
          <div key={index} className="space-y-3 py-2">
            <div className={`h-5 w-2/3 rounded-md ${shimmerStyle}`} />
            <div className={`h-4 w-full rounded-md ${shimmerStyle}`} />
            <div className={`h-4 w-5/6 rounded-md ${shimmerStyle}`} />
            <div className={`h-4 w-4/5 rounded-md ${shimmerStyle}`} />
          </div>
        );

      case 'list':
        return (
          <div key={index} className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-3 py-2 border-b border-white/5">
                <div className={`h-10 w-10 rounded-full bg-white/5 shrink-0 ${shimmerStyle}`} />
                <div className="flex-1 space-y-1.5">
                  <div className={`h-4 w-1/3 rounded ${shimmerStyle}`} />
                  <div className={`h-3 w-1/2 rounded ${shimmerStyle}`} />
                </div>
              </div>
            ))}
          </div>
        );

      case 'card':
      default:
        return (
          <div key={index} className="bg-[#090d22]/40 border border-white/5 rounded-2xl p-6 space-y-4 h-full">
            <div className="flex justify-between items-center">
              <div className={`h-5 w-24 rounded-full bg-white/5 ${shimmerStyle}`} />
              <div className={`h-4 w-12 rounded bg-white/5 ${shimmerStyle}`} />
            </div>
            <div className={`h-6 w-3/4 rounded bg-white/5 ${shimmerStyle}`} />
            <div className="space-y-2">
              <div className={`h-3 w-full rounded bg-white/5 ${shimmerStyle}`} />
              <div className={`h-3 w-5/6 rounded bg-white/5 ${shimmerStyle}`} />
            </div>
            <div className="pt-4 border-t border-white/5 flex items-center justify-between">
              <div className={`h-4 w-28 rounded bg-white/5 ${shimmerStyle}`} />
              <div className={`h-4 w-16 rounded bg-white/5 ${shimmerStyle}`} />
            </div>
          </div>
        );
    }
  };

  return (
    <div className="w-full">
      {Array.from({ length: count }).map((_, idx) => renderSkeleton(idx))}
    </div>
  );
}

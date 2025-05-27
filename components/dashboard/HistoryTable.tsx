"use client";

import React from "react";

export default function HistoryTable() {
  return (
    <div className="w-full overflow-x-auto">
      <div className="w-full bg-[#1d1f22] rounded-[40px] flex flex-col min-w-[600px] md:min-w-0">
        {/* Header Row */}
        <div className="w-full px-2 py-[7px] flex items-center">
          <div className="flex-1 h-12 md:h-[63px] px-3 md:px-6 py-1.5 flex justify-start items-center">
            <div className="text-white text-sm md:text-xl font-normal font-['Inter'] leading-tight">
              Country
            </div>
          </div>
          <div className="flex-1 h-12 md:h-[63px] px-3 md:px-6 py-1.5 flex justify-center items-center">
            <div className="text-white text-sm md:text-xl font-normal font-['Inter'] leading-tight">
              Time
            </div>
          </div>
          <div className="flex-1 h-12 md:h-[63px] px-3 md:px-6 py-1.5 flex justify-center items-center">
            <div className="text-white text-sm md:text-xl font-normal font-['Inter'] leading-tight">
              Entry Price
            </div>
          </div>
          <div className="flex-1 h-12 md:h-[63px] px-3 md:px-6 py-1.5 flex justify-center items-center">
            <div className="text-white text-sm md:text-xl font-normal font-['Inter'] leading-tight">
              Market Price
            </div>
          </div>
          <div className="flex-1 h-12 md:h-[63px] px-3 md:px-6 py-1.5 flex justify-center items-center">
            <div className="text-white text-sm md:text-xl font-normal font-['Inter'] leading-tight">
              PnL
            </div>
          </div>
          <div className="flex-1 h-12 md:h-[63px] px-3 md:px-6 py-1.5 flex justify-center items-center">
            <div className="text-white text-sm md:text-xl font-normal font-['Inter'] leading-tight">
              Status
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="w-full h-[1px] bg-[#313131]"></div>
        
        {/* Empty State */}
        <div className="text-center text-[#888] py-6 md:py-8 text-sm md:text-base">
          No trade history yet.
        </div>
      </div>
    </div>
  );
}
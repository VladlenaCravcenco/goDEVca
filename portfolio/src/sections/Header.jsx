import React from "react";
import ToggleSwitch from "../components/ToggleSwitch";

const Header = ({ isDark, setIsDark }) => {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 pt-6 z-20">
      <div className="relative flex items-center justify-between px-6 py-4 rounded-full bg-gradient-to-b from-white to-[#f2f2f2] border border-[#e6e6e6] shadow-[inset_0_4px_10px_rgba(0,0,0,0.3)]">
        
        <div className="ml-auto pl-6 flex items-center">
          <div className="w-14 h-14 bg-[#eaeaea] border border-[#ccc] rounded-full shadow-[inset_0_2px_5px_rgba(0,0,0,0.2)] flex items-center justify-center">
            <ToggleSwitch onToggle={setIsDark} isDark={isDark} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
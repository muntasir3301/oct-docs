"use client";

import { useState } from "react";
import { BiSearch } from "react-icons/bi";

export function SearchBar() {
  const [focused, setFocused] = useState(false);

  return (
    <div
      className={`flex items-center gap-2 px-3 h-9 bg-white dark:bg-zinc-950 border rounded-md cursor-text transition-all duration-150 ${
        focused
          ? "border-zinc-400 dark:border-zinc-500 ring-2 ring-zinc-100 dark:ring-zinc-800"
          : "border-zinc-200 dark:border-zinc-800"
      }`}
      onClick={() => document.getElementById("search-input")?.focus()}
    >
      <BiSearch className="w-4 h-4 text-zinc-400 shrink-0" />

      <input
        id="search-input"
        type="search"
        placeholder="Search anything..."
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="flex-1 bg-transparent border-none outline-none text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 w-48"
      />

      <kbd className="inline-flex items-center gap-0.5 px-1.5 py-0.5 text-[11px] text-zinc-400 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-[5px] shrink-0 leading-none">
        <span className="text-[13px]">⌘</span>K
      </kbd>
    </div>
  );
}

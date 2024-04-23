import { Typography, Select, Option } from "@material-tailwind/react";
import { useState } from "react";

export function SearchCard() {
  const [isFocused, setIsFocused] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  return (
    <div className="flex items-center justify-center">
      <form className="flex items-center space-x-2">
        <input 
          type="search" 
          id="stock-search" 
          className="p-2 border border-gray-300 rounded w-96" 
          placeholder="Search Stocks, Companies..." 
          required 
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />

        <div className="mr-4">
          <Select label="Select Time" required className="bg-white"> 
            <Option>Today</Option>
            <Option>This Week</Option>
            <Option>This Month</Option>
          </Select>
        </div>
  
        <button type="submit" className="p-2 mt-2 bg-indigo-700 text-white rounded">Search</button>
      </form>
    </div>
  );
}
import { Select, Option } from "@material-tailwind/react";
 
export function TimeFilter() {
  return (
    <div className="flex items-center justify-center">
        <div className="w-[10rem] items-center justify-center">
        <Select label="Select Time" className="bg-white">
            <Option>Today</Option>
            <Option>This Week</Option>
            <Option>This Month</Option>
        </Select>
        </div>
    </div>
  );
}
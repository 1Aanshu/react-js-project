import { useState } from "react";
export const Question = () => {
  const [country, setCountry] = "";
  const data = [
    { country: "Nepal", cities: ["Kathmandu", "Bhaktapur", "Pokhara"] },
    { country: "India", cities: ["New Delhi", "Banglore"] },
  ];

  return (
    <div>
      <select onChange={(e) => setCountry(e.target.value)}>
        <option value="">Select Country</option>
        {data.length > 0 &&
          data.map((d, index) => {
            return (
              <option key={index} value={d?.country}>
                {d?.country}
              </option>
            );
          })}
      </select>
      {country && (
        <select>
          <option value="">Select City</option>}
        </select>
      )}
    </div>
  );
};

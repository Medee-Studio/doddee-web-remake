"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Address } from "@/types";

export const AddressInput = ({ value, onChange, placeholder }: {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}) => {
  const [query, setQuery] = useState(value);
  const [suggestions, setSuggestions] = useState<Address[]>([]);

  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setQuery(newValue);
    onChange(newValue);

    if (newValue.length > 2) {
      try {
        const response = await fetch(
          `https://api-adresse.data.gouv.fr/search/?q=${encodeURIComponent(newValue)}`
        );
        const data: { features: Address[] } = await response.json();
        setSuggestions(data.features);
      } catch (error) {
        console.error("Error fetching addresses:", error);
        setSuggestions([]);
      }
    } else {
      setSuggestions([]);
    }
  };

  const handleSelectAddress = (address: Address) => {
    const addressLabel = address.properties.label;
    setQuery(addressLabel);
    onChange(addressLabel);
    setSuggestions([]);
  };

  return (
    <div className="relative">
      <Input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder={placeholder}
        autoComplete="off"
        className="mt-2 h-12 border-[#cbd5e1] focus:border-primary focus:ring-primary"
      />
      {suggestions.length > 0 && (
        <div className="absolute top-full left-0 z-10 w-full mt-1 rounded-md border border-[#cbd5e1] shadow-lg max-h-40 overflow-y-auto bg-[#f1f5f9]">
          {suggestions.map((address) => (
            <div
              key={address.properties.id}
              className="p-3 hover:bg-[#e5e7eb] cursor-pointer text-sm border-b border-[#cbd5e1] last:border-b-0"
              onClick={() => handleSelectAddress(address)}
            >
              {address.properties.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}; 
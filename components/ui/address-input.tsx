"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Address } from "@/types";

export const AddressInput = ({ value, onChange, onCoordinatesChange, placeholder }: {
  value: string;
  onChange: (value: string) => void;
  onCoordinatesChange?: (coordinates: [number, number]) => void;
  placeholder?: string;
}) => {
  const [query, setQuery] = useState(value);
  const [suggestions, setSuggestions] = useState<Address[]>([]);
  const [debounceTimer, setDebounceTimer] = useState<NodeJS.Timeout | null>(null);

  // Update query when value prop changes
  useEffect(() => {
    setQuery(value);
  }, [value]);

  const fetchSuggestions = async (searchValue: string) => {
    if (searchValue.length > 2) {
      try {
        const response = await fetch(
          `https://api-adresse.data.gouv.fr/search/?q=${encodeURIComponent(searchValue)}`
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setQuery(newValue);

    // Clear existing timer
    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }

    // Set new timer for debounced onChange and API call
    const timer = setTimeout(() => {
      onChange(newValue);
      // Clear coordinates when manually typing (not selecting from suggestions)
      if (onCoordinatesChange) {
        onCoordinatesChange([0, 0]);
      }
      fetchSuggestions(newValue);
    }, 300); // 300ms debounce

    setDebounceTimer(timer);
  };

  const handleSelectAddress = (address: Address) => {
    const addressLabel = address.properties.label;
    const coordinates = address.geometry.coordinates as [number, number];
    
    setQuery(addressLabel);
    onChange(addressLabel);
    
    // Pass coordinates to parent if callback provided
    if (onCoordinatesChange) {
      onCoordinatesChange(coordinates);
    }
    
    setSuggestions([]);
    
    // Clear debounce timer when user selects an address
    if (debounceTimer) {
      clearTimeout(debounceTimer);
      setDebounceTimer(null);
    }
  };

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (debounceTimer) {
        clearTimeout(debounceTimer);
      }
    };
  }, [debounceTimer]);

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
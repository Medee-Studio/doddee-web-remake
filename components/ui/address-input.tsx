"use client"

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Address } from "@/types";
import React, { useRef, useState, useEffect } from "react";
import { Input } from "./input";

interface AddressInputProps {
  onSelectAddress: (address: Address) => void;
  value?: string;
}

export const AddressInput: React.FC<AddressInputProps> = ({
  onSelectAddress,
  value = "",
}) => {
  const [query, setQuery] = useState<string>(value);
  const [suggestions, setSuggestions] = useState<Address[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const commandRef = useRef<HTMLDivElement>(null);

  // Sync local query state with form value
  useEffect(() => {
    setQuery(value);
  }, [value]);
  
  const handleInputChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const value = event.target.value;
    setQuery(value);
    setSelectedIndex(-1); // Reset selection when typing

    if (value.length > 2) {
      try {
        const response = await fetch(
          `https://api-adresse.data.gouv.fr/search/?q=${encodeURIComponent(value)}`,
        );
        const data: { features: Address[] } = await response.json();
        setSuggestions(data.features);
      } catch (error) {
        console.error("Error fetching address suggestions:", error);
      }
    } else {
      setSuggestions([]);
    }
  };

  const handleSelectAddress = (address: Address) => {
    onSelectAddress(address);
    setQuery(address.properties.label);
    setSuggestions([]);
    setSelectedIndex(-1);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (suggestions.length === 0) return;

    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        setSelectedIndex((prev) => 
          prev < suggestions.length - 1 ? prev + 1 : prev
        );
        break;
      case "ArrowUp":
        event.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : -1));
        break;
      case "Enter":
        event.preventDefault();
        if (selectedIndex >= 0 && selectedIndex < suggestions.length) {
          handleSelectAddress(suggestions[selectedIndex]);
        }
        break;
      case "Escape":
        setSuggestions([]);
        setSelectedIndex(-1);
        break;
    }
  };

  return (
    <div className="relative w-full">
      <Input
        type="text"
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Entrez votre adresse"
        className="w-full"
        autoComplete="off"
      />

      {suggestions.length > 0 && (
        <Command
          ref={commandRef}
          className="absolute top-full left-0 z-10 w-full mt-1 rounded-md border shadow-md h-[150px] bg-white"
        >
          <CommandList>
            <CommandEmpty>Aucune adresse trouvée.</CommandEmpty>
            <CommandGroup>
              {suggestions.map((address, index) => (
                <CommandItem
                  key={address.properties.id}
                  onSelect={() => handleSelectAddress(address)}
                  className={`cursor-pointer ${
                    index === selectedIndex 
                      ? "bg-accent text-accent-foreground" 
                      : "hover:bg-accent hover:text-accent-foreground"
                  }`}
                >
                  {address.properties.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      )}
    </div>
  );
}; 
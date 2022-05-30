import { createContext, useState } from "react";

export const FilterContext = createContext()

export const FilterProvider = ({ children }) => {
  const [selectedFilter, setSelectedFilter] = useState("");
  const filter = () => {
    setSelectedFilter(selectedFilter);
  }

  return (
    <FilterContext.Provider value={{ selectedFilter, filter }}>
      {children}
    </FilterContext.Provider>
  )
}
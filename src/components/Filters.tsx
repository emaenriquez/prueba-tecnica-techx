import React from 'react';

interface FiltersProps {
  search: string;
  setSearch: (value: string) => void;
  sortAsc: boolean;
  setSortAsc: (value: boolean) => void;
}

const Filters: React.FC<FiltersProps> = ({ search, setSearch, sortAsc, setSortAsc }) => {
  return (
    <aside className="w-full md:w-1/4">
      <h2 className="text-lg font-semibold mb-2">Filter</h2>
      <input
        type="text"
        placeholder="Search..."
        className="w-full border px-3 py-2 rounded mb-4"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <h2 className="text-lg font-semibold mb-2">Sort</h2>
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="sortPrice"
          checked={sortAsc}
          onChange={() => setSortAsc(!sortAsc)}
        />
        <label htmlFor="sortPrice">Sort by Price (Asc/Desc)</label>
      </div>
    </aside>
  );
};

export default Filters;

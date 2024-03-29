import { useState } from "react";
import styles from "./Filters.module.css";
import { Select, Heading } from "@chakra-ui/react";
function HeadlineFilters({ onFilter }) {
  const categories = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ];
  const countries = [
    { name: "India", code: "in" },
    { name: "United States", code: "us" },
    { name: "Austrailia", code: "au" },
    { name: "Russia", code: "ru" },
    { name: "France", code: "fr" },
    { name: "United Kingdom", code: "gb" },
  ];
  const [config, setConfig] = useState({ category: "general", country: "in" });
  const updateConfig = (e) => {
    const { name, value } = e.target;
    setConfig((old) => ({
      ...old,
      [name]: value,
    }));
    onFilter(config);
  };
  return (
    <div className={styles.filters}>
      <Heading size="md" mr="auto" color='gray.600'>
        Top Headlines
      </Heading>
      <div>
      <Heading size="sm" fontWeight="400" marginLeft="auto" marginRight="5px">
        Category :
      </Heading>
      <Select
        onChange={updateConfig}
        name="category"
        width="auto"
        value={config.category || "general"}
        textTransform="capitalize"
      >
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </Select>
      </div>
      <div>
      <Heading size="sm" fontWeight="400" marginLeft="5px" marginRight="5px">
        Country :
      </Heading>
      <Select
        onChange={updateConfig}
        name="country"
        width="auto"
        value={config.country || "general"}
        textTransform="capitalize"
      >
        {countries.map((country, index) => (
          <option key={index} value={country.code}>
            {country.name}
          </option>
        ))}
      </Select>
      </div>
    </div>
  );
}

export default HeadlineFilters;

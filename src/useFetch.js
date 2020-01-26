import { useState, useEffect } from "react";
export default function useFetch(url) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setData(
          data.results.map(d => {
            return {
              name: d.name,
              gender: d.gender,
              height: d.height,
              homeworld: d.homeworld,
              birth_year: d.birth_year
            };
          })
        );
      });
  }, []);
  return data;
}

import { useState, useEffect } from "react";
import { PropertyService } from "../services/property-service";
import type { Property } from "../data/properties";

/**
 * Custom hook to fetch and manage the properties list state
 */
export const useProperties = () => {
  const [data, setData] = useState<Property[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setLoading(true);
        const properties = await PropertyService.getAll();
        setData(properties);
      } catch (err) {
        setError("Failed to load properties. Please try again later.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  return { data, loading, error };
};

/**
 * Custom hook to fetch and manage a single property state
 */
export const useProperty = (id: string | undefined) => {
  const [data, setData] = useState<Property | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchProperty = async () => {
      try {
        setLoading(true);
        const property = await PropertyService.getById(parseInt(id));
        if (property) {
          setData(property);
        } else {
          setError("Property not found.");
        }
      } catch (err) {
        setError("An error occurred while fetching the property.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  return { data, loading, error };
};

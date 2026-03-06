import { properties, type Property } from "../data/properties";
import { sleep } from "../api/api-client";

/**
 * Property Service handles all property-related data fetching.
 * Currently using static data with simulated delay for architecture demonstration.
 */
export const PropertyService = {
  /**
   * Fetch all available properties
   */
  async getAll(): Promise<Property[]> {
    await sleep(800); // Simulate network latency
    return [...properties];
  },

  /**
   * Fetch a single property by ID
   */
  async getById(id: number): Promise<Property | null> {
    await sleep(500); // Simulate network latency
    const property = properties.find((p) => p.id === id);
    return property ? { ...property } : null;
  },

  /**
   * Send a contact inquiry for a property
   */
  async sendInquiry(data: {
    fullName: string;
    email: string;
    phone: string;
    message: string;
    propertyId?: number;
  }): Promise<{ success: boolean; message: string }> {
    await sleep(1500); // Simulate server processing
    console.log("Inquiry sent to API:", data);
    return {
      success: true,
      message: "Your inquiry has been sent successfully!",
    };
  },
};

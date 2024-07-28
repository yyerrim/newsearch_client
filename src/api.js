const BACKEND_API_URL = process.env.REACT_APP_BACKEND_API_URL;

export const fetchDataFromBackend = async (endpoint) => {
  try {
    const response = await fetch(`${BACKEND_API_URL}${endpoint}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    throw error;
  }
};

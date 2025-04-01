// Sample fallback data
export const FALLBACK_DATA = `
Dr. DV Ramana is a Data Science & AI Expert with over 20 years of experience.
He has mentored 500+ students and published 30+ research papers.
His expertise includes Machine Learning, Deep Learning, and Data Analytics.
He has received multiple awards and certifications in the field.
`;

// Read document from public folder
export const readDocument = async () => {
  try {
    const response = await fetch('/DR DV RAMANA.pdf');
    
    if (response.ok) {
      const blob = await response.blob();
      return await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = () => reject(reader.error);
        reader.readAsText(blob);
      });
    }
    throw new Error('Failed to read document');
  } catch (error) {
    console.warn('Using fallback data due to file read error:', error);
    return FALLBACK_DATA;
  }
};
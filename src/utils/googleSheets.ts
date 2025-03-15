export interface SheetData {
  id: string;
  col1: string;
  col2: string;
  col3: string;
}

// Temporary mock implementation until backend is ready
export async function fetchGoogleSheet(spreadsheetId: string, range: string): Promise<SheetData[]> {
  // Simulated API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Mock data
  return [
    {
      id: '1',
      col1: 'Sample Data 1',
      col2: 'Description 1',
      col3: 'Value 1'
    },
    {
      id: '2',
      col1: 'Sample Data 2',
      col2: 'Description 2',
      col3: 'Value 2'
    }
  ];
}
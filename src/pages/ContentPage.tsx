import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchGoogleSheet, SheetData } from '../utils/googleSheets';

const SHEET_CONFIG = {
  type1: { id: 'your-spreadsheet-id-1', range: 'Sheet1!A1:C' },
  type2: { id: 'your-spreadsheet-id-2', range: 'Sheet1!A1:C' },
  type3: { id: 'your-spreadsheet-id-3', range: 'Sheet1!A1:C' },
};

const ContentPage = () => {
  const { type } = useParams();
  const [data, setData] = useState<SheetData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!type || !SHEET_CONFIG[type as keyof typeof SHEET_CONFIG]) {
        setError('Invalid content type');
        setLoading(false);
        return;
      }

      try {
        const config = SHEET_CONFIG[type as keyof typeof SHEET_CONFIG];
        const tableData = await fetchGoogleSheet(config.id, config.range);
        setData(tableData);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch data. Please try again later.');
        setLoading(false);
        console.error('Error fetching data:', err);
      }
    };

    fetchData();
  }, [type]);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-xl text-gray-600">Loading...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-xl text-red-600">{error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-[#332f2f] mb-8 capitalize">{type}</h1>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Column 1
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Column 2
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Column 3
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((row) => (
              <tr key={row.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{row.col1}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{row.col2}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{row.col3}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ContentPage;
import { google } from 'googleapis';

export interface DocData {
  id: string;
  col1: string;
  col2: string;
  col3: string;
}

export async function fetchGoogleDoc(docId: string): Promise<DocData[]> {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: import.meta.env.VITE_GOOGLE_CLIENT_EMAIL,
        private_key: import.meta.env.VITE_GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/documents.readonly'],
    });

    const docs = google.docs({ version: 'v1', auth });
    const response = await docs.documents.get({ documentId: docId });
    const document = response.data;

    // Parse the document content
    const content = document.body?.content || [];
    const tableData: DocData[] = [];
    
    // Process document content and extract table data
    let currentRow: Partial<DocData> = {};
    let rowIndex = 0;

    content.forEach((element, index) => {
      if (element.paragraph?.elements) {
        const text = element.paragraph.elements
          .map(e => e.textRun?.content || '')
          .join('')
          .trim();

        if (text) {
          // Skip header row
          if (rowIndex > 0) {
            // Determine which column we're filling based on the structure
            if (!currentRow.col1) {
              currentRow.col1 = text;
            } else if (!currentRow.col2) {
              currentRow.col2 = text;
            } else if (!currentRow.col3) {
              currentRow.col3 = text;
              // Row is complete
              tableData.push({
                id: rowIndex.toString(),
                col1: currentRow.col1 || '',
                col2: currentRow.col2 || '',
                col3: currentRow.col3 || '',
              });
              currentRow = {};
            }
          }
          rowIndex++;
        }
      }
    });

    return tableData;
  } catch (error) {
    console.error('Error fetching Google Doc:', error);
    throw error;
  }
}
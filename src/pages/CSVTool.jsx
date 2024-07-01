import React, { useState } from 'react';
import CSVUpload from '@/components/CSVUpload';
import EditableTable from '@/components/EditableTable';
import CSVDownload from '@/components/CSVDownload';

const CSVTool = () => {
  const [data, setData] = useState([]);

  return (
    <div className="space-y-8">
      <CSVUpload onUpload={setData} />
      {data.length > 0 && (
        <>
          <EditableTable data={data} setData={setData} />
          <CSVDownload data={data} />
        </>
      )}
    </div>
  );
};

export default CSVTool;
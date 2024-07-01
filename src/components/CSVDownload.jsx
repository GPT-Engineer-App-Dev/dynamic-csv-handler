import React from 'react';
import { Button } from '@/components/ui/button';
import { json2csv } from 'json2csv';

const CSVDownload = ({ data }) => {
  const handleDownload = () => {
    const csv = json2csv(data);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.setAttribute('download', 'edited_data.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return <Button onClick={handleDownload}>Download CSV</Button>;
};

export default CSVDownload;
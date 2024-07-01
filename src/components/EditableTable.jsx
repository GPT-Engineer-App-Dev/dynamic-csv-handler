import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const EditableTable = ({ data, setData }) => {
  const handleCellChange = (e, rowIndex, columnName) => {
    const newData = [...data];
    newData[rowIndex][columnName] = e.target.value;
    setData(newData);
  };

  const handleAddRow = () => {
    const newRow = Object.keys(data[0]).reduce((acc, key) => ({ ...acc, [key]: '' }), {});
    setData([...data, newRow]);
  };

  const handleRemoveRow = (rowIndex) => {
    const newData = data.filter((_, index) => index !== rowIndex);
    setData(newData);
  };

  return (
    <div className="overflow-auto">
      <Table>
        <TableHeader>
          <TableRow>
            {Object.keys(data[0]).map((columnName) => (
              <TableHead key={columnName}>{columnName}</TableHead>
            ))}
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {Object.keys(row).map((columnName) => (
                <TableCell key={columnName}>
                  <Input
                    value={row[columnName]}
                    onChange={(e) => handleCellChange(e, rowIndex, columnName)}
                  />
                </TableCell>
              ))}
              <TableCell>
                <Button variant="destructive" onClick={() => handleRemoveRow(rowIndex)}>
                  Remove
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button onClick={handleAddRow} className="mt-4">
        Add Row
      </Button>
    </div>
  );
};

export default EditableTable;
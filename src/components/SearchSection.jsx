import React, { useState } from 'react';
import { Tabs, Tab, TextField, Button } from '@mui/material';

export default function SearchSection() {
  const [tab, setTab] = useState(0);
  return (
    <div className="">
       <Tabs value={tab} onChange={(e, newVal) => setTab(newVal)} centered>
        <Tab label="Flight" />
        <Tab label="Hotel" />
        <Tab label="Tour" />
        <Tab label="Visa" />
      // </Tabs>

      <div className="mt-6 bg-white p-6 rounded shadow-md">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          <TextField label="From (e.g., DAC)" fullWidth />
          <TextField label="To (e.g., CXB)" fullWidth />
          <TextField type="date" label="Departure Date" fullWidth InputLabelProps={{ shrink: true }} />
          <TextField type="date" label="Return Date" fullWidth InputLabelProps={{ shrink: true }} />
          <TextField label="Passengers" fullWidth />
          <Button variant="contained" className="bg-green-500" fullWidth>Search For Flight</Button>
        </div>
      </div>
    </div>
  );
}

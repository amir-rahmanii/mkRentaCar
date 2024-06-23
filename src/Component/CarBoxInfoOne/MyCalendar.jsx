import React, { useState } from 'react';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';

const MyCalendar = ({ fullYear , setFullYear }) => {

    const handleDataChange = (date) => {
            setFullYear(date)
    }

    return (
        <DatePicker
            className='w-full text-black/70 bg-white px-4 py-2.5'
            selected={fullYear}
            onChange={handleDataChange}
            minDate={new Date()}
            dateFormat="dd/MM/yyyy"
            monthPlaceholder="mm"
            yearPlaceholder='yyyy'
            dayPlaceholder='dd'
            value={fullYear ? fullYear : ""}
        />
    );
};

export default MyCalendar;


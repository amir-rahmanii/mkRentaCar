import React, { useState } from 'react';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';

const MyCalendar = ({ setFullYear }) => {
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDataChange = (date) => {
        setSelectedDate(date)
        if (date) {
            setFullYear({
                year: date.getFullYear(),
                month: date.getMonth(),
                date: date.getDate(),
                day: date.getDay()
            })
        }
    }

    return (
        <DatePicker
            className='w-full text-black/70 bg-white px-4 py-2.5'
            selected={selectedDate}
            onChange={handleDataChange}
            dateFormat="dd/MM/yyyy"
            monthPlaceholder="mm"
            yearPlaceholder='yyyy'
            dayPlaceholder='dd'
            value={selectedDate ? selectedDate : ""}
        />
    );
};

export default MyCalendar;


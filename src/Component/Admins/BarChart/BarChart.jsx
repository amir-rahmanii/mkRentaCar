import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const BarChart = () => {

    const [allRegisteredRentJanuary, setAllRegisteredRentJanuary] = useState('')
    const [allRegisteredRentFebruary, setAllRegisteredRentFebruary] = useState('')
    const [allRegisteredRentMarch, setAllRegisteredRentMarch] = useState('')
    const [allRegisteredRentApril, setAllRegisteredRentApril] = useState('')
    const [allRegisteredRentMay, setAllRegisteredRentMay] = useState('')
    const [allRegisteredRentJune, setAllRegisteredRentJune] = useState('')
    const [allRegisteredRentJuly, setAllRegisteredRentJuly] = useState('')
    const [allRegisteredRentAugust, setAllRegisteredRentAugust] = useState('')
    const [allRegisteredRentSeptember, setAllRegisteredRentSeptember] = useState('')
    const [allRegisteredRentOctober, setAllRegisteredRentOctober] = useState('')
    const [allRegisteredRentNovember, setAllRegisteredRentNovember] = useState('')
    const [allRegisteredRentDecember, setAllRegisteredRentDecember] = useState('')

    const getAllRegisteredRent = () => {
        fetch(`https://mkrentacar.liara.run/registeredRent`)
        .then(res => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json()
        })
            .then(result => {
                let filteredDateJanuary = result.filter(rent => rent.dateFull.slice(5 , 7) ==  "01")
                setAllRegisteredRentJanuary(filteredDateJanuary.length)

                let filteredDateFebruary = result.filter(rent => rent.dateFull.slice(5 , 7) ==  "02")
                setAllRegisteredRentFebruary(filteredDateFebruary.length)

                let filteredDateMarch = result.filter(rent => rent.dateFull.slice(5 , 7) ==  "03")
                setAllRegisteredRentMarch(filteredDateMarch.length)

                let filteredDateApril = result.filter(rent => rent.dateFull.slice(5 , 7) ==  "04")
                setAllRegisteredRentApril(filteredDateApril.length)

                let filteredDateMay = result.filter(rent => rent.dateFull.slice(5 , 7) ==  "05")
                setAllRegisteredRentMay(filteredDateMay.length)

                let filteredDateJune = result.filter(rent => rent.dateFull.slice(5 , 7) ==  "06")
                setAllRegisteredRentJune(filteredDateJune.length)

                let filteredDateJuly = result.filter(rent => rent.dateFull.slice(5 , 7) ==  "07")
                setAllRegisteredRentJuly(filteredDateJuly.length)

                let filteredDateAugust = result.filter(rent => rent.dateFull.slice(5 , 7) ==  "08")
                setAllRegisteredRentAugust(filteredDateAugust.length)

                let filteredDateSeptember = result.filter(rent => rent.dateFull.slice(5 , 7) == "09")
                setAllRegisteredRentSeptember(filteredDateSeptember.length)

                let filteredDateOctober = result.filter(rent => rent.dateFull.slice(5 , 7) ==  "10")
                setAllRegisteredRentOctober(filteredDateOctober.length)

                let filteredDateNovember = result.filter(rent => rent.dateFull.slice(5 , 7) ==  "11")
                setAllRegisteredRentNovember(filteredDateNovember.length)

                let filteredDateDecember = result.filter(rent => rent.dateFull.slice(5 , 7) ==  "12")
                setAllRegisteredRentDecember(filteredDateDecember.length)
          
            }) 
            .catch(error => console.error('There has been a problem with your fetch operation:', error));

    }

    useEffect(() => {
        getAllRegisteredRent()
    }, [])

    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
            {
                label: 'Monthly Data',
                // data: [allRegisteredRentJanuary.length , allRegisteredRentFebruary.length , allRegisteredRentMarch.length ,allRegisteredRentApril.length , allRegisteredRentMay.length, allRegisteredRentJune.length, allRegisteredRentJuly.length, allRegisteredRentAugust.length, ,allRegisteredRentSeptember.length, allRegisteredRentOctober.length, allRegisteredRentNovember.length , allRegisteredRentDecember.length],
                data: [allRegisteredRentJanuary, allRegisteredRentFebruary, allRegisteredRentMarch, allRegisteredRentApril, allRegisteredRentMay, allRegisteredRentJune, allRegisteredRentJuly, allRegisteredRentAugust, allRegisteredRentSeptember, allRegisteredRentOctober, allRegisteredRentNovember, allRegisteredRentDecember],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Rental 2024',
            },
        },
    };

    return (
        <div className='hidden lg:block w-[800px] h-[400px]'>
            <Bar data={data} options={options} />
        </div>
    );
};

export default BarChart;
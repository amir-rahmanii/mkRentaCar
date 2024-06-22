import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const MyPieChart = () => {
  const [filteredSuvCarsLength, setFilteredSuvCarsLength] = useState('')
  const [filteredLuxuryCarsLength, setFilteredLuxuryCarsLength] = useState('')
  const [filteredSportsCarsLength, setFilteredSportsCarsLength] = useState('')
  const [filteredEconomyCarsLength, setFilteredEconomyCarsLength] = useState('')
  const [filteredConvertibleCarsLength, setFilteredConvertibleCarsLength] = useState('')
  const [filteredExoticCarsLength, setFilteredExoticCarsLength] = useState('')


  const getAllCars = () => {
    fetch(`https://mkrentacar.liara.run/cars`)
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json()
      })
      .then(result => {
        let filteredSuvCars = result.filter(data => data.carType === "Suv Cars");
        setFilteredSuvCarsLength(filteredSuvCars.length);

        let filteredLuxuryCars = result.filter(data => data.carType === "Luxury Cars");
        setFilteredLuxuryCarsLength(filteredLuxuryCars.length);

        let filteredSportsCars = result.filter(data => data.carType === "Sport Cars");
        setFilteredSportsCarsLength(filteredSportsCars.length);

        let filteredEconomyCars = result.filter(data => data.carType === "Economy Cars");
        setFilteredEconomyCarsLength(filteredEconomyCars.length);

        let filteredConvertibleCars = result.filter(data => data.carType === "Convertible Cars");
        setFilteredConvertibleCarsLength(filteredConvertibleCars.length);

        let filteredExoticCars = result.filter(data => data.carType === "Exotic Cars");
        setFilteredExoticCarsLength(filteredExoticCars.length);
      })
      .catch(error => console.error('There has been a problem with your fetch operation:', error));

  }

  useEffect(() => {
    getAllCars()
  }, [])

  const data = {
    labels: ['Suv', 'Luxury', 'Sport', 'Economy', 'Convertible', 'Exotic'],
    datasets: [
      {
        label: '# of Votes',
        data: [filteredSuvCarsLength, filteredLuxuryCarsLength, filteredSportsCarsLength, filteredEconomyCarsLength, filteredConvertibleCarsLength, filteredExoticCarsLength],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(0, 50, 255, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(0, 50, 255, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false, // To allow custom width and height
  };

  return (
    <div className='w-[200px] h-[300px] lg:w-[400px] lg:h-[400px]'>
      <Pie data={data} options={options} />
    </div>
  );
};

export default MyPieChart;
import Index from "./Page/Index/Index"
import AllCars from "./Page/AllCars/AllCars"
import Cars from "./Page/Cars/Cars"
import CarsTypeCar from "./Page/CarsTypeCar/CarsTypeCar"
import CarBrand from "./Page/CarBrand/CarBrand"
import CarInfos from "./Page/CarInfos/CarInfos"





let routes = [
    {path : '/' , element : <Index />},
    {path : '/all-cars' , element : <AllCars />},
    {path : '/cars' , element : <Cars />  },
    {path : '/cars/:type' , element : <CarInfos /> },
    {path : '/cars/:type/:carInfo' , element : <CarsTypeCar /> },
    {path : '/brands/:brand' , element : <CarBrand />},
]






export default routes
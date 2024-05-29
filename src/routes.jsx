import Index from "./Page/Index/Index"
import AllCars from "./Page/AllCars/AllCars"
import Cars from "./Page/Cars/Cars"
import CarsTypeCar from "./Page/CarsTypeCar/CarsTypeCar"
import CarBrand from "./Page/CarBrand/CarBrand"
import CarInfos from "./Page/CarInfos/CarInfos"
import AdminLogin from "./Page/Admin/AdminLogin"
import Dashbord from "./Page/Admin/Dashbord/Dashbord"
import AdminRegidters from "./Page/Admin/AdminRegidters/AdminRegidters"
import DashboardIndex from "./Page/Admin/DashboardIndex/DashboardIndex"
import AdminCars from "./Page/Admin/AdminCars/AdminCars"





let routes = [
    {path : '/' , element : <Index />},
    {path : '/all-cars' , element : <AllCars />},
    {path : '/cars' , element : <Cars />  },
    {path : '/cars/:type' , element : <CarInfos /> },
    {path : '/cars/:type/:carInfo' , element : <CarsTypeCar /> },
    {path : '/brands/:brand' , element : <CarBrand />},

    {path : '/admin' , element : <AdminLogin />},

    {path : '/dashbord' , element: <Dashbord /> , children : [
        {path : '' , element : <DashboardIndex />},
        {path : 'registers' , element : <AdminRegidters />},
        {path : 'cars' , element : <AdminCars />},
    ]}
]






export default routes
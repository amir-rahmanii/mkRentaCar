import Index from "./Page/Index/Index"
import AllCars from "./Page/AllCars/AllCars"
import Cars from "./Page/Cars/Cars"





let routes = [
    {path : '/' , element : <Index />},
    {path : '/all-cars' , element : <AllCars />},
    {path : '/cars' , element : <Cars /> , children:[
        {path : ':Cartype' , element : <Cars />},
    ]},
]






export default routes
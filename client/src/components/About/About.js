import { useEffect } from 'react';
import { Route, Routes, Navigate, useParams, useLocation, useNavigate } from 'react-router-dom';


const About = () => {
    const { name } = useParams();
    const location = useLocation();

    const number = Math.random();
    const navigate = useNavigate();
    // // console.log(name)
    // //console.log(number);
    let toRedirect = number > 0.6;
    console.log('-------------------------')
    console.log(toRedirect);
    console.log(number);


    useEffect(() => {
        if (toRedirect) {
            console.log("Redirecting...Home Page")
            navigate('/')
        } else {
            console.log("About page...");

        }
    })




    return (

        <main className='main-container'>
            <h1>About {name} page</h1>

            {/* <Routes>
                <Route path='pesho' element={<h2>Pesho is teh Best!!!</h2>}>
                </Route>
            </Routes> */}
        </main>
    );
}
export default About
const Home = () => {

    fetch('http://localhost:9000/api/employees',{
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });

    return ( 
        <div className="">
            <h2>Welcome home</h2>
            

        </div>
     );
}
 
export default Home;
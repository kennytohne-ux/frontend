const Form = () => {

    const handleSubmit = e => {
        e.preventDefault();

    const form = e.target;
    const data = {
        username: form.username.value,
        password: form.password.value,
    }

        fetch('http://localhost:9000/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
            credentials: "include",
        })
        .then(res=> res.json())
        .then(res=> {
            if(res.message === 'logged in successfully'){
                window.location.href = '/home';
            }
            else{
                alert(res.message || 'login failed');
            }
        })
        .catch(()=> alert('Error Logging in'));
    }
    

    return ( 
        <div className="form-card">
            <form onSubmit={handleSubmit}>
                <h2>Welcome tp epcm</h2>
                <p>Enter credentials to login</p>

                <div className="input">
                    <label htmlFor="">User Name:</label>
                    <input type="text" name="username" id="" placeholder="John Doe" required/>
                </div>

                <div className="input">
                    <label htmlFor="">Password:</label>
                    <input type="password" name="password" id="" placeholder="********" required/>
                </div>

                <button type="submit">Login</button>
            </form>
        </div>
     );
}
 
export default Form;
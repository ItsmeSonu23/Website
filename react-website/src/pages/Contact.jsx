export const Contact = () => {
    const handleFormSubmit = (formData)=>{
       const formInputData = Object.fromEntries(formData.entries()) 
    }
    return <section className="section-contact">
        <h2 className="container-title">Contact Us</h2>
        <div className="contact-wrapper container">
            <form action={handleFormSubmit}>
                <input type="text" className="form-control" required autoComplete="false" name="username" placeholder="Enter your username" />
                <input type="email" className="form-control" required autoComplete="false" name="email" placeholder="Enter your email" />
                <textarea name="message" className="form-control" rows='10' placeholder="Enter your message" required autoComplete="false">
                </textarea>
                <button type="submit" value='send'>Send</button>
            </form>
        </div>
    </section>
}
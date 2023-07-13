
const Contact = () => {
    return (
  <div className="contactContainer">
    <section className="contactForm">
      <h2>Contact Form</h2>
      <form>
        <label for="name"> Name: </label> 
        <input id="name" type="text" placeholder="Name"/><br/>
        <label for="email"> Email: </label>              
        <input id="email" type="email" placeholder="Email"/><br/>             
        <textarea placeholder="Message"></textarea><br/>
        <button value="SEND">SEND</button>
      </form>
   </section>
 </div> );
}
 
export default Contact;
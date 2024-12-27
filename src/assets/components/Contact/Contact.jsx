import React, { useState } from 'react';
import './Contact.css'; // Importing the CSS file
import img1 from '../../assets/msg.png';
import mail from '../../assets/mail.png';
import call from '../../assets/call.png';
import loc from '../../assets/loc.png';
import web from '../../assets/web.png';

const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
        formData.append("access_key", "f8b253fd-fbd1-4932-aac6-60178a159901");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setResult("Form Submitted Successfully");
                event.target.reset();
            } else {
                setResult(data.message);
            }
        } catch (error) {
            setResult("Error submitting form. Please try again later.");
        }
    };

    return (
        <div className='contact'>
            <div className="concol">
                <h3>Send us a Message <img src={img1} alt="message" /></h3>
                <p>Crafting communities where every brick tells a story of trust and excellence.</p>
                <ul>
                    <li><img src={web} alt="website" /> www.aryavartadevelopers.com</li>
                    <li><img src={mail} alt="email" /> poornaramineni6@gmail.com</li>
                    <li><img src={call} alt="phone" /> +91 9030684141</li>
                    <li><img src={loc} alt="location" /> Behind NRI Hospital, Mangalagiri, Guntur, Andhra Pradesh-522503</li>
                </ul>
            </div>
            <div className="concol">
                <form onSubmit={onSubmit}>
                    <label>Your Name</label>
                    <input type="text" name='name' placeholder='Enter Your Name' required />
                    <label>Your Number</label>
                    <input type="tel" name='phone' placeholder='Enter Your Mobile Number' required />
                    <label>Write Your Message</label>
                    <textarea name="message" rows="6" placeholder='Enter your Message' required></textarea>
                    <button type='submit' className='btn dkbtn btn1'>Submit Now</button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    );
};

export default Contact;

import React, { useRef, useState } from 'react'
import { assets } from '../../assets/assets'

const LandingPage = () => {
    const [formData, setFormData] = useState({
        username: '',
        phonenumber: '',
        city: ''
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: ''
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = {};

        if (!formData.username.trim()) {
            validationErrors.username = "Username is required";
        } else if (formData.username.length < 3) {
            validationErrors.username = "Enter at least 3 letters for username";
        }

        if (!formData.phonenumber.trim()) {
            validationErrors.phonenumber = "Phone number is required";
        } else if (!/^[0-9\b]+$/.test(formData.phonenumber)) {
            validationErrors.phonenumber = "Enter valid phone number";
        } else if (formData.phonenumber.trim().length !== 10) {
            validationErrors.phonenumber = "Enter valid 10 digit phone number";
        }

        if (!formData.city.trim()) {
            validationErrors.city = "City name is required";
        } else if (formData.city.length < 3) {
            validationErrors.city = "Enter at least 3 letters for city name";
        }

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            setSubmitted(true);
            setFormData({
                username: '',
                phonenumber: '',
                city: ''
            });
        }
    };

    return (
        <main>
            <section className='bg bg-overlay p-[40px]'>

                <div className='mx-[200px] max-[1024px]:mx-auto'>
                    <div className="flex items-center max-[1024px]:flex-col gap-5 ">

                        <div className='relative'>
                            <img className='w-[240px] h-[360px] mr-10 max-[1024px]:mx-auto' src={assets.iphone_img} alt="" />

                            <video
                                className='w-[180px] h-[348px] mr-10 max-[1024px]:mx-auto'
                                controls
                            >
                                <source src={assets.food_video} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>

                        <div className="max-[1024px]:text-center w-full mt-10">
                            <img className='w-[80px] max-sm:hidden' src={assets.logo} alt="" />
                            <h1 className=' text-white font-bold text-[40px] '>Welcome to Foodie</h1>
                            <p className='text-white font-medium mb-3 '>At foodie, we redefine convenience with our seamless food delivery service. Whether you're craving the flavors of home or exploring new culinary delights, foodie brings it all to your doorstep. From hearty breakfasts to gourmet dinners and everything in between, our curated menu caters to every palate and preference.</p>
                            <button className='btn-2'>Join the Waitlist</button>
                        </div>
                    </div>
                </div>

            </section>

            <section className='bg-[#fecaca] text-center py-[68px]'>
                <h1 className='text-[#ea580c] font-bold text-[40px]'>Join the Waitlist</h1>
                {!submitted ? (
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-wrap gap-5 justify-center mt-4 mb-6 ">
                            <div className='flex flex-col'>
                                <input
                                    className={`text-field ${errors.username ? 'border-red-500' : ''}`}
                                    type="text"
                                    placeholder='Name'
                                    name="username"
                                    value={formData.username}
                                    onChange={handleChange}
                                />
                                {errors.username && <span className="text-red-500">{errors.username}</span>}
                            </div>

                            <div className='flex flex-col'>
                                <input
                                    className={`text-field ${errors.phonenumber ? 'border-red-500' : ''}`}
                                    type="text"
                                    placeholder='Phone Number'
                                    name="phonenumber"
                                    value={formData.phonenumber}
                                    onChange={handleChange}
                                />
                                {errors.phonenumber && <span className="text-red-500">{errors.phonenumber}</span>}
                            </div>

                            <div className='flex flex-col'>
                                <input
                                    className={`text-field ${errors.city ? 'border-red-500' : ''}`}
                                    type="text"
                                    placeholder='City'
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                />
                                {errors.city && <span className="text-red-500">{errors.city}</span>}
                            </div>
                        </div>
                        <button className='btn' type="submit">Join the Waitlist</button>
                    </form>
                ) : (
                    <div>
                        <p className='text-[#ea580c] font-bold text-[40px] mt-[60px]'>Thank you!</p>
                    </div>
                )}
            </section>

            <footer className='bg-black'>
                <p className='text-center text-white'>©Foodie, 2024</p>
            </footer>
        </main>
    )
}

export default LandingPage

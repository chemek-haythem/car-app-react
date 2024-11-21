import React from 'react';
import './home.css';

const Home = () => {
    return (
        <div>        
            <header>
                <h1>Welcome to our cars store</h1>
            </header>
            <main>
                <section>
                    <h2>Find the Perfect Car for You</h2>
                    <p>Welcome to Car Sales, where finding the perfect car for you is our mission. Our extensive collection features a diverse range of both new and used cars, ensuring that every customer can discover the vehicle that aligns perfectly with their preferences and needs. Whether you're in search of a sleek and modern model or a reliable and budget-friendly option, our curated selection offers something for everyone. Explore our inventory and embark on a journey to find the ideal car that complements your lifestyle and aspirations. At Car Sales, your dream car is just a click away.</p>
                </section>
                <section>
                    <h2>Explore Our Collection</h2>
                    <p>Discover a wide range of cars for sale. Whether you're looking for a new or used car, we have the perfect options for you.</p>
                    <a href="CarList">Explore car List</a>
                </section>

                <section>
                    <h2>Join my cars store Community</h2>
                    <p>Join today! Sign up or log in to unlock exclusive features and be part of the ultimate automotive experience. As a member of my cars store, you'll enjoy personalized car recommendations, early access to pre-orders, and connect with a dynamic community of fellow car enthusiasts. Your journey into the world of cars begins here. Login or register now to rev up your automotive passion with Car</p>
                    <a href="Login">Login / Register</a>
                </section>
                <section>
                    <h2>Why cars Haven?</h2>
                    <ul>
                        <li><strong>Diverse Inventory:</strong> Explore a vast collection featuring thousands of cars at your fingertips. From sleek sedans to powerful SUVs, we have a vehicle for every preference.</li>
                        <li><strong>Convenience:</strong> Enjoy the ease of browsing through our extensive inventory, secure transactions, and prompt deliveries. We prioritize your comfort and satisfaction throughout the car selection and purchasing process.</li>
                        <li><strong>Community Engagement:</strong>Join a passionate community of car enthusiasts at Car Haven. Engage in discussions, share your favorite models, and stay updated on the latest trends and automotive news. Connect with fellow enthusiasts who share your love for cars.</li>
                        <li><strong>Personalized Driving Experience:</strong>Experience the difference with Car Haven's personalized approach. Receive tailored recommendations based on your preferences, ensuring that every drive is a reflection of your unique style and needs. Discover the perfect vehicle for you at Car Haven, where your automotive journey is our priority.</li>
                    </ul>
                </section>
            </main>   
        </div>
    );
};

export default Home;
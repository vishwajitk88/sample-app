import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Card from './components/Card';
import Form from './components/Form';
import './App.css';

function App() {

  const handleFormSubmit = (formData) => {
    // Handle form submission logic here
    console.log('Form submitted with data:', formData);
  };

  return (
    <div className="app">
      <Header />
      <div className="main-content">

        <div className="content">
          <h1>Welcome to Sample App</h1>

          <Card
            image="https://placekitten.com/200/300"
            title="Cute Kitten"
            description="An adorable kitten picture."
          />

          <Form onSubmit={handleFormSubmit} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
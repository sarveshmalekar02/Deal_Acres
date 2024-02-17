import React from 'react';

const CheckBoxList: React.FC = () => {
    const checkboxLabels = [
        { id: "aerobics-room", label: "Aerobics Room" },
    { id: "air-conditioning", label: "Air Conditioning" },
    { id: "amphitheatre", label: "Amphitheatre" },
    { id: "arts-craft-studio", label: "Arts & Craft Studio" },
    { id: "atm", label: "ATM" },
    { id: "badminton-courts", label: "Badminton Courts" },
    { id: "banquet-hall", label: "Banquet Hall" },
    { id: "bar-lounge", label: "Bar & Lounge" },
    { id: "barbeque-pit", label: "Barbeque Pit" },
    { id: "cafeteria-food-court", label: "Cafeteria/Food Court" },
    { id: "car-parking", label: "Car Parking" },
    { id: "car-wash-area", label: "Car Wash Area" },
    { id: "club-house", label: "Club House" },
    { id: "coffee-lounge", label: "Coffee Lounge" },
    { id: "concierge-service", label: "Concierge Service" },
    { id: "conference-room", label: "Conference Room" },
    { id: "creche-facility", label: "Creche Facility" },
    { id: "cricket-pitch", label: "Cricket Pitch" },
    { id: "cycling-track", label: "Cycling Track" },
    { id: "television", label: "Television" },
    { id: "earthquake-resistant", label: "Earthquake Resistant" },
    { id: "escalators", label: "Escalators" },
    { id: "fire-fighting-equipment", label: "Fire Fighting Equipment" },
    { id: "garden", label: "Garden" },
    { id: "guest-accommodation", label: "Guest Accommodation" },
    { id: "gym", label: "Gym" }
    ];

    return (
        <div className="flex flex-col flex-wrap">
            {checkboxLabels.map((box, index) => (
                <span key={index}>
                    <input type='checkbox' 
                    //id={`checkbox-${box.label}-${index}`} 
                    />
                    <label 
                    //htmlFor={`checkbox-${box.label}-${index}`} 
                    className="ml-1">{box.label}</label>
                </span>
            ))}
        </div>
    );
};

export default CheckBoxList;

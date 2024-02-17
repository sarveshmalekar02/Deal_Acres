import React from 'react';

const CheckBoxList2 = () => {
    const checkboxLabels = [
        { id: "indoor-games-room", label: "Indoor Games Room" },
        { id: "intercom-facility", label: "Intercom Facility" },
        { id: "internet-wifi", label: "Internet/WiFi" },
        { id: "jogging-track", label: "Jogging Track" },
        { id: "kids-play-area", label: "Kids Play Area" },
        { id: "laundry", label: "Laundry" },
        { id: "lift", label: "Lift" },
        { id: "lift", label: "Lift" },
        { id: "maintenance-staff", label: "Maintenance Staff" },
        { id: "medical-centre", label: "Medical Centre" },
        { id: "meditation-area", label: "Meditation Area" },
        { id: "mini-theatre", label: "Mini Theatre" },
        { id: "multiplexes", label: "Multiplexes" },
        { id: "park", label: "Park" },
        { id: "piped-gas", label: "Piped gas" },
        { id: "power-backup", label: "Power Backup" },
        { id: "reserved-parking", label: "Reserved Parking" },
        { id: "retail-shops", label: "Retail Shops" },
        { id: "ro-water-system", label: "RO Water System" },
        { id: "sauna-spa", label: "Sauna/Spa" },
        { id: "security-cctv", label: "Security (CCTV)" },
        { id: "swimming-pool", label: "Swimming Pool" },
        { id: "tennis-courts", label: "Tennis Courts" },
        { id: "vastu-friendly", label: "Vastu Friendly" },
        { id: "visitor-parking", label: "Visitor Parking" },
        { id: "waste-disposal", label: "Waste Disposal" }
    ];

    return (
        <div className="flex flex-col flex-wrap">
            {checkboxLabels.map((label, index) => (
                <span key={index}>
                    <input type='checkbox' 
                    //id={`checkbox-${label.id}-${index}`} 
                    />
                    <label 
                    //</span>htmlFor={`checkbox-${label.id}-${index}`} className="ml-1"
                    >{label.label}</label>
                </span>
            ))}
        </div>
    );
};

export default CheckBoxList2;

import React from 'react';
import DetailCard from './DetailCard';
import image from '../../../assets/warehouse/transport-logistics-products-2.jpg';
const IslansFreight = () => {

    return (
        <DetailCard 
        topicTop="Air Freight"
        topicBottom="Speed When It Matters Most"
        description="When time is critical, UFS's Air Freight solutions ensure that your cargo takes flight, reaching its destination quickly and securely. This statement highlights the speed and security of UFS's air freight services."
        subTopic="Our Air Freight Services include:"
        subPoint1="Global Reach:"
        subPointDes1="Connecting you to key trade routes and airports worldwide, ensuring your goods are delivered."
        subPoint2="Express Shipping:"
        subPointDes2="When deadlines are tight, our express air freight solutions ensure that your urgent shipments move at top speed."
        subPoint3="Door-to-Door Solutions:"
        subPointDes3="End-to-end air freight services, from pick-up to customs clearance and final delivery, giving you full control and peace of mind."
        conclusion="At UFS, we move your cargo as swiftly as your business needs. "
        image={image}
        imagePosition = "Right"
        buttoncolor = "orange"
        buttonHoverColor = "green"
        
        />
    );
}

export default IslansFreight;
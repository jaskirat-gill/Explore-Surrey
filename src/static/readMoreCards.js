// Contains cards to be displayed on read more page
let github = "github.com/jaskirat-gill"
let linkedIn = "linkedin.com/in/jaskirat-s-gill"
const readMoreCards = [
    {
        title: 'How To Use',
        description:
            "Click 'Launch Map' to view application. Under settings you can enable/disable labelled layers to select what data you wish to see. Zoom in on the map to see more pins and click the pins to view information.",
        imageUrl: process.env.PUBLIC_URL + '/assets/img1.jpeg',
        time: 1500,
    },
    {
        title: 'Current Features',
        description:
            "Layer Options: Live Traffic Stills, Registered Restaurants/Cafeterias, Recent Fraser Health Inspection Restaurant Inspections, Speed Control (Speed Bumps, Traffic Circles)",
        imageUrl: process.env.PUBLIC_URL + '/assets/img2.jpg',
        time: 1500,
    },
    {
        title: 'Planned Features',
        description:
            "Planned: Crime Reports (Criminal & Auto Theft), Active Traffic Obstructions (Live Special Events & Construction), Speed & Red Light Cameras, " +
            "Median Statistics For Neighbourhood (Income/Crime/Home Price)" +
            "School Statistics (Enrollment/Grad Rate)" +
            "Lobbying Registry (Definition: advocates that work to influence political decisions on behalf of individuals and organizations)" +
            "Active Business Licenses (Commercial & Industrial)" +
            "Alternate Charging (Electric, Hydrogen)" +
            "Pay Parking" +
            "Places Of Interest" +
            "Public Washrooms" +
            "Traffic Signals" +
            "Subdivision Markers" +
            "Park Structures (Benches, Gates, Shelters, Tables)" +
            "City Financial Plans & Reports" +
            "Council Expense Reports" +
            "Building Inventory (Commerical/Industrial/Residential)" +
            "Casualty Collision Rate" +
            "Capital Construction" +
            "Schools" +
            "(Possible) Historical Imaging (1990-Current)" +
            "(Possible) Real Time Transit",
        imageUrl: process.env.PUBLIC_URL + '/assets/img3.jpg',
        time: 1500,
    },
    {
        title: 'About Project',
        description:
            "Meant to provide conveniant access to vital information regarding the city. Data powered by City Of Surrey's Open Data Program and datasets",
        imageUrl: process.env.PUBLIC_URL + '/assets/img4.jpg',
        time: 1500,
    },
    {
        title: 'About Developer',
        description:
            "Developed and maintained by a current University Of British Columbia CS Major. Portfolio can be found in 'Links' card.",
        imageUrl: process.env.PUBLIC_URL + '/assets/img5.jpg',
        time: 1500,
    },
    {
        title: 'Links',
        description:
            "Github: " + github + "\n\n" + "LinkedIn: " + linkedIn,
        imageUrl: process.env.PUBLIC_URL + '/assets/img6.jpeg',
        time: 1500,
    },
];

export default readMoreCards;
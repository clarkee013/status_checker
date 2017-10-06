use status;

db.status.insert([
    {
        name: "Critical",
        colour: "Red",
        resolved: false,
        startDate: "01/10/2017",
        lastUpdated: "03/10/2017",
        endDate: "10/10/2017",
        event: [{
            title: "Critical Server Update",
            eventText: "Required servicing to server",
            dateEventCreated: "01/10/2017",
            eventComments: [{
                commentText: "current update will be delivered as scheduled",
                commentDate: "08/10/2017"
            }] 
        }]

    }
])



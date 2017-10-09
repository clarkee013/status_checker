use statuses;

db.statuses.insert([{
        _id: 1,
        name: "Critical",
        colour: "Red",
        resolved: false,
        startDate: "01/10/2017",
        lastUpdated: "02/10/2017",
        resolvedDate: "02/10/2017",
    },
    {
        _id: 2,
        name: "Major",
        colour: "Amber",
        resolved: true,
        startDate: "03/10/2017",
        lastUpdated: "03/10/2017",
        resolvedDate: "04/10/2017",
    },
    {
        _id: 3,
        name: "Minor",
        colour: "Blue",
        resolved: false,
        startDate: "01/10/2017",
        lastUpdated: "02/10/2017",
        resolvedDate: "02/10/2017",
    },
    {
        _id: 4,
        name: "Cosmetic",
        colour: "Green",
        resolved: false,
        startDate: "01/11/2017",
        lastUpdated: "05/10/2017",
        resolvedDate: "02/11/2017",
    },
])

use events;

db.events.insert([{
        _id: 1,
        statusId: 1,
        startDate: "01/10/2017",
        lastUpdated: "02/10/2017",
        resolvedDate: "02/10/2017"
    },
    {
        _id: 2,
        statusId: 2,
        startDate: "03/10/2017",
        lastUpdated: "03/10/2017",
        resolvedDate: "04/10/2017"
    },
    {
        _id: 3,
        statusId: 3,
        startDate: "01/10/2017",
        lastUpdated: "02/10/2017",
        resolvedDate: "02/10/2017"
    },
    {
        _id: 4,
        statusId: 4,
        startDate: "05/10/2017",
        lastUpdated: "05/10/2017",
        resolvedDate: "02/11/2017"
    },
])

use comments;

db.comments.insert([{
        _id: 1,
        eventId: 1,
        commentDate: "01/10/2017",
        commentText: "Test text for 1st comment - event 1"
    },
    {
        _id: 2,
        eventId: 1,
        commentDate: "02/10/2017",
        commentText: "Test text for 2nd comment - event 1"
    },
    {
        _id: 3,
        eventId: 2,
        commentDate: "03/10/2017",
        commentText: "Test text for 1st comment - event 2"
    },
    {
        _id: 4,
        eventId: 3,
        commentDate: "04/10/2017",
        commentText: "Test text for 1st comment - event 3"
    },
    {
        _id: 5,
        eventId: 4,
        commentDate: "05/10/2017",
        commentText: "Test text for 1st comment - event 4"
    },

])
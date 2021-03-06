const shapeBuilder = require('../../helper/quiztoshape');

function setup() { 
    var cnv = createCanvas(500, 500);
    // positions canvas 50px to the right and 100px
    // below upper left corner of the window
    cnv.position(1000, 300);
    background(176, 155, 204);
}

shapeBuilder.setup //  this is the same function as the above 'setup' function

// function returnShape(num) {
//     shapes = [quad(38, 31, 86, 20, 69, 63, 30, 76), ellipse(50, 50, 80, 80), rect(40, 120, 120, 40)]

//     return shapes[num]
// }

function check(){

    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var correct = 0;

    //shapes based off geography

    if (question1 == "Urban") {
        shapeToDraw = "quad"
    }

    if (question1 == "Rural") {
        shapeToDraw = "rect"
    }

    if (question1 == "Suburban") {
        shapeToDraw = "circle"
    }

    //line thickness based off employment

    if (question2 == "Employee") {
        
        shapeLine = "thick"
    } 
    if (question2 == "Customer") {
        
        shapeLine = "medium"
    } 
    if (question2 == "Other") {
        
        shapeLine = "thin"
    }   

    //color based off location
    if (question3 == "Asia") {

        shapeColor = "PMS2685"
    }
    if (question3 == "North America") {

        shapeColor = "PMS130"
    }
    if (question3 == "South America") {
        
        shapeColor = "PMS"
    }
    if (question3 == "Antartica") {
       
       shapeColor = "PMS2995"
    }
    if (question3 == "Australia") {

       shapeColor = "PMS362"
    }
    if (question3 == "Africa") {
       
       shapeColor = "PMS375"
    }
    if (question3 == "Europe") {
       
       shapeColor = "PM"
    }

    var dataToSend = {
        "q1": question1,
        "q2": question2,
        "q3": question3,
    }


    var attributeToSend = {
        "q1": shapeToDraw,
        "q2": shapeLine,
        "q3": shapeColor,
    }

    $.post("/quiz", dataToSend, function(returnn) {
        console.log(returnn);
    });

    $.post("/canvas", attributeToSend, function(returnn) {
        console.log(returnn);
        console.log(attributeToSend);
    });

    $.post("/canvas", dataToSend, function(returnn) {
        console.log(returnn);
    });

    $.post("/models/shapes", dataToSend, function(returnn) {
        console.log(returnn);
    });


    quiztoshape();

    // app.post("/quiz", dataToSend, function(returnn) {
    //     var dataToSend = new shapes(req.body);
    //     dataToSend.save()
    //         .then(item => {
    //         res.send("item saved to database");
    //     })
    //         .catch(err => {
    //         res.status(400).send("unable to save to database");
    //     });
    // });


    // alert('I am at ' + dataToSend.q1);

}




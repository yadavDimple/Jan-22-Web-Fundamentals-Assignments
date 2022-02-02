var num = parseInt(prompt("Please enter  marks"));

if (isNaN(num)) {
            alert("Please enter a valid number Not < ${num} >");
}    else {                                                    


    var obj = {                                      
        'first_name': "Dimple",                 
        'last_namename': "Yadav",
        'age': 20,
        'email':"dimleyadav155@gmail.com",
        'students': [                                 
            { 
                   name: "Riya",  
                   marks: 80 
             },
            {      name: "Akash",
                   marks: 46 
             },
            {        
                    name: "Aditya",
                    marks: 67 
                },
              {
                     name: "Amit",  
                     marks:78 
                  },
            {
                      name: "Annu",  
                      marks: 57 
                },
            { 
                     name: "Anshul",      
                     marks: 37,
              },
            {
                        name: "Arpit", 
                        marks: 29 ,
             },
            { 
                        name: "Muskan",  
                        marks: 86 ,
                 },
            {
                          name: "Anushka", 
                          marks: 48 ,
                },
            { 
                         name: "Aarjoo", 
                         marks: 53 ,
                }
        ]

    };
    var count = 0;     
                             
    var studentslength = obj.students.length;     
    
    var num1  =  obj.students; 

    for (i = 0;  i < studentslength;  i++)   {                     
              var   score = (num1[i].marks);

        if (score  >=  num) {
                   console.log(obj.students[i].name);
                    console.log(obj.students[i].marks);
                    count ++;
        }
    }                   
            console.log(count+" student have scored equal to or more then those marks.");
}

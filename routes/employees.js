var employees = [
    {category: "Food", "coordinates": "48.858093+2.294694","website": "https://google.com" ,"address": "Some address 3493898" , "id": 0, "Name": "James King", "reports": 4, "title": "President and CEO", "department": "Corporate", "mobilePhone": "617-000-0001", "officePhone": "781-000-0001", "email": "jking@fakemail.com", "city": "Boston, MA", "pic": "James_King.jpg", "twitterId": "@fakejking", "blog": "http://coenraets.org"},
    {category: "Food","coordinates": "48.858093+2.294694","website": "https://google.com" ,"address": "Some address 0009" , "id": 1, "Name": "Julie Taylor", "managerId": 0, "managerName": "James King", "reports": 2, "title": "VP of Marketing", "department": "Marketing", "mobilePhone": "617-000-0002", "officePhone": "781-000-0002", "email": "jtaylor@fakemail.com", "city": "Boston, MA", "pic": "Julie_Taylor.jpg", "twitterId": "@fakejtaylor", "blog": "http://coenraets.org"},
    {category: "Games","coordinates": "48.858093+2.294694","website": "https://google.com" ,"address": "Some address 01" ,"id": 2, "Name": "Eugene Lee", "managerId": 0, "managerName": "James King", "reports": 0, "title": "CFO", "department": "Accounting", "mobilePhone": "617-000-0003", "officePhone": "781-000-0003", "email": "elee@fakemail.com", "city": "Boston, MA", "pic": "Eugene_Lee.jpg", "twitterId": "@fakeelee", "blog": "http://coenraets.org"},
    {category: "Cars","coordinates": "48.858093+2.294694","website": "https://google.com" ,"address": "Some address 67" ,"id": 3, "Name": "John Williams", "managerId": 0, "managerName": "James King", "reports": 3, "title": "VP of Engineering", "department": "Engineering", "mobilePhone": "617-000-0004", "officePhone": "781-000-0004", "email": "jwilliams@fakemail.com", "city": "Boston, MA", "pic": "John_Williams.jpg", "twitterId": "@fakejwilliams", "blog": "http://coenraets.org"},
    {category: "Flowers","coordinates": "48.858093+2.294694","website": "https://google.com" ,"address": "Some address 99" ,"id": 4, "Name": "Ray Moore", "managerId": 0, "managerName": "James King", "reports": 2, "title": "VP of Sales", "department": "Sales", "mobilePhone": "617-000-0005", "officePhone": "781-000-0005", "email": "rmoore@fakemail.com", "city": "Boston, MA", "pic": "Ray_Moore.jpg", "twitterId": "@fakermoore", "blog": "http://coenraets.org"},
    {category: "Flowers","coordinates": "48.858093+2.294694","website": "https://google.com" ,"address": "Some address 90" ,"id": 5, "Name": "Paul Jones", "managerId": 3, "managerName": "John Williams", "reports": 0, "title": "QA Manager", "department": "Engineering", "mobilePhone": "617-000-0006", "officePhone": "781-000-0006", "email": "pjones@fakemail.com", "city": "Boston, MA", "pic": "Paul_Jones.jpg", "twitterId": "@fakepjones", "blog": "http://coenraets.org"},
    {category: "Food","coordinates": "48.858093+2.294694","website": "https://google.com" ,"address": "Some address 78" ,"id": 6, "Name": "Paula Gates", "managerId": 3, "managerName": "John Williams", "reports": 0, "title": "Software Architect", "department": "Engineering", "mobilePhone": "617-000-0007", "officePhone": "781-000-0007", "email": "pgates@fakemail.com", "city": "Boston, MA", "pic": "Paula_Gates.jpg", "twitterId": "@fakepgates", "blog": "http://coenraets.org"},
    {category: "Cars","coordinates": "48.858093+2.294694","website": "https://google.com" ,"address": "Some address 19" ,"id": 7, "Name": "Lisa Wong", "managerId": 1, "managerName": "Julie Taylor", "reports": 0, "title": "Marketing Manager", "department": "Marketing", "mobilePhone": "617-000-0008", "officePhone": "781-000-0008", "email": "lwong@fakemail.com", "city": "Boston, MA", "pic": "Lisa_Wong.jpg", "twitterId": "@fakelwong", "blog": "http://coenraets.org"},
    {category: "Food","coordinates": "48.858093+2.294694","website": "https://google.com" ,"address": "Some address 18" ,"id": 8, "Name": "Gary Donovan", "managerId": 1, "managerName": "Julie Taylor", "reports": 0, "title": "Marketing Manager", "department": "Marketing", "mobilePhone": "617-000-0009", "officePhone": "781-000-0009", "email": "gdonovan@fakemail.com", "city": "Boston, MA", "pic": "Gary_Donovan.jpg", "twitterId": "@fakegdonovan", "blog": "http://coenraets.org"},
    {category: "Food","coordinates": "48.858093+2.294694","address": "Some address 9" ,"id": 9, "Name": "Kathleen Byrne", "managerId": 4, "managerName": "Ray Moore", "reports": 0, "title": "Sales Representative", "department": "Sales", "mobilePhone": "617-000-0010", "officePhone": "781-000-0010", "email": "kbyrne@fakemail.com", "city": "Boston, MA", "pic": "Kathleen_Byrne.jpg", "twitterId": "@fakekbyrne", "blog": "http://coenraets.org"},
    {category: "Countries","coordinates": "48.858093+2.294694","address": "Some address 5" ,"id": 10, "Name": "Amy Jones", "managerId": 4, "managerName": "Ray Moore", "reports": 0, "title": "Sales Representative", "department": "Sales", "mobilePhone": "617-000-0011", "officePhone": "781-000-0011", "email": "ajones@fakemail.com", "city": "Boston, MA", "pic": "Amy_Jones.jpg", "twitterId": "@fakeajones", "blog": "http://coenraets.org"},
    {category: "Countries","coordinates": "48.858093+2.294694","address": "Some address 22" ,"id": 11, "Name": "Steven Wells", "managerId": 3, "managerName": "John Williams", "reports": 0, "title": "Software Architect", "department": "Engineering", "mobilePhone": "617-000-0012", "officePhone": "781-000-0012", "email": "swells@fakemail.com", "city": "Boston, MA", "pic": "Steven_Wells.jpg", "twitterId": "@fakeswells", "blog": "http://coenraets.org"}
];



exports.findAll = function (req, res, next) {
   
    var name = req.query.name;
    var category = req.query.category;
  
        res.send(employees.filter(function(employee) {
            if(employee.category == category) { 

                if(name) {
                    return employee.Name.match(new RegExp(name,'i'));
                   // return (employee.Name).indexOf(name) > -1;
                } else  return true; 
            }
            else return false;

           
        }));

};

exports.findById = function (req, res, next) {
    var id = req.params.id;
    res.send(employees[id]);
};
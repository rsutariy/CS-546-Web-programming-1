const bcrypt = require("bcrypt-nodejs");

const users = [
  { 
      _id: "1245325124124", 
      username: "masterdetective123", 
      firstName: "Sherlock", 
      lastName: "holmes",
      Profession: "Detective",
      hashedPassword: "$2a$06$PHPllli6U0D0aXaKMVejxOfvwYISspU7kumJ.l0zVjOas/DfshYjq",
      Bio: "Sherlock Holmes (/ˈʃɜːrlɒk ˈhoʊmz/) is a fictional private detective created by British author Sir Arthur Conan Doyle. Known as a consulting detective in the stories, Holmes is known for a proficiency with observation, forensic science, and logical reasoning that borders on the fantastic, which he employs when investigating cases for a wide variety of clients, including Scotland Yard."
    }, 
  {     
      _id: "723445325124124", 
      username: "lemon", 
      firstName: "Elizabeth", 
      lastName: "Lemon" ,
      Profession: "Writer",
      hashedPassword: "$2a$10$Z8wzhIfH1yhQ1Okl6QpnueaPu7gxOYVjIG4FlUCxAgXAdDOzEmq.i",
      Bio: "Elizabeth Miervaldis Liz Lemon is the main character of the American television series 30 Rock. She created and writes for the fictional comedy-sketch show The Girlie Show or TGS with Tracy Jordan."
    }, 
   {    
      _id: "723445325124124", 
      username: "theboywholived",
      firstName: "Harry", 
      lastName: "Potter" ,
      Profession: "Student",
      hashedPassword: "$2a$06$q81bK5E3mfsXbOEHBsvVdO7YAvkTmsR02jQju1PBMMElSx94YuIOu",
      Bio: "Harry Potter is a series of fantasy novels written by British author J. K. Rowling. The novels chronicle the life of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry . The main story arc concerns Harry's struggle against Lord Voldemort, a dark wizard who intends to become immortal, overthrow the wizard governing body known as the Ministry of Magic, and subjugate all wizards and Muggles."
    }, 
]



let exportedMethods = {

    getUserByUsername(username) {
        for (let i = 0; i < users.length; i++) {
            if (users[i].username === username) {
                return users[i]._id;
            }
        }
        return -1;
    },
    getUserByID(id) {
        for (let i = 0; i < users.length; i++) {
            if (users[i]._id === id) {
                return users[i];
            }
        }
        return -1;
    }
};



    /*checklogin(username,password) {
            if (typeof username !== "string" || username === undefined) 
                  return Promise.reject("Please provide a valid username");

            if (typeof password !== "string" || password === undefined) 
                  return Promise.reject("Please provide a valid Password");

           const hashedpassword=bcrypt.hashSync(password)
            //console.log(hashedpassword);
            var user = users.filter(function (e) {
                if (e.username === username) 
                {
                  bcrypt.compare(password, hashedpassword, (err, res) => {
                  if (res === true) 
                  {
                      console.log("User is exist");
                      return true;
                  }    
                  else
                  {
                      console.log("Please try again! User doesn't exist.");
                      return false;
                  } 
                });
              }
            });
      }*/


module.exports = exportedMethods;
//exportedMethods.checklogin("theboywholived","quidditch");

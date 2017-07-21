var aboutyourself = {
        name: "Ruchika Sutariya",
        biography: "I am a International Fall 2016 Graduate Student. I have Computer Science Major and one semester left. \n I am looking for internship in the field of Computer Science. \n I have completed many courses in masters program like Advance algorithm, Data Mining, Ecommerce, Agile, Security.I have studied almost 40 subjects in my undergrade studies.",
        favoriteShows: ["Coffee with Karan", "Kuch Rang Pyar ke Aise Bhi", "Game of Thrones", "The Big Bang Theory"],
        hobbies: ["Basket Ball", "Badminton", "Bowling"]
};

var abouteducation = 

    [{
      schoolName: " My first school name is V.N.Godhani KanyaVidhyalaya.",
      degree: "Higher Education(1 to 12)",
      favoriteClass: "My favourite class is Maths." ,
      favoriteMemory: "I always get the rank in top 3 in my school. So My Parents has pride on me. This is memorial thing at that time."
    },
    {
      schoolName: "My second school name is Sarvajanik College of Engineering and Technology",
      degree: "Bachelors Degree",
      favoriteClass: "My favourite class is Computer Programming Utilization.",
      favoriteMemory: "In undergraduate study also, I am a topper in my college."
    },
    {
      schoolName: "My third school name is Stevens Institute of Technology.",
      degree: "Masters Degree",
      favoriteClass: "My favourite class till now is CS-600. But After taking this course, CS-546 is my favourite class.",
      favoriteMemory: "I learned a lot of things like to make relations with differnt cultural people. \n I become independent so that decision making skill is developed. These are good things from this thriller experience."
    }];


var aboutmystory = {
    storyTitle: "Loving Your Parents",
    story: "I was always very grumpy and did not co-operate with anyone. Little things like people looking at me could get me angry. I didn't understand at that time how much my mom had did for me. But growing up, i realized i have been causing endless streams of trouble for my family. It was either accidentally breaking/spoiling something or making my parents angry at me for something. I started to think ' What if my parents abandoned me? There are thousands of children worldwide who do not have parents. I am not one of them' No matter how hard it was to take care of me, my parents never gave up. I realized that i should not treat them badly and have to try and be nice to them all the time. I do not say this to my parents often but <em>i love them deep down in my heart.Thank you."
};
let exportedMethods = {
    getmyself() {
        return aboutyourself;
    },

    getmyeducation()
    {
        return abouteducation;
    },

    getmystory()
    {
        return aboutmystory;
    }
};

module.exports = exportedMethods;
/**
 * Created by Ruchika Sutariya on 6/10/2017.
 */
let textMetrics = exports = module.exports; 

textMetrics.simplify=(text)=>
{
    if(!text)
        throw ("Please Enter valid Text.");
    let resultText=text.toLowerCase();
    resultText=resultText.replace(/[^a-z0-9A-Z]/gi, ' ').replace(/\s+/g, ' ')
    return resultText;
}

textMetrics.createMetrics=(text)=>
{
  
        let finaltext = new Object();
        if(!text)
            throw ("Please Enter valid Text.");
        
        finaltext.text=textMetrics.simplify(text);
    
        //Count TotalLetters
        finaltext.totalLetters =text.replace(/[^a-z0-9A-Z]/gi, "").length;
        
        //Count TotalWords
        finaltext.totalWords=text.trim().split(/\s+/).length;

        // Count Longestword
       

        // Count Average word length
        finaltext.averageWordLength=finaltext.totalLetters/finaltext.totalWords;

        // Count WordofOccurences & LongestWord & NoOFOccurences
        let wordOccurrences={};
       
        let wordArray = finaltext.text.split(' ');
        finaltext.longWords = 0;
        for(let i=0;i<wordArray.length;i++)
        {
                //word=textMetrics.simplify(words[i]);
                let word = wordArray[i];
                if(word.length > 5)
                    finaltext.longWords++;
                if(wordOccurrences[word]!==undefined) 
                {
                    wordOccurrences[word]+=1;
                    
                } 
                else  
                {
                    wordOccurrences[word]=1; 
                }                 
        } 
       
        finaltext.uniqueWords = Object.keys(wordOccurrences).length;
        finaltext.wordOccurrences = wordOccurrences;
       
        return finaltext;
  }

//console.log(textMetrics.createMetrics("Hello, myyyyyyyyyyyyyy friends! This is a great day to say hello.\n\n\tHello! 22222222222222 3 4 23"));
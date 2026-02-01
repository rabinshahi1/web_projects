const quizQuestions = [
  {
    id: 1,
    question: "What does AI stand for?",
    options: ["Automated Intelligence", "Artificial Intelligence", "Advanced Interface", "Applied Information"],
    correctAnswer: "Artificial Intelligence"
  },
  {
    id: 2,
    question: "Which programming language is most commonly used for Machine Learning?",
    options: ["Java", "Python", "C++", "PHP"],
    correctAnswer: "Python"
  },
  {
    id: 3,
    question: "What is the main purpose of a Neural Network?",
    options: [
      "Store data permanently",
      "Perform logical operations only",
      "Mimic the human brain to learn patterns",
      "Render graphics"
    ],
    correctAnswer: "Mimic the human brain to learn patterns"
  },
  {
    id: 4,
    question: "Which algorithm is commonly used for classification problems?",
    options: ["Linear Regression", "K-Means", "Decision Tree", "Apriori"],
    correctAnswer: "Decision Tree"
  },
  {
    id: 5,
    question: "What does GPU stand for?",
    options: [
      "General Processing Unit",
      "Graphical Processing Unit",
      "Graphics Performance Utility",
      "Global Processing Unit"
    ],
    correctAnswer: "Graphical Processing Unit"
  },
  {
    id: 6,
    question: "Which company developed the Transformer architecture?",
    options: ["Meta", "OpenAI", "Google", "Microsoft"],
    correctAnswer: "Google"
  },
  {
    id: 7,
    question: "What is overfitting in Machine Learning?",
    options: [
      "Model performs well on unseen data",
      "Model learns noise instead of patterns",
      "Model has too little data",
      "Model trains too fast"
    ],
    correctAnswer: "Model learns noise instead of patterns"
  },
  {
    id: 8,
    question: "Which of the following is a supervised learning algorithm?",
    options: ["K-Means", "PCA", "Linear Regression", "Apriori"],
    correctAnswer: "Linear Regression"
  },
  {
    id: 9,
    question: "What does API stand for?",
    options: [
      "Application Programming Interface",
      "Advanced Programming Instruction",
      "Applied Process Integration",
      "Automated Program Interaction"
    ],
    correctAnswer: "Application Programming Interface"
  },
  {
    id: 10,
    question: "Which data structure uses FIFO (First In First Out)?",
    options: ["Stack", "Queue", "Tree", "Graph"],
    correctAnswer: "Queue"
  },
  {
    id: 11,
    question: "What is the role of an optimizer in deep learning?",
    options: [
      "Increase dataset size",
      "Reduce training time by skipping layers",
      "Adjust model weights to minimize loss",
      "Visualize data"
    ],
    correctAnswer: "Adjust model weights to minimize loss"
  },
  {
    id: 12,
    question: "Which of the following is NOT a cloud service provider?",
    options: ["AWS", "Azure", "Google Cloud", "Linux"],
    correctAnswer: "Linux"
  },
  {
    id: 13,
    question: "What does SQL primarily help with?",
    options: [
      "Designing user interfaces",
      "Managing and querying databases",
      "Building neural networks",
      "Styling web pages"
    ],
    correctAnswer: "Managing and querying databases"
  },
  {
    id: 14,
    question: "Which AI technique allows an agent to learn by interacting with the environment?",
    options: [
      "Supervised Learning",
      "Unsupervised Learning",
      "Reinforcement Learning",
      "Transfer Learning"
    ],
    correctAnswer: "Reinforcement Learning"
  },
  {
    id: 15,
    question: "What is the main advantage of using Git?",
    options: [
      "Faster code execution",
      "Better UI design",
      "Version control and collaboration",
      "Automatic bug fixing"
    ],
    correctAnswer: "Version control and collaboration"
  }
];


const btnstart=document.getElementById('header')
const questionDisplayer=document.getElementById('questionDisplay')
const optionShower=document.getElementById('options')

let btndiv= document.querySelector('.buttons')
let questionAsked;
let score;
let questionDetails;

function randomNumGen()
{
   let randNum= Math.floor(Math.random()*10)+1
    if(questionAsked.includes(randNum))
    {
        while(questionAsked.includes(randNum)){
            randNum=Math.floor(Math.random()*10)+1
        }

    }
    questionAsked.push(randNum)
   console.log(questionAsked)

    return  randNum
}

const renderQuestion=()=>{
    optionShower.innerHTML=''
    questionDetails = quizQuestions[randomNumGen()]
    
     questionDisplayer.innerHTML=`
     <h2> ${questionDetails.question} </h2>
     `
    for(let i=0;i<4;i++)
    {
        
        const perOptiondiv= document.createElement('div')
        perOptiondiv.innerHTML=`
         <input type="radio" name="option" value="${questionDetails.options[i]}" > ${questionDetails.options[i]}
     
        `
        optionShower.appendChild(perOptiondiv)

    }
   

}
const startQuiz=()=>{
    questionAsked=[]
    score=0
    
    btnstart.innerHTML=`<h2> ---Quiz---- </h2> `
    btndiv.innerHTML=`
    <button onclick="nextQn()">Next</button>
     `
   optionShower.innerHTML=''
   questionDisplayer.innerHTML=''
   renderQuestion()

}


const nextQn=()=>{

    const optionSelect= document.querySelector('input[name="option"]:checked').value

    
    if(optionSelect===questionDetails.correctAnswer)
    {
        score+=10;
    }
    else{
        score-=10;
    }
    if(questionAsked.length<5) renderQuestion();
    else{
      questionDisplayer.innerHTML=``
         options.innerHTML=`
         <h1>  Score :   ${score} </h1>
         <h2> Wanna Play Again Click  on play Again </h2>
          <button onclick="startQuiz()"> Play Again </button>
         `  
         btndiv.innerHTML=``
    }
    
}
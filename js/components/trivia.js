"use strict"
const trivia ={
template:`
    {{2+2}}
    <div ng-repeat="question in $ctrl.trivia">
    <p>{{question.question}}</p>
    
    <form ng-submit="$ctrl.answer(userAnswer, question.correct_answer);">
        <input type="radio" ng-value="true" name="{{$index}}" ng-model="userAnswer">True
        <input type="radio" ng-value="false" name="{{$index}}" ng-model="userAnswer">False
        <button>Submit</button>
    </form>
    

    </div>
`,

controller:["Quiz", function(Quiz){
const vm=this;
        vm.trivia;
        vm.questions=()=>{
            Quiz.triviaSearch().then((response)=>{
            vm.trivia=response.data.results;
            console.log(vm.trivia)
            });
        }
        vm.questions();
    vm.answer=(userAnswer, correctAnswer)=> {
        let correct = correctAnswer.toLowerCase();
        if (userAnswer + '' == correct) {
            console.log("Correct");
        } else {
            console.log("youre wrong. you suck");
        }
        console.log(userAnswer);
        console.log(correct);        
    }
    
        
}
]
};

angular
.module("pregame")
.component("trivia",trivia);
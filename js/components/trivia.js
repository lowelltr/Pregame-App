"use strict"
const trivia ={
template:`
    {{2+2}}
    <div ng-repeat="question in $ctrl.trivia">
    <p>{{question.question}}</p>
    <form>
    <input type="radio" ng-value="true" ng-model="$ctrl.test[$index+1]">True
    <input type="radio" ng-value="false" ng-model="$ctrl.test[$index+1]">False

    <button ng-click="$ctrl.answer($ctrl.test);">Submit</button>
   
    </form>
    

    </div>
`,

controller:["Quiz", function(Quiz){
const vm=this;
        vm.questions=()=>{
            Quiz.triviaSearch().then((response)=>{
            console.log(response)
            vm.trivia=response.data.results;
            });
        }
        vm.questions();
    vm.answer=(test)=>{
        if (test==="true"){
            alert("You are Correct!!!!");

        }else if (test==="false"){
            alert("You're Wrong!!!");
        }
        console.log(vm.answer);
        
    }
    
            
}
]
};

angular
.module("pregame")
.component("trivia",trivia);
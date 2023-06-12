const arr = [{
    name: "Test1",
    prenom: "prenomtest",
    age:10
},{
    name: "Test2",
    prenom: "prenomtest",
    age:15
    }
    ,
{
    name: "Test3",
    prenom: "prenomtest",
    age:19
    },
{
    name: "Test4",
    prenom: "prenomtest",
    age:20
    }]

const arr2 = [{
    name: "Test4",
    prenom: "prenomtest",
    age:19
},{
    name: "Test5",
    prenom: "prenomtest",
    age:18
    }
    ,
{
    name: "Test6",
    prenom: "prenomtest",
    age:19
    },
{
    name: "Test7",
    prenom: "prenomtest",
    age:22
    }]

console.log([...arr,...arr2].filter((item)=>item.age>=18))
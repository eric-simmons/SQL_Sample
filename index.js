import mysql from 'mysql2'
import inquirer from 'inquirer'

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root_password',
    database: 'sakila'
})



const menuPrompt = async () => {
    
    const answers = await inquirer.prompt([{
        type: 'list',
        name: 'action',
        message: "What do you want to do?",
        choices:['Search actors', 'Add an actor', 'Update an actor', 'Exit']
    }])
}

if(answers.action === 'Search actors'){
    searchActors()
}
else if(answers.action === 'Add an actor'){
    addActor()
}
else if(answers.action === 'Update an actor'){
    searchActors()
}
else {
    process.exit(0)
}














menuPrompt()




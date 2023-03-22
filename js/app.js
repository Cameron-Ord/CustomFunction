function generic_greeting(){


    console.log(`hello!`);

}

generic_greeting();

function specific_greeting(user){

        console.log(`welcome to the site ${user}`);
    }



specific_greeting(`cameron`);
specific_greeting(`josh`);
specific_greeting(`alex`);
specific_greeting(`bruce`);
specific_greeting(`bowser`);
specific_greeting(`ronald`);


function filter_winning_users(user_array) { 


    for(let counter = 0; counter < user_array.length; counter++){

        if(user_array[counter].includes(`winner`)){
            return user_array[counter];
        }
    }

}

let first_winner = filter_winning_users([`loser`, `almost`, `best_winner_user`]);



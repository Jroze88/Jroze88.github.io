


 $(document).ready(function() {

guesses = new Array();
secretWord = new Array("j", "a", "v", "a", "s", "c", "r", "i", "p", "t");
winCondition = new Array ();
var lossCondition = 0;

    $(document).on ('keypress', function (e) {

        var guess = String.fromCharCode(e.which);
        console.log(guess);
        console.log(lossCondition);
        $(".placeholder").remove();

       if (guesses.indexOf(guess) < 0) {

                if (secretWord.indexOf(guess) < 0) {

                        $("#guessresult").html("Incorrect!<br>Try  again!");
                        $("#alreadyguessed").append(guess + "  ");
                        guesses.push(guess);
                        lossCondition++;

                            if (lossCondition === 1) {
                                $(".hangman").html("<img src=\"assets/images/13.png\" class=\"health\">");
                            }
                            else if (lossCondition === 2) {
                                $(".hangman").html("<img src=\"assets/images/12.png\" class=\"health\">");
                            }
                            else if (lossCondition === 3) {
                                $(".hangman").html("<img src=\"assets/images/11.png\" class=\"health\">");
                            }
                            else if (lossCondition === 4) {
                                $(".hangman").html("<img src=\"assets/images/10.png\" class=\"health\">");
                            }
                            else if (lossCondition === 5) {
                                $(".hangman").html("<img src=\"assets/images/9.png\" class=\"health\">");
                            }
                            else if (lossCondition === 6) {
                                $(".hangman").html("<img src=\"assets/images/8.png\" class=\"health\">");
                            }
                            else if (lossCondition === 7) {
                                $(".hangman").html("<img src=\"assets/images/7.png\" class=\"health\">");
                            }
                            else if (lossCondition === 8) {
                                $(".hangman").html("<img src=\"assets/images/6.png\" class=\"health\">");
                            }
                            else if (lossCondition === 9) {
                                $(".hangman").html("<img src=\"assets/images/5.png\" class=\"health\">");
                            }
                            else if (lossCondition === 10) {
                                $(".hangman").html("<img src=\"assets/images/4.png\" class=\"health\">");
                            }
                            else if (lossCondition === 11) {
                                $(".hangman").html("<img src=\"assets/images/3.png\" class=\"health\">");
                            }
                            else if (lossCondition === 12) {
                                $(".hangman").html("<img src=\"assets/images/1.png\" class=\"health\">");
                            };
                }
                else {

                    $("#guessresult").html("Correct!!!!!");
                    $("." + guess).html(guess.toUpperCase());
                    
                    if (guess === "a") {
                        guesses.push(guess) && winCondition.push(guess) && winCondition.push(guess);
                    }
                    else {
                        guesses.push(guess);
                        winCondition.push(guess);
                    }

                };
       }
       else {

        $("#guessresult").html("You  already<br>guessed<br>" + guess);

       };

    })})

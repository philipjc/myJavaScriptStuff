/* takes a single integer number as an argument

// returns a pair of integer numbers:

// The first of these numbers should be the lowest possible valid number than can be

// The second should be the highest possible number than can be created using the same

// created by swapping one of the constituent digits for another

// method (a single swap)

/* For example 10980 should output 10089 as the lowest number (swapping the leading 1 out would lead

to 00981 which is deemed in "invalid number" in this situation as numbers are rarely denoted with

leading zeros) and 90180 as the highest.
*/
function numbers(number) {

    // convert to string so I can split
    var castString = number + "";
    // split
    castString = castString.split("");

    // loop length of array
    for (var i = 0; i < castString.length; ++i) {
      // each array index parse to int, base 10
      castString[i] = parseInt(castString[i], 10);
    };

    // sort all elements and rturn new array indexs for elements
    castString.sort(function (a, b) {
      if (a > b) {
        return -1;
      } else if (a === b) {
        return 0;
      } else {
        return 1;
      }
    });

    return castString;
}
console.log(numbers(80981));

// Fizz Buzz Exercise
// Uses to Modulo to check divisibility
for (var i = 0; i <= 100; ++i) {
  if (i % 3) {
    console.log('Fizzy');
  } else if ( i % 5) {
    console.log('Buzzy');
  } else {
    console.log(i);
  }
}

/* Exercise 3
Let's imagine we're going to put together a game in the form of a program.
Outline if you will, the major classes the program should include, name them and the key
functionality associated with each. Please also outline any particularly tricky aspects that one might
expect to encounter for the given class or more generally (a.i perhaps, or interesting edge cases).


Chosen Game - Monopoly.
-------------------------

Let's start thinking about creating Monopoly. My experience with classes involve some C++ code from a University
semester, though most currently it involves creating React Class components. So I will imagine the game in React.

What do we know about Monopoly?
I know Monopoly has a game-board at it's center to interact with and move around. The board is made up many
different Locations, domestic and commercial. It also has 12 other different areas; 8 of which are
opportunities to pick up either a chance or community chest card. The others are pass-go, jail/visiting,
free parking and go-to-jail. In addition to the board we also need Players, players can choose a small model
to represent themself on the board, traditionally this can be a sewing thimble, wheel-barrow, boot, dog, car, iron
hat or boat. Also one nominated Player can also play the Banker, this players maintains the distribution of money,
Locations and properties.

To play the game Players take it in turn to roll two d6 dice and move there piece that amount. Once a player
has completed one circuit of the board they can then begin to purchase a Location if they land on that area,
once a Location is owned by a player no other player can buy it unless it's sold by the owner. If a player
lands on an owned Location they pay a rent fee to the owner. Locations also come in sets represented by a colour,
Once a single player owns the complete set, they can begin to purchase houses and hotels, a player needs to owns
four houses on a Location to then purchase a Hotel (the four houses are traded in once a Hotel is situated). The
more a Location is built up by an owner, the higher the fee for landing on that owned area by a non-owner. Further
more, a Location can be sold by a Player to a Player for an agreed amount at said Players turn in the game.

Every time a player completes a circuit of the board, they receives £200. If a player lands on a question area
they choose a game card, read it and fullfil the cards request. Some times a requirment of a card is to forfeit
a certain amount of money to the middle of the board as community chest. If a Player randomly lands on the Location
'Free Parking' that Player can collect the community chest collection. Another Location of note is the 'Go to Jail'
Location, if a Player randomly lands here they must go straight to Jail and remain there untill they pay the Banker
a £200 exit fee (this money is placed in community chest).

In conclusion, this summary of Monopoly has helped me extract requirments and more confidentally choose Classes and
their Methods.
I would start by making; GameBoard, Location, GameQuestion and Player. In React a Class defines a Component, of course
this Component can be extended for reuse but giving us the option to differentiate it from it's parent if needed.
When creating React Components/Classes carefull planning of Parent - Child relationships is important as data can be
passed down from Parent to Child as props, but not the reverse.

GameBoard - This would be a Parent Component in React, a Component that is assigned to an index.html element to
            render on.

            Methods - createPlayer, each person can create there Player card by entering their details.
                        // This would allow Players to take in turn to choose a model piece and enter in their name.
                        // Each Player would then be diplayed around the visual GameBoard as a card displaying their
                        // information.

                      selectBanker, this allows the Players to choose a person to play as Banker.
                        // Once a Player was selected to play Banker, this would flag a property to disable
                        // Banker selecting from Player cards unless the current Banker relinquished that status.

                      startGame, this enstantiates a new game to start with fresh Locations.
                        // This action could be assigned to the Banker.
                        // Randomly selects a Player to have first roll of dice.

                      nextPlayer, moves through each Player in turn allowing them to take their turn.
                        // From the initial rollDice of each Player, save order highest to lowest.
                        // Players take turns in this order.

                      movePlayer, moves a Player's model the correct amount of spaces.
                        // Use result from Player - rollDice
                        // Move the Player correct amount.
                        // Check the Players new Location
                        // Offer back result of;
                                              // Location check
                                              // goToJail
                                              // pickQuestion

                      goToJail, move current Player to Jail.
                        // Check where Player lands with result from GameBoard - movePlayer
                        // If Location go-to-jail
                        // Move Player to Jail Location
                        // Remove Player rights, except Player - rollDice, useCard


Location - A child Component of GameBoard. With the correct amount of data about each Location this would render
          multiple times with different information about the individual Locations. With the Location Class created,
          we would enstantiate the individual Locations from this Class, inheriting the Parent Class attributes.

          Methods - assignPlayer, Location now belongs to a Player.
                      // With the Player name passed from Player - buyHouse, assign said Player as owner.

                    allowHousePurchase, at a certain state, allow house purchase.
                      // Check if Location set is complete
                      // If True
                      // Increment houses state with help from Player - buyHouse
                      // Allow Hotel purchase

                    allowHotelPurchase, at a certain state, allow hotel purchase.
                      // Check Location for four houses
                      // If True
                      // Allow Hotel purchase
                      // Cap Location at one Hotel.

                    addHouse, display a house on the Location.
                      // render house image on Location card.
                      // increase Location worth

                    addHotel, display a hotel on the Location.
                      // render hotel image on Location card.
                      // increase Location worth

                    collectFee, collect correct fee and distribute to owner.
                      // Called with data from Location check - GameBoard - movePlayer
                      // Check if owner
                      // If not, Player - reduceFunds
                      // If a non-owner lands here, collect money and give to owner.
                      // Player - increaseFunds


GameQuestion - A separate Class, although another child Component of GameBoard. GameBoard could call an appendChild
              for question data when needed and populate GameQuestion to display to the Player.

              Methods - generateCard, randomly selected a question from question data.
                          // With the value passed from Player - pickQuestion (value = chance or community chest)
                          // select a question from pool of questions and display to Player.

                        rotateQuestion, ensure question is not selected again untill all other questions are used.


Player -  Again, a Child Component of GameBoard. This way we can allow Players to start a new game by entering their
          details, these details would be passed to Player Component to render the individual Player cards.
          Banker could extend Player but with extended admin rights. *Banker could be an interesting decision, it might
          be better to have a stand-alone Component for Banker*.

          Methods - rollDice, moves Player.
                      // Allow Player to roll
                      // Generate number from two random 1 - 6.
                      // Give result to GameBoard - movePlayer
                      // Return result from GameBoard - movePlayer
                      // Apply result. State update - Jail. payPlayer, pickQuestion

                    increaseFunds, increase player money count.
                      // Takes value to increase by.
                      // current fund += value

                    reduceFunds, decrease player money count.
                      // Takes value to decrease by.
                      // current fund -= value

                    pickQuestion, draw a question card.
                      // call GameQuestion - generateCard

                    buyLocation, allow Player to buy a Location.

                    buyHouse, allow Player to buy a house.

                    buyHotel, allow Player to buy a house.

                    sellHouse, allow Player to sell a house.

                    sellHotel, allow Player to sell hotel.

                    sellLocation, allow Player to sell Location

                    payPlayer, allow Player to give other Player funds.

                    useCard, if a Player owns a such as 'get out of jail free' allow use.

                    bankrupt, if Player runs out of funds, remove Player from game.

Some more thought would be required around wether to involve the Banker with every exchange.

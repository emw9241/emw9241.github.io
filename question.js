var intPrompt, intVerify;

intPrompt = parseInt(prompt("Do you want to continue being Morgan's boyfriend? Enter '1' for yes or '2' for no."));

//tests that the decision number entered is either 1 or 2 and validates
while (intPrompt < 1|| intPrompt > 2)
  {
   intPrompt = parseInt(prompt("Please enter '1' for yes or '2' for no. There is no in between."));
  }


if(intPrompt != 1)
{
  alert("Well that is new and unfortunate information. You should leave.");
 }
 
 else
 {
  intVerify = parseInt(prompt("Are you going to go hug her in the next 10 seconds? Enter '1' or '2'."));
  while (intVerify != 1)
  {
   alert("Fine. Get out. Leave. It is OVER.");
  }
  while (intPrompt != 2)
  {
   alert("Smart choice. I luh you too. NOW GO HUG ME!!");
  }
 }

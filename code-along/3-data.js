// 👇 YOUR CODE BEGINS HERE. DON'T CHANGE ANY OTHER CODE. 👇

// 🔥🔥🔥 YOUR CODE GOES HERE 🔥🔥🔥
let profile = {
  name: 'Brian',
  location: { city: 'Chicago', state: 'Illinois' },
  timeline: [
    { icon: '🧠', when: '2020-10-26 17:00:00', what: 'Teaching MBA students how to code in JavaScript!' },
    { icon: '🌮', when: '2020-10-26 12:00:00', what: 'Eating tacos' },
    { icon: '🦄', when: '2020-10-26 08:00:00', what: 'Riding a unicorn' }
  ]
}





// let vesper = {
//   name: 'Vesper',
//   location: 'Evanston',
//   status: 'KIEI-451 student'
// }

// let ben = {
//   name: 'Ben',
//   location: 'Chicago',
//   status: 'KIEI-451 professor'
// }
// //console.log(profile)

// let shoppingList = ['eggs', 'orange', 'ice cream']
// shoppingList.push('lottery ticket')
// console.log(shoppingList)

// let lotteryTicket = [4,8,15,16,23,42]
// console.log(lotteryTicket[0])

// let kiei451people = [vesper, ben]
// console.log(kiei451people)




//  👆 YOUR CODE ENDS HERE. DON'T CHANGE ANY OTHER CODE 👆

// template literals support HTML too!
output = `
  <div class="text-4xl">${profile.name}</div>
`
/*
  this code does the work of writing the output to screen...
  so leave it alone :) this code expects a variable named
  'output' to be declared
*/
document.querySelector('.output').innerHTML = output
function isRose(cat) {
  return cat === 'rose' ? 'Hi Rose you are cute!' : `Hi ${cat}!`
}


function isRose(cat) {
   switch (cat) {
      case 'rose' :
          return 'Hi rose you are cute!'
      case 'ted':
         return 'Hi ted nice to see you !'
      default:
         return `Hi ${cat}!`
   }
}
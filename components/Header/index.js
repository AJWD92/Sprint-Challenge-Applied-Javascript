// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component


function Header() {


    const Card = document.createElement('div');
    Card.classList.add('header');

    const TimeStamp = document.createElement('span');
    TimeStamp.textContent = 'SMARCH 28, 2019';
    TimeStamp.classList.add('date')

    const Title = document.createElement('h1');
    Title.textContent = 'Lambda Times';

    const Temp = document.createElement('span');
    Temp.textContent = '98\u00b0';
    Temp.classList.add('temp');

    // Wrapper.appendChild(Card);
    Card.appendChild(TimeStamp);
    Card.appendChild(Title);
    Card.appendChild(Temp);

    console.log(Card);
    return Card;
}
const Wrapper = document.querySelector('.header-container')
Wrapper.appendChild(Header());
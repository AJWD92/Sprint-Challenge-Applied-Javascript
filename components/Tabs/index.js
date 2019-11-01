// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
const TopicsArr = {
    'topic1': 'javascript',
    'topic2': 'bootstrap',
    'topic3': 'technology',
    'topic4': 'jquery',
    'topic5': 'node.js'
}

TopicsArr.forEach((entry) => {
    console.log(entry);
});

axios.get('https://lambda-times-backend.herokuapp.com/topics').then(response => {
    console.log(response);

})



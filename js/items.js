var substringMatcher = function(strs) {
  return function findMatches(q, cb) {
    var matches, substringRegex;

    // an array that will be populated with substring matches
    matches = [];

    // regex used to determine if a string contains the substring `q`
    substrRegex = new RegExp(q, 'i');

    // iterate through the pool of strings and for any string that
    // contains the substring `q`, add it to the `matches` array
    $.each(strs, function(i, str) {
      if (substrRegex.test(str)) {
        matches.push(str);
      }
    });

    cb(matches);
  };
};

var states = ['iPhone 4', 'iPhone 4s', 'iPhone 5', 'iPhone 5s', 'iPhone 6',
  'iPhone 6+', 'Macbook Pro', 'Macbook Air', 'Macbook', 'iPad', 'iPad Mini',
  'Samsung Galaxy', 'Oculus Rift', 'Logitec Desk Microphone', 'Apple Watch', 'Pencil (FiftyThree)', 'Roku XD 2050'
];

$('#add-item-field .typeahead').typeahead({
  hint: true,
  highlight: true,
  minLength: 1
},
{
  name: 'states',
  source: substringMatcher(states)
});
## Artikelz

Click here to play: https://alperklc.github.io/artikelz/

I made this for my personal usage, for challenging myself with random nouns of German language. It's been almost a decade since I started learning this language and I'm still failing at finding the right article for a noun. I wrote this on the train ride home, will optimize and make it looking nicer.

### UI 
Based on react hooks.

### Where do questions come from? 
They are coming from a following cloud function:

```
const words = [
  {
    noun: "Glück",
    article: "das"
  },
  ...
  {
    noun: "Finalist",
    article: "der"
  },
  {
    noun: "Übungsstunde",
    article: "die"
  }
];

exports.getRandomNNouns = (req, res) => {
  res.set('Access-Control-Allow-Origin', "*")

  const n = parseInt(req.query.n, 10) || 20;  
  const indexes = [...Array(words.length).keys()].map(x => x + 1).sort(() => Math.random() - 0.5);
  
  const nouns = indexes.slice(0, n).map(index => words[index]);
  res.status(200).send(nouns)
}; 
```

Potential improvements:
- Better looking UI
- Clean up the code 
- Storing the high score on the browser cookies and make it more exciting
- Letting user to define the length of the game (20 questions, 50 questions, until closing the browser window)
- Proof the correctness of articles (won't make it, really - just added 70K words)
- ~Enhance the vocabulary~
- Wrap the whole thing as a react-native project and distribute on the app stores
- And maybe making it something generic, not just for German articles


I'm encouraging everyone to fork it and create a pull request! Let's hack together :)

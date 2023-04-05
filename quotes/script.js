function quote(){
    var quotes = {
        "― Oscar Wilde" : '“Be yourself; everyone else is already taken.”',
        "― Albert Einstein" : '“Two things are infinite: the universe and human stupidity,and I am not sure about the universe.”',
        "― Marcus Tullius Cicero" : '“A room without books is like a body without a soul.”',
        "― Dr. Seuss" : '“You know you are in love when you cannot fall asleep because reality is finally better than your dreams.”'
    }
    var authors = Object.keys(quotes);
    var author =authors[Math.floor(Math.random()*authors.length)];
    var quote = quotes[author];
    document.getElementById("quote").innerHTML=quote;
    document.getElementById("author").innerHTML=author;
}
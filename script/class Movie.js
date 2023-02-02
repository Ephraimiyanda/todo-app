class Movie{
    constructor(title,director,yearReleased,rating){
        this.title = title;
        this.director=director;
        this.yearReleased=yearReleased;
        this.rating=rating;
    }
 getOverview(){
    console.log(`${this.title},directed by ${this.director},year released ${this.yearReleased},has a rating of ${this.rating}`)
 }
}
let movie1= new Movie("space","adam",2020,10)

movie1.getOverview()

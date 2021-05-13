import { Component, OnInit } from '@angular/core';
import { Quotes } from '../classes/quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  upvotes: number = 0;
  downvotes: number = 0;
  quotes: Quotes[] = [
    {
        id: 1,
        description:"I am the brain that makes things happen on blink of an eye!",
        author:"Sam Tomashi",
        date: "13-04-2021",
        upvote: 5,
        downVote: 1,
    },
    {
        id: 1,
        description:"I am the brain that makes things happen on blink of an eye!",
        author:"Sam Tomashi",
        date: "13-04-2021",
        upvote: 10,
        downVote: 1,
    },
    {
        id: 1,
        description:"I am the brain that makes things happen on blink of an eye!",
        author:"Sam Tomashi",
        date: "13-04-2021",
        upvote: 90,
        downVote: 1,
    },
    {
      id: 1,
      description:"I am the brain that makes things happen on blink of an eye!",
      author:"Sam Tomashi",
      date: "13-04-2021",
      upvote: 5,
      downVote: 1,
  },
  {
      id: 1,
      description:"I am the brain that makes things happen on blink of an eye!",
      author:"Sam Tomashi",
      date: "13-04-2021",
      upvote: 10,
      downVote: 1,
  },
  {
      id: 1,
      description:"I am the brain that makes things happen on blink of an eye!",
      author:"Sam Tomashi",
      date: "13-04-2021",
      upvote: 90,
      downVote: 1,
  },
  {
    id: 1,
    description:"I am the brain that makes things happen on blink of an eye!",
    author:"Sam Tomashi",
    date: "13-04-2021",
    upvote: 5,
    downVote: 1,
},
{
    id: 1,
    description:"I am the brain that makes things happen on blink of an eye!",
    author:"Sam Tomashi",
    date: "13-04-2021",
    upvote: 10,
    downVote: 1,
},
{
    id: 1,
    description:"I am the brain that makes things happen on blink of an eye!",
    author:"Sam Tomashi",
    date: "13-04-2021",
    upvote: 90,
    downVote: 1,
},
{
  id: 1,
  description:"I am the brain that makes things happen on blink of an eye!",
  author:"Sam Tomashi",
  date: "13-04-2021",
  upvote: 5,
  downVote: 1,
},
{
  id: 1,
  description:"I am the brain that makes things happen on blink of an eye!",
  author:"Sam Tomashi",
  date: "13-04-2021",
  upvote: 10,
  downVote: 1,
},
{
  id: 1,
  description:"I am the brain that makes things happen on blink of an eye!",
  author:"Sam Tomashi",
  date: "13-04-2021",
  upvote: 90,
  downVote: 1,
}
];

allQuotes: Quotes[] = [];

  constructor() { }

  ngOnInit(): void {
    // this.storeQuotes();
    // this.allQuotes = JSON.parse(this.q);

    let quo = localStorage.getItem("Quotes"); // getting quote from local storage
  }


  submit(){
    // let quo = JSON.parse(localStorage.getItem("Quotes"));// Getting the existing array of quotes

    // // pushing the new quote to existing array of quotes
    // quo.push(
    //   {
    //     author: "",
    //     description: "",
    //     upvotes: 0,
    //     downvotes: 0,
    //   }
    // ); 

    // localStorage.setItem("Quotes", JSON.stringify(quo))// Saving the quote in local storage
  }

}

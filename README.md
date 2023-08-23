# React-Friends

* This mini project is designed to get you used to how components can be built around data that is a bit more complicated
* Sometimes Data doesn't just necessarily exist on a component's state. 
* We're going to be using an external data source (although it'll be found locally in our project) from a file in our app called `people.js`. 
* Your goal is to use `componentDidMount` to set that data on the state of the component you'll be building, and consuming it within a `render` function.

## `App.js` set up

* Inside of `App.js` create your constructor function, (don't forget to super() **Remember The CCR Steps**) and add a state object to it. Inside that state object define an array called People.
* Import people data in like so: `import { people } from './people.js` (if you haven't included people in your `src` directory this wont work);
* Create a method called componentDidMount and set the people data on state.

```
  componentDidMount(){
   this.setState({ people: people });
  }
```

## `PeopleList.js` set up

* Create your `PeopleList` as a function component and got back to `App.js` and import it in as: `import { PeopleList } from './PeopleList'`.
* Pass your `People` data down to PeopleList and render out the People List `<PeopleList people={this.state.people} />`.
* For each person in `PeopleList` render out the first_name and last_name and email.




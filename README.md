# Todo Challenge

![Todo mockup](http://www.dumblittleman.com/wp-content/uploads/2014/04/Great-To-Do-List.jpg)

Here's the challenge:

"Build a Todo list as a mini front-end application. You don't have to use a database, the front-end is more important - you can use an appropriate data structure stored somewhere in your JavaScript (this time only!)"

I'm building this in Angular, using Karma for my unit tests and Protractor for my e2e tests.

## Core user stories:

```
As a forgetful person
I want to store my tasks
So that I don't forget them

As a person with limited time
I want to instantly be able to update my todo list (adding and changing entries)
So that I have more time to think about other things

As a person who actually gets stuff done
I want to mark my tasks as done
So that I don't do them twice
```

## Optional user stories:

```
As a person with a lot of tasks
I want to be able to filter my tasks by "All", "Active", "Complete"
So that I only see the relevant tasks

As a person who doesn't like counting by hand
I want to see a total number of tasks
So that I don't have to count

As someone who has done lots of stuff
I want to be able to clear my completed tasks
So I never see them again
```

## APPROACH:

I first specced out the html with the basic shape of my page. Initially things will be very simple. Tackling the first listed user story first (adding a task), followed (quite naturally) by the ability to mark them as 'done', as required in the third story. Instant updating of the todo (editing entries, as in the third user story) will follow, and we're sitting pretty with our MVP. And then onto the next stories!!

### HOW TO RUN:

Setting up

```
npm update
bower update

```

Tests:

```
karma start test/karma.conf.js
```

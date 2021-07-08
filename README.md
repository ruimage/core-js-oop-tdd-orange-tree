## Orange tree model


Fedor, a farmer, is interested in creating a model of his orange farm. As a proof of the concept, he hopes to model one orange tree and its annual production throughout his life. Fedor started working on the program but the success of his farm left him very little time to continue developing the program. So you were hired to make an app for him.

In this exercise you'll be developing your own class: `OrangeTree`. You need to use `TDD (Test-Driven Development)` for that. First you have to think about the logic of `OrangeTree`, understand how the functions should work, in which cases and what they need to return, and finally, display all of it in the `orange-tree.spec.js` tests. It's all prepared for you there.


### Pre-release. Review of the provided code

Fedor has already started developing this application. He created an `Orange` class that you will use - oranges will grow on your orange tree (Amazing, isn't it?). Fedor has just started creating the `OrangeTree` class. He wrote a few methods and a few comments on what they should do; he also wrote some code to test the orange tree. And finally, he programmed the scenario of the whole life of the tree in the script `runner.js` which is hooked up in `TreeLifeRunner.html`, so that you can see how the tree has developed, what fruits and in what quantity it has borne throughout its life. Review the code to understand what Fedor planned to do.

### Release 0. Start with the tests!

Here are some of the details that Fedor provided so that you can understand his vision of the behavior he expects from the orange tree model. Remember that this is an early version of the app that only supports the basic concept so don't worry about simulating things like temperature effects on production, etc. You are building the most basic model.

Each of the details Fedor describes should be translated into tests so that you can make sure your model meets the expectations. In parentheses, Fedor provided the method by which he intends to match these details. Your class can safely include other methods besides the ones listed.

__Requirements:__
- The tree must be of a certain age (`.age`).
- The tree must be of a certain height (`.height`).
- Every growing season (`.passGrowingSeason()`) 
  - Any unharvested oranges from the previous season should fall.
  - The tree must age by 1 year.
  - The tree must grow 2.5 feet tall until it reaches its maximum height - let's say 25 feet.
  - The tree must bear fruit if it is mature (i.e. at least six years old) - let's say, 100 to 300 oranges (`class Orange`).
- It is necessary to check if the tree is mature enough for fruit production (`.isMature()`).
- The tree should die at the age of 100, and you need to check if it's dead (`.isDead()`).
- You also need to check if there are oranges on the tree. (`hasOranges()`).
- You need to pick an orange from the tree (`.pickAnOrange()`) or throw an error if you try to pick an orange but there aren't any.

Remember you that you must start with the tests. Write tests that will check that your classes are running according to the above requirements. Test templates are already there.

### Release 1. Orange tree model - make sure all of your tests pass

When the tests are ready, program all the necessary methods of the `Orange` and` OrangeTree` classes, so that in the end all your tests will pass successfully. You should have the following working methods:
- `passGrowingSeason()`
- `isMature()`
- `isDead()`
- `hasOranges()`
- `pickAnOrange()`

### Release 2. Complete the production simulation script

You now have fully tested and functional `Orange` and `OrangeTree` classes. It's time to use these models in your application. Remember that Fedor wants to see the annual orange tree production throughout his life.

You need to complete the `runner.js` script. In particular, you need to evaluate the local variable `averageOrangeDiameter`, which says what is the average diameter of the oranges. Run `TreeLifeRunner.html` to see your classes in action.

## Conclusion

You have modeled something from the real world according to the needs of the application. Henceforth, you will do such things often. You had to make decisions about the internal state of the tree (that is, what variables it needs). The age, height and number of oranges of each tree should be tracked. And you can use these metrics to calculate more metrics about the tree: is it old enough to bear fruit, is it dead, and is it growing oranges?


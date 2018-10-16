# Модель апельсинового дерева

## Введение
Фермер Федор заинтересован в создании модели своей апельсиновой фермы. Как доказательство своей концепции, он надеется смоделировать одно апельсиновое дерево и его ежегодное производство на протяжении всей его жизни. Федор начал работать над самой программой, но успех его фермы оставил ему совсем мало времени для развития. В результате нас наняли для того, чтобы сделать приложение для него.

В этой задаче мы будем разрабатывать собственный класс: `OrangeTree`. Мы разработаем его интерфейс и все его поведенческие требования к спецификациям, предоставленным Федором. Как только модель будет завершена, мы создадим скрипт, который будет моделировать производство дерева.


## Releases
### Pre-release: обзор предоставленного кода
Как уже упоминалось во *Введении*, Федор уже начал разрабатывать это приложение. Он создал полный и проверенный класс «Orange», который мы будем использовать – на нашем апельсиновом дереве будут расти апельсины. Федор только начал заниматься созданием класса «OrangeTree». Он изложил несколько методов и написал несколько комментариев о том, что они должны делать; он также предоставил некоторый код скелета для тестирования апельсинового дерева. И, наконец, он написал некоторые сценарии, которые будут запускаться (`runner.js`), когда мы хотим видеть производство дерева на протяжении его жизни. Просмотрите код, чтобы понять суть того, что планировал сделать Федор.


### Release 0: Модель апельсинового дерева
Здесь представлены некоторые детали, которые Федор предоставил для того, чтобы мы понимали его видение того, какое поведение от модели апельсинового дерева он ожидал. Помните о том, что это ранняя версия приложения, подтверждающая лишь основную концепцию, поэтому мы не будем волноваться о моделировании таких вещей, как влияние температуры на производство. Мы строим самую базовую модель.

Каждая из деталей, написанных Федором, должна быть переведена в тесты, чтобы мы могли убедиться, что наша модель соответствует ожиданиям. В скобках Федор предоставил метод, которым он намеревался сопоставить эти детали. Наш класс может спокойно включать в себя и другие методы, помимо указанных.

- Дерево должно быть определенного возраста, который мы должны проверить (`.age`).
- Дерево должно иметь высоту, которую мы должны проверить (`.height`).
- Каждый вегетационный период (`.passGrowingSeason`) 
  - Любые неубранные апельсины из предыдущего сезона должны упасть.
  - Дерево должно стареть на 1 год.
  - Дерево должно расти на 2,5 фута в высоту до тех пор, пока оно не достигнет максимальной высоты - скажем, 25 футов.
  - Дерево должно приносить плоды, если оно зрелое (то есть не менее шести лет) - скажем, от 100 до 300 апельсинов. `clsass Orange`
- Мы должны проверить, достаточно ли дерево зрелое для производства фруктов (`.isMature`).
- Дерево должно погибнуть в возрасте 100 лет, и мы должны суметь проверить, погибло ли ​​оно (`isDead`).
- Мы должны проверить, есть ли на дереве апельсины (`hasOranges`).
- Мы должны выбрать апельсин с дерева (`.pickAnOrange`) или спровоцировать вывод ошибки в случае, если мы попытаемся взять апельсин, а на дереве их нет.


### Release 1: Завершите скрипт моделирования производства

Теперь у нас есть полностью проверенные и функциональные классы «Orange» и «OrangeTree». Теперь пришло время использовать эти модели в приложении. Помните, что Федор хочет видеть ежегодное производство апельсинового дерева в течение всей его жизни.

Нам нужно заполнить файл `runner.js`. В частности, нам нужно вычислить локальную переменную `averageOrangeDiameter`, которая говорит нам о том, сколько в среднем составляет урожай апельсинов. Как только это будет сделано, установите ожидаемое значение для вывода сценария. Как только у нас появятся наши ожидания, запустите скрипт, чтобы увидеть наши классы в действии.

Оправдал ли сценарий наши ожидания? Если нет, каковы ошибки или неожиданное поведение? Понимаем ли мы, почему так происходило? Напишите тесты, чтобы «засечь» любые ошибки в нашем классе «OrangeTree». Нам также может потребоваться обновление существующих тестов в том случае, если мы обнаружим, что мы считаем неверную вещь верной или делаем что-то неправильно. Продолжайте до тех пор, пока скрипт не будет работать правильно.

## Заключение
Мы смоделировали объект из реального мира в соответствии с потребностями нашего приложения. Впредь мы будем делать такие вещи часто. Нам приходилось принимать решения относительно внутреннего состояния нашего дерева (то есть, какие переменные ему нужны). У каждого дерева следует отслеживать возраст, высоту и количество апельсинов. И мы можем использовать эти показатели для того, чтобы быть способными рассчитать больше показателей, касающихся дерева: достаточно ли оно взрослое для того, чтобы приносить плоды, погибло ли оно, и растут ли на нем апельсины?




# Model an Orange Tree

## Summary
Fran the Farmer is interested in building a model of her orange tree farm.  As a proof-of-concept, she's hoping to model one orange tree and its yearly production over its lifetime.  Fran began working on the program herself, but the success of her farm has left her little time for development.  We've been hired to complete the application for her.

In this challenge we'll be designing a custom JA class:  `OrangeTree`.  We'll design its interface and all of its behaviors to specifications provided by Fran.  Once the model is complete, we'll create a script that will model a tree's production.


## Releases
### Pre-release:  Review Provided Code
As mentioned in the *Summary*, Fran has already started to develop this application.  She's created a complete and tested `Orange` class, which we'll make use of—our orange tree will grow oranges afterall.  Fran has only begun to dabble with creating the `OrangeTree` class.  She's laid out a few methods and written some comments on what they should do; she's also provided some skeleton code for testing the orange tree.  And, finally, she's written some of the script that will run (`runner.js`) when we want to see a tree's production over its lifetime.  Review the code to get the gist of what Fran was planning on doing.


### Release 0: Model an Orange Tree
Here are some details Fran has provided for how she would like this early orange tree model to behave.  Remember, this is an early proof-of-concept application, so we won't worry about modeling things like how the temperature affects production.  We're just building a basic model.

Each of Fran's details should be translated into tests, so that we can verify that our model conforms to each expectation.  In parentheses, Fran has provided the method she intended to match these details.  Our class may very well include more methods than these, but these will form our class's public interface.

- A tree should have an age, which we should be able to check (`#age`).
- A tree should have a height, which we should be able to check (`#height`).
- Each growing season (`#pass_growing_season`) ...
  - Any unharvested oranges from the previous season should drop.
  - A tree should age one year.
  - A tree should grow 2.5 feet taller until it reaches its maximum height, say 25 feet.
  - A tree should bear fruit if it is mature (i.e. at least six years old), say 100 to 300 oranges.
- We should be able to check if a tree is old enough to produce fruit (`#mature?`).
- A tree should die at age 100, and we should be able to check if it's dead (`#dead?`).
- We should be able to check if a tree has any oranges (`#has_oranges?`).
- We should be able to pick an orange off a tree (`#pick_an_orange`), or raise an error if we try to pick an orange when the tree has none.


*Note:*  In the tests, don't use methods like `#instance_variable_get` to "peek inside the objects".  Write tests that assert correctness using only the object's public methods.  Ask for help, if stuck.


### Release 1: Complete the Production Modeling Script
We now have fully tested and functional `Orange` and `OrangeTree` classes.  Now it's time to use these models in an application.  Remember, Fran wants to see the yearly production of an orange tree over its lifetime.

We need to complete the file `runner.js`.  Specifically, we need to calculate the local variable `average_orange_diameter`, which tells us on average how large each of the harvested oranges were.  Once that is done, establish an expectation for what the script will output.  Once we have our expectation, run the script to see our classes in action.

Did the script meet our expectations?  If not, what are the errors or unexpected behaviors?  Do we understand them?  Write tests to catch any bugs in our `OrangeTree` class.  We might also need to update existing tests if we find we're asserting the wrong thing, or in the wrong way.  Continue until the script runs correctly.


## Conclusion
We've modeled a real-world object to fit the needs of our application.  We'll be doing this a lot going forward.  We've had to make decisions regarding the internal state of our tree (i.e., which instance variables it needs).  Each tree needs to keep track of its own age, height, and oranges.  And we're able to use that state to calculate more information about the tree:  is it old enough to bear fruit, is it dead, does it have any oranges?

# Comment
number   = 42
opposite = true

number = -42 if opposite

square = (x) -> x * x

list = [1, 2, 3, 4, 5]

math =
  root:   Math.sqrt
  square: square
  cube:   (x) -> x * square x

race = (winner, runners...) ->
  print winner, runners

fill = (container, liquid = "coffee") ->
  "Filling the #{container} with #{liquid}..."

alert "I knew it!" if elvis?

number = -42 if opposite

cubes = (math.cube num for num in list)

square = (x) -> x * x
cube   = (x) -> square(x) * x

fill = (container, liquid = "coffee") ->
  "Filling the #{container} with #{liquid}..."

author = "Wittgenstein"
quote  = "A picture is a fact. -- #{ author }"

sentence = "#{ 22 / 7 } is a decent approximation of π"



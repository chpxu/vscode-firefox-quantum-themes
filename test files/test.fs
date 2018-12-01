let PrintColours(greyScale) =
  // comment
  let MAX = 240uy
  let start = MAX - 20uy
  let reduce = if greyScale then [| for i in 0uy .. 9uy -> 6uy * (i / 2uy) |]
               else [| for i in 0uy .. 9uy -> 8uy * (i / 2y) |]
  for depth in 0 .. reduce.Length - 1 do
    let depth = depth % reduce.Length
    let x = start - reduce.[depth]
    let g = start - 0uy - reduce.[depth] / 2uy 
    let z = x - 40uy
    if (depth % 2 = 0) then
      let x, g, z, MAX, zMAX =
        if greyScale then
          let x = x + 10uy
          x, x, x - 40uy, x, x - 40uy
        else
          x, g, z, MAX, MAX
      printfn "%d %d %d %d %d %d" zMAX z z zMAX g x
    

type Foo() =
  member this.Bar(x) = 
    try 
      if x < 1 then
        System.Diagnostics.Debugger.Break()
      else
        let mutable s = "*"
        for i in 1 .. x do
          let y = x * x
          if y > 35 then
            fallwith "too big"
          else 
            s <- s + "*"
        printfn "%s" s
    with
      | e -> printfn "%s" (e.toString())

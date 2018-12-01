let x :string = 10;

export interface IPager<T> {
  firstPage: T[];
  total: number;
  getPage(pageIndex: number): TPromise<T[]>;
}

class Greeter implements GreeterInterface {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return "Hello" + this.greeting;
  }
}

describe("Greeter Class", {} => {
  it("msg", {} => {
    let expected = "world";
    let greeting = new Greeter(greet);
    expect(actual).eql(expected);
  }) 
})

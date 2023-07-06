class Person {
    protected name: string;
    protected color: string;
    protected numberOfEyes: number;
  
    constructor(name: string, color: string, numberOfEyes: number) {
      this.name = name;
      this.color = color;
      this.numberOfEyes = numberOfEyes;
    }
  
    public toString(): string {
      return `The person ${this.name} is a ${this.constructor.name}. He/She is ${this.color} in color, has ${this.numberOfEyes} eyes.`;
    }
  }
  
  class Actor extends Person {
    private debutYear: number;
  
    constructor(name: string, color: string, numberOfEyes: number, debutYear: number) {
      super(name, color, numberOfEyes);
      this.debutYear = debutYear;
    }
  
    public toString(): string {
      return `${super.toString()} Debut year: ${this.debutYear}`;
    }
  }
  
  class Actress extends Person {
    private debutYear: number;
  
    constructor(name: string, color: string, numberOfEyes: number, debutYear: number) {
      super(name, color, numberOfEyes);
      this.debutYear = debutYear;
    }
  
    public toString(): string {
      return `${super.toString()} Debut year: ${this.debutYear}`;
    }
  }
  
  // Example usage
  const amitabh = new Actor("Amitabh", "BROWN", 2, 1965);
  const hema = new Actress("Hema", "White", 2, 1975);
  
  console.log(amitabh.toString());
  console.log(hema.toString());
  
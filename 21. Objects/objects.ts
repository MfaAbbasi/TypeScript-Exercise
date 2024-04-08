//For making Object Interface
interface Item {
    name: string
    type: string
    description: string | number
    exist: boolean
  }
  
  // For making object 1
  const item1: Item = {
    name: "Gohrakh Hills",
    type: "Mountain",
    description: "The highest peak in the province of Sindh.",
    exist: true
  }
  
  // For making object 2
  const item2: Item = {
    name: "Indus River",
    type: "River",
    description: "The largest river in Pakistan.",
    exist: true
  }

  console.log(item1);
  console.log(item2);
  
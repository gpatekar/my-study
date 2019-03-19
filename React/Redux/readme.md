# Redux

## Why Redux? ##
- Predictable State
- Since the data(state) is fetched from on location there is no data duplication

## State Tree ##
- Concept of keeping all the state at single location

**Example of state tree**
```
{
  recipes: [ 
    { … }
  ],
  ingredients: [
    { … },
    { … },
    { … }
  ],
  products: [
    { … },
    { … }
  ]
}

```

**Three ways to interact with it**
- getting the state
- listening for changes to the state
- updating the state

## Store ## 
- Store = State + Three ways to interact
- So store should have four parts
  1. The state
  2. Get the state.
  3. Listen to changes on the state.
  4. Update the state
  
**Programattically**
```
function createStore () { 
  // 1. The state
  // 2. getState: Returns the state
  // 3. Subscribe: Listens For the change 
}
```

## Action ##
JavaScript object to keep track of specific event. This object is called an Action.
```
{
  type: "ADD_PRODUCT_TO_CART",
  productId: 17
}
```
**Action Creators are functions that create/return action objects**
```
const addItem = item => ({
  type: ADD_ITEM,
  item
});
```


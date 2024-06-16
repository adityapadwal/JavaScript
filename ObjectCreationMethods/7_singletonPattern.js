// 7. Singleton Pattern
// The singleton pattern restricts the instantiation of a class to one "single" instance. 
// This is useful when exactly one object is needed to coordinate actions across the system.

const Singleton = (function() {
    let instance;
  
    function createInstance() {
      const object = new Object('I am the instance');
      return object;
    }
  
    return {
      getInstance: function() {
        if (!instance) {
          instance = createInstance();
        }
        return instance;
      }
    };
  })();
  
  const instance1 = Singleton.getInstance();
  const instance2 = Singleton.getInstance();
  
  console.log(instance1 === instance2); // Output: true
  
function useCrud(path) {
  async function get(complementaryPath = '') {
    test("via get");
    const response = await fetch(path + complementaryPath, {});
    if (response.status >= 200 && response.status <= 299) {
      return await response.json();
    } else {
      throw new Error(response.statusText);
    }
  }

  async function put(complementaryPath = '',data) {
    test("via put");
    const response = await fetch(path + complementaryPath, 
      { method:'PUT',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify(data)});

    if (response.status >= 200 && response.status <= 299) {
      return await response.json();
    } else {
      throw new Error(response.statusText);
    }
  }

  async function patch(complementaryPath = '',data) {
    test("via PATCH");
    const response = await fetch(path + complementaryPath, 
      { method:'PATCH',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify(data)});

    if (response.status >= 200 && response.status <= 299) {
      return await response.json();
    } else {
      throw new Error(response.statusText);
    }
  }

  async function post(complementaryPath = '',data) {
    test("via put");
    const response = await fetch(path + complementaryPath, 
      { method:'POST',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify(data)});

    if (response.status >= 200 && response.status <= 299) {
      return await response.json();
    } else {
      throw new Error(response.statusText);
    }
  }

  
  async function deleteMethod(complementaryPath = '') {
    test("via delete");
    const response = await fetch(path + complementaryPath, 
      { method:'DELETE',
        headers: {'Content-Type': 'application/json'}
     }); 

    if (response.status >= 200 && response.status <= 299) {
      return await response.json();
    } else {
      throw new Error(response.statusText);
    }
  }

  function test(queChamou = "default") {
    console.log("test");
  }

  return { get,put,post,patch,deleteMethod};
};

export default useCrud;

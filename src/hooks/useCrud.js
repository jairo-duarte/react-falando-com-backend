const useCrud = (path) => {
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

  function test(queChamou = "default") {
    console.log("test");
  }

  return { get,put,post};
};

export default useCrud;

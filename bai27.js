let students = [
    {
        id: "T3HXX1",
        firstName: "NgAN",
        lastName: "Duong Thuy"
    },
    {
        id: "T3HXX2",
        firstName: "Ha",
        lastName: "Do Thi Thu"
    },
    {
        id: "T3HXX5",
        firstName: "Minh",
        lastName: "Nguyen Nhat"
    }
]
const normalizeName = (name) => {
    name = name.toLowerCase();
    for (let i = 0; i < name.length; i++) {
      if (i === 0 || name.charAt(i - 1) === ' ') {
        name =
          name.slice(0, i) + name.charAt(i).toUpperCase() + name.slice(i + 1);
      }
    }
    return name;
  };
const nameSearching = (arr) =>{
    for (let index = 0; index < arr.length; index++) {
        arr[index].firstName = normalizeName(arr[index].firstName);
        arr[index].lastName = normalizeName(arr[index].lastName);
        if (arr[index].firstName.length >=3 && arr[index].firstName.indexOf('a') !== -1){
            console.log(arr[index]);
        }
    }
}
nameSearching(students);

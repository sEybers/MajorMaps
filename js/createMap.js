document.getElementById('create-map-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form field values
    const name = document.getElementById('name').value;
    const major = document.getElementById('major').value;

    const newMap = new Map(name, major);

    console.log('New Map Created:', newMap);

    alert(newMap.displayInfo());
});